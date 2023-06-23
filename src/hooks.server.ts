import type {Handle} from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from '$env/static/private';
import db from "./lib/db";

const handle: Handle = async ({ event, resolve }) => {
    const tokenCookie = event.cookies.get('auth');
    if (tokenCookie) {
        const token = tokenCookie.split(' ')[1]; // removes Bearer

        try {
            const jwtUser = jwt.verify(token, JWT_SECRET);
            if (typeof jwtUser === 'string') {
                throw new Error('Something went wrong');
            }

            const user = await db.user.findUnique({
                where: {
                    id: jwtUser.id
                }
            });

            if (!user) {
                throw new Error('User not found');
            }

            (event.locals as any).user = {
                id: user.id,
                email: user.email
            };
        } catch (error) {
            console.error(error);
        }
    }

    return resolve(event);
};

export { handle };