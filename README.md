# Bookshelf (个人图书管理后端服务)

[![Bun](https://img.shields.io/badge/Bun-1.1-black?logo=bun)](https://bun.sh/)
[![Hono](https://img.shields.io/badge/Hono-4.11-orange?logo=hono)](https://hono.dev/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle)](https://orm.drizzle.team/)

Bookshelf 是一个基于 Bun 和 Hono 的图书管理系统后端。该项目通过 Drizzle ORM 实现数据建模，提供了基础的书籍 CRUD 接口，旨在作为轻量级的后台服务。

## 核心设计

- 性能优化: 结合 Bun 原生 API 与 Hono 路由框架。
- 类型安全: 全链路采用 TypeScript 开发。
- 数据持久化: 使用 Drizzle ORM 操作数据库，配合 Zod 实现数据校验。

## 技术栈

- 运行环境: Bun 1.1+
- API 框架: Hono
- 数据库 (ORM): Drizzle ORM
- 逻辑校验: Zod
- 开发支持: Drizzle Kit

## 项目结构

```text
.
└── backend
    ├── src
    │   ├── db          # 数据建模与客户端
    │   ├── routes      # 业务路由
    │   └── index.ts    # 程序入口
    ├── package.json
    └── tsconfig.json
```

## 快速启动

### 1. 依赖安装
`cd backend && bun install`

### 2. 服务器启动
开发模式: `bun run dev`
生产模式: `bun run start`

## 许可证
MIT License
