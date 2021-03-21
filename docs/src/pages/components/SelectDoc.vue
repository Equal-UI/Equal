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
          :options="firstSelectOptions"
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

    <Box :code="codeSectionExamples" :overflow-hidden="false" title="Examples">
      <Row align="center" justify="center" class="flex">
        <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
          <it-select
            label-top="List of string"
            v-model="exampleStringValue"
            :options="exampleStringOptions"
          />
          <ItCode class="mt-2">{{ exampleStringValue }}</ItCode>
        </Col>

        <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
          <it-select
            label-top="List of number"
            v-model="exampleNumberValue"
            :options="exampleNumberOptions"
          />
          <ItCode class="mt-2">{{ exampleNumberValue }}</ItCode>
        </Col>

        <div :style="{ width: '100%' }" />

        <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
          <it-select
            label-top="Track by 'value'(default)"
            v-model="exampleTrackByValue1"
            :options="exampleTrackByOptions1"
          />
          <ItCode class="mt-2">{{ exampleTrackByValue1 }}</ItCode>
        </Col>

        <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
          <it-select
            label-top="Track by 'some'"
            v-model="exampleTrackByValue2"
            track-by="some"
            :options="exampleTrackByOptions2"
          />
          <ItCode class="mt-2">{{ exampleTrackByValue2 }}</ItCode>
        </Col>

        <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
          <it-select
            label-top="Track by 'key'"
            v-model="exampleTrackByValue3"
            track-by="key"
            :options="exampleTrackByOptions3"
          />
          <ItCode class="mt-2">{{ exampleTrackByValue3 }}</ItCode>
        </Col>
      </Row>
    </Box>

    <props-table tag-name="it-select" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ALLOWED_POSITION } from '../../../../src/components/select/constants'

const exampleStringOptions = new Array(6)
  .fill(0)
  .map((_, index) => `Test string ${index + 1}`)

const exampleNumberOptions = new Array(8).fill(0).map((_, index) => index + 1)

const exampleTrackByOptions1 = [
  { name: 'New York', value: 'nwrk' },
  { name: 'Paris', value: 'prs' },
  { name: 'Moscow', value: 'mscw' },
]

const exampleTrackByOptions2 = new Array(4).fill(0).map((_, index) => ({
  name: `Some field ${index + 1}`,
  some: `some-field-${index + 1}`,
}))

const exampleTrackByOptions3 = new Array(7)
  .fill(0)
  .map((_, index) => ({ name: `Key ${index + 1}`, key: `key-${index + 1}` }))

export default defineComponent({
  data: () => ({
    selectValue: '',
    selectLabel: 'Select me',
    selectPlaceholder: 'Select me',
    selectDisabled: false,
    selectDivided: false,
    selectPlacement: null,
    placementOptions: ALLOWED_POSITION,
    firstSelectOptions: [
      'Lorem ipsum dolor sit amet consectetur',
      'Dolor',
      'Lorem ipsum',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor iste nam quidem',
    ],

    exampleStringValue: exampleStringOptions[0],
    exampleStringOptions: exampleStringOptions,

    exampleNumberValue: exampleNumberOptions[0],
    exampleNumberOptions: exampleNumberOptions,

    exampleTrackByValue1: exampleTrackByOptions1[0],
    exampleTrackByOptions1: exampleTrackByOptions1,

    exampleTrackByValue2: exampleTrackByOptions2[0],
    exampleTrackByOptions2: exampleTrackByOptions2,

    exampleTrackByValue3: exampleTrackByOptions3[0],
    exampleTrackByOptions3: exampleTrackByOptions3,

    codeSectionExamples: `
      <template>
        <it-select
          label-top="List of string"
          v-model="exampleStringValue"
          :options="exampleStringOptions"
        />

        <it-select
          label-top="List of number"
          v-model="exampleNumberValue"
          :options="exampleNumberOptions"
        />

        <it-select
          label-top="Track by 'value'(default)"
          v-model="exampleTrackByValue1"
          :options="exampleTrackByOptions1"
        />

        <it-select
          label-top="Track by 'some'"
          v-model="exampleTrackByValue2"
          track-by="some"
          :options="exampleTrackByOptions2"
        />

        <it-select
          label-top="Track by 'key'"
          v-model="exampleTrackByValue3"
          track-by="key"
          :options="exampleTrackByOptions3"
        />
      </template>

      export default {
        data: () => ({
          exampleStringValue: "${exampleStringOptions[0]}",
          exampleStringOptions: [${exampleStringOptions.map((a) => `"${a}"`)}],

          exampleNumberValue: ${exampleNumberOptions[0]},
          exampleNumberOptions: [${exampleNumberOptions}],

          exampleTrackByValue1: exampleTrackByOptions1[0],
          exampleTrackByOptions1: [${exampleTrackByOptions1.map((a) =>
            JSON.stringify(a),
          )}],

          exampleTrackByValue2: ${JSON.stringify(exampleTrackByOptions2[0])},
          exampleTrackByOptions2: [${exampleTrackByOptions2.map((a) =>
            JSON.stringify(a),
          )}],

          exampleTrackByValue3: ${JSON.stringify(exampleTrackByOptions3[0])},
          exampleTrackByOptions3: [${exampleTrackByOptions3.map((a) =>
            JSON.stringify(a),
          )}],
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
        property: 'track-by',
        type: ['String'],
        default: 'value',
        values: [],
        description: 'Field for track',
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
