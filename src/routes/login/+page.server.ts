import type {Actions, PageServerLoad} from './$types';
import {fail, redirect} from '@sveltejs/kit';
import {login} from "$lib/users"
export const actions: Actions = {
    default: async ({request, cookies, url }) => {
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
                sameSite: 'strict',
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            });

        } catch (error: any) {
            return fail(422, {
                data:formData,
                error: error.message
            });
        }
        const redirectToParam = url.searchParams.get("redirectTo");
        // This is to make sure attackers cannot put full links as a parameter, so there will always be a /
        const redirectTo = `/${redirectToParam?.slice(1) || "app"}`;
        throw redirect(302, redirectTo);
    }
};

export const load: PageServerLoad = ({locals}) => {
    const user = locals.user;

    if (user) {
        throw redirect(302, '/app');
    }
};  