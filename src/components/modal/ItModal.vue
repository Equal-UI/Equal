<template>
  <transition name="fade" @after-leave="terminateSelf">
    <div
      class="it-modal-mask"
      :style="{cursor: closableMask ? 'pointer' : 'default'}"
      v-show="value"
      @click.self="maskClick"
    >
    <focus-lock>
      <transition name="drop-top">
        <div v-show="value" class="it-modal-body">
          <div class="it-modal-header" v-if="title">{{title}}</div>
          <div
            class="it-modal-content"
            v-if="content"
            :style="{'padding-top': title ? '0px' : '16px'}"
          >{{content}}</div>
          <div class="it-modal-footer" v-if="!hideFooter">
            <it-button @click="okClick" :type="type">Accept</it-button>
            <it-button @click="cancelHandler" ref="cancelButton" type="neutral">Cancel</it-button>
          </div>
        </div>
      </transition>
    </focus-lock>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop, Model, Vue } from 'vue-property-decorator'
import FocusLock from 'vue-focus-lock'
import './modal.less'

@Component({
  components: {FocusLock}
})
export default class ItModal extends Vue {
  @Prop() public title?: string
  @Prop() public content?: string
  @Prop({ default: false }) public value?: boolean
  @Prop({ type: Boolean, default: true }) public closableMask?: boolean
  @Prop({ type: Boolean, default: false }) public hideFooter?: boolean
  @Prop({ type: Function, default: null }) public okClick?: () => void
  @Prop({ type: Function, default: null }) public cancelClick?: () => void
  @Prop({ type: Boolean, default: true }) public closeOnEsc?: boolean
  @Prop({ default: 'primary' }) public type?: string

  public activeElement: HTMLElement

  public cancelHandler = this.cancelClick || this.close

  public mounted() {
    this.value = true
    document.addEventListener('keydown', this.escEvt)
    document.body.classList.add('stop-scroll');
    // this.$refs.cancelButton.$el.focus()
  }

  public beforeDestroy() {
    document.body.classList.remove('stop-scroll')
    if (this.activeElement) {
      this.activeElement.focus()
    }
    this.$el.remove()
  }

  public close() {
    this.value = false
  }

  public maskClick() {
    if (this.closableMask) {
      this.close()
    }
  }

  public terminateSelf() {
    this.$destroy()
  }

  public escEvt(e: KeyboardEvent) {
    if (e.keyCode === 27 && this.closeOnEsc) {
      // 27 === Esc
      this.cancelHandler()
    }
  }
}
</script>