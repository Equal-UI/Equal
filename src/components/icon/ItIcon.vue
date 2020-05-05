<template>
  <i
    class="material-icons it-icon"
    :class="[outlined && 'material-icons-outlined', box && 'it-icon--box']"
    v-on="$listeners"
    :style="{
    color,
    'background-color': (box && boxColor) ? boxColor : ''
    }"
  >
    <slot>{{name ? name : ''}}</slot>
  </i>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItIcon extends Vue {
  @Prop() private name!: string
  @Prop() private color!: string
  @Prop({ type: Boolean, default: false }) private outlined?: boolean
  @Prop({ type: Boolean, default: false }) private box?: boolean
  @Prop() private boxColor?: string
}
</script>

