<template>
  <div>
    <h1>Icon</h1>
    <p style="margin-bottom: 10px;">Equal UI uses <a href="https://material.io/resources/icons/?style=baseline" target="_blank" rel="noopener noreferrer">Material icons</a> as a default icons library</p>
    <Demobox>
      <it-icon :style="{padding: iconBoxPadding + 'px', fontSize: iconSize + 'px', borderRadius: iconBoxRadius + 'px'}" :box="iconBox" :box-color="iconBoxColor" :name="iconName" :outlined="iconOutlined" :color="iconColor" />

      <template slot="props">
        <it-input v-model="iconName" labelTop="Icon name" />
        <it-input type="color" v-model="iconColor" labelTop="Icon color" />
        <it-slider :min="10" :max="30" v-model="iconSize" labelTop="Icon size" />
        <it-checkbox style="margin: 0px !important" label="Outline" v-model="iconOutlined" />
        <it-divider style="margin: 20x 0 !important" />
        <it-checkbox label="Box" v-model="iconBox" />
        <it-input :disabled="!iconBox" type="color" v-model="iconBoxColor" labelTop="Icon box color" />
        <it-slider :disabled="!iconBox" :min="0" :max="30" v-model="iconBoxPadding" labelTop="Icon box padding" />
        <it-slider :disabled="!iconBox" :min="0" :max="50" v-model="iconBoxRadius" labelTop="Icon box border-radius" />
      </template>
    </Demobox>
    <Box :code="codeBox" title="Box">
      <it-icon box box-color="#3051ff" color="#fff" name="info" />
      <it-icon box box-color="#07d85b" color="#fff" name="room" />
      <it-icon box box-color="#ff45c0" color="#fff" name="favorite" />
    </Box>
    <Box :code="codeOutlined" title="Outlined">
      <it-icon name="face" outlined />
      <it-icon name="label" outlined />
      <it-icon name="feedback" outlined />
    </Box>
    <Box :code="codeColor" title="Color">
      <it-icon name="face" color="#3051FF" />
      <it-icon name="label" color="#000" />
      <it-icon name="feedback" color="#0ad85b" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import PropsTable from '~/components/Table.vue'
import Box from '~/components/Box.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class IconPage extends Vue {
  public iconColor: string = '#000000'
  public iconName: string = 'face'
  public iconOutlined: boolean = false
  public iconBox: boolean = false
  public iconBoxColor: string = '#ffed17'
  public iconBoxPadding: number = 8
  public iconSize: number = 20
  public iconBoxRadius: number = 5

  public codeBox = `<it-icon box box-color="#3051ff" color="#fff" name="info" />
<it-icon box box-color="#07d85b" color="#fff" name="room" />
<it-icon box box-color="#ff45c0" color="#fff" name="favorite" />`

  public codeOutlined = `<it-icon name="face" outlined />
<it-icon name="label" outlined />
<it-icon name="feedback" outlined />`

  public codeColor = `<it-icon name="face" color="#3051FF" />
<it-icon name="label" color="#000" />
<it-icon name="feedback" color="#0ad85b" />`

  public dataSheet = [
    {
      property: 'name',
      type: ['String'],
      default: '',
      values: ['Material Icon'],
      description: 'Name of the Material Icon'
    },
    {
      property: 'outlined',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes icon outlined'
    },
    {
      property: 'color',
      type: ['String'],
      default: '#000000',
      values: ['color value'],
      description: 'Color of the icon'
    }
  ]
}
</script>
