<template>
  <div class="login_main">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNum">
        <el-input type="number" v-model="ruleForm.phoneNum" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="code">
        <el-input type="number" v-model="ruleForm.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="forgetHere">
          <el-checkbox v-model="checked">同意并接受服务协议</el-checkbox>
          <router-link class="forgetHere_password" to="/admin/agreement">服务协议</router-link>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="confirm_btn"
          type="primary"
          @click="submitForm('ruleForm')"
        >{{forgetStatus ? "修改密码" : "注册"}}</el-button>
      </el-form-item>
      <el-form-item>
        <div class="register_footer">
          <router-link class="forgetHere_password" to="/admin/login">已有账号，直接登录</router-link>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePhoneNum = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPassword !== "") {
          this.$refs.ruleForm.validateField("checkPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPassword: "",
        phoneNum: "",
        code: "",
        checked: false
      },
      forgetStatus: null,
      checked: false,
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPassword: [{ validator: validatePass2, trigger: "blur" }],
        phoneNum: [{ validator: validatePhoneNum, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this.ruleForm);
        } else {
          this.$message({
            message: "请确保数据填写完整",
            type: "error"
          });
          return false;
        }
      });
    }
  },
  mounted() {
    this.forgetStatus = this.$route.params.type;
  },
  watch: {
    // checked: function(val) {
    //   if (val) {
    //     localStorage.setItem("usermessage", JSON.stringify(this.ruleForm));
    //   } else {
    //     localStorage.removeItem("usermessage");
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.login_main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  background: -webkit-linear-gradient();
  .demo-ruleForm {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 500px;
    .confirm_btn {
      width: 100%;
    }
  }
  .forgetHere {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .register_footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>