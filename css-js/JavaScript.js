function clipboardsave(element) {
	let contents = element.getAttribute('clipboard-contents');
	navigator.clipboard.writeText(contents);
}