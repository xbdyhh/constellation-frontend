const { createProxyMiddleware } = require('http-proxy-middleware')

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  let target = ''
  if (req.url.startsWith('/rpc')) {
      target = 'https://rpc.itn-1.nibiru.fi'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
          '^/rpc/': '/',
      },
  })(req, res)
}

module.exports = allowCors(handler)
