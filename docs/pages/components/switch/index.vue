<template>
  <div>
    <h1>Switch</h1>

    <Demobox>
      <it-switch
        v-model="switchValue"
        :type="switchType"
        :disabled="switchDisabled"
        :label="switchLabel"
        :pulse="switchPulse"
      />

      <template slot="props">
        <it-select placeholder="Select type" labelTop="Button type" v-model="switchType">
          <it-select-option
            style="text-transform: capitalize;"
            :key="type"
            v-for="type in switchTypes"
            :value="type"
          >{{type}}</it-select-option>
        </it-select>
        <it-input v-model="switchLabel" labelTop="Switch label" />
        <it-checkbox label="Pulse" v-model="switchPulse" />
        <it-checkbox label="Disabled" v-model="switchDisabled" />
      </template>
    </Demobox>
    <Box :code="typesCode" title="Types">
      <it-switch v-model="typeValue" label="Primary" />
      <it-switch v-model="typeValue" type="success" label="Success" />
      <it-switch v-model="typeValue" type="danger" label="Danger" />
      <it-switch v-model="typeValue" type="warning" label="Warning" />
    </Box>
    <Box :code="pulseCode" title="Pulse">
      <p slot="description" style="padding: 0px 24px;">Pulse helps you to catch user's attention</p>
      <it-switch v-model="pulseValue" pulse label="Look at me" />
    </Box>
    <Box :code="disabledCode" title="Disabled">
      <it-switch v-model="pulseValue" disabled label="I'm disabled" />
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
export default class SwitchPage extends Vue {
  switchValue: boolean = true
  switchLabel: string = 'Switch'
  switchPulse: boolean = false
  switchDisabled: boolean = false
  switchType = 'primary'
  switchTypes = ['primary', 'success', 'danger', 'warning', 'black']

  pulseValue = false
  typeValue = true

  typesCode = `<it-switch v-model="typeValue" label="Primary" />
<it-switch v-model="typeValue" type="success" label="Success" />
<it-switch v-model="typeValue" type="danger" label="Danger" />
<it-switch v-model="typeValue" type="warning" label="Warning" />`

  pulseCode = `<it-switch v-model="pulseValue" pulse label="Look at me" />`

  disabledCode = `<it-switch v-model="pulseValue" disabled label="I'm disabled"/>`

  dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning'],
      description: 'Type of the switch'
    },
    {
      property: 'label',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Label of the switch'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes switch disabled'
    },
    {
      property: 'pulse',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Adds pulse to switch'
    },
    {
      property: 'value (v-model)',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Switch value'
    }
  ]
}
</script>

<style lang="less">
</style>