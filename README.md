## 缺陷
1. 不能自动添加路径到路由文件中。路由文件中懒加载哪些文件需要手动改，这样的话要是发布带有hash的
    文件就要每次发布都要改动那个加载，非常不方便。可能的解决方案：（1）看看有没有别的插件或者自己
    写插件；（2）使用webpack的requir方式分块文件，然后使用oclazyload或angularAMD的requir方式加载文
    件。偷懒：暂时手动生成了一个hash加上了，以后再找好方法吧。
2. 暂未加入代码压缩。偷懒：先压缩了一下换行什么的，暂时没发现压缩angular的插件，要不就用gulp压缩吧。

## 概览
它是angular的懒加载开发架构，可以方便地划分不同的模块，模块采用懒加载方式进行加载(即跳转到对应页面时才加
载相应的脚本和样式)。使用angular+webpack搭建，使用了angular-ui-router、oclazyload等插件，此外加入了对less
和es6的支持。

## 使用方法
* 安装node和npm
* 安装项目依赖
>npm install
* 按照目录结构和webpack的规则书写模块与对应代码
* 运行编译命令，命令介绍在本文档的最后

## 文件路径
#### 一些比较重要的路径
###### 整个应用所有框架、库、插件等依赖项的入口
src/index/vendor.js
###### 整个应用angular的入口文件
src/index/scripts/ng/index.js
###### html中的老大
src/index.html
###### 路由配置文件
src/index/scripts/ng/config/routerStates.js  
**注意在此文件中，添加懒加载的文件时，文件名后面要跟上[hash]，以匹配文件的hash值。**  
**如：test.js，要写成test[hash].js**
###### 每个模块的入口文件
src/*/scripts/ng/index.js
###### angular代码文件夹
src/*/scripts/ng
###### 样式文件夹，放css与less
src/*/styles
###### angular模板文件夹
src/*/tpls

## 命令
>npm run dev  
//开发时编译代码
  
>npm run devwatch  
//开发时实时监控代码变化并编译代码
  
>npm run devserver  
//开发时创建一个开发用服务，它也可以实时监控代码变化，并在其中运行代码，但是编译出的代码时看不见的
  
>npm run prod  
//生产环境中，发布编译好的代码，此时发布的代码是压缩过的，并带有hash后缀
  
>npm run prodwatch  
//这条命令最好不要用，因为会生成一堆编译好的带有hash值的文件