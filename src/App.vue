<template>
  <div id="app">
    <it-button @click="showMessage">asdasd</it-button>
    <br />
    <br />
    <it-button type="neutral">Neutral</it-button>
    <br />
    <br />
    <it-dropdown placement="bottom-left">
      Select
      <it-dropdown-menu slot="menu">
        <it-dropdown-item>Hello</it-dropdown-item>
        <it-dropdown-item>There</it-dropdown-item>
        <it-dropdown-item icon="cloud">Buddy</it-dropdown-item>
      </it-dropdown-menu>
    </it-dropdown>
    <br />
    <br />
    <it-slider v-model="myprogress" />
    <br />
    <br />
    <it-tag type="primary">Tag one</it-tag>&nbsp;<it-tag type="danger">Tag two</it-tag>&nbsp;<it-tag type="success">Tag three</it-tag>
        <br />
    <br />
    <it-number-input :step="0.7" />
    <br />
    <br />
    <it-checkbox v-model="custombox" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private disabled: boolean = false
  private outlined: boolean = false
  private type: string = 'primary'
  private custombox: boolean = false
  private inputType = 'text'
  private inputText = ''
  private myselect = ''
  private myprogress = 35
  private alertvisible = true
  private modalka = false

  private togglePass() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password'
  }

  private showMessage() {
    // this.$Message({
    //   text: 'Please check your Email for confirmation',
    //   type: 'danger'
    // })
  }

  private increaseProgress() {
    if (this.myprogress < 100) {
      this.myprogress += 10
    }
  }

  private decreaseProgress() {
    if (this.myprogress > 0) {
      this.myprogress -= 10
    }
  }

  private closeAlert() {
    this.alertvisible = false
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    margin-top: 60px;
  }
</style>
