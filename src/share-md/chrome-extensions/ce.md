title: chrome extensions
speaker: xbh

[slide]

# Chrome 扩展开发简介
---
## 辛佰惠
### 2016.11.14

[slide]
## 概念
<br>
* 扩展：扩充或者改变浏览器功能的程序
* chrome扩展：基于webkit浏览器，利用chrome平台提供的接口，对浏览器做更加复杂的操作

[slide]
## 简介
<br>
* 简洁：安装方便，可立即使用，自动更新
* 稳定：独立的进程中运行
* 技术： html，css，js
* 调试：chrome开发者工具

[slide]
## 配置文件--[manifest.json](http://developer.chrome.com/extensions/manifest)
---
* manifest_version:配置文件版本 整数2
* name,version，description：插件的名称、版本、描述等信息，在chrome扩展管理、扩展商城中展示的信息就在这里定义
* brower_action: 始终可见
* page_action：通过配置控制是否可见

[slide]
## 基础功能1--操作用户正在浏览的页面
<br>
* 配置字段：content_scripts
* 指定将哪些脚本何时注入到哪些页面中

[slide]
## 基础功能2--跨域请求
<br>
* 配置字段：permissions  
* 基于安全的考虑，浏览器不允许进行跨域请求， 插件允许通过配置permissions字段来获取跨域的权限  
  ![](/1.jpg)

[slide]
## 基础功能3--常驻后台
<br>
* 配置字段：background
* 一旦插件被启用，chrome就给插件开辟了一个独立的运行环境，用来跑指定的脚本  
  ![](/2.jpg)

[slide]
## 基础功能4--选项页面
<br>
* 配置字段：options_page

[slide]
## 基础功能5--数据存储
<br>
* localStorage
* [Chrome Storage APIS](https://developer.chrome.com/extensions/storage)

[slide]
## 基础功能6--页面间的通信
* c --> b: runtime.sendMessage、runtime.onMessage  
* b --> c: tabs.sendMessage、runtime.onMessage  
![](/3.png)

[slide]
## 注意
<br>
* js、html分开
