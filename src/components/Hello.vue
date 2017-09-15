<template>
  <div class="hello-heading">
    <h1>hi! {{ name }}, {{ msg }}</h1>
    <br>
    <header></header>
    <a href="#/login">登录页面</a>
    <br><br>
    <!-- 业务员创建任务页面 -->
    <a href="#/create">创建任务</a>
    <br><br>
    <!-- 查看所有任务页面，业务员只能查看自己提过的所有任务，内勤人员能看到所有人提过的任务 -->
    <a href="#/list">任务列表</a>
    <br><br>
    <!-- 业务员查看自己最新提过的任务详情，该页面也是所有任务详情的页面 -->
    <a href="#/detail">查看最新任务详情</a>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: '小花',
      msg: '首页',
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello-heading {
    margin-top: 24px;
  }
</style>
