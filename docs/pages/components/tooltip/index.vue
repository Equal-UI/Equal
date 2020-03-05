<template>
  <div>
    <h1>Tooltip</h1>
    <p style="margin-bottom: 10px;">It-tooltip is a HOC, use it to show tooltip over the slot</p>
    <Demobox>
      <it-tooltip :content="tooltipContent" :placement="tooltipPlacement">
        <it-button>Hover me</it-button>
      </it-tooltip>

      <template slot="props">
        <it-select placeholder="Select position" labelTop="Tag position" v-model="tooltipPlacement">
          <it-select-option
            style="text-transform: capitalize;"
            :key="type"
            v-for="type in tooltipPlacements"
            :value="type"
          >{{type}}</it-select-option>
        </it-select>
        <it-input v-model="tooltipContent" labelTop="Tooltip text" />
      </template>
    </Demobox>
    <Box :code="positionCode" title="Position">
      <div style="display:flex; flex-direction:column; align-items: center">
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
      <div style="display:flex; flex-direction:column; align-items: center">

      <it-tooltip placement="top">
        <span slot="content"><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span>
        <it-button>Slot content</it-button>
      </it-tooltip>
      </div>
    </Box>
    <props-table :slot-sheet="slotSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class SliderPage extends Vue {
  tooltipContent: string = 'Hello there'
  // tooltipPermanent: boolean = false
  tooltipPlacement: string = 'top'
  tooltipPlacements: string[] = ['top', 'right', 'bottom', 'left']

  positionCode = 
`<it-tooltip content="Top" placement="top">
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
</it-tooltip>`

slotCode = 
`<it-tooltip placement="top">
  <span slot="content"><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span>
  <it-button>Slot content</it-button>
</it-tooltip>`

dataSheet = [
  {
      property: 'content',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Content of the tooltip'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes tooltip disabled'
    },
    {
      property: 'hoverable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes tooltip hoverable'
    }
]

slotSheet = [
  {
    name: 'default',
    description: 'Hoverable element for tooltip' 
  },
  {
    name: 'content',
    description: 'Content of the tooltip'
  }
]
}
</script>

<style lang="less">
</style>