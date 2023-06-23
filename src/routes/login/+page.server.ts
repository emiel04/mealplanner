import type {Actions, PageServerLoad} from './$types';
import {fail, redirect} from '@sveltejs/kit';
import {login} from "$lib/users"
export const actions: Actions = {
    default: async ({request, cookies}) => {
        const data = await request.formData();
        const formData = {
            username: data.get("username"),
            password: data.get("password")
        }

        const {username, password} = formData as { username: string; password: string };

        try {
            const jwt = await login(username, password);
            cookies.set('auth', `Bearer ${jwt}`, {
                httpOnly: true,
                path: '/',
                secure: true,
                sameSite: 'strict'
            });

        } catch (error: any) {
            return fail(422, {
                data:formData,
                error: error.message
            });
        }
        // Redirect to the login page
        throw redirect(302, '/app');
    }
};
export const load: PageServerLoad = ({locals}) => {
    const user = locals.user;

    if (user) {
        throw redirect(302, '/app');
    }
};