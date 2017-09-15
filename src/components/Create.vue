<template>
  <div>
    <h1 class="create-heading">{{ msgTitle }}</h1>
    <br><br>
    <a href="#/">首页</a>
    <br><br>
    <div class="xt-container create-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="任务标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="详细描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList">
          <el-button :plain="true" type="success">点击上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <br><br>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>

      </el-form>
    </div>
    <br><br>

  </div>

</template>

<script>
export default {
  name: 'create',
  data () {
    return {
      msgTitle: '创建新任务',
      form: {
          name: '',
          desc: '',
        },
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSubmit() {
        // `this` 在方法里指当前 Vue 实例
        alert('提交成功！')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-heading {
  display: inline-block;
  margin-top: 24px;
}
.create-form {
  margin: auto;
  padding: 24px;
  margin-bottom: 24px;
}
</style>
