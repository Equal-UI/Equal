<template>
  <div>
    <h1>Modal</h1>

    <it-button @click="showModal">Show modal</it-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  // @ts-ignore
  layout: 'components'
})
export default class ModalPage extends Vue {
  showModal() {
  let mdl = this.$Modal.warning({
      title: 'Please confirm',
      content: 'Confirm your action',
      // cancelClick: () => {
      //   console.log(123);
        
      // },
      okClick: () => {
        console.log(123)
        mdl.close()
      }
    })
  }
}
</script>
