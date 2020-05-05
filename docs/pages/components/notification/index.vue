<template>
  <div>
    <h1>Notification</h1>

    <Box :code="typesCode" title="Notification types">
      <it-button
        @click="$Notification({
      title: 'Primary notification',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
        type="primary"
      >Primary notification</it-button>
      <it-button
        type="success"
        @click="$Notification.success({
      title: 'Success notification',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Success notification</it-button>
      <it-button
        type="danger"
        @click="$Notification.danger({
      title: 'Danger notification',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Danger notification</it-button>
      <it-button
        type="warning"
        @click="$Notification.warning({
      title: 'Warning notification',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Warning notification</it-button>
    </Box>
    <Box :code="emojiCode" title="🧬 Notification with Emoji">
      <it-button
        outlined
        @click="$Notification({
      title: 'Emoji notification',
      emoji: '🧬',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >🧬 Emoji notification</it-button>
    </Box>
    <Box :code="imageCode" title="Notification with image">
      <it-button
        @click="$Notification({
      title: 'Image notification',
      image: '/Equal/husky.jpg',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Click me</it-button>
    </Box>
    <Box :code="placementCode" title="Notification position">
      <it-button
        @click="$Notification({
      title: 'Top-left notification',
      image: '/Equal/husky.jpg',
      placement: 'top-left',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Top-left</it-button>
      <it-button
        @click="$Notification({
      title: 'Top-right notification',
      image: '/Equal/husky.jpg',
      placement: 'top-right',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Top-right</it-button>
      <it-button
        @click="$Notification({
      title: 'Bottom-left notification',
      image: '/Equal/husky.jpg',
      placement: 'bottom-left',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Bottom-left</it-button>
      <it-button
        @click="$Notification({
      title: 'Top-right notification',
      image: '/Equal/husky.jpg',
      placement: 'bottom-right',
      text:
        'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      })"
      >Bottom-right</it-button>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Box from '~/components/Box.vue'
import PropsTable from '~/components/Table.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Box, PropsTable }
})
export default class NotificationPage extends Vue {
  public typesCode = `
<it-button
  @click="$Notification({
  title: 'Primary notification',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Primary notification</it-button>
<it-button
  type="success"
  @click="$Notification.success({
  title: 'Success notification',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Success notification</it-button>
<it-button
  type="danger"
  @click="$Notification.danger({
  title: 'Danger notification',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Danger notification</it-button>
<it-button
  type="warning"
  @click="$Notification.warning({
  title: 'Warning notification',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Warning notification</it-button>`

  public emojiCode = `
<it-button
  outlined
  @click="$Notification({
    title: 'Emoji notification',
    emoji: '🧬',
    text:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>🧬 Emoji notification</it-button>`

  public imageCode = `
<it-button
  @click="$Notification({
  title: 'Image notification',
  image: 'https://images.unsplash.com/photo-1545920281-8f9385c1b875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Click me</it-button>`

  public placementCode= `
<it-button
  @click="$Notification({
  title: 'Top-left notification',
  image: '/Equal/husky.jpg',
  placement: 'top-left',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Top-left</it-button>
<it-button
  @click="$Notification({
  title: 'Top-right notification',
  image: '/Equal/husky.jpg',
  placement: 'top-right',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Top-right</it-button>
<it-button
  @click="$Notification({
  title: 'Bottom-left notification',
  image: '/Equal/husky.jpg',
  placement: 'bottom-left',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Bottom-left</it-button>
<it-button
  @click="$Notification({
  title: 'Top-right notification',
  image: '/Equal/husky.jpg',
  placement: 'bottom-right',
  text:
    'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  })"
>Bottom-right</it-button>`

  public dataSheet = [
    {
      property: 'type',
      type: ['String'],
      default: 'primary',
      values: ['primary', 'success', 'danger', 'warning'],
      description: 'Type of the notification'
    },
    {
      property: 'title',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Title of the notification'
    },
    {
      property: 'text',
      type: ['String'],
      default: '-',
      values: [],
      description: 'Content of the notification'
    },
    {
      property: 'placeennt',
      type: ['String'],
      default: 'top-right',
      values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position of the notification'
    },
    {
      property: 'duration',
      type: ['Number'],
      default: '5000',
      values: [],
      description: 'Duration of the notification'
    },
    {
      property: 'icon',
      type: ['String'],
      default: 'Depends on notifcation type',
      values: ['Material Icons'],
      description: 'Icon of the notification'
    },
    {
      property: 'image',
      type: ['String'],
      default: '-',
      values: ['url'],
      description: 'Image of the notification'
    },

    {
      property: 'emoji',
      type: ['String'],
      default: '-',
      values: ['emoji'],
      description: 'Emoji of the notification'
    },
    {
      property: 'on-close',
      type: ['Function'],
      default: '() => void',
      values: [],
      description: 'Callback triggers when notification hides'
    }
  ]
}
</script>
