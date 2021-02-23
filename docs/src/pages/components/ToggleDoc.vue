<template>
  <div>
    <h1>Toggle</h1>

    <Demobox>
      <it-toggle
        v-model="toggleValue"
        style="width: 80%;"
        :round="toggleRound"
        :options="['Light', 'Dark', 'Hollow', 'Orange']"
      />

      <template #props>
        <it-checkbox v-model="toggleRound" label="Round" />
      </template>
    </Demobox>
    <Box :code="exampleCode" title="Types">
      <div style="width: 100%;">
        <it-toggle
          v-model="toggleValue"
          style="width: 100%; margin-bottom: 16px;"
          :options="['Light', 'Dark', 'Hollow', 'Orange']"
        />
        <it-toggle
          v-model="toggleValue"
          style="width: 100%;"
          round
          :options="['Light', 'Dark', 'Hollow', 'Orange']"
        />
      </div>
    </Box>
    <Box :code="iconsCode" title="Icons">
      <template #description>
        <p style="padding: 0 24px;">
          You can use
          <a
            style="color: #3051ff;"
            target="_blank"
            rel="noopener noreferrer"
            href="https://material.io/resources/icons/"
            >Material Icons</a
          >
          as options
        </p>
      </template>
      <div>
        <it-toggle
          v-model="toggleIconsValue"
          icons
          style="margin-bottom: 16px;"
          :options="['wb_sunny', 'bedtime']"
        />
        <it-toggle
          v-model="toggleIconsValue"
          icons
          round
          :options="['wb_sunny', 'bedtime']"
        />
      </div>
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data: () => ({
      toggleValue: 'Light',
      toggleRound: false,
      toggleIconsValue: 'wb_sunny',

      exampleCode: `<it-toggle
  style="width: 100%"
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>
<it-toggle
  round
  style="width: 100%"
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>`,

      iconsCode: `<it-toggle
  icons
  v-model="toggleIconsValue"
  :options="['wb_sunny', 'bedtime']"
/>
<it-toggle
  icons
  round
  v-model="toggleIconsValue"
  :options="['wb_sunny', 'bedtime']"
/>`,

      dataSheet: [
        {
          property: 'options',
          type: ['Array'],
          default: '[]',
          values: [],
          description: 'Array of option strings or material icon names',
        },
        {
          property: 'round',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Makes toggle round',
        },
        {
          property: 'icons',
          type: ['Boolean'],
          default: 'false',
          values: [],
          description: 'Use Material Icons as options',
        },
        {
          property: 'value (v-model)',
          type: ['String'],
          default: '-',
          values: [],
          description: 'Value of the toggle',
        },
      ],
    }),
  })
</script>
