<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import { theme } from "./stores";
	import { browser } from "$app/environment";
	import type { PageData } from "./$types";

	if (browser) {
		theme.subscribe((value) => {
			localStorage.setItem("theme", value);
			document.documentElement.dataset.theme = value;
		});
	}
	export let data: PageData;
	const { user } = data;
</script>

<svelte:head>
	<title>Mealplanner</title>
</svelte:head>
<Header {user} />
<slot />
