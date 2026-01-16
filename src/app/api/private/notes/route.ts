import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { ensureAuth } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        await ensureAuth(); // Guard
        const body = await request.json();
        const { title, content } = body;

        if (!title) {
            return NextResponse.json({ error: 'Title required' }, { status: 400 });
        }

        const res = await db.query(
            'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
            [title, content || '']
        );

        return NextResponse.json(res.rows[0]);
    } catch (err) {
        return NextResponse.json({ error: 'Unauthorized or Server Error' }, { status: 401 });
    }
}

export async function GET() {
    try {
        await ensureAuth();
        const res = await db.query('SELECT * FROM notes ORDER BY created_at DESC');
        return NextResponse.json(res.rows);
    } catch (err) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}
