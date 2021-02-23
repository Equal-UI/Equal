<template>
  <div v-show="isActive" :key="title" class="it-tabs-body">
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
  setup(props) {
    const tabs = inject('tabs', [])
    const isActive = ref(false)
    tabs.value.push({ ...toRefs(props), isActive })

    return { isActive }
  },
})
</script>
