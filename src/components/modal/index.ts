import { App } from 'vue'
import Modal from './ItModal.vue'

Modal.install = (Vue: App) => {
  Vue.component(Modal.name, Modal)
}

export default Modal
