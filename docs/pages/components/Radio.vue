<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Radio</h1>

    <Demobox name="it-radio">
      <div class="radios">
        <it-radio
          v-model="radioValue"
          name="demo"
          :disabled="radioDisabled"
          :pulse="radioPulse"
          :label="radioLabel"
          value="1"
        />
        <it-radio
          v-model="radioValue"
          :disabled="radioDisabled"
          name="demo"
          label="Second"
          value="2"
        />
        <it-radio
          v-model="radioValue"
          :disabled="radioDisabled"
          name="demo"
          label="Third"
          value="3"
        />
      </div>

      <template #props>
        <it-input v-model="radioLabel" label-top="Radio label" />
        <it-checkbox
          variant="primary"
          v-model="radioDisabled"
          label="Disabled"
        />
      </template>
    </Demobox>

    <Box :code="typeCode" title="Types">
      <it-radio v-model="typeValue" name="type" label="Default" value="00" />
      <it-radio
        v-model="typeValue"
        name="type"
        variant="success"
        label="Success"
        value="11"
      />
      <it-radio
        v-model="typeValue"
        name="type"
        variant="danger"
        label="Danger"
        value="22"
      />
      <it-radio
        v-model="typeValue"
        name="type"
        variant="warning"
        label="Warning"
        value="33"
      />
    </Box>

    <Box :code="codeSublabel" title="Sublabel">
      <div>
        <it-radio v-model="subradio" :value="1">
          By signing this I agree with Terms and Conditions
        </it-radio>
        <br />
        <it-radio v-model="subradio" :value="2">
          <template #default>Subscribe for updates</template>
          <template #sublabel>Get notified when you get updates</template>
        </it-radio>
      </div>
    </Box>

    <Box :code="pulseCode" title="Pulse">
      <template #description>
        <p class="px-6">Pulse helps you to catch user's attention</p>
      </template>
      <it-radio v-model="pulseValue" pulse label="Look at me" value="42" />
    </Box>
    <Box :code="disabledCode" title="Disabled">
      <it-radio v-model="pulseValue" disabled label="I'm disabled" value="42" />
    </Box>
    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    radioValue: '1',
    radioLabel: 'Edit me',
    radioPulse: false,
    radioDisabled: false,
    pulseValue: false,
    typeValue: false,
    subradio: 1,

    typeCode: `<it-radio v-model="typeValue" label="Primary" value="00"/>
<it-radio v-model="typeValue" ||| variant="success" ||| label="Success" value="11"/>
<it-radio v-model="typeValue" ||| variant="danger" ||| label="Danger" value="22"/>
<it-radio v-model="typeValue" ||| variant="warning" ||| label="Warning" value="33"/>`,

    pulseCode: `<it-radio v-model="pulseValue" pulse label="Look at me" value="42"/>`,

    disabledCode: `<it-radio v-model="pulseValue" ||| disabled ||| label="I'm disabled" value="42"/>`,

    codeSublabel: `<it-radio variant="primary" v-model="subradio" :value="1">By signing this I agree with Terms and Conditions</it-radio>

<it-radio variant="primary" v-model="subradio" :value="2">
  <template #default>Subscribe for updates</template>
 ||| <template #sublabel>Get notified when you get updates</template> |||
</it-radio>`,

    dataSheet: [
      {
        property: 'type',
        type: ['String'],
        default: 'primary',
        values: ['primary', 'success', 'danger', 'warning'],
        description: 'Type of the radio',
      },
      {
        property: 'label',
        type: ['String'],
        default: '-',
        values: [],
        description: 'Label of the radio',
      },
      {
        property: 'sub-label',
        type: ['String'],
        default: '',
        values: [],
        description: 'Sub label of the radio',
      },
      {
        property: 'value',
        type: ['String', 'Number'],
        default: '-',
        values: [],
        description: 'Value of the radio',
      },
      {
        property: 'pulse',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Pulse of the radio',
      },
      {
        property: 'disabled',
        type: ['Boolean'],
        default: 'false',
        values: [],
        description: 'Makes radio disabled',
      },
    ],
  }),
})
</script>

<style lang="less">
.radios {
  display: flex;
  flex-direction: column;

  & > label + label {
    margin-top: 10px;
  }
}
</style>
