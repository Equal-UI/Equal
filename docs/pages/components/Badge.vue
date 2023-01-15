<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Badge</h1>

    <Demobox name="it-badge">
      <it-badge
        :value="badgeValue"
        :show="badgeShow"
        :variant="badgeType"
        :max-value="badgeMax"
        :point="badgePoint"
        :square="badgeSquare"
        :position="badgePosition"
      >
        <it-button>Badged</it-button>
      </it-badge>
      <template #props>
        <it-select
          v-model="badgeType"
          placeholder="Select type"
          label-top="Badge type"
          :options="badgeTypes"
        ></it-select>
        <it-select
          v-model="badgePosition"
          placeholder="Select position"
          label-top="Badge position"
          :options="badgePositions"
        ></it-select>
        <it-checkbox variant="primary" v-model="badgePoint" label="Point" />
        <it-checkbox variant="primary" v-model="badgeSquare" label="Square" />
        <it-checkbox variant="primary" v-model="badgeShow" label="Show" />
        <it-number-input v-model="badgeMax" label-top="Max value" />
        <it-number-input v-model="badgeValue" label-top="Badge value" />
      </template>
    </Demobox>

    <Box :code="typesCode" title="Type">
      <it-badge value="12" variant="primary">
        <it-button>Primary</it-button>
      </it-badge>
      <it-badge value="new" variant="danger">
        <it-button>Default</it-button>
      </it-badge>
      <it-badge value="12" variant="success">
        <it-button>Success</it-button>
      </it-badge>
      <it-badge value="12" variant="warning">
        <it-button>Warning</it-button>
      </it-badge>
    </Box>

    <Box :code="combineCode" title="With another component">
      <it-badge value="Typing..." variant="danger">
        <it-avatar
          square
          size="80px"
          src="https://randomuser.me/api/portraits/women/17.jpg"
        />
      </it-badge>
    </Box>

    <Box :code="pointCode" title="Point">
      <it-badge variant="primary" point>
        <it-button>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </template>
        </it-button>
      </it-badge>
      <it-badge variant="danger" point>
        <it-button>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </template>
        </it-button>
      </it-badge>
      <it-badge variant="success" point>
        <it-button>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </template>
        </it-button>
      </it-badge>
      <it-badge variant="warning" point>
        <it-button>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </template>
        </it-button>
      </it-badge>
    </Box>

    <Box :code="squareCode" title="Square">
      <it-badge variant="primary" :value="12" square>
        <it-button>Square</it-button>
      </it-badge>
      <it-badge variant="primary" point square>
        <it-button>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </template>
        </it-button>
      </it-badge>
    </Box>

    <Box :code="positionsCode" title="Positions">
      <it-badge point :value="12">
        <it-button>Top-right</it-button>
      </it-badge>
      <it-badge point position="bottom-right" :value="12">
        <it-button>Bottom-right</it-button>
      </it-badge>
      <it-badge point position="bottom-left" :value="12">
        <it-button>Bottom-left</it-button>
      </it-badge>
      <it-badge point position="top-left" :value="12">
        <it-button>Top-left</it-button>
      </it-badge>
    </Box>

    <Box :code="maxvalCode" title="Max value">
      <it-badge :value="110" :max-value="99">
        <it-tag variant="danger">Maximum</it-tag>
      </it-badge>

      <it-tag variant="success" filled class="ml-2">
        <it-badge variant="success" point />
        In range
      </it-tag>
    </Box>

    <Box :code="standaloneCode" title="Standalone">
      <it-badge :value="101" />
      <it-badge :value="101" square />
    </Box>

    <Box :code="customCode" title="Custom variant">
      <it-badge
        value="🐇"
        variant="violet"
        :variants="{ violet: { body: 'bg-violet-600' } }"
      >
        <it-button>🪄🎩</it-button>
      </it-badge>

      <it-badge
        :show="cstmShow"
        value="🐇"
        variant="violet"
        :variants="{ violet: { body: 'bg-violet-600' } }"
        @click="cstmShow = !cstmShow"
      >
        <it-button>🪄🎩</it-button>
      </it-badge>
    </Box>

    <props-table :data-sheet="dataSheet" :slot-sheet="slotSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { variantProps } from '~~/data/dataSheetVariantProps'

