<script>
	import { onMount } from 'svelte';
	import '../app.css';
    import { themeChange } from 'theme-change'
    import Header from "./Header.svelte";

    onMount(() => {
        themeChange(false);
    });
</script>
<Header/>
<slot/>

