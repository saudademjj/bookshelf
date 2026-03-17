<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Bookshelf (个人图书管理后端服务)

![Bun](https://img.shields.io/badge/Bun-1.1-000000?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square&logo=drizzle)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)

本项目是一个基于现代后端技术栈构建的高性能图书管理系统。项目利用 **Bun** 运行时的极速特性与 **Hono** 框架的轻量化路由引擎，旨在为个人数字化藏书提供一套强类型、易扩展的 RESTful API 解决方案。

## 核心设计标准

### 1. 极致的执行效率
深度集成 Bun 的原生 API 进行 I/O 处理，相较于传统的 Node.js 环境，在冷启动速度与请求处理时延上具备显著优势。配合 Hono 的极简路由设计，确保了在低资源占用下的高吞吐能力。

### 2. 全链路强类型约束
- **Drizzle ORM**: 采用强类型的 SQL 查询构建器，消除运行时查询错误，并支持零停机模式的数据库模式同步。
- **入参校验**: 集成 Zod 实现严格的入参 Schema 校验，确保非法数据在逻辑入口处即被阻断。

### 3. 标准化 RESTful 实践
接口设计遵循资源导向原则，通过模块化的路由分发实现业务逻辑的高度解耦。

## 接口定义矩阵

| 方法 | 路径 | 业务描述 |
| :--- | :--- | :--- |
| `GET` | `/api/books` | 批量检索图书列表，支持多维过滤。 |
| `POST` | `/api/books` | 新增图书条目归档。 |
| `GET` | `/api/books/:id` | 检索特定图书的详细元数据。 |
| `PUT` | `/api/books/:id` | 修正或更新现有图书信息。 |
| `DELETE` | `/api/books/:id` | 物理移除特定图书记录。 |

## 项目工程结构

```text
bookshelf/
└── backend/
    ├── src/
    │   ├── db/         # 数据库 Schema 标准定义与索引策略
    │   ├── routes/     # 基于 Hono 路由分发的业务模块实现
    │   ├── index.ts    # 程序启动入口、全局中间件链与异常处理
    │   └── seed.ts     # 测试数据播种脚本
    ├── package.json    # 依赖管理契约
    └── tsconfig.json   # TypeScript 编译器策略配置
```

## 许可证
本项目采用 MIT License 协议。
