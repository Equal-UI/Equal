<template>
  <div>
    <h1>Button</h1>

    <Demobox>
      <it-button
        :type="buttonType"
        :outlined="buttonOutlined"
        :round="buttonRound"
        :pulse="buttonPulse"
        :disabled="buttonDisabled"
        :icon="buttonIconValue"
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
        <it-checkbox label="Pulse" v-model="buttonPulse" />
        <it-checkbox label="Disabled" v-model="buttonDisabled" />
      </template>
    </Demobox>
    <Box :code="codeType" title="Type">
      <it-button type="primary">Button</it-button>
      <it-button type="success">Button</it-button>
      <it-button type="danger">Button</it-button>
      <it-button type="warning">Button</it-button>
      <it-button type="black">Button</it-button>
      <it-button type="neutral">Button</it-button>
    </Box>
    <Box :code="codeOutline" title="Outline">
      <it-button type="primary" outlined>Button</it-button>
      <it-button type="success" outlined>Button</it-button>
      <it-button type="danger" outlined>Button</it-button>
      <it-button type="warning" outlined>Button</it-button>
      <it-button type="black" outlined>Button</it-button>
      <it-button type="neutral" outlined>Button</it-button>
    </Box>
    <Box :code="codeRound" title="Round">
      <it-button type="primary" round>Button</it-button>
      <it-button type="success" round>Button</it-button>
      <it-button type="danger" round>Button</it-button>
      <it-button type="warning" round>Button</it-button>
      <it-button type="black" round>Button</it-button>
      <it-button type="neutral" round>Button</it-button>
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
    <Box :code="codeDisabled" title="Disabled">
      <it-button size="small" disabled>Button</it-button>
      <it-button size="normal" disabled>Button</it-button>
      <it-button size="big" disabled>Button</it-button>
    </Box>

    <props-table :data-sheet="dataSheet" />
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
  buttonText = 'Button'
  buttonOutlined = false
  buttonRound = false
  buttonDisabled = false
  buttonPulse = false
  buttonType = 'primary'
  buttonTypes = ['primary', 'success', 'danger', 'warning', 'black', 'neutral']
  buttonIcon = false

  codeType = `<it-button type="primary">Button</it-button>
<it-button type="success">Button</it-button>
<it-button type="danger">Button</it-button>
<it-button type="warning">Button</it-button>
<it-button type="black">Button</it-button>
<it-button type="neutral">Button</it-button>
`
  codeSize = `<it-button size="small">Button</it-button>
<it-button size="normal">Button</it-button>
<it-button size="big">Button</it-button>`

  codeOutline = `<it-button type="primary" outlined>Button</it-button>
<it-button type="success" outlined>Button</it-button>
<it-button type="danger" outlined>Button</it-button>
<it-button type="warning" outlined>Button</it-button>
<it-button type="black" outlined>Button</it-button>
<it-button type="neutral" outlined>Button</it-button>`

  codeRound = `<it-button type="primary" round>Button</it-button>
<it-button type="success" round>Button</it-button>
<it-button type="danger" round>Button</it-button>
<it-button type="warning" round>Button</it-button>
<it-button type="black" round>Button</it-button>
<it-button type="neutral" round>Button</it-button>`

  codeIcon = `<it-button icon="face">Button</it-button>
<it-button icon="face" />
<it-button icon="face" iconAfter>Button</it-button>`

  codeDisabled = `<it-button size="small" disabled>Button</it-button>
<it-button size="normal" disabled>Button</it-button>
<it-button size="big" disabled>Button</it-button>`

  dataSheet = [
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
      values: [],
      description: 'Add material-icon with provided name'
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
