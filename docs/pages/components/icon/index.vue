<template>
  <div>
    <h1>Icon</h1>

    <Demobox>
      <it-icon :name="iconName" :outlined="iconOutlined" :color="iconColor" />

      <template slot="props">
        <it-input v-model="iconName" labelTop="Icon name" />
        <it-input v-model="iconColor" labelTop="Icon color" />
        <it-checkbox label="Outline" v-model="iconOutlined" />
      </template>
    </Demobox>
    <Box :code="codeOutlined" title="Outlined">
      <it-icon name="face" :outlined="true" />
      <it-icon name="label" :outlined="true" />
      <it-icon name="feedback" :outlined="true" />
    </Box>
    <Box :code="codeColor" title="Color">
      <it-icon name="face" color="#3051FF" />
      <it-icon name="label" color="#3051FF" />
      <it-icon name="feedback" color="#3051FF" />
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
  iconColor: string = '#000000'
  iconName: string = 'face'
  iconOutlined: boolean = false

  codeOutlined = 
  `<it-icon name="face" :outlined="true" />
<it-icon name="label" :outlined="true" />
<it-icon name="feedback" :outlined="true" />`

  codeColor = 
`<it-icon name="face" color="#3051FF" />
<it-icon name="label" color="#3051FF" />
<it-icon name="feedback" color="#3051FF" />`

  dataSheet = [
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
