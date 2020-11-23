---
title: 建立你的第一個 VuePress 網誌
date: 2020-11-23 11:14:33
permalink: /guide/dbef1f/
categories:
  - src
  - guide
tags:
  - 
---
# 建立你的 VuePress 網誌與發表第一篇文章

如果我們想要每周撰寫一些技術文章 , 並將文章收錄在個人網誌中 , 我們需要如何處理呢 ?

既然我們已經使用 Vue.JS , 那就讓我們來使用 VuePress 當我們的網誌架站工具吧 !

## 安裝

利用 yarn create 將 VuePress 模板下載下來 , 

```shell script
yarn create vuepress-site [optionalDirectoryName]
```

You will then have the opportunity to configure your VuePress site’s metadata such as:

- Project Name
- Description
- Maintainer Email
- Maintainer Name
- Repository URL

在執行過程中 , 你可能會看到下述問題 , 這時您可以輸入個人網站的站台訊息

```
🔹 What's the name of your project? [project_name]
🔹 What's the description of your project? [project_description]
🔹 What's your email? [your_email]
🔹 What's your name? [your_name]
🔹 What's the repo of your project? https://github.com/[project_repo].git
```

新增一個 xxx.md 檔案 , 到 guide 資料夾底下 , 之後就會出現一篇 xxx 的文章

