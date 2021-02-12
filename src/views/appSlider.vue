<template>
  <!-- 侧边栏 appSlider -->
  <ul class="nav nav-slider">
    <router-link to="/heroes" tag="li">
      <a href="#">英雄列表</a>
    </router-link>
    <router-link to="/bar" tag="li">
      <a href="#">武器列表</a>
    </router-link>
    <router-link to="/foo" tag="li">
      <a href="#">装备列表</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'appSlider'
}
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  width: 230px;
  position: fixed;
  top: 52px;
  left: 0px;
}
li a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
}
/* 鼠标移动到选项上修改背景颜色 */
/* li a:hover {
  background-color: rgb(226, 225, 235);
  color: rgb(66, 25, 161);
} */
.active {
  color: red;
  font-size: 20px;
}
</style>
