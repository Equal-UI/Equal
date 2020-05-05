<template>
  <div class="it-dropdown" v-on="listeners" v-clickoutside="hidePopover">
    <div class="it-dropdown-trigger" ref="trigger">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div
        class="it-dropdown-slot"
        :class="[placement && `it-dropdown-slot--${placementSide}`]"
        ref="popover"
        v-show="show"
      >
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PopoverMixin from '../../mixins/popover'
import clickoutside from '../../directives/clickOutside'
import { Positions } from '../../models'

@Component({
  directives: { clickoutside }
})
export default class ItDropdown extends PopoverMixin {
  @Prop({
    default: Positions.B,
    validator: (value) =>
      [
        Positions.B,
        Positions.BL,
        Positions.BR,
        Positions.L,
        Positions.LT,
        Positions.LB,
        Positions.R,
        Positions.RT,
        Positions.RB,
        Positions.T,
        Positions.TL,
        Positions.TR
      ].includes(value)
  })
  public placement!: string

  @Prop({ type: Boolean, default: false }) public clickable!: boolean

  private toggleDropdown() {
    if (this.disabled) {
      return
    }
    if (this.show) {
      this.hidePopover()
    } else {
      this.showPopover()
    }
  }

  get listeners() {
    const hvrbl = this.clickable
      ? {
          click: this.toggleDropdown
        }
      : {
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
    return {
      ...hvrbl
    }
  }

  get transition() {
    return `drop-${this.placement}`
  }
  get placementSide() {
    return this.placement.split('-')[0]
  }
}
</script>