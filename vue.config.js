module.exports = {
    publicPath: '/Cronograma/',

    pwa: {
      name: 'Administrador de pagos',
      themeColor: '#1C2135',
      msTileColor: '#1C2135',
      manifestOptions: {
        background_color: '#1C2135'
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