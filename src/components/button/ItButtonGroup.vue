<template>
  <div :class="`it-button-group${vertical ? '--vertical' : ''}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-button-group',
  props: {
    vertical: { type: Boolean }
  }
})
</script>