<template>
  <header>
    <div class="layout-container">
      <div class="logo-container">
        <img class="logo" src="../../assets/logo.png">
      </div>
      <div class="menu-container">
        <span class="user-msg">Login</span>
        <span class="iconfont icon-cart"></span>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss" scope>
  @import "../../assets/css/variable";

  header {
    background-color: #fff;
    height: $header-height;
    line-height: $header-height;
  }

  .logo-container {
    float: left;
    height: $header-height;
  }

  .logo {
    height: $header-height;
    padding: 16px;
  }

  .menu-container {
    float: right;
    height: $header-height;
  }

  .user-msg {
    font-size: 16px;
  }

  .icon-cart {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
