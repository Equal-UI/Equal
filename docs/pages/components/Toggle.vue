<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Toggle</h1>

    <Demobox name="it-toggle">
      <it-toggle
        v-model="toggleValue"
        class="mx-4 w-full"
        :round="toggleRound"
        :options="['Light', 'Dark', 'Hollow', 'Orange']"
      />

      <template #props>
        <it-checkbox variant="primary" v-model="toggleRound" label="Round" />
      </template>
    </Demobox>
    <Box :code="exampleCode" title="Types">
      <div class="w-full">
        <it-toggle
          v-model="toggleValue"
          class="mb-4"
          :options="['Light', 'Dark', 'Hollow', 'Orange']"
        />
        <it-toggle
          v-model="toggleValue"
          round
          :options="['Light', 'Dark', 'Hollow', 'Orange']"
        />
      </div>
    </Box>
    <Box :code="iconsCode" title="Icons">
      <div>
        <it-toggle
          v-model="toggleIconsValue"
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
                  toggleIconsValue === 'light',
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
                  toggleIconsValue === 'dark',
                'fill-gray-600/40': toggleIconsValue !== 'dark',
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
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    toggleValue: 'Light',
    toggleRound: false,
    toggleIconsValue: 'light',

    exampleCode: `<it-toggle
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>
<it-toggle
 ||| round |||
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>`,

    iconsCode: `<it-toggle
  v-model="toggleIconsValue"
  icons
  round
  ||| :options="['light', 'dark']" |||
>
  <template ||| #light |||>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full transition-all duration-100 ease-out"
      :class="{
        'fill-yellow-600/40 stroke-yellow-500':
          toggleIconsValue === 'light',
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
  <template ||| #dark |||>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full transition-all duration-500 ease-out"
      :class="{
        'fill-indigo-400/30 stroke-blue-800':
          toggleIconsValue === 'dark',
        'fill-gray-600/40': toggleIconsValue !== 'dark',
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
</it-toggle>`,

    dataSheet: [
      {
        property: 'options',
        type: ['Array'],
        default: '[]',
        values: [],
        description: 'Array of option strings or material icon names',
      },
      {
        property: 'round',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes toggle round',
      },
      {
        property: 'icons',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Use Material Icons as options',
      },
      {
        property: 'value (v-model)',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Value of the toggle',
      },
    ],
  }),
})
</script>
