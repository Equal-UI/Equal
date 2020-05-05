<template>
  <div>
    <h1>Divider</h1>

    <Demobox>
      <div style="width: 90%; display: flex; justify-content: center;">
        <it-divider :vertical="dividerVertical" />
      </div>
      <template slot="props">
        <it-checkbox label="Vertical" v-model="dividerVertical" />
      </template>
    </Demobox>

    <Box :code="codeHorizontal" title="Horizontal">
      <p
        style="font-size: 14px; margin: 0px;"
      >Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
      <it-divider style="margin-left: 0" />
      <p
        style="font-size: 14px; margin: 0px;"
      >Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
      <it-divider style="margin-left: 0" />
      <p
        style="font-size: 14px; margin: 0px;"
      >Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
    </Box>

    <Box :code="codeVertical" title="Vertical">
      <div style="font-size: 14px; margin: 0px;">
        Still
        <it-divider vertical />
        Sane
        <it-divider vertical />
        Exile
      </div>
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
export default class CheckboxPage extends Vue {
  public dividerVertical = false

  public codeHorizontal = `<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
<it-divider />
<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
<it-divider />
<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>`

  public codeVertical = `<div>
  Still
  <it-divider vertical />
  Sane
  <it-divider vertical />
  Exile
</div>`

  public dataSheet = [
    {
      property: 'vertical',
      type: ['Boolean'],
      default: false,
      values: [],
      description: 'Makes divider vertical'
    }
  ]
}
</script>
