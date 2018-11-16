<template>
  <div id="app">
    <main-header></main-header>
    <breadcrumb>{{$route.path | formatPath}}</breadcrumb>
    <div class="layout-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import mainHeader from '@/views/common/main-header';
import breadcrumb from '@/components/breadcrumb';

export default {
  name: 'App',
  components: {mainHeader, breadcrumb},
  filters: {
    formatPath (path) {
      return path.slice(1);
    }
  }
}
</script>

<style>
  @import '../src/assets/font/iconfont/iconfont.css';
  @import '../src/assets/css/common.scss';

  body {
    background-color: #f5f7fc;
  }
</style>
