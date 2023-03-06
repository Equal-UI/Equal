<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Textarea</h1>

    <Demobox name="ItTextarea">
      <div class="px-8">
        <it-textarea
          v-model="textareaValue"
          :resizable="textareaResizable"
          :resize-on-write="textareaResizeWrite"
          :disabled="textareaDisabled"
          :label-top="textareaTopLabel"
          :placeholder="textareaPlaceholder"
          :mask="mask"
        ></it-textarea>
      </div>

      <template #props>
        <it-input v-model="textareaPlaceholder" label-top="Placeholder text" />
        <it-input v-model="textareaTopLabel" label-top="Label" />
        <it-checkbox
          variant="primary"
          v-model="textareaResizable"
          label="Resizable"
        />
        <it-checkbox
          variant="primary"
          v-model="textareaResizeWrite"
          label="Resize on write"
        />
        <it-checkbox
          variant="primary"
          v-model="mask"
          label="Mask"
          subLabel="Focus on the textarea to see the mask"
        />
        <it-checkbox
          variant="primary"
          v-model="textareaDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>
    <Box :template="variantsCode" title="Variants">
      <it-textarea
        v-model="validValue"
        :label-top="textareaTopLabel"
        variant="success"
        message="Textarea is valid"
      />
      <it-textarea
        v-model="warningValue"
        :label-top="textareaTopLabel"
        variant="warning"
        message="Text has typos"
      />
      <it-textarea
        v-model="dangerValue"
        :label-top="textareaTopLabel"
        variant="danger"
        message="Validation error"
      />
    </Box>
    <Box :template="disabledCode" title="Disabled">
      <it-textarea
        v-model="disabledValue"
        :label-top="textareaTopLabel"
        message="I'm disabled"
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
    validValue: 'This textarea is valid',
    warningValue: 'Weclome everyone',
    dangerValue: 'Invalid value',
    textareaResizeWrite: false,
    mask: false,

    variantsCode: `<it-textarea
  v-model="validValue"
  label-top="Your textarea"
  ||| variant="success" |||
  message="Textarea is valid"
/>
<it-textarea
  v-model="warningValue"
  label-top="Your textarea"
  ||| variant="warning" |||
  message="Text has typos"
/>
<it-textarea
  v-model="dangerValue"
  label-top="Your textarea"
  ||| variant="danger" |||
  message="Validation error"
/>`,
    disabledCode: `<it-textarea v-model="disabledValue" ||| disabled ||| />`,

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
