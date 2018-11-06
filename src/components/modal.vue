<template>
  <div class="mask" v-show="show">
    <div class="modal clearfix">
      <span class="close-btn" @click="close()">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 9;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 535px;
    min-height: 100px;
    padding: 60px 50px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }

  .modal .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 34px;
    color: #ccc;
  }

  .modal .close-btn:hover {
    color: #aaa;
    cursor: pointer;
  }
</style>
