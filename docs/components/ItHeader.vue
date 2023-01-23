<template>
  <header class="fixed top-0 z-50 h-14 w-full">
    <div
      class="flex h-14 place-content-between items-center border-b bg-white/60 py-2 px-4 backdrop-blur-sm transition-all duration-200 dark:border-zinc-800 dark:bg-zinc-900/80 md:px-14 2xl:px-96"
    >
      <div class="flex flex-row">
        <it-button id="menuBtn" class="flex lg:hidden" @click="openSidebar">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </template>
        </it-button>
        <div class="relative ml-6 flex flex-row sm:ml-4">
          <NuxtLink to="/">
            <img class="w-7" src="/logo.svg" />
            <div class="fancybox"></div>
          </NuxtLink>
        </div>
      </div>

      <div class="flex flex-row items-center space-x-3">
        <div>
          <it-button
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/k0mmsussertod"
            variant="text"
          >
            <template #icon>
              <svg
                height="20"
                width="20"
                class="fill-slate-400 dark:fill-white"
                viewBox="328 355 335 276"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                  M 630, 425
                  A 195, 195 0 0 1 331, 600
                  A 142, 142 0 0 0 428, 570
                  A  70,  70 0 0 1 370, 523
                  A  70,  70 0 0 0 401, 521
                  A  70,  70 0 0 1 344, 455
                  A  70,  70 0 0 0 372, 460
                  A  70,  70 0 0 1 354, 370
                  A 195, 195 0 0 0 495, 442
                  A  67,  67 0 0 1 611, 380
                  A 117, 117 0 0 0 654, 363
                  A  65,  65 0 0 1 623, 401
                  A 117, 117 0 0 0 662, 390
                  A  65,  65 0 0 1 630, 425
                  Z"
                />
              </svg>
            </template>
          </it-button>
        </div>
        <div>
          <it-button
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Equal-UI/Equal"
            variant="text"
          >
            <template #icon>
              <svg
                class="fill-slate-400 dark:fill-white"
                height="20"
                version="1.1"
                viewBox="0 0 16 16"
                width="20"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </template>
          </it-button>
        </div>
        <div class="flex w-24 flex-row items-center">
          <it-toggle
            v-model="toggleThemeValue"
            icons
            round
            :options="['light', 'dark']"
          >
            <template #light>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-full transition-all duration-100 ease-out"
                :class="{
                  'fill-yellow-600/40 stroke-yellow-500':
                    toggleThemeValue === 'light',
                }"
                stroke="currentColor"
                width="1rem"
                height="1rem"
                fill="none"
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
                  'fill-indigo-400/30 stroke-blue-800':
                    toggleThemeValue === 'dark',
                  'fill-gray-600/40': toggleThemeValue !== 'dark',
                }"
                stroke="currentColor"
                width="1rem"
                height="1rem"
                fill="none"
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
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Emitter } from 'mitt'
import { inject, ref, watch } from 'vue'
import { TEvents, TTheme } from '../types/Events'

const toggleThemeValue = ref<TTheme>('light')
const emitter = inject<Emitter<TEvents>>('emitter')

watch(toggleThemeValue, (value) => {
  emitter?.emit('theme', value)
})

const openSidebar = () => {
  emitter?.emit('sidebar', true)
}

emitter?.on('theme', (value) => {
  toggleThemeValue.value = value
})
</script>
