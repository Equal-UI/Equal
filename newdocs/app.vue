<template>
  <div :class="{ dark }" class="min-h-screen">
    <div class="dark:bg-zinc-900">
      <ItHeader />
      <Sidebar />
      <div
        class="
          flex
          h-full
          min-h-screen
          flex-1 flex-col
          bg-white
          pl-0
          dark:bg-zinc-900 dark:text-white
          lg:pl-60
          xl:mx-96
        "
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
