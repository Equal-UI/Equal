<template>
  <div
    :class="{ dark: theme === 'dark' ? true : false }"
    class="
      it-demobox
      relative
      flex
      rounded
      border
      bg-white
      dark:border-neutral-700
    "
  >
    <div
      class="
        it-demobox-scene
        relative
        flex flex-wrap
        items-center
        justify-center
        rounded-tl-sm rounded-bl-sm
        dark:bg-neutral-800
      "
    >
      <div class="absolute top-5 right-5">
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
    <div
      class="
        it-demobox-props
        flex flex-col
        rounded-tr-sm rounded-br-sm
        bg-slate-50
        px-4
        py-5
        dark:bg-neutral-900
      "
    >
      <h3>Props</h3>
      <slot name="props"></slot>
    </div>
  </div>
</template>

<script lang="ts">
// border-top: 1px inset hsl(0deg 0% 76% / 95%);
//     border-right: 1px solid rgb(76 76 76);
//     border-bottom: 1px solid rgb(54 54 54);
//     border-left: 1px solid rgb(76 76 76);

import { Emitter } from 'mitt'
import { defineComponent, inject, ref } from 'vue'
import { TEvents, TTheme } from '../types/Events'

export default defineComponent({
  name: 'demobox',
  setup() {
    const emitter = inject<Emitter<TEvents>>('emitter')
    const theme = ref<TTheme>('light')
    emitter?.on('theme', (value) => {
      theme.value = value
    })
    return { theme }
  },
})
</script>

<style lang="less">
.it-demobox {
  min-height: 200px;

  &-scene {
    flex: 5;
  }

  &-props {
    flex: 2;
  }

  &-props > *:not(.it-divider) {
    @apply mb-3;
  }
}

.it-demobox + .table-box {
  margin-top: 30px;
}

@media only screen and (max-width: 600px) {
  .it-demobox {
    @apply flex-col;

    &-scene {
      @apply py-5;
      @apply px-0;
    }

    &-props {
      border-left: none;
    }
  }
}
</style>
