<template>
  <div
    role="tablist"
    :class="[
      variant.root,
      { [variant.bordered]: box },
      { [variant.rootVertical]: vertical },
    ]"
  >
    <div
      :class="[variant.header, { [variant.verticalHeader]: vertical }]"
      :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    >
      <button
        v-for="(tab, i) in tabs"
        :ref="
          (el) => {
            if (el) tabsRefs[i] = el
          }
        "
        :key="i"
        role="tab"
        :aria-selected="selectedIndex === i"
        :tabindex="selectedIndex === i ? null : -1"
        :class="[
          variant.tab,
          {
            [variant.activeTab]: selectedIndex === i,
            [variant.verticalTab]: vertical,
          },
        ]"
        :disabled="tab.disabled"
        :data-content="tab.title"
        @keydown.right.prevent="vertical ? null : focusNextTab(i + 1)"
        @keydown.left.prevent="vertical ? null : focusPrevTab(i - 1)"
        @keydown.down.prevent="vertical ? focusNextTab(i + 1) : null"
        @keydown.up.prevent="vertical ? focusPrevTab(i - 1) : null"
        @click="selectTab(i)"
      >
        {{ tab.title }}
      </button>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums/Components'
import { ITTabsOptions } from '@/types/components/components'
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  ref,
} from 'vue'

export default defineComponent({
  name: Components.ITTabs,
  props: {
    ...getVariantPropsWithClassesList<ITTabsOptions>(),
    initialTab: Number,
    vertical: Boolean,
    box: Boolean,
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITTabsOptions>(Components.ITTabs, props),
    )

    const selectedIndex = ref(0)
    const tabs = ref([])
    const tabsRefs = ref<HTMLElement[]>([])

    provide('tabs', tabs)

    onMounted(async () => {
      await nextTick()
      selectTab(props.initialTab || selectedIndex.value)
    })

    function selectTab(i: number) {
      if (tabs.value[i].disabled) return

      selectedIndex.value = i
      tabs.value.forEach((tab, index) => {
        tab.isActive = index === i
      })
    }

    function focusNextTab(i: number) {
      if (!tabs.value[i]) {
        focusNextTab(0)
        return
      }
      if (tabs.value[i].disabled) {
        focusNextTab(i + 1)
        return
      }

      tabsRefs.value[i].focus()
    }

    function focusPrevTab(i: number) {
      if (!tabs.value[i]) {
        focusPrevTab(tabsRefs.value.length - 1)
        return
      }
      if (tabs.value[i].disabled) {
        focusPrevTab(i - 1)
        return
      }

      tabsRefs.value[i].focus()
    }

    return {
      selectedIndex,
      tabs,
      selectTab,
      tabsRefs,
      focusNextTab,
      focusPrevTab,
      variant,
    }
  },
})
</script>
