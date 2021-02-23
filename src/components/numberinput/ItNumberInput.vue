<template>
  <div>
    <span class="it-input-label">{{ labelTop }}</span>
    <div class="it-number-field">
      <it-button
        v-if="!hideControls"
        :disabled="this.disabled || disableController('minus')"
        type="primary"
        icon="remove"
        @click="decrease"
        @mousedown="press('minus')"
      ></it-button>

      <div
        class="it-number-input"
        :class="[
          disabled && 'it-number-input--disabled',
          hideControls && 'it-number-input-original--nocontrols',
        ]"
      >
        <input
          ref="input"
          type="number"
          :value="modelValue"
          class="it-number-input-original"
          :disabled="disabled"
          :max="max"
          :min="min"
          :style="{ width: width + 'px' }"
          v-bind="$attrs"
          @input="onInput"
          @keydown.up.stop.prevent="increase"
          @keydown.down.stop.prevent="decrease"
        />
        <div ref="buffer" class="it-number-input-buffer">{{ modelValue }}</div>
      </div>
      <it-button
        v-if="!hideControls"
        :disabled="this.disabled || disableController('plus')"
        type="primary"
        icon="add"
        @click="increase"
        @mousedown="press('plus')"
      ></it-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, nextTick, onMounted } from 'vue'

export default defineComponent({
  name: 'it-number-input',
  inheritAttrs: false,
  props: {
    resizeOnWrite: Boolean,
    disabled: Boolean,
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    step: { type: Number, default: 1 },
    hideControls: Boolean,
    labelTop: String,
    modelValue: { type: [Number, String], default: 0 },
  },
  setup(props, { emit }) {
    const width = ref<number | null>(null)
    const buffer = ref(null)

    onMounted(() => {
      width.value = (buffer.value! as HTMLDivElement).clientWidth
    })

    watch(
      () => props.modelValue,
      async () => {
        if (props.resizeOnWrite) {
          await nextTick()
          width.value = (buffer.value! as HTMLDivElement).clientWidth
        }
      },
    )

    // controllers +/-

    const interval = ref<NodeJS.Timeout | null>(null)

    function press(type: 'plus' | 'minus') {
      if (props.disabled || disableController(type)) return

      const handler = type === 'plus' ? increase : decrease
      interval.value = setInterval(handler, 140)
      window.addEventListener(
        'mouseup',
        () => {
          clearInterval(interval.value!)
        },
        { once: true },
      )
    }

    function disableController(type: 'plus' | 'minus'): boolean {
      if (props.modelValue <= props.min && type === 'minus') {
        return true
      }
      if (props.modelValue >= props.max && type === 'plus') {
        return true
      }
      return false
    }

    // common behavior

    function calculateStep(stepType: 'plus' | 'minus') {
      if (props.disabled) return

      let value = Number(props.modelValue)
      const step = Number(props.step)

      switch (stepType) {
        case 'plus':
          value += step
          break
        case 'minus':
          value -= step
          break
      }

      if (value > props.max) {
        value = props.max
      }
      if (value < props.min) {
        value = props.min
      }

      emit('update:modelValue', Number(value.toFixed(10)))
    }

    function increase() {
      if (props.disabled || props.modelValue >= props.max) return
      calculateStep('plus')
    }

    function decrease() {
      if (props.disabled || props.modelValue <= props.min) return
      calculateStep('minus')
    }

    // input behavior

    function onInput(e: InputEvent, watchVal: number) {
      const newVal = watchVal ?? Number((e.target as HTMLInputElement).value)

      if (newVal > props.max) {
        emit('update:modelValue', props.max)
        return
      } else if (newVal < props.min) {
        emit('update:modelValue', props.min)
        return
      }
      emit('update:modelValue', newVal)
    }

    return {
      onInput,
      increase,
      decrease,
      disableController,
      press,
      width,
      buffer,
    }
  },
})
</script>
