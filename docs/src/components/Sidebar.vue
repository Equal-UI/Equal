<template>
  <div
    class="sidebar"
    :style="{
      left,
    }"
    v-clickoutside="hideSidebar"
  >
    <it-button
      @click="toggleSidebar"
      class="burger"
      :icon="left === 'inherit' ? 'menu' : 'close'"
    />
    <div class="sidebar-top">
      <router-link to="/" class="logo-link">
        <img class="sidebar-logo" src="/eqqqual.png" />
      </router-link>
      <div style="margin-top: 15px; display: flex; flex-direction:column">

      <a
          target="_blank"
          class="github"
          rel="noopener noreferrer"
          href="https://github.com/quatrochan/Equal"
        >
          <it-button size="small" block>
            <img
              src="/github-logo.svg"
              style="margin-right: 5px; height: 1em;"
              alt
              srcset
            />Github
          </it-button>
        </a>
      <a
          target="_blank"
          class="github"
          style="margin-top: 8px;"
          rel="noopener noreferrer"
          href="https://twitter.com/k0mmsussertod"
        >
          <it-button size="small" block>
            <img
              src="/twitter-logo.svg"
              style="margin-right: 5px; height: 1em"
              alt
              srcset
            />Twitter
          </it-button>
        </a>
      </div>
    </div>
    <ul class="sidebar-menu">
      <li class="group-title-high">GENERAL</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/introduction',
        }"
      >
        <router-link style="padding: 7px 0px 7px 30px" to="/introduction"
          >Introduction</router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/start',
        }"
      >
        <router-link style="padding: 7px 0px 7px 30px" to="/start"
          >Getting started</router-link
        >
      </li>
      <li class="group-title-high">COMPONENTS</li>
      <li class="group-title">Base</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/button',
        }"
      >
        <router-link to="/components/button">Button</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/icon',
        }"
      >
        <router-link to="/components/icon">Icon</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/divider',
        }"
      >
        <router-link to="/components/divider">Divider</router-link>
      </li>

      <li class="group-title">Form</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/input',
        }"
      >
        <router-link to="/components/input"
          >Input
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/numberinput',
        }"
      >
        <router-link to="/components/numberinput"
          >Number Input
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/checkbox',
        }"
      >
        <router-link to="/components/checkbox"
          >Checkbox
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/radio',
        }"
      >
        <router-link to="/components/radio"
          >Radio
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/select',
        }"
      >
        <router-link to="/components/select"
          >Select
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/slider',
        }"
      >
        <router-link to="/components/slider">Slider</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/switch',
        }"
      >
        <router-link to="/components/switch"
          >Switch<it-tag type="primary">Updated</it-tag
          ></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/textarea',
        }"
      >
        <router-link to="/components/textarea"
          >Textarea
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/toggle',
        }"
      >
        <router-link to="/components/toggle"
          >Toggle <it-tag type="primary" class="pulse">New</it-tag></router-link
        >
      </li>

      <li class="group-title">Feedback</li>

      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/alert',
        }"
      >
        <router-link to="/components/alert">Alert</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/drawer',
        }"
      >
        <router-link to="/components/drawer"
          >Drawer <it-tag type="primary" class="pulse">New</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/loading',
        }"
      >
        <router-link to="/components/loading">Loading</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/loadingbar',
        }"
      >
        <router-link to="/components/loadingbar">Loading bar</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/message',
        }"
      >
        <router-link to="/components/message">Message</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/modal',
        }"
      >
        <router-link to="/components/modal"
          >Modal
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/notification',
        }"
      >
        <router-link to="/components/notification">Notification</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/popover',
        }"
      >
        <router-link to="/components/popover">Popover <it-tag type="primary" class="pulse">New</it-tag></router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/progressbar',
        }"
      >
        <router-link to="/components/progressbar">Progress Bar</router-link>
      </li>

      <li class="group-title">Data Display</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/avatar',
        }"
      >
        <router-link to="/components/avatar"
          >Avatar
          <it-tag type="primary" >Updated</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/collapse',
        }"
      >
        <router-link to="/components/collapse"
          >Collapse
          <it-tag type="primary" class="pulse">New</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/badge',
        }"
      >
        <router-link to="/components/badge">Badge</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/tag',
        }"
      >
        <router-link to="/components/tag">Tag</router-link>
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/tabs',
        }"
      >
        <router-link to="/components/tabs"
          >Tabs <it-tag type="primary" class="pulse">New</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/tooltip',
        }"
      >
        <router-link to="/components/tooltip">Tooltip</router-link>
      </li>

      <li class="group-title">Navigation</li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/breadcrumbs',
        }"
      >
        <router-link to="/components/breadcrumbs"
          >Breadcrumbs <it-tag type="warning">WIP</it-tag></router-link
        >
      </li>
      <li
        @click="hideSidebar"
        :class="{
          'active-menu-item': $route.path === '/components/dropdown',
        }"
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
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { clickOutside } from '/@equal/directives'

export default defineComponent({
  // @ts-ignore
  layout: 'components',
  directives: {
    clickoutside: clickOutside,
  },
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
.github {
  flex: 1;
}

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
