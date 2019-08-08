import Dropdown from './ItDropdown.vue'
import DropdownMenu from './ItDropdownMenu.vue'
import DropdownItem from './ItDropdownItem.vue'

const dropdown = {
  Dropdown,
  DropdownMenu,
  DropdownItem
}

for (const elem in dropdown) {
  if (dropdown.hasOwnProperty(elem)) {
    const element = dropdown[elem]
    // @ts-ignore
    element.install = (Vue) => {
      Vue.component(element.name, element)
    }
  }
}

export default dropdown
