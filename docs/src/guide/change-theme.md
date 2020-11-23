---
title: change-theme
date: 2020-11-23 11:24:55
permalink: /pages/7807da/
categories:
  - src
  - guide
tags:
  - 
---
# 更換 VuePress 使用的主題

```shell script
yarn add vuepress-theme-vdoing -D
```

修改 .vuepress 資料中的 config 檔 , 追加 theme 參數設定 , 指定要使用的 vuepress 主題

```javascript
// .vuepress/config.js
module.exports = {
  ... ,
  theme: 'vuepress-theme-vdoing'
}
```