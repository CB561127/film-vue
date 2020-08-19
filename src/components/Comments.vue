<template>
  <div>
    <div>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
    <div>

      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="30"
        show-word-limit
      >
      </el-input>
      <el-button @click="transportToCon()" type="success" icon="el-icon-check" circle>评论</el-button>
      <el-button @click="clearComments()" type="danger" icon="el-icon-delete" circle>清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comments',
  data () {
    return {
      text: '',
      textarea: ''
    }
  },
  methods: {
    open () {
      // this.$prompt('请输入内容', '写影评', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   area: ['800px', '350px'],
      //   // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   // inputErrorMessage: '邮箱格式不正确'
      // }).then(({ value }) => {
      //   this.$message({
      //     type: 'success',
      //     message: '评论成功！'
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '取消输入'
      //   })
      // })
      let that = this
      this.$layer.prompt({
        formType: 2,
        value: '',
        title: '请输入评价内容',
        area: ['800px', '350px']
      }, function (value, index, elem) {
        let data = {
          params: {
            fid: 1,
            uid: 2,
            content: value,
            love: 4
          }
        }
        that.$axios.get('http://localhost:8888/comments', data).then(function (resp) {
          if (resp.data === '成功') {
            alert('评论成功')
            that.$layer.close(index)
          }
        })
      })
    },
    clearComments () {
      this.textarea = ''
    },
    transportToCon () {
      let data = {
        params: {
          fid: 1,
          uid: 2,
          content: this.textarea,
          love: 4
        }
      }
      this.$axios.get('http://localhost:8888/comments', data).then(function (resp) {
        if (resp.data === '成功') {
          alert('评论成功')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
