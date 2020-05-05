<template>
  <div>
    <span class="it-input-label">{{labelTop}}</span>
    <div class="it-number-field">
      <it-button :disabled="this.disabled || disableController('minus')" @click="decrease" @mousedown="press('minus')" type="primary" icon="remove"></it-button>
    
    <div class="it-number-input" :class="[disabled && 'it-number-input--disabled']">
      <input
        type="number"
        :value="currentValue"
        class="it-number-input-original"
        :disabled="disabled"
        :max="max"
        :min="min"
        ref="input"
        v-on="listeners"
        v-bind="$attrs"
        @keydown.up.stop.prevent="increase"
        @keydown.down.stop.prevent="decrease"
      />
    </div>
      <it-button :disabled="this.disabled || disableController('plus')" @click="increase" @mousedown="press('plus')" type="primary" icon="add"></it-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue, Watch } from 'vue-property-decorator'

@Component
export default class ItNumberInput extends Vue {

  get listeners() {
    return {
      ...this.$listeners,
      input: this.onInput
    }
  }
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop({ default: -Infinity }) private min?: number
  @Prop({ default: Infinity }) private max?: number
  @Prop({ default: 1 }) private step?: number
  @Prop() private labelTop?: string
  @Model('input', { default: 0 }) private value!: number

  private currentValue: number = this.value
  private interval: number | any

  private topHeight: number = 50
  private bottomHeight: number = 50

  @Watch('value')
  public onValChange(val) {
    this.onInput(null, val)
  }

  private disableController(type: 'plus' | 'minus'): boolean {
    if (this.value <= this.min && type === 'minus') {
      return true
    }
    if (this.value >= this.max && type === 'plus') {
      return true
    }
    return false
  }

  private press(type: 'plus' | 'minus') {
    (this.$refs.input as HTMLInputElement).focus()

    if (this.disabled) return
    const handler = type === 'plus' ? this.increase : this.decrease
    this.interval = setInterval(handler, 140)

    window.addEventListener('mouseup', (event) => {
      clearInterval(this.interval)
    })
  }

  private onInput(e: InputEvent, watchVal: number) {
    const newVal = watchVal ?? Number((e.target as HTMLInputElement).value)

    if (newVal > this.max) {
      this.$emit('input', this.max)
      this.currentValue = this.max
      return
    } else if (newVal < this.min) {
      this.$emit('input', this.min)
      this.currentValue = this.min
      return
    }
    this.$emit('input', newVal)
    this.currentValue = newVal
  }

  private increase() {
    (this.$refs.input as HTMLInputElement).focus()

    const value = this.currentValue
    if (this.disabled || value >= this.max) return
    this.calculateStep('plus')
  }

  private decrease() {
    (this.$refs.input as HTMLInputElement).focus()

    const value = this.currentValue
    if (this.disabled || value <= this.min) return
    this.calculateStep('minus')
  }

  private calculateStep(stepType: 'plus' | 'minus') {
    if (this.disabled) return

    let value = Number(this.currentValue)
    const step = Number(this.step)

    switch (stepType) {
      case 'plus':
        value += step
        break
      case 'minus':
        value -= step
        break
    }

    if (value > this.max) {
      value = this.max
    }
    if (value < this.min) {
      value = this.min
    }

    this.currentValue = Number(value.toFixed(10))
    this.$emit('input', this.currentValue)
  }
}
</script>