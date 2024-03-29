<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Slider</h1>

    <Demobox name="ItSlider">
      <div class="w-full px-10">
        <it-slider
          v-model="sliderValue"
          :step-points="sliderStepPoints"
          :disabled="sliderDisabled"
          :min="sliderMin"
          :max="sliderMax"
          :step="sliderStep"
          :numbers="sliderNumbers"
        />
      </div>

      <template #props>
        <it-number-input v-model="sliderMin" label-top="Min" />
        <it-number-input v-model="sliderMax" label-top="Max" />
        <it-number-input v-model="sliderStep" label-top="Step" />
        <it-checkbox
          variant="primary"
          v-model="sliderNumbers"
          label="Numbers"
        />
        <it-checkbox
          variant="primary"
          v-model="sliderStepPoints"
          label="Step points"
        />
        <it-checkbox
          variant="primary"
          v-model="sliderDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>
    <Box :template="stepCode" title="Step points">
      <it-slider
        v-model="stepSliderValue"
        :step-points="true"
        :min="0"
        :max="20"
        :step="2"
      />
    </Box>
    <Box :template="numbersCode" title="Numbers">
      <it-slider v-model="numberSliderValue" numbers :min="0" :max="42" />
    </Box>
    <Box :template="disabledCode" title="Disabled">
      <it-slider v-model="stepSliderValue" disabled :min="0" :max="20" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    sliderValue: 14,
    stepSliderValue: 10,
    numberSliderValue: 10,
    sliderMin: 0,
    sliderMax: 42,
    sliderStep: 1,
    sliderStepPoints: false,
    sliderDisabled: false,
    sliderNumbers: false,

    stepCode: `<it-slider v-model="stepSliderValue" ||| :stepPoints="true" ||| :min="0" :max="12" :step="2" />`,
    disabledCode: `<it-slider v-model="stepSliderValue" ||| disabled ||| :min="0" :max="20" />`,
    numbersCode: `<it-slider v-model="numberSliderValue" ||| numbers ||| :min="0" :max="42"/>`,

    dataSheet: [
      {
        property: 'min',
        type: ['Number'],
        default: 0,
        values: [],
        description: 'Minimal value',
      },
      {
        property: 'max',
        type: ['Number'],
        default: 100,
        values: [],
        description: 'Maximal value',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes slider disabled',
      },
      {
        property: 'step-points',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show step points',
      },
      {
        property: 'numbers',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show min/max value numbers',
      },
      {
        property: 'step',
        type: ['Number'],
        default: 1,
        values: [],
        description: 'Step size',
      },
      {
        property: 'value (v-model)',
        type: ['Number'],
        default: 0,
        values: [],
        description: 'Slider value',
      },
    ],
  }),
})
</script>
