<script lang="ts">
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import ThemeSwitchButton from "./ThemeSwitchButton.svelte";
	import { invalidateAll } from "$app/navigation";

	export let user: UserInfo;
	export let theme: string;
</script>

<header class="navbar bg-base-100">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">Mealplanner</a>
	</div>
	<div class="navbar-center lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a href="/app">App</a>
			</li>
			<li><a href="/app/products">Products</a></li>
		</ul>
	</div>
	<div class="navbar-end gap-4">
		{#if !user}
			<a href="/login">Login</a>
		{:else}
			<form action="/logout" method="POST">
				<button class="btn btn-error">Logout</button>
			</form>
		{/if}
		<ThemeSwitchButton {theme} />
	</div>
</header>
