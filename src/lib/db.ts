import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});

export const db = {
    query: (text: string, params?: any[]) => pool.query(text, params),
};

// Initial setup helper to ensure tables exist
export async function initDb() {
    const createNotesTable = `
    CREATE TABLE IF NOT EXISTS notes (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    const createProjectsTable = `
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT,
      tech TEXT,
      description TEXT,
      learning TEXT,
      github TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    try {
        await db.query(createNotesTable);
        await db.query(createProjectsTable);
        console.log('Database tables verified.');
    } catch (err) {
        console.error('Database initialization failed:', err);
    }
}
