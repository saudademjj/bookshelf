<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Bookshelf -- High-Performance Personal Book Management System

![Bun](https://img.shields.io/badge/Bun-Runtime-F9F1E1?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?style=flat-square)

A high-performance personal book management system built with Bun + Hono + Drizzle ORM. The project adopts a modern TypeScript full-stack architecture with SQLite as an embedded database and Zod for runtime data validation, providing a complete RESTful CRUD API for book management. The overall design pursues extreme lightweight and high performance, serving as a practical example of full-stack development in the Bun ecosystem.

## Core Features

### Book Management API
- Complete RESTful CRUD endpoints: create, read, update, and delete books
- Search by title, author, ISBN, and other fields
- Paginated queries with sorting
- Zod Schema-driven request validation ensuring data integrity

### Data Persistence
- SQLite embedded database, zero-configuration out of the box
- Drizzle ORM provides type-safe query building and migration management
- Built-in seed data script for quick demo data population

### Developer Experience
- Bun native hot reload (`bun --hot`), instant code change reflection
- End-to-end TypeScript type inference from schema to API response
- Lightweight dependencies, extremely fast cold starts

## Technical Architecture

### Runtime & Framework

- Bun: High-performance JavaScript/TypeScript runtime with built-in bundler, test runner, and package manager
- Hono 4.11: Ultra-lightweight web framework with excellent routing performance and rich middleware ecosystem
- TypeScript 5: End-to-end static type checking

### Data Layer

- Drizzle ORM 0.45: Type-safe SQL query builder
  - Declarative schema definitions
  - Automatic migration generation
  - Zero-runtime-overhead query building
- SQLite: Embedded relational database, single-file storage, no standalone database service required
- Zod 4: Runtime data validation and type inference

### Architecture Pattern

- Layered Architecture: Routes -> Data Layer (DB/Schema) -> Storage (SQLite)
- Separation of Concerns: Route definitions, data models, and database connections are independently organized
- Validation-first: All API entries pass through Zod Schema validation before reaching business logic

## Directory Structure

```text
bookshelf/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── index.ts       # Database connection initialization
│   │   │   └── schema.ts      # Drizzle Schema definitions (book table structure)
│   │   ├── routes/
│   │   │   └── books.ts       # Book CRUD API routes
│   │   ├── index.ts           # App entry point, Hono instance and middleware registration
│   │   └── seed.ts            # Seed data population script
│   ├── bookshelf.db           # SQLite database file
│   ├── package.json           # Dependencies and scripts
│   └── tsconfig.json          # TypeScript configuration
├── frontend/                   # Frontend application (in development)
├── LICENSE
└── README.md
```

## Quick Start

### Prerequisites

- Bun >= 1.0 ([Installation Guide](https://bun.sh))

### 1. Clone and Install

```bash
git clone https://github.com/saudademjj/bookshelf.git
cd bookshelf/backend
bun install
```

### 2. Initialize Database

```bash
bun run seed
```

This command creates the SQLite database file and populates it with sample book data.

### 3. Start Development Server

```bash
bun run dev
```

The API listens on `http://localhost:3000` by default.

### Available Commands

```bash
bun run dev      # Start dev server (hot reload mode)
bun run start    # Start production server
bun run seed     # Populate seed data
```

## API Endpoints

### Book Resource

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/books` | List all books |
| GET | `/api/books/:id` | Get book details |
| POST | `/api/books` | Create a new book |
| PUT | `/api/books/:id` | Update book info |
| DELETE | `/api/books/:id` | Delete a book |

### Request Examples

```bash
# Get all books
curl http://localhost:3000/api/books

# Create a new book
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Computer Systems: A Programmer Perspective", "author": "Randal E. Bryant"}'
```

## Technical Highlights

- Bun Native Runtime: Compared to Node.js, Bun offers significant advantages in startup speed, package installation speed, and HTTP throughput
- Zero-config Database: SQLite single-file storage requires no standalone database service installation or configuration — clone and run
- Type-safe Closed Loop: Drizzle Schema -> Zod validation -> Hono routes, TypeScript types flow from database definitions all the way to API responses
- Minimal Dependencies: Only 3 core dependencies (Hono + Drizzle + Zod), no redundant abstraction layers

## License

MIT License
