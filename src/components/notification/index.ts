import { Vue } from 'vue-property-decorator'
import NotificationVue from './ItNotification.vue'

const messageTypes = ['primary', 'success', 'danger', 'warning']

declare module 'vue/types/vue' {
  interface Vue {
    $Notification: INotification
  }
}
interface INotificationOptions {
  title?: string | number
  text?: string | number
  type?: string
  duration?: number
  icon?: string
  image?: string
  placement?: string
  emoji?: string
  onClose?: () => void
}

interface INotification {
  // Invoke signature.
  (options: INotificationOptions): NotificationVue

  close: (onclose: () => void, id: number) => void

  success(options: INotificationOptions): NotificationVue
  warning(options: INotificationOptions): NotificationVue
  danger(options: INotificationOptions): NotificationVue
}

const NotificationConstructor = Vue.extend(NotificationVue)
const messages: NotificationVue[] = []

let idStart = 0

// tslint:disable-next-line: only-arrow-functions
const Notification = function(
  options: INotificationOptions,
): NotificationVue {
  options.placement = options.placement || 'top-right'
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Notification.close(onClose, id)
  }

  const instance: NotificationVue & {
    position: object
    id: number
    show: boolean
  } = new NotificationConstructor({
    data: options
  })

  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.show = true

  const offsets = {
    'top-right': 0,
    'top-left': 0,
    'bottom-right': 0,
    'bottom-left': 0
  }

  messages
    .filter(el => el.$data.placement === options.placement)
    .forEach(el => {
      offsets[options.placement] += (el.$el as HTMLElement).offsetHeight + 6
    })

  instance.position = {
    [options.placement.split('-')[0]]: offsets[options.placement] + 6,
    [options.placement.split('-')[1]]: 10
  }

  messages.push(instance)

  return instance
} as INotification

Notification.close = (onClose, id) => {
  // @ts-ignore
  const index = messages.findIndex(el => el.id === id)
  const height = (messages[index].$el as HTMLElement).offsetHeight
  if (onClose) {
    onClose()
  }

  messages
    .filter(el => el.$data.placement === messages[index].$data.placement)
    .forEach(el => {
      if (el.id > id) {
        const elPlacement = el.$data.placement.split('-')
        // @ts-ignore
        el.position = {
          [elPlacement[0]]: el.position[elPlacement[0]] - (height + 6),
          [elPlacement[1]]: 10
        }
      }
    })

  messages.splice(index, 1)
}

messageTypes.forEach(type => {
  Notification[type] = (
    options: INotificationOptions,
    placement
  ): NotificationVue => Notification({ type, ...options })
})

export default Notification
