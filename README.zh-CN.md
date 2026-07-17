# Cool Website

一个使用 React、TypeScript 与 Vite 构建的个人作品集和互动项目展示网站。

[English](./README.md) | [简体中文](./README.zh-CN.md)

## 项目亮点

- 以项目叙事为核心的作品集首页
- 为不同作品提供独立展示路由
- 页面懒加载与平滑锚点导航
- 响应式深色界面、动效和可复用 UI 基础组件
- 支持 HLS 媒体播放，适合呈现更丰富的案例内容

## 技术栈

React 19 · TypeScript · Vite · React Router · Tailwind CSS · Motion · Radix UI · hls.js

## 快速开始

```bash
npm install
npm run dev
```

打开 Vite 在终端输出的本地地址即可。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 类型检查并生成生产构建 |
| `npm run lint` | 运行 ESLint |
| `npm run preview` | 预览生产构建 |

## 项目结构

```text
src/
├── pages/       # 作品集与案例页面
├── styles/      # 字体、主题变量和全局样式
├── App.tsx      # 路由与应用外壳
└── main.tsx     # 浏览器入口
```

## 参与贡献

欢迎提交 Issue 或范围明确的 Pull Request。
