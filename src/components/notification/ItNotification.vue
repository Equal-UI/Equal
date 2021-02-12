<template>
  <transition name="fade-bottom" @after-leave="destroy">
    <div
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
      :style="positionPx"
      v-show="show"
      class="it-notification"
      :class="[`it-notification--${type}`]"
    >
      <div
        class="it-notification-left"
        :style="{
          'background-image': backgroundImage,
          'background-color': emoji || image ? '#fdfdfd' : typeColor,
          'border-right': (emoji || image) && '1px solid #dfdfdf',
        }"
      >
        <it-icon
          v-if="!image && !emoji"
          class="it-notification-icon"
          :name="icon || typeIcon"
        />
        <span class="it-notification-emoji" v-if="emoji && !image">{{
          emoji
        }}</span>
      </div>
      <div class="it-notification-text-block">
        <span class="it-notification-text-block-title" v-if="title">{{
          title
        }}</span>
        <span>{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Colors, Positions } from '@/models'
import ItIcon from '@/components/icon'
import { typeIcon } from '@/components/message/model'

const colorTypes: { [key in Colors]?: string } = {
  [Colors.PRIMARY]: '#3051ff',
  [Colors.SUCCESS]: '#07d85b',
  [Colors.DANGER]: '#F93155',
  [Colors.WARNING]: '#ffba00',
}

export default defineComponent({
  name: 'it-notification',
  components: {
    'it-icon': ItIcon,
  },
  data() {
    return {
      id: null,
      show: false,
      text: '',
      title: '',
      icon: '',
      emoji: '',
      image: '',
      duration: 5000,
      position: {} as { [key: string]: string },
      placement: Positions.TR,
      type: Colors.PRIMARY,
      timer: (null as unknown) as NodeJS.Timeout,
      onClose: () => {},
    }
  },
  computed: {
    backgroundImage(): string {
      return this.image ? `url(${this.image})` : ''
    },
    typeColor(): string {
      if (this.emoji) {
        return '#fbfbfb'
      }
      return colorTypes[this.type]!
    },
    positionPx() {
      const posPx: { [key: string]: string } = {}
      for (const key in this.position) {
        if (this.position.hasOwnProperty(key)) {
          posPx[key] = this.position[key] + 'px'
        }
      }
      return posPx
    },
    typeIcon(): string {
      return typeIcon[this.type]!
    },
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
        }, this.duration) as any
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },
  },
})
</script>
