<template>
  <li class="it-select-option" @click="onClick">
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
  @Inject() private readonly select!: any
  @Prop() private value?: string | number

  private onClick() {
    this.select(this.value)
  }

  get selectedValue() {
    return this.$parent.$props.value
  }
}
</script>