<template>
  <ul class="it-dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ItDropdownMenu extends Vue {

}
</script>