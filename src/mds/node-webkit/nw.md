title: NW.js-share
speaker: xbh

[slide]

# 基于NW.js的桌面应用开发
## 辛佰惠
### 2016.08.17

[slide]
# 是什么

* 基于node.js和chromium的应用程序实时运行环境，可运行通过HTML(5)、CSS(3)、Javascript来编写的本地应用程序
  - webkit: DOM操作
  - nodejs: 本地化操作

* 概览图

![](/def.jpg)

[slide]
# 特性
----
* 用流行的 HTML5, CSS3, JS 和 WebGL 来编写本地应用软件
* 高性能: Node and WebKit 运行在同一个线程: 函数调用会非常的简单
* 方便的打包和发布应用
* Linux, Mac OSX 和 Windows 全平台支持

[slide]
# 应用
* 英特尔公司的开源项目: https://github.com/rogerwang/node-webkit
* [使用 NW.js 的软件和公司列表](https://github.com/nwjs/nw.js/wiki/List-of-apps-and-companies-using-nw.js)
* [demo库](https://github.com/zcbenz/nw-sample-apps)
* 阿里巴巴的钉钉客户端

[slide]
# 基本程序结构
![](/structure.jpg)

[slide]
* 配置文件package.json
![](/packagejson.jpg)

[slide]
# Hello World!
* 配置文件: package.json
* 起始页面: index.html

[slide]
# [打包&发布](https://github.com/nwjs/nw.js/wiki/How-to-package-and-distribute-your-apps)
* 打包：以win为例
  - 源文件压缩到一个zip文件中
  - zip文件重命名为.nw
  - win: copy /b nw.exe+hw.nw hw.exe
* 发布：.exe文件和部分dll文件共同发布
  - icudt.dll:网络库
  - ffmpegsumo.dll: 多媒体库
  - libEGL.dll、libGLESv2.dll：WebGL and GPU加速
