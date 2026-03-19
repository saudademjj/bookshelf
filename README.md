<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# Bookshelf -- 高性能个人图书管理系统

![Bun](https://img.shields.io/badge/Bun-Runtime-F9F1E1?style=flat-square&logo=bun)
![Hono](https://img.shields.io/badge/Hono-4.11-E36002?style=flat-square&logo=hono)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Drizzle](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?style=flat-square)

一个基于 Bun + Hono + Drizzle ORM 构建的高性能个人图书管理系统。项目采用现代 TypeScript 全栈架构，以 SQLite 作为嵌入式数据库，Zod 进行运行时数据校验，提供完整的图书 CRUD RESTful API。整体设计追求极致的轻量与高性能，是 Bun 生态下全栈开发的实践样例。

## 核心功能

### 图书管理 API
- 完整的 RESTful CRUD 接口：创建、查询、更新、删除图书
- 支持按书名、作者、ISBN 等字段检索
- 分页查询与排序
- Zod Schema 驱动的请求参数校验，确保数据完整性

### 数据持久化
- SQLite 嵌入式数据库，零配置即可运行
- Drizzle ORM 提供类型安全的查询构建与迁移管理
- 内置种子数据脚本，快速填充演示数据

### 开发体验
- Bun 原生热重载（`bun --hot`），修改代码即时生效
- 全链路 TypeScript 类型推导，从 Schema 到 API 响应
- 轻量级依赖，冷启动极快

## 技术架构

### 运行时与框架

- Bun：高性能 JavaScript/TypeScript 运行时，内置打包器、测试运行器和包管理器
- Hono 4.11：超轻量 Web 框架，路由性能优异，中间件生态丰富
- TypeScript 5：全链路静态类型检查

### 数据层

- Drizzle ORM 0.45：类型安全的 SQL 查询构建器
  - 声明式 Schema 定义
  - 自动迁移生成
  - 零运行时开销的查询构建
- SQLite：嵌入式关系型数据库，单文件存储，无需独立数据库服务
- Zod 4：运行时数据校验与类型推导

### 架构模式

- 分层架构：路由层（Routes）-> 数据层（DB/Schema）-> 存储层（SQLite）
- 关注点分离：路由定义、数据模型、数据库连接各自独立
- 校验前置：所有 API 入口通过 Zod Schema 校验后再进入业务逻辑

## 目录结构

```text
bookshelf/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── index.ts       # 数据库连接初始化
│   │   │   └── schema.ts      # Drizzle Schema 定义（图书表结构）
│   │   ├── routes/
│   │   │   └── books.ts       # 图书 CRUD API 路由
│   │   ├── index.ts           # 应用入口，Hono 实例与中间件注册
│   │   └── seed.ts            # 种子数据填充脚本
│   ├── bookshelf.db           # SQLite 数据库文件
│   ├── package.json           # 依赖与脚本
│   └── tsconfig.json          # TypeScript 配置
├── frontend/                   # 前端应用（开发中）
├── LICENSE
└── README.md
```

## 快速开始

### 环境要求

- Bun >= 1.0（[安装指南](https://bun.sh)）

### 1. 克隆与安装

```bash
git clone https://github.com/saudademjj/bookshelf.git
cd bookshelf/backend
bun install
```

### 2. 初始化数据库

```bash
bun run seed
```

该命令会创建 SQLite 数据库文件并填充示例图书数据。

### 3. 启动开发服务器

```bash
bun run dev
```

服务器启动后，API 默认监听 `http://localhost:3000`。

### 可用命令

```bash
bun run dev      # 启动开发服务器（热重载模式）
bun run start    # 启动生产服务器
bun run seed     # 填充种子数据
```

## API 接口

### 图书资源

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/books` | 获取图书列表 |
| GET | `/api/books/:id` | 获取单本图书详情 |
| POST | `/api/books` | 创建新图书 |
| PUT | `/api/books/:id` | 更新图书信息 |
| DELETE | `/api/books/:id` | 删除图书 |

### 请求示例

```bash
# 获取所有图书
curl http://localhost:3000/api/books

# 创建新图书
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "深入理解计算机系统", "author": "Randal E. Bryant"}'
```

## 技术亮点

- Bun 原生运行：相比 Node.js，Bun 在启动速度、包安装速度和 HTTP 吞吐量上均有显著优势
- 零配置数据库：SQLite 单文件存储，无需安装和配置独立的数据库服务，克隆即用
- 类型安全闭环：Drizzle Schema -> Zod 校验 -> Hono 路由，TypeScript 类型从数据库定义一路贯穿到 API 响应
- 极简依赖：核心依赖仅 3 个（Hono + Drizzle + Zod），无冗余抽象层

## 许可证

MIT License
