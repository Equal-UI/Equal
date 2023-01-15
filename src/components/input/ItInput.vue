<template>
  <div :class="variant.root">
    <Transition v-bind="variant.transitions?.fade">
      <div v-show="focus && mask" :class="variant.mask"></div>
    </Transition>
    <span v-if="labelTop" :class="variant.labelTop">{{ labelTop }}</span>
    <div
      :class="variant.prefixWrapper"
      :style="{ 'z-index': mask && focus ? '100' : null }"
    >
      <div v-if="prefix" :class="variant.affix">{{ prefix }}</div>
      <div :class="variant.inputWrapper">
        <div v-if="hasPrefixIconSlot" :class="variant.iconWrapper">
          <slot name="prefixIcon"></slot>
        </div>
        <input
          v-bind="$attrs"
          :type="type"
          :class="variant.input"
          :disabled="disabled"
          :value="modelValue"
          :placeholder="placeholder"
          @input="input"
          @focus="focus = true"
          @blur="focus = false"
        />
        <div v-if="hasSuffixIconSlot" :class="variant.iconWrapper">
          <slot name="suffixIcon"></slot>
        </div>
      </div>
      <div v-if="suffix" :class="variant.affix">{{ suffix }}</div>
    </div>
    <Transition v-bind="variant.transitions?.fade">
      <span v-if="message" :class="variant.message">{{ message }}</span>
    </Transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Components } from '@/models/enums'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { ITInputOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'
import { useCheckSlot } from '@/hooks'

export default defineComponent({
  name: Components.ITInput,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<ITInputOptions>(),
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
    disabled: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit, slots }) {
    const focus = ref(false)
    const hasPrefixIconSlot = useCheckSlot(slots, 'prefixIcon') !== null
    const hasSuffixIconSlot = useCheckSlot(slots, 'suffixIcon') !== null

    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? 'disabled' : props.variant,
      }

      return useVariants<ITInputOptions>(
        Components.ITInput,
        <VariantJSWithClassesListProps<ITInputOptions>>customProps,
      )
    })

    function input(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    return { input, focus, variant, hasPrefixIconSlot, hasSuffixIconSlot }
  },
})
</script>
