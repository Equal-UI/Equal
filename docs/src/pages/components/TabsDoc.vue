<template>
  <div>
    <h1>Tabs</h1>

    <Demobox>
      <it-tabs :vertical="verticalTab" :box="boxTab">
        <it-tab title="Tab 1" class="p-4">First tab</it-tab>
        <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
        <it-tab title="Tab 3" :disabled="disabledTab" class="p-4"
          >Third tab</it-tab
        >
      </it-tabs>

      <template #props>
        <it-checkbox v-model="verticalTab" label="Vertical" />
        <it-checkbox v-model="boxTab" label="Tab Box" />
        <it-checkbox v-model="disabledTab" label="Disabled Tab" />
      </template>
    </Demobox>
    <Box :code="boxedCode" title="Tabs in box">
      <div class="flex flex-col flex-1">
        <it-tabs box class="flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</it-tab
          >
        </it-tabs>
        <it-tabs vertical box class="flex-1 mt-3">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</it-tab
          >
        </it-tabs>
      </div>
    </Box>
    <Box :code="notboxedCode" title="Tabs without box">
      <div class="flex flex-col flex-1">
        <it-tabs class="flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</it-tab
          >
        </it-tabs>
        <it-tabs vertical class="flex-1 mt-4">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4"
            >Third tab</it-tab
          >
        </it-tabs>
      </div>
    </Box>
    <props-table
      tag-name="it-tabs"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
    <props-table
      tag-name="it-tab"
      :data-sheet="dataSheet2"
      :slot-sheet="slotSheet2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    verticalTab: false,
    boxTab: true,
    disabledTab: false,

    boxedCode: `<div style="display: flex; flex-direction: column; flex: 1">
  <it-tabs box style="flex: 1">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>

  <it-tabs vertical box style="flex: 1; margin-top: 12px">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>
</div>`,

    notboxedCode: `<div style="display: flex; flex-direction: column; flex: 1">
  <it-tabs style="flex: 1">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>

  <it-tabs vertical style="flex: 1; margin-top: 16px">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>
</div>`,

    dataSheet: [
      {
        property: 'initial-tab',
        type: ['Number'],
        default: '0',
        values: [],
        description: 'Selected tab index',
      },
      {
        property: 'vertical',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tabs vertical',
      },
      {
        property: 'box',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show tabs in box',
      },
    ],
    slotSheet: [{ name: 'default', description: 'Slot for it-tab' }],
    dataSheet2: [
      {
        property: 'title',
        type: ['String'],
        default: '',
        values: [],
        description: 'Tab title',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes tab disabled',
      },
    ],
    slotSheet2: [{ name: 'default', description: 'it-tab content' }],
  }),
})
</script>
