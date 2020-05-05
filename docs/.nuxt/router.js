import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74200562 = () => interopDefault(import('../pages/introduction/index.vue' /* webpackChunkName: "pages/introduction/index" */))
const _cbc81a20 = () => interopDefault(import('../pages/start/index.vue' /* webpackChunkName: "pages/start/index" */))
const _302840ab = () => interopDefault(import('../pages/components/alert/index.vue' /* webpackChunkName: "pages/components/alert/index" */))
const _dbc3bf00 = () => interopDefault(import('../pages/components/avatar/index.vue' /* webpackChunkName: "pages/components/avatar/index" */))
const _4e1f339c = () => interopDefault(import('../pages/components/badge/index.vue' /* webpackChunkName: "pages/components/badge/index" */))
const _152269ce = () => interopDefault(import('../pages/components/button/index.vue' /* webpackChunkName: "pages/components/button/index" */))
const _6bf85b6a = () => interopDefault(import('../pages/components/checkbox/index.vue' /* webpackChunkName: "pages/components/checkbox/index" */))
const _8ef8f5b0 = () => interopDefault(import('../pages/components/divider/index.vue' /* webpackChunkName: "pages/components/divider/index" */))
const _1338fa38 = () => interopDefault(import('../pages/components/dropdown/index.vue' /* webpackChunkName: "pages/components/dropdown/index" */))
const _57b996a0 = () => interopDefault(import('../pages/components/icon/index.vue' /* webpackChunkName: "pages/components/icon/index" */))
const _19755d99 = () => interopDefault(import('../pages/components/input/index.vue' /* webpackChunkName: "pages/components/input/index" */))
const _46e3438b = () => interopDefault(import('../pages/components/loading/index.vue' /* webpackChunkName: "pages/components/loading/index" */))
const _c4789604 = () => interopDefault(import('../pages/components/loadingbar/index.vue' /* webpackChunkName: "pages/components/loadingbar/index" */))
const _fcecbed4 = () => interopDefault(import('../pages/components/message/index.vue' /* webpackChunkName: "pages/components/message/index" */))
const _18d3fe88 = () => interopDefault(import('../pages/components/modal/index.vue' /* webpackChunkName: "pages/components/modal/index" */))
const _c6b31edc = () => interopDefault(import('../pages/components/notification/index.vue' /* webpackChunkName: "pages/components/notification/index" */))
const _07c59fa0 = () => interopDefault(import('../pages/components/numberinput/index.vue' /* webpackChunkName: "pages/components/numberinput/index" */))
const _dc3b9ad6 = () => interopDefault(import('../pages/components/progressbar/index.vue' /* webpackChunkName: "pages/components/progressbar/index" */))
const _56f9508a = () => interopDefault(import('../pages/components/radio/index.vue' /* webpackChunkName: "pages/components/radio/index" */))
const _6ad4a463 = () => interopDefault(import('../pages/components/select/index.vue' /* webpackChunkName: "pages/components/select/index" */))
const _31520e08 = () => interopDefault(import('../pages/components/slider/index.vue' /* webpackChunkName: "pages/components/slider/index" */))
const _159dc09b = () => interopDefault(import('../pages/components/switch/index.vue' /* webpackChunkName: "pages/components/switch/index" */))
const _617b7e69 = () => interopDefault(import('../pages/components/tag/index.vue' /* webpackChunkName: "pages/components/tag/index" */))
const _b5cb63be = () => interopDefault(import('../pages/components/textarea/index.vue' /* webpackChunkName: "pages/components/textarea/index" */))
const _1a53a592 = () => interopDefault(import('../pages/components/tooltip/index.vue' /* webpackChunkName: "pages/components/tooltip/index" */))
const _36db7819 = () => interopDefault(import('../pages/layout/grid/index.vue' /* webpackChunkName: "pages/layout/grid/index" */))
const _6e892e9d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/introduction",
    component: _74200562,
    name: "introduction"
  }, {
    path: "/start",
    component: _cbc81a20,
    name: "start"
  }, {
    path: "/components/alert",
    component: _302840ab,
    name: "components-alert"
  }, {
    path: "/components/avatar",
    component: _dbc3bf00,
    name: "components-avatar"
  }, {
    path: "/components/badge",
    component: _4e1f339c,
    name: "components-badge"
  }, {
    path: "/components/button",
    component: _152269ce,
    name: "components-button"
  }, {
    path: "/components/checkbox",
    component: _6bf85b6a,
    name: "components-checkbox"
  }, {
    path: "/components/divider",
    component: _8ef8f5b0,
    name: "components-divider"
  }, {
    path: "/components/dropdown",
    component: _1338fa38,
    name: "components-dropdown"
  }, {
    path: "/components/icon",
    component: _57b996a0,
    name: "components-icon"
  }, {
    path: "/components/input",
    component: _19755d99,
    name: "components-input"
  }, {
    path: "/components/loading",
    component: _46e3438b,
    name: "components-loading"
  }, {
    path: "/components/loadingbar",
    component: _c4789604,
    name: "components-loadingbar"
  }, {
    path: "/components/message",
    component: _fcecbed4,
    name: "components-message"
  }, {
    path: "/components/modal",
    component: _18d3fe88,
    name: "components-modal"
  }, {
    path: "/components/notification",
    component: _c6b31edc,
    name: "components-notification"
  }, {
    path: "/components/numberinput",
    component: _07c59fa0,
    name: "components-numberinput"
  }, {
    path: "/components/progressbar",
    component: _dc3b9ad6,
    name: "components-progressbar"
  }, {
    path: "/components/radio",
    component: _56f9508a,
    name: "components-radio"
  }, {
    path: "/components/select",
    component: _6ad4a463,
    name: "components-select"
  }, {
    path: "/components/slider",
    component: _31520e08,
    name: "components-slider"
  }, {
    path: "/components/switch",
    component: _159dc09b,
    name: "components-switch"
  }, {
    path: "/components/tag",
    component: _617b7e69,
    name: "components-tag"
  }, {
    path: "/components/textarea",
    component: _b5cb63be,
    name: "components-textarea"
  }, {
    path: "/components/tooltip",
    component: _1a53a592,
    name: "components-tooltip"
  }, {
    path: "/layout/grid",
    component: _36db7819,
    name: "layout-grid"
  }, {
    path: "/",
    component: _6e892e9d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
