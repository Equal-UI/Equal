<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Notification</h1>

    <Box :template="typesTemplate" :code="typesCode" title="Default example">
      <it-button type="primary" @click="notificationExample()">
        Notification example
      </it-button>
    </Box>
    <Box
      :template="placementCode"
      :code="typesCode"
      title="Notification position"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-center gap-3">
          <it-button @click="notificationExample('top-left')">
            {{ $t('sides.top-left') }}
          </it-button>
          <it-button @click="notificationExample('top')">
            {{ $t('sides.top') }}
          </it-button>
          <it-button @click="notificationExample('top-right')">
            {{ $t('sides.top-right') }}
          </it-button>
        </div>
        <div class="flex flex-row justify-center gap-3">
          <it-button @click="notificationExample('bottom-left')">
            {{ $t('sides.bottom-left') }}
          </it-button>
          <it-button @click="notificationExample('bottom')">
            {{ $t('sides.bottom') }}
          </it-button>
          <it-button @click="notificationExample('bottom-right')">
            {{ $t('sides.bottom-right') }}
          </it-button>
        </div>
      </div>
    </Box>
    <Box :template="variantsCode" :code="durationCode" title="Variants">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-center gap-3">
          <it-button
            @click="
              notification({
                title: 'Task is done',
                text: 'Congratulations! Your task is finished, have a rest',
                variant: 'success',
                placement: 'bottom-right',
              })
            "
          >
            Success
          </it-button>
          <it-button
            @click="
              notification({
                title: 'Task is not available',
                text: 'This task is not available for your type of user',
                variant: 'warning',
                placement: 'bottom-right',
              })
            "
          >
            Warning
          </it-button>
          <it-button
            @click="
              notification({
                title: 'Task is deleted',
                text: 'Your task has been deleted',
                variant: 'danger',
                placement: 'bottom-right',
              })
            "
          >
            Danger
          </it-button>
        </div>
      </div>
    </Box>
    <Box
      :template="durationTemplate"
      :code="durationCode"
      title="Duration line"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-center gap-3">
          <it-button
            @click="
              notification({
                title: 'Task is done',
                text: 'Congratulations! Your task is finished, have a rest',
                variant: 'success',
                placement: 'bottom-right',
                progress: true,
              })
            "
          >
            Success
          </it-button>
          <it-button
            @click="
              notification({
                title: 'Task is not available',
                text: 'This task is not available for your type of user',
                variant: 'warning',
                placement: 'bottom-right',
                progress: true,
              })
            "
          >
            Warning
          </it-button>
          <it-button
            @click="
              notification({
                title: 'Task is deleted',
                text: 'Your task has been deleted',
                variant: 'danger',
                placement: 'bottom-right',
                progress: true,
              })
            "
          >
            Danger
          </it-button>
        </div>
      </div>
    </Box>
    <Box :template="variantCode" :code="durationCode" title="Custom variant">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-center gap-3">
          <it-button
            @click="
              notification({
                title: 'Task is done',
                text: 'Congratulations! Your task is finished, have a rest',
                variants: {
                  sky: {
                    root: '!border-indigo-500/80',
                    title: '!text-indigo-500',
                  },
                },
                variant: 'sky',
              })
            "
          >
            Magic
          </it-button>
        </div>
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { useNotification } from '@/'
import { NotificationExample as NotificationExampleComponent } from '#components'

export default defineComponent({
  setup() {
    const notification = useNotification()
    function notificationExample(placement = 'top') {
      notification(
        {
          duration: 3000,
          placement,
        },
        h(NotificationExampleComponent),
      )
    }
    return { notification, notificationExample }
  },
  data: () => ({
    typesTemplate: `<it-button @click="notificationExample()">
  Notification example
</it-button>`,

    durationCode: `import { defineComponent } from 'vue'
import { useNotification } from '@/'

export default defineComponent({
  setup() {
    const notification = useNotification()
    return { notification }
  },
})`,

    variantsCode: `<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      ||| variant: 'success' |||,
      placement: 'bottom-right',
    })
  "
>
  Success
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is not available',
      text: 'This task is not available for your type of user',
      ||| variant: 'warning' |||,
      placement: 'bottom-right',
    })
  "
>
  Warning
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is deleted',
      text: 'Your task has been deleted',
      ||| variant: 'danger' |||,
      placement: 'bottom-right',
    })
  "
>
  Danger
</it-button>`,

    variantCode: `<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      variants: {
       ||| sky |||: {
          root: '!border-indigo-500/80',
          title: '!text-indigo-500',
        },
      },
      ||| variant: 'sky' |||,
    })
  "
>
  Magic
</it-button>`,

    durationTemplate: `<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      variant: 'success',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Success
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is not available',
      text: 'This task is not available for your type of user',
      variant: 'warning',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Warning
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is deleted',
      text: 'Your task has been deleted',
      variant: 'danger',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Danger
</it-button>`,

    typesCode: `import { defineComponent, h } from 'vue'
import { useNotification } from 'equal-vue'

export default defineComponent({
  setup() {
    const notification = useNotification()
    function notificationExample(placement = 'top') {
      notification(
        {
          duration: 3000,
          placement,
        },
        h(NotificationExample),
      )
    }
    return { notificationExample }
  }
})
`,

    placementCode: `<it-button @click="notificationExample('top-left')">
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
</it-button>`,

    dataSheet: [
      {
        property: 'progress',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Duration line',
      },
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
