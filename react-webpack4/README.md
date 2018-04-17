### weepack4-react多页面配置

```javascript
    //安装依赖
    npm i

    //自动化生成html和入口文件
    npm run devNew

    //开发环境
    npm start

    //生产环境
    npm run build
```
[多页面json配置，点我查看](https://github.com/zyh9/webpack/blob/master/react-webpack4/config/entry/entry.js)

### webpack4 引入eslint代码检查

```javascript
    "eslintConfig": {
        "extends": "react-app",
        "rules": {
            "import/no-webpack-loader-syntax": 0,
            "no-script-url": 0,
            "jsx-a11y/href-no-hash": 2
        }
    }
```
