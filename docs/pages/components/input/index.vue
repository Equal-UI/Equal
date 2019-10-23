<template>
  <div>
    <h1>Input</h1>

    <Demobox>
      <it-input
        v-model="inputValue"
        :placeholder="inputPlaceholder"
        :labelTop="inputTopLabel"
        :disabled="inputDisabled"
      />

      <template slot="props">
        <it-input v-model="inputPlaceholder" labelTop="Input placeholder" />
        <it-input v-model="inputTopLabel" labelTop="Top label" />
        <it-checkbox label="Disabled" v-model="inputDisabled" />
      </template>
    </Demobox>
    <Box :code="codeIcon" title="With icon">
      <it-input v-model="inputValue" type="password" icon="remove_red_eye" />
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-input v-model="inputValue" disabled />
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
  inputPlaceholder: string = 'Your placeholder'
  inputValue: string = ''
  inputTopLabel: string = 'Your input'
  inputDisabled: boolean = false

  codeDisabled = `<it-input v-model="inputValue" disabled />`
  codeIcon = `<it-input v-model="inputValue" type="password" icon="remove_red_eye" />`

  dataSheet = [
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
      property: 'icon',
      type: ['String'],
      default: '-',
      values: ['Material Icon'],
      description: 'Icon on the right side'
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
    },
  ]
}
</script>
