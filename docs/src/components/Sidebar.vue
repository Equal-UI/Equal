<template>
  <div
    v-clickoutside="hideSidebar"
    class="sidebar"
    :style="{
      left,
    }"
  >
    <it-button
      class="burger"
      :icon="left === 'inherit' ? 'menu' : 'close'"
      @click="toggleSidebar"
    />
    <div class="sidebar-top">
      <router-link to="/" class="logo-link">
        <img class="sidebar-logo" src="/eqqqual.png" />
      </router-link>
      <div class="mt-4 flex flex-col">
        <a
          target="_blank"
          class="flex"
          rel="noopener noreferrer"
          href="https://github.com/quatrochan/Equal"
        >
          <it-button size="small" block>
            <img src="/github-logo.svg" class="mr-2 h-3" alt srcset />Github
          </it-button>
        </a>
        <a
          target="_blank"
          class="flex mt-2"
          rel="noopener noreferrer"
          href="https://twitter.com/k0mmsussertod"
        >
          <it-button size="small" block>
            <img src="/twitter-logo.svg" class="mr-2 h-3" alt srcset />Twitter
          </it-button>
        </a>
      </div>
    </div>
    <ul class="sidebar-menu">
      <li class="group-title-high">GENERAL</li>
      <li
        :class="{
          'active-menu-item': $route.path === '/introduction',
        }"
        @click="hideSidebar"
      >
        <router-link style="padding: 7px 0px 7px 30px" to="/introduction"
          >Introduction</router-link
        >
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/start',
        }"
        @click="hideSidebar"
      >
        <router-link style="padding: 7px 0px 7px 30px" to="/start"
          >Getting started</router-link
        >
      </li>
      <li class="group-title-high">COMPONENTS</li>
      <li class="group-title">Base</li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/button',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/button">Button</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/icon',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/icon">Icon</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/divider',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/divider">Divider</router-link>
      </li>

      <li class="group-title">Form</li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/checkbox',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/checkbox"> Checkbox </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/colorpicker',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/colorpicker">
          Colorpicker
          <it-tag type="primary">New</it-tag>
        </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/input',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/input"> Input </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/numberinput',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/numberinput"> Number Input </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/radio',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/radio"> Radio </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/select',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/select">
          Select <it-tag type="primary" class="pulse">Updated</it-tag>
        </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/slider',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/slider">Slider</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/switch',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/switch"> Switch </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/textarea',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/textarea"> Textarea </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/toggle',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/toggle"> Toggle </router-link>
      </li>

      <li class="group-title">Feedback</li>

      <li
        :class="{
          'active-menu-item': $route.path === '/components/alert',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/alert">Alert</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/drawer',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/drawer"> Drawer </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/loading',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/loading">Loading</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/loadingbar',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/loadingbar">Loading bar</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/message',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/message">Message</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/modal',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/modal">
          Modal
          <it-tag type="primary">Updated</it-tag>
        </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/notification',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/notification">Notification</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/popover',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/popover"> Popover </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/progressbar',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/progressbar">Progress Bar</router-link>
      </li>

      <li class="group-title">Data Display</li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/avatar',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/avatar"> Avatar </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/collapse',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/collapse"> Collapse </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/badge',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/badge">Badge</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/tag',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/tag">Tag</router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/tabs',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/tabs"> Tabs </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/tooltip',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/tooltip">Tooltip</router-link>
      </li>

      <li class="group-title">Navigation</li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/breadcrumbs',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/breadcrumbs">
          Breadcrumbs
          <it-tag type="warning">WIP</it-tag>
        </router-link>
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/components/dropdown',
        }"
        @click="hideSidebar"
      >
        <router-link to="/components/dropdown">Dropdown</router-link>
      </li>
      <!-- <li class="group-title-high">CSS</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === 'css-hovup',
        }"
      >
        <router-link to="/css/hovup">Hovup</router-link>
      </li>-->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { clickOutside } from '/@equal/directives'

export default defineComponent({
  directives: {
    clickoutside: clickOutside,
  },
  // @ts-ignore
  layout: 'components',
  setup() {
    const left = ref('inherit')

    function toggleSidebar() {
      left.value = left.value === 'inherit' ? '0px !important' : 'inherit'
    }
    function hideSidebar() {
      if (left.value === 'inherit') {
        return
      }
      left.value = 'inherit'
    }

    return { left, toggleSidebar, hideSidebar }
  },
})
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
  z-index: 9;

  transition: all 0.18s;

  &-top {
    padding: 12px 20px;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 7px 7px 30px;
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
