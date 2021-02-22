import MessageVue from './ItMessage.vue'
import { createApp, ComponentPublicInstance } from 'vue'
import { Colors } from '@/models/enums'

interface IMessageOptions {
  text?: string | number
  type?: string
  duration?: number
  icon?: string
  onClose?: () => void
}

const messageTypes = [
  Colors.PRIMARY,
  Colors.SUCCESS,
  Colors.DANGER,
  Colors.WARNING,
]

const messages: ComponentPublicInstance[] = []

let idStart = 0

const Message = (options: IMessageOptions = {}) => {
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Message.close(id, onClose)
  }

  const tempDiv = document.createElement('div')
  const instance = createApp(MessageVue).mount(tempDiv)

  const newData = Object.assign(options, { id })
  for (const [key, value] of Object.entries(newData)) {
    instance.$data[key] = value
  }

  document.body.appendChild(instance.$el)
  instance.$data.show = true

  let topDist = 0

  messages.forEach((el) => {
    topDist += (el.$el as HTMLElement).offsetHeight + 6
  })

  instance.$data.top = topDist + 6

  messages.push(instance)

  return instance
}

Message.close = (id: number, onClose?: () => void) => {
  // @ts-ignore
  const index = messages.findIndex((el) => el.$data.id === id)
  const height = (messages[index].$el as HTMLElement).offsetHeight
  messages.splice(index, 1)
  if (onClose) {
    onClose()
  }
  messages.forEach((el) => {
    if (el.$data.id > id) {
      // @ts-ignore
      el.top -= height + 6
    }
  })
}

messageTypes.forEach((type) => {
  Message[type] = (options: IMessageOptions) => Message({ type, ...options })
})

export default Message
