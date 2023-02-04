<template>
  <div
    class="my-10 flex flex-col overflow-x-auto rounded border bg-white last:mb-0 dark:border-gray-600 dark:bg-zinc-800"
  >
    <h2 class="bg-white py-4 px-6 leading-none dark:bg-zinc-800">
      Props
      <it-tag filled v-if="tagName">{{ tagName }}</it-tag>
    </h2>
    <table v-if="dataSheet && dataSheet.length" class="table">
      <thead class="bg-slate-50 dark:bg-zinc-800">
        <tr class="dark:border-t-gray-600 dark:border-b-gray-600">
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Accepted values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in augmentedDataSheet"
          :key="item.property"
          class="dark:border-t-gray-600 dark:border-b-gray-600"
        >
          <td v-for="(col, name) in item">
            <div
              v-if="
                !['description', 'property'].includes(name) &&
                Array.isArray(col)
              "
              class="flex gap-1"
            >
              <it-tag filled variant="primary" v-for="i in col" :key="i">
                {{ i }}
              </it-tag>
            </div>
            <span v-else>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-else class="p-4"><p class="text-center">No props</p></div>

    <h2
      v-if="slotSheet"
      class="bg-white py-4 px-6 leading-none dark:bg-zinc-800"
    >
      Slots
    </h2>
    <table v-if="slotSheet" class="table">
      <thead class="bg-slate-50 dark:bg-zinc-800">
        <tr class="dark:border-t-gray-600 dark:border-b-gray-600">
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in slotSheet"
          :key="item.property"
          class="dark:border-t-gray-600 dark:border-b-gray-600"
        >
          <td v-for="col in item">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2
      v-if="methodSheet"
      class="bg-white py-4 px-6 leading-none dark:bg-neutral-800"
    >
      Methods
    </h2>
    <table v-if="methodSheet" class="table">
      <thead class="bg-slate-50 dark:bg-neutral-700">
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in methodSheet" :key="item.property">
          <td v-for="col in item">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <h2
      v-if="eventSheet"
      class="bg-white py-4 px-6 leading-none dark:bg-zinc-800"
    >
      Events
    </h2>
    <table v-if="eventSheet" class="table">
      <thead class="bg-slate-50 dark:bg-zinc-800">
        <tr class="dark:border-t-gray-600 dark:border-b-gray-600">
          <th>Event</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in eventSheet"
          :key="item.property"
          class="dark:border-t-gray-600 dark:border-b-gray-600"
        >
          <td v-for="(col, name) in item">
            <span>{{ col }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tagName: String,
    dataSheet: Array,
    eventSheet: Array,
    methodSheet: Array,
    slotSheet: Array,
  },
  setup(props) {
    const augmentedDataSheet = ref([
      {
        property: 'base',
        type: ['Object'],
        default: '-',
        values: [],
        description: 'Inline Base of the component',
      },
      {
        property: 'variants',
        type: ['Object'],
        default: '-',
        values: [],
        description: 'Inline Variants of the component',
      },
      {
        property: 'variant',
        type: ['String', 'Array<string>'],
        default: 'default',
        values: [],
        description: 'Variant of the component',
      },
      ...(props.dataSheet || []),
    ])
    return { augmentedDataSheet }
  },
})
</script>

<style lang="less">
.table {
  & th,
  td {
    line-height: 1;
    text-align: left;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 500;
  }

  & td {
    font-size: 13px;
    font-weight: normal;

    & > .it-tag {
      font-size: 12px !important;
      font-weight: normal;
    }

    & .it-tag + .it-tag {
      margin-left: 4px;
    }
  }

  & tr {
    border-top: 1px solid #d3dae6;
    border-bottom: 1px solid #d3dae6;
  }

  tr:last-child {
    border-bottom: none;
  }
}
</style>
