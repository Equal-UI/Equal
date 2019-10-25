<template>
  <div :class="[
      'it-select'
    ]">
    <span class="it-input-label">{{labelTop}}</span>
    <div
      class="it-select-selection"
      :class="[disabled && 'it-select-selection--disabled', show && 'it-select-selection--active']"
      ref="trigger"
      @click="showList"
      v-clickoutside="hidePopover"
    >
      <span class="it-select-placeholder" v-show="!selected">{{ placeholder }}</span>
      <span class="it-select-selected" v-show="selected">{{ selected }}</span>
      <it-icon
        :class="['it-select-arrow', show && 'it-select-arrow--active']"
        name="keyboard_arrow_down"
      />
    </div>

    <transition name="drop-bottom">
      <div
        class="it-select-dropdown"
        :class="[
          placement ? `it-select-dropdown--${placement}` : 'it-select-dropdown--bottom'
        ]"
        v-show="show"
        ref="popover"
      >
        <ul class="it-select-list">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide, Model } from 'vue-property-decorator'
import clickoutside from '../../directives/clickOutside'
import PopoverMixin from '../../mixins/popover'
import './select.less'

@Component({
  directives: { clickoutside },
  mixins: [PopoverMixin]
})
export default class ItSelect extends Vue {
  @Provide() private select = this.selectOption
  @Prop() private labelTop?: string
  @Prop({ default: 'bottom' }) private placement!: string
  @Prop({ default: 'Select' }) private placeholder?: string
  @Prop({ type: Boolean, default: false }) private disabled?: boolean

  @Model('input') private value?: string
  private selected: any = this.value

  private showList() {
    if (this.disabled) {
      return
    }
    // @ts-ignore
    this.showTooltip()
  }

  private selectOption(value: string | number) {
    this.selected = value
    this.$emit('input', this.selected)
  }
}
</script>