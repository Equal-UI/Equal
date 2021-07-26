<template>
  <div>
    <transition name="fade">
      <div v-show="focus && mask" class="it-input-mask"></div>
    </transition>
    <span v-if="labelTop" class="it-input-label">{{ labelTop }}</span>
    <div
      class="it-input-prefix-wrapper"
      :style="{ 'z-index': mask ? '100' : null }"
    >
      <div v-if="prefix" class="it-input-prefix">{{ prefix }}</div>
      <div
        class="it-input-wrapper"
        :class="[
          status && `it-input-wrapper--${status}`,
          disabled && `it-input-wrapper--disabled`,
        ]"
      >
        <span v-if="prefixIcon" class="it-input-icon-wrapper">
          <it-icon class="it-input-icon" :name="prefixIcon" />
        </span>
        <input
          v-bind="$attrs"
          :type="type"
          class="it-input"
          :disabled="disabled"
          :value="modelValue"
          :placeholder="placeholder"
          @input="input"
          @focus="focus = true"
          @blur="focus = false"
        />
        <span v-if="suffixIcon" class="it-input-icon-wrapper">
          <it-icon class="it-input-icon" :name="suffixIcon" />
        </span>
      </div>
      <div v-if="suffix" class="it-input-suffix">{{ suffix }}</div>
    </div>
    <transition name="fade-bottom">
      <span
        v-if="message"
        class="it-input-message"
        :class="[
          status && `it-input-message--${status}`,
          disabled && `it-input-message--disabled`,
        ]"
        >{{ message }}</span
      >
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Colors } from '@/models/enums'

export default defineComponent({
  name: 'it-input',
  inheritAttrs: false,
  props: {
    status: {
      type: String,
      validator: (value: Colors) =>
        [Colors.SUCCESS, Colors.WARNING, Colors.DANGER].includes(value),
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    labelTop: String,
    prefix: String,
    suffix: String,
    message: String,
    mask: Boolean,
    suffixIcon: String,
    prefixIcon: String,
    disabled: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const focus = ref(false)

    function input(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return { input, focus }
  },
})
</script>
