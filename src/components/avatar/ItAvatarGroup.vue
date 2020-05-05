<template>
  <div :class="`it-avatar-group${vertical ? '--vertical' : ''}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItAvatarGroup extends Vue {
  @Prop({type: Boolean, default: false}) vertical: boolean
}
</script>