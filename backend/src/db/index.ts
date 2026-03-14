import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database("bookshelf.db");
export const db = drizzle(sqlite, { schema });

// Create tables if they don't exist
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    cover_color TEXT NOT NULL DEFAULT '#8B4513',
    spine_texture TEXT NOT NULL DEFAULT 'cloth',
    thickness INTEGER NOT NULL DEFAULT 2,
    height INTEGER NOT NULL DEFAULT 2,
    genre TEXT NOT NULL DEFAULT 'fiction',
    year INTEGER,
    description TEXT,
    cover_url TEXT,
    created_at INTEGER
  )
`);

export { schema };
