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
    <span v-if="labelTop" class="it-slider-label">{{labelTop}}</span>
    <div
      class="it-slider-line"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="sliderLine"
      @click="onSliderClick"
    >
      <div class="it-slider-bar" :style="{width: `${valuePosition}%`}"></div>
      <div
        class="it-slider-controller-wrapper"
        :style="{ left: `${valuePosition}%` }"
        @mousedown="onMouseDown"
      >
        <it-tooltip ref="tooltip" :content="modelValue">
          <div class="it-slider-controller"></div>
        </it-tooltip>
      </div>
    </div>
    <div v-if="stepPoints && stepsArr.length" style="height: 8px">
      <div
        class="it-slider-point"
        v-for="stepp in stepsArr"
        :key="stepp.left"
        :style="{ left: `${stepp.left}%`, height: stepp.height }"
        :class="{
          'it-slider-point--active': stepp.active
        }"
      ></div>
    </div>
    <div v-if="numbers" class="it-slider-numbers">
      <div>{{min}}</div>
      <div style="left: 100%">{{max}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import Tooltip from '../tooltip/ItTooltip.vue'

interface ISteps {
  left: number
  height?: string
  active: boolean
}

export default defineComponent({
  name: 'it-slider',
  props: {
    labelTop: String,
    disabled: Boolean,
    stepPoints: Boolean,
    numbers: Boolean,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    modelValue: { type: Number, default: 0 }
  },
  setup(props, { emit }) {
    const startX = ref(0)
    const currentX = ref(0)

    const startPos = ref(0)
    const newPos = ref(0)

    const dragging = ref(false)
    const valuePosition = ref(
      ((props.modelValue - props.min) * 100) / (props.max - props.min)
    )

    const stepsArr = ref<ISteps[]>([])

    // $refs
    const sliderLine = ref(null)
    const tooltip = ref<typeof Tooltip | null>(null)

    onMounted(() => {
      const arr: ISteps[] = []
      if (sliderLine) {
        const count = (props.max - props.min) / props.step
        let left: number = 0

        arr.push({ left: 0, active: true })
        const check = 100 / (props.max / props.step)
        for (let i = 0; i < count; i++) {
          let active
          left += check
          if (left <= valuePosition.value) {
            active = true
          } else {
            active = false
          }
          arr.push({ left, active })
        }
        arr[0].height = '8px'
        arr[arr.length - 1].height = '8px'
      }
      stepsArr.value = arr
    })

    watch(
      () => props.modelValue,
      (newVal) => {
        if (props.disabled) {
          return
        }
        setPosition(((newVal - props.min) * 100) / (props.max - props.min))
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
      const valPos = ((value - props.min) * 100) / (props.max - props.min)
      valuePosition.value = valPos
      stepsArr.value = stepsArr.value.map((i) => {
        if (i.left <= valuePosition.value) {
          i.active = true
        } else {
          i.active = false
        }
        return i
      })
    }

    function keyEvent(key: 'up' | 'right' | 'down' | 'left') {
      if (props.disabled) {
        return
      }
      tooltip.value!.showPopover()
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

      tooltip.value!.showPopover()
    }

    function onDragging(e: MouseEvent) {
      if (dragging.value) {
        let diff = 0
        currentX.value = e.clientX
        diff =
          ((currentX.value - startX.value) * 100) /
          (sliderLine.value! as HTMLElement).offsetWidth

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
      const sliderOffsetLeft = (sliderLine.value! as HTMLElement).getBoundingClientRect()
        .left
      setPosition(
        ((e.clientX - sliderOffsetLeft) /
          (sliderLine.value! as HTMLElement).offsetWidth) *
          100
      )
    }

    function handleMouseEnter(e: Event) {
      tooltip.value!.handleMouseEnter(e)
    }

    function handleMouseLeave() {
      if (dragging.value) {
        return
      }
      tooltip.value!.handleMouseLeave()
    }

    return {
      valuePosition,
      stepsArr,
      setPosition,
      keyEvent,
      onMouseDown,
      onSliderClick,
      handleMouseEnter,
      handleMouseLeave,
      sliderLine,
      tooltip
    }
  }
})
</script>