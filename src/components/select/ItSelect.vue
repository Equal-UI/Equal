<template>
  <div :class="['it-select']">
    <span class="it-input-label">{{ labelTop }}</span>
    <div
      ref="trigger"
      v-clickoutside="hidePopover"
      :tabindex="disabled ? -1 : 0"
      class="it-select-selection"
      :class="[
        disabled && 'it-select-selection--disabled',
        show && 'it-select-selection--active',
      ]"
      @click="toggleList"
      @keydown.down.stop.prevent="handleKey('down')"
      @keydown.up.stop.prevent="handleKey('up')"
      @keydown.esc.stop.prevent="hidePopover"
      @keydown.enter.stop.prevent="enterKey"
    >
      <input
        v-if="filterable"
        v-model="search"
        :readonly="!filterable"
        class="it-select-input"
        type="text"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <span v-show="!modelValue && !filterable" class="it-select-placeholder">{{
        placeholder
      }}</span>
      <span v-if="!filterable && modelValue" class="it-select-selected">{{
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
        v-show="show"
        ref="popover"
        class="it-select-dropdown"
        :class="[
          placement
            ? `it-select-dropdown--${placement}`
            : 'it-select-dropdown--bottom',
          divided && 'it-select-dropdown--divided',
        ]"
        style="width: 100%"
      >
        <ul ref="listRef" class="it-select-list">
          <li
            v-for="(option, i) in options"
            :key="i"
            :ref="
              (el) => {
                if (el) optionsRefs[i] = el
              }
            "
            class="it-select-option"
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
  import { defineComponent, ref, onBeforeUpdate, nextTick } from 'vue'

  import { Positions } from '@/models/enums'
  import { usePopover } from '@/hooks'
  import { clickOutside } from '@/directives'

  export default defineComponent({
    name: 'ItSelect',
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
          r.className.includes('focused'),
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
