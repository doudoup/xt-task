<template>
  <div>
    <h1 class="detail-heading">任务详情</h1>
    <br><br>
    <div class="xt-container list-container">
      <span class="xt-h1">我是任务的标题</span> <span class="xt-text-danger">未完成</span>
      <br><br>
      <p>08-08 11：39 XXX 创建了任务</p>
      <br><br>
      <hr>
      <br><br>
      <p>我是任务的主题内容描述</p>
      <p>以下将会显示图片</p>
      <br><br>
      <hr>
      <br><br>
      <h2>添加评论</h2>
      <br>
      <form action="">
        
      </form>
      <textarea type="textarea" rows="3" autocomplete="off" validateevent="true" class="el-textarea__inner"></textarea>

    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
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
  .detail-heading {
    display: inline-block;
    margin-top: 24px;
  }
  .list-container {
    margin: auto;
    padding: 24px;
    margin-bottom: 24px;
    text-align: left;
  }
</style>
