<template>
  <span
    v-show="show"
    :class="[
      'it-tag',
      type && `it-tag--${type}`,
      filled && `it-tag--${type}--filled`,
    ]"
  >
    <slot></slot>
    <it-icon v-if="closable" @click="close" name="clear" class="it-tag-close" />
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  setup(props) {
    const show = ref(true)

    function close() {
      if (!props.closable) {
        return
      }
      show.value = false
    }

    return { show, close }
  },
})
</script>
