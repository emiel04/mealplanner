<script>
    export let data;
    const users  = data.users;

</script>
<h1 class="text-3xl font-bold underline">Welkom</h1>
{#each users as user}
    <h2 class="text-lg">{user.name}</h2>
{/each}
