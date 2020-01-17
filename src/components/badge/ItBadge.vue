<template>
  <span class="it-badge" :class="[square && 'it-badge--square']">
    <slot></slot>
    <span
      class="it-badge-body"
      :class="[$slots.default && 'it-badge-body--corner', point && 'it-badge-body--point', square && 'it-badge-body--square', `it-badge-body--${type}`]"
      v-show="show"
    >{{contentValue}}</span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './badge.less'

@Component
export default class ItBadge extends Vue {
  @Prop({
    default: 'danger',
    validator: (value) =>
      ['primary', 'success', 'danger', 'warning'].includes(value)
  })
  public type: string
  @Prop() public value: number | string
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