<template>
  <div class="it-tabs" :class="{ 'it-tabs--vertical': vertical }">
    <ul
      class="it-tabs-header"
      :class="{ 'it-tabs-header--vertical': vertical }"
    >
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        @click="selectTab(i)"
        class="it-tabs-tab"
        :class="{
          'it-tabs-tab--active': selectedIndex === i,
          'it-tabs-tab--disabled': tab.disabled,
        }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'it-tabs',
  props: {
    initialTab: Number,
    vertical: Boolean,
  },
  setup(props, { slots }) {
    const selectedIndex = ref(0)
    const tabs = ref([])

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

    return {
      selectedIndex,
      tabs,
      selectTab,
    }
  },
})
</script>
