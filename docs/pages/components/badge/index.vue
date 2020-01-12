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
      >
        <it-button type="neutral">Badged</it-button>
      </it-badge>
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Badge type" v-model="badgeType">
          <it-select-option :key="type" v-for="type in badgeTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-checkbox label="Point" v-model="badgePoint" />
        <it-checkbox label="Show" v-model="badgeShow" />
        <it-number-input v-model="badgeMax" labelTop="Max value" />
        <it-number-input v-model="badgeValue" labelTop="Badge value" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-badge value="12" type="primary">
        <it-button type="neutral">Primary</it-button>
      </it-badge>
      <it-badge value="12" type="danger">
        <it-button type="neutral">Default</it-button>
      </it-badge>
      <it-badge value="12" type="success">
        <it-button type="neutral">Success</it-button>
      </it-badge>
      <it-badge value="12" type="warning">
        <it-button type="neutral">Warning</it-button>
      </it-badge>
    </Box>

    <Box :code="pointCode" title="Point">
      <it-badge type="primary" point>
        <it-button type="neutral">Primary</it-button>
      </it-badge>
      <it-badge type="danger" point>
        <it-button type="neutral" icon="mail_outline"></it-button>
      </it-badge>
      <it-badge type="success" point>
        <it-button type="neutral" icon="thumb_up"></it-button>
      </it-badge>
      <it-badge type="warning" point>
        <it-button type="neutral" icon="error_outline"></it-button>
      </it-badge>
    </Box>

    <Box :code="maxvalCode" title="Max value">
      <it-badge :value="110" :max-value="99">
        <it-tag type="danger">Maximum</it-tag>
      </it-badge>
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
  public badgeShow = true
  public badgeMax = 99
  public badgeType = 'danger'
  public badgeTypes = ['primary', 'success', 'danger', 'warning']

  public typesCode = `<it-badge value="12" type="primary">
  <it-button type="neutral">Primary</it-button>
</it-badge>
<it-badge value="12" type="danger">
  <it-button type="neutral">Default</it-button>
</it-badge>
<it-badge value="12" type="success">
  <it-button type="neutral">Success</it-button>
</it-badge>
<it-badge value="12" type="warning">
  <it-button type="neutral">Warning</it-button>
</it-badge>`

  public pointCode = `<it-badge type="primary" point>
  <it-button type="neutral">Primary</it-button>
</it-badge>
<it-badge type="danger" point>
  <it-button type="neutral" icon="mail_outline"></it-button>
</it-badge>
<it-badge type="success" point>
  <it-button type="neutral" icon="thumb_up"></it-button>
</it-badge>
<it-badge type="warning" point>
  <it-button type="neutral" icon="error_outline"></it-button>
</it-badge>`

  public maxvalCode = `<it-badge :value="110" :max-value="99">
  <it-tag type="danger">Maximum</it-tag>
</it-badge>`

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
    }
  ]
}
</script>

<style>
</style>