<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">{{ $t('sidebar.support') }}</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p>
        {{ $t('support.intro') }}
      </p>

      <h3 class="mt-4 mb-2 text-base font-semibold">
        {{ $t('support.ways_to_support_title') }}
      </h3>

      <ul class="list-inside list-disc space-y-2">
        <li>{{ $t('support.via_crypto') }}</li>
        <li>{{ $t('support.github_star') }}</li>
        <li>
          {{ $t('support.review') }}
        </li>
        <li>{{ $t('support.promote') }}</li>
        <li>
          {{ $t('support.contribute') }}
        </li>
      </ul>

      <h3 class="mt-4 text-base font-semibold">
        {{ $t('support.donations_title') }}
      </h3>

      <p class="my-2">
        {{ $t('support.donations_text') }}
      </p>

      <p class="my-2 max-w-full overflow-hidden text-ellipsis">
        {{ $t('support.cardano_wallet') }}
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
        {{ $t('support.eth_wallet') }}
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
        {{ $t('support.thanks') }}
      </p>
      <p class="my-2">
        {{ $t('support.contact') }}
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
const clickText = 'Click to copy'
const copyText = ref(clickText)
const copyTextWallet = ref(clickText)
const copyTextWalletEth = ref(clickText)

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
