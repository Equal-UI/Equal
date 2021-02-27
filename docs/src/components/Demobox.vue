<template>
  <div class="it-demobox flex border border-solid bg-white rounded">
    <div class="it-demobox-scene flex justify-center items-center flex-wrap">
      <slot></slot>
    </div>
    <div class="it-demobox-props flex flex-col px-4 py-5">
      <h3>Props</h3>
      <slot name="props"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demobox',
}
</script>

<style lang="less">
.it-demobox {
  border-color: #d3dae6;
  min-height: 200px;

  &-scene {
    flex: 5;
  }

  &-props {
    flex: 2;
    border-left: 1px solid #d3dae6;
  }

  &-props > *:not(.it-divider) {
    @apply mb-3;
  }
}

.it-demobox + .table-box {
  margin-top: 30px;
}

@media only screen and (max-width: 600px) {
  .it-demobox {
    @apply flex-col;

    &-scene {
      @apply py-5;
      @apply px-0;
    }

    &-props {
      border-top: 1px solid #d3dae6;
      border-left: none;
    }
  }
}
</style>
