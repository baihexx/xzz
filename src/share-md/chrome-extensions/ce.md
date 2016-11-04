title: chrome extensions-share
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
## 配置文件
* [manifest.json](http://developer.chrome.com/extensions/manifest)
  (所有插件都需要配置文件，插件的入口)
* manifest_version:配置文件版本 整数2
* name,version，description：插件的名称、版本、描述等信息，在chrome扩展管理、扩展商城中展示的信息就在这里定义
* brower_action: 始终可见
* page_action：通过配置控制是否可见

[slide]
## 基础功能--操作用户正在浏览的页面
<br>
* 操作用户正在浏览的页面 content_scripts
  (操作当前浏览的页面，实际上就是将脚本注入到页面，操作页面的DOM。配置文件中的content_scripts属性，就指定将哪些脚本何时注入到哪些页面中)

[slide]
## 基础功能--跨域请求
<br>
* permissions
  (基于安全的考虑，浏览器不允许进行跨域请求，插件也一样，但是允许通过配置permissions字段来获取跨域的权限)
  例如：
  ![](/1.jpg)

[slide]
## 基础功能--常驻后台
<br>
* 一旦插件被启用，chrome就给插件开辟了一个独立的运行环境，用来跑指定的background script  
  ![](/2.jpg)

[slide]
## 基础功能--选项页面
<br>
* 选项页面：options_page
  （右键--选项按钮有效）

[slide]
## 基础功能--数据存储
<br>
* localStorage
* [Chrome Storage APIS](https://developer.chrome.com/extensions/storage)

[slide]
## 基础功能--页面间的通信
<br>

[slide]
## 注意
<br>
* js、html分开
