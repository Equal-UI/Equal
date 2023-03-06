<template>
  <div class="flex w-full flex-col">
    <p class="text-sm font-bold">{{ $t('sponsoring.title') }}</p>
    <NuxtLink to="/support" class="mt-2 w-full">
      <div
        class="flex flex-col items-center justify-center gap-3 rounded-md border border-dashed border-zinc-200 p-2 text-center leading-4 hover:border-zinc-300 dark:border-zinc-600 hover:dark:border-zinc-500"
      >
        <h5
          class="text-md bg-gradient-to-tr from-blue-500 to-violet-600 bg-clip-text font-bold text-transparent"
        >
          {{ $t('sponsoring.first_sponsor') }}
        </h5>
        <p class="text-xs leading-4">
          {{ $t('sponsoring.text') }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
