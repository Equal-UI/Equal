import NotificationVue from './ItNotification.vue'
import { createApp, ComponentPublicInstance } from 'vue'
import { Colors, Positions } from '../../models'

const notificationTypes = [
  Colors.PRIMARY,
  Colors.SUCCESS,
  Colors.DANGER,
  Colors.WARNING,
]

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

const notifications: ComponentPublicInstance[] = []

let idStart = 0

const Notification = (options: INotificationOptions = {}) => {
  options.placement = options.placement || 'top-right'
  const onClose = options.onClose
  const id = idStart++

  options.onClose = () => {
    Notification.close(id, onClose)
  }

  const tempDiv = document.createElement('div')
  const instance = createApp(NotificationVue).mount(tempDiv)

  const newData = Object.assign(options, { id })
  for (const [key, value] of Object.entries(newData)) {
    instance.$data[key] = value
  }

  document.body.appendChild(instance.$el)
  instance.$data.show = true

  const offsets = {
    [Positions.TR]: 0,
    [Positions.TL]: 0,
    [Positions.BR]: 0,
    [Positions.BL]: 0,
  }

  notifications
    .filter((el) => el.$data.placement === options.placement)
    .forEach((el) => {
      offsets[options.placement] += (el.$el as HTMLElement).offsetHeight + 6
    })

    instance.$data.position = {
      [options.placement.split('-')[0]]: offsets[options.placement] + 6,
      [options.placement.split('-')[1]]: 10
    }

  notifications.push(instance)

  return instance
}

Notification.close = (id: number, onClose?: () => void) => {
  // @ts-ignore
  const index = notifications.findIndex((el) => el.$data.id === id)
  const height = (notifications[index].$el as HTMLElement).offsetHeight
  if (onClose) {
    onClose()
  }
  notifications.filter(el => el.$data.placement === notifications[index].$data.placement).forEach((el) => {
    if (el.$data.id > id) {
      const elPlacement = el.$data.placement.split('-')
        el.$data.position = {
          [elPlacement[0]]: el.$data.position[elPlacement[0]] - (height + 6),
          [elPlacement[1]]: 10
        }
    }
  })
  notifications.splice(index, 1)
}

notificationTypes.forEach((type) => {
  Notification[type] = (options: INotificationOptions) =>
    Notification({ type, ...options })
})

export default Notification
