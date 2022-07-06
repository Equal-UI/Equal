<template>
  <Teleport
    :to="global ? 'body' : teleport"
    :disabled="!teleport"
    v-if="!teleport || isMounted"
  >
    <div
      :class="[variant.root, { infinite }]"
      :style="{
        position: global ? 'fixed' : 'absolute',
        width: progress + '%',

        height: height + 'px',
      }"
    ></div>
  </Teleport>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITLoadingbarOptions } from '@/types/components/components'
import { computed, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: Components.ITLoadingbar,
  props: {
    ...getVariantPropsWithClassesList<ITLoadingbarOptions>(),
    teleport: { type: String },
    global: { type: Boolean },
    infinite: { type: Boolean },
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITLoadingbarOptions>(Components.ITLoadingbar, props),
    )

    const progress = ref(0)
    const height = ref(3)
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

    const hide = () => {
      height.value = 0
    }

    const show = () => {
      height.value = 3
    }

    const reset = () => {
      hide()
      setTimeout(() => setProgress(0), 150)
      setTimeout(() => show(), 300)
    }

    return {
      isMounted,
      start,
      height,
      progress,
      variant,
      setProgress,
      hide,
      show,
      reset,
    }
  },
})
</script>

<style>
@keyframes infinite-load {
  0% {
    width: 20%;
    margin-left: -20%;
  }
  100% {
    width: 60%;
    margin-left: 100%;
  }
}

.infinite {
  animation: infinite-load 1.15s ease-in-out infinite;
}
</style>
