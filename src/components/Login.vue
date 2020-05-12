<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 表单区域 -->
      <!-- :model:表单数据对象  :rules:表单验证规则 -->
      <el-form :model="loginForm"
               :rules="loginRules"
               ref="loginRuleForm"
               label-width="100px"
               class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <el-form-item class="btnform">
          <el-button type="primary"
                     @click="loginAdd">登录</el-button>
          <el-button type="infor"
                     @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: { // 表单验证规则
        username: 'admin',
        password: '123456'
      },
      loginRules: { // 验证规则
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置表单
    resetLoginForm () {
      this.$refs.loginRuleForm.resetFields()
    },
    loginAdd () {
      this.$refs.loginRuleForm.validate(async valid => {
        // 如果valid为false,不执行下面的操作
        if (!valid) return
        // 发请求,使用async和await简化异步操作
        const { data: res } = await this.$axios.post('login', this.loginForm)
        if (res.meta.status !== 200) {
          return this.$message.error(res.meta.msg)
        }
        // 登录失败的提示框
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // 保存token值
        window.sessionStorage.setItem('token', res.data.token)
        // 通过编程式导航跳转到首页
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  .login_box {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login_form {
      position: absolute;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      top: 20%;
    }
  }
  .btnform {
    display: flex;
    justify-content: center;
  }
}
</style>
