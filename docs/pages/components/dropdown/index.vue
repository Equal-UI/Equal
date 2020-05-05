<template>
  <div>
    <h1>Dropdown</h1>

    <Demobox>
      <it-dropdown :clickable="clickable" :placement="dropdownType">
        <it-button>{{clickable ? 'Click' : 'Hover'}} me</it-button>
        <it-dropdown-menu slot="menu">
          <it-dropdown-item>Hello</it-dropdown-item>
          <it-dropdown-item disabled>Disabled</it-dropdown-item>
          <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
          <it-dropdown-item divided>Divided</it-dropdown-item>
        </it-dropdown-menu>
      </it-dropdown>
      <template slot="props">
        <it-select
          placeholder="Select placement"
          labelTop="Dropdown placement"
          v-model="dropdownType"
        >
          <it-select-option :key="type" v-for="type in dropdownTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-checkbox label="Clickable" v-model="clickable" />
      </template>
    </Demobox>

    <Box :code="codeExample" title="Example">
      <it-dropdown>
        <it-button>Hover me</it-button>
        <it-dropdown-menu slot="menu">
          <it-dropdown-item>Hello</it-dropdown-item>
          <it-dropdown-item disabled>Disabled</it-dropdown-item>
          <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
          <it-dropdown-item divided>Divided</it-dropdown-item>
        </it-dropdown-menu>
      </it-dropdown>
    </Box>
    <props-table tagName="it-dropdown" :data-sheet="dataSheet" />
    <props-table tagName="it-dropdown-item" :data-sheet="dataSheet2" />
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
export default class DropdownPage extends Vue {
  // dropdownDisabled = false

  dropdownType = 'bottom'
  clickable = false
  dropdownTypes = [
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
  ]

  codeExample = `<it-dropdown>
  <it-button>Hover me</it-button>
  <it-dropdown-menu slot="menu">
    <it-dropdown-item>Hello</it-dropdown-item>
    <it-dropdown-item disabled>Disabled</it-dropdown-item>
    <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
    <it-dropdown-item divided>Divided</it-dropdown-item>
  </it-dropdown-menu>
</it-dropdown>`

  dataSheet = [
    {
      property: 'placement',
      type: ['String'],
      default: 'bottom',
      values: this.dropdownTypes,
      description: 'Position of the dropdown'
    },
    {
      property: 'clickable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Dropdown activates only on click'
    }
  ]

  dataSheet2 = [
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Disabled menu item'
    },
    {
      property: 'divided',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Divides menu item from previous item'
    },
    {
      property: 'icon',
      type: ['String'],
      default: '',
      values: ['Material Icon'],
      description: 'Adds icon to the mmenu item'
    }
  ]
}
</script>
