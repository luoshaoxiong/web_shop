<template>
  <div>
    <ul>
      <li v-for="(item, index) in steps" :class="{'active': index <= currentStep}" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'steps',
  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/css/variable.scss";

  ul {
    display: flex;
  }

  li {
    position: relative;
    flex: 1;
    padding: 0 1em 1.25em;
    border-bottom: 2px solid #ccc;
    text-align: center;
    color: #999;
    font-weight: 700;
  }

  li::after {
    content: '';
    position: absolute;
    left: calc(50% - 7px);
    bottom: -7px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ccc;
  }

  li.active {
    border-bottom-color: $color-red;
    color: $color-red;
  }

  li.active::after {
    background-color: $color-red;
  }
</style>
