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
import { defineComponent } from 'vue'
import ItIcon from '../icon'

export default defineComponent({
  name: 'it-message',
  components: {
    'it-icon': ItIcon
  },
  data() {
    return {
      id: null,
      show: false,
      text: '',
      icon: '',
      duration: 4000,
      onClose: () => {},
      top: 6,
      type: 'primary',
      timer: null
    }
  },
  computed: {
    typeIcon() {
      return {
        primary: 'info_outline',
        success: 'done',
        warning: 'error_outline',
        danger: 'clear'
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    destroy() {
      this.$el.parentNode!.removeChild(this.$el)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.show = false
          if (this.onClose) {
            this.onClose()
          }
        }, this.duration)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    }
  }
})
</script>