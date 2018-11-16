<template>
  <div class="layout-container clearfix">
    <div class="filter-bar">
      <span>Sort by:</span>
      <span class="option" :class="{'current': sortType === 0}" @click="changeSortType(0)">Default</span>
      <span class="option" :class="{'current': sortType !== 0}" @click="changeSortType(sortType !== -1 ? -1 : 1)">Price
        <span class="iconfont icon-descending" v-if="sortType !== 1"></span>
        <span class="iconfont icon-ascending" v-if="sortType === 1"></span>
      </span>
    </div>
    <div class="filter-aside">
      <dl>
        <dt>price:</dt>
        <dd v-for="(item, index) in priceRange" :key="index" :class="{'current': isInRange(item)}" @click="setPriceRange(item.start, item.end)">
          <span v-if="item.end === Number.MAX_VALUE">All</span>
          <span v-else>{{item.start | currency('￥', 2)}} - {{item.end | currency('￥', 2)}}</span>
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
            <dd><button class="btn btn-plain" @click="addCart(item.productId)">加入购物车</button></dd>
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
        <button class="btn btn-plain continue-btn" @click="closeSuccessMd()">继续购物</button>
        <router-link class="btn btn-main see-btn" to="/cart">查看购物车</router-link>
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
      priceStart: 0,
      priceEnd: Number.MAX_VALUE,
      sortType: 0,
      currentPage: 1,
      pageSize: 8,
      busy: false,
      loading: false
    }
  },
  mounted () {
    this.getGoodsList();
    console.log(this.$router, this.$route)
  },
  methods: {
    getGoodsList () {
      this.loading = true;
      this.busy = true;
      let params = {
        priceStart: this.priceStart,
        priceEnd: this.priceEnd,
        sortType: this.sortType,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      };
      this.axios.post('/goods/list', params)
        .then(res => {
          this.goodsList = this.goodsList.concat(res.data.result);
          this.loading = false;
          this.busy = !res.data.result.length;
        })
    },
    addCart (productId) {
      this.axios.get('/user/checkLogin')
        .then(res => {
          if (res.data.status === 0) {
            let params = {
              userId: res.data.result,
              productId: productId
            };
            this.axios.post('/goods/add', params)
              .then(res => {
                if (res.data.status === 0) {
                  this.successMdShow = true;
                  this.$store.commit('addCartCount', 1);
                }
              })
          } else {
            this.noAccessMdShow = true;
          }
        })
    },
    closeSuccessMd () {
      this.successMdShow = false;
    },
    closeNoAccessMd () {
      this.noAccessMdShow = false;
    },
    loadMore () {
      if (!this.loading) {
        setTimeout(() => {
          this.currentPage++;
          this.getGoodsList();
        }, 200);
      }
    },
    setPriceRange (start, end) {
      this.priceStart = start;
      this.priceEnd = end;
      this.currentPage = 1;
      this.goodsList = [];
      this.getGoodsList();
    },
    changeSortType (type) {
      this.sortType = type;
      this.currentPage = 1;
      this.goodsList = [];
      this.getGoodsList();
    },
    isInRange (item) {
      return item.start === this.priceStart && item.end === this.priceEnd;
    }
  }
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

  .option.current {
    color: $color-main;
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

  .filter-aside dd:hover,
  .filter-aside .current {
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
    margin: 40px 0;
    text-align: center;
  }
</style>
