<template>
  <label
    class="it-radio-wrapper"
    :class="[
      isChecked && `it-radio-wrapper--${type}--checked`,
      `it-radio-wrapper--${type}`,
      disabled && 'it-radio-wrapper--disabled',
    ]"
  >
    <input
      class="it-radio-input"
      :disabled="disabled"
      type="radio"
      :checked="isChecked"
      :value="modelValue"
      v-bind="$attrs"
      @change="check"
    />
    <span :class="['it-radio-border', pulse && !disabled && 'pulse']">
      <span class="it-radio-circle"></span>
    </span>
    <span class="it-radio-label-group">
      <span
        v-if="label && !$slots.default"
        class="it-radio-label"
        :class="[disabled && 'it-radio-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="it-radio-label it-radio-label--sub"
        :class="[disabled && 'it-radio-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="it-radio-label"
        :class="[disabled && 'it-radio-label--disabled']"
      >
        <slot></slot>
      </span>
      <span
        v-if="$slots.sublabel"
        class="it-radio-label it-radio-label--sub"
        :class="[disabled && 'it-radio-label--disabled']"
      >
        <slot name="sublabel"></slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { Colors } from '@/models/enums'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'it-radio',
  inheritAttrs: false,
  props: {
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.BLACK,
        ].includes(value),
    },
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: {},
    value: {},
  },
  setup(props, { emit }) {
    function check() {
      if (props.disabled) {
        return
      }

      emit('update:modelValue', props.value)
    }

    const isChecked = computed(() => props.modelValue === props.value)
    return { check, isChecked }
  },
})
</script>
