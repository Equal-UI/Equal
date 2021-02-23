<template>
  <ul class="it-dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'it-dropdown-menu',
})
</script>
