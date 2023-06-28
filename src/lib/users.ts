import db from "./server/db";
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '$env/static/private';
import jwt from "jsonwebtoken"
import { error } from "@sveltejs/kit";

export async function login(name: string, password: string) {
    if (!name || !password) {
        return error(422, "Please fill in everything")
    }

    const user = await db.user.findFirst({
        where: {
            OR: [
                { email: name },
                { username: name }
            ]
        }
    });
    if (!user) {
        return error(401, "Invalid credentials")
    }
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
        return error(401, "Invalid credentials")
    }
    const jwtUser = {
        id: user.id,
        email: user.email,
        username: user.username
    }
    return jwt.sign(jwtUser, JWT_SECRET, { expiresIn: '30 days' });
}

export async function register(username: string, email: string, password: string, confirm_password: string) {
    if (!username || !email || !password || !confirm_password) {
        return error(422, "Please fill in everything")
    }
    if (password !== confirm_password) {
        return error(422, "Passwords must match!")
    }

    const emailUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (emailUser) {
        return error(409, "Email already in use!")
    }
    const nameUser = await db.user.findUnique({
        where: {
            username
        }
    });

    if (nameUser) {
        return error(409, "Username already in use!")
    }

    try {
        const user = await db.user.create({
            data: {
                username,
                email,
                password: await bcrypt.hash(password, 10)
            }
        });
        return login(user.email, password)
    } catch (err) {
        return error(500, "Something went wrong!")
    }

}