<script lang="ts">
	import { marked } from 'marked';
	import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
	import { onMount } from 'svelte';

	export let markdown = `# H1 heading`;

	onMount(async () => {
		await mermaid.initialize({ startOnLoad: false });
	});

	const renderer = new marked.Renderer();
	renderer.code = function (code: string, language: string) {
		if (language === 'mermaid') {
			try {
				return '<div class="mermaid">' + mermaid.render('mermaid-svg', code) + '</div>';
			} catch (e) {
				return `<div class="mockup-code pb-2"><pre><code>${code}</code></pre><pre class="bg-error text-error-content whitespace-pre-wrap m-0 mx-2">${e}</pre></div>`;
			}
		} else {
			return `<div class="mockup-code pb-2"><pre py-4><code>${code}</pre></div>`;
		}
	};

	$: html = marked(markdown, { renderer: renderer });
</script>

<div class="mx-auto px-2 prose overflow-auto scrollbar">
	{@html html}
</div>
