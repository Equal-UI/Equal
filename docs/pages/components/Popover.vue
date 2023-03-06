<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Popover</h1>

    <Box :template="exampleCode" title="Example">
      <it-popover :disabled="removed">
        <it-button>Delete</it-button>
        <template #content>
          <div class="p-1">
            <p class="mb-2">Please confirm deletion</p>
            <div class="flex justify-end gap-2">
              <it-button variant="text" size="small">No</it-button>
              <it-button
                size="small"
                variant="danger"
                @click="
                  ;(removed = true),
                    notification({
                      text: 'Deleted',
                      duration: 3000,
                      placement: 'top',
                      variant: 'danger',
                    })
                "
              >
                Yes
              </it-button>
            </div>
          </div>
        </template>
      </it-popover>
    </Box>

    <Box :template="positionsCode" title="Positions">
      <template #description>
        <p class="px-6">
          Click to see the popover. There are 12 positions available for
          popover, most used are shown in the example
        </p>
      </template>

      <it-button-group vertical>
        <it-popover placement="top">
          <it-button>Top</it-button>

          <template #content>Top popover</template>
        </it-popover>
        <it-popover placement="right">
          <it-button>Right</it-button>

          <template #content>Right popover</template>
        </it-popover>
        <it-popover placement="left">
          <it-button>Left</it-button>

          <template #content>Left popover</template>
        </it-popover>
        <it-popover placement="bottom">
          <it-button>Bottom</it-button>

          <template #content>Bottom popover</template>
        </it-popover>
      </it-button-group>
    </Box>

    <Box :template="imageCode" title="Image">
      <template #description>
        <p class="px-6">You can show any content inside popover</p>
      </template>

      <it-popover placement="top">
        <it-button>Show image</it-button>

        <template #content>
          <img width="150" src="/logo.svg" alt="logo" />
        </template>
      </it-popover>
    </Box>
    <props-table
      tag-name="it-popover"
      :data-sheet="dataSheet"
      :slot-sheet="slotSheet"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    removed: false,
    exampleCode: `<it-popover :disabled="removed">
  <it-button>Delete</it-button>
  <template #content>
    <div class="p-1">
      <p class="mb-2">Please confirm deletion</p>
      <div class="flex justify-end gap-2">
        <it-button variant="text" size="small">No</it-button>
        <it-button
          size="small"
          variant="danger"
          @click="
            ;(removed = true),
              notification({
                text: 'Deleted',
                duration: 3000,
                placement: 'top',
                variant: 'danger',
              })
          "
        >
          Yes
        </it-button>
      </div>
    </div>
  </template>
</it-popover>`,

    positionsCode: `<it-button-group vertical>
  <it-popover placement="top">
    <it-button>Top</it-button>
    <template #content>Top popover</template>
  </it-popover>

  <it-popover placement="right">
    <it-button>Right</it-button>
    <template #content>Right popover</template>
  </it-popover>

  <it-popover placement="left">
    <it-button>Left</it-button>
    <template #content>Left popover</template>
  </it-popover>

  <it-popover placement="bottom">
    <it-button>Bottom</it-button>
    <template #content>Bottom popover</template>
  </it-popover>
</it-button-group>`,

    imageCode: `<it-popover placement="top">
  <it-button>Show logo</it-button>

  <template #content>
    <img
      width="150"
      src="/logo.svg"
      alt="logo"
    />
  </template>
</it-popover>`,

    dataSheet: [
      {
        property: 'placement',
        type: ['String'],
        default: 'top',
        values: [
          'top',
          'bottom',
          'right',
          'left',
          'bottom-left',
          'bottom-right',
          'left-top',
          'left-bottom',
          'right-top',
          'right-bottom',
          'top-left',
          'top-right',
        ],
        description: 'Position of the popover',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Disables popover',
      },
    ],

    dataSheetGroup: [
      {
        property: 'size',
        type: ['String'],
        default: '40px',
        values: [],
        description: 'Avatar size for all avatars in group',
      },
      {
        property: 'square',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes avatars square in group',
      },
      {
        property: 'max',
        type: ['Number'],
        default: '-',
        values: [],
        description: 'Limit the maximum amount of visible avatars',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Active element for popover',
      },
      {
        name: 'content',
        description: 'Content of the popover',
      },
    ],
  }),
})
</script>
