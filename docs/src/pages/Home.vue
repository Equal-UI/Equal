<template>
  <div>
    <Sidebar />
    <div class="flex pl-0 lg:pl-60 pt-20 flex-col flex-1">
      <router-view />
    </div>
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
