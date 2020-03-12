<template>
  <span v-show="show" :class="['it-tag', type && `it-tag--${type}`, filled && `it-tag--${type}--filled`]">
      <slot></slot>
      <it-icon v-if="closable" @click="clickClose" name="clear" class="it-tag-close" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Colors } from '../../models'
import './tag.less'

@Component
export default class ItTag extends Vue {
  @Prop({ type: Boolean, default: false }) public closable?: boolean
  @Prop({ type: Boolean, default: false }) public filled?: boolean

  public show = true
  @Prop({
    default: Colors.NEUTRAL,
    validator: (value) => [
      Colors.PRIMARY,
      Colors.SUCCESS,
      Colors.DANGER,
      Colors.WARNING,
      Colors.BLACK,
      Colors.NEUTRAL
    ].includes(value)
  })
  private type?: string

  public clickClose() {
    if (!this.closable) {
      return
    }
    this.show = false
  }
}
</script>