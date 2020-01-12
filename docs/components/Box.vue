<template>
  <div class="it-box">
    <h2 class="it-box-title">{{title}}</h2>
    <slot name="description"></slot>
    <div class="it-box-scene">
      <slot></slot>
    </div>

    <div class="it-box-code" :style="{
      'max-height': expandHeight
    }">
      <it-tooltip ref="tooltip" :content="copyText" class="it-box-code-copy" placement="left">
        <it-button @click="clickCopy" icon="file_copy" />
      </it-tooltip>
      <prism language="html">{{code}}</prism>
    </div>
    <it-button
      style="border: none; border-radius: 0px;"
      icon="code"
      type="neutral"
      @click="toggleExpand"
    >{{expanded ? 'Hide code' : 'Show code'}}</it-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PopoverMixin from '../../src/mixins/popover'

@Component
export default class Box extends Vue {
  @Prop() code?: string
  @Prop() title?: string

  expandHeight: string = '0px'
  copyText: string = 'Copy to clipboard'
  expanded: boolean = false

  toggleExpand() {
    this.expandHeight = this.expandHeight === '0px' ? '1000px' : '0px'
    this.expanded = !this.expanded
  }

  async clickCopy() {
    this.copyText = 'Copied!'
    await navigator.clipboard.writeText(this.code)
    ;(this.$refs.tooltip as PopoverMixin).setPopoverPosition()
  }
}
</script>

<style lang="less">
  .it-box {
    background: #ffffff;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    display: flex;
    width: 100%;
    min-height: 150px;
    flex-direction: column;
    overflow: hidden;
    margin: 40px 0px;
    box-sizing: border-box;

    &-title {
      padding: 17px 24px;
      line-height: 1;
    }

    &-scene {
      width: 100%;
      padding: 48px 25px;
      flex-wrap: wrap;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      & > * {
        margin-left: 15px;
      }
    }

    &-code {
      border-bottom: 1px solid #dfdfdf;
      border-top: 1px solid #dfdfdf;
      transition: all 0.4s;
      width: 100%;
      position: relative;
      overflow:auto;
      // height: 0;

      &-copy {
        position: absolute !important;
        right: 10px;
        top: 10px;
      }
    }
  }
</style>