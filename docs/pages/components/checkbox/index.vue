<template>
  <div>
    <h1>Checkbox</h1>

    <Demobox>
      <it-checkbox v-model="checkboxValue" :disabled="checkboxDisabled" :type="checkboxType" :pulse="checkboxPulse" :icon="checkboxIcon" :label="checkboxLabel"  />
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Checkbox type" v-model="checkboxType">
          <it-select-option :key="type" v-for="type in checkboxTypes" :value="type">{{type}}</it-select-option>
        </it-select>
        <it-input v-model="checkboxLabel" labelTop="Checkbox label" />
        <it-input v-model="checkboxIcon" labelTop="Checkbox icon" />
        <it-checkbox label="Pulse" v-model="checkboxPulse" />
        <it-checkbox label="Disabled" v-model="checkboxDisabled" />
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
export default class CheckboxPage extends Vue {
  // @Prop({ type: Boolean, default: false }) private disabled?: boolean
  checkboxDisabled = false
  checkboxValue = false
  checkboxPulse = false
  checkboxLabel = 'Checkbox'
  checkboxIcon = 'check'
  checkboxType = 'primary'
  checkboxTypes = ['primary', 'success', 'danger', 'warning', 'black']
}
</script>