export default defineComponent({
  data: () => ({
    badgeValue: 97,
    badgePoint: false,
    badgeSquare: false,
    badgeShow: true,
    badgeMax: 99,
    cstmShow: false,
    badgeType: 'danger',
    badgeTypes: ['primary', 'success', 'danger', 'warning'],

    badgePosition: 'top-right',
    badgePositions: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],

    typesCode: `<it-badge value="12" ||| variant="primary" |||>
  <it-button>Primary</it-button>
</it-badge>
<it-badge value="new" ||| variant="danger" |||>
  <it-button>Default</it-button>
</it-badge>
<it-badge value="12" ||| variant="success" |||>
  <it-button>Success</it-button>
</it-badge>
<it-badge value="12" ||| variant="warning" |||>
  <it-button>Warning</it-button>
</it-badge>`,

    pointCode: `<it-badge variant="primary" ||| point |||>
  <it-button>Primary</it-button>
</it-badge>
<it-badge variant="danger" ||| point |||>
  <it-button icon="mail_outline"></it-button>
</it-badge>
<it-badge variant="success" ||| point |||>
  <it-button icon="thumb_up"></it-button>
</it-badge>
<it-badge variant="warning" ||| point |||>
  <it-button icon="error_outline"></it-button>
</it-badge>`,

    maxvalCode: `<it-badge :value="110" ||| :max-value="99" |||>
  <it-tag variant="danger">Maximum</it-tag>
</it-badge>

<it-tag variant="success" filled class="ml-2">
  <it-badge variant="success" point class="mr-1" />
  In range
</it-tag>`,

    squareCode: `<it-badge variant="primary" :value="12" ||| square |||>
<it-button>Square</it-button>
  </it-badge>
<it-badge variant="success" point ||| square |||>
  <it-button icon="thumb_up"></it-button>
</it-badge>`,

    positionsCode: `<it-badge point>
  <it-button>Top-right</it-button>
</it-badge>
<it-badge point ||| position="bottom-right" |||>
  <it-button>Bottom-right</it-button>
</it-badge>
<it-badge point ||| position="bottom-left" |||>
  <it-button>Bottom-left</it-button>
</it-badge>
<it-badge point ||| position="top-left" |||>
  <it-button>Top-left</it-button>
</it-badge>`,

    combineCode: `<it-badge value="Typing..." variant="danger">
  <it-avatar square size="80px" src="https://randomuser.me/api/portraits/women/17.jpg" />
</it-badge>`,

    standaloneCode: `<it-badge :value="101" />
<it-badge :value="101" square />`,

    customCode: `<it-badge
  value="🐇"
  variant="violet"
  :variants="{ violet: { body: 'bg-violet-600' } }"
>
  <it-button>🪄🎩</it-button>
</it-badge>`,

    dataSheet: variantProps.concat([
      {
        property: 'value',
        type: ['Number', 'String'],
        default: '',
        values: [],
        description: 'Value of the badge',
      },
      {
        property: 'max-value',
        type: ['Number'],
        default: '',
        values: [],
        description: 'Max value of the badge',
      },
      {
        property: 'position',
        type: ['String'],
        default: 'top-right',
        values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
        description: 'Set position of the badge',
      },
      {
        property: 'show',
        type: ['Boolean'],
        default: 'true',
        values: [],
        description: 'Show badge',
      },
      {
        property: 'point',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Show badge as point',
      },
      {
        property: 'square',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Make badge squared',
      },
    ]),
    slotSheet: [
      {
        name: 'default',
        description: 'Target slot',
      },
      {
        name: 'content',
        description: 'Badge body',
      },
    ],
  }),
})
</script>
