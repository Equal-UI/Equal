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
export default class RadioPage extends Vue {
  radioValue = 1
  radioLabel: string = 'Edit me'
  radioPulse: boolean = false
  radioDisabled: boolean = false
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