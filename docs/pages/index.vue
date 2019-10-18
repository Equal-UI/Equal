<template>
  <div>
    <Row style="display: flex; border-bottom: 1px solid #e2e2e2;" justify="center">
      <Col
        style="display: flex; flex-direction: column; margin: 130px 60px 30px 60px;"
        lg="12"
        sm="12"
        xs="12"
      >
        <h1 class="main-title">Equal UI</h1>
        <h4 class="sub-title">Equal – open-source Vue components system for your next project</h4>
        <div class="buttons-group">
          <nuxt-link to="/start">
            <it-button size="big">Get started</it-button>
          </nuxt-link>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/quatrochan/Equal">
            <it-button size="big" outlined>Github</it-button>
          </a>
        </div>
      </Col>
    </Row>
    <Row style="display: flex;" justify="center">
      <Col
        style="display: flex; flex-direction: column; margin: 130px 15px;"
        lg="12"
        sm="12"
        xs="12"
      >
        <!-- Test -->
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Col from '~/components/Col.vue'
import Row from '~/components/Row.vue'

@Component({
  components: {
    Col,
    Row
  }
})
export default class Index extends Vue {}
</script>

<style lang="less">
  .main-title {
    font-size: 60px;
    margin-bottom: 16px;
  }

  .sub-title {
    font-size: 17px;
    font-weight: normal;
    margin-bottom: 42px;
  }

  .buttons-group {
    display: flex;
    flex-direction: row;
    & a + a {
      margin-left: 22px;
    }
  }
</style>