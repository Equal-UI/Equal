<template>
  <label
    :class="['it-radio-wrapper', isChecked && `it-radio-wrapper--${type}--checked`,
    type && types.includes(type) ? `it-radio-wrapper--${type}` : 'it-radio-wrapper--primary',
    disabled && 'it-radio-wrapper--disabled']"
  >
    <input
      class="it-radio-input"
      :disabled="disabled"
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="check"
      v-bind="$attrs"
    />
    <span :class="['it-radio-border', (pulse && !disabled) && 'pulse']">
      <span class="it-radio-circle"></span>
    </span>
    <span class="it-radio-label" v-if="label">{{label}}</span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
import { Colors } from '@/models/Colors'
import './radio.less'

@Component
export default class ItRadio extends Vue {
  @Prop({ default: Colors.PRIMARY }) private type!: string
  @Prop({ type: Boolean, default: false }) private pulse!: boolean
  @Prop() private label?: string
  @Prop() private value!: string
  @Prop({ type: Boolean, default: false }) private disabled!: boolean

  @Model('change') private checked!: string

  private types: string[] = [
    Colors.PRIMARY,
    Colors.SUCCESS,
    Colors.DANGER,
    Colors.WARNING,
    Colors.BLACK
  ]

  get isChecked() {
    return this.checked === this.value
  }

  private check(e: Event) {
    if (this.disabled) {
      return false
    }

    this.$emit('change', this.value)
  }
}
</script>

