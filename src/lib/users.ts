import db from "./db";
import bcrypt from 'bcryptjs';
import {JWT_SECRET} from '$env/static/private';
import jwt from "jsonwebtoken"

export async function login(name: string, password: string) {
    if (!name || !password) {
        throw new Error("Please fill in everything");
    }

    const user = await db.user.findFirst({
        where: {
            OR: [
                {email: name},
                {username: name}
            ]
        }
    });
    if (!user) {
        throw Error("Invalid credentials");
    }
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
        throw Error("Invalid credentials");
    }
    const jwtUser = {
        id: user.id,
        email: user.email,
        username: user.username
    }
    return jwt.sign(jwtUser, JWT_SECRET)
}

export async function register(username: string, email: string, password: string, confirm_password: string) {
    if (!username || !email || !password || !confirm_password) {
        throw new Error("Please fill in everything");
    }
    if (password !== confirm_password) {
        throw new Error("Passwords must match!");
    }

    const emailUser = await db.user.findUnique({
        where: {
            email
        }
    });

    if (emailUser) {
        throw new Error("Email already in use!")
    }
    const nameUser = await db.user.findUnique({
        where: {
            username
        }
    });

    if (nameUser) {
        throw new Error("Username already in use!")
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
    } catch (error) {
        throw new Error("Something went wrong!");
    }

}