<template>
  <div
    class="it-slider"
    :class="{
        'it-slider--disabled': disabled
      }"
    :tabindex="disabled ? -1 : 0"
    @keydown.down.left.stop.prevent="keyEvent('left')"
    @keydown.up.right.stop.prevent="keyEvent('right')"
  >
    <span v-if="labelTop" class="it-slider-label">{{ labelTop }}</span>
    <div
      class="it-slider-line"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="sliderLineRef"
      @click="onSliderClick"
    >
      <div class="it-slider-bar" :style="{width: `${valuePosition}%`}"></div>
      <div
        class="it-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseDown"
      >
        <it-tooltip ref="tooltipRef" :content="modelValue">
          <div class="it-slider-controller"></div>
        </it-tooltip>
      </div>
    </div>
    <div v-if="stepPoints && stepsPoints.length" class="it-slider-wrap-points">
      <div
        class="it-slider-point"
        v-for="(step, index) in stepsPoints"
        :key="step.left"
        :style="getStepPointStyles({ step, index })"
        :class="{'it-slider-point--active': step.active}"
      ></div>
    </div>
    <div v-if="numbers" class="it-slider-numbers">
      <div>{{ min }}</div>
      <div style="left: 100%">{{ max }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import {TStepItem} from '@components/slider/types'
import {DEFAULT_STEP_POINT_HEIGHT} from "./constants";
import {useStepsPoints} from './hooks'
import {getTotalPosition} from './helpers'
import Tooltip from '../tooltip/ItTooltip.vue'

export default defineComponent({
  name: 'it-slider',
  props: {
    labelTop: String,
    disabled: Boolean,
    stepPoints: Boolean,
    numbers: Boolean,
    min: {type: Number, default: 0},
    max: {type: Number, default: 100},
    step: {type: Number, default: 1},
    modelValue: {type: Number, default: 0}
  },
  setup(props, {emit}) {
    const sliderLineRef = ref(null)
    const tooltipRef = ref<typeof Tooltip | null>(null)

    const startX = ref(0)
    const currentX = ref(0)

    const startPos = ref(0)
    const newPos = ref(0)

    const dragging = ref(false)

    const valuePosition = ref<number>(getTotalPosition({
      value: props.modelValue,
      min: props.min,
      max: props.max,
    }))

    const stepsPoints: TStepItem[] = useStepsPoints(
      [{left: 0, active: true}],
      {
        min: props.min,
        max: props.max,
        step: props.step,
        valuePosition: valuePosition.value,
      }
    )

    watch(
      () => props.modelValue,
      (newVal) => {
        if (props.disabled) {
          return
        }
        setPosition(getTotalPosition({value: newVal, min: props.min, max: props.max}))
      }
    )

    function setPosition(pos: number) {
      if (pos < 0) {
        pos = 0
      } else if (pos > 100) {
        pos = 100
      }
      const lengthPerStep = 100 / ((props.max - props.min) / props.step)
      const steps = Math.round(pos / lengthPerStep)
      let value =
        steps * lengthPerStep * (props.max - props.min) * 0.01 + props.min
      value =
        parseFloat(value.toFixed(0)) > props.max
          ? props.max
          : parseFloat(value.toFixed(0))

      emit('update:modelValue', value)
      valuePosition.value = getTotalPosition({value, min: props.min, max: props.max})
    }

    function keyEvent(key: 'up' | 'right' | 'down' | 'left') {
      if (props.disabled) {
        return
      }
      tooltipRef.value!.showPopover()
      if (['up', 'right'].includes(key)) {
        emit('update:modelValue', props.modelValue + props.step)
      } else if (['down', 'left'].includes(key)) {
        emit('update:modelValue', props.modelValue - props.step)
      }
    }

    function onMouseDown(e: MouseEvent) {
      if (props.disabled) {
        return
      }
      onDragStart(e)
      window.addEventListener('mousemove', onDragging)
      window.addEventListener('mouseup', onDragEnd)
    }

    function onDragStart(e: MouseEvent) {
      dragging.value = true
      startX.value = e.clientX
      startPos.value = valuePosition.value

      tooltipRef.value!.showPopover()
    }

    function onDragging(e: MouseEvent) {
      if (dragging.value) {
        let diff = 0
        currentX.value = e.clientX
        diff =
          ((currentX.value - startX.value) * 100) /
          (sliderLineRef.value! as HTMLElement).offsetWidth

        newPos.value = startPos.value + diff

        setPosition(newPos.value)
      }
    }

    function onDragEnd() {
      if (dragging.value) {
        dragging.value = false
        setPosition(newPos.value)
        window.removeEventListener('mousemove', onDragging)
        window.removeEventListener('mouseup', onDragEnd)
      }
    }

    function onSliderClick(e: any) {
      if (props.disabled || dragging.value) {
        return
      }
      const sliderOffsetLeft = (sliderLineRef.value! as HTMLElement).getBoundingClientRect()
        .left
      setPosition(
        ((e.clientX - sliderOffsetLeft) /
          (sliderLineRef.value! as HTMLElement).offsetWidth) *
        100
      )
    }

    function handleMouseEnter(e: Event) {
      tooltipRef.value!.handleMouseEnter(e)
    }

    function handleMouseLeave() {
      if (dragging.value) {
        return
      }
      tooltipRef.value!.handleMouseLeave()
    }

    function getStepPointStyles({step, index}: { step: TStepItem, index: number }): object {
      const styles = {left: `${step.left}%`, height: null};
      if (index === 0 || index === (stepsPoints.value.length - 1)) {
        styles.height = `${DEFAULT_STEP_POINT_HEIGHT}px`
      }
      return styles
    }

    return {
      valuePosition,
      stepsPoints,
      setPosition,
      keyEvent,
      onMouseDown,
      onSliderClick,
      handleMouseEnter,
      handleMouseLeave,
      sliderLineRef,
      tooltipRef,
      getStepPointStyles
    }
  }
})
</script>
