<template>
  <Teleport
    :to="global ? 'body' : teleport"
    :disabled="!teleport"
    v-if="!teleport || isMounted"
  >
    <div
      class="it-loadingbar"
      :class="{
        'it-loadingbar--start': start,
      }"
      :style="{
        position: global ? 'fixed' : 'absolute',
        width: progress + '%',
        height: height + 'px',
      }"
    ></div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'it-loading-bar',
  props: {
    teleport: { type: String },
    global: { type: Boolean },
  },
  setup() {
    const progress = ref(0)
    const height = ref(2)
    const start = ref(false)
    const isMounted = ref(false)

    // needs for teleport to work when teleport target is rendered by vue
    onMounted(() => {
      isMounted.value = true
    })

    const setProgress = (value: number) => {
      if (value >= 100) {
        progress.value = 100
        return
      }
      if (value <= 0) {
        progress.value = 0
        return
      }
      progress.value = value
    }

    const hide = (value: number) => {
      height.value = 0
    }

    const show = (value: number) => {
      height.value = 2
    }

    return { isMounted, start, height, progress, setProgress, hide, show }
  },
})
</script>
