import NotificationVue from './ItNotification.vue'
import { createApp, ComponentPublicInstance } from 'vue'
import { Colors, Positions } from '@/models/enums'

interface INotificationOptions {
  id: number | null
  title: string | number
  text: string | number
  show: boolean
  type: string
  duration: number
  icon: string
  image: string
  placement: string
  emoji: string
  position: {
    [key: string]: number
  }
  onClose: () => void
  [key: string]: any
}

const notifications: ComponentPublicInstance[] = []

let idStart = 0

const Notification = (options: Partial<INotificationOptions> = {}) => {
  options.placement = options.placement || Positions.TR
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Notification.close(id, onClose)
  }

  const tempDiv = document.createElement('div')
  const instance = createApp(NotificationVue).mount(tempDiv)

  const newData = Object.assign(options, { id })
  for (const [key, value] of Object.entries(newData)) {
    ;(instance.$data as INotificationOptions)[key] = value
  }

  document.body.appendChild(instance.$el)
  ;(instance.$data as INotificationOptions).show = true

  const offsets: { [key: string]: number } = {
    [Positions.TR]: 0,
    [Positions.TL]: 0,
    [Positions.BR]: 0,
    [Positions.BL]: 0,
  }

  notifications
    .filter(
      (el) =>
        (el.$data as INotificationOptions).placement === options.placement,
    )
    .forEach((el) => {
      offsets[options.placement!] += (el.$el as HTMLElement).offsetHeight + 6
    })
  ;(instance.$data as INotificationOptions).position = {
    [options.placement.split('-')[0]]: offsets[options.placement] + 6,
    [options.placement.split('-')[1]]: 10,
  }

  notifications.push(instance)

  return instance
}

Notification.close = (id: number, onClose?: () => void) => {
  const index = notifications.findIndex(
    (el) => (el.$data as INotificationOptions).id === id,
  )
  const height = (notifications[index].$el as HTMLElement).offsetHeight
  if (onClose) {
    onClose()
  }
  notifications
    .filter(
      (el) =>
        (el.$data as INotificationOptions).placement ===
        (notifications[index].$data as INotificationOptions).placement,
    )
    .forEach((el) => {
      const data = el.$data as INotificationOptions
      if (data.id! > id) {
        const elPlacement = data.placement.split('-')
        data.position = {
          [elPlacement[0]]: data.position[elPlacement[0]] - (height + 6),
          [elPlacement[1]]: 10,
        }
      }
    })
  notifications.splice(index, 1)
}
;[Colors.PRIMARY, Colors.SUCCESS, Colors.DANGER, Colors.WARNING].forEach(
  (type) => {
    // @ts-ignore
    Notification[type] = (options: INotificationOptions) =>
      Notification({ ...options, type })
  },
)

export default Notification
