### 生成html和入口文件

	首先在config\entry\entry.js文件配置json

	执行npm run devFile，会自动生成devBuild和entryBuild文件夹

```javascript
	module.exports = [
		{
			name: 'index',
			path: 'index/Index.jsx',
			title: '首页',
			keywords: '首页',
			description: '这是首页页面'
		}
	];
```
