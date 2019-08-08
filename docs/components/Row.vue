<template lang="html">
  <div
    :style="{
      'align-items':align,
      'justify-content':justify,
      'width':width*100/12+'%'}"
    class="it-row">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Row extends Vue {
  @Prop({ default: 12 }) public width?: number | string
  @Prop() public justify?: string
  @Prop() public align?: string
}
</script>

<style lang="css">
  .it-row {
    clear: both;
    flex-flow: wrap;
  }
</style>