<template>
  <div :class="`it-button-group${vertical ? '--vertical' : ''}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItButtonGroup extends Vue {
  @Prop({type: Boolean, default: false}) vertical: boolean
}
</script>