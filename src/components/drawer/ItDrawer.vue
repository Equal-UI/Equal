<template>
  <teleport to="body">
    <div class="it-drawer" ref="focusRef">
      <transition name="fade">
        <div
          v-show="modelValue && !hideMask"
          class="it-drawer-mask"
          tabindex="0"
          :style="{ cursor: closableMask ? 'pointer' : 'default' }"
          @click.self="maskClick"
        ></div>
      </transition>
      <transition :name="`drop-${transitionSide}`">
        <div
          v-show="modelValue"
          ref="drawerRef"
          :style="{ width }"
          class="it-drawer-body"
          :class="`it-drawer-body--${placement}${fixed ? '--fixed' : ''}`"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  toRefs,
  watch,
} from 'vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Positions } from '@/models/enums'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'

export default defineComponent({
  name: 'it-drawer',
  props: {
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: '500px' },
    closableMask: { type: Boolean, default: true },
    hideMask: Boolean,
    placement: {
      type: String,
      default: Positions.R,
      validator: (value: Positions) =>
        [Positions.L, Positions.R].includes(value),
    },
    fixed: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    let { modelValue } = toRefs(props)
    const Equal = getCurrentInstance()
    const drawerRef = ref<HTMLElement>()
    const focusRef = ref<HTMLElement>()

    const { activate, deactivate } = useFocusTrap(focusRef)

    watch(
      () => modelValue.value,
      async (active: boolean) => {
        const drawersList =
          Equal!.appContext.config.globalProperties.$Equal.drawers
        if (active) {
          drawersList.push(drawerRef.value)

          drawersList
            .slice(0, drawersList.indexOf(drawerRef.value))
            .forEach((drawerEl: HTMLElement) => {
              if (drawerEl.style.transform !== '') {
                const scaleAndTranslate = drawerEl.style.transform
                  .match(/[-+]?[0-9]*\.?[0-9]+/g)
                  ?.map((ittt) => parseFloat(ittt))
                drawerEl.style.transform = `scale(${
                  scaleAndTranslate![0] - 0.05
                }) translateX(${
                  scaleAndTranslate![1] -
                  (props.placement === Positions.R ? 10 : -10)
                }%)`
              } else {
                drawerEl.style.transform = `scale(0.9) translateX(${
                  props.placement === Positions.R ? -15 : 15
                }%)`
              }
            })
          await nextTick()
          if (!props.hideMask) {
            disableBodyScroll(focusRef.value!, { reserveScrollBarGap: true })
            activate()
          }
        } else {
          drawersList.splice(drawersList.indexOf(drawerRef.value), 1)

          drawersList.forEach((drawerEl: HTMLElement, i: number) => {
            if (i === drawersList.length - 1) {
              drawerEl.style.transform = ''
              return
            }
            const scaleAndTranslate = drawerEl.style.transform
              .match(/[-+]?[0-9]*\.?[0-9]+/g)
              ?.map((val) => parseFloat(val))
            drawerEl.style.transform = `scale(${
              scaleAndTranslate![0] + 0.05
            }) translateX(${
              scaleAndTranslate![1] +
              (props.placement === Positions.R ? 10 : -10)
            }%)`
          })

          if (drawerRef.value) {
            drawerRef.value.style.transform = ''
          }

          if (!props.hideMask) {
            enableBodyScroll(focusRef.value!)
            deactivate()
          }
        }
      },
    )

    function maskClick() {
      if (props.closableMask) {
        close()
      }
    }

    function close() {
      emit('update:modelValue', false)
    }

    const transitionSide = computed(() => {
      return props.placement === Positions.R ? Positions.L : Positions.R
    })

    return {
      maskClick,
      transitionSide,
      drawerRef,
      focusRef,
    }
  },
})
</script>
