import http from 'axios'
import bus from '../bus/index'

// import Loading from '../components/loading/index'
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 当请求准备发出去显示 loading
  bus.$emit('changeLoadingStatus', true)
  // Loading.createLoading({
  //   msg: '就是干！！',
  //   fn() {
  //     alert('abc')
  //   }
  // });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  bus.$emit('changeLoadingStatus', false)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http;
