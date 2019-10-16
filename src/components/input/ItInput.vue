<template>
<div>
  <span class="it-input-label">{{labelTop}}</span>
  <div
    class="it-input-wrapper"
    :class="[
      status && `it-input-wrapper--${status}`,
      disabled && `it-input-wrapper--disabled`,
      icon && `it-input-wrapper--icon`
    ]"
  >
    <input
      :type="type"
      class="it-input"
      :disabled="disabled"
      :value="value"
      v-on="listeners"
      :placeholder="placeholder"
    />
    <slot name="icon">
      <span class="it-input-icon-wrapper">
      <it-icon class="it-input-icon" v-if="icon" :name="icon" />
      </span>
    </slot>
  </div>
  <span>{{note}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator'
import './input.less'

@Component
export default class ItInput extends Vue {
  @Prop({ default: 'text' }) private type?: string
  @Prop() private placeholder?: string
  @Prop() private labelTop?: string
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop() private status?: string
  @Prop() private icon?: string
  @Prop() private note?: string

  @Model('input') private value!: string | number

  get listeners() {
    return {
      input: (e: Event) => {
        this.$emit('input', (e.target as HTMLInputElement).value)
      }
    }
  }
}
</script>