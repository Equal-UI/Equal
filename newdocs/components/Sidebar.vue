<template>
  <div
    v-clickoutside="closeSidebar"
    class="
      fixed
      -left-60
      flex
      h-full
      w-60
      flex-col
      border-r
      bg-white
      transition-all
      duration-100
      dark:border-gray-600
      lg:left-0
    "
    :class="{
      '!left-0 z-[100]': open,
    }"
  >
    <div
      class="
        border-b
        bg-white
        py-3
        px-5
        dark:border-gray-600 dark:bg-neutral-900
      "
    >
      <div class="mt-4 flex flex-col">
        <a
          target="_blank"
          class="flex"
          rel="noopener noreferrer"
          href="https://github.com/quatrochan/Equal"
        >
          <it-button size="small" class="w-full">
            <template #icon>
              <img src="/github-logo.svg" class="h-3" alt srcset />
            </template>
            Github
          </it-button>
        </a>
        <a
          target="_blank"
          class="mt-2 flex"
          rel="noopener noreferrer"
          href="https://twitter.com/k0mmsussertod"
        >
          <it-button size="small" class="w-full">
            <template #icon
              ><img src="/twitter-logo.svg" class="h-3" alt srcset />
            </template>
            Twitter
          </it-button>
        </a>
      </div>
      <div class="mt-4">
      <it-input v-model="search" labelTop="Search" autocomplete="new-password" placeholder="Tooltip..." />
      </div>
    </div>
    <ul
      class="
        scrollbar
        w-full
        overflow-y-auto
        px-6
        py-10
        dark:bg-neutral-800 dark:text-slate-400
      "
    >
      <li class="group-title-high">GENERAL</li>
      <li
        class="ml-2"
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
        class="ml-2"
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
            <NuxtLink :to="component.route">
              <span class="flex p-2 pl-8">
                <it-icon
                  :outlined="component.icon_outlined"
                  :name="component.icon"
                  class="mr-2"
                ></it-icon>
                {{ component.name }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, computed, onMounted, inject, watch } from 'vue'
import { clickOutside as vClickoutside } from '@/directives'
import { IComponentListItem, componentGroup } from '../types'
import { componentsList } from '../data/components'
import { useRoute } from 'vue-router'
import { Emitter } from 'mitt'
import { TEvents, TTheme } from '../types/Events'

const route = useRoute()
const left = ref('inherit')
const open = ref(false)
const zIndex = ref(0)
const emitter = inject<Emitter<TEvents>>('emitter')
const components = ref<IComponentListItem[]>(componentsList)
const search = ref('')

const componentGroups = computed(() => {
  return Object.values(componentGroup).reduce((el, next) => {
    return {
      ...el,
      [next]: components.value
        .map((el) => {
          if (el.name === 'Switch') {
            el.icon =
              route.path === '/components/switch' ? 'toggle_on' : 'toggle_off'
          }
          return el
        })
        .filter(
          (comp) =>
            comp.group === next &&
            comp.name.toLowerCase().includes(search.value.toLowerCase()),
        ),
    }
  }, {})
})

emitter?.on('sidebar', (value) => {
  openSidebar()
})

const openSidebar = () => {
  open.value = true
}
const closeSidebar = () => {
  open.value = false
}

function toggleSidebar() {
  left.value = left.value === 'inherit' ? '0px !important' : 'inherit'
  zIndex.value = zIndex.value === 0 ? 1 : 0
}
function hideSidebar() {
  if (left.value === 'inherit') {
    return
  }
  left.value = 'inherit'
  zIndex.value = 0
}
</script>

<style lang="less">
.sidebar {
  &-menu {
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
