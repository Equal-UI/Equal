<template>
  <div
    class="it-box my-10 flex w-full flex-col rounded border bg-white dark:border-zinc-600 dark:bg-zinc-800"
    :class="{ 'overflow-hidden': overflowHidden }"
  >
    <h2 class="py-4 px-6 text-xl font-semibold leading-none">{{ title }}</h2>
    <slot name="description"></slot>
    <div
      class="box-border flex w-full flex-wrap items-center justify-center gap-4 bg-inherit py-10 px-6 leading-none"
    >
      <slot></slot>
    </div>

    <div
      class="it-box-code relative w-full overflow-auto"
      v-if="code"
      :style="{
        'max-height': expandHeight,
      }"
    >
      <transition
        v-bind="{
          'enter-active-class': 'duration-75',
          'enter-to-class': 'opacity-100',
          'enter-from-class': 'opacity-0',
          'leave-active-class': 'duration-75',
          'leave-to-class': 'opacity-0',
          'leave-from-class': 'opacity-100',
        }"
      >
        <it-button
          :variants="{
            $: { root: '!absolute top-3 right-3 !px-2', text: '!text-white' },
          }"
          :variant="['text', '$']"
          v-show="!showExpand || showCopy"
          @click="clickCopy"
          v-tooltip="tooltipValue"
        >
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </template>
        </it-button>
      </transition>
      <prism
        class="border-t border-t-white !pr-14 dark:border-t-gray-600"
        language="html"
        :code="code"
      ></prism>
    </div>
    <it-divider v-if="showExpand" />
    <it-button
      style="border: none; border-radius: 0px"
      v-if="showExpand"
      type="neutral"
      @click="toggleExpand"
    >
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </template>
      {{ expanded ? 'Hide code' : 'Show code' }}
    </it-button>
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
const showCopy = ref(false)

const tooltipValue = { position: 'left', content: copyText }

const showExpand = computed(() => (props.code || '').split('\n').length > 3)

function toggleExpand() {
  showCopy.value = expandHeight.value === '0px' ? true : false
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
