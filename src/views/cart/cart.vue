<template>
  <div class='layout-container'>
    <h2 class='title'>My Cart</h2>
    <div class='table'>
      <div class='thead'>
        <ul class='tr'>
          <li class='td'>Items</li>
          <li class='td'>Price</li>
          <li class='td'>Quantity</li>
          <li class='td'>Subtotal</li>
          <li class='td'>Edit</li>
        </ul>
      </div>
      <ul class='tbody'>
        <li class='tr' v-for="item in cartList" :key="item._id">
          <div class="cart-tab-1 td">
            <input type="checkbox" class="checkbox" :value="item" v-model="checkedProducts" @change="editCart(!item.checked, item.productNum, item)">
            <img :src="'/static/images/' + item.productImage">
            <span class="product-name">{{item.productName}}</span>
          </div>
          <div class="cart-tab-2 td">
            <span class="price">{{item.salePrice | currency('￥', 2)}}</span>
          </div>
          <div class="cart-tab-3 td">
            <div class="select-area">
              <span class="subtract-btn" @click="editCart(item.checked, Number(item.productNum) - 1, item)">-</span>
              <span class="product-num">{{item.productNum}}</span>
              <span class="add-btn" @click="editCart(item.checked, Number(item.productNum) + 1, item)">+</span>
            </div>
          </div>
          <div class="cart-tab-4 td">
            <span class="total-price">{{item.salePrice | currency('￥', 2)}}</span>
          </div>
          <div class="cart-tab-5 td">
            <span class="icon iconfont icon-shanchuicon" @click="deleteCart(item.productId)"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer clearfix">
      <div class="footer-left">
        <label for="selectAll">
          <input type="checkbox" class="checkbox" id="selectAll" v-model="isCheckAll">Select all</label>
      </div>
      <div class="footer-right">
        <div>Item total:<span class="item-total">{{total | currency('￥', 2)}}</span></div>
        <router-link class="btn btn-main checkout-btn" to="/address">checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      cartList: [],
      checkedProducts: []
    }
  },
  mounted () {
    this.getCartList();
  },
  computed: {
    total () {
      var total = 0;
      this.cartList.forEach(item => {
        if (item.checked) {
          total += item.productNum * item.salePrice;
        }
      });
      return total;
    },
    isCheckAll: {
      get: function () {
        return this.cartList.every(item => item.checked);
      },
      set: function () {
        this.toggleSelect();
      }
    }
  },
  methods: {
    getCartList () {
      this.axios.get('/user/cartList')
        .then(res => {
          if (res.data.status === 0) {
            this.cartList = res.data.result;
            this.checkedProducts = this.cartList.filter(item => item.checked);
          }
        })
    },
    editCart (checked, num, item) {
      num = num >= 0 ? num : 0;
      let difference = num - item.productNum;
      item.productNum = num;
      let params = {
        productId: item.productId,
        productNum: item.productNum,
        checked: checked
      };
      this.axios.post('/user/editCart', params)
        .then(res => {
          if (res.data.status === 0) {
            this.$store.commit('addCartCount', difference);
            this.getCartList();
          }
        })
    },
    toggleSelect () {
      let params = {
        isCheckAll: !this.isCheckAll
      };
      this.axios.post('/user/checkAllCart', params)
        .then(res => {
          if (res.data.status === 0) {
            this.getCartList();
          }
        })
    },
    deleteCart (productId) {
      let params = {
        productId: productId
      };
      this.axios.post('/user/deleteCart', params)
        .then(res => {
          if (res.data.status === 0) {
            this.getCartList();
          }
        })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../assets/css/variable';

  .title {
    padding: 40px 0 20px;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: .25em;
    font-weight: 700;
  }

  .table {
    display: table;
    width: 100%;
    margin-bottom: 20px;
  }

  .table .thead {
    display: table-header-group;
  }

  .table .thead li {
    height: 40px;
    line-height: 40px;
    background: #605f5f;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-family: moderat,sans-serif;
    letter-spacing: .25em;
  }

  .table .tbody {
    display: table-row-group;
    background-color: #fff;
  }

  .table .tr {
    display: table-row;
  }

  .table .td {
    display: table-cell;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: middle;
  }

  .table .tr .checkbox {
    float: left;
    margin: 30px 0 0 20px;
  }

  .table .tr img {
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    border: 1px solid #e9e9e9;
    overflow: hidden;
  }

  .table .tr .product-name {
    display: flex;
    /*width: 100%;*/
    min-height: 80px;
    line-height: 80px;
    padding: 0 20px;
    flex-wrap: wrap;
    color: #000;
    font-family: moderat,sans-serif;
    font-weight: 700;
  }

  .table .tr .price,
  .table .tr .total-price {
    font-size: 16px;
    color: #333;
  }

  .table .tr .select-area {
    display: inline-block;
    width: auto;
    min-width: 50px;
    max-width: 240px;
    height: 30px;
    line-height: 30px;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
  }

  .table .tr .select-area .subtract-btn,
  .table .tr .select-area .add-btn {
    display: inline-block;
    min-width: 40px;
    height: 100%;
    border: 0;
    color: #605f5f;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    background: #f0f0f0;
    user-select: none;
  }

  .table .tr .select-area .subtract-btn:hover,
  .table .tr .select-area .add-btn:hover {
    background: #dfdfdf;
    cursor: pointer;
  }

  .table .tr .select-area .product-num {
    display: inline-block;
    width: 30px;
    min-width: 30px;
    height: 100%;
    padding: 0 3px;
    border: 0;
    color: #605f5f;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
  }

  .table .tr .total-price {
    color: #d1434a;
  }

  .icon-shanchuicon::before {
    font-size: 18px;
  }

  .icon-shanchuicon:hover {
    cursor: pointer;
    color: $color-main;
  }

  .cart-tab-1 {
    min-height: 72px;
    padding: 32px 0 32px 0;
    text-align: left;
    border-left: 1px solid #e9e9e9;
  }

  .cart-tab-2 {
    text-align: center;
    /*padding-top: 64px;*/
  }

  .cart-tab-3 {
    text-align: center;
    /*padding-top: 48px;*/
  }

  .cart-tab-4 {
    text-align: center;
    /*padding-top: 64px;*/
  }

  .cart-tab-5 {
    padding-top: 4px;
    min-width: 100px;
    border-right: 1px solid #e9e9e9;
    text-align: center;
  }

  .footer {
    margin: 20px 0 60px 0;
    background: #fff;
    border: 1px solid #e9e9e9;
    font-size: 16px;
  }

  .footer-left {
    float: left;
    padding: 0 22px;
    line-height: 54px;
  }

  .footer-left .checkbox {
    margin-right: 20px;
  }

  .footer-right {
    float: right;
  }

  .footer-right div {
    float: left;
    margin: 0 30px 0 0;
    color: #999;
    font-size: 16px;
    text-align: right;
    line-height: 54px;
  }

  .footer-right .item-total {
    margin-left: 6px;
    color: #d1434a;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1.2;
  }

  .footer-right .checkout-btn {
    width: auto;
    height: 54px;
    line-height: 54px;
  }
</style>
