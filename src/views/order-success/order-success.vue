<template>
  <div class='container'>
    <steps :steps="steps" :current-step="currentStep"></steps>
    <div class="success-image"><img src="/static/images/ok-2.png"></div>
    <h3>Congratulations! <br>Your order is under processing!</h3>
    <p>
      <span>Order ID：{{orderId}}</span>
      <span>Order total：{{orderTotal}}</span>
    </p>
    <div class="btn-container">
      <router-link class="btn btn-plain" to="/cart">Cart List</router-link>
      <router-link class="btn btn-main" to="/goods">Goods List</router-link>
    </div>
  </div>
</template>

<script>
import steps from '@/components/steps';

export default {
  name: 'order-success',
  components: {steps},
  data () {
    return {
      steps: ['Confirm Address', 'View Your Order', 'Make Payment', 'Order Confirmation'],
      currentStep: 3,
      orderId: '',
      orderTotal: 0
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 40px;
    text-align: center;
  }

  .success-image {
    height: 130px;
    margin: 80px auto 60px;
  }

  .success-image img {
    height: 100%;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 1.6em;
    line-height: 1.6em;
    font-weight: 200;
    color: #333;
  }

  p {
    margin-bottom: 40px;
    line-height: 1.3;
    color: #999;
  }

  p span {
    font-size: 18px;
  }

  .btn-container {
    margin-bottom: 100px;
  }

  .btn-container .btn {
    min-width: 226px;
    margin: 0 20px;
  }
</style>
