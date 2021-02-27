import { ref, Ref, Slots } from 'vue'

export const useCheckSlot = (slots: Slots, name: string): Ref | null => {
  return name in slots ? ref(slots[name]) : null
}
