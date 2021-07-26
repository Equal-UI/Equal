<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-show="modelValue"
        v-bind="$attrs"
        ref="modalRef"
        class="it-modal-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
      >
        <transition name="drop-top">
          <div v-show="modelValue" class="it-modal-wrap">
            <div
              class="it-modal-wrap-inner"
              tabindex="0"
              @click.self="maskClick"
            >
              <div
                class="it-modal-body"
                ref="modalBody"
                :class="{ 'it-modal-body--has-image': onlyImageSlot }"
                :style="!onlyImageSlot ? { maxWidth: width } : null"
              >
                <slot name="image" />
                <slot />
                <div v-if="itHasHeader" class="it-modal-header">
                  <slot name="header" />
                </div>
                <div v-if="itHasBody" class="it-modal-content">
                  <slot name="body" />
                </div>
                <div v-if="itHasActions" class="it-modal-footer">
                  <slot name="actions" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  computed,
  nextTick,
  getCurrentInstance,
} from 'vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap'
import { useCheckSlot } from '@/hooks'

export default defineComponent({
  name: 'it-modal',
  inheritAttrs: false,
  props: {
    modelValue: { type: Boolean, default: false },
    width: { type: String, default: '500px' },
    closableMask: { type: Boolean, default: true },
    closeOnEsc: { type: Boolean, default: true },
  },
  setup(props, { emit, slots }) {
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
            setTimeout(enableBodyScroll.bind(this, modalRef.value), 500)
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
    }
  },
})
</script>
