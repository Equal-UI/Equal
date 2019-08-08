<template>
  <div>
    <h1>Notification</h1>

    <it-button @click="showNotification">Show notification</it-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components'
})
export default class NotificationPage extends Vue {
  showNotification() {
  let mdl = this.$Notification({
      title: 'Please confirm',
      text: 'Confirm your action Confirm your action Confirm your action Confirm your action Confirm your action',
      // image: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    })
  }
}
</script>
