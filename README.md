# 🚀 VStarter

> **基于 Vite 的 Vue 3 快速起手模板，集成了现代 Web 开发所需的各种工具。**

这个模板已经预配置了 Vite、Vue 3、Vue Router、Pinia 以及一系列代码检查和格式化工具，确保代码质量和可维护性。此外，它强制使用 `pnpm` 作为包管理器，以实现更高效的性能。

## 📝 功能特性

- 🌐 **Vite**: 超快速的开发环境。
- 🚦 **Vue Router**: 方便的路由配置。
- 📦 **Pinia**: 简单、轻量的状态管理工具。
- 🏗️ **Alias**: 已预配置的别名，让导入更清晰。
- 🔍 **ESLint**: 检查并修复代码问题。
- 💅 **Stylelint**: 保持 CSS/Sass 风格一致。
- 🔒 **only-allow**: 强制使用 `pnpm` 作为包管理器。

## 📦 安装

首先，确保全局安装了 `pnpm`：

```bash
npm install -g pnpm
```

然后，克隆仓库并安装依赖：

```bash
pnpm install
```

## 🚀 快速开始

启动开发服务器：

```bash
pnpm dev
```

这会在开发模式下启动应用，并在默认浏览器中打开。修改文件时会自动重新加载。

## 🔧 配置说明

### 🛤️ 路由（Router）
Vue Router 已经配置好，你可以在 `src/router` 文件夹中找到路由。根据项目需要添加新的路由即可。

### 🛒 Pinia
Pinia 是 Vue 3 官方推荐的状态管理库，已预配置好。你可以在 `src/stores` 目录中添加新的 store 以管理应用状态。

### 📁 别名（Alias）
在 `vite.config.js` 中已配置了别名，简化导入路径。你可以使用 `@` 代表 `src` 目录：

```javascript
import MyComponent from '@/components/MyComponent.vue';
```

## 🔍 代码质量

### 🧹 ESLint
ESLint 用于保持代码质量一致。可以运行以下命令进行检查：

```bash
pnpm lint
```

自动修复 ESLint 问题：

```bash
pnpm lint:fix
```

### 🔒 only-allow
`only-allow` 确保项目只能使用 `pnpm` 作为包管理器。如果尝试使用 `npm` 或 `yarn`，将无法通过设置。这有助于保持一致和快速的依赖管理。

## 📁 项目结构

```
├── src
│   ├── assets      # 静态资源
│   ├── components  # Vue 组件
│   ├── router      # Vue Router 配置
│   ├── stores      # Pinia 状态管理
│   ├── views       # 视图组件
│   └── App.vue     # 主应用组件
├── .eslintrc       # ESLint 配置
├── vite.config.js  # Vite 配置
└── package.json    # 项目元数据和脚本
```

## 🚀 常用命令

- `pnpm dev`: 启动开发服务器。
- `pnpm build`: 构建生产环境应用。
- `pnpm lint`: 运行 ESLint 检查。
- `pnpm lint:fix`: 自动修复 ESLint 问题。
