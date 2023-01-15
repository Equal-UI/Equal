<template>
  <component
    :is="component"
    :class="[
      {
        [variant.outlined]: outlined,
        [`${variant[size] ?? ''}`]: size,
        [variant.round]: round,
        [variant.empty]: !$slots.default,
      },
      variant.root,
    ]"
    :disabled="disabled"
  >
    <span :style="{ opacity: loading ? 0 : 1 }" :class="variant.text">
      <slot name="icon"></slot>
      <span v-if="$slots.default">
        <slot />
      </span>
      <slot name="icon-after"></slot>
    </span>
    <it-spinner
      variant="$"
      :variants="{ $: { root: variant.loading } }"
      v-if="loading"
      :radius="10"
      :stroke="3"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, resolveComponent } from 'vue'
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
    nuxt: { type: Boolean },
    routerLink: { type: Boolean },
  },
  setup(props, { attrs }) {
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

    const component = computed(() => {
      if (props.nuxt) {
        // https://github.com/nuxt/framework/issues/4098#issuecomment-1090133831
        return resolveComponent('NuxtLink')
      } else if (props.routerLink) {
        return 'router-link'
      } else if (attrs.href) {
        return 'a'
      }
      return 'button'
    })

    return { variant, component }
  },
})
</script>
