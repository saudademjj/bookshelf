import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import books from "./routes/books";

const app = new Hono();

// Middleware
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.route("/api/books", books);

// Health check
app.get("/health", (c) => c.json({ status: "ok" }));

// Root
app.get("/", (c) => c.json({ message: "Bookshelf API", version: "1.0.0" }));

const port = 3001;
console.log(`Server running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
