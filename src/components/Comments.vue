<template>
  <div>
    <H1>
      This is a blank page
    </H1>

    <div>
      <div style="margin: 20px 0;"></div>
      <el-input @change="transportToCon()"
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="30"
        show-word-limit
      >
      </el-input>
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
    textChange () {
      console.log(this.textarea)
    },

    transportToCon () {
      this.$axios.get('http://localhost:8888/comments/' + this.textarea).then(function (resp) {
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
