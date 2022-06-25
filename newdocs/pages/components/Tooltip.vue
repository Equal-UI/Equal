<template>
  <div>
    <h1>Tooltip</h1>
    <p class="mb-4">
      It-tooltip is a HOC, use it to show tooltip over the slot
    </p>
    <Demobox>
      <it-tooltip :content="tooltipContent" :placement="tooltipPlacement">
        <it-button>Hover me</it-button>
      </it-tooltip>

      <template #props>
        <it-select
          v-model="tooltipPlacement"
          placeholder="Select position"
          label-top="Tag position"
          :options="tooltipPlacements"
        ></it-select>
        <it-input v-model="tooltipContent" label-top="Tooltip text" />
      </template>
    </Demobox>

    <Box :code="directiveCode" title="Directive">
      <template #description>
        <p class="mx-6">You can use directive for tooltips</p>
      </template>
      <div class="flex flex-col items-center space-y-2">
        <it-button v-tooltip="{ content: 'Top tooltip' }">Top</it-button>
        <div class="flex items-center space-x-8">
          <it-button v-tooltip="{ position: 'left', content: 'Left tooltip' }">
            Left
          </it-button>
          <it-button
            v-tooltip="{ position: 'right', content: 'Right tooltip' }"
          >
            Right
          </it-button>
        </div>
        <it-button
          v-tooltip="{ position: 'bottom', content: 'Bottom tooltip' }"
        >
          Bottom
        </it-button>
      </div>
    </Box>

    <Box :code="positionCode" title="Position">
      <template #description>
        <p class="mx-6">
          There are 12 positions available for tooltip, most used are shown in
          the example
        </p>
      </template>
      <div class="flex flex-col items-center space-y-2">
        <it-tooltip content="Top" placement="top">
          <it-button>Top</it-button>
        </it-tooltip>
        <div class="flex items-center space-x-8">
          <it-tooltip content="Left" placement="left">
            <it-button>Left</it-button>
          </it-tooltip>
          <it-tooltip content="Right" placement="right">
            <it-button>Right</it-button>
          </it-tooltip>
        </div>
        <it-tooltip content="Bottom" placement="bottom">
          <it-button>Bottom</it-button>
        </it-tooltip>
      </div>
    </Box>
    <Box :code="slotCode" title="Content Slot">
      <div class="flex flex-col items-center">
        <it-tooltip placement="top">
          <template #content>
            <span>
              <it-tag type="primary">Wow</it-tag>&nbsp; I came from slot
            </span>
          </template>
          <it-button>Slot content</it-button>
        </it-tooltip>
      </div>
    </Box>
    <Box :code="autopositionCode" title="Autoposition">
      <div class="flex flex-col items-center">
        <it-tooltip placement="bottom">
          <template #content>
            <span>Autopos</span>
          </template>
          <it-button>Autoposition</it-button>
        </it-tooltip>
      </div>
    </Box>
    <props-table :slot-sheet="slotSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    tooltipContent: 'Hello there',
    // tooltipPermanent: boolean = false
    tooltipPlacement: 'top',
    tooltipPlacements: ['top', 'right', 'bottom', 'left'],

    directiveCode: `<it-button ||| v-tooltip="{ content: 'Top tooltip' }" |||>Top</it-button>
<it-button ||| v-tooltip="{ position: 'left', content: 'Left tooltip' }" |||>
  Left
</it-button>
<it-button
 ||| v-tooltip="{ position: 'right', content: 'Right tooltip' }" |||
>
  Right
</it-button>
<it-button
 ||| v-tooltip="{ position: 'bottom', content: 'Bottom tooltip' }" |||
>
  Bottom
</it-button>`,

    positionCode: `<it-tooltip content="Top" ||| placement="top" |||>
  <it-button>Top</it-button>
</it-tooltip>
<it-tooltip content="Right" ||| placement="right" |||>
  <it-button>Right</it-button>
</it-tooltip>
<it-tooltip content="Left" ||| placement="left" |||>
  <it-button>Left</it-button>
</it-tooltip>
<it-tooltip content="Bottom" ||| placement="bottom" |||>
  <it-button>Bottom</it-button>
</it-tooltip>`,

    autopositionCode: `<it-tooltip placement="bottom">
    <template #content>
      <span>Autopos</span>
    </template>
    <it-button>Autoposition</it-button>
</it-tooltip>`,

    slotCode: `<it-tooltip placement="top">
  <span slot="content"><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span>
  <it-button>Slot content</it-button>
</it-tooltip>`,

    dataSheet: [
      {
        property: 'content',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Content of the tooltip',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'top',
        values: [
          'top',
          'bottom',
          'right',
          'left',
          'bottom-left',
          'bottom-right',
          'left-top',
          'left-bottom',
          'right-top',
          'right-bottom',
          'top-left',
          'top-right',
        ],
        description: 'Position of the popover',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tooltip disabled',
      },
      {
        property: 'hoverable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tooltip hoverable',
      },
      {
        property: 'autoposition',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description:
          "Tooltip will choose position to always fit in screen taking into account the chosen position in 'placement' property",
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Hoverable element for tooltip',
      },
      {
        name: 'content',
        description: 'Content of the tooltip',
      },
    ],
  }),
})
</script>
