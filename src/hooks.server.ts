import {redirect, type Handle} from "@sveltejs/kit";
import {JWT_SECRET} from '$env/static/private';
import db from "./lib/server/db";
import { authenticate } from "$lib/server/authentication";
import { protectedRoutes } from "./protected_routes";

const handle: Handle = async ({ event, resolve }) => {
    const user: UserInfo = await authenticate(event);
    event.locals.user = user;

    if(protectedRoutes.some(route => event.url.pathname.startsWith(route))){
        if(!user){
            const fullPath = event.url.pathname + event.url.search;
            // This is to make sure attackers cannot put full links as a parameter, so there will always be a /
            const redirectTo : String = "/" + fullPath.slice(1);
            throw redirect(303, "/login?redirectTo=" + redirectTo)
        }
    }

    const response: Response = await resolve(event);

    return response;
};

export { handle };