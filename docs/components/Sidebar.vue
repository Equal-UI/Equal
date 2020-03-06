<template>
  <div class="sidebar" :style="{
      left
    }" v-clickoutside="hideSidebar">
    <it-button @click="toggleSidebar" class="burger" :icon="left === 'inherit' ? 'menu' : 'close'" />
    <div class="sidebar-top">
      <nuxt-link to="/" class="logo-link">
        <img class="sidebar-logo" src="~/assets/eqqqual.png" />
        <!-- <it-tag type="primary">v0.4.0</it-tag> -->
      </nuxt-link>
    </div>
    <ul class="sidebar-menu">
      <li class="group-title-high">GENERAL</li>
      <li :class="{
        'active-menu-item': $route.name === 'introduction'
      }">
        <nuxt-link style="padding: 7px 0px 7px 30px;" to="/introduction">Introduction</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'start'
      }">
        <nuxt-link style="padding: 7px 0px 7px 30px;" to="/start">Getting started</nuxt-link>
      </li>
      <li class="group-title-high">COMPONENTS</li>
      <li class="group-title">Base</li>
      <li :class="{
        'active-menu-item': $route.name === 'components-button'
      }">
        <nuxt-link to="/components/button">Button</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-icon'
      }">
        <nuxt-link to="/components/icon">Icon</nuxt-link>
      </li>

      <li class="group-title">Form</li>
      <li :class="{
        'active-menu-item': $route.name === 'components-input'
      }">
        <nuxt-link to="/components/input">Input</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-numberinput'
      }">
        <nuxt-link to="/components/numberinput">Number Input</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-checkbox'
      }">
        <nuxt-link to="/components/checkbox">Checkbox</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-radio'
      }">
        <nuxt-link to="/components/radio">Radio</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-select'
      }">
        <nuxt-link to="/components/select">Select</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-slider'
      }">
        <nuxt-link to="/components/slider">Slider</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-switch'
      }">
        <nuxt-link to="/components/switch">Switch</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-textarea'
      }">
        <nuxt-link to="/components/textarea">Textarea</nuxt-link>
      </li>

      <li class="group-title">Feedback</li>

      <li :class="{
        'active-menu-item': $route.name === 'components-alert'
      }">
        <nuxt-link to="/components/alert">Alert</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-loading'
      }">
        <nuxt-link to="/components/loading">Loading</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-loadingbar'
      }">
        <nuxt-link to="/components/loadingbar">Loading bar</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-message'
      }">
        <nuxt-link to="/components/message">Message</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-modal'
      }">
        <nuxt-link to="/components/modal">Modal</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-notification'
      }">
        <nuxt-link to="/components/notification">Notification</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-progressbar'
      }">
        <nuxt-link to="/components/progressbar">Progress Bar</nuxt-link>
      </li>

      <li class="group-title">Data Display</li>
      <li :class="{
        'active-menu-item': $route.name === 'components-avatar'
      }">
        <nuxt-link to="/components/avatar">Avatar</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-badge'
      }">
        <nuxt-link to="/components/badge">Badge</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-tag'
      }">
        <nuxt-link to="/components/tag">Tag</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-tooltip'
      }">
        <nuxt-link to="/components/tooltip">Tooltip</nuxt-link>
      </li>

      <li class="group-title">Navigation</li>
      <li :class="{
        'active-menu-item': $route.name === 'components-dropdown'
      }">
        <nuxt-link to="/components/dropdown">Dropdown</nuxt-link>
      </li>
      <li>
        <a
          target="_blank"
          class="github"
          rel="noopener noreferrer"
          href="https://github.com/quatrochan/Equal"
        >
          <it-button size="big" block style="margin-top: 15px;">
            <img
              src="~/assets/github-logo.svg"
              style=" margin-right: 5px; height: 18px;"
              alt
              srcset
            />Follow
          </it-button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import clickoutside from '../../src/directives/clickOutside'

@Component({
  // @ts-ignore
  layout: 'components',
  directives: { clickoutside }
})
export default class Comps extends Vue {
  public left = 'inherit'
  // public async beforeMount() {
  //   const data = await fetch('https://api.github.com/repos/quatrochan/Equal')
  //   const { stargazers_count } = await data.json()
  //   console.log(stargazers_count)
  // }
  public toggleSidebar() {
    this.left = this.left === 'inherit' ? '0px !important' : 'inherit'
  }
  public hideSidebar() {
    if (this.left === 'inherit') {
      return
    }
    this.left = 'inherit'
  }
}
</script>

<style lang="less">
.sidebar {
  position: fixed;
  left: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 14rem;
  background-color: #fafbfd;
  border-right: 1px solid #d3dae6;
  height: 100%;
  z-index: 1010;

  transition: all 0.18s;

  &-top {
    padding: 20px 25px 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #d3dae6;
  }

  &-logo {
    width: 100%;
  }

  &-menu {
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    padding: 10px 0px 20px;
    margin: 0px;
    font-size: 14px;
    // height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    & > li {
      display: list-item;
      box-sizing: border-box;
      padding: 0 15px;
    }

    & > li > a:not(.github) {
      display: inline-block;
      padding: 7px 0px 7px 30px;
      width: 100%;
      box-sizing: border-box;
      font-weight: 500;
      font-size: 0.865rem;
      color: #69707d;
      transition: all 0.2s ease;

      &:hover {
        color: #131313;
        transform: translateX(4px);
      }
    }

    li.group-title {
      color: #131313;
      padding: 16px 0px 5px 30px;
      font-weight: 600;
      font-size: 1rem;

      &-high {
        color: #131313;
        padding: 20px 0px 5px 30px;
        font-weight: 600;
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }
  }

  .burger {
    display: none;
    position: absolute;
    right: -33px;
    top: 8px;
    z-index: 9999999;
  }
}

.active-menu-item {
  // border-left: 3px solid #3051FF;
  font-weight: 500;
  transition: all 0.3s;

  > a {
    background-color: #e8ebff;
    color: #3051ff !important;
    border-radius: 6px;

    &:hover {
      transform: none !important;
    }
  }
}

@media only screen and (max-width: 900px) {
  .sidebar {
    left: -14rem !important;

    &-menu {
      height: 93%;
    }
  }

  .burger {
    display: block !important;
  }
}
</style>