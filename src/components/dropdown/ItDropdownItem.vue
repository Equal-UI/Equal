<template>
  <li
    class="it-dropdown-item"
    :class="[
      disabled && 'it-dropdown-item--disabled',
      divided && 'it-dropdown-item--divided'
    ]"
  >
    <it-icon class="it-dropdown-icon" v-if="icon" :name="icon"></it-icon>
    <span class="it-dropdown-text">
      <slot></slot>
    </span>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItDropdownItem extends Vue {
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop({ type: Boolean, default: false }) private divided?: boolean
  @Prop() private icon?: 'string'
}
</script>