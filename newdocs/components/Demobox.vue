<template>
  <div class="flex flex-col rounded border bg-white dark:border-neutral-700">
    <div class="flex flex-col sm:flex-row">
      <div
        class="
          flex
          min-h-[200px]
          items-center
          justify-center
          rounded-tl-sm rounded-bl-sm
          dark:bg-neutral-800
          sm:flex-[4]
        "
        :class="{ dark: theme === 'dark' ? true : false }"
      >
        <div
          class="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
            rounded-tl-sm rounded-bl-sm
            dark:bg-zinc-800
          "
        >
          <div class="absolute top-5 right-5 hidden w-32 md:flex">
            <it-toggle v-model="theme" icons round :options="['light', 'dark']">
              <template #light>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full transition-all duration-100 ease-out"
                  :class="{
                    'fill-yellow-600/40 stroke-yellow-500': theme === 'light',
                    'fill-gray-600/40 stroke-gray-500': theme !== 'light',
                  }"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </template>
              <template #dark>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full transition-all duration-500 ease-out"
                  :class="{
                    'fill-indigo-600/30 stroke-indigo-600': theme === 'dark',
                    'fill-gray-600/40 stroke-gray-500': theme !== 'dark',
                  }"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </template>
            </it-toggle>
          </div>
          <slot></slot>
        </div>
      </div>
      <div
        class="
          flex flex-col
          space-y-3
          bg-slate-50
          px-4
          py-5
          dark:bg-zinc-900
          sm:flex-[2]
        "
      >
        <h2 class="text-lg font-semibold">Props</h2>
        <slot name="props"></slot>
      </div>
    </div>
    <div v-if="props.name" class="flex-col border-t bg-slate-50">
      <it-collapse>
        <it-collapse-item
          :fixedClasses="{
            root: '!rounded-none border-none',
            body: 'px-0 py-0',
          }"
          title="Customization"
        >
          <it-tabs>
            <it-tab title="fixedClasses" class="p-5">
              <div v-if="fields" class="space-y-3">
                <it-input
                  v-for="(value, key) of fields.fixedClasses"
                  :key="key"
                  :label-top="key"
                  v-model="fields.fixedClasses[key]"
                >
                </it-input>
              </div>
            </it-tab>
            <it-tab title="Classes" class="p-5">
              <div v-if="fields && fields.classes" class="space-y-3">
                <it-input
                  v-for="(value, key) of fields.classes"
                  :key="key"
                  :label-top="key"
                  v-model="fields.classes[key]"
                >
                </it-input>
              </div>
              <div v-else><p>There are no built-in classes</p></div>
            </it-tab>
            <it-tab title="Variants" class="p-5">
              <div v-if="fields && fields.variants" class="space-y-3">
                <it-collapse>
                  <it-collapse-item
                    :variants="{ $: { body: 'bg-white space-y-3' } }"
                    variant="$"
                    v-for="(variantValue, variantKey) of fields.variants"
                    :title="variantKey"
                  >
                    <it-input
                      v-for="(value, key) of variantValue"
                      :key="key"
                      :label-top="key"
                      v-model="fields.variants[variantKey][key]"
                    /> </it-collapse-item
                ></it-collapse>
              </div>
              <div v-else><p>There are no built-in variants</p></div>
            </it-tab>
          </it-tabs>
        </it-collapse-item>
      </it-collapse>
      <!-- <h2 class="text-lg font-semibold">Customization</h2> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Emitter } from 'mitt'
import { inject, ref } from 'vue'
import { TEvents, TTheme } from '../types/Events'

const props = defineProps<{
  name?: string
}>()

const emitter = inject<Emitter<TEvents>>('emitter')
const theme = ref<TTheme>('light')
emitter?.on('theme', (value) => {
  theme.value = value
})

const uiconfig = inject('uiconfig', {})

const fields = props.name ? uiconfig[props.name] : {}
</script>

<style lang="less"></style>
