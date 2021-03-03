import { Slots, computed, onUpdated, ref } from 'vue'
import { getChildrenVNodesFromSlot } from '@/helpers/getChildrenVNodesFromSlot'
import { TUseAvatarGroup } from '@/components/avatar-group/types'

export const useAvatarGroup = (
  props: { max: number | null },
  slots: Slots,
): TUseAvatarGroup => {
  const childrenVNodes = ref(
    slots.default ? getChildrenVNodesFromSlot(slots.default) : [],
  )

  onUpdated(() => {
    const newAvatars = slots.default
      ? getChildrenVNodesFromSlot(slots.default)
      : []
    if (newAvatars.length !== childrenVNodes.value.length) {
      childrenVNodes.value = newAvatars
    }
  })

  const totalChildrenVNodes = computed(() =>
    childrenVNodes.value.slice(0, props.max || childrenVNodes.value.length),
  )

  const label = computed(() => ({
    show: props.max ? childrenVNodes.value.length > props.max : false,
    count: props.max ? childrenVNodes.value.length - props.max : 0,
  }))

  return {
    totalChildrenVNodes,
    label,
  }
}
