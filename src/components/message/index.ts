import { Vue } from 'vue-property-decorator'
import MessageVue from './ItMessage.vue'

const messageTypes = ['primary', 'success', 'danger', 'warning']

declare module 'vue/types/vue' {
  interface Vue {
    $Message: IMessage
  }
}
interface IMessageOptions {
  text?: string | number
  type?: string
  duration?: number
  icon?: string
  onClose?: () => void
}

interface IMessage {
  // Invoke signature.
  (options: IMessageOptions): MessageVue

  close: (onclose: () => void, id: number) => void

  success(options: IMessageOptions): MessageVue
  warning(options: IMessageOptions): MessageVue
  danger(options: IMessageOptions): MessageVue
}

const MessageConstructor = Vue.extend(MessageVue)
const messages: MessageVue[] = []

let idStart = 0

// tslint:disable-next-line: only-arrow-functions
const Message = function(options: IMessageOptions = {}): MessageVue {
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Message.close(onClose, id)
  }

  const instance: MessageVue & {
    top: number
    id: number
    show: boolean
  } = new MessageConstructor({
    data: options
  })

  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show = true

  let topDist = 0

  messages.forEach((el) => {
    topDist += (el.$el as HTMLElement).offsetHeight + 6
  })

  instance.top = topDist + 6

  messages.push(instance)

  return instance
} as IMessage

Message.close = (onClose, id) => {
  // @ts-ignore
  const index = messages.findIndex((el) => el.id === id)
  const height = (messages[index].$el as HTMLElement).offsetHeight
  messages.splice(index, 1)
  if (onClose) {
    onClose()
  }
  // @ts-ignore
  messages.forEach((el) => (el.top -= height + 6))
}

messageTypes.forEach((type) => {
  Message[type] = (options: IMessageOptions): MessageVue =>
    Message({ type, ...options })
})

export default Message
