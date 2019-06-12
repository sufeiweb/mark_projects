import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import AdminLoginView from '@/admin/Login';
import AdminRegisterView from '@/admin/Register';
import AdminTaskListView from '@/admin/TaskList';
import AdminCompanyView from '@/admin/Company';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/admin/register/:type?', name: 'AdminRegisterView', component: AdminRegisterView },
    { path: '/admin/task', name: 'AdminTaskListView', component: AdminTaskListView },
    { path: '/admin/login', name: 'AdminLoginView', component: AdminLoginView },
    { path: '/admin/company', name: 'AdminCompanyView', component: AdminCompanyView },
    { path: '/', redirect:{name:'AdminLoginView'} },
  ]
})
