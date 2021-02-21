<template>
  <div
    :style="{
      'align-items': align,
      'justify-content': justify,
      width: (width * 100) / 12 + '%',
    }"
    class="it-row"
  >
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Row',
    props: {
      width: { default: 12 },
      justify: String,
      align: String,
    },
  })
</script>

<style lang="css">
  .it-row {
    clear: both;
    flex-flow: wrap;
  }
</style>
