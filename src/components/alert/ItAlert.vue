<template>
  <transition name="fade">
    <div
      v-show="visible"
      :class="[
        'it-alert',
        `it-alert--${type}`,
        !body && !$slots.default && 'it-alert--small',
      ]"
    >
      <div v-if="showIcon" class="it-alert-iconbox">
        <it-icon
          :box="iconbox"
          class="it-alert-icon"
          :name="typeIcon[`${type}`]"
        />
      </div>
      <div>
        <p class="it-alert-title">{{ title }}</p>
        <p v-if="!$slots.default && body" class="it-alert-slot">{{ body }}</p>
        <p v-if="$slots.default" class="it-alert-slot">
          <slot></slot>
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
  import { defineComponent } from 'vue'
  import { Colors } from '@/models/enums'

  export default defineComponent({
    name: 'it-alert',
    props: {
      type: {
        type: String,
        default: Colors.PRIMARY,
        validator: (value: Colors) =>
          [
            Colors.PRIMARY,
            Colors.SUCCESS,
            Colors.DANGER,
            Colors.WARNING,
          ].includes(value),
      },
      showIcon: { type: Boolean, default: true },
      closable: { type: Boolean, default: false },
      iconbox: { type: Boolean, default: false },
      visible: { type: Boolean, default: true },
      title: { type: String },
      body: { type: String },
    },
    computed: {
      typeIcon(): {
        [key: string]: string
      } {
        return {
          primary: 'info_outline',
          success: 'done',
          warning: 'error_outline',
          danger: 'clear',
        }
      },
    },
    methods: {
      clickCross() {
        this.$emit('on-close')
      },
    },
  })
</script>
