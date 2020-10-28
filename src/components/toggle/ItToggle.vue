<template>
  <div class="it-toggle" :class="{'it-toggle--round': round}">

    <label @click="selectValue(i)" class="it-toggle-value" :class="{
      'it-toggle-value--selected': option === modelValue
    }" v-for="(option, i) in options" :key="i">
      <span>{{option}}</span>
    </label>
    <div class="it-toggle-slider" :style="{
      width: width + '%',
      transform: `translateX(${sliderPosition}%)`,
      opacity
    }"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'it-toggle',
  props: {
    options: {type: Array, default: []},
    round: Boolean,
    modelValue: [String, Number]
  },
  setup(props, { emit }) {
    function selectValue(i: number) {
      emit('update:modelValue', props.options[i])
    }
    const width = computed(() => (100 / props.options.length).toFixed(2))
    const opacity = computed(() => props.options.includes(props.modelValue) ? 1 : 0)
    const sliderPosition = computed(() => {
      let pos = props.options.findIndex((v) => v === props.modelValue)
      return (pos === -1 ? 0 : pos) * 100
    })

    return {selectValue, width, sliderPosition, opacity}
  }

})
</script>