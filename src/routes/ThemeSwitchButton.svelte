<script lang="ts">
	import { toggleTheme } from "$lib/themehelper";
	import { onMount } from "svelte";

	export let theme: string;
	function toggle(event: MouseEvent) {
		if (event.view === null) return;
		theme = toggleTheme(event.view.window);
	}
	onMount(async () => {
		theme = document.documentElement.getAttribute("data-theme") || "";
	});
</script>

<button on:click={toggle} class="btn theme-button capitalize">{theme}</button>
