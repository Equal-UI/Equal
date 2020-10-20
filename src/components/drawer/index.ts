import Drawer from './ItDrawer.vue'

// @ts-ignore
Drawer.install = (Vue) => {
  Vue.component(Drawer.name, Drawer)
}

export default Drawer
