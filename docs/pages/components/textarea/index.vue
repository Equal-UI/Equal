<template>
  <div>
    <h1>Textarea</h1>

    <Demobox>
      <it-textarea :resizable="textareaResizable" :disabled="textareaDisabled" v-model="textareaValue" :placeholder="textareaPlaceholder"></it-textarea>

      <template slot="props">
        <it-input v-model="textareaPlaceholder" labelTop="Tag text" />
        <it-checkbox label="Resizable" v-model="textareaResizable" />
        <it-checkbox label="Disabled" v-model="textareaDisabled" />
      </template>
    </Demobox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Demobox from '~/components/Demobox.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: {Demobox}
})
export default class TextareaPage extends Vue {
  textareaPlaceholder: string = 'Your text goes here'
  textareaResizable: boolean = false
  textareaPulse: boolean = false
  textareaDisabled: boolean = false
  textareaValue: string = ''
}
</script>
