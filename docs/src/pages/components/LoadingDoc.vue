<template>
  <div>
    <h1>Loading</h1>
    <Box :code="loadingCode" title="Loading colors">
      <it-loading></it-loading>
      <it-loading color="#f93155"></it-loading>
      <it-loading color="#ffba00"></it-loading>
      <it-loading color="#232323"></it-loading>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data: () => ({
      loadingCode: `<it-loading></it-loading>
<it-loading color="#f93155"></it-loading>
<it-loading color="#ffba00"></it-loading>
<it-loading color="#232323"></it-loading>`,

      dataSheet: [
        {
          property: 'radius',
          type: ['Number'],
          default: '32',
          values: [],
          description: 'Radius of the loader',
        },
        {
          property: 'stroke',
          type: ['Number'],
          default: '6',
          values: [],
          description: 'Stroke width of the loader',
        },
        {
          property: 'color',
          type: ['String'],
          default: '#3051ff',
          values: [],
          description: 'Color of the loader',
        },
      ],
    }),
  })
</script>
