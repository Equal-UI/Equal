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
        >
        </it-select>
        <it-input v-model="tooltipContent" label-top="Tooltip text" />
      </template>
    </Demobox>
    <Box :code="positionCode" title="Position">
      <div class="flex flex-col items-center">
        <it-button-group vertical>
          <it-tooltip content="Top" placement="top">
            <it-button>Top</it-button>
          </it-tooltip>
          <it-tooltip content="Right" placement="right">
            <it-button>Right</it-button>
          </it-tooltip>
          <it-tooltip content="Left" placement="left">
            <it-button>Left</it-button>
          </it-tooltip>
          <it-tooltip content="Bottom" placement="bottom">
            <it-button>Bottom</it-button>
          </it-tooltip>
        </it-button-group>
      </div>
    </Box>
    <Box :code="slotCode" title="Content Slot">
      <div class="flex flex-col items-center">
        <it-tooltip placement="top">
          <template #content>
            <span
              ><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span
            >
          </template>
          <it-button>Slot content</it-button>
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

    positionCode: `<it-tooltip content="Top" placement="top">
  <it-button>Top</it-button>
</it-tooltip>
<it-tooltip content="Right" placement="right">
  <it-button>Right</it-button>
</it-tooltip>
<it-tooltip content="Left" placement="left">
  <it-button>Left</it-button>
</it-tooltip>
<it-tooltip content="Bottom" placement="bottom">
  <it-button>Bottom</it-button>
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
        values: ['top', 'bottom', 'right', 'left'],
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
