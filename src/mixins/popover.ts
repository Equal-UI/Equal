import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PopoverMixin extends Vue {
  get transition() {
    return `fade-${this.placement}`
  }

  public show = false

  @Prop({ default: 'top' }) private placement!: string
  // https://github.com/kaorun343/vue-property-decorator/issues/118
  @Prop({ type: Boolean, default: false }) private disabled!: boolean
  @Prop({ type: Boolean, default: false }) private hoverable?: boolean
  private position = {
    top: 0,
    left: 0
  }
  private visionTimer?: number | any

  public handleMouseEnter(e: Event) {
    if (this.disabled) {
      return
    }
    if (
      (e.target as HTMLElement).isSameNode(this.$refs.popover as HTMLElement) &&
      !this.hoverable
    ) {
      return
    }
    this.showTooltip()
    clearTimeout(this.visionTimer)
  }

  public handleMouseLeave() {
    this.visionTimer = setTimeout(() => {
      this.hidePopover()
    }, 200)
  }

  public hidePopover() {
    this.show = false
  }

  public showTooltip() {
    if (!this.show) {
      this.show = true
      this.setPopoverPosition()
    }
  }

  // tslint:disable-next-line: member-ordering
  public setPopoverPosition() {
    this.$nextTick(() => {
      const popover = this.$refs.popover as HTMLElement
      const trigger = this.$refs.trigger as HTMLElement

      if (!popover) {
        return
      }

      switch (this.placement) {
        case 'top':
          this.position.left =
            trigger.offsetLeft -
            popover.offsetWidth / 2 +
            trigger.offsetWidth / 2
          this.position.top = trigger.offsetTop - popover.offsetHeight
          break
        case 'top-left':
          this.position.left = trigger.offsetLeft
          this.position.top = trigger.offsetTop - popover.offsetHeight
          break
        case 'top-right':
          this.position.left =
            trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
          this.position.top = trigger.offsetTop - popover.offsetHeight
          break
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth
          this.position.top =
            trigger.offsetTop +
            trigger.offsetHeight / 2 -
            popover.offsetHeight / 2
          break
        case 'left-top':
          this.position.left = trigger.offsetLeft - popover.offsetWidth
          this.position.top = trigger.offsetTop
          break
        case 'left-bottom':
          this.position.left = trigger.offsetLeft - popover.offsetWidth
          this.position.top =
            trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
          break
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth
          this.position.top =
            trigger.offsetTop +
            trigger.offsetHeight / 2 -
            popover.offsetHeight / 2
          break
        case 'right-top':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth
          this.position.top = trigger.offsetTop
          break
        case 'right-bottom':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth
          this.position.top =
            trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
          break
        case 'bottom':
          this.position.left =
            trigger.offsetLeft -
            popover.offsetWidth / 2 +
            trigger.offsetWidth / 2
          this.position.top = trigger.offsetTop + trigger.offsetHeight
          break
        case 'bottom-left':
          this.position.left = trigger.offsetLeft
          this.position.top = trigger.offsetTop + trigger.offsetHeight
          break
        case 'bottom-right':
          this.position.left =
            trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
          this.position.top = trigger.offsetTop + trigger.offsetHeight
          break
        default:
          this.position.left =
            trigger.offsetLeft -
            popover.offsetWidth / 2 +
            trigger.offsetWidth / 2
          this.position.top = trigger.offsetTop - popover.offsetHeight
          break
      }

      popover.style.top = `${this.position.top}px`
      popover.style.left = `${this.position.left}px`
    })
  }
}
