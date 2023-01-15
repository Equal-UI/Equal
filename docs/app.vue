<template>
  <div class="min-h-screen">
    <span v-if="isDev" class="fixed bottom-2 right-2 z-50 dark:text-white">
      fps: {{ fps }}
    </span>
    <div class="flex dark:bg-neutral-900">
      <ItHeader />
      <Sidebar />
      <div
        class="flex h-full min-h-screen max-w-full flex-1 flex-row overflow-hidden bg-white pl-0 dark:bg-neutral-900 dark:text-white lg:ml-60 xl:ml-60"
      >
        <div class="flex flex-1 flex-col overflow-hidden px-4 py-24 md:px-14">
          <NuxtPage />
        </div>
        <div class="hidden h-16 w-64 px-4 lg:flex"></div>
        <div class="top-18 fixed right-6 mt-16 hidden h-16 w-64 px-4 lg:flex">
          <SponsorsBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Emitter } from 'mitt'
import { inject, onMounted, ref } from 'vue'
import { TEvents } from './types/Events'
import { useFps } from '@vueuse/core'
import SponsorsBar from './components/SponsorsBar'
const isDev = process.env.NODE_ENV === 'development'

const fps = isDev ? useFps() : 0

const dark = ref(false)
const emitter = inject<Emitter<TEvents>>('emitter')
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const themeListener = (e: MediaQueryListEvent) => {
  const darkModeOn = e.matches
  dark.value = darkModeOn
}
darkModeMediaQuery.addListener(themeListener)
emitter!.on('theme', (theme) => {
  if (['dark', 'light'].includes(theme)) {
    darkModeMediaQuery.removeEventListener('change', themeListener)
    dark.value = theme === 'dark' ? true : false
  }
})

onMounted(() => {
  dark.value = darkModeMediaQuery.matches
  emitter?.emit('theme', dark.value ? 'dark' : 'light')
})

watch(dark, (newValue, oldValue) => {
  if (newValue === true && oldValue !== true) {
    document.body.classList.add('dark')
    return
  }
  document.body.classList.remove('dark')
})
</script>
