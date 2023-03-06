<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Colorpicker</h1>

    <Demobox name="ItColorpicker">
      <div class="py-12">
        <it-colorpicker
          :show-tooltip="colorTooltip"
          :disable-alpha="hideAlpha"
        />
      </div>
      <template #props>
        <it-checkbox
          variant="primary"
          v-model="colorTooltip"
          label="Tooltip on move"
          subLabel="Move cursor with color picker to see the toltip on top"
        />
        <it-checkbox variant="primary" v-model="hideAlpha" label="Hide alpha" />
      </template>
    </Demobox>

    <Box :template="tooltipCode" title="With Tooltip">
      <div class="flex flex-col items-center">
        <it-colorpicker show-tooltip :value="color" @change="updateColor" />

        <h5 class="mt-6">
          Change event return
          <it-button
            variant="primary-text"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
            href="https://github.com/omgovich/colord"
          >
            colord
          </it-button>
          object so for example
          <pre>value.toRgb()</pre>
          will return:
        </h5>
        <h5 class="mt-6">Returned value:</h5>
        <pre>{{ JSON.stringify(exColor.toRgb(), null, 2) }}</pre>
      </div>
    </Box>

    <Box :template="popoverCode" title="Use with it-popover">
      <div class="flex flex-col">
        <it-popover borderless>
          <it-button>Choose color</it-button>

          <template #content>
            <it-colorpicker :value="color" @change="updateColor" />
          </template>
        </it-popover>
      </div>
    </Box>

    <Box :template="usageCode" title="Use example">
      <div class="flex flex-col items-center space-y-8">
        <it-colorpicker :value="exampleColor" @change="updateExampleColor" />
        <it-spinner
          :style="{ 'border-right-color': exampleColor }"
        ></it-spinner>
      </div>
    </Box>

    <props-table :event-sheet="eventSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { colord } from 'colord'
import { defineComponent } from 'vue'

const defaultColors = 'rgb(48, 81, 255)'

export default defineComponent({
  data: () => ({
    exampleColor: 'rgba(49,81,254,1)',
    color: defaultColors,
    colorTooltip: true,
    exColor: colord('rgb(48, 81, 255)'),
    hideAlpha: false,

    tooltipCode: `<it-colorpicker ||| showTooltip ||| :value="color" @change="updateColor" />`,

    popoverCode: `<it-popover borderless>
  <it-button>Choose color</it-button>

  <template #content>
    <it-colorpicker :value="color" @change="updateColor" />
  </template>
</it-popover>`,

    usageCode: `<it-colorpicker :value="exampleColor" @change="updateExampleColor" />
<it-loading class="mt-4" :color="exampleColor"></it-loading>

updateExampleColor(val) {
  const {r,g,b,a} = val.rgba

  this.exampleColor = \`rgba(\${r}, \${g}, \${b}, \${a})\`
}`,

    dataSheet: [
      {
        property: 'disableAlpha',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Hides alpha',
      },
      {
        property: 'showTooltip',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description:
          'Show tooltip over saturation cursor on move. Useful for mobile devices',
      },
      {
        property: 'value',
        type: ['String', 'Object'],
        default: '#000',
        values: ['rgb', 'rgba', 'hex', 'hex8', 'hsv', 'hsl'],
        description: 'Initial color value',
      },
    ],

    eventSheet: [
      {
        event: '@change',
        description:
          'The event function fires on color change, emits colord object',
        arguments: 'function(val: Colord)',
      },
    ],
  }),
  methods: {
    updateColor(val) {
      this.exColor = val
    },
    updateExampleColor(val) {
      const { r, g, b, a } = val.toRgb()

      this.exampleColor = `rgba(${r}, ${g}, ${b}, ${a})`
    },
  },
})
</script>

<style>
.it-alert + .it-alert {
  margin-top: 13px;
}
</style>
