<template>
  <div>
    <h1>Getting started</h1>
    <h5>Coming soon...</h5>

  </div>
</template>

<script lang="ts">
import Demobox from '~/components/Demobox.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components',
  components: { Demobox }
})
export default class StartPage extends Vue {
  alertVisible = true
  alertTitle = 'Alert title'
  alertBody = 'We think we know you'
  alertShowIcon = true
  alertClosable = false
  alertType = 'primary'
  alertTypes = ['primary', 'success', 'danger', 'warning', 'black']
}
</script>
