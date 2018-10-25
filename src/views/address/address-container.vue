<template>
  <div class="container">
    <h2>Shipping address</h2>
    <div class="clearfix">
      <div v-for="(item, index) in address" class='box' :class="{'active': currentAddress === index}" :key="index">
        <dl>
          <dt class="username">{{item.userName}}</dt>
          <dd class="post-code">{{item.postCode}}{{item.streetName}}</dd>
          <dd class="tel">{{item.tel}}</dd>
          <dd class="default-address" v-show="item.isDefault">Default address</dd>
        </dl>
      </div>
      <div class="box add-new">
        <span class="add-icon">+</span>
        <span>Add new address</span>
      </div>
    </div>
    <div class="more-btn">more</div>
  </div>
</template>

<script>
export default {
  name: 'address-container',
  data () {
    return {
      address: [
        {
          'addressId': '100008',
          'userName': 'Frank',
          'streetName': '北京市海淀区中关村软件园',
          'postCode': '100011',
          'tel': 10125652345,
          'isDefault': true
        },
        {
          'addressId': '100009',
          'userName': 'Frank',
          'streetName': '北京市海淀区中关村软件园',
          'postCode': '100011',
          'tel': 10125652345,
          'isDefault': true
        }
      ],
      currentAddress: 0
    }
  }
}
</script>

<style scoped>
  .container {
    padding-top: 40px;
  }

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

  .box .username {
    line-height: 1em;
    padding: 0 25px 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
  }

  .box .post-code {
    height: 2.8517em;
    margin-bottom: 10px;
    line-height: 1.4285;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .box .tel {
    margin-bottom: 10px;
    color: #605f5f;
    line-height: 1.2142;
  }

  .box .default-address {
    color: #ee7a23;
  }

  .add-new {
    padding: 20px 20px 40px;
    color: #605f5f;
    text-align: center;
  }

  .add-new .add-icon {
    display: inline-block;
    width: 100%;
    font-size: 70px;
    color: #ada4a2;
  }

  .more-btn {
    text-align: center;
    color: #ee7a23;
  }
</style>
