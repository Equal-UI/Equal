<template>
  <label class="it-checkbox-wrapper">
    <span class="it-checkbox-check-wrapper" :class="[(pulse && !disabled) && 'pulse']">
    <input type="checkbox" class="it-checkbox-input" v-on="listeners" />
      <span
        class="it-checkbox"
        :class="[      
      type && types.includes(type) ? `it-checkbox--${type}` : 'it-checkbox--primary',
      value && `it-checkbox--${type}--checked`,
      disabled && 'it-checkbox--disabled'
      ]"
      >
        <it-icon style="font-size: 16px" :name="icon" />
      </span>
    </span>
    <span v-if="label" class="it-checkbox-label" :class="[(lineThrough && value) && 'it-checkbox-label--linethrough', disabled && 'it-checkbox-label--disabled']">{{label}}</span>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'
import { Colors } from '../../models'

@Component
export default class ItCheckbox extends Vue {
  @Prop({ default: Colors.PRIMARY }) private type!: string
  @Prop({ default: 'check' }) private icon!: string
  @Prop({ type: Boolean, default: false }) private pulse!: boolean
  @Prop({ type: Boolean, default: false }) private lineThrough!: boolean
  @Prop() private label!: string
  @Model('change', { default: false }) private value!: boolean
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop() private color!: string // TODO

  private types: Colors[] = [
    Colors.PRIMARY,
    Colors.SUCCESS,
    Colors.DANGER,
    Colors.WARNING,
    Colors.BLACK,
    Colors.NEUTRAL
  ]

  get listeners() {
    return {
      ...this.$listeners,
      change: (e: Event) => {
        this.change(e)
      }
    }
  }

  private change(e: Event) {
    if (this.disabled) {
      return false
    }

    const newValue = !this.value

    this.$emit('change', newValue)
  }
}
</script>

