<template>
  <div class="page">
    <Sidebar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Sidebar from '~/components/Sidebar.vue'

import Col from '~/components/Col.vue'
import Row from '~/components/Row.vue'


@Component({
  components: { Sidebar, Col, Row }
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