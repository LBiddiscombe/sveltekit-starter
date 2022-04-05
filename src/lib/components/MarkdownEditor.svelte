<script lang="ts">
	import { editorKeys } from '$lib/actions/useEditorKeys';
	export let markdown = `# H1 heading

\`\`\`mermaid
graph LR
A --> B
\`\`\``;
</script>

<textarea
	class="textarea textarea-bordered h-full mx-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-900"
	placeholder="Enter Markdown..."
	bind:value={markdown}
	use:editorKeys
	spellcheck="false"
/>
