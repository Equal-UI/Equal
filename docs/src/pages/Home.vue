<template>
  <div :class="{ dark }" class="min-h-full">
    <Sidebar />
    <div
      class="
        flex
        h-full
        flex-1 flex-col
        pl-0
        dark:bg-neutral-800 dark:text-white
        lg:pl-60
      "
    >
      <ItHeader />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Emitter } from 'mitt'
import { defineComponent, inject, onMounted, ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import ItHeader from '../components/ItHeader.vue'
import { TEvents } from '../types/Events'

export default defineComponent({
  name: 'home',
  components: { Sidebar, ItHeader },
  setup() {
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

    return { dark }
  },
})
</script>
