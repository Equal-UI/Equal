<template>
  <div>
    <h1>Number Input</h1>

    <Demobox>
      <it-number-input v-model="inputValue" :labelTop="inputTopLabel" :step="inputStep" :min="inputMin" :max="inputMax" :disabled="inputDisabled" />

      <template slot="props">
        <it-input v-model="inputTopLabel" labelTop="Top label" />
        <it-number-input v-model="inputMin" labelTop="Min"/>
        <it-number-input v-model="inputMax" labelTop="Max"/>
        <it-number-input v-model="inputStep" labelTop="Step"/>
        <it-checkbox label="Disabled" v-model="inputDisabled" />
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
export default class NumberInputPage extends Vue {
  inputMin: number = 0
  inputMax: number = 100
  inputStep: number = 1
  inputValue: number = 0
  inputTopLabel: string = 'Your input'
  inputDisabled: boolean = false
}
</script>
