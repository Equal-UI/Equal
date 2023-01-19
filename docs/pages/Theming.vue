<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Theming</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <p>
        To create your own theme you can copy on of the initial theme files and
        make your changes to them:
      </p>
      <ul class="mt-2">
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Full:</strong>
            contains classes for light and dark themes
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts"
            target="_blank"
            rel="noopener noreferrer"
            size="big"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Light:</strong>
            contains classes for light theme
          </it-button>
        </li>
        <li>
          <it-button
            variant="primary-text"
            href="https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts"
            target="_blank"
            size="big"
            rel="noopener noreferrer"
            class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
          >
            <strong>Dark:</strong>
            contains classes for dark theme
          </it-button>
        </li>
      </ul>
      <p>Or make your own theme file from scratch</p>
      <p>This page is WIP</p>
    </div>
  </div>
</template>
