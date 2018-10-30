<template>
  <div class='container'>
    <steps :steps="steps" :current-step="currentStep"></steps>
    <h2 class='title'>Order content</h2>
    <div class='table'>
      <div class='thead'>
        <ul class='tr'>
          <li class='td'>Order contents</li>
          <li class='td'>Price</li>
          <li class='td'>Quantity</li>
          <li class='td'>Subtotal</li>
        </ul>
      </div>
      <ul class='tbody'>
        <li class='tr' v-for='item in cartList' :key='item._id'>
          <div class='cart-tab-1 td'>
            <img :src="'/static/images/' + item.productImage">
            <span class='product-name'>{{item.productName}}</span>
          </div>
          <div class='cart-tab-2 td'>
            <span class='price'>￥{{item.salePrice}}</span>
          </div>
          <div class='cart-tab-3 td'>
            <div class='select-area'>
              <span class='subtract-btn'>-</span>
              <span class='product-num'>{{item.productNum}}</span>
              <span class='add-btn'>+</span>
            </div>
          </div>
          <div class='cart-tab-4 td'>
            <span class='total-price'>￥{{item.salePrice}}</span>
          </div>
        </li>
      </ul>
    </div>
    <ul class="price-count-wrap">
      <li><span>Item subtotal:</span><span class="price-text">￥10.00</span></li>
      <li><span>Shipping:</span><span class="price-text">￥10.00</span></li>
      <li><span>Discount:</span><span class="price-text">￥10.00</span></li>
      <li><span>Tax:</span><span class="price-text">￥10.00</span></li>
      <li><span>Order total:</span><span class="price-text">￥100.00</span></li>
    </ul>
    <footer class="clearfix">
      <router-link class="btn btn-plain previous" to="/address">Previous</router-link>
      <router-link class="btn btn-main next" to="/success">Proceed to payment</router-link>
    </footer>
  </div>
</template>

<script>
import steps from '@/components/steps';

export default {
  name: 'cart',
  components: {steps},
  data () {
    return {
      steps: ['Confirm Address', 'View Your Order', 'Make Payment', 'Order Confirmation'],
      currentStep: 1,
      cartList: [
        {
          'productImage': '2.jpg',
          'salePrice': '80',
          'productName': '头戴式耳机-3',
          'productId': '201710004',
          '_id': '58c284d7117a2e6599abef5e',
          'productNum': '8',
          'checked': '1'
        },
        {
          'productImage': '6.jpg',
          'salePrice': '59',
          'productName': '智能插线板',
          'productId': '201710002',
          '_id': '58e704ef98dab115d336b3f1',
          'productNum': '2',
          'checked': '1'
        },
        {
          'productImage': 'zipai.jpg',
          'salePrice': '39',
          'productName': '自拍杆',
          'productId': '201710007',
          '_id': '58e7050398dab115d336b3f2',
          'productNum': '1'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 40px;
  }

  .title {
    margin-top: 20px;
    padding: 20px 0;
    font-size: 16px;
    color: #605f5f;
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

  .price-count-wrap {
    margin-top: 40px;
  }

  .price-count-wrap {
    display: table;
    width: 100%;
  }

  .price-count-wrap li {
    display: table-row;
  }

  .price-count-wrap li span {
    display: table-cell;
    height: 36px;
    line-height: 36px;
    padding-right: 10px;
    vertical-align: top;
    text-align: right;
    font-size: 18px;
    color: #999;
  }

  .price-count-wrap li .price-text {
    width: 100px;
    color: #666;
  }

  footer {
    margin: 20px 0 60px 0;
  }

  footer .previous {
    float: left;
  }

  footer .next {
    float: right;
  }
</style>
