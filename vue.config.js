const webpack = require('webpack')

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/',
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        moment: 'moment',
      })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/variable.scss";
        `
      }
    }
  },
}
