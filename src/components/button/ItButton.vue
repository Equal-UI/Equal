<template>
 
  <Button
    class="it-btn"
    :class="[
      type ? `it-btn--${type}` : 'it-btn--primary',
      outlined && `it-btn--${type}--outlined`,
      size && `it-btn--${size}`,
      round && 'round',
      pulse && 'pulse'
    ]"
    :style="[!$slots.default && {padding: '9px 9px'}]"
    :disabled="disabled"
    v-on="listeners"
  >
    <it-icon v-if="icon && !iconAfter" :name="icon" :style="[$slots.default && marginStyle]" />
    <span v-if="$slots.default" class="it-btn-text">
      <slot />
    </span>
    <it-icon v-if="icon && iconAfter" :name="icon" :style="[$slots.default && marginStyle]" />
  </Button>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './button.less'

@Component
export default class ItButton extends Vue {
  @Prop({
    default: 'primary',
    validator: (value) =>
      ['primary', 'success', 'danger', 'warning', 'black', 'neutral'].includes(value)
  })
  private type!: string
  @Prop({
    default: 'normal',
    validator: (value) =>
      ['small', 'normal', 'big'].includes(value)
  })
  private size?: string
  @Prop({ type: Boolean, default: false }) private iconAfter!: boolean
  @Prop({ type: Boolean, default: false }) private disabled!: boolean
  @Prop({ type: Boolean, default: false }) private outlined!: boolean
  @Prop({ type: Boolean, default: false }) private round!: boolean
  @Prop({ type: Boolean, default: false }) private pulse!: boolean
  @Prop() private icon!: string

  private marginStyle = this.iconAfter
    ? { marginLeft: '6px' }
    : { marginRight: '6px' }

  get listeners() {
    return { ...this.$listeners }
  }
}
</script>

