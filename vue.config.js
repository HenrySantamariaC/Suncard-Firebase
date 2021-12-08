module.exports = {
    publicPath: '/Cronograma/',

    pwa: {
      name: 'Administrador de pagos',
      themeColor: '#222A3F',
      msTileColor: '#222A3F',
      manifestOptions: {
        background_color: '#222A3F'
      }
    },

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Administrador de pagos";
              return args;
          })
  }
}