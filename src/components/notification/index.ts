import NotificationVue from './ItNotification.vue'
import {
  createApp,
  ComponentPublicInstance,
  VNode,
  h,
  reactive,
  inject,
} from 'vue'
import { Positions } from '@/models/enums'
import { EqualUIConfiguration } from '@/types/variant'

interface INotificationOptions {
  id: number | null
  title: string | number
  text: string | number
  show: boolean
  duration: number
  placement: string
  onClose: () => void
  [key: string]: any
}

const notifications: { id: number; component: ComponentPublicInstance }[] = []

let idStart = 0

// Has to be used only inside the setup()
export const useNotification = () => {
  const config = inject<EqualUIConfiguration>(
    'config',
    {} as EqualUIConfiguration,
  )
  return (options: Partial<INotificationOptions> = {}, children?: VNode) => {
    options.placement = options.placement || Positions.TR
    const onClose = options.onClose
    const id = idStart++

    options.onClose = () => {
      useNotification.close(id, {}, onClose)
    }

    const newProps = reactive(
      Object.assign(options, {
        id,
        ref: 'elRef',
        show: false,
        onShowChange: (val: boolean) => {},
      }),
    )

    newProps.onShowChange = (val) => {
      newProps.show = val
    }

    const tempDiv = document.createElement('div')

    const instance = createApp({
      render: () => h(NotificationVue, newProps, () => children),
    })
    instance.provide('config', config)
    const mountedInstance = instance.mount(tempDiv)
    document.body.appendChild(mountedInstance.$el)

    newProps.show = true

    const offsets: { [key: string]: number } = {
      [Positions.TR]: 0,
      [Positions.T]: 0,
      [Positions.B]: 0,
      [Positions.TL]: 0,
      [Positions.BR]: 0,
      [Positions.BL]: 0,
    }

    notifications
      .filter(
        (el) =>
          (el.component.$refs.elRef as INotificationOptions).placement ===
          options.placement,
      )
      .forEach((el) => {
        offsets[options.placement!] +=
          (el.component.$el as HTMLElement).offsetHeight + 6
      })
    ;(mountedInstance.$refs.elRef as INotificationOptions).position[
      options.placement.split('-')[0]
    ] = offsets[options.placement] + 6
    if (options.placement.split('-')[1]) {
      ;(mountedInstance.$refs.elRef as INotificationOptions).position[
        options.placement.split('-')[1]
      ] = 10
    } else {
      ;(mountedInstance.$refs.elRef as INotificationOptions).position['right'] =
        '50%'
    }

    notifications.push({ id, component: mountedInstance })

    return useNotification.close.bind(this, id, newProps)
  }
}

useNotification.close = (
  id: number,
  props?: Record<string, any>,
  onClose?: () => void,
) => {
  const index = notifications.findIndex((el) => el.id === (id || props?.id))
  if (!notifications[index]) {
    return
  }

  props!.show = false
  const height = (notifications[index].component.$el as HTMLElement)
    .offsetHeight
  if (onClose) {
    onClose()
  }

  notifications
    .filter(
      (el) =>
        (el.component.$refs.elRef as INotificationOptions).placement ===
        (notifications[index].component.$refs.elRef as INotificationOptions)
          .placement,
    )
    .forEach((el) => {
      const data = el.component.$refs.elRef as INotificationOptions
      if (data.id! >= (id || props?.id)) {
        const elPlacement = data.placement.split('-')
        data.position[elPlacement[0]] =
          data.position[elPlacement[0]] - (height + 6)
      }
    })
  notifications.splice(index, 1)
}
