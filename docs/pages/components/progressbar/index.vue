<template>
  <div>
    <h1>Progress Bar</h1>

    <Demobox>
      <div style="width:70%;">
      <it-progressbar :show-tooltip="progressShowTooltip" :height="progressHeight" :progress="progressValue" :tooltip="progressTooltip" />

      </div>

      <template slot="props">
        <span class="it-input-label">Progress</span>
        <it-slider v-model="progressValue" labelTop="Progress"/>
        <it-number-input v-model="progressHeight" labelTop="Progress bar height"/>
        <it-select placeholder="Select tooltip" labelTop="Tooltip position" v-model="progressTooltip">
          <it-select-option :key="type" v-for="type in tooltipTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-checkbox label="Show tooltip" v-model="progressShowTooltip" />
      </template>
    </Demobox>
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class ProgressPage extends Vue {
  progressValue: number = 42
  progressHeight: number = 7
  tooltipTypes: string[] = ['top', 'bottom']
  progressTooltip: string = 'top'
  progressShowTooltip: boolean = true
}
</script>
