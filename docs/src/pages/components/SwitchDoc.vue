<template>
  <div>
    <h1>Switch</h1>

    <Demobox>
      <it-switch
        v-model="switchValue"
        :type="switchType"
        :disabled="switchDisabled"
        :label="switchLabel"
        :pulse="switchPulse"
      >
        <template #sublabel>{{ sublabel }}</template>
      </it-switch>

      <template #props>
        <it-select
          v-model="switchType"
          placeholder="Select type"
          label-top="Button type"
          :options="switchTypes"
        >
          >
        </it-select>
        <it-input v-model="switchLabel" label-top="Switch label" />
        <it-textarea
          v-model="sublabel"
          label-top="Switch sublabel"
          placeholder="Additional information"
        ></it-textarea>
        <it-checkbox v-model="switchPulse" label="Pulse" />
        <it-checkbox v-model="switchDisabled" label="Disabled" />
      </template>
    </Demobox>
    <Box :code="typesCode" title="Types">
      <it-switch v-model="typeValue" label="Primary" />
      <it-switch v-model="typeValue" type="success" label="Success" />
      <it-switch v-model="typeValue" type="danger" label="Danger" />
      <it-switch v-model="typeValue" type="warning" label="Warning" />
    </Box>
    <Box :code="sublabelCode" title="Types">
      <div class="flex flex-col">
        <it-switch v-model="sublabel1" label="Label only" />
        <br />
        <it-switch v-model="sublabel2" label="Show ">
          <template #sublabel>Send notifications</template>
        </it-switch>
      </div>
    </Box>
    <Box :code="pulseCode" title="Pulse">
      <template #description>
        <p class="px-6">Pulse helps you to catch user's attention</p>
      </template>
      <it-switch v-model="pulseValue" pulse label="Look at me" />
    </Box>
    <Box :code="disabledCode" title="Disabled">
      <it-switch v-model="pulseValue" disabled label="I'm disabled" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    switchValue: true,
    switchLabel: 'Switch',
    switchPulse: false,
    switchDisabled: false,
    switchType: 'primary',
    switchTypes: ['primary', 'success', 'danger', 'warning', 'black'],
    sublabel: '',
    sublabel1: true,
    sublabel2: false,

    pulseValue: false,
    typeValue: true,

    typesCode: `<it-switch v-model="typeValue" label="Primary" />
<it-switch v-model="typeValue" type="success" label="Success" />
<it-switch v-model="typeValue" type="danger" label="Danger" />
<it-switch v-model="typeValue" type="warning" label="Warning" />`,

    pulseCode: `<it-switch v-model="pulseValue" pulse label="Look at me" />`,

    sublabelCode: `<it-switch v-model="sublabel1" label="Label only" />

<it-switch v-model="sublabel2" label="Show ">
  <template #sublabel>Send notifications</template>
</it-switch>`,

    disabledCode: `<it-switch v-model="pulseValue" disabled label="I'm disabled"/>`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the switch',
      },
      {
        property: 'label',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Label of the switch',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes switch disabled',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Adds pulse to switch',
      },
      {
        property: 'value (v-model)',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Switch value',
      },
    ],
  }),
})
</script>
