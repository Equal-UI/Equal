<template>
  <header class="fixed top-0 z-50 h-14 w-full">
    <div
      class="
        flex
        h-14
        place-content-between
        items-center
        border-b
        bg-white/60
        py-2
        px-8
        backdrop-blur-sm
        transition-all
        duration-200
        dark:border-zinc-800 dark:bg-zinc-800/80
        xl:px-96
      "
    >
      <div class="flex flex-row">
        <it-button class="flex lg:hidden" icon="menu" @click="openSidebar" />
        <NuxtLink to="/">
          <img class="ml-4 w-7" src="/logo.svg" />
        </NuxtLink>
      </div>

      <div class="w-24">
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
                'fill-gray-600/40 stroke-gray-500':
                  toggleThemeValue !== 'light',
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
                'fill-indigo-600/30 stroke-indigo-600':
                  toggleThemeValue === 'dark',
                'fill-gray-600/40 stroke-gray-500': toggleThemeValue !== 'dark',
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
    </div>
  </header>
</template>

<script setup lang="ts">
import { Emitter } from 'mitt'
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
import { TEvents, TTheme } from '../types/Events'

const toggleThemeValue = ref<TTheme>('light')
const emitter = inject<Emitter<TEvents>>('emitter')
const scrollPosition = ref(window.scrollY)

watch(toggleThemeValue, (value) => {
  emitter?.emit('theme', value)
})

// const updateScrollValue = () => {
//   scrollPosition.value = window.scrollY
// }

const openSidebar = () => {
  emitter?.emit('sidebar', true)
}

emitter?.on('theme', (value) => {
  toggleThemeValue.value = value
})

// onMounted(() => {
//   window.addEventListener('scroll', updateScrollValue)
// })

// onUnmounted(() => {
//   window.removeEventListener('scroll', updateScrollValue)
// })

// const showBackground = computed(() => {
//   return scrollPosition.value >= 10
// })
</script>
