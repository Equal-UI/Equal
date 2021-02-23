<template>
  <div
    role="tablist"
    class="it-tabs"
    :class="{ 'it-tabs--vertical': vertical, 'it-tabs--boxed': box }"
  >
    <div
      class="it-tabs-header"
      :class="{ 'it-tabs-header--vertical': vertical }"
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
        class="it-tabs-tab"
        :class="{
          'it-tabs-tab--active': selectedIndex === i,
          'it-tabs-tab--disabled': tab.disabled,
        }"
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
import { defineComponent, nextTick, onMounted, provide, ref } from 'vue'

export default defineComponent({
  name: 'it-tabs',
  props: {
    initialTab: Number,
    vertical: Boolean,
    box: Boolean,
  },
  setup(props, { slots }) {
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
    }
  },
})
</script>
