# bookshelf

A full-stack bookshelf management application built with modern web technologies.

## Tech Stack

### Backend
- **Runtime**: Bun
- **Framework**: Hono
- **Database**: SQLite with Drizzle ORM
- **Validation**: Zod

### Frontend
- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Animations**: Framer Motion
- **Virtual List**: TanStack Virtual

## Project Structure

```
bookshelf/
├── backend/          # Backend API server
│   ├── src/
│   │   ├── db/       # Database schema and config
│   │   ├── routes/   # API routes
│   │   └── index.ts  # Server entry
│   └── package.json
└── frontend/         # Next.js web app
    ├── src/
    │   └── app/      # Next.js App Router
    └── package.json
```

## Getting Started

### Prerequisites
- Bun (for backend)
- Node.js 18+ (for frontend)

### Backend Setup

```bash
cd backend
bun install
bun run seed     # Seed initial data
bun run dev      # Start development server
```

The backend server runs on `http://localhost:3000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev      # Start development server
```

The frontend runs on `http://localhost:3001`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | List books (supports pagination, search, genre filter) |
| GET | `/api/books/:id` | Get single book |
| POST | `/api/books` | Create new book |
| PUT | `/api/books/:id` | Update book |
| DELETE | `/api/books/:id` | Delete book |
| GET | `/api/books/genres/list` | Get all genres |
| GET | `/api/books/search-external?q=...` | Search Google Books |
| POST | `/api/books/import` | Import book from Google Books |

## Features

- 📚 CRUD operations for books
- 🔍 Search books by title or author
- 🎨 Visual bookshelf with customizable book covers
- 📥 Import books from Google Books API
- 📂 Filter books by genre
- 📖 Pagination support
- 🎭 Beautiful animations with Framer Motion
- 📱 Responsive design