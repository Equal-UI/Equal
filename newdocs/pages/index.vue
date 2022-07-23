<template>
  <div class="my-8 flex flex-col">
    <div class="relative flex flex-col items-center py-20">
      <div
        class="
          absolute
          animate-[float_4s_ease-in-out_infinite]
          transition-all
          duration-500
          ease-out
        "
        :class="{
          'top-1/2 left-1/2 -translate-x-1/2 scale-0 opacity-0': !loaded,
          'top-[10%] left-1/4 -translate-x-1/2': loaded,
        }"
      >
        <it-tooltip content="With tooltips">
          <it-badge variant="danger" point>
            <it-button>
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg> </template
            ></it-button>
          </it-badge>
        </it-tooltip>
      </div>
      <div
        class="
          absolute
          animate-[float_3s_ease-in-out_infinite]
          transition-all
          delay-100
          duration-500
          ease-out
        "
        :class="{
          'top-1/2 left-1/2 -translate-x-1/2 scale-0 opacity-0': !loaded,
          'top-[10%] left-3/4 -translate-x-1/2': loaded,
        }"
      >
        <it-checkbox
          variant="primary"
          v-model="switchCheckbox"
          label="Cool design"
        />
      </div>
      <div
        class="
          absolute
          animate-[float_3.5s_ease-in-out_infinite]
          transition-all
          delay-100
          duration-500
          ease-out
        "
        :class="{
          'bottom-1/2 left-1/2 opacity-0': !loaded,
          'bottom-1/2 left-3/4': loaded,
        }"
      >
        <it-switch v-model="switchFloat" />
      </div>
      <div
        class="
          absolute
          w-40
          animate-[float_4.5s_ease-in-out_infinite]
          transition-all
          duration-500
          ease-out
        "
        :class="{
          'bottom-1/2 left-1/2 opacity-0': !loaded,
          'bottom-[1%] left-1/2': loaded,
        }"
      >
        <it-slider
          class="-translate-x-1/2"
          v-model="floatSliderValue"
          :min="0"
          :max="69"
        />
      </div>

      <p class="main-title"><img width="150" src="/logo.svg" /></p>
      <h1 class="mb-3.5">Equal UI</h1>
      <h4>Vue 3 components system for your next project based on TypeScript</h4>
    </div>
    <div class="mt-20 flex justify-center space-x-6">
      <router-link to="/start">
        <it-button type="primary" size="big" variant="primary" pulse
          >Get started</it-button
        >
      </router-link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/quatrochan/Equal"
      >
        <it-button size="big" type="neutral" outlined>Github</it-button>
      </a>
    </div>
    <it-divider class="mt-8"></it-divider>

    <div class="py-6">
      <h1>Components</h1>

      <div v-for="(item, key) in componentGroups" :key="key" class="mb-6">
        <h2>{{ key }}</h2>
        <div class="comps-grid mt-4 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <template v-for="(component, i) in item" :key="i">
            <router-link :to="component.route">
              <div class="card-up p-4">
                <div class="flex">
                  <i
                    class="material-icons mr-2 items-center !text-xl"
                    :class="{
                      'material-icons-outlined': component.icon_outlined,
                    }"
                    >{{ component.icon }}</i
                  >
                  <h3 class="ml-2 font-semibold">{{ component.name }}</h3>
                </div>
                <div class="mt-2">
                  <h5 class="font-medium text-gray-400">
                    {{ component.examples }} example{{
                      component.examples !== 1 ? 's' : ''
                    }}
                  </h5>
                </div>
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'
import { IComponentListItem, componentGroup } from '@@/types'
import { componentsList } from '@@/data/components'

const components = ref<IComponentListItem[]>(componentsList)
const loaded = ref(false)

const switchFloat = ref(true)
const switchCheckbox = ref(true)
const floatSliderValue = ref(12)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 300)
})

const componentGroups = computed(() => {
  return Object.values(componentGroup).reduce((el, next) => {
    return {
      ...el,
      [next]: components.value.filter((comp) => comp.group === next),
    }
  }, {})
})
</script>

<style lang="less">
.button-logo {
  height: 15px;
  margin-right: 10px;
}

.main-title {
  font-size: 60px;
  margin-bottom: 12px;
  line-height: 1;
}

.sub-title {
  font-size: 17px;
  font-weight: normal;
  margin-bottom: 42px;
}

.buttons-group {
  display: flex;
  flex-direction: row;

  & a + a {
    margin-left: 22px;
  }
}

.comps-grid {
  & a {
    @apply text-gray-600;
  }
}

@media only screen and (max-width: 600px) {
  .mainpage-col {
    margin: 120px 30px 30px !important;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
