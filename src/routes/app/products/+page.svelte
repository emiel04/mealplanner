<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { superForm } from "sveltekit-superforms/client";
	import Products from "$lib/components/Products.svelte";
	import { productSchema } from "$lib/schemas.js";
	export let data;
	$: products = data.products;

	products = products;
	const { form, enhance, reset, errors } = superForm(data.form, {
		onResult: (e) => {
			invalidate("/app/products");
		},
		resetForm: true,
		validators: productSchema
	});
</script>

<div class="flex flex-wrap justify-center gap-10">
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg h-[32rem]">
		<h2 class="text-2xl font-bold mb-4">Add a product</h2>
		<form method="POST" action="?/createProduct" use:enhance>
			<div class="">
				<label for="name" class="block">Name</label>
				<input
					bind:value={$form.name}
					type="text"
					id="name"
					name="name"
					class="form-input mt-1 block w-full"
				/>
			</div>
			{#if $errors.name}
				<small class="text-error">{$errors.name}</small>
			{/if}
			<div class="mt-2">
				<label for="description" class="block">Description</label>
				<textarea
					bind:value={$form.description}
					id="description"
					name="description"
					class="form-textarea mt-1 block w-full resize-none p-3"
					rows="3"
				/>
			</div>
			{#if $errors.description}
				<small class="text-error">{$errors.description}</small>
			{/if}
			<div class="my-2">
				<input
					bind:checked={$form.isFresh}
					type="checkbox"
					id="isFresh"
					name="isFresh"
					class="form-checkbox"
				/>
				<label for="isFresh" class="inline-block ml-2">Fresh</label>
			</div>
			{#if $errors.isFresh}
				<small class="text-error">{$errors.isFresh}</small>
			{/if}
			<div class="mb-2">
				<input
					bind:checked={$form.isCanned}
					type="checkbox"
					id="isCanned"
					name="isCanned"
					class="form-checkbox"
				/>
				<label for="isCanned" class="inline-block ml-2">Canned</label>
			</div>
			{#if $errors.isCanned}
				<small class="text-error">{$errors.isCanned}</small>
			{/if}
			<div class="mb-2">
				<input
					bind:checked={$form.isCooled}
					type="checkbox"
					id="isCooled"
					name="isCooled"
					class="form-checkbox"
				/>
				<label for="isCooled" class="inline-block ml-2">Cooled</label>
			</div>
			{#if $errors.isCooled}
				<small class="text-error">{$errors.isCooled}</small>
			{/if}
			<div class="mb-2">
				<input
					bind:checked={$form.isFrozen}
					type="checkbox"
					id="isFrozen"
					name="isFrozen"
					class="form-checkbox"
				/>
				<label for="isFrozen" class="inline-block ml-2">Frozen</label>
			</div>
			{#if $errors.isFrozen}
				<small class="text-error">{$errors.isFrozen}</small>
			{/if}
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg overflow-hidden">
		<h2 class="text-2xl font-bold mb-4">Products</h2>
		<Products {products} />
	</div>
</div>
