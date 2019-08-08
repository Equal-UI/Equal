<template lang="html">
  <div class="header">
    <nuxt-link to="/" class="logo-link">
    <img class="header-logo" src="~/assets/equal.svg" />
    </nuxt-link>
    <nuxt-link to="/">
    <h3>Equal</h3>
    </nuxt-link>
  </div>
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
    // justify-content: center;
    flex-direction: row;
    align-items: center;

    &-logo {
      height: 74%;
    }

    .logo-link {
      height: 100%;
    }

    a + a {
      margin-left: 10px;
    }

    img {
      padding: 7px 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    .header {
      justify-content: center;
      padding: 0px !important;
    }
  }
</style>