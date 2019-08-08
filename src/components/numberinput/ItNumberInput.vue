<template>
  <div>
    <span class="it-input-label">{{labelTop}}</span>
    <div class="it-number-input">
      <input
        type="number"
        :value="currentValue"
        class="it-number-input-original"
        :disabled="disabled"
        :max="max"
        :min="min"
        ref="input"
        @input="onInput"
        @keydown.up.stop.prevent="increase"
        @keydown.down.stop.prevent="decrease"
      />

      <div class="it-number-input-controller">
        <span
          @click="increase"
          @mousedown="press('up')"
          @mouseup="release"
          @mouseenter="hover('up')"
          @mouseleave="unhover"
          :style="{height: topHeight+'%'}"
          class="it-number-input-controller-up"
          :class="{'it-number-input-controller-up--disabled': disabled}"
        >
          <it-icon name="keyboard_arrow_up" />
        </span>
        <span
          @click="decrease"
          @mousedown="press('down')"
          @mouseup="release"
          @mouseenter="hover('down')"
          @mouseleave="unhover"
          :style="{height: bottomHeight+'%'}"
          class="it-number-input-controller-down"
          :class="{'it-number-input-controller-down--disabled': disabled}"
        >
          <it-icon name="keyboard_arrow_down" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator'
import './numberinput.less'

@Component({
  model: {
    prop: 'value',
    event: 'input'
  }
})
export default class ItNumberInput extends Vue {
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop({ default: -Infinity }) private min?: number
  @Prop({ default: Infinity }) private max?: number
  @Prop({ default: 1 }) private step?: number
  @Prop() private labelTop?: string
  @Model('change', { default: 0 }) private value!: number

  private currentValue: number = this.value
  private interval: number | any

  private topHeight: number = 50
  private bottomHeight: number = 50

  private press(type: 'up' | 'down') {
    (this.$refs.input as HTMLInputElement).focus()

     if (this.disabled) return
     const handler = type === 'up' ? this.increase : this.decrease
     this.interval = setInterval(handler, 140)
  }

  private hover(type: 'up' | 'down') {
    if (this.disabled) return
    if (type === 'up') {
      this.topHeight += 15
      this.bottomHeight -= 15
    } else {
      this.topHeight -= 15
      this.bottomHeight += 15
    }
  }

  private unhover() {
    if (this.disabled) return
    this.topHeight = 50
    this.bottomHeight = 50
  }

  private release() {
    clearInterval(this.interval)
  }

  private onInput(e: InputEvent) {
    const newVal = Number((e.target as HTMLInputElement).value)
    console.log(newVal)

    if (newVal > this.max) {
      this.$emit('change', this.max)
      this.currentValue = this.max
      return
    } else if (newVal < this.min) {
      this.$emit('change', this.min)
      this.currentValue = this.min
      return
    }
    this.$emit('change', newVal)
    this.currentValue = newVal
  }

  private increase() {
    (this.$refs.input as HTMLInputElement).focus()

     const value = this.currentValue
     if (this.disabled || value >= this.max) return
     this.calculateStep('up')
  }

  private decrease() {
    (this.$refs.input as HTMLInputElement).focus()

     const value = this.currentValue
     if (this.disabled || value <= this.min) return
     this.calculateStep('down')
  }

  private calculateStep(stepType: 'up' | 'down') {
    if (this.disabled) return

    let value = Number(this.currentValue)
    const step = Number(this.step)

    switch (stepType) {
      case 'up':
        value += step
        break
      case 'down':
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
    this.$emit('change', this.currentValue)
  }
}
</script>