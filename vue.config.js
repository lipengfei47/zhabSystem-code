const path = require('path')

function join(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 资源根路径
  publicPath: './',
  lintOnSave: false,
  // 调整 webpack 配置
  chainWebpack: config => {
    config.module
      .rule('svg')
      .include.add(join('src/components/svg-icon/svg'))
      .end()
      .test(/\.svg$/)
      .use('file-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.resolve.alias
      .set('views', join('src/views'))
      .set('utils', join('src/utils'))
      .set('assets', join('src/assets'))
      .set('components', join('src/components'))
  },
  // 调整 webpack 配置
  configureWebpack: config => {
    config.externals = {
      echarts: 'echarts'
    }
  }
}
