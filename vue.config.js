module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  configureWebpack: {
    resolve: {
      symlinks: false,
    },
    module: {
      rules: [
        {
          test: /\.(docx)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'public/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  },

  transpileDependencies: ['vuetify'],
}
