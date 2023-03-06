<template>
  <div class="my-8 flex flex-col space-y-8">
    <div class="relative flex flex-col items-center space-y-8">
      <div class="relative z-0 -mx-4 flex w-24 flex-1 flex-col">
        <img class="w-full" src="/logo.svg" />
      </div>
      <h1
        class="name my-5 text-center text-7xl font-semibold text-slate-900 dark:text-white"
      >
        Equal UI
      </h1>
      <h4
        class="px-4 text-center text-lg font-medium text-slate-600 dark:text-slate-400 md:px-32"
      >
        {{ $t('landing.title') }}
      </h4>
    </div>
    <div class="flex justify-center space-x-6">
      <it-button
        routerLink
        to="/introduction"
        type="primary"
        size="big"
        variant="primary"
        pulse
      >
        {{ $t('landing.get_started') }}
      </it-button>

      <it-button
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Equal-UI/Equal"
        size="big"
        variant="text"
      >
        <template #icon>
          <svg
            class="mr-1 dark:fill-white"
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
        Github
      </it-button>
    </div>

    <div>
      <div class="my-4 flex justify-center">
        <h1 class="text-2xl font-bold">{{ $t('landing.components') }}</h1>
      </div>
      <LandingComponentsBlock />
    </div>

    <div>
      <div class="flex justify-center">
        <h1 class="mb-4 text-2xl font-bold">
          {{ $t('landing.themes.title') }}
        </h1>
      </div>

      <div
        class="flex flex-col gap-4 rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800 sm:flex-row"
      >
        <div class="flex-1">
          <p class="text-sm">{{ $t('landing.themes.text') }}</p>
        </div>
        <div class="flex-1">
          <div
            class="flex flex-col items-center justify-center space-y-4 rounded border p-8 dark:border-zinc-600 dark:bg-zinc-900"
          >
            <it-toggle
              round
              class="w-32"
              v-model="toggleThemeValue"
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
            <span
              class="mt-2 text-center text-xs font-medium dark:text-zinc-400"
            >
              {{ $t('landing.themes.toggle_desc') }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="mt-4 flex flex-col items-center justify-center">
        <h1 class="mb-2 text-2xl font-bold">
          {{ $t('landing.owntheme.title') }}
        </h1>
        <h2 class="mb-2 text-center text-sm">
          {{ $t('landing.owntheme.subtitle') }}
        </h2>
      </div>

      <div
        class="flex flex-col gap-4 overflow-hidden rounded-lg border bg-white p-4 transition-all dark:border-zinc-600 dark:bg-zinc-800 sm:flex-row"
      >
        <div class="flex flex-1 flex-col">
          <p class="text-sm">
            {{ $t('landing.owntheme.text') }}
          </p>
          <div class="flex flex-1 flex-col items-center justify-center gap-4">
            <it-tag filled class="mt-6" :variant="variantValue">
              {{ $t('landing.tag_text') }}
            </it-tag>
            <it-toggle
              class="mt-4 w-64"
              v-model="variantValue"
              :options="['default', 'primary', 'success']"
            />
          </div>
        </div>
        <div class="flex flex-1 overflow-x-auto">
          <prism
            language="js"
            class="h-fit max-w-full overflow-x-scroll rounded"
            :code="tagCode"
          ></prism>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Emitter } from 'mitt'
import { TEvents, TTheme } from '~~/types/Events'

const toggleThemeValue = ref<TTheme>('light')
const variantValue = ref('default')
const emitter = inject<Emitter<TEvents>>('emitter')

watch(toggleThemeValue, (value) => {
  emitter?.emit('theme', value)
})

emitter?.on('theme', (value) => {
  toggleThemeValue.value = value
})

const tagCode = `{
  'ItTag': {
    base: {
      root: 'text-xs flex text-white rounded px-1 py-1 gap-2 font-medium inline-flex items-center leading-none',
      filled: '',
      closeBtn: 'cursor-pointer h-3.5 w-3.5',
    },
    variants: {
      default: {
        root: 'bg-zinc-400 dark:bg-zinc-600',
        filled: 'bg-zinc-500/20 text-zinc-600 dark:text-zinc-200',
      },
      primary: {
        root: 'bg-blue-600',
        filled: '!bg-blue-500/20 text-blue-500',
      },
      success: {
        root: 'bg-green-500',
        filled: '!bg-green-500/20 text-green-500',
      }
    }
  }
}`
</script>

<style>
.name {
  font-family: 'Poppins';
}
</style>
