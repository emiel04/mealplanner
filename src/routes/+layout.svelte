<script>
	import '../app.css';
    import Header from "./Header.svelte";
    import {theme} from "./stores";
    import {browser} from "$app/environment";

    if (browser){
        theme.subscribe(value => {
            localStorage.setItem("theme", value)
            document.documentElement.dataset.theme = value;
        })
    }

</script>

<Header/>
<slot/>

