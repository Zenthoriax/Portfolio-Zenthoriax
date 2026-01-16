import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.JWT_SECRET || 'fallback_secret_key';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h') // 24 hour session
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ['HS256'],
    });
    return payload;
}

export async function getSession() {
    const session = (await cookies()).get('session')?.value;
    if (!session) return null;
    try {
        return await decrypt(session);
    } catch (error) {
        return null;
    }
}

export async function login(username: string) {
    // Create the session
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const session = await encrypt({ user: username, expires });

    // Set the cookie
    (await cookies()).set('session', session, { expires, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
}

export async function logout() {
    (await cookies()).set('session', '', { expires: new Date(0) });
}

// Middleware helper
export async function ensureAuth() {
    const session = await getSession();
    if (!session) throw new Error('Unauthorized');
    return session;
}
