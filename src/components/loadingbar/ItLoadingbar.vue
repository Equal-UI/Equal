<template>
  <div
    class="it-loadingbar"
    :class="{
      'it-loadingbar--start': start,
    }"
    :style="{
      width: progress + '%',
      height: height + 'px',
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-loading-bar',
  data() {
    return {
      progress: 0,
      height: 2,
      start: false,
    }
  },
  watch: {
    progress (newValue) {
      if (newValue === 100) {
        setTimeout(() => {
          this.progress = 0
          this.height = 2
        }, 600)
      }
    },
  },
})
</script>