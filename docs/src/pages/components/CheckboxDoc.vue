<template>
  <div>
    <h1>Checkbox</h1>

    <Demobox>
      <it-checkbox
        v-model="checkboxValue"
        :line-through="lineCheck"
        :disabled="checkboxDisabled"
        :type="checkboxType"
        :pulse="checkboxPulse"
        :icon="checkboxIcon"
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
        <it-checkbox v-model="lineCheck" label="Line through" />
        <it-input v-model="checkboxIcon" label-top="Checkbox icon" />
        <it-checkbox v-model="checkboxPulse" label="Pulse" />
        <it-checkbox v-model="checkboxDisabled" label="Disabled" />
      </template>
    </Demobox>

    <Box :code="codeType" title="Type">
      <it-checkbox v-model="typesCheck" type="primary" label="Primary" />
      <it-checkbox v-model="typesCheck" type="success" label="Success" />
      <it-checkbox v-model="typesCheck" type="danger" label="Danger" />
      <it-checkbox v-model="typesCheck" type="warning" label="Warning" />
      <it-checkbox v-model="typesCheck" type="black" label="Black" />
      <it-checkbox v-model="typesCheck" type="neutral" label="Neutral" />
    </Box>

    <Box :code="codeLine" title="LineThrough">
      <div style="display: flex; flex-direction: column">
        <it-checkbox
          v-model="lineCheck0"
          type="primary"
          label="It's time"
          line-through
        />
        <br />
        <it-checkbox
          v-model="lineCheck1"
          type="primary"
          label="For"
          line-through
        />
        <br />
        <it-checkbox
          v-model="lineCheck2"
          type="primary"
          label="One more"
          line-through
        />
        <br />
        <it-checkbox
          v-model="lineCheck3"
          type="primary"
          label="To Do"
          line-through
        />
        <br />
        <it-checkbox
          v-model="lineCheck4"
          type="primary"
          label="App"
          line-through
        />
      </div>
    </Box>

    <Box :code="codeSublabel" title="Sublabel">
      <div style="width: 60%">
        <it-checkbox v-model="lineCheckSub1" type="primary"
          >By signing this I agree with Terms and Conditions</it-checkbox
        >
        <br />
        <it-checkbox v-model="lineCheckSub2" type="primary">
          <template #default>Subscribe for updates</template>
          <template #sublabel>Get notified when you get updates</template>
        </it-checkbox>
      </div>
    </Box>

    <Box :code="codeIcon" title="Icon">
      <it-checkbox
        v-model="iconsCheck"
        type="primary"
        label="Primary"
        icon="visibility"
      />
      <it-checkbox
        v-model="iconsCheck"
        type="success"
        label="Success"
        icon="room"
      />
      <it-checkbox
        v-model="iconsCheck"
        type="danger"
        label="Danger"
        icon="favorite"
      />
      <it-checkbox
        v-model="iconsCheck"
        type="warning"
        label="Warning"
        icon="alarm_on"
      />
      <it-checkbox
        v-model="iconsCheck"
        type="black"
        label="Black"
        icon="verified_user"
      />
      <it-checkbox
        v-model="iconsCheck"
        type="neutral"
        label="Neutral"
        icon="refresh"
      />
    </Box>

    <Box :code="codePulse" title="Pulse">
      <template #description>
        <p style="padding: 0 24px">Pulse helps you to catch user's attention</p>
      </template>
      <it-checkbox
        v-model="pulseValue"
        type="primary"
        pulse
        label="Look at me"
      />
    </Box>

    <props-table :slot-sheet="slotSheet" :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data: () => ({
      checkboxDisabled: false,
      checkboxValue: false,
      checkboxPulse: false,
      checkboxLabel: 'Checkbox',
      checkboxSubLabel: '',
      checkboxIcon: 'check',
      checkboxType: 'primary',
      checkboxTypes: [
        'primary',
        'success',
        'danger',
        'warning',
        'black',
        'neutral',
      ],

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

      codeType: `<it-checkbox type="primary" label="Primary" v-model="typesCheck" />
<it-checkbox type="success" label="Success" v-model="typesCheck" />
<it-checkbox type="danger" label="Danger" v-model="typesCheck" />
<it-checkbox type="warning" label="Warning" v-model="typesCheck" />
<it-checkbox type="black" label="Black" v-model="typesCheck" />
<it-checkbox type="neutral" label="Neutral" v-model="typesCheck" />`,

      codeIcon: `<it-checkbox type="primary" label="Primary" icon="visibility" v-model="iconsCheck" />
<it-checkbox type="success" label="Success" icon="room" v-model="iconsCheck" />
<it-checkbox type="danger" label="Danger" icon="favorite" v-model="iconsCheck" />
<it-checkbox type="warning" label="Warning" icon="alarm_on" v-model="iconsCheck" />
<it-checkbox type="black" label="Black" icon="verified_user" v-model="iconsCheck" />
<it-checkbox type="neutral" label="Neutral" icon="refresh" v-model="iconsCheck" />`,

      codePulse: `<it-checkbox type="primary" pulse label="Look at me" v-model="pulseValue" />`,

      codeLine: `<it-checkbox type="primary" label="It's time" v-model="lineCheck0" line-through />
<it-checkbox type="primary" label="For" v-model="lineCheck1" line-through />
<it-checkbox type="primary" label="One more" v-model="lineCheck2" line-through />
<it-checkbox type="primary" label="To Do" v-model="lineCheck3" line-through />
<it-checkbox type="primary" label="App" v-model="lineCheck4" line-through />`,

      codeSublabel: `<it-checkbox type="primary" v-model="lineCheckSub1">By signing this I agree with Terms and Conditions</it-checkbox>
<it-checkbox type="primary" v-model="lineCheckSub2">
  <template v-slot:default>Subscribe for updates</template>
  <template v-slot:sublabel>Get notified when you get updates</template>
</it-checkbox>`,

      dataSheet: [
        {
          property: 'type',
          type: ['String'],
          default: 'primary',
          values: [
            'primary',
            'success',
            'danger',
            'warning',
            'black',
            'neutral',
          ],
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
          property: 'icon',
          type: ['String'],
          default: 'check',
          values: ['Material Icons'],
          description: 'Icon of the checkbox',
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
