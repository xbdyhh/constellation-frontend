const {
    createProxyMiddleware
  } = require('http-proxy-middleware')
  
  module.exports = (req, res) => {
    target = 'https://rpc.itn-1.nibiru.fi'
  
    if (req.url.startsWith('/backend')) {
      target = 'https://rpc.itn-1.nibiru.fi'
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        '^/backend/': '/'
      }
    })(req, res)
  }