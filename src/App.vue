<template>
  <div id="app">
    <!-- 导航 -->
    <app-nav></app-nav>
    <div class="container">
      <!-- 侧边栏 appSlider -->
      <app-slider tag="div"></app-slider>
      <!-- 容器 -->
      <router-view tag="div" class="article"></router-view>
    </div>
  </div>
</template>

<script>
// 问题： 要在App.vue 中使用 appnav 组件
// 1. 导入appnav 组件
import appNav from '@/views/appNav'
import appSlider from '@/views/appSlider'

export default {
  // 2. 通过选项注册/定义 组件
  name: 'App',
  components: {
    // appNav: appNav
    appNav,
    appSlider
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  overflow: auto;
  zoom: 1;
  height: 3000px;
  width: 100%;
}

.article {
  float: right;
  position: absolute;
  right: 0px;
  position: fixed;
  top: 30px;
  right: 0px;
  width: 85%;
  height: 3000px;
  background-color: rgb(236, 243, 243);
}
</style>
