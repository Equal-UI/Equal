<template>
  <div :class="[variant.root, { [variant.expanded]: active }]">
    <button
      :class="variant.activator"
      :aria-expanded="active"
      @click="active = !active"
    >
      <span>{{ title }}</span>
      <it-icon :class="variant.icon" name="unfold_more" />
    </button>
    <div v-show="active" :class="variant.body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { VariantJSWithClassesListProps } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITCollapseItemOptions } from '@/types/components/components'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: Components.ITCollapseItem,
  props: {
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
