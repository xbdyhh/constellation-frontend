const {
    createProxyMiddleware
  } = require('http-proxy-middleware')
  
  module.exports = (req, res) => {
    target = ''
  
    if (req.url.startsWith('/backend')) {
      target = 'https://rpc.itn-1.nibiru.fi'
      reg = {'^/backend/': '/'}
    }
    if (req.url.startsWith('/LCD')){
        target = 'https://lcd.itn-1.nibiru.fi'
        reg = {'^/LCD/': '/'}
    }
    // 创建代理对象并转发请求
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: req
    })(req, res)
  }