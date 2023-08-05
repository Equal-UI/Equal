<template>
  <div class="min-h-screen">
    <span v-if="isDev" class="fixed bottom-2 right-2 z-50 dark:text-white">
      fps: {{ fps }}
    </span>
    <div class="flex dark:bg-neutral-900">
      <ItHeader />
      <Sidebar />
      <div
        class="flex h-full min-h-screen max-w-full flex-1 flex-row overflow-hidden bg-white pl-0 dark:bg-zinc-900 dark:text-white lg:ml-60 xl:ml-60"
      >
        <!-- <img
          class="fixed -top-1/2 left-0 w-full opacity-0 dark:opacity-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgBvVFLbhNBEH1V3T2emdg4AfxJFO9AoMkKxAFYI3Ens+YEnIMDsEKsWIDIbIgQigSWg+wIz3i+1d00YkMukFq9V6pXVa+K3rx8mw6UOo5EZd65pyB+WCTR8Nf9dH85H3/7OR1/Xs2HX7Ykq++fDkuNODYd9Ahwp6qRx8rSI80YcYOGOgzZ+XogcoWJuc4yVHprYo6I4oh5zK27y8RHda9HVZt0Ukd7bnnetxhzqaJqAta0SFyxIdhCgZRRYrXuxKimZG2v44SMSZXSJhoiDAX0x9msm63LPUlcoQ+1jfbOKvY9MwnMoGd15EPnBO59D6fx4dTWd1Y77v0Vi157RwsvKqjg2VEdwTcHrm8aBEcvguDsDHJ+botY4gtj6R6YOjaYeGIVDrEN7Oug4PVBLu3yNRwBnrIsN8+OF6Owwwm1/kQRDsWSUoYqR3bVS3L5YJNuljl1GiCf5+im03e/n1w8r3aL3Y/wk8hJzZ2NJZn6tlynNfJXEjyDcCP8X07L/zIB+3+IPG4l/gCInrnOZomQAAAAAABJRU5ErkJggg=="
        /> -->
        <div
          class="z-10 flex flex-1 flex-col overflow-hidden px-4 py-24 md:px-14"
        >
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
import { inject, onMounted, watch, ref } from 'vue'
import { TEvents } from './types/Events'
import { useFps } from '@vueuse/core'
import SponsorsBar from './components/SponsorsBar'
import { useNotification } from '@/'
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
