<p align="center">
  <a href="https://equal-ui.github.io/Equal/">
    <img width="150" src="./docs/public/logo.svg">
  </a>

<p align="center">
<img src="https://img.shields.io/npm/v/equal-vue?color=blue">
<img src="https://img.shields.io/npm/l/equal-vue">
</p>
</p>

<h1 align="center">
  Equal UI
</h2>

<div align="center">
Equal UI 是一个 Vue 3 可拆解的组件库，在 Tailwindcss 之上包含 30+ 个组件
<br>
  <a href="https://equal-ui.github.io/Equal/"><strong>探索 Equal UI 文档</strong></a>
</div>

<br>
<div align="center">
<a href="./README.md">English</a>
|
<span><strong>中文简体</strong></span>
</div>

# 特征

- 🔥 Vue 生态系统中最好的视觉效果之一
- 🌃 内置深色主题
- 🎨 完全定制
- 💬 有工具提示、通知、弹出框
- 👌 轻量级：12KB brotli
- 🔧 包括 30+ 组件
- 💅 使用你的顺风类

# 链接

<b> Twitter: </b> [@Yan](https://twitter.com/k0mmsussertod)

# 安装

你需要 [Vue.js](https://v3.vuejs.org/) 版本 3.1+

```bash
# npm
npm install equal-vue
```

```bash
# yarn
yarn add equal-vue
```

# 用法

## 所有组件

```js
import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Equal, Config)
```

## 或单个组件

```js
import { createApp } from 'vue'
import { Button, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Button, Config).use(Switch, Config)
```

# 许可证

[MIT](https://raw.githubusercontent.com/Equal-UI/Equal/master/LICENSE)
