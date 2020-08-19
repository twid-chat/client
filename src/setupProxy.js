const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:4001',
      changeOrigin: true,
    }),
  );
  app.use(
    '/socket',
    createProxyMiddleware({
      target: 'http://localhost:4002',
      ws: true,
    }),
  );
};
