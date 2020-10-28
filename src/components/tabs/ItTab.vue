<template>
  <div class="it-tabs-body" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  name: 'it-tab',
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    disabled: Boolean,
  },
  setup(props, ctx) {
    const tabs = inject('tabs', [])
    const isActive = ref(false)
    tabs.value.push({ ...props, isActive })

    return { isActive }
  },
})
</script>
