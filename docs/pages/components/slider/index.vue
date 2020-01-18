<template>
  <div>
    <h1>Slider</h1>

    <Demobox>
      <div style="width: 70%;">
        <it-slider
          v-model="sliderValue"
          :stepPoints="sliderStepPoints"
          :disabled="sliderDisabled"
          :min="sliderMin"
          :max="sliderMax"
          :step="sliderStep"
          :numbers="sliderNumbers"
        />
      </div>

      <template slot="props">
        <it-number-input v-model="sliderMin" labelTop="Min" />
        <it-number-input v-model="sliderMax" labelTop="Max" />
        <it-number-input v-model="sliderStep" labelTop="Step" />
        <it-checkbox label="Numbers" v-model="sliderNumbers" />
        <it-checkbox label="Step points" v-model="sliderStepPoints" />
        <it-checkbox label="Disabled" v-model="sliderDisabled" />
      </template>
    </Demobox>
    <Box :code="stepCode" title="Step points">
      <it-slider v-model="stepSliderValue" :stepPoints="true" :min="0" :max="20" :step="2" />
    </Box>
    <Box :code="disabledCode" title="Disabled">
      <it-slider v-model="stepSliderValue" disabled :min="0" :max="20" />
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
export default class SliderPage extends Vue {
  sliderValue: number = 14
  stepSliderValue: number = 10
  sliderMin: number = 0
  sliderMax: number = 42
  sliderStep: number = 1
  sliderStepPoints: boolean = false
  sliderDisabled: boolean = false
  sliderNumbers: boolean = false

  stepCode = `<it-slider v-model="stepSliderValue" :stepPoints="true" :min="0" :max="12" :step="2" />`
  disabledCode = `<it-slider v-model="stepSliderValue" disabled :min="0" :max="20" />`

  dataSheet = [
    {
      property: 'min',
      type: ['Number'],
      default: 0,
      values: [],
      description: 'Minimal value'
    },
    {
      property: 'max',
      type: ['Number'],
      default: 100,
      values: [],
      description: 'Maximal value'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes slider disabled'
    },
    {
      property: 'step-points',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Show step points'
    },
    {
      property: 'numbers',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Show min/max value numbers'
    },
    {
      property: 'step',
      type: ['Number'],
      default: 1,
      values: [],
      description: 'Step size'
    },
    {
      property: 'value (v-model)',
      type: ['Number'],
      default: 0,
      values: [],
      description: 'Slider value'
    }
  ]
}
</script>

<style lang="less">
</style>