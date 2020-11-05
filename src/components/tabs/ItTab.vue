<template>
  <div class="it-tabs-body" :key="title" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, inject, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'it-tab',
  props: {
    title: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  setup(props, ctx) {
    const tabs = inject('tabs', [])
    const isActive = ref(false)
    tabs.value.push({ ...toRefs(props), isActive })

    return { isActive }
  },
})
</script>
