<template>
  <span class="it-badge" :class="[square && 'it-badge--square']">
    <slot></slot>
    <span
      class="it-badge-body"
      :class="[
        $slots.default && `it-badge-body--corner-${position}`, 
        point && 'it-badge-body--point',
        square && 'it-badge-body--square',
        `it-badge-body--${type}`
      ]"
      v-show="show"
    >{{contentValue}}</span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Colors } from '../../models'
import { Positions } from '../../models'
import './badge.less'

@Component
export default class ItBadge extends Vue {
  @Prop({
    default: Colors.DANGER,
    validator: (value) => [
      Colors.PRIMARY,
      Colors.SUCCESS,
      Colors.DANGER,
      Colors.WARNING
    ].includes(value)
  })
  public type: string
  @Prop() public value: number | string
  @Prop({ default: Positions.TR }) public position!: string
  @Prop({ type: Boolean, default: true }) public show!: boolean
  @Prop({ type: Boolean, default: false }) public point!: boolean
  @Prop({ type: Boolean, default: false }) public square!: boolean
  @Prop() public maxValue: number

  get contentValue() {
    if (this.point) {
      return
    }
    return this.value > this.maxValue ? `${this.maxValue}+` : this.value
  }
}
</script>