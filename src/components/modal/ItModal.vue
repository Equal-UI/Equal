<template>
  <teleport to="body">
    <transition name="fade">
      <div
        class="it-modal-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
        v-if="modelValue"
        @click.self="maskClick"
      >
        <!-- <focus-lock> -->
        <transition name="drop-top">
          <div v-show="modelValue" class="it-modal-body">
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
        <!-- </focus-lock> -->
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
  props: {
    modelValue: Boolean,
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
    }
  },
  // public mounted() {
  //   this.value = true
  //   document.addEventListener('keydown', this.escEvt)
  //   document.body.classList.add('stop-scroll')
  //   // this.$refs.cancelButton.$el.focus()
  // }

  // public beforeDestroy() {
  //   document.body.classList.remove('stop-scroll')
  //   if (this.activeElement) {
  //     this.activeElement.focus()
  //   }
  //   this.$el.remove()
  // }

  // public close() {
  //   this.value = false
  // }

  // public maskClick() {
  //   if (this.closableMask) {
  //     this.close()
  //   }
  // }

  // public terminateSelf() {
  //   this.$destroy()
  // }

  // public escEvt(e: KeyboardEvent) {
  //   if (e.keyCode === 27 && this.closeOnEsc) {
  //     // 27 === Esc
  //     this.cancelHandler()
  //   }
  // }
})
</script>
