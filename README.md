# digo-autoprefixer
[digo](https://github.com/digojs/digo) 插件：使用 [AutoPrefixer](https://github.com/postcss/autoprefixer) 追加 CSS 属性前缀。

如果您还需要使用 [PostCSS](https://github.com/postcss/postcss) 的其它功能，建议使用 [digo-postcss](https://github.com/digojs/digo-postcss) 插件。

## 安装
```bash
npm install digo-autoprefixer -g
```

## 用法
### 追加 CSS 属性前缀
```js
digo.src("*.css").pipe("digo-autoprefixer");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js
digo.src("*.css").pipe("digo-autoprefixer", {
	browsers: [], 	    // 支持的浏览器列表。如 [">5%"]。具体见[浏览器列表](https://github.com/ai/browserslist#queries)
	cascade: true, 	    // 如果 CSS 未压缩，则用法 Visual Cascade。
	add: true, 		    // 是否追加前缀。
	remove: true, 	    // 是否删除过期的前缀。
	supports: true,     // 是否为 @supports 参数追加前缀。
	flexbox: true, 	    // 可以是布尔或字符串。是否追加 flexbox 属性前缀。如果设置为 "no-2009" 表示只为最终 IE 版本规范追加。
	grid: true, 	    // 是否在列布局属性中追加 IE 前缀。
	stats: null, 	    // 自定义浏览器用法率。
	from: "",			// 源文件路径。*
	to: "",				// 目标文件路径。*
	map: null,			// 是否生成源映射。具体见 [map](https://github.com/postcss/postcss/blob/master/docs/source-maps.md)。*
	parser: null,		// 自定义 CSS 解析器。如 [SCSS](https://github.com/postcss/postcss-scss)。
	stringifier: null,	// 自定义 CSS 生成器。如 [Midas](https://github.com/ben-eb/midas)。
	syntax: null,		// 同时包含 parser 和 stringifier 的 JSON 对象。
});
```

> *: 插件内部已重设了此选项的默认值。

另参考: https://github.com/postcss/autoprefixer#options
