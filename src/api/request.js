/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import QS from "qs";
const instance1 = axios.create();

// 环境的切换
if (process.env.NODE_ENV === "development") {
  instance1.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "debug") {
  instance1.defaults.baseURL = "/api";
} else if (process.env.NODE_ENV === "production") {
  instance1.defaults.baseURL = "";
}

// 请求超时时间
instance1.defaults.timeout = 10000;

// post请求头
instance1.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
instance1.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

// 响应拦截器
instance1.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          console.error("未登录");
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          console.error("登录过期对用户进行提示");
          break;
        // 404请求不存在
        case 404:
          console.error("404请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          console.error("其他错误");
      }
      return Promise.reject(error.response);
    }
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance1
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance1
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
