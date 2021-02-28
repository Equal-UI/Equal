import { h, VNode } from 'vue'

export const renderLabel = (labelText: string): VNode =>
  h(
    'span',
    {
      class: ['it-avatar-max'],
    },
    [h('span', labelText)],
  )
