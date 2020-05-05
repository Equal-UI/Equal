<template>
  <div>
    <h1>Progress Bar</h1>

    <Demobox>
      <div style="width:70%;">
        <it-progressbar
          :show-tooltip="progressShowTooltip"
          :height="progressHeight"
          :progress="progressValue"
          :tooltip="progressTooltip"
        />
      </div>

      <template slot="props">
        <it-slider v-model="progressValue" labelTop="Progress" />
        <it-number-input v-model="progressHeight" labelTop="Progress bar height" />
        <it-checkbox label="Show tooltip" v-model="progressShowTooltip" />
        <it-select
          placeholder="Select tooltip"
          labelTop="Tooltip position"
          :disabled="!progressShowTooltip"
          v-model="progressTooltip"
        >
          <it-select-option :key="type" v-for="type in tooltipTypes" :value="type">{{type}}</it-select-option>
        </it-select>
      </template>
    </Demobox>
    <Box :code="infiniteCode" title="Infinite">
      <div class="heights-progress">
        <it-progressbar infinite />
      </div>
    </Box>
    <Box :code="heightCode" title="Height">
      <div class="heights-progress">
        <it-progressbar :height="3" :progress="progressValue42" />
        <it-progressbar :height="5" :progress="progressValue42" />
        <it-progressbar :height="7" :progress="progressValue42" />
        <it-progressbar :height="10" :progress="progressValue42" />
        <it-progressbar :height="13" :progress="progressValue42" />
      </div>
    </Box>
    <Box :code="tooltipCode" title="Tooltip position">
      <div class="heights-progress">
        <it-progressbar :progress="progressValue42" />
        <it-progressbar :progress="progressValue42" tooltip="bottom" />
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
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
export default class ProgressPage extends Vue {
  public progressValue: number = 42
  public progressHeight: number = 7
  public tooltipTypes: string[] = ['top', 'bottom']
  public progressTooltip: string = 'top'
  public progressShowTooltip: boolean = true
  public progressValue42: number = 42

  public infiniteCode = `<it-progressbar infinite />`

  public heightCode = `<it-progressbar :height="3" :progress="progressValue" />
<it-progressbar :height="5" :progress="progressValue" />
<it-progressbar :height="7" :progress="progressValue" />
<it-progressbar :height="10" :progress="progressValue" />
<it-progressbar :height="13" :progress="progressValue" />`

  public tooltipCode = `<it-progressbar :progress="progressValue" />
<it-progressbar :progress="progressValue" tooltip="bottom" />`

  public dataSheet = [
    {
      property: 'progress',
      type: ['Number', 'String'],
      default: '0',
      values: ['0-100'],
      description: 'Progress value'
    },
    {
      property: 'infinite',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes progress infinite'
    },
    {
      property: 'height',
      type: ['Number', 'String'],
      default: '7',
      values: [],
      description: 'Height of the progressbar'
    },
    {
      property: 'tooltip',
      type: ['String'],
      default: 'top',
      values: ['top', 'bottom'],
      description: 'Position of the tooltip'
    },
    {
      property: 'show-tooltip',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Show tooltip'
    },
  ]
}
</script>

<style lang="less">
  .heights-progress {
    position: relative;
    width: 100%;
    .it-progress-wrapper + .it-progress-wrapper {
      margin-top: 30px;
    }
  }
</style>