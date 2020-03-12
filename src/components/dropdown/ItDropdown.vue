<template>
  <div class="it-dropdown" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
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
import './dropdown.less'
import { Positions } from '../../models/Positions'

@Component({
  mixins: [PopoverMixin]
})
export default class ItDropdown extends Vue {
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
  private placement!: string
  get transition() {
    return `drop-${this.placement}`
  }
  get placementSide() {
    return this.placement.split('-')[0]
  }
}
</script>