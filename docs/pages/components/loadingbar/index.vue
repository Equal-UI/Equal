<template>
  <div>
    <h1>Loading bar</h1>

    <Box :code="typesCode" title="Loading bar">
      <it-button @click="$Loading.start()">Start</it-button>
      <it-button @click="$Loading.update(50)">Set 50%</it-button>
      <it-button @click="$Loading.finish()">Finish</it-button>
    </Box>
    <props-table :method-sheet="methodSheet" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Box, PropsTable }
})
export default class LoadingbarPage extends Vue {

  typesCode = 
`<it-button @click="$Loading.start()">Start</it-button>
<it-button @click="$Loading.update(50)">Set 50%</it-button>
<it-button @click="$Loading.finish()">Finish</it-button>
`

  methodSheet = [
    {
      method: 'start',
      description: 'Start loading progress',
      // arguments: []
    },
    {
      method: 'update',
      description: 'Update progress value in percentage',
      arguments: 'value: number'
    },
    {
      method: 'finish',
      description: 'Finish loading and hide',
      // arguments: []
    },
  ]
}
</script>
