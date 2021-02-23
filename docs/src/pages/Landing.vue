<template>
  <Row style="display: flex; border-bottom: 1px solid #e2e2e2;" justify="center">
    <Col
      style="display: flex; flex-direction: column; margin: 0 60px 30px 60px;"
      class="mainpage-col"
      lg="12"
      sm="12"
      xs="12"
    >
      <p class="main-title"><img width="150" src="/logo.png" /></p>
      <h4 class="sub-title">
        <b>Equal UI</b> – open-source Vue 3 components system for your next
        project based on TypeScript
      </h4>
      <div class="buttons-group">
        <router-link to="/start">
          <it-button type="primary" size="big" pulse>Get started</it-button>
        </router-link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/quatrochan/Equal"
        >
          <it-button size="big" type="neutral" outlined>Github</it-button>
        </a>
      </div>
    </Col>
  </Row>
</template>

<style lang="less">
  .button-logo {
    height: 15px;
    margin-right: 10px;
  }

  .main-title {
    font-size: 60px;
    margin-bottom: 12px;
    line-height: 1;
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

  @media only screen and (max-width: 600px) {
    .mainpage-col {
      margin: 120px 30px 30px !important;
    }
  }
</style>
