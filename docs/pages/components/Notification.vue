<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Notification</h1>

    <Box :code="typesCode" title="Notification types">
      <it-button type="primary" @click="notificationExample()">
        Notification example
      </it-button>
    </Box>
    <!-- <Box :code="imageCode" title="Notification with image">
      <it-button
        @click="
          $Notification({
            title: 'Image notification',
            image: '/Equal/husky.jpg',
            text: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          })
        "
      >
        Click me
      </it-button>
    </Box> -->
    <Box :code="placementCode" title="Notification position">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-center gap-3">
          <it-button @click="notificationExample('top-left')">
            Top-left
          </it-button>
          <it-button @click="notificationExample('top')">Top</it-button>
          <it-button @click="notificationExample('top-right')">
            Top-right
          </it-button>
        </div>
        <div class="flex flex-row justify-center gap-3">
          <it-button @click="notificationExample('bottom-left')">
            Bottom-left
          </it-button>
          <it-button @click="notificationExample('bottom')">Bottom</it-button>
          <it-button @click="notificationExample('bottom-right')">
            Bottom-right
          </it-button>
        </div>
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { NotificationExample } from '#components'

export default defineComponent({
  methods: {
    notificationExample(placement = 'top') {
      this.$Notification(
        {
          duration: 3000,
          placement,
        },
        h(NotificationExample),
      )
    },
  },
  data: () => ({
    NotificationExample,
    typesCode: `
<it-button type="primary" @click="notificationExample()">
  Notification example
</it-button>

notificationExample(placement = 'top') {
  this.$Notification(
    {
      duration: 3000,
      placement,
    },
    h(NotificationExample), // your own component
  )
}`,

    placementCode: `
<it-button @click="notificationExample('top-left')">
  Top-left
</it-button>
<it-button @click="notificationExample('top')">Top</it-button>
<it-button @click="notificationExample('top-right')">
  Top-right
</it-button>
<it-button @click="notificationExample('bottom-left')">
  Bottom-left
</it-button>
<it-button @click="notificationExample('bottom')">Bottom</it-button>
<it-button @click="notificationExample('bottom-right')">
  Bottom-right
</it-button>

notificationExample(placement = 'top') {
  this.$Notification(
    {
      duration: 3000,
      placement,
    },
    h(NotificationExample), // your own component
  )
}`,

    dataSheet: [
      {
        property: 'title',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Title of the notification',
      },
      {
        property: 'text',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Content of the notification',
      },
      {
        property: 'placement',
        type: ['String'],
        default: 'top-right',
        values: [
          'top-right',
          'top',
          'top-left',
          'bottom-right',
          'bottom',
          'bottom-left',
        ],
        description: 'Position of the notification',
      },
      {
        property: 'duration',
        type: ['Number'],
        default: '5000',
        values: [],
        description: 'Duration of the notification',
      },
      {
        property: 'on-close',
        type: ['Function'],
        default: '() => void',
        values: [],
        description: 'Callback triggers when notification hides',
      },
    ],
  }),
})
</script>
