<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Switch</h1>

    <Demobox name="ItSwitch">
      <it-switch
        v-model="switchValue"
        :variant="switchType"
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
        <it-checkbox
          variant="primary"
          v-model="switchDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>
    <Box :template="typesCode" title="Variants">
      <it-switch v-model="typeValue" label="Default" />
      <it-switch v-model="typeValue" variant="success" label="Success" />
      <it-switch v-model="typeValue" variant="danger" label="Danger" />
      <it-switch v-model="typeValue" variant="warning" label="Warning" />
    </Box>
    <Box :template="sublabelCode" title="Types">
      <div class="flex flex-col">
        <it-switch v-model="sublabel1" label="Label only" />
        <br />
        <it-switch v-model="sublabel2" label="Show ">
          <template #sublabel>Send notifications</template>
        </it-switch>
      </div>
    </Box>
    <Box :template="disabledCode" title="Disabled">
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
    switchType: 'default',
    switchTypes: ['default', 'success', 'danger', 'warning'],
    sublabel: '',
    sublabel1: true,
    sublabel2: false,

    pulseValue: false,
    typeValue: true,

    typesCode: `<it-switch v-model="typeValue" label="Primary" />
<it-switch v-model="typeValue" ||| variant="success" ||| label="Success" />
<it-switch v-model="typeValue" ||| variant="danger" ||| label="Danger" />
<it-switch v-model="typeValue" ||| variant="warning" ||| label="Warning" />`,
    sublabelCode: `<it-switch v-model="sublabel1" label="Label only" />

<it-switch v-model="sublabel2" label="Show ">
 ||| <template #sublabel>Send notifications</template> |||
</it-switch>`,

    disabledCode: `<it-switch v-model="pulseValue" ||| disabled ||| label="I'm disabled"/>`,

    dataSheet: [
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
