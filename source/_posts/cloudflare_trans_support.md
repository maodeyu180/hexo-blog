---
title: "Cloudflare IPv6 to IPv4 自动桥接端口 "
date: 2024-10-11 18:37:42 
tags: [CloudFlare,网络]
categories: [搞七搞八]
cover: https://img.maodeyu.fun/wall/img161716171617.70a9dy5yha.webp
---


# Cloudflare IPv6 to IPv4 自动桥接端口

Cloudflare 支持通过 IPv6 访问 IPv4 资源（即 IPv6 自动桥接），可以在 Cloudflare 的 HTTP 和 HTTPS 服务上工作。默认情况下，Cloudflare 的端口支持如下：

域名绑定ipv6服务器，ipv4网络可通过域名访问ipv6。
## Supported HTTP Ports:
- **80**
- **8080**
- **8880**
- **2052**
- **2082**
- **2086**
- **2095**

## Supported HTTPS Ports:
- **443**
- **2053**
- **2083**
- **2087**
- **2096**
- **8443**


通过 IPv6 自动桥接功能，Cloudflare 可以使客户端通过 IPv6 访问这些 IPv4 上支持的端口。这项功能无需额外的配置，Cloudflare 会自动将 IPv6 请求转换为 IPv4 请求。

如果使用非标准端口，则需要将该端口添加到支持列表中，或者确保服务运行在默认的 HTTP 或 HTTPS 端口上。