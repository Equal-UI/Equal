<template>
  <div>
    <h1>Tag</h1>

    <Demobox name="it-tag">
      <it-tag
        v-show="show"
        :filled="tagFilled"
        :closable="tagClosable"
        :variant="tagvariant"
        @close="onClose"
      >
        <span>{{ tagText }}</span>
      </it-tag>

      <template #props>
        <it-select
          v-model="tagvariant"
          placeholder="Select variant"
          label-top="Tag variant"
          :options="tagvariants"
        >
        </it-select>
        <it-input v-model="tagText" label-top="Tag text" />
        <it-checkbox v-model="tagFilled" label="Filled" />
        <it-checkbox v-model="tagClosable" label="Closable" />
      </template>
    </Demobox>
    <Box :code="variantsCode" title="variants">
      <it-tag>Neutral</it-tag>
      <it-tag variant="primary">Primary</it-tag>
      <it-tag variant="success">Success</it-tag>
      <it-tag variant="danger">Danger</it-tag>
      <it-tag variant="warning">Warning</it-tag>
    </Box>
    <Box :code="filledCode" title="Filled">
      <it-tag filled>Neutral</it-tag>
      <it-tag variant="primary" filled> Primary</it-tag>
      <it-tag variant="success" filled>Success</it-tag>
      <it-tag variant="danger" filled>Danger</it-tag>
      <it-tag variant="warning" filled>Warning</it-tag>
    </Box>
    <props-table :data-sheet="dataSheet" :event-sheet="eventSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    show: true,

    tagText: 'Tag',
    tagClosable: false,
    tagFilled: false,
    tagvariant: 'default',
    tagvariants: ['primary', 'success', 'danger', 'warning', 'default'],

    variantsCode: `<it-tag>Neutral</it-tag>
<it-tag ||| variant="primary" |||>Primary</it-tag>
<it-tag ||| variant="success" |||>Success</it-tag>
<it-tag ||| variant="danger" |||>Danger</it-tag>
<it-tag ||| variant="warning" |||>Warning</it-tag>`,

    filledCode: `<it-tag ||| filled |||>Neutral</it-tag>
<it-tag variant="primary" ||| filled |||>Primary</it-tag>
<it-tag variant="success" ||| filled |||>Success</it-tag>
<it-tag variant="danger" ||| filled |||>Danger</it-tag>
<it-tag variant="warning" ||| filled |||>Warning</it-tag>
`,

    eventSheet: [
      {
        event: '@close',
        description:
          'The event function triggered when user clicks on close icon',
        arguments: 'function(e: Event)',
      },
    ],

    dataSheet: [
      {
        property: 'variant',
        type: ['String'],
        default: 'neutral',
        values: ['primary', 'success', 'danger', 'warning', 'neutral'],
        description: 'variant of the tag',
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
  methods: {
    onClose() {
      this.show = false
    },
  },
})
</script>
