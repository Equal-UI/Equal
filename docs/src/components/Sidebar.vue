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
        <router-link to="/introduction">
          <span class="flex p-2">
            <it-icon outlined name="emoji_people" class="mr-2"></it-icon>
            Introduction
          </span></router-link
        >
      </li>
      <li
        :class="{
          'active-menu-item': $route.path === '/start',
        }"
        @click="hideSidebar"
      >
        <router-link to="/start"
          ><span class="flex p-2">
            <it-icon outlined name="whatshot" class="mr-2"></it-icon>
            Getting started
          </span></router-link
        >
      </li>
      <li class="group-title-high">COMPONENTS</li>
      <template v-for="(item, key) in componentGroups" :key="key">
        <li class="group-title">{{ key }}</li>
        <template v-for="(component, i) in item" :key="i">
          <li
            :class="{
              'active-menu-item': $route.path === component.route,
            }"
            @click="hideSidebar"
          >
            <router-link :to="component.route">
              <span class="flex p-2">
                <it-icon
                  :outlined="component.icon_outlined"
                  :name="component.icon"
                  class="mr-2"
                ></it-icon>
                {{ component.name }}
              </span>
            </router-link>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { clickOutside } from '/@equal/directives'
import { IComponentListItem, componentGroup } from '../types'
import { componentsList } from '../data/components'
import { router } from '../router'
import { useRoute } from 'vue-router'

export default defineComponent({
  directives: {
    clickoutside: clickOutside,
  },
  layout: 'components',
  setup() {
    const route = useRoute()
    const left = ref('inherit')

    const components = ref<IComponentListItem[]>(componentsList)

    const componentGroups = computed(() => {
      return Object.values(componentGroup).reduce((el, next) => {
        return {
          ...el,
          [next]: components.value
            .map((el) => {
              if (el.name === 'Switch') {
                el.icon =
                  route.path === '/components/switch'
                    ? 'toggle_on'
                    : 'toggle_off'
              }
              return el
            })
            .filter((comp) => comp.group === next),
        }
      }, {})
    })

    function toggleSidebar() {
      left.value = left.value === 'inherit' ? '0px !important' : 'inherit'
    }
    function hideSidebar() {
      if (left.value === 'inherit') {
        return
      }
      left.value = 'inherit'
    }

    return { left, toggleSidebar, hideSidebar, componentGroups }
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
  width: 15rem;
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
      padding: 4px 7px 4px 30px;
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
  font-weight: 500;
  transition: all 0.3s;

  > a {
    color: #131313 !important;
    // padding: 4px 0 4px 30px !important;
    &:hover {
      transform: none !important;
    }
  }

  span {
    @apply rounded;
    @apply p-2;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 6px,
      rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(50, 50, 93, 0.05) 0px 0px 0px 1px;
  }
}

@media only screen and (max-width: 900px) {
  .sidebar {
    left: -15rem !important;

    &-menu {
      height: 93%;
    }
  }

  .burger {
    display: block !important;
  }
}
</style>

function useRoute() { throw new Error('Function not implemented.') }
