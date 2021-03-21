<template>
  <div>
    <h1>Select</h1>
    <SectionDemo />
    <SectionExamples />
    <props-table tag-name="it-select" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionDemo from './SectionDemo/index.vue'
import SectionExamples from './SectionExamples/index.vue'
import { DATA_SHEET_PROPS } from './constants'

export default defineComponent({
  components: {
    SectionDemo,
    SectionExamples,
  },
  setup() {
    return {
      dataSheet: DATA_SHEET_PROPS,
    }
  },
})
</script>
