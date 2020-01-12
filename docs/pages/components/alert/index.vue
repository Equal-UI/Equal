<template>
  <div>
    <h1>Alert</h1>

    <Demobox>
      <it-alert :visible="alertVisible" @on-close="alertVisible=false" :type="alertType" :showIcon="alertShowIcon" :closable="alertClosable" :title="alertTitle" :body="alertBody" />
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Alert type" v-model="alertType">
          <it-select-option :key="type" v-for="type in alertTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-input v-model="alertTitle" labelTop="Alert title" />
        <it-input v-model="alertBody" labelTop="Alert Body" />
        <it-checkbox label="Icon" v-model="alertShowIcon" />
        <it-checkbox label="Closable" v-model="alertClosable" />
        <it-checkbox label="Visible" v-model="alertVisible" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <div style="flex-direction: column; flex: 1;">

      <it-alert type="primary" :title="alertTitle" :body="alertBody"/>
      <it-alert type="success" :title="alertTitle" :body="alertBody"/>
      <it-alert type="danger" :title="alertTitle" :body="alertBody"/>
      <it-alert type="warning" :title="alertTitle" :body="alertBody"/>
      </div>
    </Box>

    <Box :code="slotCode" title="Slot">
      <div style="flex-direction: column; flex: 1;">

      <it-alert type="primary" title="Alert with slot body">
        You can put whatever you want here, I'd put a <it-tag type="primary">Tag</it-tag>
      </it-alert>
      </div>
    </Box>

    <props-table :slot-sheet="slotSheet" :event-sheet="eventSheet" :data-sheet="dataSheet" />
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
export default class AlertPage extends Vue {
  public alertVisible = true
  public alertTitle = 'Alert title'
  public alertBody = 'We think we know you'
  public alertShowIcon = true
  public alertClosable = false
  public alertType = 'primary'
  public alertTypes = ['primary', 'success', 'danger', 'warning']

  public typesCode =
`<it-alert type="primary" :title="alertTitle" :body="alertBody"/>
<it-alert type="success" :title="alertTitle" :body="alertBody"/>
<it-alert type="danger" :title="alertTitle" :body="alertBody"/>
<it-alert type="warning" :title="alertTitle" :body="alertBody"/>`

public slotCode =
`<it-alert type="primary" title="Alert with slot body">
  You can put whatever you want here, I'd put a <it-tag type="primary">Tag</it-tag>
</it-alert>`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning', 'black'],
      description: 'Type of the alert'
    },
    {
      property: 'title',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Title of the alert'
    },
    {
      property: 'body',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Body of the alert'
    },
    {
      property: 'show-icon',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Show icon on the right side'
    },
    {
      property: 'closable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes alert closable'
    },
    {
      property: 'visible',
      type: ['Boolean'],
      default: 'true',
      values: [],
      description: 'Visibility of the alert'
    }
  ]

  public eventSheet = [
    {
      event: '@on-close',
      description: 'The event function triggered when user clicks on close icon',
      arguments: 'function(e: Event)'
    }
  ]

  public slotSheet = [
  {
    name: 'default',
    description: 'Alert body'
  }
]

}
</script>

<style>
.it-alert + .it-alert {
  margin-top: 13px;
}
</style>