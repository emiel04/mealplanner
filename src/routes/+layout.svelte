<script>
	import { onMount } from 'svelte';
	import '../app.css';
    import { themeChange } from 'theme-change'
    import Header from "./Header.svelte";

    onMount(() => {
        themeChange(false)
<<<<<<< HEAD

=======
>>>>>>> 46ac356b25bac467d5a233b2de8ff352ef804f9b
    })
</script>
<Header/>
<slot/>

