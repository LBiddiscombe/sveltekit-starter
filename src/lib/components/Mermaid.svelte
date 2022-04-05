<script lang="ts">
	import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
	import { onMount } from 'svelte';

	export let code;

	let html: string;

	onMount(async () => {
		await mermaid.initialize({ startOnLoad: false });
	});

	$: {
		try {
			html = `<div class="mermaid">${mermaid.render('mermaid-svg', code)}</div>`;
		} catch (e) {
			html = `<pre class="border rounded-none border-red-500 scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-red-400"><span class="text-red-500">${e}</br></span><code>${code}</code></span>`;
		}
	}
</script>

<div class="mermaid">{html}</div>
