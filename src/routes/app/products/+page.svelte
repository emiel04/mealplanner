<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { superForm } from "sveltekit-superforms/client";
	import Products from "$lib/Products.svelte";

	export let data;
	let products = data.products;
	products = products;
	const { form, enhance, reset } = superForm(data.form, {
		onResult: (e) => {
			invalidate("/app/products");
		}
	});

</script>

<div class="flex flex-wrap justify-center gap-10">
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg h-[30rem]">
		<h2 class="text-2xl font-bold mb-4">Add a product</h2>
		<form method="POST" action="?/createProduct" use:enhance>
			<div class="mb-4">
				<label for="name" class="block">Name</label>
				<input type="text" id="name" name="name" class="form-input mt-1 block w-full" required />
			</div>

			<div class="mb-4">
				<label for="description" class="block">Description</label>
				<textarea
					id="description"
					name="description"
					class="form-textarea mt-1 block w-full resize-none p-3"
					rows="3"
					required
				/>
			</div>

			<div class="mb-2">
				<input type="checkbox" id="isFresh" name="isFresh" class="form-checkbox" value="true" />
				<label for="isFresh" class="inline-block ml-2">Fresh</label>
			</div>

			<div class="mb-2">
				<input type="checkbox" id="isCanned" name="isCanned" class="form-checkbox" value="true" />
				<label for="isCanned" class="inline-block ml-2">Canned</label>
			</div>

			<div class="mb-2">
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
	<div class="w-full p-6 bg-base-300 rounded-md shadow-md lg:max-w-lg overflow-hidden">
		<h2 class="text-2xl font-bold mb-4">Products</h2>
		<ul class="flex-row h-full overflow-auto">
			<Products {products} />
		</ul>
	</div>
</div>
