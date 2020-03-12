<template>
  <label>
    <span
      class="it-switch"
      :class="[
      type && types.includes(type) ? `it-switch--${type}` : 'it-switch--primary',
      value && `it-switch--${type}--checked`,
      disabled && `it-switch--${type}--disabled`,
      (pulse && !disabled) && 'pulse'
    ]"
    >
      <input
        type="checkbox"
        class="it-switch-input"
        :disabled="disabled"
        style="z-index: 10"
        v-on="listeners"
      />
      <span class="it-switch-circle"></span>
    </span>
    <span class="it-radio-label" v-if="label">{{label}}</span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
import { Colors } from '@/models/Colors'
import './switch.less'

@Component
export default class ItSwitch extends Vue {
  @Prop({ default: Colors.PRIMARY }) private type!: string
  @Prop() private label?: string
  @Prop({ type: Boolean, default: false }) private pulse!: boolean
  @Model('change', { default: false }) private value!: boolean | string | number
  @Prop({ type: Boolean, default: false }) private disabled?: boolean

  private types: string[] = [
    Colors.PRIMARY,
    Colors.SUCCESS,
    Colors.DANGER,
    Colors.WARNING,
    Colors.BLACK
  ]

  get listeners() {
    return {
      ...this.$listeners,
      change: (e: Event) => {
        this.toggle(e)
      }
    }
  }

  private toggle(e: Event) {
    if (this.disabled) {
      return false
    }


    const newValue = !this.value

    this.$emit('change', newValue)
  }
}
</script>

