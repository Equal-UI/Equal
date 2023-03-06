<template>
  <transition
    v-bind="variant.transitions?.[placementTransition]"
    @after-leave="destroy"
  >
    <div
      ref="rootRef"
      v-show="show"
      :style="{
        transform: positionCentered ? 'translateX(50%)' : '',
        ...positionPx,
      }"
      :class="variant.root"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <slot>
        <h3 v-if="title" :class="variant.title">{{ title }}</h3>
        <p v-if="text" :class="variant.text">{{ text }}</p>
      </slot>
      <div
        v-if="progress"
        :class="variant.progressLine"
        :style="{ transform: `scaleX(${lineWidth})` }"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { Components, Positions } from '@/models/enums'
import { useVariants } from '@/hooks/useVariants'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITNotificationOptions } from '@/types/components/components'

export default defineComponent({
  name: Components.ITNotification,
  props: {
    ...getVariantPropsWithClassesList<ITNotificationOptions>(),
    id: Number,
    text: String,
    title: String,
    show: Boolean,
    progress: Boolean,
    duration: { type: Number, default: 5000 },
    placement: { type: String, default: Positions.TR },
  },
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITNotificationOptions>(Components.ITNotification, props),
    )
    const lineWidth = ref(0.9)
    const hovered = ref(false)
    const position = reactive({})
    const positionPx = computed(() => {
      return Object.fromEntries(
        Object.entries(position).map(([key, value]) => {
          const newVal = isNaN(value) ? value : value + 'px'
          return [key, newVal]
        }),
      )
    })

    const positionCentered = computed(() =>
      [Positions.T, Positions.B].includes(props.placement as Positions),
    )

    const timer = ref<number | null>(null)
    const rootRef = ref<HTMLElement>()

    function destroy() {
      if (rootRef.value) {
        rootRef.value!.parentNode!.removeChild(rootRef.value)
      }
    }

    const placementTransition = computed(() => {
      const [first, ...rest] =
        props.placement.split('-')[0] === 'top' ? 'bottom' : 'top'

      return ['fadeTo', first.toUpperCase(), ...rest].join('')
    })

    onMounted(() => {
      startTimer()
    })

    function startTimer() {
      if (props.duration && props.duration > 0) {
        hovered.value = false
        if (props.progress) {
          widthInterval()
        }
        timer.value = setTimeout(() => {
          emit('showChange', false)
          emit('close')
        }, props.duration) as unknown as number
      }
    }

    function widthInterval() {
      setTimeout(() => {
        lineWidth.value -= 100 / props.duration
        if (!hovered.value && lineWidth.value > 0) {
          widthInterval()
        }
      }, 100)
    }

    function clearTimer() {
      clearTimeout(timer.value as number)
      hovered.value = true
    }

    return {
      positionPx,
      clearTimer,
      startTimer,
      destroy,
      position,
      variant,
      placementTransition,
      positionCentered,
      lineWidth,
    }
  },
})
</script>
