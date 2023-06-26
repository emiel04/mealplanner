<script lang="ts">
	import type { ActionData } from "./$types";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import { invalidate, invalidateAll } from "$app/navigation";

	export let form: ActionData;
	let message: string;

	$: message = $page.url.searchParams.get("message") ?? "";

	const handleLogin = async () => {
		invalidateAll();
	};
</script>

<div class="flex flex-col justify-center">
	{#if message}
		<div class="alert alert-warning lg:max-w-lg m-auto mb-5">
			<!-- prettier-ignore -->
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
			<span>{message}</span>
		</div>
	{/if}
	<div class="w-full p-6 bg-base-300 m-auto rounded-md shadow-md lg:max-w-lg">
		<h1 class="text-3xl font-semibold text-center text-accent-content">Login</h1>
		<form class="space-y-4" method="post">
			<div>
				<label class="label" for="username">
					<span class="text-base label-text text-accent-content">Username/Email</span>
				</label>
				<input
					id="username"
					name="username"
					type="text"
					placeholder="Username/Email"
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div>
				<label for="password" class="label">
					<span class="text-base label-text text-accent-content">Password</span>
				</label>
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Enter Password"
					class="w-full input input-bordered input-primary text-accent-content"
				/>
			</div>
			{#if form?.error}
				<div class="text-error">
					{form.error}
				</div>
			{/if}
			<a
				href="/forgot-password"
				class="text-xs text-gray-600 hover:underline hover:text-primary-focus">Forgot Password?</a
			>
			<div>
				<button class="btn btn-primary">Login</button>
			</div>
			<a href="/register" class="text-xs text-gray-600 hover:underline hover:text-primary-focus"
				>No account? Create one here</a
			>
		</form>
	</div>
</div>
