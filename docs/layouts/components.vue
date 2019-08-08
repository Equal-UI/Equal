<template>
  <div>
    <Header />
    <Sidebar />
    <Row style="display: flex;" justify="center">
      <Col
        style="display: flex; flex-direction: column; margin: 90px 15px;"
        lg="7"
        sm="10"
        xs="11"
      >
      <nuxt />
      </Col>
    </Row>
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
export default class Components extends Vue {}
</script>