<template>
  <div>
    <h1>Select</h1>

    <Demobox>
      <div style="padding: 130px 0px">
        <it-select
          :placeholder="selectPlaceholder"
          :disabled="selectDisabled"
          :labelTop="selectLabel"
          :divided="selectDivided"
          v-model="selectValue"
        >
          <it-select-option key="one" value="One">One</it-select-option>
          <it-select-option key="two" value="Two">Two</it-select-option>
          <it-select-option key="three" value="Three">Three</it-select-option>
        </it-select>
      </div>
      <template slot="props">
        <it-input v-model="selectLabel" labelTop="Select label" />
        <it-input v-model="selectPlaceholder" labelTop="Select placeholder" />
        <it-checkbox label="Divided" v-model="selectDivided" />
        <it-checkbox label="Disabled" v-model="selectDisabled" />


      </template>
    </Demobox>

    <props-table tagName="it-select" :data-sheet="dataSheet" />
    <props-table tagName="it-select-item" :data-sheet="dataSheet2" />
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
export default class SelectPage extends Vue {
  public selectValue = ''
  public selectLabel: string = 'Select me'
  public selectPlaceholder: string = 'Select me'
  public selectDisabled: boolean = false
  public selectDivided: boolean = false

  public dataSheet = [
    {
      property: 'label-top',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Top label'
    },
    {
      property: 'placeholder',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Select area placeholder'
    },
    {
      property: 'placement',
      type: ['String'],
      default: 'bottom',
      values: [
        'bottom',
        'bottom-left',
        'bottom-right',
        'left',
        'left-top',
        'left-bottom',
        'right',
        'right-top',
        'right-bottom',
        'top',
        'top-left',
        'top-right'
      ],
      description: 'Select list position'
    },
    {
      property: 'divided',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes select options divided by line'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes select disabled'
    }
  ]

  public dataSheet2 = [
    {
      property: 'value',
      type: ['Number', 'String'],
      default: '-',
      values: [],
      description: 'Select item value'
    }
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