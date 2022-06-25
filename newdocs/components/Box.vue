<template>
  <div
    class="
      it-box
      my-10
      flex
      w-full
      flex-col
      rounded
      border
      bg-white
      dark:border-neutral-700 dark:bg-neutral-800
    "
    :class="{ 'overflow-hidden': overflowHidden }"
  >
    <h2 class="it-box-title py-4 px-6 leading-none">{{ title }}</h2>
    <slot name="description"></slot>
    <div
      class="
        it-box-scene
        box-border
        flex
        w-full
        flex-wrap
        items-center
        justify-center
        gap-4
        py-10
        px-6
        leading-none
      "
    >
      <slot></slot>
    </div>

    <div
      class="it-box-code relative w-full overflow-auto"
      :style="{
        'max-height': expandHeight,
      }"
    >
      <it-button
        icon="file_copy"
        class="!absolute top-3 right-3"
        @click="clickCopy"
        v-tooltip="tooltipValue"
      />
      <prism
        class="border-t border-t-white dark:border-t-gray-600"
        language="html"
        :code="code"
      ></prism>
    </div>
    <it-divider v-if="showExpand" />
    <it-button
      style="border: none; border-radius: 0px"
      v-if="showExpand"
      icon="code"
      type="neutral"
      @click="toggleExpand"
      >{{ expanded ? 'Hide code' : 'Show code' }}</it-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  code?: string
  title?: string
  overflowHidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  overflowHidden: true,
})

const expandHeight = ref('0px')
const copyText = ref('Copy to clipboard')
const expanded = ref(false)

const tooltipValue = { position: 'left', content: copyText }

const showExpand = computed(() => (props.code || '').split('\n').length > 3)

function toggleExpand() {
  expandHeight.value = expandHeight.value === '0px' ? '1000px' : '0px'
  expanded.value = !expanded.value
}

async function clickCopy() {
  copyText.value = 'Copied!'
  await navigator.clipboard.writeText(props.code!)
}

if (!showExpand.value) {
  expandHeight.value = '1000px'
}
</script>

<style lang="less">
.it-box {
  min-height: 150px;

  &-code {
    transition: max-height 0.4s;

    &-copy {
      position: absolute !important;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
