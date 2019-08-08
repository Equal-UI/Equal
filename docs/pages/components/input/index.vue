<template>
  <div>
    <h1>Input</h1>

    <Demobox>
      <it-input v-model="inputValue" :placeholder="inputPlaceholder" :labelTop="inputTopLabel" :disabled="inputDisabled" />

      <template slot="props">
        <it-input v-model="inputPlaceholder" labelTop="Input placeholder" />
        <it-input v-model="inputTopLabel" labelTop="Top label" />
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
export default class InputPage extends Vue {
  inputPlaceholder: string = 'Your placeholder'
  inputValue: string = ''
  inputTopLabel: string = 'Your input'
  inputDisabled: boolean = false
}
</script>
