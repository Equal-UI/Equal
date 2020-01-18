<template>
  <div class="it-progress-wrapper">
    <div class="it-progress-bar" :style="{
      height: height+'px'
      }">
      <div class="it-progress-line" :class="[
        infinite && 'it-progress-line--infinite'
      ]"
      :style="{
        width: infinite ? '' :  (progress + '%')
      }">
        <it-tooltip
          v-if="!infinite"
          v-show="showTooltip"
          style="float: right; height: 100%"
          permanent
          ref="tooltip"
          :placement="tooltip"
          :content="progress+'%'"
        >&nbsp;</it-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PopoverMixin from '../../mixins/popover'
import './progressbar.less'

@Component
export default class ItProgressbar extends Vue {
  @Prop({ type: Boolean, default: false }) public infinite?: boolean
  @Prop({
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  })
  private progress?: number | string
  @Prop({ default: 7 }) private height?: number | string
  @Prop({ default: 'top' }) private tooltip?: string
  @Prop({ type: Boolean, default: true }) private showTooltip?: boolean

  @Watch('tooltip')
  @Watch('showTooltip')
  private onTooltipChange() {
    if (!this.infinite) {
      (this.$refs.tooltip as PopoverMixin).setPopoverPosition()
    }
  }

  @Watch('progress')
  private onProgressChange() {
    if (!this.infinite) {

      const ittt = setInterval(() => {
        (this.$refs.tooltip as PopoverMixin).setPopoverPosition()
    }, 20)
      setTimeout(() => {
      clearInterval(ittt)
    }, 200)
    }
  }

  private mounted() {
    if (!this.infinite) {
      (this.$refs.tooltip as PopoverMixin).showTooltip()
    }
  }
}
</script>