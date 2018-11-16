<template>
  <nav>
    <div class="layout-container">
      <div class="nav-container">
        <a class="home" href="/">Home</a>
        <span class="split">/</span>
        <span class="current-path">
          <slot></slot>
        </span>
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
  @import "../assets/css/variable";

  nav {
    height: $breadcrumb;
    line-height: $breadcrumb;
    background-color: #f0f0f0;

    .home {
      color: #aaa;

      &:hover {
        color: $color-red;
      }
    }

    .split {
      margin: 0 4px;
      color: #aaa;
    }

    .current-path {
      color: $color-red;
    }
  }
</style>
