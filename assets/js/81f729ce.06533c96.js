"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6200,7918],{440:(M,t,L)=>{L.d(t,{ZP:()=>e});var N=L(7462),u=(L(7294),L(3905));const j={toc:[]};function e(M){let{components:t,...L}=M;return(0,u.kt)("wrapper",(0,N.Z)({},j,L,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("details",null,(0,u.kt)("summary",null,"How to use the code sample"),(0,u.kt)("strong",null,"The code presented below requires:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"That ",(0,u.kt)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,u.kt)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,u.kt)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,u.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,u.kt)("inlineCode",{parentName:"li"},"container"),".")),(0,u.kt)("p",null,"Here is an example skeleton setup: ",(0,u.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,u.kt)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,u.kt)("admonition",{type:"tip"},(0,u.kt)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}e.isMDXComponent=!0},9002:(M,t,L)=>{L.r(t),L.d(t,{assets:()=>A,contentTitle:()=>g,default:()=>i,frontMatter:()=>I,metadata:()=>y,toc:()=>T});var N=L(7462),u=(L(7294),L(3905)),j=L(440),e=L(8007);const I={title:"Watermark",sidebar_label:"Watermark",description:"Examples of how to add a watermark to your chart.",pagination_prev:null,pagination_next:null,keywords:["watermark","example"]},g=void 0,y={unversionedId:"how_to/watermark",id:"how_to/watermark",title:"Watermark",description:"Examples of how to add a watermark to your chart.",source:"@site/tutorials/how_to/watermark.mdx",sourceDirName:"how_to",slug:"/how_to/watermark",permalink:"/lightweight-charts/tutorials/how_to/watermark",draft:!1,tags:[],version:"current",frontMatter:{title:"Watermark",sidebar_label:"Watermark",description:"Examples of how to add a watermark to your chart.",pagination_prev:null,pagination_next:null,keywords:["watermark","example"]},sidebar:"tutorialsSidebar"},A={},T=[{value:"Short answer",id:"short-answer",level:2},{value:"Resources",id:"resources",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple Watermark Example",id:"simple-watermark-example",level:3},{value:"Advanced Watermark Example",id:"advanced-watermark-example",level:3}],a={toc:T};function i(M){let{components:t,...L}=M;return(0,u.kt)("wrapper",(0,N.Z)({},a,L,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Lightweight charts has a built-in feature for displaying simple text watermarks on your chart.\nThis example shows how to configure and add this simple text watermark to your chart.\nIf you are looking to add a more complex watermark then have a look at the ",(0,u.kt)("a",{parentName:"p",href:"#advanced-watermark-example"},"advanced watermark example"),"\nincluded below."),(0,u.kt)("h2",{id:"short-answer"},"Short answer"),(0,u.kt)("p",null,"A simple text watermark can be configured and added by specifying the ",(0,u.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ChartOptions#watermark"},(0,u.kt)("inlineCode",{parentName:"a"},"watermark"))," property within\nthe chart options as follows:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"chart.applyOptions({\n    watermark: {\n        visible: true,\n        fontSize: 24,\n        horzAlign: 'center',\n        vertAlign: 'center',\n        color: 'rgba(171, 71, 188, 0.5)',\n        text: 'Watermark Example',\n    },\n});\n")),(0,u.kt)("p",null,"The options available for the watermark are: ",(0,u.kt)("a",{parentName:"p",href:"/docs/api/interfaces/WatermarkOptions"},"Watermark Options"),"."),(0,u.kt)("p",null,"To have the watermark appear, you need to set ",(0,u.kt)("inlineCode",{parentName:"p"},"visible")," to ",(0,u.kt)("inlineCode",{parentName:"p"},"true")," and ensure that the ",(0,u.kt)("inlineCode",{parentName:"p"},"text")," property isn't empty."),(0,u.kt)("p",null,"You can see full ",(0,u.kt)("a",{parentName:"p",href:"#examples"},"working examples")," below."),(0,u.kt)("h2",{id:"resources"},"Resources"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/api/interfaces/WatermarkOptions"},"Watermark Options"))),(0,u.kt)("h2",{id:"examples"},"Examples"),(0,u.kt)(j.ZP,{mdxType:"UsageGuidePartial"}),(0,u.kt)("h3",{id:"simple-watermark-example"},"Simple Watermark Example"),(0,u.kt)(e.Z,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},"// remove-start\n// Lightweight Charts Example: Watermark Simple\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/watermark\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\n// highlight-start\nchart.applyOptions({\n\twatermark: {\n\t\tvisible: true,\n\t\tfontSize: 24,\n\t\thorzAlign: 'center',\n\t\tvertAlign: 'center',\n\t\tcolor: 'rgba(171, 71, 188, 0.5)',\n\t\ttext: 'Watermark Example',\n\t},\n});\n// highlight-end\n\nconst lineSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n});\n\nconst data = [\n\t{ value: 0, time: 1642425322 },\n\t// hide-start\n\t{ value: 8, time: 1642511722 },\n\t{ value: 10, time: 1642598122 },\n\t{ value: 20, time: 1642684522 },\n\t{ value: 3, time: 1642770922 },\n\t{ value: 43, time: 1642857322 },\n\t{ value: 41, time: 1642943722 },\n\t{ value: 43, time: 1643030122 },\n\t{ value: 56, time: 1643116522 },\n\t{ value: 46, time: 1643202922 },\n\t// hide-end\n];\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n"),(0,u.kt)("h3",{id:"advanced-watermark-example"},"Advanced Watermark Example"),(0,u.kt)("p",null,"If a simple text watermark doesn't meet your requirements then you can use the following tips\nto rather create your own custom watermark using ",(0,u.kt)("inlineCode",{parentName:"p"},"html")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"css"),"."),(0,u.kt)("p",null,"We will first set the ",(0,u.kt)("inlineCode",{parentName:"p"},"background")," color of the chart to ",(0,u.kt)("inlineCode",{parentName:"p"},"transparent")," so that we can\nplace our custom watermark underneath the chart and still see it."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"chart.applyOptions({\n    layout: {\n        // set chart background color to transparent so we can see the elements below\n        // highlight-next-line\n        background: { type: 'solid', color: 'transparent' },\n    },\n});\n")),(0,u.kt)("p",null,"Next we will create a ",(0,u.kt)("inlineCode",{parentName:"p"},"div")," element, and attach it as a child of the ",(0,u.kt)("inlineCode",{parentName:"p"},"container")," element which is holding the chart."),(0,u.kt)("p",null,"By setting the ",(0,u.kt)("inlineCode",{parentName:"p"},"zIndex")," value for this div to be negative it will appear beneath the chart."),(0,u.kt)("p",null,"We will position the div using ",(0,u.kt)("inlineCode",{parentName:"p"},"display: absolute")," and by setting ",(0,u.kt)("inlineCode",{parentName:"p"},"inset: 0px")," the div will fill the container."),(0,u.kt)("p",null,"You can then style the div to meet your specific needs."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const container = document.getElementById('container');\nconst background = document.createElement('div');\n// place below the chart\nbackground.style.zIndex = -1;\nbackground.style.position = 'absolute';\n// set size and position to match container\nbackground.style.inset = '0px';\nbackground.style.backgroundImage = `url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjkyIDEyOCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTgyLjkzIDcuNi42My0uMzdhNjQuMSA2NC4xIDAgMCAwIDIuNDMtNS4zMWw0Ljc3LTEuMzlhNjQuNjggNjQuNjggMCAwIDEtNC43MiAxMC41NGMuMzggMTAuNDUtMy45MyAyMS4xNS0xMS4xIDI5LjM3LTExLjY2IDEzLjQxLTI2Ljk4IDE1Ljk3LTQzLjU3IDEzLjc4bDEuMDctLjk4YTIxLjEgMjEuMSAwIDAgMCAzLjcyLTQuMDUgNDguMzcgNDguMzcgMCAwIDEtMTEuMDQgMi44NGMtMTAuNjUtNS41NC0yMS42NC0xNC45NC0yNC4yNy0yNy4yNyA5LjE5LTE3IDI4Ljk1LTI0LjAxIDQ3LjM5LTE5Ljk0YTIyLjU3IDIyLjU3IDAgMCAwIDUuODYgOS4wMmMtLjEyLTEuOTItLjEtMy44NC0uMS01Ljc2bC4wMS0xLjc4YzQuOCAyLjk2IDkuNjYgNS44NSAxNS41MiA1LjcgNC4wOC0uMSA4LjQtMS41MiAxMy40LTQuNFptLTIyLjU1IDIzLjI4YTguNDggOC40OCAwIDAgMC0xMi40NS0uMzNsLTcuOS03LjI2QTguNiA4LjYgMCAwIDAgMTMyIDEyYy02LjE0IDAtMTAuMjUgNi42My03LjcgMTIuMDlsLTEzLjAyIDEyLjE5Yy00LjEtNC45Ny01LjY4LTkuMy02LjE3LTEwLjk0IDguMzYtMTMuNzIgMjQuNDYtMjAuMTggNDAuMTUtMTcuMDcgMi45MyA2LjkgOC4zOCAxMC43MiAxNC43NyAxMy45NmwtLjMzLTEuMTRjLS43NC0yLjU2LTEuNDctNS4xLTEuNjItNy43OCA3LjA1IDMuNDUgMTQuNiAzLjM1IDIxLjc2LjMxLTQuNzYgNy4yNy0xMS4xMyAxNC4yMi0xOS40NiAxNy4yNlptLTIyLjU2LTQuMTkgOC4wMyA3LjM4QTguNiA4LjYgMCAwIDAgMTU0IDQ1YTguNiA4LjYgMCAwIDAgOC4yNS0xMC41NWM3Ljk5LTMuMDggMTQuMzctOS4zOCAxOS4yOC0xNi4yMy0zLjQ3IDE5LjQ3LTIxLjk2IDM0LjYxLTQxLjkgMzIuOTggMS43Ny0yLjg0IDIuNDktNi4wNiAzLjIxLTkuMjhsLjM1LTEuNTZjLTUuNDcgMy43Ny0xMC42NyA2LjM4LTE3LjM3IDcuNTJhNDkuOSA0OS45IDAgMCAxLTExLjg1LTguNjVsMTIuODMtMTJhOC41OCA4LjU4IDAgMCAwIDExLjAyLS41NFpNMTMyIDE2YTQuNSA0LjUgMCAxIDAgMCA5IDQuNSA0LjUgMCAwIDAgMC05Wm0xNy41IDIwLjVhNC41IDQuNSAwIDEgMSA5IDAgNC41IDQuNSAwIDAgMS05IDBaTTIxLjYzIDcxLjhhMi4zMyAyLjMzIDAgMCAxIDIuMzMgMi4zNCAyLjM0IDIuMzQgMCAwIDEtMi4zMyAyLjM3IDIuMzggMi4zOCAwIDAgMS0yLjM3LTIuMzcgMi4zOCAyLjM4IDAgMCAxIDIuMzctMi4zM1ptMS43NiA4LjJ2MTZoLTMuNTJWODBoMy41MlptLTYuNDYgMTZIMi43OFY3My4yOGgzLjc1djE5LjE0aDEwLjRWOTZabTI2LjM5LTEuMDlWODBIMzkuOHYyLjE0YTYuMjYgNi4yNiAwIDAgMC01LjEyLTIuNDZjLTQuMzIgMC03LjY4IDMuNTgtNy42OCA4LjEgMCA0LjU0IDMuMzYgOC4xMiA3LjY4IDguMTIgMi4yIDAgNC4xNi0xLjA4IDUuMTItMi41djEuNDhjMCAzLjIzLTIuMTggNS00LjgzIDVhNy4wMyA3LjAzIDAgMCAxLTUuMzItMi4zNGwtMi4xNCAyLjUyYzEuNTcgMS43NiA0LjM1IDIuOTUgNy40OSAyLjk1IDQuNzMgMCA4LjMyLTIuNTMgOC4zMi04LjFabS0xMi43Ny03LjEzYTQuNyA0LjcgMCAwIDEgNC43Ny00LjkgNC43IDQuNyAwIDAgMSA0Ljc3IDQuOSA0LjcgNC43IDAgMCAxLTQuNzcgNC45IDQuNyA0LjcgMCAwIDEtNC43Ny00LjlaTTUxLjU4IDk2aC0zLjUyVjcyaDMuNTJ2MTAuMThjLjk2LTEuNiAyLjc4LTIuNSA0Ljg2LTIuNSAzLjcxIDAgNi4xMSAyLjYyIDYuMTEgNi42OVY5NmgtMy41MnYtOS4wNmMwLTIuNTItMS4yOC00LjA2LTMuMzMtNC4wNi0yLjMzIDAtNC4xMiAxLjgyLTQuMTIgNS4yNVY5NlptMjQuODYtLjJ2LTMuMTNjLS41Mi4yLTEuMjIuMzItMS45LjMyLTEuODIgMC0yLjY4LS43My0yLjY4LTIuNzJ2LTcuMTNoNC41OFY4MGgtNC41OHYtNC40NWgtMy41MlY4MGgtMy4zM3YzLjE0aDMuMzN2Ny43YzAgMy42MiAyLjQgNS4zMiA1LjQ3IDUuMzIgMS4wOSAwIDEuOTItLjEzIDIuNjMtLjM1Wm0yMC4zLjJIOTMuNGwtMy41Mi0xMC4zN0w4Ni4zOSA5NmgtMy4zMmwtNS4zOC0xNmgzLjcybDMuNDUgMTEgMy42OC0xMWgyLjY5bDMuNjUgMTEgMy40OS0xMWgzLjc0bC01LjM4IDE2Wm02Ljc2LThjMCA0Ljg2IDMuNDkgOC4zMiA4LjM1IDguMzIgMy4zNiAwIDUuODYtMS40NCA3LjMtMy43MWwtMi43LTEuOTJhNS4wMyA1LjAzIDAgMCAxLTQuNTcgMi40M2MtMi42NSAwLTQuNzctMS43My00LjkzLTQuMzVoMTIuNThjLjAzLS41MS4wMy0uOC4wMy0xLjE1IDAtNS4xNi0zLjUyLTcuOTQtNy43MS03Ljk0QTguMTIgOC4xMiAwIDAgMCAxMDMuNSA4OFptOC4yMi01LjM0YzIuMDUgMCAzLjkgMS4yNCA0LjI5IDMuNTVoLTguOWMuNDgtMi4zNyAyLjU2LTMuNTUgNC42MS0zLjU1Wm0xMy4yMi0xMC44NWEyLjMzIDIuMzMgMCAwIDEgMi4zNCAyLjMzIDIuMzQgMi4zNCAwIDAgMS0yLjM0IDIuMzcgMi4zOCAyLjM4IDAgMCAxLTIuMzctMi4zNyAyLjM4IDIuMzggMCAwIDEgMi4zNy0yLjMzWm0yMS43IDIzLjFWODBoLTMuNTN2Mi4xNGE2LjI2IDYuMjYgMCAwIDAtNS4xMi0yLjQ2Yy00LjMyIDAtNy42OCAzLjU4LTcuNjggOC4xIDAgNC41NCAzLjM2IDguMTIgNy42OCA4LjEyIDIuMiAwIDQuMTYtMS4wOCA1LjEyLTIuNXYxLjQ4YzAgMy4yMy0yLjE4IDUtNC44MyA1YTcuMDMgNy4wMyAwIDAgMS01LjMxLTIuMzRsLTIuMTUgMi41MmMxLjU3IDEuNzYgNC4zNiAyLjk1IDcuNSAyLjk1IDQuNzMgMCA4LjMxLTIuNTMgOC4zMS04LjFaTTEyNi43IDk2aC0zLjUyVjgwaDMuNTJ2MTZabTcuMTYtOC4yMmE0LjcgNC43IDAgMCAxIDQuNzctNC45IDQuNyA0LjcgMCAwIDEgNC43NyA0LjkgNC43IDQuNyAwIDAgMS00Ljc3IDQuOSA0LjcgNC43IDAgMCAxLTQuNzctNC45Wk0xNTQuOSA5NmgtMy41MlY3MmgzLjUydjEwLjE4Yy45Ni0xLjYgMi43OC0yLjUgNC44Ni0yLjUgMy43MSAwIDYuMTEgMi42MiA2LjExIDYuNjlWOTZoLTMuNTJ2LTkuMDZjMC0yLjUyLTEuMjgtNC4wNi0zLjMyLTQuMDYtMi4zNCAwLTQuMTMgMS44Mi00LjEzIDUuMjVWOTZabTI0Ljg2LS4ydi0zLjEzYy0uNTEuMi0xLjIyLjMyLTEuODkuMzItMS44MiAwLTIuNjktLjczLTIuNjktMi43MnYtNy4xM2g0LjU4VjgwaC00LjU4di00LjQ1aC0zLjUyVjgwaC0zLjMzdjMuMTRoMy4zM3Y3LjdjMCAzLjYyIDIuNCA1LjMyIDUuNDcgNS4zMiAxLjEgMCAxLjkyLS4xMyAyLjYzLS4zNVptMjEuNTkuNThhMTEuNjcgMTEuNjcgMCAwIDEtMTEuNzUtMTEuNzRjMC02LjU2IDUuMjItMTEuNzQgMTEuNzUtMTEuNzQgNC40NSAwIDguMjIgMi4yNyAxMC4yNCA1Ljc2bC0zLjIzIDEuODVhNy45NCA3Ljk0IDAgMCAwLTcuMDEtNCA3Ljk2IDcuOTYgMCAwIDAtNy45NyA4LjEzIDcuOTYgNy45NiAwIDAgMCA3Ljk3IDguMTMgNy45NCA3Ljk0IDAgMCAwIDctNGwzLjI0IDEuODVhMTEuNjYgMTEuNjYgMCAwIDEtMTAuMjQgNS43NlptMTMuNC0uMzhoMy41MnYtNy44N2MwLTMuNDMgMS44LTUuMjUgNC4xMy01LjI1IDIuMDUgMCAzLjMzIDEuNTQgMy4zMyA0LjA2Vjk2aDMuNTJ2LTkuNjNjMC00LjA3LTIuNC02LjY5LTYuMTEtNi42OS0yLjA4IDAtMy45LjktNC44NyAyLjVWNzJoLTMuNTJ2MjRabTI1LjU2LjMyYy00LjM4IDAtNy43LTMuNzQtNy43LTguMzJzMy4zMi04LjMyIDcuNy04LjMyYzIuMyAwIDQuMjMgMS4xOCA1LjEyIDIuNDZWODBoMy41MnYxNmgtMy41MnYtMi4xNGE2LjM4IDYuMzggMCAwIDEtNS4xMiAyLjQ2Wm0uNjQtMy4yYzIuODUgMCA0Ljc3LTIuMjQgNC43Ny01LjEycy0xLjkyLTUuMTItNC43Ny01LjEyYy0yLjg0IDAtNC43NiAyLjI0LTQuNzYgNS4xMnMxLjkxIDUuMTIgNC43NiA1LjEyWk0yNTMuNzEgOTZoMy41MnYtNy44YzAtMy4yIDEuODMtNC45IDMuODQtNC45LjY0IDAgMS4xNS4xIDEuNzYuMjh2LTMuNjFjLS40OC0uMS0uOTMtLjEzLTEuMzctLjEzYTQuNSA0LjUgMCAwIDAtNC4yMyAzVjgwaC0zLjUydjE2Wm0yMS43My0zLjMzdjMuMTRjLS43LjIyLTEuNTQuMzUtMi42My4zNS0zLjA3IDAtNS40Ny0xLjctNS40Ny01LjMxdi03LjcxaC0zLjMzVjgwaDMuMzN2LTQuNDVoMy41MlY4MGg0LjU4djMuMTRoLTQuNTh2Ny4xM2MwIDEuOTkuODYgMi43MiAyLjY5IDIuNzIuNjcgMCAxLjM3LS4xMyAxLjg5LS4zMlptMTQuMjEtMS4zMWMwLTIuNjItMS42Ni00LjAzLTQuNDgtNC44NmwtMS42My0uNDhjLTEuNTctLjQ1LTEuOTItMS4xMi0xLjkyLTEuOSAwLS45NSAxLjA5LTEuNSAyLjE1LTEuNSAxLjMgMCAyLjMzLjY0IDMuMDQgMS42NGwyLjQzLTEuODZjLTEuMTItMS43Ni0zLjAxLTIuNzItNS40MS0yLjcyLTMuMiAwLTUuNyAxLjczLTUuNzMgNC41OC0uMDMgMi4zNiAxLjQxIDQuMTIgNC4yIDQuOWwxLjQuMzhjMS45Mi41NyAyLjQ3IDEuMTIgMi40NyAyLjA0IDAgMS4xMi0xLjA2IDEuNy0yLjMgMS43LTEuNjQgMC0zLjItLjgtMy44NS0yLjJsLTIuNTkgMS44NWMxLjE1IDIuMjcgMy41OCAzLjM5IDYuNDMgMy4zOSAzLjMgMCA1LjgtMS44OSA1LjgtNC45NlptLTE0My4zOCAyMS40YzAgLjQ2LS4zNy44NC0uODMuODRhLjg2Ljg2IDAgMCAxLS44Ny0uODVjMC0uNDYuMzktLjg1Ljg3LS44NS40NiAwIC44My4zOS44My44NVptLS4yOSAxMS4yNGgtMS4xMnYtOGgxLjEydjhabS01Mi4wMi4xNmE0LjA0IDQuMDQgMCAwIDAgMy45OC00LjE2IDQuMDQgNC4wNCAwIDAgMC0zLjk4LTQuMTZjLTEuMjQgMC0yLjM5LjY0LTIuOTYgMS41VjExMmgtMS4xMnYxMkg5MXYtMS4zNGMuNTcuODYgMS43MiAxLjUgMi45NiAxLjVabS0uMTItMS4wNGMtMS43NCAwLTIuOTQtMS40LTIuOTQtMy4xMiAwLTEuNzMgMS4yLTMuMTIgMi45NC0zLjEyIDEuNzUgMCAyLjk1IDEuNCAyLjk1IDMuMTIgMCAxLjczLTEuMiAzLjEyLTIuOTUgMy4xMlptNy45IDQuMjIgNS4zLTExLjM0aC0xLjI2bC0yLjkzIDYuMzUtMi45My02LjM1aC0xLjI0bDMuNTUgNy42LTEuNzYgMy43NGgxLjI2Wk0xMTUuMyAxMjRoLTEuMnYtMTAuMmgtMy42OHYtMS4xNmg4LjU2djEuMTVoLTMuNjhWMTI0Wm0zLjgyIDBoMS4xMnYtNC4wMmMwLTIuMDQgMS4yMy0yLjk0IDIuMjItMi45NC4yNCAwIC40NS4wMy42Ny4xMXYtMS4xN2EyLjQ0IDIuNDQgMCAwIDAtMi45IDEuNjZWMTE2aC0xLjExdjhabTExLjcyLTEuMzRhMy42NCAzLjY0IDAgMCAxLTIuOTYgMS41IDQuMDQgNC4wNCAwIDAgMS0zLjk4LTQuMTYgNC4wNCA0LjA0IDAgMCAxIDMuOTgtNC4xNmMxLjIzIDAgMi4zOS42NCAyLjk2IDEuNVYxMTZoMS4xMnY4aC0xLjEydi0xLjM0Wm0tNS44LTIuNjZjMCAxLjczIDEuMiAzLjEyIDIuOTUgMy4xMiAxLjc1IDAgMi45NS0xLjQgMi45NS0zLjEyIDAtMS43My0xLjItMy4xMi0yLjk1LTMuMTItMS43NCAwLTIuOTQgMS40LTIuOTQgMy4xMlptMTIuOTggNC4xNmMxLjIzIDAgMi4zOS0uNjQgMi45Ni0xLjVWMTI0aDEuMTJ2LTEySDE0MXY1LjM0YTMuNjQgMy42NCAwIDAgMC0yLjk2LTEuNSA0LjA0IDQuMDQgMCAwIDAtMy45OCA0LjE2IDQuMDQgNC4wNCAwIDAgMCAzLjk4IDQuMTZabS4xMS0xLjA0Yy0xLjc0IDAtMi45NC0xLjQtMi45NC0zLjEyIDAtMS43MyAxLjItMy4xMiAyLjk0LTMuMTIgMS43NSAwIDIuOTUgMS40IDIuOTUgMy4xMiAwIDEuNzMtMS4yIDMuMTItMi45NSAzLjEyWm0xMC42Ljg4aDEuMTF2LTMuOThjMC0xLjk5IDEuMS0zLjE0IDIuNS0zLjE0IDEuMTkgMCAyLjAyLjg2IDIuMDIgMi4yN1YxMjRoMS4xMnYtNWMwLTEuOTYtMS4yNy0zLjE2LTMuMDEtMy4xNi0xLjA0IDAtMi4wNS40NS0yLjYzIDEuNVYxMTZoLTEuMTF2OFptMTYuNzEtLjQyYzAgMi42MS0xLjcyIDMuOTItMy45NSAzLjkyLTEuODQgMC0zLjE3LS44My0zLjc3LTEuNzRsLjg4LS43NWEzLjQgMy40IDAgMCAwIDIuOSAxLjQ1YzEuMzcgMCAyLjgyLS44MyAyLjgyLTIuOTR2LTEuMDJjLS41Ny44Ni0xLjcgMS41LTIuOTIgMS41YTMuOTQgMy45NCAwIDAgMS0zLjk2LTQuMDggMy45NCAzLjk0IDAgMCAxIDMuOTYtNC4wOGMxLjIzIDAgMi4zNS42NCAyLjkyIDEuNVYxMTZoMS4xMnY3LjU4Wm0tNi44NC0zLjY2YzAgMS43MyAxLjE2IDMuMDQgMi45IDMuMDQgMS43NSAwIDIuOTItMS4zMSAyLjkyLTMuMDRzLTEuMTctMy4wNC0yLjkxLTMuMDRjLTEuNzUgMC0yLjkxIDEuMzEtMi45MSAzLjA0Wm0xMy41NSA0LjA4IDQuODgtMTEuMzZoLTEuMzVsLTQuMDMgOS4zOC00LjAzLTkuMzhoLTEuMzZsNC45IDExLjM2aC45OVptNy44NC0xMS4yNWMwIC40Ny0uMzcuODUtLjgzLjg1YS44Ni44NiAwIDAgMS0uODYtLjg1YzAtLjQ2LjM4LS44NS44Ni0uODUuNDcgMCAuODMuMzkuODMuODVabS0uMjggMTEuMjVoLTEuMTN2LThoMS4xM3Y4Wm02LjIuMTZhMy45IDMuOSAwIDAgMCAzLjU2LTEuOTVsLS45MS0uNmEyLjc4IDIuNzggMCAwIDEtMi42NCAxLjUxIDIuODcgMi44NyAwIDAgMS0yLjk2LTIuOTNoNi43NXYtLjNjLS4wMi0yLjU2LTEuNjgtNC4wNS0zLjc2LTQuMDVhNC4wNSA0LjA1IDAgMCAwLTQuMTUgNC4xNmMwIDIuMyAxLjYgNC4xNiA0LjEyIDQuMTZabS0uMDEtNy4yOGMxLjM0IDAgMi40NS44OCAyLjY0IDIuMzJoLTUuNDlhMi44NCAyLjg0IDAgMCAxIDIuODUtMi4zMlptMTMuNTUgNy4xMmgtLjkzbC0yLjEtNi4xLTIuMTQgNi4xaC0uOTJsLTIuNzQtOGgxLjE1bDIuMDggNi4wOCAyLjExLTYuMDhoLjg3bDIuMTEgNi4wOCAyLjA4LTYuMDhoMS4xN2wtMi43NCA4WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+\")`;\nbackground.style.backgroundRepeat = 'no-repeat';\nbackground.style.backgroundPosition = 'center';\nbackground.style.opacity = '0.5';\ncontainer.appendChild(background);\n")),(0,u.kt)(e.Z,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},"// remove-start\n// Lightweight Charts Example: Watermark Advanced\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/watermark\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\t// set chart background color to transparent so we can see the elements below\n\t\t// highlight-next-line\n\t\tbackground: { type: 'solid', color: 'transparent' },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\n// highlight-start\nconst container = document.getElementById('container');\nconst background = document.createElement('div');\n// place below the chart\nbackground.style.zIndex = -1;\nbackground.style.position = 'absolute';\n// set size and position to match container\nbackground.style.inset = '0px';\nbackground.style.backgroundImage = `url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjkyIDEyOCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTgyLjkzIDcuNi42My0uMzdhNjQuMSA2NC4xIDAgMCAwIDIuNDMtNS4zMWw0Ljc3LTEuMzlhNjQuNjggNjQuNjggMCAwIDEtNC43MiAxMC41NGMuMzggMTAuNDUtMy45MyAyMS4xNS0xMS4xIDI5LjM3LTExLjY2IDEzLjQxLTI2Ljk4IDE1Ljk3LTQzLjU3IDEzLjc4bDEuMDctLjk4YTIxLjEgMjEuMSAwIDAgMCAzLjcyLTQuMDUgNDguMzcgNDguMzcgMCAwIDEtMTEuMDQgMi44NGMtMTAuNjUtNS41NC0yMS42NC0xNC45NC0yNC4yNy0yNy4yNyA5LjE5LTE3IDI4Ljk1LTI0LjAxIDQ3LjM5LTE5Ljk0YTIyLjU3IDIyLjU3IDAgMCAwIDUuODYgOS4wMmMtLjEyLTEuOTItLjEtMy44NC0uMS01Ljc2bC4wMS0xLjc4YzQuOCAyLjk2IDkuNjYgNS44NSAxNS41MiA1LjcgNC4wOC0uMSA4LjQtMS41MiAxMy40LTQuNFptLTIyLjU1IDIzLjI4YTguNDggOC40OCAwIDAgMC0xMi40NS0uMzNsLTcuOS03LjI2QTguNiA4LjYgMCAwIDAgMTMyIDEyYy02LjE0IDAtMTAuMjUgNi42My03LjcgMTIuMDlsLTEzLjAyIDEyLjE5Yy00LjEtNC45Ny01LjY4LTkuMy02LjE3LTEwLjk0IDguMzYtMTMuNzIgMjQuNDYtMjAuMTggNDAuMTUtMTcuMDcgMi45MyA2LjkgOC4zOCAxMC43MiAxNC43NyAxMy45NmwtLjMzLTEuMTRjLS43NC0yLjU2LTEuNDctNS4xLTEuNjItNy43OCA3LjA1IDMuNDUgMTQuNiAzLjM1IDIxLjc2LjMxLTQuNzYgNy4yNy0xMS4xMyAxNC4yMi0xOS40NiAxNy4yNlptLTIyLjU2LTQuMTkgOC4wMyA3LjM4QTguNiA4LjYgMCAwIDAgMTU0IDQ1YTguNiA4LjYgMCAwIDAgOC4yNS0xMC41NWM3Ljk5LTMuMDggMTQuMzctOS4zOCAxOS4yOC0xNi4yMy0zLjQ3IDE5LjQ3LTIxLjk2IDM0LjYxLTQxLjkgMzIuOTggMS43Ny0yLjg0IDIuNDktNi4wNiAzLjIxLTkuMjhsLjM1LTEuNTZjLTUuNDcgMy43Ny0xMC42NyA2LjM4LTE3LjM3IDcuNTJhNDkuOSA0OS45IDAgMCAxLTExLjg1LTguNjVsMTIuODMtMTJhOC41OCA4LjU4IDAgMCAwIDExLjAyLS41NFpNMTMyIDE2YTQuNSA0LjUgMCAxIDAgMCA5IDQuNSA0LjUgMCAwIDAgMC05Wm0xNy41IDIwLjVhNC41IDQuNSAwIDEgMSA5IDAgNC41IDQuNSAwIDAgMS05IDBaTTIxLjYzIDcxLjhhMi4zMyAyLjMzIDAgMCAxIDIuMzMgMi4zNCAyLjM0IDIuMzQgMCAwIDEtMi4zMyAyLjM3IDIuMzggMi4zOCAwIDAgMS0yLjM3LTIuMzcgMi4zOCAyLjM4IDAgMCAxIDIuMzctMi4zM1ptMS43NiA4LjJ2MTZoLTMuNTJWODBoMy41MlptLTYuNDYgMTZIMi43OFY3My4yOGgzLjc1djE5LjE0aDEwLjRWOTZabTI2LjM5LTEuMDlWODBIMzkuOHYyLjE0YTYuMjYgNi4yNiAwIDAgMC01LjEyLTIuNDZjLTQuMzIgMC03LjY4IDMuNTgtNy42OCA4LjEgMCA0LjU0IDMuMzYgOC4xMiA3LjY4IDguMTIgMi4yIDAgNC4xNi0xLjA4IDUuMTItMi41djEuNDhjMCAzLjIzLTIuMTggNS00LjgzIDVhNy4wMyA3LjAzIDAgMCAxLTUuMzItMi4zNGwtMi4xNCAyLjUyYzEuNTcgMS43NiA0LjM1IDIuOTUgNy40OSAyLjk1IDQuNzMgMCA4LjMyLTIuNTMgOC4zMi04LjFabS0xMi43Ny03LjEzYTQuNyA0LjcgMCAwIDEgNC43Ny00LjkgNC43IDQuNyAwIDAgMSA0Ljc3IDQuOSA0LjcgNC43IDAgMCAxLTQuNzcgNC45IDQuNyA0LjcgMCAwIDEtNC43Ny00LjlaTTUxLjU4IDk2aC0zLjUyVjcyaDMuNTJ2MTAuMThjLjk2LTEuNiAyLjc4LTIuNSA0Ljg2LTIuNSAzLjcxIDAgNi4xMSAyLjYyIDYuMTEgNi42OVY5NmgtMy41MnYtOS4wNmMwLTIuNTItMS4yOC00LjA2LTMuMzMtNC4wNi0yLjMzIDAtNC4xMiAxLjgyLTQuMTIgNS4yNVY5NlptMjQuODYtLjJ2LTMuMTNjLS41Mi4yLTEuMjIuMzItMS45LjMyLTEuODIgMC0yLjY4LS43My0yLjY4LTIuNzJ2LTcuMTNoNC41OFY4MGgtNC41OHYtNC40NWgtMy41MlY4MGgtMy4zM3YzLjE0aDMuMzN2Ny43YzAgMy42MiAyLjQgNS4zMiA1LjQ3IDUuMzIgMS4wOSAwIDEuOTItLjEzIDIuNjMtLjM1Wm0yMC4zLjJIOTMuNGwtMy41Mi0xMC4zN0w4Ni4zOSA5NmgtMy4zMmwtNS4zOC0xNmgzLjcybDMuNDUgMTEgMy42OC0xMWgyLjY5bDMuNjUgMTEgMy40OS0xMWgzLjc0bC01LjM4IDE2Wm02Ljc2LThjMCA0Ljg2IDMuNDkgOC4zMiA4LjM1IDguMzIgMy4zNiAwIDUuODYtMS40NCA3LjMtMy43MWwtMi43LTEuOTJhNS4wMyA1LjAzIDAgMCAxLTQuNTcgMi40M2MtMi42NSAwLTQuNzctMS43My00LjkzLTQuMzVoMTIuNThjLjAzLS41MS4wMy0uOC4wMy0xLjE1IDAtNS4xNi0zLjUyLTcuOTQtNy43MS03Ljk0QTguMTIgOC4xMiAwIDAgMCAxMDMuNSA4OFptOC4yMi01LjM0YzIuMDUgMCAzLjkgMS4yNCA0LjI5IDMuNTVoLTguOWMuNDgtMi4zNyAyLjU2LTMuNTUgNC42MS0zLjU1Wm0xMy4yMi0xMC44NWEyLjMzIDIuMzMgMCAwIDEgMi4zNCAyLjMzIDIuMzQgMi4zNCAwIDAgMS0yLjM0IDIuMzcgMi4zOCAyLjM4IDAgMCAxLTIuMzctMi4zNyAyLjM4IDIuMzggMCAwIDEgMi4zNy0yLjMzWm0yMS43IDIzLjFWODBoLTMuNTN2Mi4xNGE2LjI2IDYuMjYgMCAwIDAtNS4xMi0yLjQ2Yy00LjMyIDAtNy42OCAzLjU4LTcuNjggOC4xIDAgNC41NCAzLjM2IDguMTIgNy42OCA4LjEyIDIuMiAwIDQuMTYtMS4wOCA1LjEyLTIuNXYxLjQ4YzAgMy4yMy0yLjE4IDUtNC44MyA1YTcuMDMgNy4wMyAwIDAgMS01LjMxLTIuMzRsLTIuMTUgMi41MmMxLjU3IDEuNzYgNC4zNiAyLjk1IDcuNSAyLjk1IDQuNzMgMCA4LjMxLTIuNTMgOC4zMS04LjFaTTEyNi43IDk2aC0zLjUyVjgwaDMuNTJ2MTZabTcuMTYtOC4yMmE0LjcgNC43IDAgMCAxIDQuNzctNC45IDQuNyA0LjcgMCAwIDEgNC43NyA0LjkgNC43IDQuNyAwIDAgMS00Ljc3IDQuOSA0LjcgNC43IDAgMCAxLTQuNzctNC45Wk0xNTQuOSA5NmgtMy41MlY3MmgzLjUydjEwLjE4Yy45Ni0xLjYgMi43OC0yLjUgNC44Ni0yLjUgMy43MSAwIDYuMTEgMi42MiA2LjExIDYuNjlWOTZoLTMuNTJ2LTkuMDZjMC0yLjUyLTEuMjgtNC4wNi0zLjMyLTQuMDYtMi4zNCAwLTQuMTMgMS44Mi00LjEzIDUuMjVWOTZabTI0Ljg2LS4ydi0zLjEzYy0uNTEuMi0xLjIyLjMyLTEuODkuMzItMS44MiAwLTIuNjktLjczLTIuNjktMi43MnYtNy4xM2g0LjU4VjgwaC00LjU4di00LjQ1aC0zLjUyVjgwaC0zLjMzdjMuMTRoMy4zM3Y3LjdjMCAzLjYyIDIuNCA1LjMyIDUuNDcgNS4zMiAxLjEgMCAxLjkyLS4xMyAyLjYzLS4zNVptMjEuNTkuNThhMTEuNjcgMTEuNjcgMCAwIDEtMTEuNzUtMTEuNzRjMC02LjU2IDUuMjItMTEuNzQgMTEuNzUtMTEuNzQgNC40NSAwIDguMjIgMi4yNyAxMC4yNCA1Ljc2bC0zLjIzIDEuODVhNy45NCA3Ljk0IDAgMCAwLTcuMDEtNCA3Ljk2IDcuOTYgMCAwIDAtNy45NyA4LjEzIDcuOTYgNy45NiAwIDAgMCA3Ljk3IDguMTMgNy45NCA3Ljk0IDAgMCAwIDctNGwzLjI0IDEuODVhMTEuNjYgMTEuNjYgMCAwIDEtMTAuMjQgNS43NlptMTMuNC0uMzhoMy41MnYtNy44N2MwLTMuNDMgMS44LTUuMjUgNC4xMy01LjI1IDIuMDUgMCAzLjMzIDEuNTQgMy4zMyA0LjA2Vjk2aDMuNTJ2LTkuNjNjMC00LjA3LTIuNC02LjY5LTYuMTEtNi42OS0yLjA4IDAtMy45LjktNC44NyAyLjVWNzJoLTMuNTJ2MjRabTI1LjU2LjMyYy00LjM4IDAtNy43LTMuNzQtNy43LTguMzJzMy4zMi04LjMyIDcuNy04LjMyYzIuMyAwIDQuMjMgMS4xOCA1LjEyIDIuNDZWODBoMy41MnYxNmgtMy41MnYtMi4xNGE2LjM4IDYuMzggMCAwIDEtNS4xMiAyLjQ2Wm0uNjQtMy4yYzIuODUgMCA0Ljc3LTIuMjQgNC43Ny01LjEycy0xLjkyLTUuMTItNC43Ny01LjEyYy0yLjg0IDAtNC43NiAyLjI0LTQuNzYgNS4xMnMxLjkxIDUuMTIgNC43NiA1LjEyWk0yNTMuNzEgOTZoMy41MnYtNy44YzAtMy4yIDEuODMtNC45IDMuODQtNC45LjY0IDAgMS4xNS4xIDEuNzYuMjh2LTMuNjFjLS40OC0uMS0uOTMtLjEzLTEuMzctLjEzYTQuNSA0LjUgMCAwIDAtNC4yMyAzVjgwaC0zLjUydjE2Wm0yMS43My0zLjMzdjMuMTRjLS43LjIyLTEuNTQuMzUtMi42My4zNS0zLjA3IDAtNS40Ny0xLjctNS40Ny01LjMxdi03LjcxaC0zLjMzVjgwaDMuMzN2LTQuNDVoMy41MlY4MGg0LjU4djMuMTRoLTQuNTh2Ny4xM2MwIDEuOTkuODYgMi43MiAyLjY5IDIuNzIuNjcgMCAxLjM3LS4xMyAxLjg5LS4zMlptMTQuMjEtMS4zMWMwLTIuNjItMS42Ni00LjAzLTQuNDgtNC44NmwtMS42My0uNDhjLTEuNTctLjQ1LTEuOTItMS4xMi0xLjkyLTEuOSAwLS45NSAxLjA5LTEuNSAyLjE1LTEuNSAxLjMgMCAyLjMzLjY0IDMuMDQgMS42NGwyLjQzLTEuODZjLTEuMTItMS43Ni0zLjAxLTIuNzItNS40MS0yLjcyLTMuMiAwLTUuNyAxLjczLTUuNzMgNC41OC0uMDMgMi4zNiAxLjQxIDQuMTIgNC4yIDQuOWwxLjQuMzhjMS45Mi41NyAyLjQ3IDEuMTIgMi40NyAyLjA0IDAgMS4xMi0xLjA2IDEuNy0yLjMgMS43LTEuNjQgMC0zLjItLjgtMy44NS0yLjJsLTIuNTkgMS44NWMxLjE1IDIuMjcgMy41OCAzLjM5IDYuNDMgMy4zOSAzLjMgMCA1LjgtMS44OSA1LjgtNC45NlptLTE0My4zOCAyMS40YzAgLjQ2LS4zNy44NC0uODMuODRhLjg2Ljg2IDAgMCAxLS44Ny0uODVjMC0uNDYuMzktLjg1Ljg3LS44NS40NiAwIC44My4zOS44My44NVptLS4yOSAxMS4yNGgtMS4xMnYtOGgxLjEydjhabS01Mi4wMi4xNmE0LjA0IDQuMDQgMCAwIDAgMy45OC00LjE2IDQuMDQgNC4wNCAwIDAgMC0zLjk4LTQuMTZjLTEuMjQgMC0yLjM5LjY0LTIuOTYgMS41VjExMmgtMS4xMnYxMkg5MXYtMS4zNGMuNTcuODYgMS43MiAxLjUgMi45NiAxLjVabS0uMTItMS4wNGMtMS43NCAwLTIuOTQtMS40LTIuOTQtMy4xMiAwLTEuNzMgMS4yLTMuMTIgMi45NC0zLjEyIDEuNzUgMCAyLjk1IDEuNCAyLjk1IDMuMTIgMCAxLjczLTEuMiAzLjEyLTIuOTUgMy4xMlptNy45IDQuMjIgNS4zLTExLjM0aC0xLjI2bC0yLjkzIDYuMzUtMi45My02LjM1aC0xLjI0bDMuNTUgNy42LTEuNzYgMy43NGgxLjI2Wk0xMTUuMyAxMjRoLTEuMnYtMTAuMmgtMy42OHYtMS4xNmg4LjU2djEuMTVoLTMuNjhWMTI0Wm0zLjgyIDBoMS4xMnYtNC4wMmMwLTIuMDQgMS4yMy0yLjk0IDIuMjItMi45NC4yNCAwIC40NS4wMy42Ny4xMXYtMS4xN2EyLjQ0IDIuNDQgMCAwIDAtMi45IDEuNjZWMTE2aC0xLjExdjhabTExLjcyLTEuMzRhMy42NCAzLjY0IDAgMCAxLTIuOTYgMS41IDQuMDQgNC4wNCAwIDAgMS0zLjk4LTQuMTYgNC4wNCA0LjA0IDAgMCAxIDMuOTgtNC4xNmMxLjIzIDAgMi4zOS42NCAyLjk2IDEuNVYxMTZoMS4xMnY4aC0xLjEydi0xLjM0Wm0tNS44LTIuNjZjMCAxLjczIDEuMiAzLjEyIDIuOTUgMy4xMiAxLjc1IDAgMi45NS0xLjQgMi45NS0zLjEyIDAtMS43My0xLjItMy4xMi0yLjk1LTMuMTItMS43NCAwLTIuOTQgMS40LTIuOTQgMy4xMlptMTIuOTggNC4xNmMxLjIzIDAgMi4zOS0uNjQgMi45Ni0xLjVWMTI0aDEuMTJ2LTEySDE0MXY1LjM0YTMuNjQgMy42NCAwIDAgMC0yLjk2LTEuNSA0LjA0IDQuMDQgMCAwIDAtMy45OCA0LjE2IDQuMDQgNC4wNCAwIDAgMCAzLjk4IDQuMTZabS4xMS0xLjA0Yy0xLjc0IDAtMi45NC0xLjQtMi45NC0zLjEyIDAtMS43MyAxLjItMy4xMiAyLjk0LTMuMTIgMS43NSAwIDIuOTUgMS40IDIuOTUgMy4xMiAwIDEuNzMtMS4yIDMuMTItMi45NSAzLjEyWm0xMC42Ljg4aDEuMTF2LTMuOThjMC0xLjk5IDEuMS0zLjE0IDIuNS0zLjE0IDEuMTkgMCAyLjAyLjg2IDIuMDIgMi4yN1YxMjRoMS4xMnYtNWMwLTEuOTYtMS4yNy0zLjE2LTMuMDEtMy4xNi0xLjA0IDAtMi4wNS40NS0yLjYzIDEuNVYxMTZoLTEuMTF2OFptMTYuNzEtLjQyYzAgMi42MS0xLjcyIDMuOTItMy45NSAzLjkyLTEuODQgMC0zLjE3LS44My0zLjc3LTEuNzRsLjg4LS43NWEzLjQgMy40IDAgMCAwIDIuOSAxLjQ1YzEuMzcgMCAyLjgyLS44MyAyLjgyLTIuOTR2LTEuMDJjLS41Ny44Ni0xLjcgMS41LTIuOTIgMS41YTMuOTQgMy45NCAwIDAgMS0zLjk2LTQuMDggMy45NCAzLjk0IDAgMCAxIDMuOTYtNC4wOGMxLjIzIDAgMi4zNS42NCAyLjkyIDEuNVYxMTZoMS4xMnY3LjU4Wm0tNi44NC0zLjY2YzAgMS43MyAxLjE2IDMuMDQgMi45IDMuMDQgMS43NSAwIDIuOTItMS4zMSAyLjkyLTMuMDRzLTEuMTctMy4wNC0yLjkxLTMuMDRjLTEuNzUgMC0yLjkxIDEuMzEtMi45MSAzLjA0Wm0xMy41NSA0LjA4IDQuODgtMTEuMzZoLTEuMzVsLTQuMDMgOS4zOC00LjAzLTkuMzhoLTEuMzZsNC45IDExLjM2aC45OVptNy44NC0xMS4yNWMwIC40Ny0uMzcuODUtLjgzLjg1YS44Ni44NiAwIDAgMS0uODYtLjg1YzAtLjQ2LjM4LS44NS44Ni0uODUuNDcgMCAuODMuMzkuODMuODVabS0uMjggMTEuMjVoLTEuMTN2LThoMS4xM3Y4Wm02LjIuMTZhMy45IDMuOSAwIDAgMCAzLjU2LTEuOTVsLS45MS0uNmEyLjc4IDIuNzggMCAwIDEtMi42NCAxLjUxIDIuODcgMi44NyAwIDAgMS0yLjk2LTIuOTNoNi43NXYtLjNjLS4wMi0yLjU2LTEuNjgtNC4wNS0zLjc2LTQuMDVhNC4wNSA0LjA1IDAgMCAwLTQuMTUgNC4xNmMwIDIuMyAxLjYgNC4xNiA0LjEyIDQuMTZabS0uMDEtNy4yOGMxLjM0IDAgMi40NS44OCAyLjY0IDIuMzJoLTUuNDlhMi44NCAyLjg0IDAgMCAxIDIuODUtMi4zMlptMTMuNTUgNy4xMmgtLjkzbC0yLjEtNi4xLTIuMTQgNi4xaC0uOTJsLTIuNzQtOGgxLjE1bDIuMDggNi4wOCAyLjExLTYuMDhoLjg3bDIuMTEgNi4wOCAyLjA4LTYuMDhoMS4xN2wtMi43NCA4WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9zdmc+\")`;\nbackground.style.backgroundRepeat = 'no-repeat';\nbackground.style.backgroundPosition = 'center';\nbackground.style.opacity = '0.5';\ncontainer.appendChild(background);\n// highlight-end\n\nconst lineSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n});\n\nconst data = [\n\t{ value: 0, time: 1642425322 },\n\t// hide-start\n\t{ value: 8, time: 1642511722 },\n\t{ value: 10, time: 1642598122 },\n\t{ value: 20, time: 1642684522 },\n\t{ value: 3, time: 1642770922 },\n\t{ value: 43, time: 1642857322 },\n\t{ value: 41, time: 1642943722 },\n\t{ value: 43, time: 1643030122 },\n\t{ value: 56, time: 1643116522 },\n\t{ value: 46, time: 1643202922 },\n\t// hide-end\n];\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n"))}i.isMDXComponent=!0},8007:(M,t,L)=>{L.d(t,{Z:()=>n});var N=L(7294),u=L(814),j=L(1262),e=L(2949),I=L(373);function g(M,t,L){M.addEventListener("resize",(()=>{const M=t.getBoundingClientRect();L(M.width,M.height)}),!0)}const y={3.8:async M=>{const t=await L.e(193).then(L.bind(L,193));return{module:t,createChart:(L,N)=>{const u=t.createChart(L,N);return g(M,L,u.resize.bind(u)),u}}},current:async()=>{const M=await L.e(9027).then(L.bind(L,9027));return{module:M,createChart:(t,L)=>{const N=M.createChart(t,L);return g(window,t,N.resize.bind(N)),N}}}},A="iframe_R_Fr";function T(M){var t;const{script:L}=M,{preferredVersion:u}=(0,I.J)(),j=null!=(t=null==u?void 0:u.name)?t:"current",e=function(M){return'\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t'+M+"\n\t\t\t};\n\t\t<\/script>\n\t"}(L),g=N.useRef(null);return N.useEffect((()=>{const M=g.current,t=null==M?void 0:M.contentWindow,L=null==M?void 0:M.contentDocument;if(null===M||!t||!L)return;const N=async()=>{try{const{module:M,createChart:L}=await y[j](t);Object.assign(t,M),t.createChart=L,null==t.run||t.run()}catch(M){console.error(M)}};if(void 0!==t.run)N();else{const t=()=>{N(),M.removeEventListener("load",t)};M.addEventListener("load",t)}}),[e]),N.createElement("iframe",{key:L,ref:g,srcDoc:e,className:A})}var a=L(3864);function i(){const[M,t]=(0,N.useState)("");return(0,N.useEffect)((()=>t(""+Math.random().toString(36).slice(2,11))),[]),M}const D=Object.keys(a.l.DARK);const n=M=>{const{chart:t,replaceThemeConstants:L,hideableCode:I,...g}=M;let{children:y}=M;const{colorMode:n}=(0,e.I)(),C="dark"===n,r="string"==typeof z?z:i();var z;return L&&"string"==typeof y&&(y=function(M,t){const L=t?a.l.DARK:a.l.LIGHT;let N=M;for(const u of D)N=N.replace(new RegExp(u,"g"),"'"+L[u]+"'");return N}(y,C)),t||I?N.createElement(N.Fragment,null,I&&N.createElement(N.Fragment,null,N.createElement("input",{id:r,type:"checkbox",className:"toggle-hidden-lines"}),N.createElement("label",{className:"toggle-label",htmlFor:r},"Show all code")),N.createElement(u.Z,g,y),t&&N.createElement(j.Z,{fallback:N.createElement("div",{className:A},"\xa0")},(()=>N.createElement(T,{script:y})))):N.createElement(u.Z,g,y)}},3864:(M,t,L)=>{L.d(t,{l:()=>N});const N={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}}}]);