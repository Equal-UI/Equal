<template>
  <div>
    <h1>Select</h1>

    <Demobox>
      <div style="padding: 130px 0px">
        <it-select
          :placeholder="selectPlaceholder"
          :disabled="selectDisabled"
          :labelTop="selectLabel"
          :divided="selectDivided"
          v-model="selectValue"
          :options="['One', 'Two', 'Three']"
        >
        </it-select>
      </div>
      <template #props>
        <it-input v-model="selectLabel" labelTop="Select label" />
        <it-input v-model="selectPlaceholder" labelTop="Select placeholder" />
        <it-checkbox label="Divided" v-model="selectDivided" />
        <it-checkbox label="Disabled" v-model="selectDisabled" />
      </template>
    </Demobox>

    <Box :code="exampleCode" title="Example">
      <div style="margin-bottom: 90px">
        <it-select v-model="exampleValue" :options="exampleOptions" />

        <it-select
          style="margin-left: 12px"
          v-model="exampleValue"
          index="city"
          :options="exampleIndexOptions"
        />
      </div>
    </Box>

    <props-table tagName="it-select" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    selectValue: '',
    selectLabel: 'Select me',
    selectPlaceholder: 'Select me',
    selectDisabled: false,
    selectDivided: false,

    exampleOptions: ['New York', 'Paris', 'Moscow'],
    exampleIndexOptions: [
      { city: 'New York' },
      { city: 'Paris' },
      { city: 'Moscow' },
    ],

    exampleValue: 'Moscow',

    exampleCode: `
  <template>
    <it-select v-model="exampleValue" :options="exampleOptions" />
    
    <it-select v-model="exampleValue" index="city" :options="exampleIndexOptions" />
  </template>

  export default {
    data: () => ({
      exampleOptions: ['New York', 'Paris', 'Moscow'],
      exampleIndexOptions: [{city: 'New York'}, {city: 'Paris'}, {city: 'Moscow'}],

      exampleValue: 'Moscow',
    })
  }
  `,

    dataSheet: [
      {
        property: 'label-top',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Top label',
      },
      {
        property: 'options',
        type: ['Array', 'Object[]'],
        default: '-',
        values: [],
        description:
          'Array of options, or array of option object used with index prop',
      },
      {
        property: 'index',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Index of the object key',
      },
      {
        property: 'placeholder',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Select area placeholder',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'bottom',
        values: [
          'bottom',
          'bottom-left',
          'bottom-right',
          'left',
          'left-top',
          'left-bottom',
          'right',
          'right-top',
          'right-bottom',
          'top',
          'top-left',
          'top-right',
        ],
        description: 'Select list position',
      },
      {
        property: 'divided',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes select options divided by line',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes select disabled',
      },
    ],
  }),
})
</script>
