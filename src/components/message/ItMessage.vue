<template>
  <transition v-bind="variant.transitions?.fadeToBottom" @after-leave="destroy">
    <div
      ref="rootRef"
      :style="{ top: realTop + 'px' }"
      v-show="show"
      :class="variant.root"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <slot>
        <span>{{ text }}</span>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITMessageOptions } from '@/types/components/components'
import { computed, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: Components.ITMessage,
  props: {
    ...getVariantPropsWithClassesList<ITMessageOptions>(),
    id: Number,
    show: Boolean,
    text: String,
    duration: { type: Number },
  },
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITMessageOptions>(Components.ITMessage, props),
    )
    const realTop = ref(6)
    const timer = ref<number | null>(null)

    const rootRef = ref<HTMLElement>()

    onMounted(startTimer)

    function startTimer() {
      if (props.duration && props.duration > 0) {
        timer.value = setTimeout(() => {
          emit('showChange', false)
          emit('close')
        }, props.duration)
      }
    }

    function destroy() {
      if (rootRef.value) {
        rootRef.value!.parentNode!.removeChild(rootRef.value)
      }
    }

    function clearTimer() {
      clearTimeout(timer.value as number)
    }

    return {
      timer,
      startTimer,
      destroy,
      clearTimer,
      rootRef,
      realTop,
      variant,
    }
  },
})
</script>
