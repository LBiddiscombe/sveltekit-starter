<script lang="ts">
	import SplitPane from '$lib/components/SplitPane.svelte';
	import MarkdownEditor from '$lib/components/MarkdownEditor.svelte';
	import MarkdownPreview from '$lib/components/MarkdownPreview.svelte';

	let markdown: string;
</script>

<div class="flex flex-col h-screen">
	<h1 class="text-2xl text-center py-4">Markdown with Mermaid Editor</h1>
	<SplitPane>
		<MarkdownEditor slot="left" bind:markdown />
		<MarkdownPreview slot="right" {markdown} />
	</SplitPane>
</div>
