import Vue from 'vue'
import Router from 'vue-router'
// pc 端 admin
import AdminLoginView from '@/admin/Login';
import AdminRegisterView from '@/admin/Register';
import AdminTaskListView from '@/admin/TaskList';
import AdminCompanyView from '@/admin/Company';
import AdminApplyTaskView from '@/admin/TaskCheck';
import AdminTaskEditView from '@/admin/TaskEdit';
import AdminSalaryView from '@/admin/Salary';
import AdminUserInfoView from '@/admin/UserInfo';
import AdminEmployeeView from '@/admin/EmployeeList';

// 移动端 
import VueRegisterView from '@/vue/Register';
import VueUserView from '@/vue/User';
import VueUserInfoView from '@/vue/Information';
import VueUserHisTaskView from '@/vue/TaskHistory';

import VueHomeTaskListView from '@/vue/TaskList';
import VueHomeTaskDetailView from '@/vue/TaskDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/vue/register/:openid?', name: 'VueRegisterView', component: VueRegisterView },
    { path: '/vue/user', name: 'VueUserView', component: VueUserView },
    { path: '/vue/user/info', name: 'VueUserInfoView', component: VueUserInfoView },
    { path: '/vue/user/historytask', name: 'VueUserHisTaskView', component: VueUserHisTaskView },
    { path: '/vue/home/tasklist', name: 'VueHomeTaskListView', component: VueHomeTaskListView },
    { path: '/vue/home/taskdetail/:id', name: 'VueHomeTaskDetailView', component: VueHomeTaskDetailView },
    { path: '/vue/home', redirect: { name: 'VueHomeTaskListView' } },
    { path: '/vue', redirect: { name: 'VueHomeTaskListView' } },
    { path: '/', redirect: { name: 'VueHomeTaskListView' } },
  ]
})
