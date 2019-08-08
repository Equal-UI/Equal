import { DirectiveOptions } from 'vue'

interface CustomHTMLElem extends HTMLElement {
  clickOutsideHandler: EventListenerOrEventListenerObject
}

const directive: DirectiveOptions = {
  bind(elem, binding) {
    (elem as CustomHTMLElem).clickOutsideHandler = (e: Event) => {
      if (!elem.contains(e.target as Element) && binding.expression) {
        binding.value(e)
      }
    }

    document.addEventListener(
      'click',
      (elem as CustomHTMLElem).clickOutsideHandler
    )
  },
  unbind(elem) {
    document.removeEventListener(
      'click',
      (elem as CustomHTMLElem).clickOutsideHandler
    )
  }
}

export default directive
