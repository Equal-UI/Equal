<script lang="ts">
import { defineComponent, provide, h, computed } from 'vue'
import { useAvatarGroup } from '@/components/avatar-group/hooks'
import { TUseAvatarGroup } from '@/components/avatar-group/types'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { ITAvatarGroupOptions } from '@/types/components/components'
import { Components } from '@/models/enums/Components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: Components.ITAvatarGroup,
  props: {
    ...getVariantPropsWithClassesList<ITAvatarGroupOptions>(),
    vertical: { type: Boolean },
    square: { type: Boolean },
    max: { type: Number, default: null },
    size: { type: String, default: '40px' },
  },
  setup(props, { slots }) {
    provide('square', props.square)
    provide('size', props.size)

    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.vertical ? 'vertical' : 'horizontal',
      }
      return useVariants<ITAvatarGroupOptions>(
        Components.ITAvatarGroup,
        <VariantJSWithClassesListProps<ITAvatarGroupOptions>>(
          (<unknown>customProps)
        ),
      )
    })

    const { totalChildrenVNodes, label }: TUseAvatarGroup = useAvatarGroup(
      props,
      slots,
    )

    return () =>
      h(
        'div',
        {
          class: variant.value.root,
        },
        [
          totalChildrenVNodes.value,
          label.value.show
            ? h(
                'span',
                {
                  class: variant.value.count,
                },
                `+${label.value.count}`,
              )
            : null,
        ],
      )
  },
})
</script>
