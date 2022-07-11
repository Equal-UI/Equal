<template>
  <div>
    <h1>Dropdown</h1>

    <Demobox name="it-dropdown">
      <it-dropdown :clickable="clickable" :placement="dropdownType">
        <it-button>{{ clickable ? 'Click' : 'Hover' }} me</it-button>
        <template #menu>
          <it-dropdown-menu>
            <it-dropdown-item>Hello</it-dropdown-item>
            <it-dropdown-item disabled>Disabled</it-dropdown-item>
            <it-dropdown :clickable="clickable" :placement="dropdownType">
              <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>

              <template #menu>
                <it-dropdown-menu>
                  <it-dropdown-item divided>123123 </it-dropdown-item>
                  <it-dropdown :clickable="clickable" :placement="dropdownType">
                    <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>

                    <template #menu>
                      <it-dropdown-menu>
                        <it-dropdown-item divided>123123 </it-dropdown-item>
                        <it-dropdown-item icon="cloud"
                          >rghberhr
                        </it-dropdown-item>
                      </it-dropdown-menu>
                    </template>
                  </it-dropdown>
                </it-dropdown-menu>
              </template>
            </it-dropdown>
            <it-divider />
            <it-dropdown-item>Divided</it-dropdown-item>
          </it-dropdown-menu>
        </template>
      </it-dropdown>
      <template #props>
        <it-select
          v-model="dropdownType"
          placeholder="Select placement"
          label-top="Dropdown placement"
          :options="dropdownTypes"
        />
        <it-checkbox v-model="clickable" label="Clickable" />
      </template>
    </Demobox>

    <Box :code="codeExample" title="Example">
      <it-dropdown>
        <it-button>Hover me</it-button>
        <template #menu>
          <it-dropdown-menu>
            <it-dropdown-item>Hello</it-dropdown-item>
            <it-dropdown-item disabled>Disabled</it-dropdown-item>
            <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
            <it-dropdown-item divided>Divided</it-dropdown-item>
          </it-dropdown-menu>
        </template>
      </it-dropdown>
    </Box>
    <props-table tag-name="it-dropdown" :data-sheet="dataSheet" />
    <props-table tag-name="it-dropdown-item" :data-sheet="dataSheet2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    // dropdownDisabled = false

    dropdownType: 'bottom',
    clickable: false,
    dropdownTypes: [
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom',
      'top',
      'top-left',
      'top-right',
    ],

    codeExample: `<it-dropdown>
  <it-button>Hover me</it-button>
  <it-dropdown-menu slot="menu">
    <it-dropdown-item>Hello</it-dropdown-item>
    <it-dropdown-item disabled>Disabled</it-dropdown-item>
    <it-dropdown-item icon="cloud">Cloud</it-dropdown-item>
    <it-dropdown-item divided>Divided</it-dropdown-item>
  </it-dropdown-menu>
</it-dropdown>`,

    dataSheet: [
      {
        property: 'placement',
        type: ['String'],
        default: 'bottom',
        values: [
          'bottom',
          'bottom-left',
          'bottom-right',
          'left',
          'left-top',
          'left-bottom',
          'right',
          'right-top',
          'right-bottom',
          'top',
          'top-left',
          'top-right',
        ],
        description: 'Position of the dropdown',
      },
      {
        property: 'clickable',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Dropdown activates only on click',
      },
    ],

    dataSheet2: [
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Disabled menu item',
      },
      {
        property: 'divided',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Divides menu item from previous item',
      },
      {
        property: 'icon',
        type: ['String'],
        default: '',
        values: ['Material Icon'],
        description: 'Adds icon to the mmenu item',
      },
    ],
  }),
})
</script>
