<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Support</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p class="">
        We are grateful for your interest in supporting Equal UI! Your support
        helps us to continue developing and maintaining the project, as well as
        adding new features and improving documentation.
      </p>

      <h3 class="mt-4 text-base font-semibold">Ways to Support</h3>

      <ul class="list-inside list-disc">
        <li class="my-2">Make a financial contribution via crypto.</li>
        <li class="my-2">Star and share the repository on GitHub.</li>
        <li class="my-2">
          Leave a positive review on the project's listing in package managers.
        </li>
        <li class="my-2">Promote the project on social media.</li>
        <li class="my-2">
          Contribute to the project by reporting bugs, fixing issues, or
          implementing new features.
        </li>
      </ul>

      <h3 class="mt-4 text-base font-semibold">Donations</h3>

      <p class="my-2">
        At this moment the only way you can support the author is crypto. All
        donations go towards maintaining the project, development time, and
        other expenses.
      </p>

      <p class="my-2 max-w-full overflow-hidden text-ellipsis">
        Cardano wallet:
        <it-tooltip class="inline-block max-w-full">
          <it-tag
            variant="primary"
            class="max-w-full truncate"
            @click="clickCopyWallet"
          >
            addr1q9l3hymrwkwqhv7nxvp5qt9u8zke29jndd5pl73fjwxle4gx2x55zutg4scnede3ez303npq8uwgjuvzqyxepfll2tqs5c0482
          </it-tag>
          <template #content>
            {{ copyTextWallet }}
          </template>
        </it-tooltip>
        <it-divider class="my-2" />
        Ethereum wallet:
        <it-tooltip class="inline-block max-w-full">
          <it-tag
            variant="primary"
            class="max-w-full truncate"
            @click="clickCopyWalletEth"
          >
            0x9723d53D1EF5d5C8fccF50e4ADF35dfD3992fE04
          </it-tag>
          <template #content>
            {{ copyTextWalletEth }}
          </template>
        </it-tooltip>
      </p>

      <p class="my-2">
        Thank you for your support of Equal UI! It is greatly appreciated and
        helps to ensure the continued development and improvement of the
        project.
      </p>
      <p class="my-2">
        For any questions about sponsoring project you can contact
        <it-tooltip class="inline-block">
          <it-tag variant="primary" @click="clickCopy">
            yan.savinov.hire@gmail.com
          </it-tag>
          <template #content>
            {{ copyText }}
          </template>
        </it-tooltip>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const copyText = ref('Click to copy')
const copyTextWallet = ref('Click to copy')
const copyTextWalletEth = ref('Click to copy')

async function clickCopy() {
  copyText.value = 'Copied!'
  await navigator.clipboard.writeText('yan.savinov.hire@gmail.com')
}
async function clickCopyWallet() {
  copyTextWallet.value = 'Copied!'
  await navigator.clipboard.writeText(
    'addr1q9l3hymrwkwqhv7nxvp5qt9u8zke29jndd5pl73fjwxle4gx2x55zutg4scnede3ez303npq8uwgjuvzqyxepfll2tqs5c0482',
  )
}
async function clickCopyWalletEth() {
  copyTextWalletEth.value = 'Copied!'
  await navigator.clipboard.writeText(
    '0x9723d53D1EF5d5C8fccF50e4ADF35dfD3992fE04',
  )
}
</script>
