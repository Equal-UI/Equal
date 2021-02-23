<template>
  <div
    class="it-divider"
    :class="{
      'it-divider--horizontal': !vertical,
      'it-divider--vertical': vertical,
    }"
    role="separator"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-divider',
  props: { vertical: { type: Boolean } },
})
</script>
