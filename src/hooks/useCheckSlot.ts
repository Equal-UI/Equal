import { ref, Slots } from 'vue'

export const useCheckSlot = (slots: Slots, name: string) => {
  return name in slots ? ref(slots[name]) : null
}
