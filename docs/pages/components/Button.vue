<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Button</h1>

    <Demobox
      source-url="https://github.com/Equal-UI/Equal/tree/master/src/components/button/ItButton.vue"
      name="it-button"
    >
      <it-button
        :variant="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :loading="buttonLoading"
        :disabled="buttonDisabled"
        :size="buttonSize"
      >
        {{ buttonText }}
      </it-button>
      <template #props>
        <it-select
          v-model="buttonType"
          placeholder="Select type"
          label-top="Button variant"
          :options="buttonTypes"
        />
        <it-toggle
          v-model="buttonSize"
          class="my-4"
          :options="['small', 'normal', 'big']"
        />
        <it-input v-model="buttonText" label-top="Button text" />
        <it-checkbox
          variant="primary"
          v-model="buttonOutlined"
          label="Outline"
        />
        <it-checkbox variant="primary" v-model="buttonRound" label="Round" />
        <!-- <it-checkbox variant="primary" v-model="buttonIcon" label="Icon" /> -->
        <it-checkbox
          variant="primary"
          v-model="buttonLoading"
          label="Loading"
        />
        <it-checkbox
          variant="primary"
          v-model="buttonDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>

    <Box :code="codeType" title="Variants">
      <it-button>Button</it-button>
      <it-button variant="primary">Button</it-button>
      <it-button variant="success">Button</it-button>
      <it-button variant="danger">Button</it-button>
      <it-button variant="warning">Button</it-button>
    </Box>
    <Box :code="codeOutline" title="Outline">
      <it-button variant="primary" outlined>Button</it-button>
      <it-button variant="success" outlined>Button</it-button>
      <it-button variant="danger" outlined>Button</it-button>
      <it-button variant="warning" outlined>Button</it-button>
    </Box>
    <Box :code="codeText" title="Text variant">
      <it-button variant="text">Button</it-button>
      <it-button variant="primary-text">Button</it-button>
      <it-button variant="success-text">Button</it-button>
      <it-button variant="danger-text">Button</it-button>
      <it-button variant="warning-text">Button</it-button>
    </Box>
    <Box :code="codeRound" title="Round">
      <it-button round>Button</it-button>
      <it-button variant="primary" round>Button</it-button>
      <it-button variant="success" round>Button</it-button>
      <it-button variant="danger" round>Button</it-button>
      <it-button variant="warning" round>Button</it-button>
    </Box>
    <Box :code="codeSize" title="Size">
      <it-button size="small">Button</it-button>
      <it-button size="normal">Button</it-button>
      <it-button size="big">Button</it-button>
    </Box>
    <Box :code="codeIcon" title="With icon">
      <it-button>
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
        Button
      </it-button>
      <it-button>
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
      </it-button>
      <it-button>
        Button
        <template #icon-after>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
      </it-button>
    </Box>
    <Box :code="toggleCode" title="Toggle">
      <it-button
        :variant="following ? 'primary' : 'default'"
        @click="following = !following"
      >
        <template #icon-after>
          <svg
            v-if="following"
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </template>
        {{ following ? 'Following' : 'Follow' }}
      </it-button>
    </Box>
    <Box :code="codeLoading" title="Loading">
      <it-button variant="primary" loading>Loading</it-button>
      <it-button variant="primary" loading outlined>Loading</it-button>
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-button size="small" disabled>Button</it-button>
      <it-button size="normal" disabled>Button</it-button>
      <it-button size="big" disabled>Button</it-button>
    </Box>

    <Box :code="codeGroups" title="Buttons group">
      <it-button-group>
        <it-button>Button</it-button>
        <it-button>Button</it-button>
        <it-button>Button</it-button>
      </it-button-group>

      <it-button-group vertical>
        <it-button>Button</it-button>
        <it-button>Button</it-button>
        <it-button>Button</it-button>
      </it-button-group>

      <it-button-group>
        <it-button variant="primary" outlined>Button</it-button>
        <it-button variant="primary" outlined>Button</it-button>
        <it-button variant="primary" outlined>Button</it-button>
      </it-button-group>

      <it-button-group vertical>
        <it-button variant="primary" outlined>Button</it-button>
        <it-button variant="primary" outlined>Button</it-button>
        <it-button variant="primary" outlined>Button</it-button>
      </it-button-group>
    </Box>

    <props-table tag-name="it-button" :data-sheet="dataSheet" />
    <props-table tag-name="it-button-group" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    buttonText: 'Button',
    buttonOutlined: false,
    buttonRound: false,
    buttonDisabled: false,
    buttonLoading: false,
    following: false,
    buttonType: 'primary',
    buttonSize: 'normal',
    buttonTypes: [
      'default',
      'primary',
      'success',
      'danger',
      'warning',
      'text',
      'primary-text',
      'success-text',
      'danger-text',
      'warning-text',
    ],

    codeGroups: `<it-button-group>
  <it-button>Button</it-button>
  <it-button>Button</it-button>
  <it-button>Button</it-button>
</it-button-group>

<it-button-group vertical>
  <it-button>Button</it-button>
  <it-button>Button</it-button>
  <it-button>Button</it-button>
</it-button-group>

<it-button-group>
  <it-button variant="primary" outlined>Button</it-button>
  <it-button variant="primary" outlined>Button</it-button>
  <it-button variant="primary" outlined>Button</it-button>
</it-button-group>

<it-button-group vertical>
  <it-button variant="primary" outlined>Button</it-button>
  <it-button variant="primary" outlined>Button</it-button>
  <it-button variant="primary" outlined>Button</it-button>
</it-button-group>`,

    codeType: `<it-button>Button</it-button>
<it-button ||| variant="primary" ||| >Button</it-button>
<it-button ||| variant="success" ||| >Button</it-button>
<it-button ||| variant="danger" ||| > Button</it-button>
<it-button ||| variant="warning" ||| >Button</it-button>
`,
    codeSize: `<it-button ||| size="small" |||>Button</it-button>
<it-button ||| size="normal" |||>Button</it-button>
<it-button ||| size="big" |||>Button</it-button>`,

    codeOutline: `<it-button variant="primary" ||| outlined |||>Button</it-button>
<it-button variant="success" ||| outlined |||>Button</it-button>
<it-button variant="danger" ||| outlined |||>Button</it-button>
<it-button variant="warning" ||| outlined |||>Button</it-button>`,

    codeRound: `<it-button ||| round |||>Button</it-button>
<it-button variant="primary" ||| round |||>Button</it-button>
<it-button variant="success" ||| round |||>Button</it-button>
<it-button variant="danger" ||| round |||>Button</it-button>
<it-button variant="warning" ||| round |||>Button</it-button>`,

    codeIcon: `<it-button>
  ||| <template #icon></template> ||| Button
</it-button>
<it-button>
  ||| <template #icon></template> ||| 
</it-button>
<it-button>
  ||| <template #icon-after></template> ||| 
</it-button>`,

    toggleCode: `<it-button
  @click="following = !following"
  :variant="following ? 'primary' : 'default'"
  >{{ following ? 'Following' : 'Follow' }}</it-button>`,

    codeLoading: `<it-button variant="primary" ||| loading |||>Loading</it-button>
<it-button variant="primary" ||| loading ||| outlined>Loading</it-button>`,

    codePulse: `<it-button variant="primary" pulse>Look at me</it-button>
<it-button variant="primary" pulse outlined>Look at me</it-button>`,

    codeDisabled: `<it-button size="small" ||| disabled |||>Button</it-button>
<it-button size="normal" ||| disabled |||>Button</it-button>
<it-button size="big" ||| disabled |||>Button</it-button>`,

    codeText: `<it-button ||| variant="text" |||>Button</it-button>
<it-button ||| variant="primary-text" |||>Button</it-button>
<it-button ||| variant="success-text" |||>Button</it-button>
<it-button ||| variant="danger-text" |||>Button</it-button>
<it-button ||| variant="warning-text" |||>Button</it-button>`,

    dataSheetGroup: [
      {
        property: 'vertical',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Make group vertical',
      },
    ],

    dataSheet: [
      {
        property: 'Variant',
        type: ['String'],
        default: 'default',
        values: [
          'primary',
          'success',
          'danger',
          'warning',
          'default',
          'text',
          'primary-text',
          'success-text',
          'danger-text',
          'warning-text',
        ],
        description: 'Variant of the button',
      },
      {
        property: 'outlined',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button outlined',
      },
      {
        property: 'round',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button rounded',
      },
      {
        property: 'size',
        type: ['String'],
        default: 'normal',
        values: ['small', 'normal', 'big'],
        description: 'Size of the button',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '',
        values: ['material-icon'],
        description: 'Add material-icon with provided name',
      },
      {
        property: 'loading',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Shows loading spinner',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button disabled',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Add pulse to the element',
      },
    ],
  }),
})
</script>
