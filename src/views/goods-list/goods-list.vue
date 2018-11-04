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
        <dd v-for="(item, index) in priceRange" :key="index">
          <template v-if="item.end === Number.MAX_VALUE">All</template>
          <template v-else>{{item.start | formatCurrency('￥', 2)}} - {{item.end | formatCurrency('￥', 2)}}</template>
        </dd>
      </dl>
    </div>
    <div class="goods-list">
      <ul class="clearfix">
        <li v-for="(item, index) in goodsList" :key="index">
          <img v-lazy="'/static/images/' + item.productImage">
          <dl>
            <dt>{{item.productName}}</dt>
            <dd>￥{{item.salePrice}}</dd>
            <dd><button class="btn btn-plain" @click="addCart()">加入购物车</button></dd>
          </dl>
        </li>
      </ul>
      <div
        class="loading"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="20">
        <img src="../../assets/loading/loading-spinning-bubbles.svg" v-show="loading">
      </div>
    </div>
    <modal :show="successMdShow" @close="closeSuccessMd()">
      <div class="modal-message">加入购物车成功!</div>
      <div class="clearfix">
        <button class="btn btn-plain continue-btn" @close="closeSuccessMd()">继续购物</button>
        <button class="btn btn-main see-btn" @click="seeCart()">查看购物车</button>
      </div>
    </modal>
    <modal :show="noAccessMdShow" @close="closeNoAccessMd()">
      <div class="modal-message">您当前尚未登录!</div>
      <button class="btn btn-plain hide-btn" @click="closeNoAccessMd()">关闭</button>
    </modal>
  </div>
</template>

<script type="text/ecmascript-6">
import modal from '@/components/modal';
import formatCurrency from '@/util/format-currency';

export default {
  components: {modal},
  data () {
    return {
      successMdShow: false,
      noAccessMdShow: false,
      goodsList: [],
      priceRange: [
        {
          start: 0,
          end: Number.MAX_VALUE
        },
        {
          start: 0,
          end: 100
        },
        {
          start: 100,
          end: 500
        },
        {
          start: 500,
          end: 1000
        },
        {
          start: 1000,
          end: 2000
        }
      ],
      busy: false,
      loading: false
    }
  },
  mounted () {
    this.getGoodsList();
  },
  methods: {
    getGoodsList () {
      // this.loading = true;
      // this.busy = true;
      // this.axios.get('/goods/list')
      //   .then(res => {
      //     this.goodsList = res.data.result.list;
      //     this.loading = false;
      //     this.busy = false;
      //   })
    },
    addCart () {
      // this.successMdShow = true;
      this.noAccessMdShow = true;
    },
    closeSuccessMd () {
      this.successMdShow = false;
    },
    closeNoAccessMd () {
      this.noAccessMdShow = false;
    },
    seeCart () {
      this.$router.push({path: '/cart'});
    },
    loadMore () {
      this.busy = true;
      this.loading = true;
      this.axios.get('/goods/list')
        .then(res => {
          this.goodsList = this.goodsList.concat(res.data.result);
          this.busy = false;
          this.loading = false;
        })
    }
  },
  filters: {formatCurrency}
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/css/variable";

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
    color: $color-main;
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
    color: $color-main;
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

  .goods-list ul li img,
  .goods-list ul li .btn {
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
    color: #333;
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

  .hide-btn {
    display: block;
    margin: 0 auto;
    width: 50%;
  }

  .loading {
    height: 80px;
    margin: 30px 0;
    text-align: center;
  }
</style>
