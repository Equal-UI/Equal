<template>
  <div class="min-h-screen">
    <span v-if="isDev" class="fixed bottom-2 right-2 z-50 dark:text-white"
      >fps: {{ fps }}</span
    >
    <div class="dark:bg-neutral-800">
      <ItHeader />
      <Sidebar />
      <div
        class="flex h-full min-h-screen flex-1 flex-col bg-white pl-0 dark:bg-neutral-800 dark:text-white lg:pl-60 xl:px-60"
      >
        <div class="px-4 py-24 md:px-14">
          <NuxtPage />
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
