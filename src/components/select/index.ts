import Select from './ItSelect.vue'
import SelectOption from './ItSelectOption.vue'

const select = {
  Select,
  SelectOption
}

for (const elem in select) {
  if (select.hasOwnProperty(elem)) {
    const element = select[elem]
    // @ts-ignore
    element.install = (Vue) => {
      Vue.component(element.name, element)
    }
  }
}

export default select
