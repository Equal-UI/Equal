import { ref, Slots } from 'vue'

export default function(slots: Slots, name: string) {
  return name in slots ? ref(slots[name]) : null
}
