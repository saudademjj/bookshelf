<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# Bookshelf (Personal Book Management Backend Service)

![Bun](https://img.shields.io/badge/Bun-1.1-000000?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)

This project is a high-performance book management system built with a modern backend stack. Leveraging the ultra-fast execution of the **Bun** runtime and the lightweight routing engine of the **Hono** framework, it provides a strongly-typed and extensible RESTful API solution for personal digital book collections.

## Core Design Standards

### 1. Maximum Execution Efficiency
Deeply integrates Bun's native APIs for I/O processing, offering significant advantages in cold start speeds and request latency compared to traditional Node.js environments. Paired with Hono's minimalist routing design, it ensures high throughput with a low resource footprint.

### 2. Full-stack Strong Typing
- **Drizzle ORM**: Employs a strongly-typed SQL query builder, eliminating runtime query errors and supporting zero-downtime database schema synchronization.
- **Input Validation**: Integrates Zod for rigorous input schema validation, ensuring that invalid data is blocked at the logic entry point.

### 3. Standardized RESTful Practices
The interface design follows resource-oriented principles, achieving high decoupling of business logic through modular routing distribution.

## API Matrix

| Method | Path | Description |
| :--- | :--- | :--- |
| `GET` | `/api/books` | Batch retrieval of book lists with multi-dimensional filtering. |
| `POST` | `/api/books` | Archives a new book entry. |
| `GET` | `/api/books/:id` | Retrieves detailed metadata for a specific book. |
| `PUT` | `/api/books/:id` | Corrects or updates existing book information. |
| `DELETE` | `/api/books/:id` | Physically removes a specific book record. |

## Project Structure

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # Standard DB schema definitions and indexing strategies
    │   ├── routes/     # Business module implementation based on Hono routing
    │   ├── index.ts    # Startup entry, global middleware chain, and error handling
    │   └── seed.ts     # Data seeding scripts
    ├── package.json    # Dependency management
    └── tsconfig.json   # TypeScript compiler configuration
```

## License
This project is licensed under the MIT License.
