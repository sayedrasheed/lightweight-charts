/// <reference types="node" />
import { expect } from 'chai';
import * as fs from 'node:fs';
import * as path from 'node:path';
import {
	after,
	before,
	describe,
	it,
} from 'node:test';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

import { retryTest } from '../helpers/retry-tests';

import { compareScreenshots } from './helpers/compare-screenshots';
import { getTestCases, TestCase } from './helpers/get-test-cases';
import { Screenshoter } from './helpers/screenshoter';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);

const TEST_CASE_TIMEOUT = 5000;
const NUMBER_RETRIES = 3;

const dummyContent = fs.readFileSync(path.join(currentDirectory, 'helpers', 'test-page-dummy.html'), { encoding: 'utf-8' });
const resizeObserverPolyfill = fs.readFileSync(
	path.join(currentDirectory, ...'../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js'.split('/')),
	{ encoding: 'utf-8' }
).replace(/global\.ResizeObserver/g, 'global.ResizeObserverPolyfill') + '; window.ResizeObserver = window.ResizeObserverPolyfill.ResizeObserver';
const buildMode = process.env.PRODUCTION_BUILD === 'true' ? 'production' : 'development';

function generatePageContent(standaloneBundlePath: string, testCaseCode: string): string {
	return dummyContent
		.replace('//RESIZE_OBSERVER_POLYFILL', resizeObserverPolyfill)
		.replace('PATH_TO_STANDALONE_MODULE', standaloneBundlePath)
		.replace('TEST_CASE_SCRIPT', testCaseCode)
		.replace('{BUILD_MODE}', buildMode)
	;
}

const goldenStandalonePathEnvKey = 'GOLDEN_STANDALONE_PATH';
const testStandalonePathEnvKey = 'TEST_STANDALONE_PATH';

let devicePixelRatio = process.env.DEVICE_PIXEL_RATIO ? parseFloat(process.env.DEVICE_PIXEL_RATIO) : 1;
if (isNaN(devicePixelRatio)) {
	devicePixelRatio = 1;
}

const devicePixelRatioStr = devicePixelRatio.toFixed(2);

const testResultsOutDir = path.resolve(process.env.CMP_OUT_DIR || path.join(currentDirectory, '.gendata'));
const goldenStandalonePath: string = process.env[goldenStandalonePathEnvKey] || '';
const testStandalonePath: string = process.env[testStandalonePathEnvKey] || '';

function withTimeout<P>(promise: Promise<P>, ms: number): Promise<P> {
	const timeoutPromise = new Promise<P>(
		(
			resolve: (value: P | PromiseLike<P>) => void,
			reject: (reason?: unknown) => void
		) => {
			setTimeout(() => reject(new Error(`Operation timed out after ${ms} ms`)), ms);
		}
	);
	return Promise.race([promise, timeoutPromise]);
}

function rmRf(dir: string): void {
	if (!fs.existsSync(dir)) {
		return;
	}

	fs.readdirSync(dir).forEach((file: string) => {
		const filePath = path.join(dir, file);
		if (fs.lstatSync(filePath).isDirectory()) {
			rmRf(filePath);
		} else {
			fs.unlinkSync(filePath);
		}
	});

	fs.rmdirSync(dir);
}

function removeEmptyDirsRecursive(rootDir: string): void {
	if (!fs.existsSync(rootDir)) {
		return;
	}

	fs.readdirSync(rootDir).forEach((file: string) => {
		const filePath = path.join(rootDir, file);
		if (fs.lstatSync(filePath).isDirectory()) {
			removeEmptyDirsRecursive(filePath);
		}
	});

	if (fs.readdirSync(rootDir).length === 0) {
		fs.rmdirSync(rootDir);
	}
}

