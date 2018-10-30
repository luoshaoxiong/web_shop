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
            <input type="checkbox" class="checkbox">
            <img :src="'/static/images/' + item.productImage">
            <span class="product-name">{{item.productName}}</span>
          </div>
          <div class="cart-tab-2 td">
            <span class="price">￥{{item.salePrice}}</span>
          </div>
          <div class="cart-tab-3 td">
            <div class="select-area">
              <span class="subtract-btn">-</span>
              <span class="product-num">{{item.productNum}}</span>
              <span class="add-btn">+</span>
            </div>
          </div>
          <div class="cart-tab-4 td">
            <span class="total-price">￥{{item.salePrice}}</span>
          </div>
          <div class="cart-tab-5 td">
            <span class="icon iconfont icon-shanchuicon"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer clearfix">
      <div class="footer-left">
        <label for="selectAll">
          <input type="checkbox" class="checkbox" id="selectAll">Select all</label>
      </div>
      <div class="footer-right">
        <div>Item total:<span class="item-total">￥</span></div>
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
      cartList: [
        {
          'productImage': 'zipai.jpg',
          'salePrice': '39',
          'productName': '自拍杆',
          'productId': '201710007',
          '_id': '58e7050398dab115d336b3f2',
          'productNum': '7',
          'checked': '0'
        },
        {
          'productImage': '6.jpg',
          'salePrice': '59',
          'productName': '智能插线板',
          'productId': '201710002',
          '_id': '58e704ef98dab115d336b3f1',
          'productNum': '2',
          'checked': '0'
        },
        {
          'productImage': '10.jpg',
          'salePrice': '2099',
          'productName': '小米电视4A',
          'productId': '201710010',
          '_id': '58e7052198dab115d336b3f5',
          'productNum': '1',
          'checked': '0'
        },
        {'productImage': '8.jpg',
          'salePrice': '1999',
          'productName': '小米净水器',
          'productId': '201710008',
          '_id': '58e7050c98dab115d336b3f3',
          'productNum': '1',
          'checked': '0'
        },
        {
          'productImage': '1.jpg',
          'salePrice': '129',
          'productName': '小钢炮蓝牙音箱',
          'productId': '201710017',
          '_id': '58e7058498dab115d336b3fc',
          'productNum': '1',
          'checked': '0'
        },
        {
          'productImage': '2.jpg',
          'salePrice': '80',
          'productName': '头戴式耳机-3',
          'productId': '201710004',
          '_id': '58c284d7117a2e6599abef5e',
          'productNum': '1',
          'checked': '1'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
