<template>
  <div class="apply_task_main layout">
    <div class="apply_task_main_from">
      <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="formInline.username" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="usergender">
          <el-select v-model="formInline.usergender" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formInline.status" placeholder="请选择状态">
            <el-option label="待处理" value="1"></el-option>
            <el-option label="已接受" value="2"></el-option>
            <el-option label="已拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetForm('formInline')">重置</el-button>
          <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="apply_task_main_header" v-if="applyId">
      <section>
        <span>任务名称：</span>
        <span>{{taskHeader.taskName}}</span>
      </section>
      <section>
        <span>任务时间：</span>
        <span>{{taskHeader.startTime | formatTimeAll}} 至 {{taskHeader.endTime | formatTimeAll}}</span>
      </section>
      <section>
        <span>地点：</span>
        <span>{{taskHeader.taskAdress}}</span>
      </section>
    </div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div
        v-if="multipleSelection.length"
        class="apply_task_main_pagination apply_task_main_footer"
      >
        <el-button size="small" type="primary" plain @click.stop="acceptApply(null,null,'all')">接受</el-button>
        <el-button size="small" type="danger" plain @click.stop="rejectApply(null,null,'all')">拒绝</el-button>
      </div>
    </transition>
    <div class="apply_task_main_table">
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="applyId ? taskHeader.applyList : applyList"
        border
        style="width:100%"
        max-height="596"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="序号" prop="id"></el-table-column>
        <el-table-column v-if="!applyId" label="任务名称" prop="taskName" width="200"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="职业" prop="professional"></el-table-column>
        <el-table-column label="联系电话" prop="phoneNumber" width="120"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span>{{scope.row.status | applyStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="120">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              v-if="scope.row.status ==1"
              @click.stop="acceptApply(scope.row.status,scope.row.id)"
            >接受</el-button>
            <el-button
              style="color:red"
              type="text"
              size="small"
              v-if="scope.row.status != 3"
              @click.stop="rejectApply(scope.row.status,scope.row.id)"
            >拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="apply_task_main_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="pageInfo.currentPage"
        :total="pageInfo.totalNum"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applyId: undefined,
      formInline: {},
      applyList: [],
      taskHeader: {
        taskName: "迪拜收垃圾",
        startTime: 1560395075423,
        endTime: 1560481493046,
        taskAdress: "迪拜阿联酋诸岛",
        applyList: [
          {
            id: 1,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 1
          },
          {
            id: 2,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 2
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 4,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 5,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 6,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 7,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 8,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 9,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 10,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          },
          {
            id: 3,
            name: "张三",
            gender: "男",
            age: 25,
            professional: "未知",
            phoneNumber: 18812345678,
            status: 3
          }
        ]
      },
      pageInfo: {
        totalNum: 200,
        currentPage: 5
      },
      multipleSelection: []
    };
  },
  mounted() {
    // 根据是否有id 来判断 业务类型 加载全部还是加载部分
    this.applyId = this.$route.params.id;
  },
  methods: {
    submitForm(formName) {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    acceptApply(status, id, type) {
      // 接受apply
      console.log(status, id, type);
    },
    rejectApply(status, id, type) {
      // 拒绝apply
      console.log(status, id, type);
    },
    changePage(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.apply_task_main {
  .apply_task_main_from {
    margin-bottom: 10px;
  }
  .apply_task_main_header {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    > section {
      font-size: 16px;
      margin-right: 40px;
      margin-bottom: 10px;
      > span {
        &:nth-of-type(1) {
          color: #333;
        }
        &:nth-of-type(2) {
          color: #999;
        }
      }
    }
  }
  .apply_task_main_table {
    margin-bottom: 20px;
  }
  .apply_task_main_pagination {
    width: 100%;
    text-align: right;
  }
  .apply_task_main_footer {
    margin-bottom: 10px;
  }
}
</style>


