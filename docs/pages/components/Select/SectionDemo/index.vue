<template>
  <Demobox>
    <div class="w-3/4">
      <it-select
        v-model="selectValue"
        :placeholder="selectPlaceholder"
        :disabled="selectDisabled"
        :placement="selectPlacement"
        :label-top="selectLabel"
        :divided="selectDivided"
        :options="firstSelectOptions"
        :multiselect="multiselect"
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
      <it-checkbox v-model="multiselect" label="Multiselect" />
      <it-checkbox v-model="selectDivided" label="Divided" />
      <it-checkbox v-model="selectDisabled" label="Disabled" />
    </template>
  </Demobox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ALLOWED_POSITION } from '@/components/select/constants'

export default defineComponent({
  name: 'SectionDemo',
  data: () => ({
    selectValue: '',
    multiselect: false,
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
      'Lorem ipsum 1',
      'Lorem ipsum 2',
      'Lorem ipsum 3',
      'Lorem ipsum 4',
      'Lorem ipsum 5',
      'Lorem ipsum 1223',
      'Lorem ipsum wef3',
    ],
  }),
})
</script>
