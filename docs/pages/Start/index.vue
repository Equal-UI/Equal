<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      {{ $t('start.title') }}
    </h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 class="mb-5 text-base font-semibold">
        {{ $t('start.step1.title') }}
      </h2>
      <prism
        language="bash"
        class="rounded border dark:border-neutral-700"
        :code="installCode"
      ></prism>

      <h2 class="my-4 text-base font-semibold">
        {{ $t('start.step2.title') }}
      </h2>
      <p>
        {{ $t('start.step2.description') }}
        <it-button
          variant="primary-text"
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
        >
          https://tailwindcss.com/docs/installation
        </it-button>
      </p>
      <p class="my-4 text-base font-semibold">
        {{ $t('start.step3.title') }}
        <code>tailwind.config.js</code>
      </p>
      <prism
        language="js"
        class="rounded border dark:border-neutral-700"
        code="module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}"
      ></prism>

      <h2 class="my-5 text-base font-semibold">
        {{ $t('start.step4.title') }}
      </h2>
      <prism
        language="js"
        class="rounded border dark:border-neutral-700"
        code="import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Equal, Config)"
      ></prism>

      <it-collapse class="mt-4">
        <it-collapse-item :title="$t('start.step4_1.title')">
          <prism
            language="js"
            class="rounded border dark:border-neutral-700"
            code="import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Button, Config).use(Switch, Config)"
          ></prism>
        </it-collapse-item>
      </it-collapse>

      <h2 class="mb-2 mt-5 text-base font-semibold">
        {{ $t('start.step5.title') }}
      </h2>
      <div class="mb-2">
        <i18n-t keypath="start.step5.description" tag="p">
          <it-button
            variant="primary-text"
            href="https://fonts.google.com/specimen/Inter"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
          >
            Inter
          </it-button>
          <it-button
            variant="primary-text"
            href="https://twitter.com/rsms"
            target="_blank"
            rel="noopener noreferrer"
            class="!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"
          >
            @rsms
          </it-button>
        </i18n-t>
      </div>

      <prism
        language="html"
        class="rounded border dark:border-neutral-700"
        :code="headLink"
      ></prism>
    </div>
  </div>
</template>

<script setup lang="ts">
const installCode = `# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`

const headLink =
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">'
</script>

<style>
.it-text-box {
  border: 1px solid #d3dae6;
  border-radius: 4px;
  display: flex;
  width: 100%;
  min-height: 150px;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 20px;
  box-sizing: border-box;
}
</style>
