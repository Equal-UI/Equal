<template>
  <div class="it-demobox">
    <div class="it-demobox-scene">
      <slot></slot>
    </div>
    <div class="it-demobox-props">
      <h3 style="margin-top: 0">Props</h3>
      <slot name="props"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Demobox',
  }
</script>

<style lang="less">
  .it-demobox {
    background: #fff;
    border: 1px solid #d3dae6;
    border-radius: 4px;
    display: flex;
    width: 100%;
    min-height: 200px;

    &-scene {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex: 5;
      display: flex;
      overflow: scroll;
      overflow: hidden;
    }

    &-props {
      display: flex;
      flex-direction: column;
      padding: 12px 16px;
      flex: 2;
      border-left: 1px solid #d3dae6;
    }

    &-props > *:not(.it-divider) {
      margin-bottom: 12px;
    }
  }

  .it-demobox + .table-box {
    margin-top: 30px;
  }

  @media only screen and (max-width: 600px) {
    .it-demobox {
      flex-direction: column;

      &-scene {
        padding: 20px 0;
      }

      &-props {
        border-top: 1px solid #d3dae6;
        border-left: none;
      }
    }
  }
</style>
