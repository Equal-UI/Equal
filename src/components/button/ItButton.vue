<template>
  <button
    :class="[
      {
        [variant.outlined]: outlined,
        [`${variant[size]}`]: size,
        [variant.round]: round,
        [variant.empty]: !$slots.default,
      },
      variant.root,
    ]"
    :disabled="disabled"
  >
    <span :style="{ opacity: loading ? 0 : 1 }">
      <it-icon v-if="icon" class="it-btn-icon" :name="icon" />
      <span v-if="$slots.default" :class="variant.text">
        <slot />
      </span>
    </span>
    <it-spinner
      :class="variant.loading"
      v-if="loading"
      :radius="10"
      :stroke="3"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ItIcon from '@/components/icon'
import ItSpinner from '@/components/spinner'
import { Components, Sizes } from '@/models/enums'
import { useVariants } from '@/hooks/useVariants'
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { ITButtonOptions } from '@/types/components/components'

export default defineComponent({
  name: Components.ITButton,
  components: {
    ItIcon,
    ItSpinner,
  },
  props: {
    ...getVariantPropsWithClassesList<ITButtonOptions>(),
    size: {
      type: String,
      default: Sizes.NORMAL,
      validator: (value: Sizes) => Object.values(Sizes).includes(value),
    },
    iconAfter: { type: Boolean },
    disabled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    pulse: { type: Boolean },
    loading: { type: Boolean },
    block: { type: Boolean },
    text: { type: Boolean },
    icon: { type: String, default: null },
  },
  setup(props, { slots }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? 'disabled' : props.variant,
      }
      return useVariants<ITButtonOptions>(
        Components.ITButton,
        <VariantJSWithClassesListProps<ITButtonOptions>>customProps,
      )
    })

    const rootClasses = computed(() => [
      {
        ...sizeClasses,

        pulse: props.pulse,
        'p-2': !slots.default,
        'shadow-sm': hasBoxShadow,
        'it-btn--outlined': props.outlined,
        'rounded-full': props.round,
        'it-btn--block': props.block,
        'it-btn--text': props.text,
        'it-btn--loading': props.loading,
        // ...(props.type
        //   ? { [`it-btn--${props.type}`]: true }
        //   : { 'it-btn--neutral': true }),
        ...(props.icon
          ? {
              [props.iconAfter ? 'it-btn--icon-right' : 'it-btn--icon-left']:
                true,
            }
          : null),
      },
    ])

    const hasBoxShadow = computed(
      () => !props.outlined && !props.disabled && !props.block && !props.text,
    )

    return { rootClasses, variant }
  },
})
</script>
