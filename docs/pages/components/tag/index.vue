<template>
  <div>
    <h1>Tag</h1>

    <Demobox>
      <it-tag :filled="tagFilled" :closable="tagClosable" :type="tagType">
        <span>{{tagText}}</span>
      </it-tag>

      <template slot="props">
        <it-select placeholder="Select type" labelTop="Tag type" v-model="tagType">
          <it-select-option
            style="text-transform: capitalize;"
            :key="type"
            v-for="type in tagTypes"
            :value="type"
          >{{type}}</it-select-option>
        </it-select>
        <it-input v-model="tagText" labelTop="Tag text" />
        <it-checkbox label="Filled" v-model="tagFilled" />
        <it-checkbox label="Closable" v-model="tagClosable" />
      </template>
    </Demobox>
    <Box :code="typesCode" title="Types">
      <it-tag>Neutral</it-tag>
      <it-tag type="primary">Primary</it-tag>
      <it-tag type="success">Success</it-tag>
      <it-tag type="danger">Danger</it-tag>
      <it-tag type="warning">Warning</it-tag>
      <it-tag type="black">Black</it-tag>
    </Box>
    <Box :code="filledCode" title="Filled">
      <it-tag>Neutral</it-tag>
      <it-tag type="primary" filled>Primary</it-tag>
      <it-tag type="success" filled>Success</it-tag>
      <it-tag type="danger" filled>Danger</it-tag>
      <it-tag type="warning" filled>Warning</it-tag>
      <it-tag type="black" filled>Black</it-tag>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox, Box, PropsTable }
})
export default class SliderPage extends Vue {
  public tagText: string = 'Tag'
  public tagClosable: boolean = false
  public tagFilled: boolean = false
  public tagType: string = 'neutral'
  public tagTypes: string[] = [
    'primary',
    'success',
    'danger',
    'warning',
    'black',
    'neutral'
  ]

  public typesCode = `<it-tag>Neutral</it-tag>
<it-tag type="primary">Primary</it-tag>
<it-tag type="success">Success</it-tag>
<it-tag type="danger">Danger</it-tag>
<it-tag type="warning">Warning</it-tag>
<it-tag type="black">Black</it-tag>`

  public filledCode = `<it-tag>Neutral</it-tag>
<it-tag type="primary" filled >Primary</it-tag>
<it-tag type="success" filled >Success</it-tag>
<it-tag type="danger" filled >Danger</it-tag>
<it-tag type="warning" filled >Warning</it-tag>
<it-tag type="black" filled >Black</it-tag>
`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'neutral',
      values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
      description: 'Type of the tag'
    },
    {
      property: 'filled',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes tag filled'
    },
    {
      property: 'closable',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes tag closable'
    }
  ]
}
</script>

<style lang="less">
</style>