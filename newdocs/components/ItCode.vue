<template>
  <pre class="it-code"><slot /></pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ItCode',
})
</script>

<style lang="less">
.it-code {
  font-size: 12px;
  font-weight: bold;
  font-family: inherit;
}
</style>
