<template>
  <div class="sidebar" :style="{
      left
    }">
    <it-button @click="toggleSidebar" class="burger" :icon="left === 'inherit' ? 'menu' : 'close'" />
    <ul class="sidebar-menu">
      <li :class="{
        'active-menu-item': $route.name === 'start'
      }">
        <nuxt-link style="padding: 6px 13px;" to="/start">Getting started</nuxt-link>
      </li>
      <li class="group-title">
        Components
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-button'
      }">
        <nuxt-link to="/components/button">Button</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-alert'
      }">
        <nuxt-link to="/components/alert">Alert</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-checkbox'
      }">
        <nuxt-link to="/components/checkbox">Checkbox</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-dropdown'
      }">
        <nuxt-link to="/components/dropdown">Dropdown</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-icon'
      }">
        <nuxt-link to="/components/icon">Icon</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-input'
      }">
        <nuxt-link to="/components/input">Input</nuxt-link>
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
        'active-menu-item': $route.name === 'components-numberinput'
      }">
        <nuxt-link to="/components/numberinput">Number Input</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-progressbar'
      }">
        <nuxt-link to="/components/progressbar">Progress Bar</nuxt-link>
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
        'active-menu-item': $route.name === 'components-tag'
      }">
        <nuxt-link to="/components/tag">Tag</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-textarea'
      }">
        <nuxt-link to="/components/textarea">Textarea</nuxt-link>
      </li>
      <li :class="{
        'active-menu-item': $route.name === 'components-tooltip'
      }">
        <nuxt-link to="/components/tooltip">Tooltip</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components'
})
export default class Comps extends Vue {
  left = 'inherit'
  toggleSidebar() {
    this.left = this.left === 'inherit' ? '0px !important' : 'inherit'
  }
}
</script>

<style lang="less">
  .sidebar {
    position: fixed;
    top: 50px;
    left: 0px;
    box-sizing: border-box;
    // overflow-y: auto;
    width: 14rem;
    background-color: #ffffff;
    border-right: 1px solid #e2e2e2;
    height: 100%;
    z-index: 1010;

    transition: all .18s;

    &-menu {
      width: 100%;
      box-sizing: border-box;
      list-style: none;
      padding: 0px;
      font-size: 14px;

      & > li {
        display: list-item;
        box-sizing: border-box;
      }

      & > li > a {
        display: inline-block;
        padding: 6px 30px;
        width: 100%;
        box-sizing: border-box;
      }

      li.group-title {
        color: #A5A6AD;
        padding: 5px 13px;
        font-weight: 500;
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
    border-right: 3px solid #3051FF;
    background-color: #E8EBFF;
    font-weight: 500;
    color: #3051FF;
    transition: all .3s;
  }

  @media only screen and (max-width: 900px) {
    .sidebar {
      left: -14rem !important;
    }

    .burger {
      display: block !important;
    }
  }
</style>