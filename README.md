<div align="center">
  <p>A High-Performance Book Management Backend / 高性能个人图书管理后端服务</p>
  <p>
    <a href="#english">English</a> •
    <a href="#简体中文">简体中文</a>
  </p>
</div>

---

<h2 id="english">🇬🇧 English</h2>

# Bookshelf (Book Management Backend)

![Bun](https://img.shields.io/badge/Bun-1.1-000000?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)

**Bookshelf** is a modern, high-performance, and strongly typed backend service designed for personal digital library management. By leveraging the **Bun** runtime and the blazing-fast **Hono** web framework, it delivers an industrial-grade RESTful API with minimal overhead and extreme I/O efficiency.

### ⚙️ Core Technical Architecture

#### 1. Extreme I/O Performance & Runtime Optimization
- **Bun Runtime**: Deeply integrated with Bun's native I/O interfaces. Compared to Node.js, Bun's JavaScriptCore (JSC) engine offers significantly faster cold starts and optimized native connections for PostgreSQL.
- **Hono Routing Engine**: Built on Hono with its `RegExpRouter` algorithm. Optimized for edge computing, it guarantees near constant O(1) routing latency even with complex RESTful route trees.

#### 2. Type-safe Data Access Layer (DAL)
- **Drizzle ORM**: Deprecates heavy traditional ORMs in favor of Drizzle's zero-abstraction overhead. It allows writing SQL-like queries while automatically inferring TypeScript interfaces that perfectly align with your database schema.
- **Zero-downtime Migrations**: Utilizing Drizzle Kit, the system supports automated schema diffing and migration script generation to ensure safe database evolution.

#### 3. Data Contracts & Runtime Validation
- **Zod-driven Validation**: All API payloads and queries are strictly filtered through Zod schemas. Invalid requests are rejected at the middleware level, entirely preventing logic crashes caused by dirty data.

### 📂 Project Structure

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # Database schema definitions & connection pooling
    │   ├── routes/     # Modular business logic routes (e.g., books.ts)
    │   ├── index.ts    # Application entry point & Hono instance setup
    │   ├── middleware/ # Custom middleware for auth, logging, and CORS
    │   └── seed.ts     # Database seeding scripts for testing
    ├── package.json    # Bun scripts and dependency definitions
    └── tsconfig.json   # Strict TypeScript compiler configuration
```

### 🚀 Deployment Guide

1. **Prerequisites**: Ensure [Bun 1.1+](https://bun.sh/) is installed.
2. **Setup**:
   ```bash
   cd backend
   bun install
   ```
3. **Database Configuration**: Create a `.env` file and set your `DATABASE_URL`.
4. **Sync Schema & Run**:
   ```bash
   bun run db:push
   bun run dev
   ```

### 📄 License
This project is open-sourced under the MIT License.

---

<h2 id="简体中文">🇨🇳 简体中文</h2>

# Bookshelf (个人图书管理后端服务)

**Bookshelf** 是一个基于现代后端技术栈构建的高性能、强类型图书管理系统。项目旨在通过极简的架构设计实现对个人数字化藏书的高效治理，利用 **Bun** 运行时的底层优化与 **Hono** 框架的高速路由引擎，构建了一个具备工业级稳定性的 RESTful 后台。

### ⚙️ 核心技术架构深度解析

#### 1. 极致的 I/O 性能与运行时优化
- **Bun Runtime**: 系统深度集成了 Bun 的原生 I/O 接口。相比于 Node.js，Bun 的 JavaScript Core (JSC) 引擎在冷启动时间上极大缩短，并提供了原生的 PostgreSQL 连接优化。
- **Hono 路由引擎**: 采用基于 `RegExpRouter` 匹配算法的 Hono 框架。该框架专为边缘计算环境优化，即便在复杂的 REST 路由树下也能保持常量级（O(1)）的路由寻址时延。

#### 2. 强类型持久层与模式推导 (Type-safe DAL)
- **Drizzle ORM**: 弃用了传统的重型 ORM，转而采用零抽象开销的 Drizzle。它允许开发者直接编写 SQL 风格的查询，并能自动推导出与数据库字段完全对齐的 TypeScript Interface。
- **零停机迁移**: 配合 Drizzle Kit，系统支持自动化的模式比对与迁移脚本生成，确保数据库模式的演进始终处于受控状态。

#### 3. 数据契约与运行时校验 (Data Contract)
- **Zod 驱动的模式校验**: 所有的 API 请求（Payload/Query）均经过 Zod 定义的严格 Schema 过滤。不符合数据契约的请求将在中间件层级被拒绝，杜绝了由于脏数据导致的逻辑崩溃。

### 📂 项目工程规范

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # 数据库 Schema 定义与连接池配置
    │   ├── routes/     # 业务逻辑路由实现，采用模块化组织
    │   ├── index.ts    # 程序全局入口与 Hono 实例治理
    │   ├── middleware/ # 包含认证、日志与 CORS 策略的自定义中间件
    │   └── seed.ts     # 数据播种与测试脚本
    ├── package.json    # 包含 Bun 运行脚本与依赖契约
    └── tsconfig.json   # 严格模式下的 TypeScript 编译器策略
```

### 🚀 部署指南

1. **环境准备**: 必须预装 [Bun 1.1+](https://bun.sh/) 运行时。
2. **依赖安装**:
   ```bash
   cd backend
   bun install
   ```
3. **环境配置**: 复制并配置 `.env` 文件，填入有效的 `DATABASE_URL`。
4. **启动服务**:
   ```bash
   bun run db:push  # 同步数据库模式
   bun run dev      # 启动开发服务器
   ```

### 📄 许可证
本项目遵循 MIT License 协议开源。