import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL || "postgres://placeholder:placeholder@localhost:5432/placeholder";

if (!process.env.DATABASE_URL) {
    console.warn("WARNING: DATABASE_URL is missing. DB operations will fail.");
}

const sql = neon(connectionString);
export const db = drizzle(sql);
