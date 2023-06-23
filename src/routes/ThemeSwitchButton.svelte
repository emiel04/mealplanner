<script>
    import {theme} from "./stores";
    function toggleTheme() {
        $theme = $theme === "light" ? "dark" : "light";
    }

</script>

<button on:click={toggleTheme} class="btn theme-button capitalize">{$theme}</button>
