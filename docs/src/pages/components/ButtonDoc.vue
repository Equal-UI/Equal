<template>
  <div>
    <h1>Button</h1>

    <Demobox>
      <it-button
        :type="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :pulse="buttonPulse"
        :loading="buttonLoading"
        :disabled="buttonDisabled"
        :icon="buttonIconValue"
        :block="buttonBlock"
        >{{ buttonText }}</it-button
      >
      <template #props>
        <it-select
          v-model="buttonType"
          placeholder="Select type"
          label-top="Button type"
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
    <Box :code="codeType" title="Type">
      <it-button>Button</it-button>
      <it-button type="primary">Button</it-button>
      <it-button type="success">Button</it-button>
      <it-button type="danger">Button</it-button>
      <it-button type="warning">Button</it-button>
      <it-button type="black">Button</it-button>
    </Box>
    <Box :code="codeOutline" title="Outline">
      <it-button type="primary" outlined>Button</it-button>
      <it-button type="success" outlined>Button</it-button>
      <it-button type="danger" outlined>Button</it-button>
      <it-button type="warning" outlined>Button</it-button>
      <it-button type="black" outlined>Button</it-button>
    </Box>
    <Box :code="codeText" title="Text type">
      <it-button text>Button</it-button>
      <it-button type="primary" text>Button</it-button>
      <it-button type="success" text>Button</it-button>
      <it-button type="danger" text>Button</it-button>
      <it-button type="warning" text>Button</it-button>
    </Box>
    <Box :code="codeRound" title="Round">
      <it-button round>Button</it-button>
      <it-button type="primary" round>Button</it-button>
      <it-button type="success" round>Button</it-button>
      <it-button type="danger" round>Button</it-button>
      <it-button type="warning" round>Button</it-button>
      <it-button type="black" round>Button</it-button>
    </Box>
    <Box :code="codeBlock" title="Block">
      <it-button block>Button</it-button>
      <br />
      <it-button class="ml-0" type="primary" block>Button</it-button>
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
        :type="following ? 'primary' : 'neutral'"
        @click="following = !following"
        >{{ following ? 'Following' : 'Follow' }}</it-button
      >
    </Box>
    <Box :code="codeLoading" title="Loading">
      <it-button type="primary" loading>Loading</it-button>
      <it-button type="primary" loading outlined>Loading</it-button>
    </Box>
    <Box :code="codePulse" title="Pulse">
      <template #description>
        <p class="mx-6">Pulse helps you to catch user's attention</p>
      </template>
      <it-button type="primary" pulse>Look at me</it-button>
      <it-button type="primary" pulse outlined>Look at me</it-button>
    </Box>
    <Box :code="codeDisabled" title="Disabled">
      <it-button size="small" disabled>Button</it-button>
      <it-button size="normal" disabled>Button</it-button>
      <it-button size="big" disabled>Button</it-button>
    </Box>
    <Box :code="codeGroup" title="Group">
      <div class="margins">
        <it-button-group>
          <it-button>Left</it-button>
          <it-button>Middle</it-button>
          <it-button>Right</it-button>
        </it-button-group>
        <it-button-group>
          <it-button type="primary" outlined>Left</it-button>
          <it-button type="primary" outlined>Middle</it-button>
          <it-button type="primary" outlined>Right</it-button>
        </it-button-group>
      </div>
    </Box>

    <Box :code="codeVerticalGroup" title="Vertical group">
      <div class="margins">
        <it-button-group vertical>
          <it-button>Top</it-button>
          <it-button>Middle</it-button>
          <it-button>Bottom</it-button>
        </it-button-group>
        <it-button-group vertical>
          <it-button type="primary" outlined>Top</it-button>
          <it-button type="primary" outlined>Middle</it-button>
          <it-button type="primary" outlined>Bottom</it-button>
        </it-button-group>
      </div>
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
    buttonTypes: [
      'neutral',
      'primary',
      'success',
      'danger',
      'warning',
      'black',
    ],
    buttonIcon: false,

    codeType: `<it-button>Button</it-button>
<it-button type="primary">Button</it-button>
<it-button type="success">Button</it-button>
<it-button type="danger">Button</it-button>
<it-button type="warning">Button</it-button>
<it-button type="black">Button</it-button>
`,
    codeSize: `<it-button size="small">Button</it-button>
<it-button size="normal">Button</it-button>
<it-button size="big">Button</it-button>`,

    codeOutline: `<it-button type="primary" outlined>Button</it-button>
<it-button type="success" outlined>Button</it-button>
<it-button type="danger" outlined>Button</it-button>
<it-button type="warning" outlined>Button</it-button>
<it-button type="black" outlined>Button</it-button>`,

    codeRound: `<it-button round>Button</it-button>
<it-button type="primary" round>Button</it-button>
<it-button type="success" round>Button</it-button>
<it-button type="danger" round>Button</it-button>
<it-button type="warning" round>Button</it-button>
<it-button type="black" round>Button</it-button>`,

    codeIcon: `<it-button icon="face">Button</it-button>
<it-button icon="face" />
<it-button icon="face" iconAfter>Button</it-button>`,

    toggleCode: `<it-button
  @click="following = !following"
  :icon="following ? 'done' : 'person'"
  :type="following ? 'primary' : 'neutral'"
  >{{ following ? 'Following' : 'Follow' }}</it-button>`,

    codeLoading: `<it-button type="primary" loading>Loading</it-button>
<it-button type="primary" loading outlined>Loading</it-button>`,

    codePulse: `<it-button type="primary" pulse>Look at me</it-button>
<it-button type="primary" pulse outlined>Look at me</it-button>`,

    codeDisabled: `<it-button size="small" disabled>Button</it-button>
<it-button size="normal" disabled>Button</it-button>
<it-button size="big" disabled>Button</it-button>`,

    codeBlock: `<it-button block>Button</it-button>
<it-button type="primary" block>Button</it-button>`,

    codeGroup: `<it-button-group>
  <it-button>Left</it-button>
  <it-button>Middle</it-button>
  <it-button>Right</it-button>
</it-button-group>
<it-button-group>
  <it-button type="primary" outlined>Left</it-button>
  <it-button type="primary" outlined>Middle</it-button>
  <it-button type="primary" outlined>Right</it-button>
</it-button-group>`,

    codeVerticalGroup: `<it-button-group vertical>
  <it-button>Left</it-button>
  <it-button>Middle</it-button>
  <it-button>Right</it-button>
</it-button-group>
<it-button-group vertical>
  <it-button type="primary" outlined>Left</it-button>
  <it-button type="primary" outlined>Middle</it-button>
  <it-button type="primary" outlined>Right</it-button>
</it-button-group>`,

    codeText: `<it-button text>Button</it-button>
<it-button type="primary" text>Button</it-button>
<it-button type="success" text>Button</it-button>
<it-button type="danger" text>Button</it-button>
<it-button type="warning" text>Button</it-button>`,

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
        property: 'type',
        type: ['String'],
        default: 'neutral',
        values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
        description: 'Type of the button',
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

  // mounted() {
  //   console.log(this.$route)
  // }
})
</script>
