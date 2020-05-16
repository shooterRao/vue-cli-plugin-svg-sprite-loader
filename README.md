# vue-cli-plugin-svg-sprite-loader

vuecli3 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 插件，让你轻松使用svg图标

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
|size|大小|Number|
|color|颜色(单色图标才有效且path不能有fill属性)|String|
|className|类名|String|

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
      // default: { symbolId: 'icon-[name]' }
      options: {}
    }
  }
}
```

## 版本更新

### 1.0.2

- 新增svg图标预览页面