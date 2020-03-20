<p align="center">
  <a href="https://quatrochan.github.io/Equal/">
    <img width="300" src="https://raw.githubusercontent.com/quatrochan/Equal/master/docs/assets/eqqqual.png">
  </a>

<p align="center">
<img src="https://img.shields.io/npm/v/equal-vue?color=blue">
<img src="https://img.shields.io/npm/l/equal-vue">
<img src="https://img.shields.io/npm/dw/equal-vue">

<a href="https://twitter.com/EqualVue">
    <img src="https://img.shields.io/twitter/follow/EqualVue?label=Equal%20Vue&style=social" alt="Twitter Follow">
</a>
</p>
</p>

<h1 align="center">
  Equal UI
</h1>

<div align="center">
Equal UI is a Vue 2 TypeScript components library
<p></p>
 <img width="800" src="https://raw.githubusercontent.com/horpey/Equal/master/docs/assets/equal-preview.png">
</div>

## Links

- [📚Docs](https://quatrochan.github.io/Equal/)
- 🔮 Twitter: [@EqualVue](https://twitter.com/EqualVue)

# Install

```bash
# npm
npm install equal-vue
```

```bash
# yarn
yarn add equal-vue
```

# Usage

## All components

```js
import Vue from 'vue';
import Equal from 'equal-vue';
import 'equal-vue/dist/equal.css';

Vue.use(Equal);
```

## Or individual components

```js
import Vue from 'vue';
import { Button, Alert, Switch } from 'equal-vue';
import 'equal-vue/dist/equal.css';

Vue.use(Button);
Vue.use(Alert);
Vue.use(Switch);
```

## Or start with CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/equal-vue/dist/equal.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
    />
  </head>
  <body>
    <div id="app">
      <it-button type="primary">Quickstart</it-button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/equal-vue/dist/equal.umd.js"></script>
    <script>
      new Vue({
        el: '#app'
      });
    </script>
  </body>
</html>
```

# License

[MIT](https://raw.githubusercontent.com/quatrochan/Equal/master/LICENSE)