void describe(`Graphics tests with devicePixelRatio=${devicePixelRatioStr} (${buildMode} mode)`, () => {
	const testCases = getTestCases();

	before(() => {
		rmRf(testResultsOutDir);
		fs.mkdirSync(testResultsOutDir, { recursive: true });

		expect(goldenStandalonePath, `path to golden standalone module must be passed via ${goldenStandalonePathEnvKey} env var`)
			.to.have.length.greaterThan(0);

		expect(testStandalonePath, `path to golden standalone module must be passed via ${testStandalonePathEnvKey} env var`)
			.to.have.length.greaterThan(0);
	});

	const screenshoter = new Screenshoter(Boolean(process.env.NO_SANDBOX), devicePixelRatio);

	const currentDprOutDir = path.join(testResultsOutDir, `devicePixelRatio=${devicePixelRatioStr}`);

	for (const groupName of Object.keys(testCases)) {
		const currentGroupOutDir = path.join(currentDprOutDir, groupName);

		if (groupName.length === 0) {
			registerTestCases(testCases[groupName], screenshoter, currentGroupOutDir);
		} else {
			void describe(groupName, () => {
				registerTestCases(testCases[groupName], screenshoter, currentGroupOutDir);
			});
		}
	}

	after(async () => {
		await screenshoter.close();
		removeEmptyDirsRecursive(testResultsOutDir);
	});
});

function registerTestCases(testCases: TestCase[], screenshoter: Screenshoter, outDir: string): void {
	const attempts: Record<string, number> = {};
	testCases.forEach((testCase: TestCase) => {
		attempts[testCase.name] = 0;
	});

	for (const testCase of testCases) {
		void it(testCase.name, { timeout: TEST_CASE_TIMEOUT * NUMBER_RETRIES + 1000 }, async () => {
			await retryTest(NUMBER_RETRIES, async () => {
				const previousAttempts = attempts[testCase.name];
				attempts[testCase.name] += 1;

				const testCaseOutDir = path.join(outDir, testCase.name);
				rmRf(testCaseOutDir);
				fs.mkdirSync(testCaseOutDir, { recursive: true });

				function writeTestDataItem(fileName: string, fileContent: string | Buffer): void {
					fs.writeFileSync(path.join(testCaseOutDir, fileName), fileContent);
				}

				const goldenPageContent = generatePageContent(goldenStandalonePath, testCase.caseContent);
				const testPageContent = generatePageContent(testStandalonePath, testCase.caseContent);

				writeTestDataItem('1.golden.html', goldenPageContent);
				writeTestDataItem('2.test.html', testPageContent);

				const errors: string[] = [];
				const failedPages: string[] = [];

				// run in parallel to increase speed
				const goldenScreenshotPromise = withTimeout(screenshoter.generateScreenshot(goldenPageContent), TEST_CASE_TIMEOUT);

				if (previousAttempts) {
					try {
						// If a test has previously failed then attempt to run the tests in series (one at a time).
						await goldenScreenshotPromise;
					} catch {
						// error will be caught again below and handled correctly there.
					}
				}

				const testScreenshotPromise = withTimeout(screenshoter.generateScreenshot(testPageContent), TEST_CASE_TIMEOUT);

				let goldenScreenshot: PNG | null = null;
				try {
					goldenScreenshot = await goldenScreenshotPromise;
					writeTestDataItem('1.golden.png', PNG.sync.write(goldenScreenshot));
				} catch (e: unknown) {
					errors.push(`=== Golden page ===\n${(e as Error).message}`);
					failedPages.push('golden');
				}

				let testScreenshot: PNG | null = null;
				try {
					testScreenshot = await testScreenshotPromise;
					writeTestDataItem('2.test.png', PNG.sync.write(testScreenshot));
				} catch (e: unknown) {
					errors.push(`=== Test page ===\n${(e as Error).message}`);
					failedPages.push('test');
				}

				if (goldenScreenshot !== null && testScreenshot !== null) {
					const compareResult = compareScreenshots(goldenScreenshot, testScreenshot);

					writeTestDataItem('3.diff.png', PNG.sync.write(compareResult.diffImg));

					expect(compareResult.diffPixelsCount).to.be.equal(0, 'number of different pixels must be 0');
				} else {
					writeTestDataItem('3.errors.txt', errors.join('\n\n'));
					throw new Error(
						`The error(s) happened while generating a screenshot for the page(s): ${failedPages.join(', ')}.
	See ${testCaseOutDir} directory for an output of the test case.`
					);
				}

				rmRf(testCaseOutDir);
			});
		});
	}
}
