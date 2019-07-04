import AuthProvider from './AuthProvider';
import { Axios } from './Axios';
import { API_PATH } from './OriginName';
import { inTaskData } from "../utils/util";

function authsecApi(url, data, type) {
  return AuthProvider.getAccessToken().then(token => {
    return Axios(API_PATH + url, { type: 'bearer', value: token }, data, type);
  })
}

// 获取通过微信鉴权code获取用户是否存在
export const apiVueCheckCode = data => {
  return Axios(API_PATH + '/api/noauth/check/user/wxcode?wxcode=' + data, null, null, "GET");
}
// export const apiVueCheckCode = data => {
//   return authsecApi('/api//noauth/check/user/wxcode?', data, "GET");
// }

// 微信注册用户
export const apiVueRegister = data => {
  return Axios(API_PATH + '/api/noauth/register/user', null, data, "POST");
}

// vue 用户获取任务列表
export const apiVueTaskList = data => {
  return authsecApi(`/api/authsec/task/tasklist`, data, "POST");
}
// vue 用户获取历史任务列表
export const apiVueTaskHistoryList = data => {
  return authsecApi(`/api/authsec/task/history/tasklist`, data, "POST");
}
// vue 用户获取任务详情
export const apiVueTaskDetail = data => {
  return authsecApi(`/api/authsec/task/detail?id=${data}`, null, "GET");
}
// vue 用户申请、取消申请任务
export const apiVueTaskOption = data => {
  return authsecApi(`/api/authsec/task/apply/action`, data, "POST");
}