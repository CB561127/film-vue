<template>
  <div>
    <H1>
      This is a blank page
    </H1>

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
  }
}
</script>

<style scoped>

</style>
