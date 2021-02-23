import { Directive } from 'vue'

// let startedSource = false

export const clickOutside: Directive = {
  beforeMount(elem, binding) {
    // Used to prevent clickOutsideHandle to fire if mousedown started on element
    let startedSource = false

    elem.clickStarted = (e: Event) => {
      if (elem.contains(e.target)) {
        startedSource = true
      }
    }

    elem.clickOutsideHandler = (e: Event) => {
      if (!elem.contains(e.target) && binding.value && !startedSource) {
        binding.value(e)
      }
      startedSource = false
    }

    document.addEventListener('mousedown', elem.clickStarted)
    document.addEventListener('mouseup', elem.clickOutsideHandler)
  },
  unmounted(elem) {
    document.removeEventListener('mouseup', elem.clickOutsideHandler)
    document.removeEventListener('mousedown', elem.clickOutsideHandler)
  },
}
