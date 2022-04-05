<script lang="ts">
	import { onMount } from 'svelte';

	const minPaneWidth = 200;
	let dragbar: HTMLDivElement;
	let leftPane: HTMLDivElement;
	let width = '50%';

	const resize = (e: MouseEvent) => {
		const newWidth = e.pageX - leftPane.getBoundingClientRect().left;
		width = `${newWidth}px`;
	};

	const stopResize = () => {
		window.removeEventListener('mousemove', resize);
		window.removeEventListener('mouseup', stopResize);
	};

	onMount(() => {
		dragbar.addEventListener('mousedown', (e) => {
			e.preventDefault();
			window.addEventListener('mousemove', resize);
			window.addEventListener('mouseup', stopResize);
		});
	});
</script>

<div class="flex-1 flex overflow-hidden">
	<div class="hidden md:flex flex-col items-stretch" bind:this={leftPane} style="width: {width};">
		<slot name="left">
			<div class="grid place-items-center">No Left Pane</div>
		</slot>
	</div>
	<div class="hover:bg-base-200 bg-base-300 cursor-col-resize px-1" bind:this={dragbar} />
	<div class="flex-1 flex flex-col overflow-hidden">
		<slot name="right">
			<div class="grid place-items-center">No Right Pane</div>
		</slot>
	</div>
</div>
