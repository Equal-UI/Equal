<template>
  <div>
    <h1>Tag</h1>

    <Demobox>
      <it-tag :closable="tagClosable" :type="tagType"><span>{{tagText}}</span></it-tag>

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
        <it-checkbox label="Closable" v-model="tagClosable" />
      </template>
    </Demobox>
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class SliderPage extends Vue {
  tagText: string = 'Tag'
  tagClosable: boolean = false
  tagType: string = 'neutral'
  tagTypes: string[] = ['primary', 'success', 'danger', 'warning', 'black', 'neutral']
}
</script>

<style lang="less">
</style>