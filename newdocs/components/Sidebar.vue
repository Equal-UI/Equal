<template>
  <div
    v-clickoutside="closeSidebar"
    class="fixed -left-60 mt-14 flex h-full w-60 flex-col border-r bg-white transition-all duration-100 dark:border-zinc-800 lg:left-0"
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
          :placeholder="searchPlaceholder"
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
      class="scrollbar dark:scrollbar-dark w-full overflow-y-auto px-6 pb-20 dark:bg-zinc-900 dark:text-slate-200"
    >
      <template v-for="(item, key) in componentGroups" :key="key">
        <li class="mt-4 mb-2 text-base font-semibold">{{ key }}</li>
        <template v-for="(component, i) in item" :key="i">
          <li
            :class="{
              'bg-blue-600/10 text-blue-600': route.path === component.route,
            }"
            class="mb-1 flex flex-row rounded text-sm font-medium text-gray-500 dark:text-slate-200"
            @click="hideSidebar"
          >
            <NuxtLink class="w-full" :to="component.route">
              <span
                class="flex items-center justify-between py-1.5 px-3 text-sm transition-all hover:pl-4"
                :class="{
                  'hover:text-gray-900': route.path !== component.route,
                }"
              >
                <div class="flex items-center">
                  <i
                    class="material-icons mr-2 items-center !text-xl"
                    :class="{
                      'material-icons-outlined': component.icon_outlined,
                    }"
                    >{{ component.icon }}</i
                  >
                  {{ component.name }}
                </div>
                <it-tag
                  variant="primary"
                  filled
                  class="ml-2"
                  v-if="component.soon"
                  >Soon</it-tag
                >
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
import { clickOutside as vClickoutside } from '@/directives'
import { Emitter } from 'mitt'
import { computed, inject, ref } from 'vue'
import { useRoute } from 'vue-router'
import { componentsList } from '../data/components'
import { componentGroup, IComponentListItem } from '../types'
import { TEvents } from '../types/Events'

const route = useRoute()
const left = ref('inherit')
const open = ref(false)
const zIndex = ref(0)
const emitter = inject<Emitter<TEvents>>('emitter')
const components = ref<IComponentListItem[]>(componentsList)
const search = ref('')
const searchPlaceholder = ref('Tooltip')

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

const typeWritePlaceholder = (placeholder: string) => {
  if (placeholder.length) {
    const [next, ...last] = placeholder
    searchPlaceholder.value = searchPlaceholder.value + next
    setTimeout(() => {
      typeWritePlaceholder(last.join(''))
    }, 60)
  }
}

onMounted(() => {
  const placeholdersList = [
    'Datepicker',
    'Modal',
    'Avatar',
    'Checkbox',
    'Tooltip',
    'Button',
  ]
  let i = 0
  setInterval(() => {
    searchPlaceholder.value = ''
    typeWritePlaceholder(placeholdersList[i])
    i = i >= placeholdersList.length - 1 ? 0 : i + 1
  }, 7000)
})

emitter?.on('sidebar', (value) => {
  open.value = !open.value
})

const openSidebar = () => {
  open.value = true
}
const closeSidebar = (e: Event) => {
  if (
    e.target.id === 'menuBtn' ||
    document.getElementById('menuBtn').contains(e.target)
  )
    return
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
