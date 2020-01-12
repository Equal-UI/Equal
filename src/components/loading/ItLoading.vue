<template>
  <svg class="it-loading"
   :style="{
    'max-width': `${radius * 2}px`,
    'max-height': `${radius * 2}px`
  }">
    <circle
      class="it-loading-circle"
      :stroke="color"
      :stroke-width="stroke"
      stroke-linecap="round"
      fill="none"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
      pathLength="100"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './loading.less'

@Component
export default class ItLoading extends Vue {
  @Prop({ default: 6 }) stroke?: number
  @Prop({ default: '#3051ff' }) color?: string
  @Prop({ default: 32 }) radius?: number

  normalizedRadius = this.radius - (this.stroke / 2)
}
</script>