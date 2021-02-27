<template>
  <div>
    <h1>Tag</h1>

    <Demobox>
      <it-tag :filled="tagFilled" :closable="tagClosable" :type="tagType">
        <span>{{ tagText }}</span>
      </it-tag>

      <template #props>
        <it-select
          v-model="tagType"
          placeholder="Select type"
          label-top="Tag type"
          :options="tagTypes"
        >
        </it-select>
        <it-input v-model="tagText" label-top="Tag text" />
        <it-checkbox v-model="tagFilled" label="Filled" />
        <it-checkbox v-model="tagClosable" label="Closable" />
      </template>
    </Demobox>
    <Box :code="typesCode" title="Types">
      <it-tag>Neutral</it-tag>
      <it-tag type="primary">Primary</it-tag>
      <it-tag type="success">Success</it-tag>
      <it-tag type="danger">Danger</it-tag>
      <it-tag type="warning">Warning</it-tag>
      <it-tag type="black">Black</it-tag>
    </Box>
    <Box :code="filledCode" title="Filled">
      <it-tag>Neutral</it-tag>
      <it-tag type="primary" filled>Primary</it-tag>
      <it-tag type="success" filled>Success</it-tag>
      <it-tag type="danger" filled>Danger</it-tag>
      <it-tag type="warning" filled>Warning</it-tag>
      <it-tag type="black" filled>Black</it-tag>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    tagText: 'Tag',
    tagClosable: false,
    tagFilled: false,
    tagType: 'neutral',
    tagTypes: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],

    typesCode: `<it-tag>Neutral</it-tag>
<it-tag type="primary">Primary</it-tag>
<it-tag type="success">Success</it-tag>
<it-tag type="danger">Danger</it-tag>
<it-tag type="warning">Warning</it-tag>
<it-tag type="black">Black</it-tag>`,

    filledCode: `<it-tag>Neutral</it-tag>
<it-tag type="primary" filled >Primary</it-tag>
<it-tag type="success" filled >Success</it-tag>
<it-tag type="danger" filled >Danger</it-tag>
<it-tag type="warning" filled >Warning</it-tag>
<it-tag type="black" filled >Black</it-tag>
`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'neutral',
        values: ['primary', 'success', 'danger', 'warning', 'black', 'neutral'],
        description: 'Type of the tag',
      },
      {
        property: 'filled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tag filled',
      },
      {
        property: 'closable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tag closable',
      },
    ],
  }),
})
</script>
