<template>
    <div class="it-tabs-body" v-if="isActive">
      <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-tab',
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
    disabled: Boolean
  },
  created() {
    this.$parent.tabs.push(this)
  },
  data() {
    return {
      isActive: false,
    }
  },
})
</script>
