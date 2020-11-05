<template>
  <div>
    <h1>Number Input</h1>

    <Demobox>
      <it-number-input
        v-model="inputValue"
        :labelTop="inputTopLabel"
        :step="inputStep"
        :resize-on-write="resizeOnChange"
        :min="inputMin"
        :max="inputMax"
        :hide-controls="controlsDisabled"
        :disabled="inputDisabled"
      />

      <template #props>
        <it-input v-model="inputTopLabel" labelTop="Top label" />
        <it-number-input v-model="inputMin" labelTop="Min" />
        <it-number-input v-model="inputMax" labelTop="Max" />
        <it-number-input :min="0" v-model="inputStep" labelTop="Step" />
        <it-divider />
        <it-checkbox label="Resize on change" v-model="resizeOnChange" />
        <it-checkbox label="Hide controls" v-model="controlsDisabled" />
        <it-checkbox label="Disabled" v-model="inputDisabled" />
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
