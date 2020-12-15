module.exports = (api, options, rootOptions) => {

  api.extendPackage({
    devDependencies: {
      'svg-sprite-loader': '^5.1.1',
    },
  });

  api.render('./template');

  try {
    api.injectImports(api.entryFile, [
      `import '@/svg';`,
      `import SvgIcon from '@/components/SvgIcon';`,
    ]);
  } catch (e) {
    api.exitLog('Can not find main.js!');
  }
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
      line.match(/import\sSvgIcon\sfrom\s\'@\/components\/SvgIcon\'/)
    );
    lines[renderIndex] += `\nVue.component('SvgIcon', SvgIcon);`;

    fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' });
  });
};
