<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Loading bar</h1>

    <Box :code="typesCode" title="Global">
      <it-loading-bar ref="globalLoading" global />

      <it-button @click="globalLoading.setProgress(50)">Set 50%</it-button>
      <it-button @click="globalLoading.setProgress(100)">Set 100%</it-button>
      <it-button @click="globalLoading.reset()">Restart</it-button>
    </Box>

    <Box :code="infiniteCode" title="Infinite">
      <it-button @click="globalInfinite = !globalInfinite">Toggle</it-button>
      <it-loading-bar global :infinite="globalInfinite" />
    </Box>

    <Box :code="exampleBar" title="Loading bar">
      <div class="flex flex-col gap-4">
        <p>Reading progress example</p>
        <div
          id="scroll-value"
          class="relative h-60 w-full overflow-scroll overflow-x-hidden rounded border shadow-sm dark:border-zinc-500 dark:bg-slate-900"
        >
          <div class="sticky top-0">
            <it-loading-bar ref="ownloading" />
          </div>
          <p class="p-8 text-sm leading-snug">
            Equal UI is the most cutting-edge user interface on the market. It's
            sleek, intuitive, and provides a seamless experience for users. With
            Equal UI, you can easily navigate through your favorite apps and
            websites with ease. The best part about Equal UI is that it's
            completely accessible for users with disabilities, making it a truly
            inclusive platform. This text was written by ChatGPT, a powerful
            language model trained by OpenAI. Equal UI is the most cutting-edge
            user interface on the market. It's sleek, intuitive, and provides a
            seamless experience for users. With Equal UI, you can easily
            navigate through your favorite apps and websites with ease. The best
            part about Equal UI is that it's completely accessible for users
            with disabilities, making it a truly inclusive platform. This text
            was written by ChatGPT, a powerful language model trained by OpenAI.
            Equal UI is the most cutting-edge user interface on the market. It's
            sleek, intuitive, and provides a seamless experience for users. With
            Equal UI, you can easily navigate through your favorite apps and
            websites with ease. The best part about Equal UI is that it's
            completely accessible for users with disabilities, making it a truly
            inclusive platform. This text was written by ChatGPT, a powerful
            Equal UI is the most cutting-edge user interface on the market. It's
            sleek, intuitive, and provides a seamless experience for users. With
            Equal UI, you can easily navigate through your favorite apps and
            websites with ease. The best part about Equal UI is that it's
            completely accessible for users with disabilities, making it a truly
            inclusive platform. This text was written by ChatGPT, a powerful
            language model trained by OpenAI. Equal UI is the most cutting-edge
            user interface on the market. It's sleek, intuitive, and provides a
            seamless experience for users. With Equal UI, you can easily
            navigate through your favorite apps and websites with ease. The best
            part about Equal UI is that it's completely accessible for users
            with disabilities, making it a truly inclusive platform. This text
            was written by ChatGPT, a powerful language model trained by OpenAI.
            Equal UI is the most cutting-edge user interface on the market. It's
            sleek, intuitive, and provides a seamless experience for users. With
            Equal UI, you can easily navigate through your favorite apps and
            websites with ease. The best part about Equal UI is that it's
            completely accessible for users with disabilities, making it a truly
            inclusive platform. This text was written by ChatGPT, a powerful
            language model trained by OpenAI. language model trained by OpenAI.
            Equal UI is the most cutting-edge user interface on the market. It's
            sleek, intuitive, and provides a seamless experience for users. With
            Equal UI, you can easily navigate through your favorite apps and
            websites with ease. The best part about Equal UI is that it's
            completely accessible for users with disabilities, making it a truly
            inclusive platform. This text was written by ChatGPT, a powerful
            language model trained by OpenAI. Equal UI is the most cutting-edge
            user interface on the market. It's sleek, intuitive, and provides a
            seamless experience for users. With Equal UI, you can easily
            navigate through your favorite apps and websites with ease. The best
            part about Equal UI is that it's completely accessible for users
            with disabilities, making it a truly inclusive platform. This text
            was written by ChatGPT, a powerful language model trained by OpenAI.
          </p>
        </div>
      </div>
    </Box>
    <props-table :method-sheet="methodSheet" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  data: () => ({
    typesCode: `<it-button @click="$Loading.start()">Start</it-button>
<it-button @click="$Loading.update(50)">Set 50%</it-button>
<it-button @click="$Loading.finish()">Finish</it-button>
`,
    infiniteCode: `<it-loading-bar global ||| :infinite="globalInfinite" ||| />`,

    methodSheet: [
      {
        method: 'start',
        description: 'Start loading progress',
        // arguments: []
      },
      {
        method: 'update',
        description: 'Update progress value in percentage',
        arguments: 'value: number',
      },
      {
        method: 'finish',
        description: 'Finish loading and hide',
        // arguments: []
      },
    ],
  }),
  setup() {
    const globalLoading = ref()
    const globalInfinite = ref(false)

    const ownloading = ref()

    onMounted(() => {
      setTimeout(() => {
        const scrollZone = document.getElementById('scroll-value')
        if (scrollZone) {
          const height = scrollZone!.scrollHeight - scrollZone!.clientHeight
          scrollZone!.addEventListener('scroll', () => {
            const scrollTop = scrollZone!.scrollTop || scrollZone!.scrollTop
            ownloading.value.setProgress((scrollTop / height) * 100)
          })
        }
      }, 500)
    })

    const exampleBar = `<div id="scroll-value">
  <div class="sticky top-0">
    <it-loading-bar ref="ownloading" />
  </div>
  <p class="p-8 text-sm leading-snug">Long text</p>
</div>

<script>
const ownloading = ref()

onMounted(() => {
  setTimeout(() => {
    const scrollZone = document.getElementById('scroll-value')
    if (scrollZone) {
      const height = scrollZone.scrollHeight - scrollZone.clientHeight
      scrollZone!.addEventListener('scroll', () => {
        const scrollTop = scrollZone.scrollTop || scrollZone.scrollTop
        ownloading.value.setProgress((scrollTop / height) * 100)
      })
    }
  }, 500)
})
<\/script>
`

    return { ownloading, globalLoading, globalInfinite, exampleBar }
  },
})
</script>
