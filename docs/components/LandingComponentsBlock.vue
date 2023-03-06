<template>
  <div
    class="relative grid grid-flow-row-dense gap-2 sm:grid-cols-2 lg:grid-cols-3"
  >
    <div class="h-full min-h-[10rem]">
      <div
        class="flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          {{ $t('landing.button') }}
        </h4>
        <div class="flex h-full items-center justify-center">
          <it-button>{{ $t('landing.button_text') }}</it-button>
        </div>
      </div>
    </div>
    <div class="h-full min-h-[10rem] sm:row-span-2">
      <div
        class="relative flex h-full flex-col rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800"
      >
        <h4 class="text-xl font-bold tracking-tight dark:text-neutral-50">
          {{ $t('landing.colorpicker') }}
        </h4>
        <p
          class="mt-2 text-sm font-normal leading-6 tracking-normal dark:text-neutral-300"
        >
          {{ $t('landing.colorpicker_text') }}
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
          {{ $t('landing.slider') }}
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
          {{ $t('landing.textarea.header') }}
        </h4>
        <div class="mt-4 flex h-full items-center justify-center">
          <it-textarea
            class="h-full w-full"
            :label-top="$t('landing.textarea.label')"
            :placeholder="$t('landing.textarea.placeholder')"
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
          {{ $t('landing.input.header') }}
        </h4>
        <div class="flex h-full items-center justify-center">
          <it-input
            v-model="inputValue"
            :label-top="$t('landing.input.label')"
            :placeholder="$t('landing.input.placeholder')"
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
            {{ $t('landing.checkboxes.header') }}
          </h4>
          <p
            class="mt-2 text-sm font-normal leading-6 tracking-normal dark:text-neutral-300"
          >
            {{ $t('landing.checkboxes.text') }}
          </p>
        </div>
        <div class="flex flex-1 flex-col justify-between">
          <it-checkbox
            v-for="(checkbox, i) in checkboxValues"
            :key="i"
            v-model="checkbox.done"
            :variant="checkbox.variant"
            :label="checkbox.label"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // use as global scope

const sliderValue = ref(42)
const colorpickerValue = ref('#4c0ced')
const inputValue = ref('')
const textareaValue = ref('')
const checkboxValues = reactive([
  {
    label: t('landing.checkboxes.checkbox_label_1'),
    done: true,
    variant: 'primary',
  },
  {
    label: t('landing.checkboxes.checkbox_label_2'),
    done: false,
    variant: 'primary',
  },
  {
    label: t('landing.checkboxes.checkbox_label_3'),
    done: false,
    variant: 'primary',
  },
  {
    label: t('landing.checkboxes.checkbox_label_4'),
    done: false,
    variant: 'warning',
  },
  {
    label: t('landing.checkboxes.checkbox_label_5'),
    done: false,
    variant: 'danger',
  },
])
</script>
