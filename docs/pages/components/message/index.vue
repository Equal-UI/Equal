<template>
  <div>
    <h1>Message</h1>

    <Box :code="messagesCode" title="Message types">
      <it-button @click="showMessage">Primary message</it-button>
      <it-button @click="showMessage('success')" type="success">Success message</it-button>
      <it-button @click="showMessage('danger')" type="danger">Danger message</it-button>
      <it-button @click="showMessage('warning')" type="warning">Warning message</it-button>
    </Box>

    <Box :code="durationCode" title="Duration">
      <it-button @click="$Message({duration: 4000, text: 'I have 4000ms left'})">4000 ms</it-button>
    </Box>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Box from '~/components/Box.vue'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Box }
})
export default class MessagePage extends Vue {
  messagesCode = `<it-button @click="showMessage()">Primary message</it-button>
<it-button @click="showMessage('Success')" type="success">Success message</it-button>
<it-button @click="showMessage('Danger')" type="danger">Danger message</it-button>
<it-button @click="showMessage('Warning')" type="warning">Warning message</it-button>

<script>
export default: {
  methods: {
    showMessage(type) {
      switch (type) {
        case 'success':
          this.$Message.success({ text: 'Success message!' })
          break
        case 'danger':
          this.$Message.danger({ text: 'Danger message!' })
          break
        case 'warning':
          this.$Message.warning({ text: 'Success message!' })
          break
        default:
          this.$Message({ text: 'Primary message!' })
          break
      }
    }
  }
}
<\/script>`

  durationCode = `

<it-button @click="$Message({duration: 4000, text: 'I have 4000ms left'})">4000 ms</it-button>`

  showMessage(type) {
    switch (type) {
      case 'success':
        this.$Message.success({ text: 'Success message!' })
        break
      case 'danger':
        this.$Message.danger({ text: 'Danger message!' })
        break
      case 'warning':
        this.$Message.warning({ text: 'Success message!' })
        break
      default:
        this.$Message({ text: 'Primary message!' })
        break
    }
  }
}
</script>
