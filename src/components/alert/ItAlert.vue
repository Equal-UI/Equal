<template>
  <transition name="fade">
    <div v-show="visible" :class="rootClasses">
      <div v-if="showIcon" class="it-alert-iconbox">
        <it-icon :box="iconbox" class="it-alert-icon" :name="iconType" />
      </div>
      <div>
        <p class="it-alert-title">{{ title }}</p>
        <p v-if="!defaultSlot && body" class="it-alert-slot">{{ body }}</p>
        <p v-if="defaultSlot" class="it-alert-slot">
          <slot />
        </p>
      </div>
      <it-icon
        v-if="closable"
        name="clear"
        class="it-alert-close"
        @click="clickCross"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Colors } from '@/models/enums'
import { useCheckSlot } from '@/hooks'
import { ICON_NAME_BY_COLOR, ALLOWED_TYPES } from '@/components/alert/constants'

export default defineComponent({
  name: 'it-alert',
  props: {
    type: {
      type: String,
      default: Colors.PRIMARY,
      validator: (value: Colors) => ALLOWED_TYPES.includes(value),
    },
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    iconbox: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    title: { type: String, default: null },
    body: { type: String, default: null },
  },
  emits: ['on-close'],
  setup(props, { emit, slots }) {
    const defaultSlot = useCheckSlot(slots, 'default')

    const clickCross = () => emit('on-close')
    const iconType = computed(() => ICON_NAME_BY_COLOR[props.type as Colors])
    const rootClasses = computed(() => [
      'it-alert',
      `it-alert--${props.type}`,
      !props.body && !defaultSlot?.value && 'it-alert--small',
    ])

    return {
      defaultSlot,
      clickCross,
      iconType,
      rootClasses,
    }
  },
})
</script>
