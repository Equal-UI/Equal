<template>
  <div>
    <h1>Input</h1>

    <Demobox name="it-input">
      <it-input
        v-model="inputValue"
        :placeholder="inputPlaceholder"
        :label-top="inputTopLabel"
        :disabled="inputDisabled"
        :message="inputMessageText"
        :variant="inputStatus"
        :mask="inputMask"
      />

      <template #props>
        <it-input v-model="inputPlaceholder" label-top="Input placeholder" />
        <it-input v-model="inputTopLabel" label-top="Top label" />
        <it-input
          v-model="inputMessageText"
          placeholder="Write something"
          label-top="Message text"
        />
        <it-select
          v-model="inputStatus"
          placeholder="Select variant"
          label-top="Variant"
          :options="statuses"
        >
        </it-select>
        <it-checkbox v-model="inputMask" label="Mask" />
        <it-checkbox v-model="inputDisabled" label="Disabled" />
      </template>
    </Demobox>
    <Box :code="codeStatus" title="Status">
      <it-input v-model="statusValue" variant="success" message="Success" />
      <it-input v-model="statusValue" variant="danger" message="Danger" />
      <it-input v-model="statusValue" variant="warning" message="Warning" />
    </Box>
    <Box :code="codeIcon" title="With icons">
      <it-input v-model="inputValue" suffix-icon="remove_red_eye" />
      <it-input v-model="inputValue" prefix-icon="cloud_queue" />
      <it-input
        v-model="inputValue"
        suffix-icon="remove_red_eye"
        prefix-icon="cloud_queue"
      />
    </Box>
    <Box :code="codeSuffix" title="Prefix / suffix">
      <it-input v-model="inputValue" prefix="https://" />
      <it-input v-model="inputValue" suffix=".com" />
      <it-input v-model="inputValue" prefix="https://" suffix=".com" />
    </Box>
    <Box :code="codeMask" title="Masked">
      <it-input
        v-model="inputValue"
        label-top="Click me"
        placeholder="I feel darkness"
        mask
      />
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-input
        v-model="inputDisabledValue"
        message="I'm disabled"
        label-top="Disabled"
        disabled
      />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    inputPlaceholder: 'Your placeholder',
    inputValue: '',
    inputTopLabel: 'Your input',
    statusValue: 'Hello there',
    inputDisabledValue: 'Disabled input',
    inputMessageText: '',
    inputDisabled: false,
    inputStatus: 'default',
    inputMask: false,
    statuses: ['default', 'success', 'danger', 'warning'],

    codeDisabled: `<it-input v-model="inputValue" ||| disabled |||/>`,

    codeMask: `<it-input v-model="inputValue" label-top="Click me" placeholder="I feel darkness" ||| mask |||/>`,

    codeIcon: `<it-input v-model="inputValue" ||| suffix-icon="remove_red_eye" |||/>
<it-input v-model="inputValue" ||| prefix-icon="cloud_queue" |||/>
<it-input v-model="inputValue" ||| suffix-icon="remove_red_eye" prefix-icon="cloud_queue" |||/>`,

    codeStatus: `<it-input v-model="statusValue" ||| status="success" ||| message="Success"/>
<it-input v-model="statusValue" ||| status="danger" ||| message="Danger"/>
<it-input v-model="statusValue" ||| status="warning" ||| message="Warning"/>`,

    codeSuffix: `<it-input ||| prefix="https://" ||| v-model="inputValue" />
<it-input ||| suffix=".com" ||| v-model="inputValue" />
<it-input ||| prefix="https://" suffix=".com" ||| v-model="inputValue" />`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'text',
        values: ['text', 'password'],
        description: 'Type of the input',
      },
      {
        property: 'placeholder',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Placeholder of the input',
      },
      {
        property: 'label-top',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Label of the input',
      },
      {
        property: 'message',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Message under input',
      },
      {
        property: 'prefix-icon',
        type: ['String'],
        default: '-',
        values: ['Material Icon'],
        description: 'Icon on the left side',
      },
      {
        property: 'suffix-icon',
        type: ['String'],
        default: '-',
        values: ['Material Icon'],
        description: 'Icon on the right side',
      },
      {
        property: 'prefix',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Left side prefix',
      },
      {
        property: 'suffix',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Right side suffix',
      },
      {
        property: 'mask',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Shows background mask when component is focused',
      },
      {
        property: 'value (v-model)',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Value',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes input disabled',
      },
    ],
  }),
})
</script>
