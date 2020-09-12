<template>
  <div>
    <transition name="fade">
      <div class="it-textarea-mask" v-show="focus && mask"></div>
    </transition>
    <span v-if="labelTop" class="it-input-label">{{ labelTop }}</span>
    <textarea
      @input="onInput"
      @focus="focus = true"
      @blur="focus = false"
      ref="textarea"
      :style="{ resize }"
      :disabled="disabled"
      class="it-textarea"
      :placeholder="placeholder"
      :rows="rows"
      >{{ valueModel }}</textarea
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick, ref, computed } from 'vue'

export default defineComponent({
  name: 'it-textarea',
  props: {
    placeholder: String,
    disabled: Boolean,
    resizable: Boolean,
    resizeOnWrite: Boolean,
    labelTop: String,
    rows: { type: Number, default: 4 },
    valueModel: String,
    mask: Boolean,
  },
  setup(props, { emit }) {
    const textarea = ref(null)
    const focus = ref(false)

    const resize = computed(() =>
      props.resizable === true ? 'vertical' : 'none'
    )

    function onInput(e: InputEvent) {
      const target = e.target as HTMLTextAreaElement
      emit('update:valueModel', target.value)

      if (props.resizeOnWrite) {
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
      }
    }

    onMounted(async () => {
      if (props.resizeOnWrite) {
        await nextTick()
        ;(textarea.value! as HTMLTextAreaElement).style.height =
          (textarea.value! as HTMLTextAreaElement).scrollHeight + 'px'
      }
    })

    return { textarea, onInput, resize, focus }
  },
})
</script>
