<template>
  <Box :template="codeSectionExamples" title="Examples">
    <it-select
      label-top="List of string"
      v-model="exampleStringValue"
      :options="exampleStringOptions"
    />
    <pre class="mt-2">{{ exampleStringValue }}</pre>

    <it-divider />

    <it-select
      label-top="List of number"
      v-model="exampleNumberValue"
      :options="exampleNumberOptions"
    />
    <pre class="mt-2">{{ exampleNumberValue }}</pre>

    <it-divider />
    <it-select
      label-top="Track by 'value'(default)"
      v-model="exampleTrackByValue1"
      :options="exampleTrackByOptions1"
    />
    <pre class="mt-2">{{ exampleTrackByValue1 }}</pre>
    <it-divider />
    <it-select
      label-top="Track by 'some'"
      v-model="exampleTrackByValue2"
      track-by="some"
      :options="exampleTrackByOptions2"
    />
    <pre class="mt-2">{{ exampleTrackByValue2 }}</pre>
    <it-divider />
    <it-select
      label-top="Track by 'key'"
      v-model="exampleTrackByValue3"
      track-by="key"
      :options="exampleTrackByOptions3"
    />
    <pre class="mt-2">{{ exampleTrackByValue3 }}</pre>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const exampleStringOptions = new Array(6)
  .fill(0)
  .map((_, index) => `Test string ${index + 1}`)

const exampleNumberOptions = new Array(8).fill(0).map((_, index) => index + 1)

const exampleTrackByOptions1 = [
  { name: 'New York', value: 'nwrk' },
  { name: 'Paris', value: 'prs' },
  { name: 'Moscow', value: 'mscw' },
]

const exampleTrackByOptions2 = new Array(4).fill(0).map((_, index) => ({
  name: `Some field ${index + 1}`,
  some: `some-field-${index + 1}`,
}))

const exampleTrackByOptions3 = new Array(7)
  .fill(0)
  .map((_, index) => ({ name: `Key ${index + 1}`, key: `key-${index + 1}` }))

export default defineComponent({
  name: 'SectionExamples',
  data: () => ({
    exampleStringValue: null,
    exampleStringOptions: exampleStringOptions,

    exampleNumberValue: exampleNumberOptions[4],
    exampleNumberOptions: exampleNumberOptions,

    exampleTrackByValue1: null,
    exampleTrackByOptions1: exampleTrackByOptions1,

    exampleTrackByValue2: exampleTrackByOptions2[0],
    exampleTrackByOptions2: exampleTrackByOptions2,

    exampleTrackByValue3: null,
    exampleTrackByOptions3: exampleTrackByOptions3,

    codeSectionExamples: `
<template>
  <it-select
    label-top="List of string"
    v-model="exampleStringValue"
    :options="exampleStringOptions"
  />
  <it-select
    label-top="List of number"
    v-model="exampleNumberValue"
    :options="exampleNumberOptions"
  />
  <it-select
    label-top="Track by 'value'(default)"
    v-model="exampleTrackByValue1"
    :options="exampleTrackByOptions1"
  />
  <it-select
    label-top="Track by 'some'"
    v-model="exampleTrackByValue2"
    track-by="some"
    :options="exampleTrackByOptions2"
  />
  <it-select
    label-top="Track by 'key'"
    v-model="exampleTrackByValue3"
    track-by="key"
    :options="exampleTrackByOptions3"
  />
</template>
      
export default {
  data: () => ({
    exampleStringValue: null,
    exampleStringOptions: [${exampleStringOptions.map((a) => `"${a}"`)}],
    exampleNumberValue: ${exampleNumberOptions[0]},
    exampleNumberOptions: [${exampleNumberOptions}],
    exampleTrackByValue1: null,
    exampleTrackByOptions1: [${exampleTrackByOptions1.map((a) =>
      JSON.stringify(a),
    )}],
    exampleTrackByValue2: ${JSON.stringify(exampleTrackByOptions2[0])},
    exampleTrackByOptions2: [${exampleTrackByOptions2.map((a) =>
      JSON.stringify(a),
    )}],
    exampleTrackByValue3: null,
    exampleTrackByOptions3: [${exampleTrackByOptions3.map((a) =>
      JSON.stringify(a),
    )}],
  })
}
    `,
  }),
})
</script>
