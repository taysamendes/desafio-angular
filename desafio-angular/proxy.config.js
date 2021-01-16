const proxy = [
    {
      context: '/api',
      target: 'https://combustivelapp.herokuapp.com/api',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;