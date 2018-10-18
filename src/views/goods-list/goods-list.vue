<template>
  <div class="layout-container">
    <div class="filter-bar">
      <span>Sort by:</span>
      <span class="option">Default</span>
      <span class="option">Price</span>
    </div>
    <div class="filter-aside">
      <dl>
        <dt>price:</dt>
        <dd>All</dd>
        <dd>0.00 - 100.00</dd>
        <dd>100.00 - 500.00</dd>
        <dd>500.00 - 1000.00</dd>
        <dd>1000.00 - 2000.00</dd>
      </dl>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
}

</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .filter-bar {
    height: 55px;
    line-height: 55px;
    margin: 60px 0 30px;
    padding: 0 20px;
    background: #fff;
    text-align: right;
  }

  .option {
    margin: 0 10px;
    transition: .3s all ease-in;
  }

  .option:hover {
    color: #ee7a23;
    cursor: pointer;
  }

  .filter-aside {
    width: 230px;
    padding: 0 20px;
    color: #605f5f;
    transition: right .5s ease-out;
  }

  .filter-aside dt {
    margin-bottom: 30px;
    font-family: moderat,sans-serif;
    letter-spacing: .25em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .filter-aside dd {
    display: block;
    line-height: 1.2em;
    margin: 20px 0;
    padding: 5px 0;
    transition: padding-left .3s ease-out;
  }

</style>
