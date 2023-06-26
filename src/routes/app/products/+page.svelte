<script>
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	export let data;
	const { products } = data;
	onMount(() => {
		const interval = setInterval(() => {
			invalidate("/app/products");
		}, 1000);
	});
</script>

<div class="flex justify-center gap-10">
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg">
		<h2 class="text-2xl font-bold">Add a product</h2>
		<form method="POST">
			<div class="mb-4">
				<label for="name" class="block">Name</label>
				<input type="text" id="name" name="name" class="form-input mt-1 block w-full" required />
			</div>

			<div class="mb-4">
				<label for="description" class="block">Description</label>
				<textarea
					id="description"
					name="description"
					class="form-textarea mt-1 block w-full"
					rows="3"
					required
				/>
			</div>

			<div class="mb-4">
				<input type="checkbox" id="isFresh" name="isFresh" class="form-checkbox" value="true" />
				<label for="isFresh" class="inline-block ml-2">Fresh</label>
			</div>

			<div class="mb-4">
				<input type="checkbox" id="isCanned" name="isCanned" class="form-checkbox" value="true" />
				<label for="isCanned" class="inline-block ml-2">Canned</label>
			</div>

			<div class="mb-4">
				<input type="checkbox" id="isCooled" name="isCooled" class="form-checkbox" value="true" />
				<label for="isCooled" class="inline-block ml-2">Cooled</label>
			</div>

			<div class="mb-4">
				<input type="checkbox" id="isFrozen" name="isFrozen" class="form-checkbox" value="true" />
				<label for="isFrozen" class="inline-block ml-2">Frozen</label>
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg">
		<h2 class="text-2xl font-bold">Products</h2>
		<p>blank</p>
		<p>blank</p>
		<p>blank</p>
		<p>blank</p>
		<p>blank</p>
		<ul>
			{#each products as product}
				<li>{product.name}</li>
			{/each}
		</ul>
	</div>
</div>
