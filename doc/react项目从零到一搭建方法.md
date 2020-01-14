### react从零到一个项目
> #### create-react-app
使用react脚手架，更多的构建一个完整的react项目，create-react-app将webpack的相关配置直接封装好了，所以自定制化程度不高。

```
# 全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app
cd my-app

# 启动编译当前的React项目，并自动打开 http://localhost:3000/
npm start
```
#### 项目目录

```
├── package.json
├── public                  # 这个是webpack的配置的静态目录
│   ├── favicon.ico
│   ├── index.html          # 默认是单页面应用，这个是最终的html的基础模板
│   └── manifest.json
├── src
│   ├── App.css             # App根组件的css
│   ├── App.js              # App组件代码
│   ├── App.test.js
│   ├── index.css           # 启动文件样式
│   ├── index.js            # 启动的文件（开始执行的入口）！！！！
│   ├── logo.svg
│   └── serviceWorker.js
└── yarn.lock
```
> #### 构建：generator-react-webpack

```
npm install -g yo   # 在全局安装generator-react-webpack之前，先安装yeoman
npm install -g generator-react-webpack
　　

mkdir new-react-democd new-react-demoyo react-webpacknpm start
```
> #### webpack一步一步构建
本博客采用webpack一步一步构建，具体操作步骤，看下一个md文档