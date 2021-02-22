<template>
  <div>
    <h1>Colorpicker</h1>

    <Demobox>
      <div class="py-12">
        <it-colorpicker :showTooltip="colorTooltip" :disableAlpha="hideAlpha" />
      </div>
      <template #props>
        <it-checkbox label="Tooltip on move" v-model="colorTooltip" />
        <it-checkbox label="Hide alpha" v-model="hideAlpha" />
      </template>
    </Demobox>

    <Box :code="tooltipCode" title="With Tooltip">
      <div class="flex flex-col items-center">
        <it-colorpicker showTooltip :value="color" @change="updateColor" />

        <h5 class="mt-6">Returned value:</h5>
        <pre>{{ JSON.stringify(color, null, 2) }}</pre>
      </div>
    </Box>

    <Box :code="popoverCode" title="Use with it-popover">
      <div class="flex flex-col">
        <it-popover borderless>
          <it-button>Choose color</it-button>

          <template #content>
            <it-colorpicker :value="color" @change="updateColor" />
          </template>
        </it-popover>
      </div>
    </Box>

    <Box :code="usageCode" title="Use example">
      <div class="flex flex-col items-center">
        <it-colorpicker :value="exampleColor" @change="updateExampleColor" />
        <it-loading class="mt-4" :color="exampleColor"></it-loading>
      </div>
    </Box>

    <props-table
      :event-sheet="eventSheet"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const defaultColors = 'rgb(48, 81, 255)'

export default defineComponent({
  data: () => ({
    exampleColor: 'rgba(49,81,254,1)',
    color: defaultColors,
    colorTooltip: true,
    hideAlpha: false,

    tooltipCode: `<it-colorpicker showTooltip :value="color" @change="updateColor" />`,

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
        description: 'Show tooltip over saturation cursor on move. Useful for mobile devices',
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
          'The event function fires on color change, emits object with color values in different format',
        arguments: 'function(val: TColorData)',
      },
    ],
  }),
  methods: {
    updateColor(val) {
      this.color = val
    },
    updateExampleColor(val) {
      const { r, g, b, a } = val.rgba

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
