# Bookshelf

English | [简体中文](README.md)

`Bookshelf` is a full-stack bookshelf management app built to combine a practical API backend with a polished browsing experience. It is designed as a portfolio-friendly project for managing, importing, searching, and presenting books.

## Features

- Create, update, and delete books
- Search by title or author
- Filter by genre
- Paginated browsing
- Import data from Google Books
- Visual bookshelf presentation with motion
- Responsive UI

## Tech Stack

Backend:

- `Bun`
- `Hono`
- `SQLite`
- `Drizzle ORM`
- `Zod`

Frontend:

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Zustand`
- `TanStack React Query`
- `TanStack Virtual`
- `Framer Motion`

## Repository Structure

```text
bookshelf/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   └── app/
│   └── package.json
├── README.md
└── README.en.md
```

## Quick Start

### Backend

```bash
cd backend
bun install
bun run seed
bun run dev
```

Runs on `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:3001`

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
