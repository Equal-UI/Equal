<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-bind="$attrs"
        class="it-modal-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
        v-show="modelValue"
        @click.self="maskClick"
      >
        <transition name="drop-top">
          <div v-show="modelValue" class="it-modal-body" :style="{width}">
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
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ItButton from '../button'
import useCheckSlot from '../../api/useCheckSlot'

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

    return {
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
