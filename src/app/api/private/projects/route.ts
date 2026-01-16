import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { ensureAuth } from '@/lib/auth';

export async function GET() {
    try {
        // Public access to view projects? No, public page uses static or different route?
        // User requested "Private Ops Mode" supports CRUD.
        // Let's assume this route is for the Dashboard (Private).
        await ensureAuth();
        const res = await db.query('SELECT * FROM projects ORDER BY created_at DESC');
        return NextResponse.json(res.rows);
    } catch (err) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}

export async function POST(request: Request) {
    try {
        await ensureAuth();
        const body = await request.json();
        const { title, type, tech, description, learning, github } = body;

        const res = await db.query(
            'INSERT INTO projects (title, type, tech, description, learning, github) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, type, tech, description, learning, github]
        );

        return NextResponse.json(res.rows[0]);
    } catch (err) {
        return NextResponse.json({ error: 'Error' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        await ensureAuth();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await db.query('DELETE FROM projects WHERE id = $1', [id]);
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: 'Error' }, { status: 500 });
    }
}
