<template>
  <div>
    <h1>Message</h1>

    <Box :code="messagesCode" title="Message types">
      <div class="flex !w-40 flex-col gap-2">
        <it-input v-model="messageText" />
        <it-button type="primary" @click="showMessage">Message</it-button>
      </div>
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
import ItTag from '@/components/tag'

export default defineComponent({
  data: () => ({
    messageText: 'Hello',
    messagesCode: `<it-button @click="showMessage()">Message</it-button>`,
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
    showMessage() {
      const { id, Message } = this.$Message(
        { text: this.messageText },
        // h(ItTag, () => '12312312312223'),
      )
      setTimeout(() => {
        Message.close(id)
      }, 2000)
    },
  },
})
</script>
