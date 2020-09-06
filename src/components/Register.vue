<template>
  <el-container>
  <el-header style="text-align: center; font-size: 12px">
    <span class="spanStyle1">AIMovie 艾慕尾</span>
    <span class="spanStyle2">  ——值得信赖的观影小助手</span>
  </el-header>

    <!----------------------------------注册表单--------------------------------------->
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
            class="register-container" label-position="left"
            label-width="0px">
    <h3 class="register_title">用户注册</h3>
    <el-form-item prop="phone">
      <el-input type="phone" v-model="ruleForm.phone"
                auto-complete="off" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="pw1" v-model="ruleForm.pass" show-password
                auto-complete="off" placeholder="请设置密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
    <el-input type="pw2" v-model="ruleForm.checkPass" show-password
              auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item prop="nickname">
      <el-input type="nickname" v-model="ruleForm.nickname"
                auto-complete="off" placeholder="请设置昵称"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="resetForm('ruleForm')">全部重置</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="submitForm('ruleForm')">立即注册</el-button>
    </el-form-item>
  </el-form>
  </el-container>
</template>

<style>
  .register-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .register_title {
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
    name: 'Register',
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.pw2 !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.pw1) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        className:2222,
        resultNum:0,
        responseResult: [],
        ruleForm: {
          phone:'',
          pass: '',
          checkPass: '',
          nickname: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '手机号不能为空！', trigger: 'blur' },
          ],
          nickname:[
            { required: true, message: '请输入至少一个字符', trigger: 'blur' },
          ]
        },
      }
    },
    methods:{
      test(){
        if(this.pw1 == this.pw2){
          alert("两次密码一致")
        }
      },
      register() {
        const t = this
        if (this.ruleForm.pass != this.ruleForm.checkPass) {
          alert("两次密码不一致，请重新输入")
        } else {
        this.$axios
          .post('http://localhost:8888/register/' + t.ruleForm.phone + '/' + t.ruleForm.pass + '/'+t.ruleForm.nickname)
          .then(function (resp) {
            t.resultNum = resp.data
            if(t.resultNum == 1){
              alert("该手机号已被注册")
            }else if(t.resultNum == 2){
              alert("该昵称已被占用")
            }else{
              alert("注册成功")
            }
          })
         }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
