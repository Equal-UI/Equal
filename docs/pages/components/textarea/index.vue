<template>
  <div>
    <h1>Textarea</h1>

    <Demobox>
      <it-textarea
        :resizable="textareaResizable"
        :disabled="textareaDisabled"
        v-model="textareaValue"
        :placeholder="textareaPlaceholder"
      ></it-textarea>

      <template slot="props">
        <it-input v-model="textareaPlaceholder" labelTop="Placeholder text" />
        <it-checkbox label="Resizable" v-model="textareaResizable" />
        <it-checkbox label="Disabled" v-model="textareaDisabled" />
      </template>
    </Demobox>
    <Box :code="disabledCode" title="Types">
      <it-textarea v-model="disabledValue" disabled></it-textarea>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Demobox from '~/components/Demobox.vue'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class TextareaPage extends Vue {
  textareaPlaceholder: string = 'Your text goes here'
  textareaResizable: boolean = false
  textareaPulse: boolean = false
  textareaDisabled: boolean = false
  textareaValue: string = ''
  disabledValue = 'This textarea is disabled'

  disabledCode = `<it-textarea v-model="disabledValue" disabled></it-textarea>`

  dataSheet = [
    {
      property: 'placeholder',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Placeholder of the textarea'
    },
    {
      property: 'width',
      type: ['String'],
      default: '280px',
      values: ['width value'],
      description: 'Width of the textarea'
    },
    {
      property: 'height',
      type: ['String'],
      default: '100px',
      values: ['height value'],
      description: 'Height of the textarea'
    },
    {
      property: 'resizable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes textarea resizable'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes textares disabled'
    },
    {
      property: 'value (v-model)',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Value of the textarea'
    }
  ]
}
</script>
