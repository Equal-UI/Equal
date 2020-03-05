<template>
  <li class="it-select-option" v-show="visible" :class="[focused && 'it-select-option--focused']" ref="option" @click="onClick">
    <slot></slot>
    <transition name="fade-right">
      <span v-if="selectedValue === value" class="it-select-option-check"></span>
    </transition>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator'

@Component
export default class ItSelectOption extends Vue {

  get selectedValue() {
    return this.$parent.$props.value
  }

  public focused: boolean = false
  @Inject() private readonly select!: any
  @Prop() private value?: string | number

  public visible: boolean = true

  private onClick() {
    this.select(this.value)
  }
}
</script>