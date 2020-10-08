<template>
  <div class="it-card">
    <div v-if="itHasTitle" class="it-card__title">
      <slot name="card-title"></slot>
    </div>
    <it-divider v-if="itHasTitle" nonSpaces></it-divider>
    <div v-if="itHasText" class="it-card__text">
      <slot name="card-text"></slot>
    </div>
    <it-divider v-if="itHasText" nonSpaces></it-divider>
    <div v-if="itHasActions" class="it-card__actions">
      <slot name="card-actions"></slot>
    </div>
    <it-divider v-if="itHasActions" nonSpaces></it-divider>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useCheckSlot } from '../../api/useCheckSlot';

  export default defineComponent({
    name: 'it-card',
    setup(_, { slots }) {
      const itHasTitle = useCheckSlot(slots, 'card-title') !== null
      const itHasText = useCheckSlot(slots, 'card-text') !== null
      const itHasActions = useCheckSlot(slots, 'card-actions') !== null

      return {
        itHasTitle,
        itHasText,
        itHasActions,
      }
    }
  });
</script>

<style src="./card.less" lang="less"></style>
