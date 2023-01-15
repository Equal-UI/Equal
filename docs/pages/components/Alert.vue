<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Alert</h1>

    <Demobox name="it-alert">
      <it-alert
        v-show="alertVisible"
        :variant="alertType"
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
        <it-checkbox variant="primary" v-model="alertShowIcon" label="Icon" />
        <it-checkbox
          variant="primary"
          v-model="alertClosable"
          label="Closable"
        />
        <it-checkbox variant="primary" v-model="alertVisible" label="Visible" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-alert :title="alertTitle" :body="alertBody" />
      <it-alert variant="primary" :title="alertTitle" :body="alertBody" />
      <it-alert variant="success" :title="alertTitle" :body="alertBody" />
      <it-alert variant="danger" :title="alertTitle" :body="alertBody" />
      <it-alert variant="warning" :title="alertTitle" :body="alertBody" />
    </Box>

    <Box :code="slotCode" title="Slot">
      <it-alert variant="primary" title="Alert with slot body">
        You can put whatever you want here, I'd put a
        <it-tag variant="primary">Tag</it-tag>
      </it-alert>
    </Box>

    <props-table
      :slot-sheet="slotSheet"
      :event-sheet="eventSheet"
      :data-sheet="dataSheet"
    />
  </div>
</template>

<script setup lang="ts">
import { variantProps } from '~~/data/dataSheetVariantProps'

const alertVisible = ref(true)
const alertTitle = ref('Alert title')
const alertBody = ref('We think we know you')
const alertShowIcon = ref(true)
const alertClosable = ref(false)
const alertType = ref('primary')
const alertTypes = ref(['primary', 'success', 'danger', 'warning'])
const alertIconBox = ref(false)

const typesCode = `<it-alert ||| variant="primary" ||| :title="alertTitle" :body="alertBody"/>
<it-alert ||| variant="success" ||| :title="alertTitle" :body="alertBody"/>
<it-alert ||| variant="danger" ||| :title="alertTitle" :body="alertBody"/>
<it-alert ||| variant="warning" ||| :title="alertTitle" :body="alertBody"/>`

const slotCode = `<it-alert variant="primary" title="Alert with slot body">
  You can put whatever you want here, I'd put a ||| <it-tag variant="primary">Tag</it-tag> |||
</it-alert>`

const dataSheet = variantProps.concat([
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
    property: 'closable',
    type: ['Boolean'],
    default: 'false',
    values: [],
    description: 'Show close button',
  },
  {
    property: 'visible',
    type: ['Boolean'],
    default: 'true',
    values: [],
    description: 'Visibility of the alert',
  },
])

const eventSheet = [
  {
    event: '@on-close',
    description: 'The event function triggered when user clicks on close icon',
    arguments: 'function(e: Event)',
  },
]

const slotSheet = [
  {
    name: 'default',
    description: 'Alert body',
  },
]
</script>
