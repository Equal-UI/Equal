<template>
  <div class="it-checkerboard" :style="bgStyle"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Checkboard',
  computed: {
    bgStyle() {
      return {
        'background-image':
          'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
      }
    },
  },
})
</script>

<style>
.it-checkerboard {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: contain;
}
</style>
