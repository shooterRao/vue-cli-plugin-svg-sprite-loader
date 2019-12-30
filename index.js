module.exports = (api, projectOptions) => {

  // 支持外部自定义配置 svg-sprite-loader
  const svgSpriteLoaderOpts = projectOptions.pluginOptions
    ? projectOptions.pluginOptions.svgSpriteLoader || {}
    : {};

  const svgDir = svgSpriteLoaderOpts.dir || api.resolve('src/svg');
  const svgTest = svgSpriteLoaderOpts.test || /\.svg$/;

  const svgLoaderOpts = svgSpriteLoaderOpts.options || {
    symbolId: 'icon-[name]'
  };

  api.chainWebpack(webpackConfig => {
    // use svg
    webpackConfig.module
      .rule('svg')
      .exclude.add(svgDir)
      .end();
    // icon
    webpackConfig.module
      .rule('icon')
      .test(svgTest)
      .include.add(svgDir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options(svgLoaderOpts)
      .end();
  });
};
