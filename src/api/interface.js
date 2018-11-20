// 你的接口域名地址(更具自己需求配置多个)
const $server = 'http://api.youweb.com'

// 请求api地址(type类型分为 json、fromdata、multipart)
// 获取用户信息
const getUserInfo = { type: 'json', baseUrl: $server, api: '/user/info' }

export default {
  $server,
  getUserInfo
}
