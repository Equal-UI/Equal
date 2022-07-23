import MessageVue from './ItMessage.vue'
import { createApp, ComponentPublicInstance, h, reactive, VNode } from 'vue'
import { EqualUIConfiguration } from '@/types/variant'

interface IMessageOptions {
  text?: string | number
  type?: string
  duration?: number
  icon?: string
  onClose?: () => void
}

const messages: { id: number; component: ComponentPublicInstance }[] = []

let idStart = 0

const Message =
  (config: EqualUIConfiguration) =>
  (options: IMessageOptions = {}, children: VNode) => {
    const onClose = options.onClose
    const id = idStart++

    options.onClose = () => {
      Message.close(id, onClose)
    }

    const lastOffset =
      messages[messages.length - 1]?.component.$el.offsetTop +
        messages[messages.length - 1]?.component.$el.offsetHeight || 0

    const newProps = reactive(
      Object.assign(options, {
        id,
        show: false,
        ref: 'elRef',
        onShowChange: (val: boolean) => {},
      }),
    )

    newProps.onShowChange = (val) => {
      newProps.show = val
    }

    const tempDiv = document.createElement('div')
    const instance = createApp({
      render: () => h(MessageVue, newProps, () => children),
    })
    instance.provide('config', config)
    const mountedInstance = instance.mount(tempDiv)
    mountedInstance.$refs.elRef.realTop = lastOffset + 6

    document.body.appendChild(mountedInstance.$el)
    newProps.show = true

    messages.push({ id, component: mountedInstance })

    return { id, Message }
  }

Message.close = (id: number, onClose?: () => void) => {
  const index = messages.findIndex((el) => el.id === id)
  if (!messages[index]) {
    return
  }
  const height = (messages[index].component.$el as HTMLElement).offsetHeight
  messages[index].component.$refs.elRef.$emit('showChange', false)
  messages.splice(index, 1)
  if (onClose) {
    onClose()
  }
  messages.forEach((el) => {
    if (el.id > id) {
      el.component.$refs.elRef.realTop -= height + 6
    }
  })
}

export default Message
