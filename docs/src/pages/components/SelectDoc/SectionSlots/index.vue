<template>
  <Box :code="codeSectionExamples" :overflow-hidden="false" title="Slots">
    <Row align="center" justify="center" class="flex">
      <Col class="flex flex-col my-4 px-4" lg="3" sm="12">
        <it-select v-model="exampleValue" :options="exampleOptions">
          <template v-slot:label-top="{ props }">
            Placement prop: {{ props.placement }}
          </template>
          <template v-slot:placeholder="{ props }">
            <div class="items-center" :style="{ display: 'flex' }">
              <span>{{ props.placeholder }} - custom</span>
            </div>
          </template>
          <template v-slot:selected-option="{ props }">
            Selected value: {{ props.modelValue.value }}
          </template>
          <template v-slot:option="{ props, option }">
            <div class="items-center" :style="{ display: 'flex' }">
              <img src="/github-logo.svg" class="mr-2 h-4" alt srcset />
              {{ option.name }}
            </div>
          </template>
          <template v-slot:icon>
            <img src="/twitter-logo.svg" class="h-3 mr-2" alt srcset />
          </template>
        </it-select>
      </Col>
    </Row>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ItIcon from '@/components/icon'

const exampleOptions = [
  { name: 'New York', value: 'nwrk' },
  { name: 'Paris', value: 'prs' },
  { name: 'Moscow', value: 'mscw' },
]

export default defineComponent({
  name: 'SectionSlots',
  components: { ItIcon },
  data: () => ({
    exampleValue: null,
    exampleOptions: exampleOptions,
    codeSectionExamples: `
      <template>
        <it-select
          v-model="exampleValue"
          :options="exampleOptions"
        >
          <template v-slot:label-top="{ props }">
            Placement prop: {{ props.placement }}
          </template>
          <template v-slot:placeholder="{ props }">
            <div class="items-center" :style="{ display: 'flex' }">
              <it-icon class="mr-2" name="unfold_more" />
              <span>{{ props.placeholder }} - custom</span>
            </div>
          </template>
          <template v-slot:selected-option="{ props }">
            Selected value: {{ props.modelValue.value }}
          </template>
          <template v-slot:option="{ props, option }">
            <div class="items-center" :style="{ display: 'flex' }">
              <img src="/github-logo.svg" class="mr-2 h-4" alt srcset />
              {{ option.name }}
            </div>
          </template>
          <template v-slot:icon>
            <img src="/twitter-logo.svg" class="h-3 mr-2" alt srcset />
          </template>
        </it-select>
      </template>

      export default {
        data: () => ({
          exampleValue: null,
          exampleOptions: [${exampleOptions.map((a) => JSON.stringify(a))}],
        })
      }
    `,
  }),
})
</script>
