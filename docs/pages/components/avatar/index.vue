<template>
  <div>
    <h1>Avatar</h1>

    <Demobox>
      <it-avatar
        :text="avatarText ? 'Yan Savinov' : null"
        :src="avatarImage ? 'https://picsum.photos/200' : null"
        :square="avatarSquare"
      ></it-avatar>
      <template slot="props">
        <it-checkbox label="Square" v-model="avatarSquare" />
        <it-checkbox label="Image" v-model="avatarImage" />
        <it-checkbox label="Text" v-model="avatarText" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-avatar />
      <it-avatar square />
    </Box>

    <Box :code="colorCode" title="Color">
      <it-avatar color="#3051ff" />
      <it-avatar color="#f93155" />
      <it-avatar color="#131313" />
    </Box>

    <Box :code="imageCode" title="Image">
      <it-avatar src="https://picsum.photos/200" />
      <it-avatar src="https://picsum.photos/200" square />
    </Box>

    <Box :code="textCode" title="Text">
      <it-avatar color="#3051ff" text="Yan" />
      <it-avatar color="#3051ff" text="Yan Savinov" />
    </Box>

    <Box :code="sizeCode" title="Size">
      <it-avatar />
      <it-avatar size="50px" />
      <it-avatar size="60px" />
      <it-avatar size="70px" />
    </Box>

    <Box :code="badgeCode" title="With badge">
      <it-badge value="1">
        <it-avatar square />
      </it-badge>
      <it-badge point>
        <it-avatar square />
      </it-badge>
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
export default class AvatarPage extends Vue {
  public avatarSquare = false
  public avatarImage = false
  public avatarText = false

  public alertType = 'primary'
  public alertTypes = ['primary', 'success', 'danger', 'warning']

  public typesCode = `<it-avatar />
<it-avatar square />`

  public colorCode = `<it-avatar color="#3051ff" />
<it-avatar color="#f93155" />
<it-avatar color="#131313" />`

  public imageCode = `<it-avatar src="https://picsum.photos/200" />
<it-avatar src="https://picsum.photos/200" square />`

  public textCode = `<it-avatar color="#3051ff" text="Yan" />
<it-avatar color="#3051ff" text="Yan Savinov" />`

  public sizeCode = `<it-avatar />
<it-avatar size="50px" />
<it-avatar size="60px" />
<it-avatar size="70px" />`

badgeCode = 
`<it-badge value="1">
  <it-avatar square />
</it-badge>
<it-badge point>
  <it-avatar square />
</it-badge>`

  public dataSheet = [
    {
      property: 'src',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Src of avatar image'
    },
    {
      property: 'text',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Avatar text'
    },
    {
      property: 'color',
      type: ['String'],
      default: '-',
      values: ['hex', 'rgd', 'hsl'],
      description: 'Avatar color'
    },
    {
      property: 'size',
      type: ['String'],
      default: '40px',
      values: [],
      description: 'Avatar size'
    },
    {
      property: 'square',
      type: ['Boolean'],
      default: 'false',
      values: [],
      description: 'Makes avatar square'
    }
  ]
}
</script>

<style>
.it-alert + .it-alert {
  margin-top: 13px;
}
</style>