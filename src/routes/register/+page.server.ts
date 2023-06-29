import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { login, register } from "$lib/server/users"

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const formData = {
            username: data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
            confirm_password: data.get("confirm_password")
        }

        const { username, email, password, confirm_password } = formData as { username: string; email: string; password: string, confirm_password: string };
        let token: string;
        // Create a new user
        try {
            token = await register(username, email, password, confirm_password);
            cookies.set('auth', `Bearer ${token}`, {
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'strict'
            });
        } catch (error: any) {
            return fail(422, {
                data: formData,
                error: error.message
            });
        }
        throw redirect(302, '/app');

    }
};

export const load: PageServerLoad = ({ locals }) => {
    const user = locals.user;

    if (user) {
        throw redirect(302, '/app');
    }
};
