---
sidebarDepth: 2
---
# 我是B。md
## 1、正则表达式介绍

正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。           

搜索模式可用于文本搜索和文本替换。



## 2、创建一个正则表达式

1. 使用JavaScript内置对象RegExp创建     

   ```javascript
      // 匹配手机号(chrome 浏览器 -> Developer Tools -> Console)
      var reg1 = new RegExp('1[3-9]\\d{9}', 'g')		=> /1[3-9]\d{9}/g
      var reg2 = new RegExp(/1[3-9]\d{9}/m)			=> /1[3-9]\d{9}/m
      var reg3 = new RegExp(reg1, 'ig')				=> /1[3-9]\d{9}/gi
   ```

   RegExp(pattern, attributes)有两个参数:
