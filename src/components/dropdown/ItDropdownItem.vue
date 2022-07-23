<template>
  <component
    :is="comp"
    :class="[variant.item, { [variant.disabled]: disabled }]"
  >
    <span :class="variant.itemText">
      <slot name="icon"></slot>
      <slot></slot>
    </span>
    <slot name="icon-after"></slot>
    <div v-if="nested">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 10 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </component>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITDropdownOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'it-dropdown-item',
  props: {
    ...getVariantPropsWithClassesList<ITDropdownOptions>(),
    nested: Boolean,
    disabled: Boolean,
    component: String,
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITDropdownOptions>(Components.ITDropdown, props),
    )

    const comp = computed(() => props.component || 'div')

    return { variant, comp }
  },
})
</script>
