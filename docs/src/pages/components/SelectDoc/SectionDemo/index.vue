<template>
  <Demobox>
    <div>
      <it-select
        v-model="selectValue"
        :placeholder="selectPlaceholder"
        :disabled="selectDisabled"
        :placement="selectPlacement"
        :label-top="selectLabel"
        :divided="selectDivided"
        :options="firstSelectOptions"
      />
    </div>
    <template #props>
      <it-input v-model="selectLabel" label-top="Select label" />
      <it-input v-model="selectPlaceholder" label-top="Select placeholder" />
      <it-select
        v-model="selectPlacement"
        placeholder="Placement"
        label-top="Placement"
        :options="placementOptions"
      />
      <it-checkbox v-model="selectDivided" label="Divided" />
      <it-checkbox v-model="selectDisabled" label="Disabled" />
    </template>
  </Demobox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ALLOWED_POSITION } from '../../../../../../src/components/select/constants'

export default defineComponent({
  name: 'SectionDemo',
  data: () => ({
    selectValue: '',
    selectLabel: 'Select me',
    selectPlaceholder: 'Select me',
    selectDisabled: false,
    selectDivided: false,
    selectPlacement: null,
    placementOptions: ALLOWED_POSITION,
    firstSelectOptions: [
      'Lorem ipsum dolor sit amet consectetur',
      'Dolor',
      'Lorem ipsum',
      'Lorem ipsum dolor',
      'Lorem ipsum dolor iste nam quidem',
    ],
  }),
})
</script>
