<template>
  <span
    :class="[
      'it-tag',
      type && `it-tag--${type}`,
      filled && `it-tag--${type}--filled`,
    ]"
  >
    <slot></slot>
    <it-icon v-if="closable" name="clear" class="it-tag-close" @click="close" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Colors } from '@/models/enums'

export default defineComponent({
  name: 'it-tag',
  props: {
    type: {
      default: Colors.NEUTRAL,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.BLACK,
          Colors.NEUTRAL,
        ].includes(value),
    },
    closable: { type: Boolean },
    filled: { type: Boolean },
  },
  emits: ['close'],
  setup(props, { emit }) {
    function close() {
      if (!props.closable) {
        return
      }
      emit('close')
    }

    return { close }
  },
})
</script>
