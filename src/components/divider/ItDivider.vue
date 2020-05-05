<template>
  <div
    class="it-divider"
    :class="{
    'it-divider--horizontal': !vertical,
    'it-divider--vertical': vertical
  }"
    role="separator"
  ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItDivider extends Vue {
  @Prop({ type: Boolean, default: false }) private vertical?: boolean
}
</script>

