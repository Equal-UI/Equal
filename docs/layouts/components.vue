<template>
  <div>
    <Sidebar />
    <Row style="display: flex;" justify="center">
      <Col
        style="display: flex; flex-direction: column; margin: 50px 15px;"
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
import Sidebar from '~/components/Sidebar.vue'

import Col from '~/components/Col.vue'
import Row from '~/components/Row.vue'


@Component({
  components: {Sidebar, Col, Row }
})
export default class Components extends Vue {}
</script>