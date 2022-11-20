<template>
  <Teleport to="body">
    <Transition v-bind="variant.transitions?.fade">
      <div
        v-show="modelValue"
        v-bind="$attrs"
        ref="modalRef"
        :class="variant.mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
      >
        <Transition v-bind="variant.transitions?.dropToBottom">
          <div
            v-show="modelValue"
            @click.self="maskClick"
            :class="variant.bodyWrapper"
          >
            <div
              tabindex="0"
              :class="variant.body"
              ref="modalBody"
              :style="!onlyImageSlot ? { maxWidth: width } : { width: 'auto' }"
            >
              <slot name="image" />
              <slot />
              <div v-if="itHasHeader" :class="variant.header">
                <slot name="header" />
              </div>
              <div v-if="itHasBody" :class="variant.content">
                <slot name="body" />
              </div>
              <div v-if="itHasActions" :class="variant.footer">
                <slot name="actions" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useCheckSlot } from '@/hooks'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITModalOptions } from '@/types/components/components'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  watch,
} from 'vue'

export default defineComponent({
  name: Components.ITModal,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<ITModalOptions>(),
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: '500px' },
    closableMask: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
  },
  setup(props, { emit, slots }) {
    const variant = computed(() =>
      useVariants<ITModalOptions>(Components.ITModal, props),
    )

    const modalRef = ref<HTMLElement | null>()
    const itHasHeader = useCheckSlot(slots, 'header') !== null
    const itHasBody = useCheckSlot(slots, 'body') !== null
    const itHasActions = useCheckSlot(slots, 'actions') !== null
    const itHasImage = useCheckSlot(slots, 'image') !== null

    const modalBody = ref<HTMLElement | null>()

    const Equal = getCurrentInstance()

    const { hasFocus, activate, deactivate } = useFocusTrap(modalRef)

    function close() {
      emit('update:modelValue', false)
    }

    function maskClick() {
      if (props.closableMask) {
        close()
      }
    }

    function pressEsc(e: KeyboardEvent) {
      e.code === 'Escape' && close()
    }

    watch(
      () => props.modelValue,
      async (active: boolean) => {
        await nextTick()
        const modalsList =
          Equal!.appContext.config.globalProperties.$Equal.modals
        if (modalRef.value) {
          if (active) {
            modalsList.push(modalBody.value)

            modalsList
              .slice(0, modalsList.indexOf(modalBody.value))
              .forEach((modalEl: HTMLElement) => {
                if (modalEl.style.transform !== '') {
                  const scaleAndTranslate = modalEl.style.transform
                    .match(/[-+]?[0-9]*\.?[0-9]+/g)
                    ?.map((ittt) => parseFloat(ittt))
                  modalEl.style.transform = `scale(${
                    scaleAndTranslate![0] - 0.05
                  }) translateY(${scaleAndTranslate![1] - 5}%)`
                } else {
                  modalEl.style.transform = `scale(0.9) translateY(5%)`
                }
              })

            disableBodyScroll(modalRef.value, { reserveScrollBarGap: true })
            if (props.closeOnEsc) {
              document.addEventListener('keydown', pressEsc)
            }
            activate()
          } else {
            modalsList.splice(modalsList.indexOf(modalBody.value), 1)

            modalsList.forEach((modalEl: HTMLElement, i: number) => {
              if (i === modalsList.length - 1) {
                modalEl.style.transform = ''
                return
              }
              const scaleAndTranslate = modalEl.style.transform
                .match(/[-+]?[0-9]*\.?[0-9]+/g)
                ?.map((val) => parseFloat(val))
              modalEl.style.transform = `scale(${
                scaleAndTranslate![0] + 0.05
              }) translateY(${scaleAndTranslate![1] + 5}%)`
            })

            modalBody.value.style.transform = ''

            deactivate()
            setTimeout(enableBodyScroll.bind(this, modalRef.value), 100)
            document.removeEventListener('keydown', pressEsc)
          }
        }
      },
    )

    const onlyImageSlot = computed(() => {
      return itHasImage && !itHasHeader && !itHasBody && !itHasActions
    })

    return {
      modalRef,
      modalBody,
      maskClick,
      hasFocus,
      itHasHeader,
      itHasBody,
      itHasActions,
      close,
      onlyImageSlot,
      variant,
    }
  },
})
</script>
