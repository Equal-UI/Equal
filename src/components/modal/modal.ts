import { Vue } from 'vue-property-decorator'
import ModalVue from './ItModal.vue'

declare module 'vue/types/vue' {
  interface Vue {
    $Modal: IModal
  }
}
interface IModalOptions {
  type?: string
  title?: string
  content?: string
  closableMask?: boolean
  closeOnEsc?: boolean
  hideFooter?: boolean
  okClick?(): void
  cancelClick?(): void
}

interface IModal {
  // Invoke signature.
  (options: IModalOptions): ModalVue

  close: (onclose: () => void, id: number) => void

  success(options: IModalOptions): ModalVue
  warning(options: IModalOptions): ModalVue
  danger(options: IModalOptions): ModalVue
}

const modalTypes = ['primary', 'success', 'danger', 'warning']
const ModalConstructor = Vue.extend(ModalVue)

// tslint:disable-next-line: only-arrow-functions
const Modal = function(options: IModalOptions = {}) {
  // Element to return focus
  const activeElement = document.activeElement
  const instance = new ModalConstructor({
    propsData: options,
    data: { activeElement }
  })

  instance.$mount()
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    // @ts-ignore
    instance.$refs.cancelButton.$el.focus()
  })
  return instance
} as IModal

modalTypes.forEach(type => {
  Modal[type] = (options: IModalOptions): ModalVue =>
    Modal({ type, ...options })
})

export default Modal
