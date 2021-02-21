<template>
  <div class="page">
    <Sidebar />
    <Row style="display: flex" justify="center">
      <Col
        style="display: flex; flex-direction: column; margin: 50px 15px"
        lg="9"
        sm="10"
        xs="11"
      >
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Sidebar from '../components/Sidebar.vue'

  export default defineComponent({
    name: 'Home',
    components: { Sidebar },
  })
</script>

<style lang="less">
  .page {
    padding-left: 14rem;
    left: 0;
  }

  @media only screen and (max-width: 900px) {
    .page {
      padding-left: 0;
    }
  }
</style>
