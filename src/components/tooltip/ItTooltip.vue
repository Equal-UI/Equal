<template>
  <div class="it-tooltip">
    <span
      class="it-tooltip__trigger"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      ref="trigger"
    >
      <slot></slot>
    </span>

    <transition :name="transition">
      <div
        class="it-tooltip__popper"
        :class="[
          placement && `it-tooltip--${placement}`
        ]"
        v-if="show"
        ref="popover"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <div class="it-tooltip__content">
          <slot name="content">
            <div>{{content}}</div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import PopoverMixin from '../../mixins/popover'
import './tooltip.less'

@Component
export default class ItTooltip extends PopoverMixin {
  // @Prop() private trigger!: string // TODO: implement triggerEvent
  @Prop() private content?: string
  @Prop({ type: Boolean, default: false }) private permanent?: boolean

  private mouseEnter(e: Event) {
    if (!this.permanent) {
      this.handleMouseEnter(e)
    }
  }

  private mouseLeave() {
    if (!this.permanent) {
      this.handleMouseLeave()
    }
  }
}
</script>
