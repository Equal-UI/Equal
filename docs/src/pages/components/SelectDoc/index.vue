<template>
  <div>
    <h1>Select</h1>
    <section-demo />
    <section-examples />
    <section-slots />
    <props-table
      tag-name="it-select"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionDemo from './SectionDemo/index.vue'
import SectionExamples from './SectionExamples/index.vue'
import SectionSlots from './SectionSlots/index.vue'
import { DATA_SHEET, SLOT_SHEET } from './constants'

export default defineComponent({
  components: {
    SectionDemo,
    SectionExamples,
    SectionSlots,
  },
  setup() {
    return {
      dataSheet: DATA_SHEET,
      slotSheet: SLOT_SHEET,
    }
  },
})
</script>
