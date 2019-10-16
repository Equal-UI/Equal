<template>
  <div v-show="show" :class="['it-tag', type && `it-tag--${type}`]">
    <div>
      <slot></slot>
      <it-icon v-if="closable" @click="clickClose" name="clear" class="it-tag-close" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './tag.less'

@Component
export default class ItTag extends Vue {
  @Prop({ type: Boolean, default: false }) public closable?: boolean

  public show = true
  @Prop({
    default: 'neutral',
    validator: (value) =>
      ['primary', 'success', 'danger', 'warning', 'black', 'neutral'].includes(
        value
      )
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