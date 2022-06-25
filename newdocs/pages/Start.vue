<template>
  <div>
    <h1>Getting started</h1>
    <div
      class="
        flex
        w-full
        flex-col
        rounded
        border
        bg-white
        p-8
        dark:border-neutral-700 dark:bg-neutral-800
      "
    >
      <h2 class="mb-5">Install with NPM or Yarn</h2>
      <prism language="bash" class="rounded" :code="installCode"></prism>

      <h2 class="my-5">Use all components</h2>
      <prism
        language="js"
        class="rounded"
        code="import { createApp } from 'vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Equal)"
      ></prism>

      <h2 class="my-5">Or individual components</h2>
      <prism
        language="js"
        class="rounded"
        code="import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Button).use(Alert).use(Switch)"
      ></prism>

      <h2 class="my-5">Add Material Icons and Inter font</h2>
      <p class="mb-2">
        Equal UI uses
        <a
          style="color: #3051ff"
          target="_blank"
          rel="noopener noreferrer"
          href="https://material.io/resources/icons/"
          >Material Icons</a
        >
        as default icons, and
        <a
          href="https://fonts.google.com/specimen/Inter"
          target="_blank"
          rel="noopener noreferrer"
          >Inter</a
        >
        font by
        <a
          href="https://twitter.com/rsms"
          target="_blank"
          rel="noopener noreferrer"
          >@rsms</a
        >. The simplest way to add them via CDN:
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
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined">\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">'
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
