<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form class="add">
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
      <a class="btn btn-success" @click.prevent="handleAddHero()">
        Submit
      </a>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formdata: {
        id: '',
        name: '',
        gender: '',
        age: ''
      }
    }
  },
  methods: {
    handleAddHero () {
      // 1.获取表单数据
      // 2. axios.post
      //  {
      //   name: this.name,
      //   gender: this.gender,
      //   age: this.age
      // }
      axios.post('http://localhost:3001/heroes', this.formdata).then(res => {
        // 3. 回到列表组件
        this.$router.push({ name: 'heroes' })
      })
    }
  }
}
</script>

<style>
.add {
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
