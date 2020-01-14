### 如何使用webpack一步一步构建react项目
###### 首先 node webpack在你本地已经安装好
建立一个文件夹，配置webpack.config.js文件，先建立基本的入口和出口文件。

```
var path =require('path');
module.exports = {
    //入口文件
    entry:'./app/index.js',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    }
}
```

新建index.html文件，在根目录新建index.html文件，并引入webpack设置中的出口文件，代码如下。


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React全家桶-jspang</title>
</head>
<body>
 
</body>
<!--引入出口文件-->
<script src="./dist/index.js"></script>
</html>
```
测试webpack配置

通过上面的步骤，配置好了wbpack，现在可以测试一下我们webpack配置是否有问题。在路口文件中写入下面的代码，并进行打包测试。

/app/index.js文件


```
function component(){
    var element = document.createElement('div');
    element.innerHTML = ('Hello JSPang');
    return element;
}
 
document.body.appendChild(component());
```
打开package.json文件，在scripts属性中加入build命令。

```
"scripts": {
    "build": "webpack"
  },
```
如果生成一个dist文件，表明已经成功。


为了更好方便开发者调式，我们还需要配置一个实时更新的服务。

```
cnpm install --save-dev webpack-dev-server webpack-cli
```

配置好后再packeage.json里增加一个scripts命令，我们起名叫server。

```
"scripts": {
    "build": "webpack",
    "server": "webpack-dev-server --open"
  },
```
看到结果了。

自动刷新浏览器

在我们修改代码时，现在并不能自动刷新浏览器，不会立即呈现我们编写的代码结果，而时要再次npm run build才可以。其实只要在出口文件配置中加一个publicPath:’temp/’,然后在index.html引入JS时写这个temp地址就可以实时预览了。
```
output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'temp/'
},　　
```
index.html文件引入JS
```
<script src="./temp/index.js"></script>
```
一个较为完整的webpack.config.js文件
```
var path = require('path');
 
 
module.exports = {
    // 入口文件
    entry: './app/index.js',
 
    // 服务器配置
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 1717
    },
 
    // 配置Babel
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
 
    // 出口文件
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: 'temp/'
    }
}
```

由于webpack只支持js文件编译，所以一些css，图片等文件无法编译，所以我们引进了loader，来编译相应的文件。在webpack.config.js文件中

```
 module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
        ]
    }
```

> css文件


```
cnpm install style-loader css-loader --save-dev
```
在module中添加
```
            {
                test:/.css$/,
                use:["style-loader","css-loader"]
            },
```
> 带前缀的css文件（use里面loader从右到左编译，而且顺序不能改变）
```
cnpm install  postcss-loader autoprefixer --save-dev
```
添加以postcss.config.js命令的文件，该文件为postcss的配置文件

```
module.exports={
  plugins: [
    require('autoprefixer')
  ]
}

```


```
{
                test:/.css$/,
                use:["style-loader","css-loader",'postcss-loader']
            },
```
> ES6等高级js语言

目前浏览器还不支持这些ES6、ES7等语言，需要转义。

```
cnpm install babel-loader @babel/preset-env @babel/preset-react  --save-dev
```
编写以.babelrc为命名的文件，为babel-loaderd的配置文件，presets预置

@babel/preset-react：能够转换 JSX 语法；
@babel/preset-env：能够转换一些ES2016，ES2017等语言

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

除去编译node_module文件
```
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
```

> .less文件

```
cnpm install less-loader --save-dev
```


```
            {
                test: /\.less$/i, 
                use: ['style-loader', 'css-loader', 'less-loader']
            },
```
> html文件
```
cnpm install html-loader --save-dev
```

```
            {
                test: /\.html$/,
                use: {
                  loader: 'html-loader'
                }
            },
```
> 一些图片文件

```
cnpm install file-loader --save-dev
```


```
            {
                test:/\.(jpg|png|gif)$/i,
                use:{
                    loader:"file-loader",
                    options: {
                        outputPath: 'images/'
                      }
                }
            }
```


