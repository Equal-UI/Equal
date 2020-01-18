<template lang="html">
  <header class="header">
    <div class="header-left">
      <nuxt-link to="/" class="logo-link">
        <img class="header-logo" src="~/assets/eqqqual.png" />
        <it-tag type="primary">v0.3.1</it-tag>
      </nuxt-link>
    </div>

    <div class="header-right">
      <a target="_blank" class="logo-link" rel="noopener noreferrer" href="https://github.com/quatrochan/Equal">
        <img class="social-logo" src="~/assets/github-logo.svg" />
      </a>
      <a target="_blank" class="logo-link" rel="noopener noreferrer" href="https://twitter.com/EqualVue">
        <img class="social-logo-twitter" src="~/assets/twitter-logo.svg" />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="less">
  .header {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e2e2;
    z-index: 99999;
    padding: 0px 300px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    &-logo {
      height: 74%;
      margin-right: 10px;
    }

    .logo-link {
      height: 90%;
      display: flex;
      align-items: center;
    }

    .logo-link + .logo-link {
      margin-left: 15px;
    }

    a + a {
      margin-left: 10px;
    }

    img {
      padding: 7px 0px;
    }

    &-left, &-right {
      display: flex;
      height: 100%;
      flex-direction: row;
      align-items: center;
    }
  }

  .social-logo {
    height: 40%;
  }

  .social-logo-twitter {
    height: 36%;
  }

  @media only screen and (max-width: 600px) {
    .header {
      justify-content: center;
      padding: 0px !important;
    }

    .header-right {
      display: none;
    }
  }
</style>