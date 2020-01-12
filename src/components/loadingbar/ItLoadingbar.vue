<template>
  <div
    class="it-loadingbar"
    :class="{
      'it-loadingbar--start': start
    }"
    :style="{
    width: progress + '%',
    height: height + 'px'
  }"
  ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import './loadingbar.less'

@Component
export default class ItLoadingbar extends Vue {
  @Prop({ type: Boolean, default: false }) public start?: boolean
  @Prop({
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  })
  private progress?: number | string
  @Prop({ default: 2 }) private height?: number

  @Watch('progress')
  public progressChange?(value) {
    if (value === 100) {
      setTimeout(() => {
        this.progress = 0
        this.height = 2
      }, 600)
    }
  }
}
</script>