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
  options: INotificationOptions = {}
): NotificationVue {
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Notification.close(onClose, id)
  }

  const instance: NotificationVue & {
    top: number
    id: number
    show: boolean
  } = new NotificationConstructor({
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
} as INotification

Notification.close = (onClose, id) => {
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
  Notification[type] = (options: INotificationOptions): NotificationVue =>
    Notification({ type, ...options })
})

export default Notification
