<template>
  <div>
    <h1>Number Input</h1>

    <Demobox>
      <it-number-input v-model="inputValue" :labelTop="inputTopLabel" :step="inputStep" :min="inputMin" :max="inputMax" :disabled="inputDisabled" />

      <template slot="props">
        <it-input v-model="inputTopLabel" labelTop="Top label" />
        <it-number-input v-model="inputMin" labelTop="Min"/>
        <it-number-input v-model="inputMax" labelTop="Max"/>
        <it-number-input :min="0" v-model="inputStep" labelTop="Step"/>
        <it-checkbox label="Disabled" v-model="inputDisabled" />
      </template>
    </Demobox>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import PropsTable from '~/components/Table.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, PropsTable }
})
export default class NumberInputPage extends Vue {
  inputMin: number = 0
  inputMax: number = 100
  inputStep: number = 1
  inputValue: number = 0
  inputTopLabel: string = 'Your input'
  inputDisabled: boolean = false

  dataSheet = [
    {
      property: 'min',
      type: ['Number'],
      default: -Infinity,
      values: [],
      description: 'Minimal value'
    },
    {
      property: 'max',
      type: ['Number'],
      default: Infinity,
      values: [],
      description: 'Maximal value'
    },
    {
      property: 'step',
      type: ['Number'],
      default: '1',
      values: [],
      description: 'Step value'
    },
    {
      property: 'label-top',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Top label'
    },
    {
      property: 'value (v-model)',
      type: ['Number'],
      default: 1,
      values: [],
      description: 'Number input value'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Disabled number input'
    }
  ]
}
</script>
