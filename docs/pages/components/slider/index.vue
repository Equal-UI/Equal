<template>
  <div>
    <h1>Slider</h1>

    <Demobox>
      <div style="width: 70%;">
        <it-slider v-model="sliderValue" :stepPoints="sliderStepPoints" :disabled="sliderDisabled" :min="sliderMin" :max="sliderMax" :step="sliderStep" />
      </div>

      <template slot="props">
        <it-number-input v-model="sliderMin" labelTop="Min" />
        <it-number-input v-model="sliderMax" labelTop="Max" />
        <it-number-input v-model="sliderStep" labelTop="Step" />
        <it-checkbox label="Step points" v-model="sliderStepPoints" />
        <it-checkbox label="Disabled" v-model="sliderDisabled" />
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
export default class SliderPage extends Vue {
  sliderValue: number = 14
  sliderMin: number = 0
  sliderMax: number = 42
  sliderStep: number = 1
  sliderStepPoints: boolean = false
  sliderDisabled: boolean = false
}
</script>

<style lang="less">
</style>