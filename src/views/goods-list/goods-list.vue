<template>
  <div class="layout-container clearfix">
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
    <div class="goods-list">
      <ul class="clearfix">
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
        <li>
          <img src="/static/images/zipai.jpg">
          <dl>
            <dt>自拍杆</dt>
            <dd>￥39.00</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
      </ul>
    </div>
    <modal :show="modalShow" @close="closeModal()">
      <div class="modal-message">加入购物车成功!</div>
      <div class="clearfix">
        <button class="btn btn-plain continue-btn" @close="closeModal()">继续购物</button>
        <button class="btn btn-main see-btn" @click="seeCart()">查看购物车</button>
      </div>
    </modal>
  </div>
</template>

<script type="text/ecmascript-6">
import modal from '@/components/modal';

export default {
  components: {modal},
  data () {
    return {
      modalShow: false
    }
  },
  methods: {
    addCart () {
      this.modalShow = true;
    },
    closeModal () {
      this.modalShow = false;
    },
    seeCart () {
      this.$router.push({path: '/cart'});
    }
  }
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
    float: left;
    width: 230px;
    margin-right: 20px;
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

  .filter-aside dd:hover {
    border-left: 2px solid #ee7a23;
    padding-left: 15px;
    cursor: pointer;
  }

  .goods-list {
    float: left;
    width: calc(100% - 250px);
  }

  .goods-list ul li {
    float: left;
    width: 24%;
    margin-right: 1.3333%;
    margin-bottom: 20px;
    background: #fff;
    border: 2px solid #e9e9e9;
    transition: all .5s ease-out;
  }

  .goods-list ul li:hover {
    border-color: #ee7a23;
    transform: translateY(-5px);
    box-shadow: 0 0 10px #999;
  }

  .goods-list ul li:nth-child(4n) {
    margin-right: 0;
  }

  .goods-list ul li img {
    width: 100%;
  }

  .goods-list ul li dl {
    padding: 20px 10px 0 10px;
  }

  .goods-list ul li dt {
    height: 4em;
    line-height: 1.25em;
    padding-bottom: 10px;
    font-family: moderat,sans-serif;
    font-weight: 700;
    overflow: hidden;
  }

  .goods-list ul li dd {
    margin-bottom: 10px;
    line-height: 30px;
    color: #d1434a;
    font-size: 1.25em;
  }

  .modal-message {
    min-height: 5.65em;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
  }

  .continue-btn,
  .see-btn {
    float: left;
    width: 45%;
    margin: 0 2.5%;
  }
</style>
