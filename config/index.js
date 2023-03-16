// var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,//开发模式项目默认启动端口
  }
}
