<template>
  <div>
    <h1>Dropdown</h1>

    <Demobox>
      <it-dropdown :placement="dropdownType">
        <it-button>Hover me</it-button>
        <it-dropdown-menu slot="menu">
          <it-dropdown-item>Hello</it-dropdown-item>
          <it-dropdown-item disabled >Disabled</it-dropdown-item>
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
      </template>
    </Demobox>
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class DropdownPage extends Vue {
  // dropdownDisabled = false

  dropdownType = 'bottom'
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
}
</script>
