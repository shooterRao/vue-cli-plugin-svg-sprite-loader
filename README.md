# vue-cli-plugin-svg-sprite-loader

vuecli3 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 插件，让你轻松使用svg图标

[example](https://github.com/shooterRao/vue-cli-plugin-svg-sprite-loader-example)

## 安装

```
vue add svg-sprite-loader
```

## 使用

```html
<SvgIcon name="vue" />
```

## 组件参数

|参数|描述|类型|
|:---|---|---|
|name|svg图标文件名(必填)|String|
|size|大小(支持rem，比如直接写12rem)|Number or String|
|color|颜色(单色图标才有效且path不能有fill属性)|String|
|width|svg宽度|String|
|height|svg高度|String|

## svg-sprite-loader 插件参数自定义

在**vue.config.js**：

```javascript
module.exports = {
  pluginOptions: {
    svgSpriteLoader: {
      // directory
      dir: path.resolve(__dirname, 'src/icon'),
      // test rule
      test: /\.svg$/,
      // https://github.com/JetBrains/svg-sprite-loader#configuration
      options: {
        symbolId: 'icon-[name]'
      }
    }
  }
}
```

## 版本更新

### 1.0.2

- 新增svg图标预览页面

### 1.0.3

- 移除className属性，使用vue自带class合并写法
- 新增width、height属性，支持自定义宽高
- size支持rem

### 2.0.0

- 升级 svg-sprite-loader 为**5.1.x**版本

### 2.0.1

- 自动检测开发环境是js还是ts，注入不同的模板