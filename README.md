Face
===
[亚信](http://www.asiainfo.com)，北研一组前端项目脚手架工程模板  
简化前端项目的初始化配置，统一开发方式和技术规范。  
该脚手架工程，基于node.js开发，使用grunt做构建工具，集成了expree的HTTP server

##Download
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/wu/face/master/dist/face.min.js
[max]: https://raw.github.com/wu/face/master/dist/face.js

##Dependencies
> node.js
> express.js
> grunt.js

##Futures
1.集成express
* 支持基于AMD规范的模块化开发
* 支持js合并、校验、压缩、qunit测试等
* 支持css预编译语言less
* 支持css的压缩
* 支持图标文件合并成雪碧图（Sprite）
* 支持git源码管理
* 支持文件监听，自动重新构建项目


## Documentation
_(Coming soon)_
###初始化配置
下载解压后，进入项目目录，修改package.json中的项目基本信息，然后运行如下命令安装相关包
  npm install
###启动内置server
windows
  set DEBUG=project_name & npm start
linux/unix and Mac
  DEBUG=project_name npm start
###运行grunt
运行grunt命令，完成构建任务，项目根目录下运行命令
  grunt dev *//其他任务请参考Gruntfile*
###监视文件变化，自动构建
  grunt watch *//具体执行的任务，可以在Gruntfile文件中定制*

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
