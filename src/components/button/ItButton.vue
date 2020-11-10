<template>
  <button
    class="it-btn"
    :class="[
      type ? `it-btn--${type}` : 'it-btn--neutral',
      outlined && `it-btn--outlined`,
      size && `it-btn--${size}`,
      round && 'round',
      (pulse && !disabled) && 'pulse',
      block && 'it-btn--block',
      text && 'it-btn--text'
    ]"
    :style="[!$slots.default && {padding: '9px 9px'}]"
    :disabled="disabled"
  >
    <it-icon
      v-if="icon && !iconAfter"
      :name="icon"
      :style="{visibility: loading ? 'hidden': 'visible', ...($slots.default && marginStyle)}"
    />
    <span
      v-if="$slots.default"
      :style="{visibility: loading ? 'hidden': 'visible'}"
      class="it-btn-text"
    >
      <slot />
    </span>
    <it-icon
      v-if="icon && iconAfter"
      :name="icon"
      :style="{visibility: loading ? 'hidden': 'visible', ...($slots.default && marginStyle)}"
    />
    <it-loading
      color="#fff"
      :radius="10"
      :style="{
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-10px',
        marginTop: '-10px'
      }"
      :stroke="3"
      v-if="loading"
    ></it-loading>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ItIcon from '../icon'
import ItLoading from '../loading'
import { Sizes, Colors } from '../../models'


export default defineComponent({
  name: 'it-button',
  components: {
    ItIcon,
    ItLoading
  },
  props: {
    type: {
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.BLACK,
          Colors.NEUTRAL
        ].includes(value)
    },
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value: Sizes) =>
        [Sizes.SMALL, Sizes.NORMAL, Sizes.BIG].includes(value)
    },
    iconAfter: { type: Boolean },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    block: { type: Boolean },
    text: { type: Boolean },
    icon: { type: String }
  },
  setup(props) {
    const marginStyle = computed(() => {
      return props.iconAfter ? { marginLeft: '6px' } : { marginRight: '6px' }
    })
    return { marginStyle}
  }
})
</script>

