module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    devDependencies: {
      'svg-sprite-loader': '^5.1.1',
    },
  });

  const isJs = /\.js$/.test(api.entryFile);

  if (isJs) {
    api.render('./template/js');
  } else {
    api.render('./template/ts');
  }

  api.injectImports(api.entryFile, [
    `import '@/svg';`,
    `import SvgIcon from '@/components/SvgIcon.vue';`,
  ]);
};

module.exports.hooks = (api) => {
  api.afterInvoke(() => {
    const { EOL } = require('os');
    const fs = require('fs');
    const contentMain = fs.readFileSync(api.resolve(api.entryFile), {
      encoding: 'utf-8',
    });
    const lines = contentMain.split(/\r?\n/g);

    const renderIndex = lines.findIndex((line) =>
      line.match(/import\sSvgIcon\sfrom\s\'@\/components\/SvgIcon\.vue\'/)
    );
    lines[renderIndex] += `\nVue.component('SvgIcon', SvgIcon);`;

    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' });
  });
};
