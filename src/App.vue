<template>
  <div id="app">
    <main-header></main-header>
    <breadcrumb></breadcrumb>
    <router-view/>
  </div>
</template>

<script>
import mainHeader from '@/views/common/main-header'
import breadcrumb from '@/components/breadcrumb'

export default {
  name: 'App',
  components: {mainHeader, breadcrumb}
}
</script>

<style>
  @import '../src/assets/font/iconfont/iconfont.css';
  @import '../src/assets/css/common.scss';
</style>
