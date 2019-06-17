import Vue from 'vue'
import Router from 'vue-router'

import AdminLoginView from '@/admin/Login';
import AdminRegisterView from '@/admin/Register';
import AdminTaskListView from '@/admin/TaskList';
import AdminCompanyView from '@/admin/Company';
import AdminApplyTaskView from '@/admin/TaskCheck';
import AdminTaskEditView from '@/admin/TaskEdit';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/admin/register/:type?', name: 'AdminRegisterView', component: AdminRegisterView },
    { path: '/admin/task', name: 'AdminTaskListView', component: AdminTaskListView },
    { path: '/admin/login', name: 'AdminLoginView', component: AdminLoginView },
    { path: '/admin/apply/task/:id?', name: 'AdminApplyTaskView', component: AdminApplyTaskView },
    { path: '/admin/company', name: 'AdminCompanyView', component: AdminCompanyView },
    { path: '/admin/edit/task/:type?/:id?', name: 'AdminTaskEditView', component: AdminTaskEditView },
    { path: '/', redirect: { name: 'AdminLoginView' } },
  ]
})
