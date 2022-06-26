<template>
  <teleport to="body">
    <div :class="variant.root" ref="focusRef">
      <transition v-bind="variant.transitions?.fade">
        <div
          v-show="modelValue && !hideMask"
          :class="variant.mask"
          tabindex="0"
          :style="{ cursor: closableMask ? 'pointer' : 'default' }"
          @click.self="maskClick"
        ></div>
      </transition>
      <transition v-bind="bodyTransition">
        <div
          v-show="modelValue"
          ref="drawerRef"
          :style="{ width }"
          :class="[variant.body, variant[placement]]"
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
import { Components, Positions } from '@/models/enums'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { ITDrawerOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: Components.ITDrawer,
  props: {
    ...getVariantPropsWithClassesList<ITDrawerOptions>(),
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
  },
  setup(props, { emit }) {
    let { modelValue } = toRefs(props)
    const variant = computed(() => {
      return useVariants<ITDrawerOptions>(
        Components.ITDrawer,
        <VariantJSWithClassesListProps<ITDrawerOptions>>(<unknown>props),
      )
    })
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

          drawerRef.value.style.transform = ''

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

    const bodyTransition = computed(() => {
      const { dropToRight, dropToLeft } = variant.value.transitions!
      return props.placement === Positions.R ? dropToLeft : dropToRight
    })

    return {
      maskClick,
      variant,
      drawerRef,
      bodyTransition,
      focusRef,
    }
  },
})
</script>
