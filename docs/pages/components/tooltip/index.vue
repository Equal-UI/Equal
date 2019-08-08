<template>
  <div>
    <h1>Tooltip</h1>

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
  tooltipContent: string = 'Hello there'
  // tooltipPermanent: boolean = false
  tooltipPlacement: string = 'top'
  tooltipPlacements: string[] = ['top', 'right', 'bottom', 'left']
}
</script>

<style lang="less">
</style>