<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">Getting started</h1>
    <div
      class="flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 class="mb-5">Install with NPM or Yarn</h2>
      <prism language="bash" class="rounded" :code="installCode"></prism>

      <h2 class="my-4">Install Tailwind version >3.1</h2>
      <p>
        Add Equal UI theme file to the
        <code>tailwind.config.js</code>
      </p>
      <prism
        language="js"
        class="rounded"
        code="module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}
      "
      ></prism>

      <h2 class="my-5">Use all components</h2>
      <prism
        language="js"
        class="rounded"
        code="import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Equal, Config)"
      ></prism>

      <h2 class="my-5">Or individual components</h2>
      <prism
        language="js"
        class="rounded"
        code="import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Button, Config).use(Switch, Config)"
      ></prism>

      <h2 class="my-5">Add Inter font</h2>
      <p class="mb-2">
        Equal UI uses
        <a
          href="https://fonts.google.com/specimen/Inter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inter
        </a>
        font by
        <a
          href="https://twitter.com/rsms"
          target="_blank"
          rel="noopener noreferrer"
        >
          @rsms
        </a>
        . The simplest way to add it via CDN:
      </p>
      <prism language="html" class="rounded" :code="headLink"></prism>
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
