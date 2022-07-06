<template>
  <div>
    <h1>Button</h1>

    <Demobox name="it-button">
      <it-button
        :variant="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :pulse="buttonPulse"
        :loading="buttonLoading"
        :disabled="buttonDisabled"
        :icon="buttonIconValue"
        :block="buttonBlock"
        :size="buttonSize"
        >{{ buttonText }}</it-button
      >
      <template #props>
        <it-select
          v-model="buttonType"
          placeholder="Select type"
          label-top="Button variant"
          :options="buttonTypes"
        >
        </it-select>
        <it-input v-model="buttonText" label-top="Button text" />
        <it-checkbox v-model="buttonOutlined" label="Outline" />
        <it-checkbox v-model="buttonRound" label="Round" />
        <it-checkbox v-model="buttonIcon" label="Icon" />
        <it-checkbox v-model="buttonLoading" label="Loading" />
        <it-checkbox v-model="buttonPulse" label="Pulse" />
        <it-checkbox v-model="buttonBlock" label="Block" />
        <it-checkbox v-model="buttonDisabled" label="Disabled" />
      </template>
    </Demobox>
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
    <Box :code="codeBlock" title="Block">
      <it-button class="w-full">Button</it-button>
      <it-button class="w-full" variant="primary" block>Button</it-button>
    </Box>
    <Box :code="codeSize" title="Size">
      <it-button size="small">Button</it-button>
      <it-button size="normal">Button</it-button>
      <it-button size="big">Button</it-button>
    </Box>
    <Box :code="codeIcon" title="With icon">
      <it-button icon="face">Button</it-button>
      <it-button icon="face" />
      <it-button icon="face" icon-after>Button</it-button>
    </Box>
    <Box :code="toggleCode" title="Toggle">
      <it-button
        :icon="following ? 'done' : 'person'"
        :variant="following ? 'primary' : 'neutral'"
        @click="following = !following"
        >{{ following ? 'Following' : 'Follow' }}</it-button
      >
    </Box>
    <Box :code="codeLoading" title="Loading">
      <it-button variant="primary" loading>Loading</it-button>
      <it-button variant="primary" loading outlined>Loading</it-button>
    </Box>
    <Box :code="codePulse" title="Pulse">
      <template #description>
        <p class="mx-6">Pulse helps you to catch user's attention</p>
      </template>
      <it-button variant="primary" pulse>Look at me</it-button>
      <it-button variant="primary" pulse outlined>Look at me</it-button>
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-button size="small" disabled>Button</it-button>
      <it-button size="normal" disabled>Button</it-button>
      <it-button size="big" disabled>Button</it-button>
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
    buttonPulse: false,
    buttonBlock: false,
    buttonType: 'primary',
    buttonSize: '',
    buttonTypes: ['neutral', 'primary', 'success', 'danger', 'warning'],
    buttonIcon: false,

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

    codeIcon: `<it-button ||| icon="face" |||>Button</it-button>
<it-button ||| icon="face" |||/>
<it-button ||| icon="face" ||| iconAfter>Button</it-button>`,

    toggleCode: `<it-button
  @click="following = !following"
  :icon="following ? 'done' : 'person'"
  :variant="following ? 'primary' : 'neutral'"
  >{{ following ? 'Following' : 'Follow' }}</it-button>`,

    codeLoading: `<it-button variant="primary" ||| loading |||>Loading</it-button>
<it-button variant="primary" ||| loading ||| outlined>Loading</it-button>`,

    codePulse: `<it-button variant="primary" pulse>Look at me</it-button>
<it-button variant="primary" pulse outlined>Look at me</it-button>`,

    codeDisabled: `<it-button size="small" ||| disabled |||>Button</it-button>
<it-button size="normal" ||| disabled |||>Button</it-button>
<it-button size="big" ||| disabled |||>Button</it-button>`,

    codeBlock: `<it-button class="w-full">Button</it-button>
<it-button class="w-full" variant="primary" block>Button</it-button>`,

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
        default: 'neutral',
        values: ['primary', 'success', 'danger', 'warning', 'neutral'],
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
        property: 'block',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes button fit parent width',
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
  computed: {
    buttonIconValue(): string | null {
      return this.buttonIcon ? 'favorite' : null
    },
  },
})
</script>
