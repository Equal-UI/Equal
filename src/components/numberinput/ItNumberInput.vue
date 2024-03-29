<template>
  <div :class="variant.root">
    <span :class="variant.labelTop">{{ labelTop }}</span>
    <div :class="variant.controlsWrapper">
      <it-button
        v-if="!hideControls"
        :disabled="disabled || disableController('minus')"
        @click="decrease"
        @mousedown="press('minus')"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </it-button>

      <div :class="variant.inputWrapper">
        <input
          ref="input"
          inputmode="numeric"
          pattern="[0-9]*"
          :value="modelValue"
          :class="variant.input"
          :disabled="disabled"
          :max="max"
          :min="min"
          :style="{ width: width + 'px' }"
          v-bind="$attrs"
          @input="onInput"
          @keydown.up.stop.prevent="increase"
          @keydown.down.stop.prevent="decrease"
        />
        <div ref="buffer" :class="variant.inputBuffer">{{ modelValue }}</div>
      </div>
      <it-button
        v-if="!hideControls"
        :disabled="disabled || disableController('plus')"
        type="primary"
        @click="increase"
        @mousedown="press('plus')"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </it-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITNumberInputOptions } from '@/types/components/components'
import { defineComponent, watch, ref, nextTick, onMounted, computed } from 'vue'
import ItButton from '../button'

export default defineComponent({
  name: Components.ITNumberInput,
  inheritAttrs: false,
  components: {
    ItButton,
  },
  props: {
    ...getVariantPropsWithClassesList<ITNumberInputOptions>(),
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
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? [props.variant, 'disabled'] : props.variant,
      }
      return useVariants<ITNumberInputOptions>(
        Components.ITNumberInput,
        <VariantJSWithClassesListProps<ITNumberInputOptions>>customProps,
      )
    })

    const width = ref<number | null>(null)
    const buffer = ref<HTMLDivElement | null>(null)

    watch(
      () => props.modelValue,
      async () => {
        if (props.resizeOnWrite) {
          await nextTick()
          width.value = (buffer.value! as HTMLDivElement).clientWidth
        }
      },
    )

    onMounted(() => {
      setTimeout(() => {
        width.value = buffer.value!.clientWidth
      }, 50)
    })

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
      const newVal =
        watchVal ?? (Number((e.target as HTMLInputElement).value) || 0)

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
      variant,
    }
  },
})
</script>
