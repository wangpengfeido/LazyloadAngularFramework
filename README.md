##缺陷
1. 不能自动添加路径到路由文件中。路由文件中懒加载哪些文件需要手动改，这样的话要是发布带有hash的
    文件就要每次发布都要改动那个加载，非常不方便。可能的解决方案：（1）看看有没有别的插件或者自己
    写插件；（2）使用webpack的requir方式分块文件，然后使用oclazyload或angularAMD的requir方式加载文
    件。

## 文件路径
#### 一些比较重要的路径
###### 整个应用所有框架、库、插件等依赖项的入口
src/index/dependent.js
###### 整个应用angular的入口文件
src/index/scripts/ng/index.js
###### html中的老大
src/index.html
###### 路由配置文件
src/index/scripts/ng/config/routerStates.js
###### 每个模块的入口文件
src/*/scripts/ng/index.js
###### angular代码文件夹
src/*/scripts/ng
###### 样式文件夹，放css与less
src/*/styles
###### angular模板文件夹
src/*/tpls

## 命令