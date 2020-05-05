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
      >{{buttonText}}</it-button>
      <template slot="props">
        <it-select placeholder="Select type" labelTop="Button type" v-model="buttonType">
          <it-select-option
            style="text-transform: capitalize;"
            :key="type"
            v-for="type in buttonTypes"
            :value="type"
          >{{type}}</it-select-option>
        </it-select>
        <it-input v-model="buttonText" labelTop="Button text" />
        <it-checkbox label="Outline" v-model="buttonOutlined" />
        <it-checkbox label="Round" v-model="buttonRound" />
        <it-checkbox label="Icon" v-model="buttonIcon" />
        <it-checkbox label="Loading" v-model="buttonLoading" />
        <it-checkbox label="Pulse" v-model="buttonPulse" />
        <it-checkbox label="Block" v-model="buttonBlock" />
        <it-checkbox label="Disabled" v-model="buttonDisabled" />
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
      <it-button style="margin-left:0" type="primary" block>Button</it-button>
    </Box>
    <Box :code="codeSize" title="Size">
      <it-button size="small">Button</it-button>
      <it-button size="normal">Button</it-button>
      <it-button size="big">Button</it-button>
    </Box>
    <Box :code="codeIcon" title="With icon">
      <it-button icon="face">Button</it-button>
      <it-button icon="face" />
      <it-button icon="face" iconAfter>Button</it-button>
    </Box>
    <Box :code="codeLoading" title="Loading">
      <it-button type="primary" loading>Loading</it-button>
      <it-button type="primary" loading outlined>Loading</it-button>
    </Box>
    <Box :code="codePulse" title="Pulse">
      <p slot="description" style="padding: 0px 24px;">Pulse helps you to catch user's attention</p>
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

    <props-table tagName="it-button" :data-sheet="dataSheet" />
    <props-table tagName="it-button-group" :data-sheet="dataSheetGroup" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'
import Component from 'nuxt-class-component'
import { Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class ButtonPage extends Vue {
  public buttonText = 'Button'
  public buttonOutlined = false
  public buttonRound = false
  public buttonDisabled = false
  public buttonLoading = false
  public buttonPulse = false
  public buttonBlock = false
  public buttonType = 'primary'
  public buttonTypes = [
    'neutral',
    'primary',
    'success',
    'danger',
    'warning',
    'black'
  ]
  public buttonIcon = false

  public codeType = `<it-button>Button</it-button>
<it-button type="primary">Button</it-button>
<it-button type="success">Button</it-button>
<it-button type="danger">Button</it-button>
<it-button type="warning">Button</it-button>
<it-button type="black">Button</it-button>
`
  public codeSize = `<it-button size="small">Button</it-button>
<it-button size="normal">Button</it-button>
<it-button size="big">Button</it-button>`

  public codeOutline = `<it-button type="primary" outlined>Button</it-button>
<it-button type="success" outlined>Button</it-button>
<it-button type="danger" outlined>Button</it-button>
<it-button type="warning" outlined>Button</it-button>
<it-button type="black" outlined>Button</it-button>`

  public codeRound = `<it-button round>Button</it-button>
<it-button type="primary" round>Button</it-button>
<it-button type="success" round>Button</it-button>
<it-button type="danger" round>Button</it-button>
<it-button type="warning" round>Button</it-button>
<it-button type="black" round>Button</it-button>`

  public codeIcon = `<it-button icon="face">Button</it-button>
<it-button icon="face" />
<it-button icon="face" iconAfter>Button</it-button>`

  public codeLoading = `<it-button type="primary" loading>Loading</it-button>
<it-button type="primary" loading outlined>Loading</it-button>`

  public codePulse = `<it-button type="primary" pulse>Look at me</it-button>
<it-button type="primary" pulse outlined>Look at me</it-button>`

  public codeDisabled = `<it-button size="small" disabled>Button</it-button>
<it-button size="normal" disabled>Button</it-button>
<it-button size="big" disabled>Button</it-button>`

  public codeBlock = `<it-button block>Button</it-button>
<it-button type="primary" block>Button</it-button>`

  public codeGroup = `<it-button-group>
  <it-button>Left</it-button>
  <it-button>Middle</it-button>
  <it-button>Right</it-button>
</it-button-group>
<it-button-group>
  <it-button type="primary" outlined>Left</it-button>
  <it-button type="primary" outlined>Middle</it-button>
  <it-button type="primary" outlined>Right</it-button>
</it-button-group>`

  public codeVerticalGroup = `<it-button-group vertical>
  <it-button>Left</it-button>
  <it-button>Middle</it-button>
  <it-button>Right</it-button>
</it-button-group>
<it-button-group vertical>
  <it-button type="primary" outlined>Left</it-button>
  <it-button type="primary" outlined>Middle</it-button>
  <it-button type="primary" outlined>Right</it-button>
</it-button-group>`

  public codeText = `<it-button text>Button</it-button>
<it-button type="primary" text>Button</it-button>
<it-button type="success" text>Button</it-button>
<it-button type="danger" text>Button</it-button>
<it-button type="warning" text>Button</it-button>`

  public dataSheetGroup = [
    {
      property: 'vertical',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Make group vertical'
    }
  ]

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
      description: 'Type of the button'
    },
    {
      property: 'outlined',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes button outlined'
    },
    {
      property: 'round',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes button rounded'
    },
    {
      property: 'size',
      type: ['String'],
      default: 'normal',
      values: ['small', 'normal', 'big'],
      description: 'Size of the button'
    },
    {
      property: 'icon',
      type: ['String'],
      default: '',
      values: ['material-icon'],
      description: 'Add material-icon with provided name'
    },
    {
      property: 'loading',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Shows loading spinner'
    },
    {
      property: 'block',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes button fit parent width'
    },
    {
      property: 'disabled',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes button disabled'
    },
    {
      property: 'pulse',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Add pulse to the element'
    }
  ]
  get buttonIconValue() {
    return this.buttonIcon ? 'favorite' : null
  }

  // mounted() {
  //   console.log(this.$route)
  // }
}
</script>

