<template>
  <div class="container">
    <h2>Shipping address</h2>
    <div class="clearfix">
      <div v-for="(item, index) in addressList" class='box' :class="{'active': currentAddress === item._id}"
           @click="setDefault(item._id)" :key="index">
        <dl>
          <dt class="username">{{item.userName}}</dt>
          <dd class="post-code">{{item.postCode}}{{item.streetName}}</dd>
          <dd class="tel">{{item.tel}}</dd>
          <dd class="default-address" v-show="item.isDefault">Default address</dd>
        </dl>
      </div>
      <div class="box add-new" @click="showMd()">
        <span class="add-icon">+</span>
        <span>Add new address</span>
      </div>
    </div>
    <div class="more-btn">more</div>
    <modal :show="modalShow" @close="closeMd()">
      <input placeholder="请输入收件人姓名" v-model="modalData.userName">
      <input placeholder="请输入详细地址" v-model="modalData.streetName">
      <input placeholder="请输入邮政编码" v-model.number="modalData.postCode">
      <input placeholder="请输入手机号码" v-model.number="modalData.tel">
      <p v-show="errorTip" class="error">{{errorTip}}</p>
      <button class="btn btn-main login-btn" @click="addAddress()">创建</button>
    </modal>
  </div>
</template>

<script>
import modal from '@/components/modal';

export default {
  name: 'address-container',
  components: {modal},
  data () {
    return {
      addressList: [],
      currentAddress: '',
      modalShow: false,
      modalData: {
        userName: '',
        streetName: '',
        postCode: '',
        tel: ''
      },
      errorTip: ''
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      this.axios.get('/user/addressList')
        .then(res => {
          if (res.data.status === 0) {
            this.addressList = res.data.result;
            this.currentAddress = (this.addressList.filter(item => item.isDefault === true)[0] || {})._id;
          }
        })
    },
    setDefault (id) {
      let params = {
        _id: id
      };
      this.axios.post('/user/setDefault', params)
        .then(res => {
          if (res.data.status === 0) {
            this.getList();
          }
        })
    },
    showMd () {
      this.modalShow = true;
    },
    closeMd () {
      this.modalShow = false;
    },
    addAddress () {
      let params = {
        userName: this.modalData.userName,
        streetName: this.modalData.streetName,
        postCode: this.modalData.postCode,
        tel: this.modalData.tel
      };
      this.axios.post('/user/addAddress', params)
        .then(res => {
          if (res.data.status === 0) {
            this.getList();
          }
        })
    },
    check () {
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
