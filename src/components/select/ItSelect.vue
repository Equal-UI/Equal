<template>
  <div :class="[
      'it-select'
    ]">
    <span class="it-input-label">{{labelTop}}</span>
    <div
      :tabindex="disabled ? -1 : 0"
      class="it-select-selection"
      :class="[disabled && 'it-select-selection--disabled', show && 'it-select-selection--active']"
      ref="trigger"
      @click="toggleList"
      v-clickoutside="hidePopover"
      @keydown.down.stop.prevent="handleKey('down')"
      @keydown.up.stop.prevent="handleKey('up')"
      @keydown.esc.stop.prevent="hidePopover"
      @keydown.enter.stop.prevent="enterKey"
    >
      <input
        v-if="filterable"
        :readonly="!filterable"
        class="it-select-input"
        type="text"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="search"
      />
      <span class="it-select-placeholder" v-show="!selected && !filterable">{{ placeholder }}</span>
      <span class="it-select-selected" v-if="!filterable && selected">{{ selected }}</span>
      <i
        :class="['material-icons','it-select-arrow', show && 'it-select-arrow--active']"
      >keyboard_arrow_down</i>
    </div>

    <transition name="drop-bottom">
      <div
        class="it-select-dropdown"
        :class="[
          placement ? `it-select-dropdown--${placement}` : 'it-select-dropdown--bottom'
        ]"
        v-show="show"
        ref="popover"
        style="width:100%;"
      >
        <ul class="it-select-list">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Provide, Model } from 'vue-property-decorator'
import clickoutside from '../../directives/clickOutside'
import PopoverMixin from '../../mixins/popover'
import './select.less'

@Component({
  directives: { clickoutside }
})
export default class ItSelect extends PopoverMixin {
  @Prop({ default: 'bottom' }) public placement?: string
  @Prop({ type: Boolean, default: false }) public disabled!: boolean
  @Prop({ type: Boolean, default: false }) public filterable!: boolean
  @Provide() private select = this.selectOption
  @Prop() private labelTop?: string
  @Prop({ default: 'Select' }) private placeholder?: string

  @Model('input') private value?: (string | number)[] | number | string

  private selected: any = this.value
  private search: string | number = ''
  private focusIndex: number = -1

  @Watch('search')
  onSearchInput(newVal) {
    if (!this.show) {
      this.showTooltip()
    }
    this.unfocus()
    this.$children.forEach(i => {
      if (!i.$slots.default[0].text.toLowerCase().includes(newVal.toLowerCase())) {
        i.$data.visible = false
      } else {
        i.$data.visible = true
      }
    })
    
  }

  private handleKey(type: 'up' | 'down') {
    if (this.focusIndex > -1) {
      this.searched[this.focusIndex].$data.focused = false
    }
    if (!this.show || !this.searched.length) {
      return
    }

    if (type === 'up') {
      this.focusIndex =
        this.focusIndex <= 0 ? this.searched.length - 1 : this.focusIndex - 1
      this.searched[this.focusIndex].$data.focused = true
    } else if (type === 'down') {
      this.focusIndex =
        this.focusIndex === this.searched.length - 1 ? 0 : this.focusIndex + 1
      this.searched[this.focusIndex].$data.focused = true
    }
    (this.searched[this.focusIndex].$refs.option as HTMLElement).scrollIntoView(false)
  }

  get searched() {
    return this.$children.filter(i => i.$data.visible === true)
  }

  private toggleList() {
    if (this.disabled) {
      return
    }
    if (this.show) {
      this.hidePopover()
    } else {
      this.unfocus()
      this.showTooltip()
    }
  }

  private unfocus() {
    if (this.focusIndex === -1) {
      return
    }
    this.$children[this.focusIndex].$data.focused = false
    this.focusIndex = -1
  }

  private enterKey() {
    if (!this.show || this.focusIndex === -1) {
      return
    }
    const option = this.searched[this.focusIndex].$props.value
    this.selectOption(option)
    this.hidePopover()
  }

  private selectOption(value: string | number) {
    this.selected = value
    this.search = this.filterable ? value : ''
    this.unfocus()
    this.$emit('input', this.selected)
  }
}
</script>