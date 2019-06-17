<template>
  <div class="company layout">
    <el-form
      label-position="top"
      status-icon
      :model="formLabelAlign"
      :rules="rules"
      ref="formLabelAlign"
      class="demo-ruleForm"
    >
      <el-form-item label="企业Logo" prop="companyLogo">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="formLabelAlign.companyLogo" :src="formLabelAlign.companyLogo" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="formLabelAlign.companyName"></el-input>
      </el-form-item>
      <el-form-item label="企业网址" prop="companyNet">
        <el-input v-model="formLabelAlign.companyNet"></el-input>
      </el-form-item>
      <el-form-item label="企业电话" prop="companyPhone">
        <el-input type="companyPhone" v-model.number="formLabelAlign.companyPhone"></el-input>
      </el-form-item>
      <el-form-item label="企业邮箱" prop="companyEmail">
        <el-input v-model="formLabelAlign.companyEmail"></el-input>
      </el-form-item>
      <el-form-item label="企业地址" prop="companyAdress">
        <el-input v-model="formLabelAlign.companyAdress"></el-input>
      </el-form-item>
      <el-form-item label="企业法人" prop="companyLegal">
        <el-input v-model="formLabelAlign.companyLegal"></el-input>
      </el-form-item>
      <el-form-item label="统一社会信用代码" prop="companyCode">
        <el-input v-model="formLabelAlign.companyCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
        <el-button type="primary" @click="submitForm('formLabelAlign')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        companyName: undefined,
        companyNet: undefined,
        companyPhone: undefined,
        companyEmail: undefined,
        companyAdress: undefined,
        companyLegal: undefined,
        companyCode: undefined,
        companyLogo: undefined
      },
      rules: {
        companyLogo: [
          {
            required: true,
            message: "请上传企业logo",
            trigger: ["blur", "change"]
          }
        ],
        companyName: [
          {
            required: true,
            message: "请输入企业名称",
            trigger: ["blur", "change"]
          },
          {
            min: 1,
            max: 20,
            message: "长度在 1 到 20 个字符",
            trigger: ["blur", "change"]
          }
        ],
        companyNet: [
          {
            required: true,
            message: "请输入企业网址",
            trigger: ["blur", "change"]
          }
        ],
        companyPhone: [
          {
            required: true,
            message: "请输入企业电话",
            trigger: ["blur", "change"]
          },
          {
            type: "number",
            message: "企业电话应为数字值",
            trigger: ["blur", "change"]
          }
        ],
        companyEmail: [
          {
            required: true,
            message: "请输入企业邮箱",
            trigger: ["blur", "change"]
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        companyAdress: [
          {
            required: true,
            message: "请输入企业地址",
            trigger: ["blur", "change"]
          }
        ],
        companyLegal: [
          {
            required: true,
            message: "请输入企业法人",
            trigger: ["blur", "change"]
          }
        ],
        companyCode: [
          {
            required: true,
            message: "请输入统一社会信用代码",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.formLabelAlign);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.formLabelAlign.companyLogo = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.demo-ruleForm {
  min-width: 640px;
  width: 80%;
}
</style>


