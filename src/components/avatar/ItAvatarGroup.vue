<script lang="ts">
  import { VNode, defineComponent, provide, computed, h } from 'vue'

  export default defineComponent({
    name: 'it-avatar-group',
    props: {
      vertical: { type: Boolean },
      square: { type: Boolean },
      max: { type: Number },
      size: { type: String, default: '40px' },
    },
    setup(props, { slots }) {
      provide('square', props.square)
      provide('size', props.size)

      const avatars = computed(() => {
        if (slots.default) {
          return slots.default().filter((i) => i.type)
        }
        return []
      })

      return { avatars }
    },
    render() {
      return h(
        'div',
        {
          class: `it-avatar-group${this.vertical ? '--vertical' : ''}`,
        },
        [
          this.avatars.slice(0, this.max || this.avatars.length),
          this.max && this.avatars.length > this.max
            ? h(
                'span',
                {
                  class: ['it-avatar-max'],
                  style: {
                    // width: this.size,
                    // height: this.size,
                    lineHeight: this.size,
                  },
                },
                [h('span', `+${this.avatars.length - this.max}`)],
              )
            : null,
        ],
      )
    },
  })
</script>
