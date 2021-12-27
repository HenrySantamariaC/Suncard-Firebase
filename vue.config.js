module.exports = {
    publicPath: '/SuncardFirebase/',

    pwa: {
      name: 'SunCard',
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
              args[0].title = "SunCard";
              return args;
          })
  }
}