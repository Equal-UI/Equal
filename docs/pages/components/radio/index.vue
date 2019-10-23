<template>
  <div>
    <h1>Radio</h1>

    <Demobox>

      <div class="radios">

      <it-radio v-model="radioValue" :disabled="radioDisabled" :pulse="radioPulse" :label="radioLabel" value="1" />
      <it-radio v-model="radioValue" label="Second" value="2"/>
      <it-radio v-model="radioValue" label="Third" value="3"/>
      </div>

      <template slot="props">
        <it-input v-model="radioLabel" labelTop="Radio label" />
        <it-checkbox label="Pulse" v-model="radioPulse" />
        <it-checkbox label="Disabled" v-model="radioDisabled" />
      </template>
    </Demobox>

    <Box :code="typeCode" title="Types">
      <it-radio v-model="typeValue" label="Primary" value="00"/>
      <it-radio v-model="typeValue" type="success" label="Success" value="11"/>
      <it-radio v-model="typeValue" type="danger" label="Danger" value="22"/>
      <it-radio v-model="typeValue" type="warning" label="Warning" value="33"/>
    </Box>

    <Box :code="pulseCode" title="Pulse">
      <p slot="description" style="padding: 0px 24px;">Pulse helps you to catch user's attention</p>
      <it-radio v-model="pulseValue" pulse label="Look at me" value="42"/>
    </Box>
    <Box :code="disabledCode" title="Disabled">
      <it-radio v-model="pulseValue" disabled label="I'm disabled" value="42"/>
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
export default class RadioPage extends Vue {
  radioValue = 1
  radioLabel: string = 'Edit me'
  radioPulse: boolean = false
  radioDisabled: boolean = false
  pulseValue: boolean = false
  typeValue = false

typeCode = 
`<it-radio v-model="typeValue" label="Primary" value="00"/>
<it-radio v-model="typeValue" type="success" label="Success" value="11"/>
<it-radio v-model="typeValue" type="danger" label="Danger" value="22"/>
<it-radio v-model="typeValue" type="warning" label="Warning" value="33"/>`

pulseCode = `<it-radio v-model="pulseValue" pulse label="Look at me" value="42"/>`

disabledCode = `<it-radio v-model="pulseValue" disabled label="I'm disabled" value="42"/>`

  dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning'],
      description: 'Type of the radio'
    },
    {
      property: 'label',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Label of the radio'
    },
    {
      property: 'value',
      type: ['String', 'Number'],
      default: '-',
      values: [],
      description: 'Value of the radio'
    },
    {
      property: 'pulse',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Pulse of the radio'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes radio disabled'
    },
  ]
}
</script>

<style lang="less">
.radios {
  display: flex;
  flex-direction: column;

  & > label + label {
    margin-top: 10px;
  }
}
</style>