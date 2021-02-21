import Dropdown from './ItDropdown.vue'
import DropdownMenu from './ItDropdownMenu.vue'
import DropdownItem from './ItDropdownItem.vue'
import { App, DefineComponent } from 'vue'

const dropdown = {
  Dropdown,
  DropdownMenu,
  DropdownItem,
}

for (const elem in dropdown) {
  if (dropdown.hasOwnProperty(elem)) {
    // @ts-ignore
    const element = dropdown[elem]
    element.install = (Vue: App) => {
      Vue.component(element.name, element)
    }
  }
}

export default dropdown
