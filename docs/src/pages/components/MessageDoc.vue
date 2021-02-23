<template>
  <div>
    <h1>Message</h1>

    <Box :code="messagesCode" title="Message types">
      <it-button type="primary" @click="showMessage">Primary message</it-button>
      <it-button type="success" @click="showMessage('success')"
        >Success message</it-button
      >
      <it-button type="danger" @click="showMessage('danger')"
        >Danger message</it-button
      >
      <it-button type="warning" @click="showMessage('warning')"
        >Warning message</it-button
      >
    </Box>

    <Box :code="durationCode" title="Duration">
      <it-button
        @click="$Message({ duration: 5000, text: 'I have 5000ms left' })"
        >5000 ms</it-button
      >
    </Box>
    <props-table :event-sheet="eventSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    messagesCode:
      `<it-button @click="showMessage()">Primary message</it-button>
<it-button @click="showMessage('Success')" type="success">Success message</it-button>
<it-button @click="showMessage('Danger')" type="danger">Danger message</it-button>
<it-button @click="showMessage('Warning')" type="warning">Warning message</it-button>

` +
      `export default {
  methods: {
    showMessage(type) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Success message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    }
  }
}`,

    durationCode: `<it-button @click="$Message({duration: 5000, text: 'I have 5000ms left'})">5000 ms</it-button>`,

    dataSheet: [
      {
        property: 'text',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Text of the message',
      },
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the message',
      },
      {
        property: 'duration',
        type: ['Number'],
        default: 4000,
        values: [],
        description: 'Message duration',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '-',
        values: ['Material Icon'],
        description: 'Message icon',
      },
    ],

    eventSheet: [
      {
        event: '@on-close',
        description: 'The event function triggered when message hides',
        arguments: 'function',
      },
    ],
  }),
  methods: {
    showMessage(type: string) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Warning message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    },
  },
})
</script>
