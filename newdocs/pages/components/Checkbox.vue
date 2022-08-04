<template>
  <div>
    <h1>Checkbox</h1>

    <Demobox name="it-checkbox">
      <it-checkbox
        v-model="checkboxValue"
        :line-through="lineCheck"
        :disabled="checkboxDisabled"
        :variant="checkboxType"
        :pulse="checkboxPulse"
        :label="checkboxLabel"
      >
        <template #sublabel>{{ checkboxSubLabel }}</template>
      </it-checkbox>
      <template #props>
        <it-select
          v-model="checkboxType"
          placeholder="Select type"
          label-top="Checkbox type"
          :options="checkboxTypes"
        >
          >
        </it-select>
        <it-input v-model="checkboxLabel" label-top="Checkbox label" />
        <it-textarea
          v-model="checkboxSubLabel"
          placeholder="Additional information"
          resize-on-write
          label-top="Checkbox sublabel"
        />
        <it-checkbox
          v-model="lineCheck"
          variant="primary"
          label="Line through"
        />
        <it-input v-model="checkboxIcon" label-top="Checkbox icon" />
        <it-checkbox v-model="checkboxPulse" label="Pulse" />
        <it-checkbox v-model="checkboxDisabled" label="Disabled" />
      </template>
      <template #variants> </template>
    </Demobox>

    <Box :code="codeType" title="Variant">
      <it-checkbox v-model="typesCheck" variant="primary" label="Primary" />
      <it-checkbox v-model="typesCheck" variant="success" label="Success" />
      <it-checkbox v-model="typesCheck" variant="danger" label="Danger" />
      <it-checkbox v-model="typesCheck" variant="warning" label="Warning" />
      <it-checkbox v-model="typesCheck" label="default" />
    </Box>

    <Box :code="codeLine" title="LineThrough">
      <div class="flex flex-col gap-3">
        <it-checkbox
          v-model="lineCheck0"
          variant="primary"
          label="It's time"
          line-through
        />
        <it-checkbox
          v-model="lineCheck1"
          variant="primary"
          label="For"
          line-through
        />
        <it-checkbox
          v-model="lineCheck2"
          variant="primary"
          label="One more"
          line-through
        />
        <it-checkbox
          v-model="lineCheck3"
          variant="primary"
          label="To Do"
          line-through
        />
        <it-checkbox
          v-model="lineCheck4"
          variant="primary"
          label="App"
          line-through
        />
      </div>
    </Box>

    <Box :code="codeSublabel" title="Sublabel">
      <div class="w-3/5">
        <it-checkbox v-model="lineCheckSub1" variant="primary"
          >By signing this I agree with Terms and Conditions</it-checkbox
        >
        <br />
        <it-checkbox
          v-model="lineCheckSub2"
          :disabled="!lineCheckSub1"
          variant="primary"
        >
          <template #default>Subscribe for updates</template>
          <template #sublabel>Get notified when you get updates</template>
        </it-checkbox>
      </div>
    </Box>

    <Box :code="codePulse" title="Pulse">
      <template #description>
        <p class="mx-6">Pulse helps you to catch user's attention</p>
      </template>
      <it-checkbox
        v-model="pulseValue"
        variant="primary"
        pulse
        label="Look at me"
      />
    </Box>

    <props-table :slot-sheet="slotSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'

export default defineComponent({
  data: () => ({
    checkboxDisabled: false,
    checkboxValue: false,
    checkboxPulse: false,
    checkboxLabel: 'Checkbox',
    checkboxSubLabel: '',
    checkboxIcon: 'check',
    checkboxType: 'primary',
    checkboxTypes: ['primary', 'success', 'danger', 'warning', 'default'],

    typesCheck: true,
    iconsCheck: true,

    lineCheck: false,
    lineCheck0: false,
    lineCheck1: false,
    lineCheck2: true,
    lineCheck3: false,
    lineCheck4: false,
    lineCheckSub1: true,
    lineCheckSub2: false,

    pulseValue: false,

    codeType: `<it-checkbox ||| variant="primary" ||| label="Primary" v-model="typesCheck" />
<it-checkbox ||| variant="success" ||| label="Success" v-model="typesCheck" />
<it-checkbox ||| variant="danger" ||| label="Danger" v-model="typesCheck" />
<it-checkbox ||| variant="warning" ||| label="Warning" v-model="typesCheck" />
<it-checkbox label="Default" v-model="typesCheck" />`,

    codePulse: `<it-checkbox variant="primary" pulse label="Look at me" v-model="pulseValue" />`,

    codeLine: `<it-checkbox variant="primary" label="It's time" v-model="lineCheck0" ||| line-through |||/>
<it-checkbox variant="primary" label="For" v-model="lineCheck1" ||| line-through |||/>
<it-checkbox variant="primary" label="One more" v-model="lineCheck2" ||| line-through |||/>
<it-checkbox variant="primary" label="To Do" v-model="lineCheck3" ||| line-through |||/>
<it-checkbox variant="primary" label="App" v-model="lineCheck4" ||| line-through |||/>`,

    codeSublabel: `<it-checkbox variant="primary" v-model="lineCheckSub1">By signing this I agree with Terms and Conditions</it-checkbox>
<it-checkbox variant="primary" v-model="lineCheckSub2">
  <template v-slot:default>Subscribe for updates</template>
 ||| <template v-slot:sublabel>Get notified when you get updates</template> |||
</it-checkbox>`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'default',
        values: ['primary', 'success', 'danger', 'warning', 'default'],
        description: 'Type of the checkbox',
      },
      {
        property: 'label',
        type: ['String'],
        default: '',
        values: [],
        description: 'Label of the checkbox',
      },
      {
        property: 'sub-label',
        type: ['String'],
        default: '',
        values: [],
        description: 'Sub label of the checkbox',
      },
      {
        property: 'line-through',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Adds line-through on label when checked',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes checkbox disabled',
      },
      {
        property: 'value (v-model)',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Checkbox value',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Add pulse to the element',
      },
    ],

    slotSheet: [
      {
        name: 'default',
        description: 'Label text',
      },
      {
        name: 'sublabel',
        description: 'Sub label text',
      },
    ],
  }),
})
</script>
