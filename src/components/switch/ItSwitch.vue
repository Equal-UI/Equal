<template>
  <label :class="variant.root">
    <span :class="[variant.switch, { [variant.switchChecked]: modelValue }]">
      <input
        type="checkbox"
        :class="variant.input"
        :disabled="disabled"
        style="z-index: 10"
        v-bind="$attrs"
        @change="toggle"
      />
      <span
        :class="variant.switchCircle"
        :style="{ [modelValue ? 'right' : 'left']: '2px' }"
      ></span>
    </span>
    <span
      v-if="label || subLabel || $slots.default || $slots.sublabel"
      :class="variant.labelGroup"
    >
      <span v-if="label || $slots.default" :class="variant.label"
        ><slot>{{ label }}</slot>
      </span>
      <span v-if="subLabel || $slots.sublabel" :class="variant.subLabel">
        <slot name="sublabel">{{ subLabel }}</slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITSwitchOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: Components.ITSwitch,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<ITSwitchOptions>(),
    label: { type: String },
    subLabel: { type: String },
    disabled: { type: Boolean },
    modelValue: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? 'disabled' : props.variant,
      }
      return useVariants<ITSwitchOptions>(
        Components.ITSwitch,
        <VariantJSWithClassesListProps<ITSwitchOptions>>customProps,
      )
    })

    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
    }

    return { toggle, variant }
  },
})
</script>
