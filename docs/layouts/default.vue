<template>
  <div class="page">
    <Header />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'

import Col from '~/components/Col.vue'
import Row from '~/components/Row.vue'


@Component({
  components: { Header, Sidebar, Col, Row }
})
export default class Default extends Vue {}
</script>


<style lang="less">
.page {
  padding-left: 14rem;
  left: 0;
}

@media only screen and (max-width: 900px) {
  .page {
    padding-left: 0px;
  }
}
</style>