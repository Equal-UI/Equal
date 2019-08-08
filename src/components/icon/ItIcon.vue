<template>
  <i class="material-icons it-icon" :class="[outlined && 'material-icons-outlined']" v-on="$listeners" :style="{
    color
    }">
    <slot>{{name ? name : ''}}</slot>
  </i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import './icon.less'

@Component
export default class ItIcon extends Vue {
  @Prop() private name!: string
  @Prop() private color!: string
  @Prop({ type: Boolean, default: false }) private outlined?: boolean
}
</script>

