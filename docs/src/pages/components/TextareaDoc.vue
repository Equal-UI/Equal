<template>
  <div>
    <h1>Textarea</h1>

    <Demobox>
      <it-textarea
        v-model="textareaValue"
        :resizable="textareaResizable"
        :resize-on-write="textareaResizeWrite"
        :disabled="textareaDisabled"
        :label-top="textareaTopLabel"
        :placeholder="textareaPlaceholder"
        :mask="mask"
      ></it-textarea>

      <template #props>
        <it-input v-model="textareaPlaceholder" label-top="Placeholder text" />
        <it-input v-model="textareaTopLabel" label-top="Label" />
        <it-checkbox v-model="textareaResizable" label="Resizable" />
        <it-checkbox v-model="textareaResizeWrite" label="Resize on write" />
        <it-checkbox v-model="mask" label="Mask" />
        <it-checkbox v-model="textareaDisabled" label="Disabled" />
      </template>
    </Demobox>
    <Box :code="disabledCode" title="Types">
      <it-textarea
        v-model="disabledValue"
        :label-top="textareaTopLabel"
        disabled
      ></it-textarea>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    textareaPlaceholder: 'Your text goes here',
    textareaTopLabel: 'Your textarea',
    textareaResizable: false,
    textareaPulse: false,
    textareaDisabled: false,
    textareaValue: '',
    disabledValue: 'This textarea is disabled',
    textareaResizeWrite: false,
    mask: false,

    disabledCode: `<it-textarea v-model="disabledValue" ||| disabled |||></it-textarea>`,

    dataSheet: [
      {
        property: 'placeholder',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Placeholder of the textarea',
      },
      {
        property: 'resizable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes textarea resizable',
      },
      {
        property: 'resize-on-write',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Area resizes by the scrollheight',
      },
      {
        property: 'mask',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Shows background mask when component is focused',
      },
      {
        property: 'rows',
        type: ['Number'],
        default: '4',
        values: [],
        description: 'Nummber of rows',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes textares disabled',
      },
      {
        property: 'value (v-model)',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Value of the textarea',
      },
    ],
  }),
})
</script>
