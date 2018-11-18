<template>
  <header>
    <div class="layout-container">
      <div class="logo-container">
        <img class="logo" src="../../assets/logo.png">
        <h2>WebShop</h2>
      </div>
      <div class="menu-container">
        <span class="user-msg link" v-if="!userName" @click="loginShow = true">Login</span>
        <span class="user-msg" v-if="userName">{{userName}}</span>
        <span class="user-msg link" v-if="userName">Logout</span>
        <span class="iconfont icon-cart"><span class="cart-count">{{cartCount}}</span></span>
      </div>
    </div>
    <modal :show="loginShow" @close="closeLoginMd()">
      <input placeholder="用户名" v-model="name">
      <input type="password" placeholder="密码" v-model="password">
      <p v-show="errorShow" class="error">请输入正确的用户名或密码</p>
      <button class="btn btn-main login-btn" @click="login()">登录</button>
    </modal>
  </header>
</template>

<script type="text/ecmascript-6">
import modal from '@/components/modal';
import {mapState} from 'vuex';
export default {
  components: {modal},
  data () {
    return {
      loginShow: false,
      errorShow: false,
      name: 'admin',
      password: '123456'
    }
  },
  computed: {
    ...mapState(['userName', 'cartCount'])
  },
  methods: {
    login () {
      if (!this.name || !this.password) {
        this.errorShow = true;
      } else {
        this.errorShow = false;
        let params = {
          userName: this.name,
          userPwd: this.password
        };
        this.axios.post('/user/login', params)
          .then(res => {
            if (res.data.status === 0) {
              this.$store.commit('addCartCount', res.data.result.cartCount);
              this.$store.commit('updateName', res.data.result.userName);
              this.closeLoginMd();
            }
          })
      }
    },
    closeLoginMd () {
      this.name = '';
      this.password = '';
      this.loginShow = false;
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  @import "../../assets/css/variable";

  header {
    background-color: #fff;
    height: $header-height;
    line-height: $header-height;

    .logo-container {
      float: left;
      height: $header-height;

      .logo {
        float: left;
        height: $header-height;
        padding: 16px;
      }

      h2 {
        float: left;
        vertical-align: text-bottom;
        font-size: 28px;
        letter-spacing: 0.1em;
        color: #42b883;
        font-weight: bold;
      }
    }

    .menu-container {
      float: right;
      height: $header-height;

      .user-msg {
        margin-left: 14px;
        font-size: 16px;
      }

      .link:hover {
        color: $color-main;
        cursor: pointer;
      }

      .icon-cart {
        margin-left: 20px;
        cursor: pointer;

        &::before {
          font-size: 20px;
        }

        .cart-count {
          display: inline-block;
          position: relative;
          top: -12px;
          left: -5px;
          min-width: 18px;
          height: 18px;
          line-height: 18px;
          padding: 0 6px;
          border-radius: 50%;
          background-color: #eb767d;
          text-align: center;
          color: #fff;
          font-weight: bold;
        }
      }
    }

    .modal {
      input {
        display: block;
        width: 100%;
        height: 42px;
        border: 1px solid #ccc;
        padding: 0 12px;
        margin-bottom: 30px;
      }

      .error {
        height: 16px;
        margin-top: -20px;
        margin-bottom: 20px;
        line-height: 16px;
        color: red;
      }

      .login-btn {
        display: block;
        width: 100%;
      }
    }
  }
</style>
