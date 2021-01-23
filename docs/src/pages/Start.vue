<template>

      <h1>Getting started</h1>
      <div class="it-text-box">
        <h2 style="margin-bottom: 20px">Install with NPM or Yarn</h2>
        <prism language="bash" :code="installCode"></prism>

        <h2 style="margin: 20px 0px">Use all components</h2>
        <prism
          language="js"
          code="import { createApp } from 'vue'
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Equal)"
        ></prism>

        <h2 style="margin: 20px 0px">Or individual components</h2>
        <prism
          language="js"
          code="import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import 'equal-vue/dist/style.css'

createApp.use(Button).use(Alert).use(Switch)"
        ></prism>

        <h2 style="margin: 20px 0px">Add Material Icons and Inter font</h2>
        <p style="margin: 0px 0px 10px 0px">
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
<!--         
      <prism language="bash">npm install material-icons --save</prism>
      <p style="margin: 10px 0px">and import to your project</p>
      <prism language="js">import 'material-icons/iconfont/material-icons.css'</prism>
  <p style="margin: 10px 0px">
      Or add via link in the head of the page
  </p> -->
        <prism language="html" :code="headLink"></prism>
      </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    installCode: `# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,
    headLink:
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined">\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">',
  }),
})
</script>

<style>
.it-text-box {
  background: #ffffff;
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
