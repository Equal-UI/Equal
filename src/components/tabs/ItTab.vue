<template>
  <div v-show="isActive" :key="title" :class="variant.body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITTabsOptions } from '@/types/components/components'
import { computed, defineComponent, inject, ref, toRefs } from 'vue'

export default defineComponent({
  name: 'it-tab',
  props: {
    ...getVariantPropsWithClassesList<ITTabsOptions>(),
    title: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  setup(props) {
    const tabs = inject('tabs', [])
    const variant = computed(() =>
      useVariants<ITTabsOptions>(Components.ITTabs, props),
    )

    const isActive = ref(false)
    tabs.value.push({ ...toRefs(props), isActive })

    return { isActive, variant }
  },
})
</script>
