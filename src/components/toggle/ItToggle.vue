<template>
  <div
    :class="[variant.root, { [variant.round]: round }]"
    tabindex="0"
    @keyup.left.prevent="selectPrev"
    @keyup.right.prevent="selectNext"
  >
    <div
      v-for="(option, i) in options"
      :key="i"
      :class="[
        variant.value,
        {
          [variant.selected]: option === modelValue,
        },
      ]"
      @click="selectValue(i)"
    >
      <slot :name="option">
        <span>{{ option }}</span>
      </slot>
    </div>
    <div
      :class="[variant.slider, { [variant.round]: round }]"
      :style="{
        width: width + '%',
        transform: `translateX(${sliderPosition}%)`,
        opacity,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums/Components'
import { ITToggleOptions } from '@/types/components/components'
import { computed, defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: Components.ITToggle,
  props: {
    ...getVariantPropsWithClassesList<ITToggleOptions>(),
    options: { type: Array as PropType<(string | number)[]>, default: [] },
    round: Boolean,
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    const variant = computed(() => {
      return useVariants<ITToggleOptions>(
        Components.ITToggle,
        <VariantJSWithClassesListProps<ITToggleOptions>>props,
      )
    })

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
      return pos === -1 ? 0 : pos * 100
    })

    return {
      selectValue,
      selectNext,
      selectPrev,
      width,
      sliderPosition,
      opacity,
      variant,
    }
  },
})
</script>
