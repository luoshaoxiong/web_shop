<template>
  <div class="container">
    <steps :steps="steps" :current-step="currentStep"></steps>
    <address-container></address-container>
    <method-container></method-container>
    <footer>
      <router-link class="btn btn-main" to="/order">Next</router-link>
    </footer>
  </div>
</template>

<script>
import steps from '@/components/steps';
import addressContainer from '@/views/address/address-container';
import methodContainer from '@/views/address/method-container';

export default {
  name: 'shipping-address',
  components: {steps, addressContainer, methodContainer},
  data () {
    return {
      steps: ['Confirm Address', 'View Your Order', 'Make Payment', 'Order Confirmation'],
      currentStep: 0
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 40px;
  }

  footer {
    margin: 20px 0 40px 0;
    text-align: right;
  }

  .btn {
    width: 200px;
  }
</style>
