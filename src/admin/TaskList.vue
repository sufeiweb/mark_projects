<template>
  <div class="task_amin layout">
    <div class="task_amin_form">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item label="任务名称" prop="taskName">
          <el-input v-model="formInline.taskName" placeholder="任务名称"></el-input>
        </el-form-item>
        <el-form-item label="任务状态" prop="taskStatus">
          <el-select v-model="formInline.taskStatus" placeholder="任务状态">
            <el-option label="草稿" value="1"></el-option>
            <el-option label="️已发布" value="2"></el-option>
            <el-option label="已满员" value="3"></el-option>
            <el-option label="进行中" value="4"></el-option>
            <el-option label="已结束" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地点" prop="taskAdress">
          <el-select v-model="formInline.taskAdress" placeholder="地点">
            <el-option label="上海市" value="1"></el-option>
            <el-option label="温州市" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务时间">
          <el-col :span="10">
            <el-form-item prop="startTime">
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
            <el-form-item prop="endTime">
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
    <div class="task_main_add">
      <el-button type="primary" @click.stop="editTask('create')">新增</el-button>
    </div>
    <el-table :data="taskList" border style="width:100%">
      <el-table-column label="序号" prop="id" width="100"></el-table-column>
      <el-table-column label="名称" prop="taskName" width="100"></el-table-column>
      <el-table-column label="开始时间" prop="startTime" :formatter="this.formatterTime" width="180"></el-table-column>
      <el-table-column label="结束时间" prop="endTime" :formatter="this.formatterTime" width="180"></el-table-column>
      <el-table-column label="地点" prop="taskAdress" width="300"></el-table-column>
      <el-table-column label="所需人数" prop="taskNeed" width="100"></el-table-column>
      <el-table-column label="已接人数" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.oldNeed}}</span>
          <span class="taskDetail" @click.stop="go2TaskDetail(scope.row.id)">(点击查看详情)</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.status | taskStatus}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="260">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            v-if="scope.row.status == 1"
            @click.stop="editTask('update',scope.row.id)"
          >编辑</el-button>
          <el-button
            type="text"
            size="small"
            v-if="scope.row.status == 1"
            @click.stop="releaseTask(scope.row.id)"
          >发布</el-button>
          <el-button
            type="text"
            size="small"
            v-if="scope.row.status == 2 || scope.row.status == 3"
            style="color:orange"
            @click.stop="cancelTask(scope.row.id)"
          >取消</el-button>
          <el-button
            type="text"
            size="small"
            v-if="scope.row.status  == 1 || scope.row.status  == 5"
            @click.stop="deteleTask(scope.row.id)"
            style="color:red"
          >删除</el-button>
          <el-button type="text" size="small" @click.stop="copyTask(scope.row.id)">复制</el-button>
          <el-button
            type="text"
            v-if="scope.row.status != 1"
            size="small"
            @click.stop="viewTask(scope.row.id)"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
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
        endTime: undefined,
        taskAdress: undefined
      },
      taskList: []
    };
  },
  mounted() {
    this.getTaskListData();
  },
  methods: {
    submitForm(formName) {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    editTask(type, id) {
      // 编辑
      let url = id
        ? `/admin/edit/task/${type}/${id}`
        : `/admin/edit/task/${type}`;
      this.$router.push(url);
    },
    releaseTask(id) {
      // 发布
      console.log(id);
    },
    cancelTask(id) {
      // 取消
      console.log(id);
    },
    deteleTask(id) {
      // 删除
      console.log(id);
    },
    copyTask(id) {
      // 复制
      this.$router.push(`/admin/edit/task/create/${id}`);
    },
    viewTask(id) {
      // 查看
      console.log(id);
    },
    getTaskListData() {
      let taskList = [
        {
          id: "1",
          taskName: "XXX",
          startTime: 1560326333876,
          endTime: 1560412779281,
          taskAdress: "上海市",
          taskNeed: 20,
          oldNeed: 10,
          status: 1
        },
        {
          id: "2",
          taskName: "XXX",
          startTime: 1560326333876,
          endTime: 1560412779281,
          taskAdress: "上海市",
          taskNeed: 20,
          oldNeed: 10,
          status: 2
        },
        {
          id: "3",
          taskName: "XXX",
          startTime: 1560326333876,
          endTime: 1560412779281,
          taskAdress: "上海市",
          taskNeed: 20,
          oldNeed: 10,
          status: 3
        },
        {
          id: "3",
          taskName: "XXX",
          startTime: 1560326333876,
          endTime: 1560412779281,
          taskAdress: "上海市",
          taskNeed: 20,
          oldNeed: 10,
          status: 4
        },
        {
          id: "3",
          taskName: "XXX",
          startTime: 1560326333876,
          endTime: 1560412779281,
          taskAdress: "上海市",
          taskNeed: 20,
          oldNeed: 10,
          status: 5
        }
      ];
      this.taskList = taskList;
    },
    formatterTime(row, column) {
      var DateNew = new Date(row[column.property]);
      var Y = DateNew.getFullYear();
      var M = DateNew.getMonth() + 1;
      var D = DateNew.getDate();
      var h = DateNew.getHours();
      var m = DateNew.getMinutes();
      var s = DateNew.getSeconds();
      function fullZero(val) {
        return val < 10 ? "0" + val : "" + val;
      }
      return (
        [Y, M, D].map(fullZero).join("-") +
        "  " +
        [h, m, s].map(fullZero).join(":")
      );
    },
    go2TaskDetail(id) {
      this.$router.push("/admin/apply/task/" + id);
    }
  }
};
</script>
<style lang="scss" scoped>
.task_amin {
  .task_main_add {
    padding: 10px 0;
  }

  .taskDetail {
    color: #01aaef;
    opacity: 1;
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>


