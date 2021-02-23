<template>
  <div
    class="it-collapse-item"
    :class="[active && 'it-collapse-item--expanded']"
  >
    <button
      class="it-collapse-item-title"
      :aria-expanded="active"
      @click="active = !active"
    >
      <span>{{ title }}</span>
      <it-icon class="it-collapse-item-title-icon" name="unfold_more" />
    </button>
    <transition name="fade">
      <div v-show="active" class="it-collapse-item-body">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'it-collapse-item',
  props: {
    title: { type: String },
    opened: { type: Boolean },
  },
  setup(props) {
    const active = ref(props.opened)
    return { active }
  },
})
</script>
