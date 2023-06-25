import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = ({locals}) => {
    const user: UserInfo = locals.user;

    if (user) {
        throw redirect(302, '/app');
    }else{
        throw redirect(302, '/login');
    }
};