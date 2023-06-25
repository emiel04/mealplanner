<script>
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';
  export let data;
  const {products} = data;
  onMount(() => {
    const interval = setInterval(() => {
      invalidate('/app/products');
    }, 1000);
  });
</script>

<form>
  <div class="mb-4">
    <label for="name" class="block text-gray-700">Name</label>
    <input type="text" id="name" name="name" class="form-input mt-1 block w-full" required>
  </div>

  <div class="mb-4">
    <label for="description" class="block text-gray-700">Description</label>
    <textarea id="description" name="description" class="form-textarea mt-1 block w-full" rows="3" required></textarea>
  </div>

  <div class="mb-4">
    <input type="checkbox" id="isFresh" name="isFresh" class="form-checkbox" value="true">
    <label for="isFresh" class="inline-block ml-2 text-gray-700">Fresh</label>
  </div>

  <div class="mb-4">
    <input type="checkbox" id="isCanned" name="isCanned" class="form-checkbox" value="true">
    <label for="isCanned" class="inline-block ml-2 text-gray-700">Canned</label>
  </div>

  <div class="mb-4">
    <input type="checkbox" id="isCooled" name="isCooled" class="form-checkbox" value="true">
    <label for="isCooled" class="inline-block ml-2 text-gray-700">Cooled</label>
  </div>

  <div class="mb-4">
    <input type="checkbox" id="isFrozen" name="isFrozen" class="form-checkbox" value="true">
    <label for="isFrozen" class="inline-block ml-2 text-gray-700">Frozen</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div>
  <ul>
    {#each products as product}
      <li>{product.name}</li>
    {/each}
  </ul>

</div>
