<script lang="ts">
    import {onMount} from "svelte";
    import type { ActionData } from './$types';
    export let form: ActionData;

    let password;
    let confirm_password;

    onMount(() =>{
        function validatePassword() {
            if (password.value !== confirm_password.value) {
                confirm_password.setCustomValidity("Passwords don't match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }

        password.addEventListener('input', validatePassword);
        confirm_password.addEventListener('input', validatePassword);
    })

</script>
<div class="flex flex-col justify-center">
    <div class="w-full p-6 bg-base-300 m-auto rounded-md shadow-md lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-accent-content">Register</h1>
        <form class="space-y-4" method="post">
            <div>
                <label class="label" for="username">
                    <span class="text-base label-text text-accent-content">Username</span>
                </label>
                <input required id="username" name="username" type="text" placeholder="Username" class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label class="label" for="email">
                    <span class="text-base label-text text-accent-content">Email</span>
                </label>
                <input required id="email" name="email" type="email" placeholder="Email" class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label for="password" class="label">
                    <span class="text-base label-text text-accent-content">Password</span>
                </label>
                <input bind:this={password} required id="password" name="password" type="password" placeholder="Enter Password"
                       class="w-full input input-bordered input-primary text-accent-content" />
            </div>
            <div>
                <label for="confirm_password" class="label">
                    <span class="text-base label-text text-accent-content">Password</span>
                </label>
                <input bind:this={confirm_password} required id="confirm_password" name="confirm_password" type="password" placeholder="Enter Password"
                       class="w-full input input-bordered input-primary text-accent-content" />
            </div>
            {#if form?.error}
                <div class="text-error">
                    {form.error}
                </div>
            {/if}
            <div>
                <button class="btn btn-primary">Register</button>
            </div>
            <a href="/login" class="text-xs text-gray-600 hover:underline hover:text-primary-focus">Have an account? Log in here.</a>

        </form>
    </div>
</div>
