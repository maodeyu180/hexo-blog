---
title: "SSH 链接信息展示"
date: 2024-10-15 10:29:05 
tags: [linux,ssh]
categories: [脚本分享]
cover: https://LinMoste.github.io/picx-images-hosting/wall/TUAPI-EEES-CC--587681860.8ojmb5r5kj.webp
---

# SSH连接后设备信息展示脚本

## 如何使用 
## 使用方式：
- 获取su权限  su  或 sudo -s
- 执行下列命令

  海外服务器
  ```shell
  curl -sSL https://raw.githubusercontent.com/maodeyu180/ssh_hello/main/ssh_info.sh | bash
  ```
  国内服务器

  ```shell
  curl -sSL https://mirror.ghproxy.com/https://raw.githubusercontent.com/maodeyu180/ssh_hello/main/ssh_info.sh | bash
  ```
## 效果展示
![ssh效果](https://img.maodeyu.fun/blog/ssh_info_screent.webp)