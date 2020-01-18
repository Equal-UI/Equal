import Vue from 'vue'
import { getMatchedComponentsInstances, promisify, globalHandleError } from './utils'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../css/main.less'

import _0a4d138c from '../layouts/components.vue'
import _6f6c098b from '../layouts/default.vue'

const layouts = { "_components": _0a4d138c,"_default": _6f6c098b }

export default {
  head: {"title":"Equal components","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width:device-width, initial-scale:1"},{"hid":"description","name":"description","content":"\u003Cp align=\"center\"\u003E   \u003Ca href=\"https:\u002F\u002Fquatrochan.github.io\u002FEqual\u002F\"\u003E     \u003Cimg width=\"300\" src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fquatrochan\u002FEqual\u002Fmaster\u002Fdocs\u002Fassets\u002Feqqqual.png\"\u003E   \u003C\u002Fa\u003E"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002FEqual\u002Ffavicon.ico"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002FEqual\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002FEqual\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002FEqual\u002Fsite.webmanifest"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family:Material+Icons|Material+Icons+Outlined"},{"name":"twitter:card","content":"summary"},{"name":"twitter:site","content":"@EqualVue"},{"name":"twitter:creator","content":"@k0mmsussertod"},{"property":"og:url","content":"https:\u002F\u002Fquatrochan.github.io\u002FEqual\u002F"},{"property":"og:title","content":"Equal UI"},{"property":"og:description","content":"Equal UI – open-source Vue components system for your next project based on TypeScript"},{"property":"og:image","content":"~\u002Fassets\u002Feqqqual.png"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, h(NuxtBuildIndicator), transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()
      const promises = pages.map(async (page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }
        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }
        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
