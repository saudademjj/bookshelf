import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const books = sqliteTable("books", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  author: text("author").notNull(),
  coverColor: text("cover_color").notNull().default("#8B4513"),
  spineTexture: text("spine_texture").notNull().default("cloth"), // leather, cloth, paper
  thickness: integer("thickness").notNull().default(2), // 1-5
  height: integer("height").notNull().default(2), // 1-3
  genre: text("genre").notNull().default("fiction"),
  year: integer("year"),
  description: text("description"),
  coverUrl: text("cover_url"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
});

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;
