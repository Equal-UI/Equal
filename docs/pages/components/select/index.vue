<template>
  <div>
    <h1>Select</h1>

    <Demobox>

      <it-select :placeholder="selectPlaceholder" :disabled="selectDisabled" :labelTop="selectLabel" v-model="selectValue">
          <it-select-option key="one" value="One">One</it-select-option>
          <it-select-option key="two" value="Two">Two</it-select-option>
          <it-select-option key="three" value="Three">Three</it-select-option>
      </it-select>



      <template slot="props">
        <it-input v-model="selectLabel" labelTop="Select label" />
        <it-input v-model="selectPlaceholder" labelTop="Select placeholder" />
        <it-checkbox label="Disabled" v-model="selectDisabled" />
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
export default class SelectPage extends Vue {
  selectValue = ''
  selectLabel: string = 'Select me'
  selectPlaceholder: string = 'Select me'
  selectDisabled: boolean = false
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