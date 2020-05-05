<template>
  <div>
    <h1>Input</h1>

    <Demobox>
      <it-input
        v-model="inputValue"
        :placeholder="inputPlaceholder"
        :labelTop="inputTopLabel"
        :disabled="inputDisabled"
        :message="inputMessageText"
        :status="inputStatus"
      />

      <template slot="props">
        <it-input v-model="inputPlaceholder" labelTop="Input placeholder" />
        <it-input v-model="inputTopLabel" labelTop="Top label" />
        <it-input v-model="inputMessageText" placeholder="Write something" labelTop="Message text" />
        <it-select placeholder="Select status" labelTop="Status" v-model="inputStatus">
          <it-select-option :key="'default'" :value="null">default</it-select-option>
          <it-select-option :key="type" v-for="type in statuses" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-checkbox label="Disabled" v-model="inputDisabled" />
      </template>
    </Demobox>
    <Box :code="codeStatus" title="Status">
      <it-input v-model="statusValue" status="success" message="Success" />
      <it-input v-model="statusValue" status="danger" message="Danger" />
      <it-input v-model="statusValue" status="warning" message="Warning" />
    </Box>
    <Box :code="codeIcon" title="With icons">
      <it-input v-model="inputValue" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" prefix-icon="cloud_queue" />
      <it-input v-model="inputValue" suffix-icon="remove_red_eye" prefix-icon="cloud_queue" />
    </Box>
    <Box :code="codeSuffix" title="Prefix / suffix">
      <it-input prefix="https://" v-model="inputValue" />
      <it-input suffix=".com" v-model="inputValue" />
      <it-input prefix="https://" suffix=".com" v-model="inputValue" />
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-input v-model="inputDisabledValue" message="I'm disabled" label-top="Disabled" disabled />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import PropsTable from '~/components/Table.vue'
import Box from '~/components/Box.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class InputPage extends Vue {
  public inputPlaceholder: string = 'Your placeholder'
  public inputValue: string = ''
  public inputTopLabel: string = 'Your input'
  public statusValue: string = 'Hello there'
  public inputDisabledValue: string = 'Disabled input'
  public inputMessageText: string = ''
  public inputDisabled: boolean = false
  public inputStatus: string | null = null
  public statuses = ['success', 'danger', 'warning']

  public codeDisabled = `<it-input v-model="inputValue" disabled />`
  public codeIcon = `<it-input v-model="inputValue" suffix-icon="remove_red_eye" />
<it-input v-model="inputValue" prefix-icon="cloud_queue" />
<it-input v-model="inputValue" suffix-icon="remove_red_eye" prefix-icon="cloud_queue" />`
  public codeStatus = `<it-input v-model="statusValue" status="success" message="Success"/>
<it-input v-model="statusValue" status="danger" message="Danger"/>
<it-input v-model="statusValue" status="warning" message="Warning"/>`

public codeSuffix = `<it-input prefix="https://" v-model="inputValue" />
<it-input suffix=".com" v-model="inputValue" />
<it-input prefix="https://" suffix=".com" v-model="inputValue" />`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'text',
      values: ['text', 'password'],
      description: 'Type of the input'
    },
    {
      property: 'placeholder',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Placeholder of the input'
    },
    {
      property: 'label-top',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Label of the input'
    },
    {
      property: 'message',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Message under input'
    },
    {
      property: 'prefix-icon',
      type: ['String'],
      default: '-',
      values: ['Material Icon'],
      description: 'Icon on the left side'
    },
    {
      property: 'suffix-icon',
      type: ['String'],
      default: '-',
      values: ['Material Icon'],
      description: 'Icon on the right side'
    },
    {
      property: 'prefix',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Left side prefix'
    },
    {
      property: 'suffix',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Right side suffix'
    },
    {
      property: 'value (v-model)',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Value'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes input disabled'
    }
  ]
}
</script>
