<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form class="edit">
      <div class="form-group">
        <label for="exampleInputPassword1">英雄编号</label>
        <input
          v-model="formdata.id"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入英雄ID"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名字</label>
        <input
          v-model="formdata.name"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入英雄名字"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄性别</label>
        <input
          v-model="formdata.gender"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入英雄性别"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">英雄年龄</label>
        <input
          v-model="formdata.age"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入英雄年龄"
        />
      </div>
      <a class="btn btn-success" @click.prevent="handleEdit()">
        Submit
      </a>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      formdata: {}
    }
  },
  mounted () {
    // 加载完edit 组件自动调用
    this.getHeroById()
  },
  methods: {
    //     编辑功能：
    // 1.一点按钮来到编辑组件 showEdit() 渲染编辑组件 -> this.$router.push()
    // 2.显示要编辑的内容
    // (1)Input v-model = “数据”  数据来源是被点击的英雄数据
    // (2)英雄数据 axios.get(url+ID)
    // (3)ID 来源于list.vue 编辑按钮 v.id
    // // A 组件 数据id  this.$router.push(params:{id: ID})
    // // B 组件 使用数据id  $router.params.id
    // 3.做一些修改，并返回list 组件
    getHeroById () {
      // this.$router 获取路由对象
      // this.$route 获取路由配置对象
      // console.log(this.$route.params.id)
      this.axios
        .get('heroes/' + this.$route.params.id)
        .then(res => {
          // console.log(res.data)
          this.formdata = res.data
        })
    },
    // 编辑 - 表单提交
    handleEdit () {
      this.axios.put('heroes/' + this.$route.params.id, this.formdata)
        .then(res => {
          // 回到列表组件
          this.$router.push({ name: 'heroes' })
        })
    }
  }
}
</script>

<style>
.edit {
  position: relative;
  top: 40px;
  left: 30px;
}
.sub-header {
  position: relative;
  top: 20px;
  left: 30px;
}
</style>
