<template>
  <nav>
    <div class="layout-container">
      <div class="nav-container">
        <a href="/">Home</a>
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'breadcrumb'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/css/variable";

  nav {
    height: $breadcrumb;
    line-height: $breadcrumb;
  }

  .nav-container {
  }
</style>
