# Bookshelf (个人图书管理系统后端服务)

[![Bun](https://img.shields.io/badge/Bun-1.1-black?logo=bun)](https://bun.sh/)
[![Hono](https://img.shields.io/badge/Hono-4.11-orange?logo=hono)](https://hono.dev/)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle)](https://orm.drizzle.team/)

Bookshelf 是一个高性能的个人图书管理系统后端服务。项目基于现代化的 Bun 运行时与 Hono 框架构建，旨在通过精简的架构设计实现对个人数字化藏书的高效管理。

## 核心设计

- 极致运行效率: 深度集成 Bun 原生 API 与 Hono 路由引擎，确保在高并发环境下仍能保持低延迟响应。
- 严谨类型安全: 全链路采用 TypeScript 编写，结合 Zod 实现严格的入参校验与响应契约维护。
- 现代化持久层架构: 利用 Drizzle ORM 进行数据库操作，通过强类型模型关联实现零成本的 Schema 同步。
- 规范化 API 标准: 内置 CORS 安全配置，采用分层路由架构设计，实现高度解耦的 CRUD 业务逻辑。

## 技术栈

- 运行时 (Runtime): Bun 1.1+
- API 框架: Hono
- 数据库 (ORM): Drizzle ORM
- 逻辑校验: Zod
- 开发支持: Drizzle Kit (用于结构化数据库迁移)

## 项目结构

```text
.
└── backend
    ├── src
    │   ├── db          # 数据库连接池与 Schema 标准定义
    │   ├── routes      # 模块化业务路由逻辑实现
    │   ├── index.ts    # 全局中间件配置与程序入口
    │   └── seed.ts     # 初始化测试数据播种脚本
    ├── package.json
    └── tsconfig.json
```

## 快速启动

### 1. 前置要求
确保本地已安装 Bun 1.1 或更高版本。

### 2. 依赖安装
```bash
cd backend && bun install
```

### 3. 服务器启动
开发模式 (支持热重载):
```bash
bun run dev
```
生产模式:
```bash
bun run start
```

## API 接口概览

| 请求方法 | 端点路径 | 业务功能描述 |
| :--- | :--- | :--- |
| `GET` | `/health` | 服务节点健康监测 |
| `GET` | `/api/books` | 批量检索图书列表 |
| `POST` | `/api/books` | 新增图书归档记录 |
| `GET` | `/api/books/:id` | 检索指定图书详情 |
| `PUT` | `/api/books/:id` | 更新既有图书元数据 |
| `DELETE` | `/api/books/:id` | 移除特定图书条目 |

## 未来路线
- 增加用户鉴权体系，支持多租户独立书架管理。
- 接入 Open Library 或 Douban API 自动化补全书籍元数据。
- 引入细粒度分类标签与全文搜索索引。

## 许可证
本项目采用 MIT License 协议。

---
Developed by [saudademjj](https://github.com/saudademjj)
