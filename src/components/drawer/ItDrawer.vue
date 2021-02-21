<template>
  <div class="it-drawer">
    <transition name="fade">
      <div
        v-show="modelValue && !hideMask"
        class="it-drawer-mask"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
        @click.self="maskClick"
      ></div>
    </transition>
    <transition :name="`drop-${transitionSide}`">
      <div
        v-show="modelValue"
        :style="{ width }"
        class="it-drawer-body"
        :class="`it-drawer-body--${placement}`"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Positions } from '@/models/enums'

export default defineComponent({
  name: 'it-drawer',
  props: {
    modelValue: Boolean,
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
    function maskClick() {
      if (props.closableMask) {
        close()
      }
    }

    function close() {
      emit('update:modelValue', false)
    }

    const transitionSide = computed(() => {
      return props.placement === Positions.R ? 'left' : 'right'
    })

    return {
      maskClick,
      transitionSide,
    }
  },
})
</script>
