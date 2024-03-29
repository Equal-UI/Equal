<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Tabs</h1>

    <Demobox name="ItTabs">
      <it-tabs :vertical="verticalTab" :box="boxTab">
        <it-tab title="Tab 1" class="p-4">First tab</it-tab>
        <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
        <it-tab title="Tab 3" :disabled="disabledTab" class="p-4">
          Third tab
        </it-tab>
      </it-tabs>

      <template #props>
        <it-checkbox variant="primary" v-model="verticalTab" label="Vertical" />
        <it-checkbox variant="primary" v-model="boxTab" label="Tab Box" />
        <it-checkbox
          variant="primary"
          v-model="disabledTab"
          label="Disabled Tab"
        />
      </template>
    </Demobox>
    <Box :template="boxedCode" title="Tabs in box">
      <div class="flex flex-1 flex-col">
        <it-tabs box class="flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4">
            Third tab
          </it-tab>
        </it-tabs>
        <it-tabs vertical box class="mt-3 flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4">
            Third tab
          </it-tab>
        </it-tabs>
      </div>
    </Box>
    <Box :template="notboxedCode" title="Tabs without box">
      <div class="flex flex-1 flex-col">
        <it-tabs class="flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4">
            Third tab
          </it-tab>
        </it-tabs>
        <it-tabs vertical class="mt-4 flex-1">
          <it-tab title="Tab 1" class="p-4">First tab</it-tab>
          <it-tab title="Tab 2" class="p-4">Second tab</it-tab>
          <it-tab title="Tab 3" :disabled="disabledTab" class="p-4">
            Third tab
          </it-tab>
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
