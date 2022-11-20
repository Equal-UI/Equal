<template>
  <div :class="variant.root">
    <button
      :class="[variant.activator, { [variant.expanded]: active }]"
      :aria-expanded="active"
      @click="active = !active"
    >
      <span>
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="variant.icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    </button>
    <div v-show="active" :class="variant.body">
      <slot></slot>
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
import { ITCollapseItemOptions } from '@/types/components/components'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: Components.ITCollapseItem,
  props: {
    ...getVariantPropsWithClassesList<ITCollapseItemOptions>(),
    title: { type: String },
    opened: { type: Boolean },
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITCollapseItemOptions>(
        Components.ITCollapseItem,
        <VariantJSWithClassesListProps<ITCollapseItemOptions>>props,
      ),
    )
    const active = ref(props.opened)
    return { variant, active }
  },
})
</script>
