<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
      :style="{top: `${top}px`}"
      v-show="show"
      class="it-notification"
      :class="[`it-notification--${type}`]"
    >
      <div class="it-notification-left" :style="{
        'background-image': backgroundImage
      }">
        <it-icon v-if="!image" class="it-notification-icon" :name="icon || typeIcon[type]" />
      </div>
      <div class="it-notification-text-block">
      <span class="it-notification-text-block-title" v-if="title">{{title}}</span>
      <span>{{text}}</span>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './notification.less'

@Component
export default class ItNotification extends Vue {
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
  public title: string
  public icon: string = ''
  public duration: number = 5000
  public onClose: () => void
  public top: number | string = 6
  public type: string = 'primary'
  public image: string = ''
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

  get backgroundImage() {
    return this.image ? `url(${this.image})` : 'none'
  }
}
</script>