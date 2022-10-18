<template>
  <div>
    <Transition v-bind="variant.transitions?.fade">
      <div v-show="focus && mask" :class="variant.mask"></div>
    </Transition>
    <span v-if="labelTop" :class="variant.label">{{ labelTop }}</span>
    <textarea
      ref="textarea"
      :value="modelValue"
      :style="{ resize, 'z-index': mask ? '100' : null }"
      :disabled="disabled"
      :class="variant.textarea"
      :placeholder="placeholder"
      :rows="rows"
      @input="onInput"
      @focus="focus = true"
      @blur="focus = false"
    ></textarea>
    <Transition v-bind="variant.transitions?.fade">
      <span v-if="message" :class="variant.message">{{ message }}</span>
    </Transition>
  </div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITTextareaOptions } from '@/types/components/components'
import { defineComponent, onMounted, nextTick, ref, computed } from 'vue'

export default defineComponent({
  name: Components.ITTextarea,
  props: {
    ...getVariantPropsWithClassesList<ITTextareaOptions>(),
    placeholder: String,
    disabled: Boolean,
    resizable: Boolean,
    resizeOnWrite: Boolean,
    labelTop: String,
    rows: { type: Number, default: 4 },
    modelValue: String,
    mask: Boolean,
    message: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITTextareaOptions>(
        Components.ITTextarea,
        <VariantJSWithClassesListProps<ITTextareaOptions>>props,
      ),
    )

    const textarea = ref(null)
    const focus = ref(false)

    const resize = computed(() =>
      props.resizable === true ? 'vertical' : 'none',
    )

    function onInput(e: InputEvent) {
      const target = e.target as HTMLTextAreaElement
      emit('update:modelValue', target.value)

      if (props.resizeOnWrite) {
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
      }
    }

    onMounted(async () => {
      if (props.resizeOnWrite) {
        await nextTick()
        ;(textarea.value! as HTMLTextAreaElement).style.height =
          ((textarea.value! as HTMLTextAreaElement).scrollHeight || 88) + 'px'
      }
    })

    return { textarea, onInput, resize, focus, variant }
  },
})
</script>
