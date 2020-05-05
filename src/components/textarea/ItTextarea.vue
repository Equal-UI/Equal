<template>
  <textarea @input="onInput" :style="{width, height, resize}" :disabled="disabled" class="it-textarea" :placeholder="placeholder">{{value}}</textarea>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator'

@Component
export default class ItTextarea extends Vue {

  get resize() {
    return this.resizable === true ? 'vertical' : 'none'
  }

  // @Prop({ type: Boolean, default: false }) private pulse?: boolean
  @Prop() public placeholder?: string
  @Prop({default: '280px'}) public width?: string
  @Prop({default: '100px'}) public height?: string
  @Prop({type: Boolean, default: false}) public resizable?: boolean

  @Model('input') public value!: string
  @Prop({ type: Boolean, default: false }) private disabled!: boolean

  public onInput(e: InputEvent) {
    this.$emit('input', (e.target as HTMLInputElement).value)
  }
}
</script>

