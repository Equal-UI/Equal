<template>
  <div>
    <h1>Divider</h1>

    <Demobox name="it-divider">
      <div class="flex w-11/12 justify-center">
        <it-divider :vertical="dividerVertical" />
      </div>
      <template #props>
        <it-checkbox
          variant="primary"
          v-model="dividerVertical"
          label="Vertical"
        />
      </template>
    </Demobox>

    <Box :code="codeHorizontal" title="Horizontal">
      <p class="text-sm">
        Not that I wish to imply you have been sleeping on the job. No one is
        more deserving of a rest. And all the effort in the world would have
        gone to waste until...well, let's just say your hour has come again.
      </p>
      <it-divider />
      <p class="text-sm">
        Not that I wish to imply you have been sleeping on the job. No one is
        more deserving of a rest. And all the effort in the world would have
        gone to waste until...well, let's just say your hour has come again.
      </p>
      <it-divider />
      <p class="text-sm">
        Not that I wish to imply you have been sleeping on the job. No one is
        more deserving of a rest. And all the effort in the world would have
        gone to waste until...well, let's just say your hour has come again.
      </p>
    </Box>

    <Box :code="codeVertical" title="Vertical">
      <div class="m-0 text-sm">
        Still
        <it-divider vertical />
        Sane
        <it-divider vertical />
        Exile
      </div>
    </Box>

    <props-table :data-sheet="dataSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    dividerVertical: false,

    codeHorizontal: `<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
 ||| <it-divider /> |||
<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>
 ||| <it-divider /> |||
<p>Not that I wish to imply you have been sleeping on the job. No one is more deserving of a rest. And all the effort in the world would have gone to waste until...well, let's just say your hour has come again.</p>`,

    codeVertical: `<div>
  Still
 ||| <it-divider vertical /> |||
  Sane
 ||| <it-divider vertical /> |||
  Exile
</div>`,

    dataSheet: [
      {
        property: 'vertical',
        type: ['Boolean'],
        default: false,
        values: [],
        description: 'Makes divider vertical',
      },
    ],
  }),
})
</script>
