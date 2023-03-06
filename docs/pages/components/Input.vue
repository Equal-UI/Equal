<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Input</h1>

    <Demobox name="ItInput">
      <div class="w-2/4">
        <it-input
          v-model="inputValue"
          :placeholder="inputPlaceholder"
          :label-top="inputTopLabel"
          :disabled="inputDisabled"
          :message="inputMessageText"
          :variant="inputStatus"
          :mask="inputMask"
        />
      </div>

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
        ></it-select>
        <it-checkbox
          variant="primary"
          v-model="inputMask"
          label="Mask"
          subLabel="Focus on the input to see the mask"
        />
        <it-checkbox
          variant="primary"
          v-model="inputDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>
    <Box :template="codeStatus" title="Status">
      <it-input v-model="statusValue" variant="success" message="Success" />
      <it-input v-model="statusValue" variant="danger" message="Danger" />
      <it-input v-model="statusValue" variant="warning" message="Warning" />
    </Box>
    <Box :template="codeIcon" title="With icons">
      <it-input v-model="inputValue">
        <template #prefixIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </template>
      </it-input>
      <it-input v-model="inputValue">
        <template #prefixIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </template>
        <template #suffixIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </template>
      </it-input>
      <it-input v-model="inputValue">
        <template #suffixIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </template>
      </it-input>
    </Box>
    <Box :template="codeSuffix" title="Prefix / suffix">
      <it-input v-model="inputValue" prefix="https://" />
      <it-input v-model="inputValue" suffix=".com" />
      <it-input v-model="inputValue" prefix="https://" suffix=".com" />
    </Box>
    <Box :template="codeMask" title="Masked">
      <it-input
        v-model="inputValue"
        label-top="Click me"
        placeholder="I feel darkness"
        mask
      />
    </Box>
    <Box :template="codeDisabled" title="Disabled">
      <it-input
        v-model="inputDisabledValue"
        message="I'm disabled"
        label-top="Disabled"
        disabled
      />
    </Box>
    <props-table :data-sheet="dataSheet" :slot-sheet="slotSheet" />
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

    codeStatus: `<it-input v-model="statusValue" ||| variant="success" ||| message="Success"/>
<it-input v-model="statusValue" ||| variant="danger" ||| message="Danger"/>
<it-input v-model="statusValue" ||| variant="warning" ||| message="Warning"/>`,

    codeSuffix: `<it-input ||| prefix="https://" ||| v-model="inputValue" />
<it-input ||| suffix=".com" ||| v-model="inputValue" />
<it-input ||| prefix="https://" suffix=".com" ||| v-model="inputValue" />`,

    slotSheet: [
      {
        name: 'prefixIcon',
        description: 'Icon on the left side',
      },
      {
        name: 'suffixIcon',
        description: 'Icon on the right side',
      },
    ],

    dataSheet: [
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
