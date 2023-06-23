import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({locals}) => {

    const user = locals.user;
    if (!user) {
        throw redirect(302, '/login');
    }

    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await usersRes.json();

    if (usersRes.ok) {
        return {
            users: usersData
        };
    }

    return {
        status: usersRes.status,
        error: new Error('Could not fetch the users!'),
    }
}



