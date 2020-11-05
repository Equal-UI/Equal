<template>
  <div>
    <h1>Drawer</h1>

    <Box title="Drawer">
      <template #description>
        <p style="padding: 0px 24px">This component is intended to be used only with wide screens</p>
      </template>
      <it-button @click="drawerVisible = true" type="primary">Show drawer</it-button>
      <it-drawer v-model="drawerVisible" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    drawerVisible: false,


    // todo: change props
    // todo: add more examples
    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the modal',
      },
      {
        property: 'title',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Title of the modal',
      },
      {
        property: 'content',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Content of the modal',
      },
      {
        property: 'closable-mask',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Close modal on the mask click',
      },
      {
        property: 'close-on-esc',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Close modal on esc',
      },
      {
        property: 'hide-footer',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Hide modal footer with buttons',
      },
    ],
  }),
})
</script>
