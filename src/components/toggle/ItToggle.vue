<template>
  <div
    class="it-toggle"
    tabindex="0"
    :class="{ 'it-toggle--round': round }"
    @keyup.left.prevent="selectPrev"
    @keyup.right.prevent="selectNext"
  >
    <label
      v-for="(option, i) in options"
      :key="i"
      class="it-toggle-value"
      :class="{
        'it-toggle-value--selected': option === modelValue,
      }"
      @click="selectValue(i)"
    >
      <span v-if="!icons">{{ option }}</span>
      <it-icon v-else :name="String(option)" />
    </label>
    <div
      class="it-toggle-slider"
      :style="{
        width: width + '%',
        transform: `translateX(${sliderPosition}%)`,
        opacity,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import ItIcon from '../icon'

export default defineComponent({
  name: 'it-toggle',
  components: {
    ItIcon,
  },
  props: {
    options: { type: Array as PropType<(string | number)[]>, default: [] },
    round: Boolean,
    icons: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const activeIndex = ref(0)

    function selectValue(i: number) {
      activeIndex.value = i
      emit('update:modelValue', props.options[i])
    }

    function selectNext() {
      if (!props.options[activeIndex.value + 1]) {
        selectValue(0)
        return
      }

      selectValue(activeIndex.value + 1)
    }

    function selectPrev() {
      if (!props.options[activeIndex.value - 1]) {
        selectValue(props.options.length - 1)
        // selectNext(0)
        return
      }

      selectValue(activeIndex.value - 1)
    }

    const width = computed(() => (100 / props.options.length).toFixed(2))
    const opacity = computed(() =>
      props.options.includes(props.modelValue!) ? 1 : 0,
    )
    const sliderPosition = computed(() => {
      const pos = props.options.findIndex((v) => v === props.modelValue)
      return (pos === -1 ? 0 : pos) * 100
    })

    return {
      selectValue,
      selectNext,
      selectPrev,
      width,
      sliderPosition,
      opacity,
    }
  },
})
</script>
