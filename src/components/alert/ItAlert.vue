<template>
  <transition name="fade">
    <div
      v-show="visible"
      :class="[
        'it-alert',
        `it-alert--${type}`,
        (!body && !$slots.default) && 'it-alert--small'
      ]"
    >
      <div v-if="showIcon" class="it-alert-iconbox">
        <it-icon class="it-alert-icon" :name="typeIcon[`${type}`]" />
      </div>
      <div>
        <p class="it-alert-title">{{title}}</p>
        <p v-if="!$slots.default && body" class="it-alert-body">{{body}}</p>
        <p v-if="$slots.default" class="it-alert-slot">
          <slot></slot>
        </p>
      </div>
      <it-icon v-if="closable" @click="clickCross" name="clear" class="it-alert-close" />
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Colors } from '@/models/Colors'
import './alert.less'

@Component
export default class ItAlert extends Vue {
  @Prop({
    default: Colors.PRIMARY,
    validator: (value) => [
      Colors.PRIMARY,
      Colors.SUCCESS,
      Colors.DANGER,
      Colors.WARNING
    ].includes(value)
  })
  private type?: string
  @Prop({ type: Boolean, default: true }) private showIcon?: boolean
  @Prop({ type: Boolean, default: false }) private closable?: boolean
  @Prop({ type: Boolean, default: true }) private visible!: boolean
  @Prop() private title!: string
  @Prop() private body?: string

  get typeIcon() {
    return {
      primary: 'info_outline',
      success: 'done',
      warning: 'error_outline',
      danger: 'clear'
    }
  }

  private clickCross() {
    this.$emit('on-close')
  }
}
</script>