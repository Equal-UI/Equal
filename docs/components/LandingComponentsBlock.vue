<template>
  <div
    class="relative grid grid-flow-row-dense gap-2 sm:grid-cols-2 lg:grid-cols-3"
  >
    <div class="h-full min-h-[10rem]">
      <div
        class="flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          Button
        </h4>
        <div class="flex h-full items-center justify-center">
          <it-button>Start Building</it-button>
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem] sm:row-span-2">
      <div
        class="relative flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          Colorpicker
        </h4>
        <p
          class="mt-2 text-sm font-normal leading-6 tracking-normal dark:text-neutral-300"
        >
          Colorpicker with colord library support
        </p>
        <div class="flex h-full items-center justify-center">
          <it-colorpicker :value="colorpickerValue" />
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem]">
      <div
        class="flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          Slider
        </h4>
        <div class="flex h-full items-center justify-center">
          <it-slider :min="0" :max="300" v-model="sliderValue" />
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem] sm:row-span-2">
      <div
        class="group flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          Textarea
        </h4>
        <div class="mt-4 flex h-full items-center justify-center">
          <it-textarea
            class="h-full w-full"
            label-top="Biography"
            placeholder="This story begins..."
            v-model="textareaValue"
          />
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem] sm:row-span-2 lg:row-span-1">
      <div
        class="group flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          Input
        </h4>
        <div class="flex h-full items-center justify-center">
          <it-input
            v-model="inputValue"
            label-top="Name"
            placeholder="Write what you want"
          />
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem] sm:col-span-2">
      <div
        class="group flex h-full flex-col gap-6 rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800 sm:flex-row"
      >
        <div class="flex-1">
          <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
            Checkboxes
          </h4>
          <p
            class="mt-2 text-sm font-normal leading-6 tracking-normal dark:text-neutral-300"
          >
            Checkboxes with customizations
          </p>
        </div>
        <div class="flex flex-1 flex-col justify-between">
          <it-checkbox
            v-for="(checkbox, i) in checkboxValues"
            :key="i"
            v-model="checkbox.done"
            variant="primary"
            :label="checkbox.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const sliderValue = ref(42)
const colorpickerValue = ref('#4c0ced')
const inputValue = ref('')
const textareaValue = ref('')
const checkboxValues = reactive([
  { label: 'Find an idea', done: true },
  { label: 'Start building', done: false },
  { label: 'Make UI', done: false },
  { label: 'Write backend endpoints', done: false },
  { label: 'Frontend logic', done: false },
])
</script>
