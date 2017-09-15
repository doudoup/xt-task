<template>
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo header" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><a href="/">首页</a></el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的</template>
      <el-menu-item index="2-1">1195229475@qq.com</el-menu-item>
      <el-menu-item index="2-3">退出登录</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"><a href="#/create">创建任务</a></el-menu-item>
    <el-menu-item index="4"><a href="#/list">任务列表</a></el-menu-item>
    <el-menu-item index="5"><a href="#/detail">任务详情</a></el-menu-item>
    <el-menu-item index="6"><a href="#/login">登录</a></el-menu-item>
    <el-submenu index="7">
      <template slot="title">任务列表</template>
      <el-menu-item index="7-1">全部列表</el-menu-item>
      <el-menu-item index="7-2">部门任务</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    name: 'HeaderComponent',
    data () {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
</style>
