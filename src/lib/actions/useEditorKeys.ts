export function editorKeys(node) {
	function replaceTab(element: HTMLInputElement) {
		const TAB_SIZE = 2;
		const start = element.selectionStart;
		const end = element.selectionEnd;

		// Inserting some spaces in the place of the pressed tab event
		element.value =
			element.value.substring(0, start) + ' '.repeat(TAB_SIZE) + element.value.substring(end);
		element.selectionStart = element.selectionEnd = start + TAB_SIZE;
	}

	function handleKeyDown(event: KeyboardEvent) {
		const target = event.target as HTMLInputElement;
		switch (event.key) {
			case 'Tab':
				event.preventDefault();
				replaceTab(target);
		}
	}

	node.addEventListener('keydown', handleKeyDown, true);

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeyDown, true);
		}
	};
}
