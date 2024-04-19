document$.subscribe(() => {
	renderMathInElement(window.document.body, {
		delimiters: [
			{ left: "$$", right: "$$", display: true },
			{ left: "$", right: "$", display: false },
			{ left: "\\(", right: "\\)", display: false },
			{ left: "\\[", right: "\\]", display: true },
		],
	});

	// for (const span of element.getElementsByClassName("katex-html")) {
	// 	span.setAttribute("style", "white-space: nowrap");
	// 	const children = Array.from(span.children).slice(1);
	// 	for (const child of children) {
	// 		const spacer = document.createElement("span");
	// 		spacer.innerText = "\u200b"; // Zero-width space
	// 		spacer.style.whiteSpace = "normal";
	// 		span.insertBefore(spacer, child);
	// 	}
	// }
});
