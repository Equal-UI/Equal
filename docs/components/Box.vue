<template>
  <div
    class="it-box mb-10 flex w-full flex-col rounded border bg-white dark:border-zinc-600 dark:bg-zinc-800"
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
      class="it-box-code relative w-full"
      v-if="(template || code) && expanded"
    >
      <it-tabs>
        <it-tab :title="$t('examplebox.template')" class="relative">
          <it-button
            :variants="{
              $: {
                root: '!absolute top-3 right-3 !px-2',
                text: '!text-white',
              },
            }"
            :variant="['text', '$']"
            v-show="!showExpand || showCopy"
            @click="copyTemplate"
            v-tooltip="tooltipValueTemplate"
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

          <prism
            class="border-t border-t-white !pr-14 dark:border-t-gray-600"
            language="html"
            :code="template"
          ></prism>
        </it-tab>
        <it-tab v-if="code" :title="$t('examplebox.code')" class="relative">
          <it-button
            :variants="{
              $: {
                root: '!absolute top-3 right-3 !px-2',
                text: '!text-white',
              },
            }"
            :variant="['text', '$']"
            v-show="!showExpand || showCopy"
            @click="copyCode"
            v-tooltip="tooltipValueCode"
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
          <prism
            class="border-t border-t-white !pr-14 dark:border-t-gray-600"
            language="js"
            :code="code"
          ></prism>
        </it-tab>
      </it-tabs>
    </div>
    <it-divider v-if="showExpand" />
    <it-button
      style="border: none; border-radius: 0px"
      v-if="showExpand"
      variant="default"
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
      {{ expanded ? $t('examplebox.hide-code') : $t('examplebox.show-code') }}
    </it-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  template?: string
  code?: string
  title?: string
  overflowHidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  overflowHidden: true,
})

const copyTextTemplate = ref('Copy to clipboard')
const copyTextCode = ref('Copy to clipboard')
const expanded = ref(false)
const showCopy = ref(false)

const tooltipValueTemplate = { position: 'left', content: copyTextTemplate }
const tooltipValueCode = { position: 'left', content: copyTextCode }

const showExpand = computed(
  () =>
    (props.template || '').split('\n').length > 3 ||
    (props.code || '').split('\n').length > 3,
)

function toggleExpand() {
  showCopy.value = !showCopy.value
  expanded.value = !expanded.value
}

async function copyTemplate() {
  copyTextTemplate.value = 'Copied!'
  await navigator.clipboard.writeText(props.template!)
}
async function copyCode() {
  copyTextCode.value = 'Copied!'
  await navigator.clipboard.writeText(props.code!)
}

if (!showExpand.value) {
  expanded.value = true
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
