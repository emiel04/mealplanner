import { JWT_SECRET } from "$env/static/private";
import type { RequestEvent } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import db from "$lib/server/db";

export const authenticate = async (event: RequestEvent) => {
    const {cookies} = event;
    const tokenCookie = cookies.get('auth');
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

            const userInfo: UserInfo = {
                id: user.id,
                email: user.email,
                username: user.username
            };
            return userInfo;

        } catch (error) {
            console.error(error);
        }
    }
    return undefined;
}