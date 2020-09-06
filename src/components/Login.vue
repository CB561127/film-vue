<template>
  <el-container>
  <el-header style="text-align: center; font-size: 12px">
      <span class="spanStyle1">AIMovie 艾慕尾</span>
    <span class="spanStyle2">  ——值得信赖的观影小助手</span>
  </el-header>

  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">帐号登录</h3>
     <p v-if="checkPhone == false" class="phoneErr">该账号不存在，请重新输入！</p>
    <p v-if="checkPass == false && checkPhone == true" class="passErr">密码错误！</p>

    <el-form-item>
      <el-input type="text" v-model="userPhone "
                v-on:input="competence"
                auto-complete="off" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="password" show-password
                v-on:input="competence"
                auto-complete="off" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button v-bind:disabled="loginAble" type="primary" style="width: 100%;background: #505458;border: none" @click="login">登录艾慕尾</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <p><a href="http://localhost:8080/#/register">还没有帐号？立即注册 >></a> </p>
    </el-form-item>
  </el-form>
  </el-container>
</template>


<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .spanStyle1{
    position: fixed;
    left:240px;
    font-size: 30px;
  }
  .spanStyle2{
    position: fixed;
    left:480px;
    font-size: 20px;
  }

  .passErr{
    text-align: left;
    font-size:14px;
    color:crimson;
  }
  .phoneErr{
    text-align: left;
    font-size: 14px;
    color: crimson;
  }
  .el-header {
    position: fixed;
    top:0px;
    left:0;
    right: 0;
    background-color: #FFCC00;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

</style>

<script>
  export default {
    name: 'Login',
    data(){
      return{
        className:2222,
        result:null,
        loginAble:true,
        userPhone: null,
        password: null,
        name:null,
        checkPhone:true,
        checkPass:true,
        responseResult: [],
      }
    },
    methods:{
      test(){
        alert(this.className)
      },

     competence(){
       if(this.password != null && this.userPhone != null){
         this.loginAble = false
       }
         //

     },

      login() {
          const t = this
          this.$axios
            .post('http://localhost:8888/login/' + t.userPhone + '/' + t.password)
            .then(function (resp) {
              t.result = resp.data
              if(t.result == null){
               // alert("账号或密码错误，请重新输入")
                t.checkPhone = false
               // t.resetPhone()
              }else {
                t.$store.commit('login', t.result)
                var path = this.$route.query.redirect
                this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
                //alert("登陆成功")
              }
            })

      },
      resetPass(){
        this.password = ''
      },
      resetPhone(){
        this.userPhone = ''
      }
    }
  }
</script>

<style scoped>

</style>
