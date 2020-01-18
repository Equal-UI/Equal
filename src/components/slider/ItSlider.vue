<template>
  <div class="it-slider">
    <div
      class="it-slider-line"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="sliderLine"
      @click="onSliderClick"
    >
      <div
        class="it-slider-bar"
        :class="{
        'it-slider-bar--disabled': disabled
      }"
        :style="{width: `${valuePosition}%`}"
      ></div>
      <div
        class="it-slider-point"
        v-if="stepPoints && stepsArr.length"
        v-for="stepp in stepsArr"
        :style="{ left: `${stepp.left}%` }"
        :class="{
          'it-slider-point--active': stepp.active
        }"
      ></div>
      <div
        class="it-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseDown"
      >
        <it-tooltip ref="tooltip" permanent :content="value">
          <div class="it-slider-controller"></div>
        </it-tooltip>
      </div>
    </div>
    <div v-if="numbers" class="it-slider-numbers">
      <div>{{min}}</div>
      <div style="left: 100%">{{max}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'vue-property-decorator'
import PopoverMixin from '../../mixins/popover'
import './slider.less'

@Component
export default class ItSlider extends Vue {
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop({ type: Boolean, default: false }) private stepPoints?: boolean
  @Prop({ type: Boolean, default: false }) private numbers?: boolean
  @Prop({ default: 0 }) private min?: number
  @Prop({ default: 100 }) private max?: number
  @Prop({ default: 1 }) private step?: number
  @Model('input', { default: 0 }) private value!: number

  private startX: number = 0
  private dragging: boolean = false
  private startPos: number = 0
  private newPos: number = 0
  private currentX: number = 0
  private oldValue: number = this.value
  private valuePosition: number =
    ((this.value - this.min) * 100) / (this.max - this.min)
  private stepsArr = []

  public mounted() {
    const arr = []
    if (this.$refs.sliderLine) {
      const count = (this.max - this.min) / this.step
      let left: number = 0
      // const sliderSize = (this.$refs.sliderLine as HTMLElement).offsetWidth

      arr.push({ left: 0, active: true })
      const check = 100 / (this.max / this.step)
      for (let i = 0; i < count; i++) {
        let active
        left += check
        if (left <= this.valuePosition) {
          active = true
        } else {
          active = false
        }
        arr.push({ left, active })
      }
      arr[0].left += 0.25
      arr[arr.length - 1].left -= 0.25
    }
    this.stepsArr = arr
  }

  private onMouseDown(e: MouseEvent) {
    if (this.disabled) {
      return
    }
    this.onDragStart(e)
    window.addEventListener('mousemove', this.onDragging)
    window.addEventListener('mouseup', this.onDragEnd)
  }

  private onDragStart(e: MouseEvent) {
    this.dragging = true
    this.startX = e.clientX
    this.startPos = this.valuePosition;
    (this.$refs.tooltip as PopoverMixin).showTooltip()
  }

  private onDragging(e: MouseEvent) {
    if (this.dragging) {
      let diff = 0
      this.currentX = e.clientX
      diff =
        ((this.currentX - this.startX) * 100) /
        (this.$refs.sliderLine as HTMLElement).offsetWidth

      this.newPos = this.startPos + diff

      this.setPosition(this.newPos)
    }
  }

  private onDragEnd() {
    if (this.dragging) {
      this.dragging = false
      this.setPosition(this.newPos)
      window.removeEventListener('mousemove', this.onDragging)
      window.removeEventListener('mouseup', this.onDragEnd);
      (this.$refs.tooltip as PopoverMixin).handleMouseLeave()
    }
  }

  private onSliderClick(e) {
    if (this.disabled || this.dragging) {
      return
    }
    const sliderOffsetLeft = (this.$refs
      .sliderLine as HTMLElement).getBoundingClientRect().left
    this.setPosition(
      ((e.clientX - sliderOffsetLeft) /
        (this.$refs.sliderLine as HTMLElement).offsetWidth) *
        100
    )
  }

  private setPosition(pos) {
    if (pos < 0) {
      pos = 0
    } else if (pos > 100) {
      pos = 100
    }
    const lengthPerStep = 100 / ((this.max - this.min) / this.step)
    const steps = Math.round(pos / lengthPerStep)
    let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min
    value = parseFloat(value.toFixed(0))

    this.$emit('input', value)
    const valPos = ((value - this.min) * 100) / (this.max - this.min)
    this.valuePosition = valPos
    this.stepsArr = this.stepsArr.map((i) => {
      if (i.left <= this.valuePosition) {
        i.active = true
      } else {
        i.active = false
      }
      return i
    })
  }

  private handleMouseEnter(e) {
    (this.$refs.tooltip as PopoverMixin).handleMouseEnter(e)
  }

  private handleMouseLeave(e) {
    if (this.dragging) {
      return
    }
    (this.$refs.tooltip as PopoverMixin).handleMouseLeave()
  }
}
</script>