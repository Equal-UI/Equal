<template>
  <div class="it-box">
    <h2 class="it-box-title">{{ title }}</h2>
    <slot name="description"></slot>
    <div class="it-box-scene">
      <slot></slot>
    </div>

    <div
      class="it-box-code"
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
        <it-button icon="file_copy" @click="clickCopy" />
      </it-tooltip>
      <prism
        style="border-top: 1px solid #d3dae6"
        language="html"
        :code="code"
      ></prism>
    </div>
    <it-button
      style="border: none; border-radius: 0"
      icon="code"
      type="neutral"
      @click="toggleExpand"
      >{{ expanded ? 'Hide code' : 'Show code' }}</it-button
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
    background: #fff;
    border: 1px solid #d3dae6;
    border-radius: 4px;
    display: flex;
    width: 100%;
    min-height: 150px;
    flex-direction: column;
    overflow: hidden;
    margin: 40px 0;
    box-sizing: border-box;

    &-title {
      padding: 16px 24px;
      line-height: 1;

      .it-tag {
        margin-left: 6px;
      }
    }

    &-scene {
      width: 100%;
      padding: 40px 24px;
      flex-wrap: wrap;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      & > * + * {
        margin-left: 16px;
      }

      & > * {
        margin-bottom: 16px;
      }
    }

    &-code {
      border-bottom: 1px solid #d3dae6;
      transition: max-height 0.4s;
      width: 100%;
      position: relative;
      overflow: auto;
      // height: 0;

      &-copy {
        position: absolute !important;
        right: 10px;
        top: 10px;
      }
    }
  }
</style>
