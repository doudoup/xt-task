<template>

  <div>
    <h1 class="list-heading">{{ msgTitle }}</h1>
    <br><br>
    <a href="#/">首页</a>
    <br><br>
    <div class="xt-container list-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="xt-text-left" label="今天" name="first">
          <ul>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-danger xt-h3">未被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <span class="xt-text-muted">前面有10个任务</span>&nbsp;&nbsp;<a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"  @click="dialogDelete = true"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-success xt-h3">已被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <span class="xt-text-muted">前面有10个任务</span>&nbsp;&nbsp;<a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane class="xt-text-left" label="未被处理" name="second">
          <ul>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-danger xt-h3">未被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <span class="xt-text-muted">前面有10个任务</span>&nbsp;&nbsp;<a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-danger xt-h3">未被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <span class="xt-text-muted">前面有10个任务</span>&nbsp;&nbsp;<a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-danger xt-h3">未被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <span class="xt-text-muted">前面有10个任务</span>&nbsp;&nbsp;<a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane class="xt-text-left" label="已处理" name="third">
          <ul>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-success xt-h3">已被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-success xt-h3">已被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
            <li>
              <div class="list-flex">
                <div>
                  <p class="xt-text-success xt-h3">已被处理的任务标题</p>
                  <br>
                  <p class="xt-text-muted">我是任务的具体描述嗷嗷嗷嗷啊嗷嗷嗷嗷嗷</p>
                </div>
                <div class="xt-text-right">
                  <a class="list-check-btn"><i class="el-icon-check"></i></a><br><br><a class="xt-text-danger list-delete-btn"><i class="el-icon-delete2"></i></a>
                </div>
              </div>
              <hr class="list-hr">
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogDelete"
      size="tiny"
      :before-close="handleClose"
      :close-on-click-modal="false"
      :show-close="false">
      <span>确定要删除该任务吗？删除之后将无法找回</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDelete = false">取 消</el-button>
        <el-button type="danger" @click="dialogDelete = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msgTitle: '任务页面',
      activeName: 'first',
      dialogDelete: false
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-heading {
  display: inline-block;
  margin-top: 24px;
}
.list-container {
  margin: auto;
  padding: 24px;
  margin-bottom: 24px;
}
.list-flex {
  display: flex;
  justify-content: space-between;
}
.list-check-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  color: #fff;
  background: #fff;
}
.list-check-btn:hover,
.list-check-btn-active {
  background: #13CE66;
}
.list-delete-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.list-hr {
  margin: 24px 0;
}
</style>
