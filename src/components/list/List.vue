<template>
  <!-- list 组件 -->
  <div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h1 class="primary-header">Heroes list</h1>
      <a class="btn btn-success" @click.prevent="showAddVue()">Add</a>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>姓名</th>
              <th>性别</th>
              <th>年龄</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(v, i) in list1" :key="i">
              <td>{{ v.id }}</td>
              <td>{{ v.name }}</td>
              <td>{{ v.gender }}</td>
              <td>{{ v.age }}</td>
              <td>
                <a @click.prevent="showEditVue(v.id)">edit</a>&nbsp;&nbsp;
                <a @click.prevent="deleHero(v.id)">delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      list1: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // 编辑功能第一步展示并传值
    showEditVue (ID) {
      console.log(ID)
      // this.$router.push(params:{id: ID})
      this.$router.push({
        name: 'edit',
        params: {
          id: ID
        }
      })
    },
    // 获取数据
    getData () {
      this.axios.get('heroes').then(res => {
        // console.log(res)
        const { status, data } = res
        if (status === 200) {
          // console.log(data)
          this.list1 = data
        }
      })
    },
    // 删除
    deleHero (ID) {
      if (confirm('Sure?')) {
        // 需要id ,英雄数据 1.在data 选项中有没有id
        //  2.方法能不能传参数
        this.axios.delete('heroes/' + ID).then(res => {
          console.log(res)
          const { status } = res
          if (status === 200) {
            // 更新视图
            this.getData()
          } else {
            console.log(status)
          }
        })
      }
    },
    // 添加 --渲染add组件
    showAddVue () {
      // 用js改url的标识->编程式导航
      this.$router.push({ name: 'add' })
    }
  }
}
</script>

<style>
.primary-header {
  border-bottom: 1px dashed #000;
  height: 50px;
  width: 1080px;
}
</style>
