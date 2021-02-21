<template>
  <div>
    <h1>Number Input</h1>

    <Demobox>
      <it-number-input
        v-model="inputValue"
        :label-top="inputTopLabel"
        :step="inputStep"
        :resize-on-write="resizeOnChange"
        :min="inputMin"
        :max="inputMax"
        :hide-controls="controlsDisabled"
        :disabled="inputDisabled"
      />

      <template #props>
        <it-input v-model="inputTopLabel" label-top="Top label" />
        <it-number-input v-model="inputMin" label-top="Min" />
        <it-number-input v-model="inputMax" label-top="Max" />
        <it-number-input v-model="inputStep" :min="0" label-top="Step" />
        <it-divider />
        <it-checkbox v-model="resizeOnChange" label="Resize on change" />
        <it-checkbox v-model="controlsDisabled" label="Hide controls" />
        <it-checkbox v-model="inputDisabled" label="Disabled" />
      </template>
    </Demobox>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    data: () => ({
      inputMin: 0,
      inputMax: 100,
      inputStep: 1,
      inputValue: 0,
      inputTopLabel: 'Your input',
      inputDisabled: false,
      controlsDisabled: false,
      resizeOnChange: false,

      dataSheet: [
        {
          property: 'min',
          type: ['Number'],
          default: -Infinity,
          values: [],
          description: 'Minimal value',
        },
        {
          property: 'max',
          type: ['Number'],
          default: Infinity,
          values: [],
          description: 'Maximal value',
        },
        {
          property: 'step',
          type: ['Number'],
          default: '1',
          values: [],
          description: 'Step value',
        },
        {
          property: 'label-top',
          type: ['String'],
          default: '-',
          values: [],
          description: 'Top label',
        },
        {
          property: 'value (v-model)',
          type: ['Number'],
          default: 1,
          values: [],
          description: 'Number input value',
        },
        {
          property: 'resize-on-write',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Resizes on input',
        },
        {
          property: 'hide-controls',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Hides control +/- buttons',
        },
        {
          property: 'disabled',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Disabled number input',
        },
      ],
    }),
  })
</script>
