<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Getting started</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 class="mb-5 text-base font-semibold">1. Install with NPM or Yarn</h2>
      <prism
        language="bash"
        class="rounded border dark:border-neutral-700"
        :code="installCode"
      ></prism>

      <h2 class="my-4 text-base font-semibold">
        2. Install Tailwind version 3.2+
      </h2>
      <p>
        To install Tailwind follow his official documentation:
        <it-button
          variant="primary-text"
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          https://tailwindcss.com/docs/installation
        </it-button>
      </p>
      <p class="my-4 text-base font-semibold">
        3. Add Equal UI theme file to the
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

      <h2 class="my-5 text-base font-semibold">4. Use all components</h2>
      <prism
        language="js"
        class="rounded border dark:border-neutral-700"
        code="import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Equal, Config)"
      ></prism>

      <it-collapse class="mt-4">
        <it-collapse-item title="4.1. Or individual components">
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

      <h2 class="mt-5 mb-2 text-base font-semibold">5. Add Inter font</h2>
      <p class="mb-2">
        Equal UI uses
        <it-button
          variant="primary-text"
          href="https://fonts.google.com/specimen/Inter"
          target="_blank"
          rel="noopener noreferrer"
          class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          Inter
        </it-button>
        font by
        <it-button
          variant="primary-text"
          href="https://twitter.com/rsms"
          target="_blank"
          rel="noopener noreferrer"
          class="!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"
        >
          @rsms
        </it-button>
        . The simplest way to add it via CDN:
      </p>
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
