// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: UserInfo
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
