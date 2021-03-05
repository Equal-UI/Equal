import { VNode, Slot } from 'vue'

export const getChildrenVNodesFromSlot = (slot: Slot): VNode[] => {
  return slot().reduce((list: VNode[], child) => {
    const resultChildren: VNode[] = child.children?.length
      ? (child.children as VNode[])
      : [child]
    return [...list, ...resultChildren]
  }, [])
}
