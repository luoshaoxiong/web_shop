<template>
  <div>
    <h2>Shipping method</h2>
    <div class="clearfix">
      <div v-for="(item, index) in shippingMethods" class='box' :class="{'active': currentMethod === index}" :key="index">
        <dl>
          <dt class="name">{{item.name}}</dt>
          <dd class="price">{{item.price}}</dd>
          <dd class="shipping-tips">
            <p>{{item.tips}}</p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'method-container',
  data () {
    return {
      shippingMethods: [
        {
          name: 'Standard shipping',
          price: 'Free',
          tips: 'Once shipped，Order should arrive in the destination in 1-7 business days'
        }
      ],
      currentMethod: 0
    }
  }
}
</script>

<style scoped>
  h2 {
    padding: 20px 0;
    font-size: 16px;
    color: #605f5f;
    text-transform: uppercase;
    letter-spacing: .25em;
    font-weight: 700;
  }

  .box {
    position: relative;
    float: left;
    width: 23.8095%;
    height: 162px;
    margin: 0 1.587% 1.587% 0;
    padding: 20px 20px 40px;
    background: #fff;
    border: 2px solid #e9e9e9;
    overflow: hidden;
    cursor: pointer;
  }

  .box:hover,
  .box.active {
    border: 2px solid #ee7a23;
  }

  .box .name {
    line-height: 1em;
    padding: 0 25px 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
  }

  .box .price {
    height: 2.8517em;
    margin-bottom: 10px;
    line-height: 1.4285;
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .box .shipping-tips {
    color: #999;
    line-height: 1.2142;
  }
</style>
