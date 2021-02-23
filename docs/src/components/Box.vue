<template>
  <div
    class="it-box bg-white rounded flex flex-col overflow-hidden my-10 box-border w-full"
  >
    <h2 class="it-box-title py-4 px-6 leading-none">{{ title }}</h2>
    <slot name="description"></slot>
    <div class="it-box-scene w-full py-10 px-6 flex-wrap leading-none flex justify-center items-center box-border">
      <slot></slot>
    </div>

    <div
      class="it-box-code w-full relative overflow-auto"
      :style="{
        'max-height': expandHeight,
      }"
    >
      <it-tooltip
        ref="tooltip"
        :content="copyText"
        class="it-box-code-copy"
        placement="left"
      >
        <it-button @click="clickCopy" icon="file_copy" />
      </it-tooltip>
      <prism
        style="border-top: 1px solid #d3dae6"
        language="html"
        :code="code"
      ></prism>
    </div>
    <it-button
      style="border: none; border-radius: 0px"
      icon="code"
      type="neutral"
      @click="toggleExpand"
      >{{ expanded ? "Hide code" : "Show code" }}</it-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Box',
  props: {
    code: String,
    title: String,
  },
  data: () => ({
    expandHeight: '0px',
    copyText: 'Copy to clipboard',
    expanded: false,
  }),
  methods: {
    toggleExpand() {
      this.expandHeight = this.expandHeight === '0px' ? '1000px' : '0px'
      this.expanded = !this.expanded
    },

    async clickCopy() {
      this.copyText = 'Copied!'
      await navigator.clipboard.writeText(this.code)
      this.$refs.tooltip.setPopoverPosition()
    },
  },
})
</script>

<style lang="less">
.it-box {
  border: 1px solid #d3dae6;
  min-height: 150px;

  &-title {
    .it-tag {
      @apply ml-2;
    }
  }

  &-scene {
    & > * + * {
      @apply ml-4;
    }

    & > * {
      @apply mb-4;
    }
  }

  &-code {
    border-bottom: 1px solid #d3dae6;
    transition: max-height 0.4s;

    &-copy {
      position: absolute !important;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
