<script lang="ts">
	import toast from "svelte-french-toast";
	import type { Product } from "@prisma/client";

	export let products: Array<Product>;

	function handleEdit(e: MouseEvent) {
		const target = e.target as HTMLButtonElement;
	}
	function handleDelete(e: MouseEvent) {
		const target = e.target as HTMLButtonElement;
		const id = target.closest("li")?.dataset.id;
		const res = fetch(`/api/products/${id}`, { method: "DELETE" })
			.then((response) => {
				console.log("test");
				products = products.filter((p) => p.id !== id);
			})
			.catch((e) => {
				toast.error(e.message);
			});
	}
</script>

{#each products as product (product.id)}
	<li
		data-id={product.id}
		class="flex justify-between mb-2 bg-primary text-primary-content p-3 rounded-lg"
	>
		<div>
			<div>
				{product.name}
			</div>
			<div>
				<small>{product.description}</small>
			</div>
		</div>
		<div>
			<button on:click={handleEdit} class="btn btn-secondary">Edit</button>
			<button on:click={handleDelete} class="btn btn-error">Delete</button>
		</div>
	</li>
{/each}
