---
title: "CF 优选IP Worker配置与saas回源配置"
date: 2024-10-12 13:53:36 
tags: [CloudFlare,优选IP]
categories: [搞七搞八]
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1061558002.45hl86lop0.webp
---
# CF 优选IP Worker配置与saas回源配置

> cloudflare优选IP汇总更新：
>
> 104.19.37.44    广移20ms延迟，适合移动
> visa.cn    经典，速度中等
> 185.199.108.153  联通全绿，联通速度很快，电信移动垃圾
> 104.19.33.117 联通移动速度快，电信垃圾
> 162.159.152.175      联通延迟50ms，仅适合联通
> shopify.com    和Visa.cn差不多，但是滥用少一点
> 162.159.135.232     内地联通40ms，沿海联通120ms，建议内陆地区的联通使用
> 103.22.201.21   cf日本，适合落地鸡在日本的用户使用，移动直连，电信联通绕路



直接cname 到 优选ip，简单有效 ，需要绑定信用卡开通saas服务(免费)

## CF Work加速

前提：有一个域名（a.com）在cf

进入worker的设置界面，为当前work添加路由,值 dl.a.com/*

然后去dns里添加对应的二级域名记录，解析到cf优选ip不开小黄云

以下是参考：

| 记录类型 | 名称 | 值              | 代理状态 | TTL  | 操作 |
| -------- | ---- | --------------- | -------- | ---- | ---- |
| A        | dl   | 185.199.108.153 | DNS only | Auto | Edit |
| A        | dl   | 162.159.135.232 | DNS only | Auto | Edit |

## 自己的服务器加速

**需要两个域名(a.com,b.com)，且 不能两个域名都解析在服务器**

前提：

- 两个域名，一个绑定CF（b.com），一个绑定其他dns服务商(a.com)

- cf绑定信用卡，开通saas服务(域名->SSL/TLS->Custom Hostnames)

- 自己的服务器



操作流程 ：

- b.com 添加回源地址  orgin.b.com 绑定自己的服务地址且开启代理（小黄云）
- 在b.com域名空间下进入ssl/tls->Custom Hostnames 界面，将 orgin.b.com设置为回源地址
- 点击添加自定义主机名，输入a域名的访问地址，req.a.com,tls 默认 认证选txt validation
- 将提供的两条txt记录 在a域名所在的dns服务商绑定(注意cf提供的示例是全的需要移除主域名，只保留二级域名，比如提供的是_cf-custom-hostname.req.a.com, 但是你填写的时候记录名应填写_cf-custom-hostname.req)。
- 最后在a的dns服务商中 添加req的cname到 visa.cn 或其他cf节点（cloudfront.182682.xyz），可以搜搜资料有很多，不想折腾使用visa.cn就可以。

