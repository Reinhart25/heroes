import Vue from 'vue'
import VueRouter from 'vue-router'
import Bar from '@/components/bar/Bar.vue'
import Foo from '@/components/foo/Foo.vue'
import List from '@/components/list/List.vue'
import Add from '@/components/list/add.vue'
import Edit from '@/components/list/edit.vue'
// 导入要渲染的组件

Vue.use(VueRouter)

// 4.配置路由(设置路由匹配规则)
const routes = [
  {
    path: '/heroes',
    name: 'heroes',
    component: List
  },
  {
    path: '/bar',
    name: 'bar',
    component: Bar
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]
// 5.实例化路由并使用路由配置
const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
