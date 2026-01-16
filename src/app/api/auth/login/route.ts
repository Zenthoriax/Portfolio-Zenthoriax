import { NextResponse } from 'next/server';
import { login } from '@/lib/auth';

const VALID_USER = 'Zenthoriax';
const VALID_PASS = '09082006';

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    if (username === VALID_USER && password === VALID_PASS) {
        await login(username);
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid Credentials' }, { status: 401 });
}
