<script lang="ts">
import { defineComponent, provide, h, computed } from 'vue'
import { useAvatarGroup } from '@/components/avatar-group/hooks'
import { TUseAvatarGroup } from '@/components/avatar-group/types'

export default defineComponent({
  name: 'it-avatar-group',
  props: {
    vertical: { type: Boolean },
    square: { type: Boolean },
    max: { type: Number, default: null },
    size: { type: String, default: '40px' },
  },
  setup(props, { slots }) {
    provide('square', props.square)
    provide('size', props.size)

    const { totalChildrenVNodes, label }: TUseAvatarGroup = useAvatarGroup(
      props,
      slots,
    )

    const classes = computed(() => ({
      'it-avatar-group': true,
      'it-avatar-group--vertical': props.vertical,
      'it-avatar-group--horizontal': !props.vertical,
    }))

    return () =>
      h(
        'div',
        {
          class: classes.value,
        },
        [
          totalChildrenVNodes.value,
          label.value.show
            ? h(
                'div',
                {
                  class: ['it-avatar-group-max'],
                  style: { width: props.size, height: props.size },
                },
                [h('span', `+${label.value.count}`)],
              )
            : null,
        ],
      )
  },
})
</script>
