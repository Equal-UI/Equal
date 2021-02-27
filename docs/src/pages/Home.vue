<template>
  <div class="page">
    <Sidebar />
    <Row class="flex" justify="center">
      <Col class="flex flex-col my-12" lg="9" sm="10" xs="11">
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '../components/Sidebar.vue'

export default defineComponent({
  name: 'home',
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
    padding-left: 0px;
  }
}
</style>
