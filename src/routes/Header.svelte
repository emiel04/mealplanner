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
			{#if !user}
				<li><a href="/login">Login</a></li>
			{:else}
				<li>
					<form action="/logout" method="POST">
						<button>Logout</button>
					</form>
				</li>
			{/if}
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeSwitchButton {theme} />
	</div>
</header>
