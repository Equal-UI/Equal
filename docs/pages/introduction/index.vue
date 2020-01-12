<template>
  <div>
    <h1>Introduction</h1>
    <div class="it-text-box">
      <h2 style="margin-bottom: 20px;">Hello!</h2>
      <p>
        <b>Equal UI</b> is a components framework for Vue.js based on TypeScript. Right now we are in the middle of the road to the stable version. Our team really looking forward for the time when Equal UI could be used in the real projects and we would be really glad to see you contribute to the project.
      </p>
      <h2 style="margin-top: 22px; margin-bottom: 20px;">How to Contribute</h2>
      <p>Contributions to Equal UI on Github are appreciated! Whether you have questions, concerns, or suggestions for improving Equal UI - please don't hesitate to reach out to us <a href="https://github.com/quatrochan/Equal/issues" target="_blank" rel="noopener noreferrer">here</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class IntroductionPage extends Vue {

  installCode = `# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`

  headLink = '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined">'
}
</script>

<style>
  .it-text-box {
    background: #ffffff;
    border: 1px solid #dfdfdf;
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