<template>
  <div :class="['it-select']">
    <span class="it-input-label">{{ labelTop }}</span>
    <div
      :tabindex="disabled ? -1 : 0"
      class="it-select-selection"
      :class="[
        disabled && 'it-select-selection--disabled',
        show && 'it-select-selection--active',
      ]"
      ref="trigger"
      @click="toggleList"
      v-clickoutside="hidePopover"
      @keydown.down.stop.prevent="handleKey('down')"
      @keydown.up.stop.prevent="handleKey('up')"
      @keydown.esc.stop.prevent="hidePopover"
      @keydown.enter.stop.prevent="enterKey"
    >
      <input
        v-if="filterable"
        :readonly="!filterable"
        class="it-select-input"
        type="text"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="search"
      />
      <span class="it-select-placeholder" v-show="!modelValue && !filterable">{{
        placeholder
      }}</span>
      <span class="it-select-selected" v-if="!filterable && modelValue">{{
        modelValue
      }}</span>
      <i
        :class="[
          'material-icons',
          'it-select-arrow',
          show && 'it-select-arrow--active',
        ]"
        >unfold_more</i
      >
    </div>

    <transition name="drop-bottom">
      <div
        class="it-select-dropdown"
        :class="[
          placement
            ? `it-select-dropdown--${placement}`
            : 'it-select-dropdown--bottom',
          divided && 'it-select-dropdown--divided',
        ]"
        v-show="show"
        ref="popover"
        style="width: 100%"
      >
        <ul class="it-select-list" ref="listRef">
          <li
            class="it-select-option"
            v-for="(option, i) in options"
            :key="i"
            :ref="
              (el) => {
                if (el) optionsRefs[i] = el
              }
            "
            :class="[focusIndex === i && 'it-select-option--focused']"
            @click="selectOption(index ? option[index] : option)"
          >
            {{ index ? option[index] : option }}
            <transition name="fade-right">
              <span
                v-if="modelValue === (index ? option[index] : option)"
                class="it-select-option-check"
              ></span>
            </transition>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeUpdate,
  nextTick,
} from 'vue'

import { Positions } from '@/models/enums'
import { usePopover } from '@/hooks'
import { clickOutside } from '@/directives'

export default defineComponent({
  name: 'it-select',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    placement: { type: String, default: Positions.B },
    disabled: Boolean,
    divided: Boolean,
    filterable: Boolean,
    index: String,
    labelTop: String,
    placeholder: { type: String, default: 'Select' },
    options: { type: Array, default: [] },
    modelValue: { type: [String, Number] },
  },
  setup(props, { emit }) {
    const search = ref<string | number>('')
    const focusIndex = ref(-1)
    const optionsRefs = ref<HTMLElement[]>([])
    const listRef = ref<HTMLElement | null>(null)

    onBeforeUpdate(() => {
      optionsRefs.value = []
    })

    // Dropdown logic
    const { show, hidePopover, showPopover } = usePopover(props)

    function toggleList() {
      if (props.disabled) {
        return
      }
      if (show.value) {
        hidePopover()
      } else {
        unfocus()
        showPopover()
      }
    }

    // select logic
    function selectOption(value: string | number) {
      search.value = props.filterable ? value : ''
      emit('update:modelValue', value)
    }

    function unfocus() {
      if (focusIndex.value === -1) {
        return
      }
      focusIndex.value = -1
    }

    // const searched = computed(() => {
    //   return slots.default!().filter!((i) => i.$data.visible === true)
    // })

    async function handleKey(type: 'up' | 'down') {
      if (!show.value || !props.options.length) {
        return
      }

      if (type === 'up') {
        focusIndex.value =
          focusIndex.value <= 0
            ? props.options.length - 1
            : focusIndex.value - 1
      } else if (type === 'down') {
        focusIndex.value =
          focusIndex.value === props.options.length - 1
            ? 0
            : focusIndex.value + 1
      }

      // Scroll to focused element
      await nextTick()
      const selectedEl = optionsRefs.value.find((r) =>
        r.className.includes('focused')
      )
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest', inline: 'start' })
      }
    }

    function enterKey() {
      if (!show.value || focusIndex.value === -1) {
        return
      }
      const option = props.options[focusIndex.value]
      selectOption(props.index ? option[props.index] : option)
      hidePopover()
    }

    return {
      toggleList,
      // selected,
      selectOption,
      search,
      show,
      hidePopover,
      showPopover,
      handleKey,
      focusIndex,
      enterKey,
      optionsRefs,
    }
  },
})
</script>
