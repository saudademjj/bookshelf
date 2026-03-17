<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Bookshelf (Personal Book Management Backend Service)

![Bun](https://img.shields.io/badge/Bun-1.1-000000?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)

Bookshelf is a high-performance, strongly-typed book management system built with a modern backend stack. Designed for efficient governance of personal digital book collections, it leverages the low-level optimizations of the **Bun** runtime and the high-speed routing engine of the **Hono** framework to provide an industrial-grade RESTful API service.

## ⚙️ Core Technical Architecture Deep Dive

### 1. Maximum I/O Performance & Runtime Optimization
- **Bun Runtime**: Deeply integrates with Bun's native I/O interfaces. Compared to Node.js, Bun's JavaScript Core (JSC) engine offers ~4x faster cold starts and provides native, highly-optimized SQLite/PostgreSQL connectors.
- **Hono Routing Engine**: Built on the **RegExpRouter** matching algorithm, Hono is optimized for edge computing environments, maintaining near-constant time (O(1)) route lookup latency even with complex REST trees.

### 2. Strongly-Typed Persistence Layer (Type-safe DAL)
- **Drizzle ORM**: Eschews traditional heavy ORMs in favor of Drizzle's zero-abstraction overhead. It allows developers to write SQL-style queries while automatically inferring TypeScript interfaces perfectly aligned with database fields.
- **Zero-downtime Migrations**: Coupled with Drizzle Kit, the system supports automated schema diffing and migration script generation, ensuring controlled evolution of the database schema.

### 3. Data Contract & Runtime Validation
- **Zod-Driven Schema Validation**: All API requests (Payload/Query) are filtered through strict Zod-defined schemas. Requests violating the data contract are rejected at the middleware level, preventing logic failures due to malformed data.

## 📂 Engineering Standards

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # Schema definitions, connection pool singleton, and indexing
    │   ├── routes/     # Business logic implementations, organized modularly (e.g., books.ts)
    │   ├── index.ts    # Global entry point, Hono instance management, and middleware chain
    │   ├── middleware/ # Custom middleware for auth, request tracing, and CORS
    │   └── seed.ts     # Data seeding scripts for stress testing and demos
    ├── package.json    # Bun scripts and dependency manifest
    └── tsconfig.json   # TypeScript compiler policies in strict mode
```

## 🚀 Deployment Guide

### 1. Requirements
- [Bun 1.1+](https://bun.sh/) is strictly required.

### 2. Launch Steps
```bash
cd backend
bun install

# Configure .env (DATABASE_URL)
# Sync database schema
bun run db:push

# Launch development server
bun run dev
```

## License
MIT License
