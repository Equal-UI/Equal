<template>
  <div
    class="it-button-group"
    :class="
      vertical ? 'it-button-group--vertical' : 'it-button-group--horizontal'
    "
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-button-group',
  props: {
    vertical: { type: Boolean },
  },
})
</script>
