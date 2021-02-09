<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-bind="$attrs"
        class="it-modal-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
        v-show="modelValue"
        ref="modalRef"
      >
        <transition name="drop-top">
          <div v-show="modelValue" class="it-modal-wrap">
            <div class="it-modal-wrap-inner" @click.self="maskClick">
              <div class="it-modal-body" :style="{maxWidth: width}">
                <slot name="image"></slot>
                <slot></slot>
                <div v-if="itHasHeader" class="it-modal-header">
                  <slot name="header"></slot>
                </div>
                <div v-if="itHasBody" class="it-modal-content">
                  <slot name="body"></slot>
                </div>
                <div v-if="itHasActions" class="it-modal-footer">
                  <slot name="actions"></slot>
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
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { defineComponent, onMounted, watch, ref } from 'vue'
import ItButton from '../button'
import useCheckSlot from '../../api/useCheckSlot'
import { delay } from '../../helpers/common.helper'

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
    const modalRef = ref<HTMLElement | null>(null);
    const itHasHeader = useCheckSlot(slots, 'header') !== null
    const itHasBody = useCheckSlot(slots, 'body') !== null
    const itHasActions = useCheckSlot(slots, 'actions') !== null

    function close() {
      emit('update:modelValue', false)
    }

    function maskClick() {
      if (props.closableMask) {
        close()
      }
    }

    watch(
      () => props.modelValue,
      (active: boolean) => {
        if (modalRef.value) {
          return active
            ? disableBodyScroll(modalRef.value, { reserveScrollBarGap: true })
            : delay(enableBodyScroll.bind(this, modalRef.value), 500);
        }
      }
    )

    return {
      modalRef,
      maskClick,
      itHasHeader,
      itHasBody,
      itHasActions,
      close,
    }
  },

  // todo:
  // public escEvt(e: KeyboardEvent) {
  //   if (e.keyCode === 27 && this.closeOnEsc) {
  //     // 27 === Esc
  //     this.cancelHandler()
  //   }
  // }
})
</script>
