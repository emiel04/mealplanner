<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import { browser } from "$app/environment";
	import type { PageData } from "./$types";
	import { onMount } from "svelte";
	import { redirect } from "@sveltejs/kit";

	export let data: PageData;
	const { user } = data;
	let theme = "";
	onMount(async () => {
		if (document.documentElement.getAttribute("data-theme") === "") {
			let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			theme = dark ? "dark" : "light";
			await fetch(`/preferences/theme?theme=${theme}`, { method: "POST" });
			document.documentElement.setAttribute("data-theme", theme);
		}
	});
</script>

<svelte:head>
	<title>Mealplanner</title>
</svelte:head>
<Header {user} {theme} />
<slot />
