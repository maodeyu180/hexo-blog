---
title: "修复Bad permissions.Try removing permissions for user: BUILTIN"
date: 2024-09-06 16:53:44 
tags: [问题修复]
categories: [问题修复]
top_img: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1076628268.175b4odf7s.webp
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1076628268.175b4odf7s.webp
---

# 问题
权限检测不通过，要求是只能当前用户以及admin跟System账户可以拥有对此文件的操作权限。
我的是.ssh目录下config文件的权限问题。
# 解决方式

- 进入.ssh目录
- 选中config文件右键-属性
- 选中安全-再选择高级
- 关闭继承权限。
- 回到属性界面
- 调整用户权限。
- 只对system,admin跟当前用户设置权限。
