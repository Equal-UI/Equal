<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Spinner</h1>

    <Box :template="spinnerCode" title="Spinner colors">
      <it-spinner />
      <it-spinner
        variant="red"
        :variants="{ red: { root: '!border-r-red-500' } }"
      />
      <it-spinner
        variant="blue"
        :variants="{ blue: { root: '!border-r-blue-600' } }"
      />
      <it-spinner
        variant="yellow"
        :variants="{ yellow: { root: '!border-r-yellow-500' } }"
      />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    spinnerCode: `<it-spinner />
<it-spinner
  variant="red"
  :variants="{ red: { root: '!border-r-red-500' } }"
/>
<it-spinner
  variant="blue"
  :variants="{ blue: { root: '!border-r-blue-600' } }"
/>
<it-spinner
  variant="yellow"
  :variants="{ yellow: { root: '!border-r-yellow-500' } }"
/>`,

    dataSheet: [],
  }),
})
</script>
