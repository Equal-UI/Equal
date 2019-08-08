<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
      :style="{top: `${top}px`}"
      v-show="show"
      class="it-message"
      :class="[`it-message--${type}`]"
    >
      <it-icon class="it-message-icon" :name="icon || typeIcon[type]" />
      <span class="it-message-text">{{text}}</span>
    </div>
  </transition>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './message.less'

@Component
export default class ItMessage extends Vue {
  get typeIcon() {
    return {
      primary: 'info_outline',
      success: 'done',
      warning: 'error_outline',
      danger: 'clear'
    }
  }
  public id: number
  public show: boolean = false
  public text: string = ''
  public icon: string = ''
  public duration: number = 4000
  public onClose: () => void
  public top: number | string = 6
  public type: string = 'primary'
  public timer: number | any

  public destroy() {
    this.$destroy()
    this.$el.parentNode!.removeChild(this.$el)
  }

  public mounted() {
    this.startTimer()
  }

  public startTimer() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.show = false
        if (this.onClose && typeof this.onClose === 'function') {
          this.onClose()
        }
      }, this.duration)
    }
  }

  public clearTimer() {
    clearTimeout(this.timer)
  }
}
</script>