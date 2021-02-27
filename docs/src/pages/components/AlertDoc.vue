<template>
  <div>
    <h1>Alert</h1>

    <Demobox>
      <it-alert
        :iconbox="alertIconBox"
        :type="alertType"
        :show-icon="alertShowIcon"
        :closable="alertClosable"
        :title="alertTitle"
        :body="alertBody"
        @on-close="alertVisible = false"
      />
      <template #props>
        <it-select
          v-model="alertType"
          placeholder="Select type"
          label-top="Alert type"
          :options="alertTypes"
        />
        <it-input v-model="alertTitle" label-top="Alert title" />
        <it-input v-model="alertBody" label-top="Alert Body" />
        <it-checkbox v-model="alertShowIcon" label="Icon" />
        <it-checkbox v-model="alertIconBox" label="Icon box" />
        <it-checkbox v-model="alertClosable" label="Closable" />
        <it-checkbox v-model="alertVisible" label="Visible" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <div class="flex flex-col flex-1">
        <it-alert type="primary" :title="alertTitle" :body="alertBody" />
        <it-alert type="success" :title="alertTitle" :body="alertBody" />
        <it-alert type="danger" :title="alertTitle" :body="alertBody" />
        <it-alert type="warning" :title="alertTitle" :body="alertBody" />
      </div>
    </Box>

    <Box :code="typesBox" title="Icon in box">
      <div class="flex flex-col flex-1">
        <it-alert
          iconbox
          type="primary"
          :title="alertTitle"
          :body="alertBody"
        />
        <it-alert
          iconbox
          type="success"
          :title="alertTitle"
          :body="alertBody"
        />
        <it-alert iconbox type="danger" :title="alertTitle" :body="alertBody" />
        <it-alert
          iconbox
          type="warning"
          :title="alertTitle"
          :body="alertBody"
        />
      </div>
    </Box>

    <Box :code="slotCode" title="Slot">
      <div class="flex flex-col flex-1">
        <it-alert type="primary" title="Alert with slot body">
          You can put whatever you want here, I'd put a
          <it-tag type="primary">Tag</it-tag>
        </it-alert>
      </div>
    </Box>

    <props-table
      :slot-sheet="slotSheet"
      :event-sheet="eventSheet"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    alertVisible: true,
    alertTitle: 'Alert title',
    alertBody: 'We think we know you',
    alertShowIcon: true,
    alertClosable: false,
    alertType: 'primary',
    alertTypes: ['primary', 'success', 'danger', 'warning'],
    alertIconBox: false,

    typesCode: `<it-alert type="primary" :title="alertTitle" :body="alertBody"/>
<it-alert type="success" :title="alertTitle" :body="alertBody"/>
<it-alert type="danger" :title="alertTitle" :body="alertBody"/>
<it-alert type="warning" :title="alertTitle" :body="alertBody"/>`,

    typesBox: `<it-alert iconbox type="primary" :title="alertTitle" :body="alertBody"/>
<it-alert iconbox type="success" :title="alertTitle" :body="alertBody"/>
<it-alert iconbox type="danger" :title="alertTitle" :body="alertBody"/>
<it-alert iconbox type="warning" :title="alertTitle" :body="alertBody"/>`,

    slotCode: `<it-alert type="primary" title="Alert with slot body">
  You can put whatever you want here, I'd put a <it-tag type="primary">Tag</it-tag>
</it-alert>`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning', 'black'],
        description: 'Type of the alert',
      },
      {
        property: 'title',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Title of the alert',
      },
      {
        property: 'body',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Body of the alert',
      },
      {
        property: 'show-icon',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Show icon',
      },
      {
        property: 'iconbox',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show icon in the box',
      },
      {
        property: 'closable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes alert closable',
      },
      {
        property: 'visible',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Visibility of the alert',
      },
    ],

    eventSheet: [
      {
        event: '@on-close',
        description:
          'The event function triggered when user clicks on close icon',
        arguments: 'function(e: Event)',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Alert body',
      },
    ],
  }),
})
</script>

<style>
.it-alert + .it-alert {
  margin-top: 13px;
}
</style>
