import { VNode, ComputedRef } from 'vue'

export type TUseAvatarGroup = {
  totalChildrenVNodes: ComputedRef<VNode[] | []>
  label: ComputedRef<{
    show: boolean
    count: number
  }>
}
