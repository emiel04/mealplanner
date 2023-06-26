import { json, redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { invalidate, invalidateAll } from "$app/navigation"

export const POST: RequestHandler = async ({ cookies, url }) => {
    const theme = url.searchParams.get("theme");

    if (theme) {
        cookies.set("theme", theme, {
            path: "/",
            maxAge: 60 * 60 * 24 * 1000
        });
    }
    console.log("Set theme to: " + theme);
    
    return new Response(theme);
}