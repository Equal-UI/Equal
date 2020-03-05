<template>
  <div>
    <h1>Badge</h1>

    <Demobox>
      <it-badge
        :value="badgeValue"
        :show="badgeShow"
        :type="badgeType"
        :maxValue="badgeMax"
        :point="badgePoint"
        :square="badgeSquare"
        :position="badgePosition"
      >
        <it-button>Badged</it-button>
      </it-badge>
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Badge type" v-model="badgeType">
          <it-select-option :key="type" v-for="type in badgeTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-select placeholder="Select position" labelTop="Badge position" v-model="badgePosition">
          <it-select-option
            :key="position"
            v-for="position in badgePositions"
            :value="position"
          >{{position}}</it-select-option>
        </it-select>
        <it-checkbox label="Point" v-model="badgePoint" />
        <it-checkbox label="Square" v-model="badgeSquare" />
        <it-checkbox label="Show" v-model="badgeShow" />
        <it-number-input v-model="badgeMax" labelTop="Max value" />
        <it-number-input v-model="badgeValue" labelTop="Badge value" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-badge value="12" type="primary">
        <it-button>Primary</it-button>
      </it-badge>
      <it-badge value="new" type="danger">
        <it-button>Default</it-button>
      </it-badge>
      <it-badge value="12" type="success">
        <it-button>Success</it-button>
      </it-badge>
      <it-badge value="12" type="warning">
        <it-button>Warning</it-button>
      </it-badge>
    </Box>

    <Box :code="pointCode" title="Point">
      <it-badge type="primary" point>
        <it-button>Primary</it-button>
      </it-badge>
      <it-badge type="danger" point>
        <it-button icon="mail_outline"></it-button>
      </it-badge>
      <it-badge type="success" point>
        <it-button icon="thumb_up"></it-button>
      </it-badge>
      <it-badge type="warning" point>
        <it-button icon="error_outline"></it-button>
      </it-badge>
    </Box>

    <Box :code="squareCode" title="Square">
      <it-badge type="primary" :value="12" square>
        <it-button>Square</it-button>
      </it-badge>
      <it-badge type="primary" point square>
        <it-button icon="thumb_up"></it-button>
      </it-badge>
    </Box>

    <Box :code="positionsCode" title="Positions" style="">
      <it-badge point :value="12">
        <it-button>Top-right</it-button>
      </it-badge>
      <it-badge point position="bottom-right" :value="12">
        <it-button>Bottom-right</it-button>
      </it-badge>
      <it-badge point position="bottom-left" :value="12">
        <it-button>Bottom-left</it-button>
      </it-badge>
      <it-badge point position="top-left" :value="12">
        <it-button>Top-left</it-button>
      </it-badge>
    </Box>

    <Box :code="maxvalCode" title="Max value">
      <it-badge :value="110" :max-value="99">
        <it-tag type="danger">Maximum</it-tag>
      </it-badge>
    </Box>

    <Box :code="standaloneCode" title="Standalone">
      <it-badge :value="101" />
      <it-badge :value="101" square />
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
export default class BadgePage extends Vue {
  public badgeValue = 97
  public badgePoint = false
  public badgeSquare = false
  public badgeShow = true
  public badgeMax = 99
  public badgeType = 'danger'
  public badgeTypes = ['primary', 'success', 'danger', 'warning']

  public badgePosition = 'top-right'
  public badgePositions = [
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left'
  ]

  public typesCode = `<it-badge value="12" type="primary">
  <it-button>Primary</it-button>
</it-badge>
<it-badge value="new" type="danger">
  <it-button>Default</it-button>
</it-badge>
<it-badge value="12" type="success">
  <it-button>Success</it-button>
</it-badge>
<it-badge value="12" type="warning">
  <it-button>Warning</it-button>
</it-badge>`

  public pointCode = `<it-badge type="primary" point>
  <it-button>Primary</it-button>
</it-badge>
<it-badge type="danger" point>
  <it-button icon="mail_outline"></it-button>
</it-badge>
<it-badge type="success" point>
  <it-button icon="thumb_up"></it-button>
</it-badge>
<it-badge type="warning" point>
  <it-button icon="error_outline"></it-button>
</it-badge>`

  public maxvalCode = `<it-badge :value="110" :max-value="99">
  <it-tag type="danger">Maximum</it-tag>
</it-badge>`

  public squareCode = `<it-badge type="primary" :value="12" square>
<it-button>Square</it-button>
  </it-badge>
<it-badge type="success" point square>
  <it-button icon="thumb_up"></it-button>
</it-badge>`

  public positionsCode = 
`<it-badge point :value="12">
  <it-button>Top-right</it-button>
</it-badge>
<it-badge point position="bottom-right" :value="12">
  <it-button>Bottom-right</it-button>
</it-badge>
<it-badge point position="bottom-left" :value="12">
  <it-button>Bottom-left</it-button>
</it-badge>
<it-badge point position="top-left" :value="12">
  <it-button>Top-left</it-button>
</it-badge>`

  public standaloneCode = `<it-badge :value="101" />
<it-badge :value="101" square />`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'danger',
      values: ['primary', 'success', 'danger', 'warning'],
      description: 'Type of the badge'
    },
    {
      property: 'value',
      type: ['Number', 'String'],
      default: '',
      values: [],
      description: 'Value of the badge'
    },
    {
      property: 'max-value',
      type: ['Number'],
      default: '',
      values: [],
      description: 'Max value of the badge'
    },
    {
      property: 'position',
      type: ['String'],
      default: 'top-right',
      values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Set position of the badge'
    },
    {
      property: 'show',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Show badge'
    },
    {
      property: 'point',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Show badge as point'
    },
    {
      property: 'square',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Make badge squared'
    }
  ]
}
</script>

<style>
</style>