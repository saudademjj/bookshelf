<div align="center">
  <a href="./README.md">简体中文</a> | <a href="./README_en.md">English</a>
</div>

# Bookshelf (个人图书管理后端服务 / Bookshelf Backend Service)

![Bun](https://img.shields.io/badge/Bun-1.1-000000?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)

Bookshelf 是一个基于现代 Web 技术栈构建的高性能、强类型图书管理系统后端。项目旨在通过极简的架构设计实现对个人数字化藏书的高效治理，利用 Bun 运行时与 Hono 框架的组合，确保了在低资源占用下的高吞吐能力。

Bookshelf is a high-performance, strongly-typed book management backend built with modern technologies. It aims to achieve efficient governance of personal digital book collections through a minimalist architecture, leveraging the combination of the Bun runtime and Hono framework to ensure high throughput with low resource consumption.

## 技术架构深度解析 / Technical Architecture

### 1. 极致运行效率 (Maximum Efficiency)
- **Bun Runtime**: 深度集成 Bun 的原生 API 进行 I/O 处理，相较于传统的 Node.js 环境，在启动速度与请求处理时延上具备显著优势。 / Leveraging Bun's native APIs for superior startup speed and low-latency.
- **Hono Framework**: 采用具备极小包体积与极速路由引擎的 Hono 框架，完美契合 Edge Computing（边缘计算）场景。 / Utilizing Hono for its ultra-small footprint and fast routing engine.

### 2. 严谨的类型安全与校验 (Strict Type Safety)
- **全链路 TypeScript**: 从底层数据库建模到顶层 API 响应，实现全量类型推导。 / Full-stack type inference from DB to API.
- **Drizzle ORM**: 采用强类型的 SQL 查询构建器，消除运行时查询错误，并支持零停机模式的 Schema 同步。 / Type-safe SQL builder via Drizzle ORM.
- **Zod Validation**: 集成 Zod 进行严格的入参 Schema 校验，确保非法数据在逻辑入口处即被阻断。 / Rigorous input validation via Zod.

## API 接口矩阵 / API Interface Matrix

| 方法 / Method | 路径 / Path | 功能描述 / Function Description |
| :--- | :--- | :--- |
| `GET` | `/api/books` | 批量检索图书列表，支持过滤。 / Batch retrieval. |
| `POST` | `/api/books` | 新增图书条目归档。 / Create new entry. |
| `GET` | `/api/books/:id` | 精确检索特定图书详情。 / Specific book detail. |
| `PUT` | `/api/books/:id` | 修正或更新现有图书元数据。 / Update metadata. |
| `DELETE` | `/api/books/:id` | 物理移除特定图书记录。 / Delete entry. |

## 项目工程结构 / Project Structure

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # 数据库 Schema 标准定义、连接池配置与索引策略 / Schema & Indexing
    │   ├── routes/     # 模块化业务路由逻辑 (基于 Hono 路由分发) / Modular routing
    │   ├── index.ts    # 全局中间件链、异常处理与程序启动入口 / Entry & Middleware
    │   └── seed.ts     # 物理存储层的测试数据播种脚本 / Data seeding
    ├── package.json    # 依赖管理契约 / Dependencies
    └── tsconfig.json   # TypeScript 编译器策略配置 / TS configuration
```

## 快速启动指南 / Quick Start

### 1. 物理环境准备 / Environment
确保已安装 [Bun 1.1+](https://bun.sh/)。

### 2. 依赖安装与配置 / Install & Config
```bash
cd backend
bun install
# 创建 .env 并配置 DATABASE_URL
```

### 3. 服务引导 / Launch
```bash
# 开发模式 (支持 Hot Reload)
bun run dev

# 模式同步 (Push Schema)
bun run db:push
```

## 许可证 / License
本项目遵循 MIT License 协议。 / Licensed under the MIT License.
