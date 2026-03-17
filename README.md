# Bookshelf

<p align="right">中文 | <a href="https://github.com/saudademjj/bookshelf/tree/codex/readme-en">English</a></p>

`Bookshelf` 是一个前后端分离的书架管理应用，目标是用现代 Web 技术实现一本“可搜索、可导入、可展示”的个人书库系统。项目同时兼顾后台 API 设计与前端浏览体验，适合作为全栈作品集项目。

## 功能概览

- 图书的增删改查
- 按书名或作者搜索
- 按分类筛选
- 分页浏览
- 从 Google Books 导入图书信息
- 书架式视觉展示与动效
- 响应式页面布局

## 技术栈

后端：

- `Bun`
- `Hono`
- `SQLite`
- `Drizzle ORM`
- `Zod`

前端：

- `Next.js 16`
- `React 19`
- `Tailwind CSS 4`
- `Zustand`
- `TanStack React Query`
- `TanStack Virtual`
- `Framer Motion`

## 仓库结构

```text
bookshelf/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   └── app/
│   └── package.json
├── README.md
└── README.en.md
```

## 快速开始

### 后端

```bash
cd backend
bun install
bun run seed
bun run dev
```

默认运行在 `http://localhost:3000`

### 前端

```bash
cd frontend
npm install
npm run dev
```

默认运行在 `http://localhost:3001`

## API 概览

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/books` | 图书列表，支持分页、搜索和分类筛选 |
| GET | `/api/books/:id` | 单本图书详情 |
| POST | `/api/books` | 创建图书 |
| PUT | `/api/books/:id` | 更新图书 |
| DELETE | `/api/books/:id` | 删除图书 |
| GET | `/api/books/genres/list` | 获取分类列表 |
| GET | `/api/books/search-external?q=...` | 搜索 Google Books |
| POST | `/api/books/import` | 导入外部图书数据 |

## 适合继续扩展的方向

- 用户系统与个人书架
- 借阅或阅读状态跟踪
- 评分、笔记和标签系统
- 部署脚本与 CI/CD

## 许可证

本仓库采用 MIT License，详见 [LICENSE](./LICENSE)。
