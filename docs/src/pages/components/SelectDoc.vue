<template>
  <div>
    <h1>Select</h1>

    <Demobox>
      <div>
        <it-select
          v-model="selectValue"
          :placeholder="selectPlaceholder"
          :disabled="selectDisabled"
          :placement="selectPlacement"
          :label-top="selectLabel"
          :divided="selectDivided"
          :options="['One', 'Two', 'Three']"
        />
      </div>
      <template #props>
        <it-input v-model="selectLabel" label-top="Select label" />
        <it-input v-model="selectPlaceholder" label-top="Select placeholder" />
        <it-select
          v-model="selectPlacement"
          placeholder="Placement"
          label-top="Placement"
          :options="placementOptions"
        />
        <it-checkbox v-model="selectDivided" label="Divided" />
        <it-checkbox v-model="selectDisabled" label="Disabled" />
      </template>
    </Demobox>

    <Box :code="exampleCode" title="Example">
      <div class="mb-20">
        <it-select v-model="exampleValue" :options="exampleOptions" />

        <it-select
          v-model="exampleValue"
          class="ml-3"
          index="city"
          :options="exampleIndexOptions"
        />
      </div>
    </Box>

    <props-table tag-name="it-select" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ALLOWED_POSITION } from '../../../../src/components/select/constants'

export default defineComponent({
  data: () => ({
    selectValue: '',
    selectLabel: 'Select me',
    selectPlaceholder: 'Select me',
    selectDisabled: false,
    selectDivided: false,
    exampleOptions: ['New York', 'Paris', 'Moscow'],
    selectPlacement: null,
    placementOptions: ALLOWED_POSITION,
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
        values: ALLOWED_POSITION,
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
