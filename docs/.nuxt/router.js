import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6081ed0b = () => interopDefault(import('../pages/introduction/index.vue' /* webpackChunkName: "pages/introduction/index" */))
const _7adb6767 = () => interopDefault(import('../pages/start/index.vue' /* webpackChunkName: "pages/start/index" */))
const _76e7a858 = () => interopDefault(import('../pages/components/alert/index.vue' /* webpackChunkName: "pages/components/alert/index" */))
const _6d54515b = () => interopDefault(import('../pages/components/badge/index.vue' /* webpackChunkName: "pages/components/badge/index" */))
const _24ef75e0 = () => interopDefault(import('../pages/components/button/index.vue' /* webpackChunkName: "pages/components/button/index" */))
const _78c998be = () => interopDefault(import('../pages/components/checkbox/index.vue' /* webpackChunkName: "pages/components/checkbox/index" */))
const _6adbd26f = () => interopDefault(import('../pages/components/dropdown/index.vue' /* webpackChunkName: "pages/components/dropdown/index" */))
const _6d072257 = () => interopDefault(import('../pages/components/icon/index.vue' /* webpackChunkName: "pages/components/icon/index" */))
const _a44d6e7c = () => interopDefault(import('../pages/components/input/index.vue' /* webpackChunkName: "pages/components/input/index" */))
const _51f90874 = () => interopDefault(import('../pages/components/loading/index.vue' /* webpackChunkName: "pages/components/loading/index" */))
const _cfdd4916 = () => interopDefault(import('../pages/components/loadingbar/index.vue' /* webpackChunkName: "pages/components/loadingbar/index" */))
const _e6c13502 = () => interopDefault(import('../pages/components/message/index.vue' /* webpackChunkName: "pages/components/message/index" */))
const _f00c2836 = () => interopDefault(import('../pages/components/modal/index.vue' /* webpackChunkName: "pages/components/modal/index" */))
const _3a245549 = () => interopDefault(import('../pages/components/notification/index.vue' /* webpackChunkName: "pages/components/notification/index" */))
const _4b845899 = () => interopDefault(import('../pages/components/numberinput/index.vue' /* webpackChunkName: "pages/components/numberinput/index" */))
const _3d6d4a04 = () => interopDefault(import('../pages/components/progressbar/index.vue' /* webpackChunkName: "pages/components/progressbar/index" */))
const _2945889a = () => interopDefault(import('../pages/components/radio/index.vue' /* webpackChunkName: "pages/components/radio/index" */))
const _62ee1e5a = () => interopDefault(import('../pages/components/select/index.vue' /* webpackChunkName: "pages/components/select/index" */))
const _296b87ff = () => interopDefault(import('../pages/components/slider/index.vue' /* webpackChunkName: "pages/components/slider/index" */))
const _0db73a92 = () => interopDefault(import('../pages/components/switch/index.vue' /* webpackChunkName: "pages/components/switch/index" */))
const _85fbc05c = () => interopDefault(import('../pages/components/tag/index.vue' /* webpackChunkName: "pages/components/tag/index" */))
const _0685b350 = () => interopDefault(import('../pages/components/textarea/index.vue' /* webpackChunkName: "pages/components/textarea/index" */))
const _25696a7b = () => interopDefault(import('../pages/components/tooltip/index.vue' /* webpackChunkName: "pages/components/tooltip/index" */))
const _36397750 = () => interopDefault(import('../pages/layout/grid/index.vue' /* webpackChunkName: "pages/layout/grid/index" */))
const _5f3b0854 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/introduction",
      component: _6081ed0b,
      name: "introduction"
    }, {
      path: "/start",
      component: _7adb6767,
      name: "start"
    }, {
      path: "/components/alert",
      component: _76e7a858,
      name: "components-alert"
    }, {
      path: "/components/badge",
      component: _6d54515b,
      name: "components-badge"
    }, {
      path: "/components/button",
      component: _24ef75e0,
      name: "components-button"
    }, {
      path: "/components/checkbox",
      component: _78c998be,
      name: "components-checkbox"
    }, {
      path: "/components/dropdown",
      component: _6adbd26f,
      name: "components-dropdown"
    }, {
      path: "/components/icon",
      component: _6d072257,
      name: "components-icon"
    }, {
      path: "/components/input",
      component: _a44d6e7c,
      name: "components-input"
    }, {
      path: "/components/loading",
      component: _51f90874,
      name: "components-loading"
    }, {
      path: "/components/loadingbar",
      component: _cfdd4916,
      name: "components-loadingbar"
    }, {
      path: "/components/message",
      component: _e6c13502,
      name: "components-message"
    }, {
      path: "/components/modal",
      component: _f00c2836,
      name: "components-modal"
    }, {
      path: "/components/notification",
      component: _3a245549,
      name: "components-notification"
    }, {
      path: "/components/numberinput",
      component: _4b845899,
      name: "components-numberinput"
    }, {
      path: "/components/progressbar",
      component: _3d6d4a04,
      name: "components-progressbar"
    }, {
      path: "/components/radio",
      component: _2945889a,
      name: "components-radio"
    }, {
      path: "/components/select",
      component: _62ee1e5a,
      name: "components-select"
    }, {
      path: "/components/slider",
      component: _296b87ff,
      name: "components-slider"
    }, {
      path: "/components/switch",
      component: _0db73a92,
      name: "components-switch"
    }, {
      path: "/components/tag",
      component: _85fbc05c,
      name: "components-tag"
    }, {
      path: "/components/textarea",
      component: _0685b350,
      name: "components-textarea"
    }, {
      path: "/components/tooltip",
      component: _25696a7b,
      name: "components-tooltip"
    }, {
      path: "/layout/grid",
      component: _36397750,
      name: "layout-grid"
    }, {
      path: "/",
      component: _5f3b0854,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
