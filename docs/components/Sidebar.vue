<template>
  <div
    v-clickoutside="closeSidebar"
    class="fixed -left-60 z-20 mt-14 flex h-full w-60 flex-col border-r bg-white transition-all duration-100 dark:border-zinc-800 lg:left-0"
    :class="{
      '!left-0 z-[100]': open,
    }"
  >
    <div class="bg-white py-3 px-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <it-input
          v-model="search"
          :label-top="$t('sidebar.search.label')"
          autocomplete="new-password"
          :placeholder="searchPlaceholder"
        >
          <template #prefixIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              v-if="search.length > 0"
              class="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </template>
          <template #suffixIcon>
            <it-button variant="text" @click="search = ''" class="!p-1">
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
      class="scrollbar h-full w-full overflow-y-auto px-6 pb-20 dark:bg-zinc-900 dark:text-slate-200"
    >
      <template v-for="(item, key) in componentGroups" :key="key">
        <li class="mt-4 mb-2 text-base font-semibold">{{ key }}</li>
        <template v-for="(component, i) in item" :key="i">
          <li
            :class="{
              'bg-gray-400/10 text-blue-600 dark:bg-gray-500/10':
                route.path === component.route,
            }"
            class="mb-1 flex flex-row rounded text-sm font-medium text-gray-600 dark:text-slate-200"
            @click="hideSidebar"
          >
            <NuxtLink class="w-full" :to="component.route">
              <span
                class="flex items-center justify-between py-1 px-3 text-sm leading-6 transition-all hover:pl-4"
                :class="{
                  'hover:text-gray-900 dark:hover:text-white':
                    route.path !== component.route,
                }"
              >
                <div class="flex items-center leading-4">
                  <i
                    class="material-icons mr-3 items-center !text-xl text-gray-500"
                    :class="{
                      'material-icons-outlined': component.icon_outlined,
                    }"
                  >
                    {{ component.icon }}
                  </i>
                  {{ $t(component.name) }}
                </div>
                <it-tag
                  variant="primary"
                  filled
                  class="ml-2"
                  v-if="component.soon"
                >
                  {{ $t('sidebar.soon') }}
                </it-tag>
              </span>
            </NuxtLink>
          </li>
        </template>
      </template>
      <template v-if="Object.keys(componentGroups).length <= 0">
        {{ $t('sidebar.notfound') }}
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const left = ref('inherit')
const open = ref(false)
const zIndex = ref(0)
const emitter = inject<Emitter<TEvents>>('emitter')
const components = ref<IComponentListItem[]>(componentsList)
const search = ref('')
const searchPlaceholder = ref(t('sidebar.search.placeholder_1'))

const componentGroups = computed(() => {
  return Object.values(componentGroup).reduce((el, next) => {
    const toReturn = {
      ...el,
    }

    const toNext = components.value
      .filter(
        (comp) =>
          comp.group === next &&
          t(comp.name).toLowerCase().includes(t(search.value.toLowerCase())),
      )
      .map((ele) => {
        if (ele.name === 'sidebar.switch') {
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
    t('sidebar.search.placeholder_2'),
    t('sidebar.search.placeholder_3'),
    t('sidebar.search.placeholder_4'),
    t('sidebar.search.placeholder_5'),
    t('sidebar.search.placeholder_6'),
    t('sidebar.search.placeholder_7'),
  ]
  let i = 0
  setInterval(() => {
    searchPlaceholder.value = ''
    typeWritePlaceholder(placeholdersList[i])
    i = i >= placeholdersList.length - 1 ? 0 : i + 1
  }, 6000)
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
