import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http: www.baidu.com', // api 的 base_url,一般不设置，因为开发阶段一般都是proxy，生产环境都是nginx设，置了无法没法正常代理
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 这里可能回设置让每个请求携带自定义token 根据实际情况自行修改
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// repose 拦截器
service.interceptors.response.use(
  response => {
    // 这里可以根据返回码做一些事情，如401重登陆什么
    const res = response.data

    return res
  },
  error => {
    console.log('err ' + error)
    return Promise.reject(error)
  }
)
