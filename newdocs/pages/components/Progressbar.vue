<template>
  <div>
    <h1>Progress Bar</h1>

    <Demobox name="it-progress-bar">
      <div class="w-full px-8">
        <it-progressbar
          :show-tooltip="progressShowTooltip"
          :height="progressHeight"
          :progress="progressValue"
          :tooltip="progressTooltip"
        />
      </div>

      <template #props>
        <it-slider v-model="progressValue" label-top="Progress" />
        <it-number-input
          v-model="progressHeight"
          :min="1"
          label-top="Progress bar height"
        />
        <it-checkbox v-model="progressShowTooltip" label="Show tooltip" />
        <it-select
          v-model="progressTooltip"
          placeholder="Select tooltip"
          label-top="Tooltip position"
          :disabled="!progressShowTooltip"
          :options="tooltipTypes"
        >
        </it-select>
      </template>
    </Demobox>
    <Box :code="infiniteCode" title="Infinite">
      <div class="flex w-full flex-col gap-3">
        <it-progressbar infinite />
      </div>
    </Box>
    <Box :code="tooltipCode" title="Tooltip position">
      <div class="flex w-full flex-col gap-3">
        <it-progressbar :progress="progressValue42" />
        <it-progressbar :progress="progressValue42" tooltip="bottom" />
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    progressValue: 42,
    progressHeight: 7,
    tooltipTypes: ['top', 'bottom'],
    progressTooltip: 'top',
    progressShowTooltip: true,
    progressValue42: 42,

    infiniteCode: `<it-progressbar ||| infinite ||| />`,

    tooltipCode: `<it-progressbar :progress="progressValue" />
<it-progressbar :progress="progressValue" ||| tooltip="bottom" ||| />`,

    dataSheet: [
      {
        property: 'progress',
        type: ['Number', 'String'],
        default: '0',
        values: ['0-100'],
        description: 'Progress value',
      },
      {
        property: 'infinite',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes progress infinite',
      },
      {
        property: 'height',
        type: ['Number', 'String'],
        default: '7',
        values: [],
        description: 'Height of the progressbar',
      },
      {
        property: 'tooltip',
        type: ['String'],
        default: 'top',
        values: ['top', 'bottom'],
        description: 'Position of the tooltip',
      },
      {
        property: 'show-tooltip',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Show tooltip',
      },
    ],
  }),
})
</script>
