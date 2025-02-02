import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

export interface CompareResult {
	diffPixelsCount: number;
	diffImg: PNG;
}

export function compareScreenshots(leftImg: PNG, rightImg: PNG): CompareResult {
	if (leftImg.width !== rightImg.width) {
		throw new Error('image widths should be the same');
	}

	if (leftImg.height !== rightImg.height) {
		throw new Error('image widths should be the same');
	}

	const diffImg = new PNG({
		width: leftImg.width,
		height: rightImg.height,
	});

	const diffPixelsCount = pixelmatch(
		leftImg.data, rightImg.data,
		diffImg.data,
		leftImg.width, leftImg.height,
		{ threshold: 0.1 }
	);

	return { diffPixelsCount, diffImg };
}
