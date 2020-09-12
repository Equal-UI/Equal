<template>
  <li class="it-select-option" v-show="visible" :class="[focused && 'it-select-option--focused']" ref="option" @click="onClick">
    <slot></slot>
    <transition name="fade-right">
      <span v-if="selected === value" class="it-select-option-check"></span>
    </transition>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, inject, ref } from 'vue'


export default defineComponent({
  name: 'it-select-option',
  props: {
    value: {type: [String, Number]}
  },
  setup(props) {
    const focused = ref(false)
    const visible = ref(true)

    const selected = inject('selected')
    const select = inject('select')

    function onClick() {
      select(props.value)
    }

    return {
      focused, visible, selected, onClick
    }
  }
})


  // private onClick() {
  //   this.select(this.value)
  // }

</script>