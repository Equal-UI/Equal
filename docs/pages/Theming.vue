<template>
  <div>
    <h1 class="mb-4 flex flex-row items-center gap-4 text-2xl font-bold">
      {{ $t('sidebar.theming') }}
      <it-tag variant="warning">{{ $t('theming.wip') }}</it-tag>
    </h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p>
        {{ $t('theming.own_theme_copy') }}
      </p>
      <ul class="mt-2">
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Full:</strong>
            {{ $t('theming.full') }}
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Light:</strong>
            {{ $t('theming.light') }}
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Dark:</strong>
            {{ $t('theming.dark') }}
          </it-button>
        </li>
      </ul>
      <p>{{ $t('theming.own_theme') }}</p>
    </div>
  </div>
</template>
