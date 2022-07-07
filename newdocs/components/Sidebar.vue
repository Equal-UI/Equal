<template>
  <div
    v-clickoutside="closeSidebar"
    class="
      fixed
      -left-60
      mt-14
      flex
      h-full
      w-60
      flex-col
      border-r
      bg-white
      transition-all
      duration-100
      dark:border-zinc-800
      lg:left-0
      xl:left-96
    "
    :class="{
      '!left-0 z-[100]': open,
    }"
  >
    <div class="bg-white py-3 px-5 dark:border-zinc-800 dark:bg-zinc-900">
      <!-- <div class="mt-4 flex flex-col">
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
      </div> -->
      <div>
        <it-input
          v-model="search"
          labelTop="Search"
          autocomplete="new-password"
          placeholder="Tooltip..."
        >
          <template #prefixIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              /></svg
          ></template>
          <template v-if="search.length > 0" #suffixIcon>
            <it-button @click="search = ''" class="!px-1 !py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </it-button>
          </template>
        </it-input>
      </div>
    </div>
    <ul
      class="
        scrollbar
        w-full
        overflow-y-auto
        px-6
        pb-20
        dark:bg-zinc-900 dark:text-slate-400
      "
    >
      <template v-for="(item, key) in componentGroups" :key="key">
        <li class="mt-4">{{ key }}</li>
        <template v-for="(component, i) in item" :key="i">
          <li
            :class="{
              'active-menu-item': $route.path === component.route,
            }"
            @click="hideSidebar"
          >
            <NuxtLink :to="component.route">
              <span class="flex items-center p-2">
                <it-icon
                  :outlined="component.icon_outlined"
                  :name="component.icon"
                  class="mr-2 items-center text-lg"
                ></it-icon>
                {{ component.name }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </template>
      <template v-if="Object.keys(componentGroups).length <= 0">
        <p>NOT FOUND</p>
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
    const toReturn = {
      ...el,
    }

    const toNext = components.value
      .filter(
        (comp) =>
          comp.group === next &&
          comp.name.toLowerCase().includes(search.value.toLowerCase()),
      )
      .map((ele) => {
        if (ele.name === 'Switch') {
          ele.icon =
            route.path === '/components/switch' ? 'toggle_on' : 'toggle_off'
        }
        return ele
      })

    if (toNext.length > 0) {
      toReturn[next] = toNext
    }
    return toReturn
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
