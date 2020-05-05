<template>
  <div>
    <span v-if="labelTop" class="it-input-label">{{labelTop}}</span>
    <div class="it-input-prefix-wrapper">
      <div v-if="prefix" class="it-input-prefix">{{prefix}}</div>
      <div
        class="it-input-wrapper"
        :class="[
      status && `it-input-wrapper--${status}`,
      disabled && `it-input-wrapper--disabled`
    ]"
      >
        <span v-if="prefixIcon" class="it-input-icon-wrapper">
          <it-icon class="it-input-icon" :name="prefixIcon" />
        </span>
        <input
          :type="type"
          class="it-input"
          :disabled="disabled"
          :value="value"
          v-on="listeners"
          v-bind="$attrs"
          :placeholder="placeholder"
        />
        <span v-if="suffixIcon" class="it-input-icon-wrapper">
          <it-icon class="it-input-icon" :name="suffixIcon" />
        </span>
      </div>
      <div v-if="suffix" class="it-input-suffix">{{suffix}}</div>
    </div>
    <transition name="fade-bottom">
      <span
        class="it-input-message"
        :class="[
        status && `it-input-message--${status}`,
        disabled && `it-input-message--disabled`
      ]"
        v-if="message"
      >{{message}}</span>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator'
import { Colors } from '../../models'

@Component({
  inheritAttrs: false
})
export default class ItInput extends Vue {
  @Prop({ default: 'text' }) private type?: string
  @Prop() private placeholder?: string
  @Prop() private labelTop?: string
  @Prop() private prefix?: string
  @Prop() private suffix?: string
  @Prop({ type: Boolean, default: false }) private disabled?: boolean
  @Prop({
    validator: (value) =>
      [Colors.SUCCESS, Colors.WARNING, Colors.DANGER].includes(value)
  })
  private status?: string
  @Prop() private suffixIcon?: string
  @Prop() private prefixIcon?: string
  @Prop() private message?: string

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