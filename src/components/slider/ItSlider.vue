<template>
  <div
    class="it-slider"
    :class="{ 'it-slider--disabled': disabled }"
    :tabindex="disabled ? -1 : 0"
    @keydown.down.left.stop.prevent="keyEvent(Positions.L)"
    @keydown.up.right.stop.prevent="keyEvent(Positions.R)"
  >
    <span v-if="labelTop" class="it-slider-label">{{ labelTop }}</span>
    <div
      ref="sliderLineRef"
      class="it-slider-line"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="onSliderClick"
      @touchend="onSliderClick"
    >
      <div class="it-slider-bar" :style="{ width: `${valuePosition}%` }"></div>
      <div
        class="it-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseOrTouchDown"
        @touchstart.prevent="onMouseOrTouchDown"
      >
        <it-tooltip ref="tooltipRef" :content="modelValue">
          <div class="it-slider-controller"></div>
        </it-tooltip>
      </div>
    </div>
    <div v-if="stepPoints && stepsPoints.length" class="it-slider-wrap-points">
      <div
        v-for="(step, index) in stepsPoints"
        :key="step.left"
        class="it-slider-point"
        :style="getStepPointStyles({ step, index })"
        :class="{ 'it-slider-point--active': step.active }"
      ></div>
    </div>
    <div v-if="numbers" class="it-slider-numbers">
      <div>{{ min }}</div>
      <div style="left: 100%">{{ max }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref, watch } from 'vue'
import { TStepItem, TKeyEvents, TTotalValuePosition } from './types'
import { DEFAULT_STEP_POINT_HEIGHT, DEFAULT_PROPS } from './constants'
import { useStepsPoints, useValuePosition } from './hooks'
import { getTotalPosition, getCoordsByEvent } from './helpers'
import Tooltip from '@/components/tooltip/ItTooltip.vue'
import { Positions } from '@/models/enums'

export default defineComponent({
  name: 'it-slider',
  components: {
    'it-tooltip': Tooltip,
  },
  props: {
    labelTop: String,
    disabled: Boolean,
    stepPoints: Boolean,
    numbers: Boolean,
    min: { type: Number, default: DEFAULT_PROPS.MIN },
    max: { type: Number, default: DEFAULT_PROPS.MAX },
    step: { type: Number, default: DEFAULT_PROPS.STEP },
    modelValue: { type: Number, default: DEFAULT_PROPS.VALUE },
  },
  setup(props, { emit }) {
    const sliderLineRef = ref(null)
    const tooltipRef = ref<typeof Tooltip | null>(null)

    const startX = ref(0)
    const currentX = ref(0)

    const startPos = ref(0)
    const newPos = ref(0)

    const dragging = ref(false)

    const [valuePosition, setValuePosition] = useValuePosition(props, emit)

    const stepsPoints: ComputedRef<TStepItem[]> = useStepsPoints(
      [{ left: 0, active: true }],
      {
        min: props.min,
        max: props.max,
        step: props.step,
        valuePosition,
      },
    )

    watch(
      () => props.modelValue,
      (newVal) => {
        if (props.disabled) return
        const newValue = getTotalPosition({
          value: newVal,
          min: props.min,
          max: props.max,
        } as TTotalValuePosition)
        setValuePosition(newValue)
      },
    )

    function keyEvent(key: TKeyEvents) {
      if (props.disabled) return
      tooltipRef.value!.showPopover()

      const moreValue = [Positions.T, Positions.R].includes(key)
      const lessValue = [Positions.B, Positions.L].includes(key)
      const newValue = moreValue
        ? props.modelValue + props.step
        : lessValue
        ? props.modelValue - props.step
        : props.modelValue

      if (moreValue) {
        emit('update:modelValue', newValue)
      } else if (lessValue) {
        emit('update:modelValue', newValue)
      }
    }

    function onMouseOrTouchDown(e: MouseEvent & TouchEvent) {
      if (props.disabled) return
      onDragStart(e)
      window.addEventListener('mousemove', onDragging)
      window.addEventListener('mouseup', onDragEnd)
      window.addEventListener('touchmove', onDragging)
      window.addEventListener('touchend', onDragEnd)
    }

    function onDragStart(e: MouseEvent & TouchEvent) {
      dragging.value = true
      startX.value = getCoordsByEvent(e).clientX
      startPos.value = valuePosition.value
      tooltipRef.value!.showPopover()
    }

    function onDragging(e: MouseEvent | TouchEvent) {
      if (dragging.value) {
        let diff = 0
        currentX.value = getCoordsByEvent(e).clientX
        diff =
          ((currentX.value - startX.value) * 100) /
          (sliderLineRef.value! as HTMLElement).offsetWidth

        newPos.value = startPos.value + diff
        setValuePosition(newPos.value)
      }
    }

    function onDragEnd() {
      if (dragging.value) {
        dragging.value = false
        setValuePosition(newPos.value)
        window.removeEventListener('mousemove', onDragging)
        window.removeEventListener('mouseup', onDragEnd)
        window.removeEventListener('touchmove', onDragging)
        window.removeEventListener('touchend', onDragEnd)
      }
    }

    function onSliderClick(e: MouseEvent & TouchEvent) {
      if (props.disabled || dragging.value) return
      const sliderOffsetLeft = (
        sliderLineRef.value! as HTMLElement
      ).getBoundingClientRect().left
      const clientX = getCoordsByEvent(e).clientX
      const newValue =
        ((clientX - sliderOffsetLeft) /
          (sliderLineRef.value! as HTMLElement).offsetWidth) *
        100
      setValuePosition(newValue)
    }

    function handleMouseEnter(e: Event) {
      tooltipRef.value!.handleMouseEnter(e)
    }

    function handleMouseLeave() {
      if (dragging.value) return
      tooltipRef.value!.handleMouseLeave()
    }

    function getStepPointStyles({
      step,
      index,
    }: {
      step: TStepItem
      index: number
    }): object {
      const styles: { [key: string]: any } = {
        left: `${step.left}%`,
        height: null,
      }
      if (index === 0 || index === stepsPoints.value.length - 1) {
        styles.height = `${DEFAULT_STEP_POINT_HEIGHT}px`
      }
      return styles
    }

    return {
      valuePosition,
      stepsPoints,
      sliderLineRef,
      tooltipRef,
      keyEvent,
      onMouseOrTouchDown,
      onSliderClick,
      handleMouseEnter,
      handleMouseLeave,
      getStepPointStyles,
      Positions,
    }
  },
})
</script>
