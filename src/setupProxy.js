const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://44.210.143.154:8080', //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};