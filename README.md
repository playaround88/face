Face
===
[亚信](http://www.asiainfo.com)，北研一组前端项目脚手架工程模板  
简化前端项目的初始化配置，统一开发方式和技术规范。  
该脚手架工程，基于node.js开发，使用grunt做构建工具，集成了expree的HTTP server

##Download
Download
> git clone https://github.com/playaround88/face.git  

##Dependencies
> node.js  
> express.js  
> grunt.js  

##Futures
1. 集成express
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
> npm install

###启动内置server
windows:  
> set DEBUG=project_name & npm start

linux/unix and Mac:  
> DEBUG=project_name npm start

###运行grunt
运行grunt命令，完成构建任务，项目根目录下运行命令  
> grunt dev //其他任务请参考Gruntfile

###监视文件变化，自动构建
> grunt watch //具体执行的任务，可以在Gruntfile文件中定制

## Examples
_(Coming soon)_
###js校验、合并、压缩、qunit测试
在js_common中完成通用js的编写，然后可以运行如下命令来完成校验、合并、压缩、测试，也可以分别运行单独功能命令  
> grunt js
> grunt jshint //校验
> grunt concat //合并
> grunt uglify //压缩
> grunt qunit //测试

###less编译、压缩
在根目录下的less目录添加自己的less代码，运行如下命令完成编译压缩，也可以分别运行单独功能命令
> grunt css
> grunt less
> grunt cssmin

###图标文件合并、生成css
在静态资源目录中的icon目录中添加对应的*.png图标文件，然后运行如下命令，查看效果  
> grunt sprite

###监视文件变化
每次修改都要去命令行执行命令完成构建太麻烦？可以监视文件变化，自动完成构建工作！
> grunt watch

## Release History
_**~1.0.0** at 2015-11-25_
