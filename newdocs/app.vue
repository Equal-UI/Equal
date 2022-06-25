<template>
  <div :class="{ dark }" class="min-h-screen">
    <Sidebar />
    <div
      class="
        flex
        h-full
        flex-1 flex-col
        pl-0
        dark:bg-neutral-900 dark:text-white
        bg-white
        lg:pl-60
        min-h-screen
      "
    >
      <ItHeader />
      <div class="px-4 md:px-14 py-10">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Emitter } from 'mitt'
import { inject, onMounted, ref } from 'vue'
import { TEvents } from './types/Events'

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
</script>
