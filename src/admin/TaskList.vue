<template>
  <div class="task_amin layout">
    <div class="task_amin_form">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item label="任务名称">
          <el-input v-model="formInline.taskName" placeholder="任务名称"></el-input>
        </el-form-item>
        <el-form-item label="任务状态">
          <el-select v-model="formInline.taskStatus" placeholder="任务状态">
            <el-option label="草稿" value="1"></el-option>
            <el-option label="️已发布" value="2"></el-option>
            <el-option label="已满员" value="3"></el-option>
            <el-option label="进行中" value="4"></el-option>
            <el-option label="已结束" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务时间">
          <el-col :span="10">
            <el-form-item>
              <el-date-picker
                type="date"
                placeholder="选择开始日期"
                v-model="formInline.startTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="10">
            <el-form-item>
              <el-date-picker
                placeholder="选择结束日期"
                v-model="formInline.endTime"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetForm('formInline')">重置</el-button>
          <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        taskName: undefined,
        taskStatus: undefined,
        startTime: undefined,
        endTime: undefined
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      console.log(this.formInline);
      this.$refs[formName].clearValidate();
        console.log(this.formInline);
    }
  }
};
</script>

