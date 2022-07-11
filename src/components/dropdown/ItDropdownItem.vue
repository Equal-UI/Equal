<template>
  <li
    class="it-dropdown-item"
    :class="[disabled && 'it-dropdown-item--disabled']"
  >
    <div>
      <it-icon v-if="icon" class="it-dropdown-icon" :name="icon"></it-icon>
      <span class="it-dropdown-text">
        <slot></slot>
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-dropdown-item',
  props: {
    disabled: Boolean,
    icon: String,
  },
})
</script>
