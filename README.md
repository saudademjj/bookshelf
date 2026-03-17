# Bookshelf (个人图书管理后端服务 / Bookshelf Personal Book Management Backend)

基于 Bun 和 Hono 开发的高性能图书管理系统后端，提供强类型的 RESTful API 以支持个人数字化藏书的 CRUD 操作。

High-performance book management backend developed with Bun and Hono, providing strongly-typed RESTful APIs for CRUD operations of personal digital collections.

## 技术选型 / Technical Stack

- Runtime: Bun 1.1+ (极速运行时环境 / Ultra-fast runtime).
- API Framework: Hono (极简、高性能 Web 框架 / Minimalist high-performance framework).
- ORM: Drizzle ORM (类型安全的 SQL 查询 / Type-safe SQL querying).
- Validation: Zod (严谨的数据入参校验 / Rigorous data validation).

## 项目目录 / Project Structure

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # 数据库 Schema 定义与连接配置 / Schema and connection
    │   ├── routes/     # 模块化业务路由逻辑 (Books) / Modular business routes
    │   └── index.ts    # 程序入口与中间件治理 / Entry point and middleware
    ├── package.json
    └── tsconfig.json
```

## 快速启动 / Quick Start

```bash
cd backend
bun install
# 配置环境变量与数据库
bun run dev
```

## 许可证 / License
本项目采用 [MIT License](LICENSE) 协议。 / This project is licensed under the MIT License.
