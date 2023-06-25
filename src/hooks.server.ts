import {redirect, type Handle} from "@sveltejs/kit";
import {JWT_SECRET} from '$env/static/private';
import db from "./lib/server/db";
import { authenticate } from "$lib/server/authentication";
import { protectedRoutes } from "./protected_routes";
import { generateRedirectToLoginPageURL } from "$lib/utils";

const handle: Handle = async ({ event, resolve }) => {
    const user: UserInfo = await authenticate(event);
    event.locals.user = user;

    if(protectedRoutes.some(route => event.url.pathname.startsWith(route))){
        if(!user){
            throw redirect(303, generateRedirectToLoginPageURL(event.url))
        }
    }

    const response: Response = await resolve(event);

    return response;
};

export { handle };