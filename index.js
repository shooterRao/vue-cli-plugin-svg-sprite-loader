module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    // use svg
    webpackConfig.module
      .rule('svg')
      .exclude.add(api.resolve('src/svg'))
      .end();
    // icon
    webpackConfig.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(api.resolve('src/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  });
};
