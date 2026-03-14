import { Hono } from "hono";
import { z } from "zod";
import { db, schema } from "../db";
import { eq, like, or, sql, desc } from "drizzle-orm";

const books = new Hono();

// Validation schemas
const bookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  coverColor: z.string().optional(),
  spineTexture: z.enum(["leather", "cloth", "paper"]).optional(),
  thickness: z.number().min(1).max(5).optional(),
  height: z.number().min(1).max(3).optional(),
  genre: z.string().optional(),
  year: z.number().optional(),
  description: z.string().optional(),
  coverUrl: z.string().optional(),
});

// GET /api/books - List books with pagination and search
books.get("/", async (c) => {
  const page = parseInt(c.req.query("page") || "1");
  const limit = parseInt(c.req.query("limit") || "50");
  const search = c.req.query("search");
  const genre = c.req.query("genre");
  const offset = (page - 1) * limit;

  let query = db.select().from(schema.books);

  // Build conditions
  const conditions = [];

  if (search) {
    conditions.push(
      or(
        like(schema.books.title, `%${search}%`),
        like(schema.books.author, `%${search}%`)
      )
    );
  }

  if (genre) {
    conditions.push(eq(schema.books.genre, genre));
  }

  // Apply conditions and pagination
  let finalQuery = query.$dynamic();

  if (conditions.length > 0) {
    for (const condition of conditions) {
      if (condition) {
        finalQuery = finalQuery.where(condition);
      }
    }
  }

  const allBooks = await finalQuery
    .orderBy(desc(schema.books.id))
    .limit(limit)
    .offset(offset);

  // Get total count
  const countResult = await db
    .select({ count: sql<number>`count(*)` })
    .from(schema.books);
  const total = countResult[0]?.count || 0;

  return c.json({
    books: allBooks,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
});

// GET /api/books/genres/list - Get all genres (必须在 /:id 之前)
books.get("/genres/list", async (c) => {
  const genres = await db
    .selectDistinct({ genre: schema.books.genre })
    .from(schema.books);

  return c.json(genres.map((g) => g.genre));
});

// GET /api/books/search-external - Search Google Books (必须在 /:id 之前)
books.get("/search-external", async (c) => {
  const query = c.req.query("q");
  if (!query) {
    return c.json({ error: "Query parameter 'q' is required" }, 400);
  }

  try {
    console.log(`Searching Google Books for: ${query}`);
    // Google Books API search without strict language restriction
    // Google's relevance algorithm usually handles language detection well based on the query script
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=40`
    );
    
    if (!response.ok) {
        throw new Error(`Google Books API responded with ${response.status}`);
    }

    const data = await response.json();

    if (!data.items) {
      return c.json({ books: [] });
    }

    const books = data.items.map((item: any) => {
      const volumeInfo = item.volumeInfo || {};
      const imageLinks = volumeInfo.imageLinks || {};
      
      // Try to get the highest quality image available
      const coverUrl = imageLinks.thumbnail || imageLinks.smallThumbnail;

      return {
        key: item.id,
        title: volumeInfo.title || "未知书名",
        author: volumeInfo.authors?.[0] || "未知作者",
        year: volumeInfo.publishedDate
          ? parseInt(volumeInfo.publishedDate.substring(0, 4))
          : null,
        coverUrl: coverUrl?.replace("http:", "https:") || null,
        description: volumeInfo.description || null,
        categories: volumeInfo.categories || [],
        pageCount: volumeInfo.pageCount || null,
        publisher: volumeInfo.publisher || null,
        language: volumeInfo.language || null,
      };
    });

    return c.json({ books });
  } catch (error) {
    console.error("Google Books API error:", error);
    return c.json({ error: "搜索失败，请稍后重试" }, 500);
  }
});

// POST /api/books/import - 导入书籍 (必须在 /:id 之前)
books.post("/import", async (c) => {
  try {
    const body = await c.req.json();
    const { title, author, year, coverUrl, description, categories, pageCount } = body;

    // 根据页数生成书籍厚度
    const thickness = pageCount
      ? Math.min(5, Math.max(1, Math.ceil(pageCount / 150)))
      : Math.floor(Math.random() * 5) + 1;

    // 根据分类确定类型
    const genreMap: Record<string, string> = {
      "Fiction": "小说",
      "Literature": "文学",
      "History": "历史",
      "Science": "科学",
      "Philosophy": "哲学",
      "Poetry": "诗歌",
      "Biography": "传记",
      "Business": "商业",
      "Self-Help": "自助",
      "Technology": "科技",
      "Art": "艺术",
      "Religion": "宗教",
      "Psychology": "心理",
      "Education": "教育",
      "Children": "儿童",
      "Comics": "漫画",
      "Mystery": "悬疑",
      "Romance": "言情",
      "Fantasy": "奇幻",
      "Horror": "恐怖",
    };

    let genre = "未分类";
    if (categories && categories.length > 0) {
      for (const cat of categories) {
        for (const [key, value] of Object.entries(genreMap)) {
          if (cat.toLowerCase().includes(key.toLowerCase())) {
            genre = value;
            break;
          }
        }
        if (genre !== "未分类") break;
      }
      if (genre === "未分类") {
        genre = categories[0];
      }
    }

    // 生成随机视觉属性
    const colors = [
      "#8B4513", "#2F4F4F", "#800020", "#1E3A5F", "#355E3B",
      "#4A0E4E", "#8B0000", "#2C3E50", "#704214", "#1C1C1C",
      "#4B3621", "#36454F", "#483D8B", "#556B2F", "#5C4033"
    ];
    const textures = ["leather", "cloth", "paper"] as const;

    const newBook = await db.insert(schema.books).values({
      title,
      author,
      year,
      coverUrl,
      description,
      coverColor: colors[Math.floor(Math.random() * colors.length)],
      spineTexture: textures[Math.floor(Math.random() * textures.length)],
      thickness,
      height: Math.floor(Math.random() * 3) + 1,
      genre,
      createdAt: new Date(),
    }).returning();

    return c.json(newBook[0], 201);
  } catch (error) {
    console.error("Import error:", error);
    return c.json({ error: "导入失败，请稍后重试" }, 500);
  }
});

// GET /api/books/:id - Get single book (动态路由放在最后)
books.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) {
    return c.json({ error: "Invalid book ID" }, 400);
  }

  const book = await db
    .select()
    .from(schema.books)
    .where(eq(schema.books.id, id))
    .limit(1);

  if (book.length === 0) {
    return c.json({ error: "Book not found" }, 404);
  }

  return c.json(book[0]);
});

// POST /api/books - Create new book
books.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const validatedData = bookSchema.parse(body);

    const result = await db.insert(schema.books).values({
      ...validatedData,
      createdAt: new Date(),
    }).returning();

    return c.json(result[0], 201);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json({ error: "Validation error", details: error.errors }, 400);
    }
    throw error;
  }
});

// PUT /api/books/:id - Update book
books.put("/:id", async (c) => {
  try {
    const id = parseInt(c.req.param("id"));
    const body = await c.req.json();
    const validatedData = bookSchema.partial().parse(body);

    const result = await db
      .update(schema.books)
      .set(validatedData)
      .where(eq(schema.books.id, id))
      .returning();

    if (result.length === 0) {
      return c.json({ error: "Book not found" }, 404);
    }

    return c.json(result[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json({ error: "Validation error", details: error.errors }, 400);
    }
    throw error;
  }
});

// DELETE /api/books/:id - Delete book
books.delete("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));

  const result = await db
    .delete(schema.books)
    .where(eq(schema.books.id, id))
    .returning();

  if (result.length === 0) {
    return c.json({ error: "Book not found" }, 404);
  }

  return c.json({ message: "Book deleted successfully" });
});

export default books;
