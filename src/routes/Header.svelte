<script>
import ThemeSwitchButton from "./ThemeSwitchButton.svelte";

</script>


<header class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="dropdown">
            <label class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                <li><a href="/login">Login</a></li>
                <li>
                    <a href="/app">App</a>
                    <ul class="p-2">
                        <li><a href="/">Submenu 1</a></li>
                        <li><a href="/">Submenu 2</a></li>
                    </ul>
                </li>
                <li><a href="/">Item 3</a></li>
            </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl">Mealplanner</a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/login">Login</a></li>
            <li>
                <details>
                    <summary><a href="/app">App</a></summary>
                    <ul class="p-2">
                        <li><a href="/">Submenu 1</a></li>
                        <li><a href="/">Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a href="/">Item 3</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <ThemeSwitchButton/>
    </div>
</header>