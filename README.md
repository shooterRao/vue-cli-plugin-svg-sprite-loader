# vue-cli-plugin-svg-sprite-loader

vuecli3 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 插件，让你轻松使用svg图标

## 安装

```
vue add svg-sprite-loader
```

## 使用

```html
<SvgIcon name="xxx" size="大小" />
```

## 组件参数

|参数|描述|类型|
|:---|---|---|
|name|svg图标文件名(必填)|String|
|size|大小|Number|
|color|颜色(单色图标才有效且path不能有fill属性)|String|
|className|类名|String|
