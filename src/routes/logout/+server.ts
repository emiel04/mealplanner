import { redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { invalidate, invalidateAll } from "$app/navigation"

export const POST: RequestHandler = async ({ cookies }) => {
	cookies.delete("auth")
	throw redirect(303, "/login")
}