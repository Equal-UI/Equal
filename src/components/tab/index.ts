import Tab from '../tabs/ItTab.vue'

// @ts-ignore
Tab.install = Vue => {
  Vue.component(Tab.name, Tab)
}

export default Tab
