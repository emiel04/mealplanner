<script lang="ts">
    import type { ActionData } from './$types';
    import { enhance } from '$app/forms';

    export let form: ActionData;
</script>
<div class="flex flex-col justify-center">
    <div class="w-full p-6 bg-base-300 m-auto rounded-md shadow-md lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-accent-content">Login</h1>
        <form class="space-y-4" method="post" use:enhance>
            <div>
                <label class="label" for="username">
                    <span class="text-base label-text text-accent-content">Username/Email</span>
                </label>
                <input id="username" name="username" type="text" placeholder="Username/Email" class="w-full input input-bordered input-primary" />
            </div>
            <div>
                <label for="password" class="label">
                    <span class="text-base label-text text-accent-content">Password</span>
                </label>
                <input id="password" name="password" type="password" placeholder="Enter Password"
                       class="w-full input input-bordered input-primary text-accent-content" />
            </div>
            {#if form?.error}
                <div class="text-error">
                    {form.error}
                </div>
            {/if}
            <a href="/forgot-password" class="text-xs text-gray-600 hover:underline hover:text-primary-focus">Forgot Password?</a>
            <div>
                <button class="btn btn-primary">Login</button>
            </div>
            <a href="/register" class="text-xs text-gray-600 hover:underline hover:text-primary-focus">No account? Create one here</a>

        </form>
    </div>
</div>
