const fs = require('fs');

module.exports = (api, options, rootOptions) => {
  // 安装 svg-sprite-loader
  api.extendPackage({
    devDependencies: {
      'svg-sprite-loader': '^4.1.6'
    }
  });

  api.render('./template');

  // 修改 main.js
  try {
    const mainPath = api.resolve('src/main.js');
    const mainExists = fs.existsSync(mainPath);
    if (!mainExists) {
      throw new Error('No entry found!');
    }

    api.injectImports('src/main.js', [`import '@/svg';`]);

    try {
      api.onCreateComplete(() => {
        const injectLines = `\nimport SvgIcon from '@/components/SvgIcon';\n\nVue.component('SvgIcon', SvgIcon);`;
        let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' });
        const lines = contentMain.split(/\r?\n/g).reverse();
        const lastImportIndex = lines.findIndex(line => line.match(/^import/));
        lines[lastImportIndex] += injectLines;
        contentMain = lines.reverse().join('\n');
        fs.writeFileSync(mainPath, contentMain, { encoding: 'utf-8' });
      })
    } catch (error) {
      api.exitLog(error);
    }
    
  } catch (e) {
    api.exitLog('Can not find main.js!');
  }

};
