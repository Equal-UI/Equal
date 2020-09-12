import { Directive } from 'vue'

const directive: Directive = {
  beforeMount(elem, binding) {
    elem.clickOutsideHandler = (e: Event) => {
      if (!elem.contains(e.target) && binding.value) {
        binding.value(e)
      }
    }

    document.addEventListener('click', elem.clickOutsideHandler)
  },
  unmounted(elem) {
    document.removeEventListener('click', elem.clickOutsideHandler)
  },
}

export default directive
