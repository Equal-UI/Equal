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
export default class SwitchPage extends Vue {
  switchValue: boolean = true
  switchLabel: string = 'Switch'
  switchPulse: boolean = false
  switchDisabled: boolean = false
  switchType = 'primary'
  switchTypes = ['primary', 'success', 'danger', 'warning', 'black']
}
</script>

<style lang="less">
</style>