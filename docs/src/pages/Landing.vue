<template>
  <Row class="flex" justify="center">
    <Col class="mainpage-col flex flex-col mx-14 mb-8" lg="12" sm="12" xs="12">
      <p class="main-title"><img width="150" src="/logo.png" /></p>
      <h4 class="sub-title">
        <b>Equal UI</b> – open-source Vue 3 components system for your next
        project based on TypeScript
      </h4>
      <div class="buttons-group">
        <router-link to="/start">
          <it-button type="primary" size="big" pulse>Get started</it-button>
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
          <div class="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-6 comps-grid">
            <template v-for="(component, i) in item" :key="i">
              <router-link :to="component.route">
                <div class="card-up p-4">
                  <div class="flex">
                    <it-icon
                      :outlined="component.icon_outlined"
                      style="font-size: 24px"
                      :name="component.icon"
                    />
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
    </Col>
  </Row>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { IComponentListItem, componentGroup } from '../types'
import { componentsList } from '../data/components'

export default defineComponent({
  setup() {
    const components = ref<IComponentListItem[]>(componentsList)

    const componentGroups = computed(() => {
      return Object.values(componentGroup).reduce((el, next) => {
        return {
          ...el,
          [next]: components.value.filter((comp) => comp.group === next),
        }
      }, {})
    })

    return { components, componentGroups }
  },
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
</style>
