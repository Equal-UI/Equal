<template>
  <transition
    v-bind="variant.transitions?.[placementTransition]"
    @after-leave="destroy"
  >
    <div
      ref="rootRef"
      v-show="show"
      :style="positionPx"
      :class="variant.root"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <slot></slot>
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
    show: Boolean,
    duration: Number,
    placement: { type: String, default: Positions.TR },
  },
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITNotificationOptions>(Components.ITNotification, props),
    )
    const position = reactive({})
    const positionPx = computed(() => {
      return Object.fromEntries(
        Object.entries(position).map(([key, value]) => [key, value + 'px']),
      )
    })

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

    onMounted(startTimer)

    function startTimer() {
      if (props.duration && props.duration > 0) {
        timer.value = setTimeout(() => {
          emit('showChange', false)
          emit('close')
        }, props.duration) as any
      }
    }

    function clearTimer() {
      clearTimeout(timer.value as number)
    }

    return {
      positionPx,
      clearTimer,
      startTimer,
      destroy,
      position,
      variant,
      placementTransition,
    }
  },
  // data() {
  //   return {
  //     id: null,
  //     show: false,
  //     text: '',
  //     duration: 5000,
  //     position: {} as { [key: string]: string },
  //     placement: Positions.TR,
  //     timer: null as unknown as NodeJS.Timeout,
  //     onClose: () => {},
  //   }
  // },
  // computed: {
  //   positionPx() {
  //     const posPx: { [key: string]: string } = {}
  //     for (const key in this.position) {
  //       if (this.position.hasOwnProperty(key)) {
  //         posPx[key] = this.position[key] + 'px'
  //       }
  //     }
  //     return posPx
  //   },
  // },
  // mounted() {
  //   this.startTimer()
  // },
  // methods: {
  //   destroy() {
  //     this.$el.parentNode!.removeChild(this.$el)
  //   },

  //   startTimer() {
  //     if (this.duration > 0) {
  //       this.timer = setTimeout(() => {
  //         this.show = false
  //         if (this.onClose) {
  //           this.onClose()
  //         }
  //       }, this.duration) as any
  //     }
  //   },

  //   clearTimer() {
  //     clearTimeout(this.timer)
  //   },
  // },
})
</script>
