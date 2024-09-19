---
title: Linux服务器安装nginx
date: 2024-09-06 16:53:44 
tags: [Linux,Nginx]
categories: [技术学习]
top_img: https://img.maodeyu.fun/wall/TUAPI-EEES-CC-2055416835.7p7rianw0.webp
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC-2055416835.7p7rianw0.webp
---


# 前置
- 一台linux服务器。
- nginx安装包（地址：[NginxDownload](https://nginx.org/en/download.html)）
- ssh连接工具：putty,Tssh等推荐使用tssh或者服务器云平台自带的
# 部署
通过ssh工具连接到服务器，su进入root账户，先更新三方库。
## 更新三方库
CentOs:
```cpp
su
yum upgrade -y
```
Ubuntu

```cpp
su
apt upgrade-y
```

## 创建下载文件目录

```cpp
cd /home
mkdir download
cd /download
```
## 下载依赖解压

```cpp
curl -o nginx-1.26.1 https://nginx.org/download/nginx-1.26.1.tar.gz
tar -zxvf nginx-1.26.1
```
没有curl库可根据提示下载
## 安装nginx

安装需要的依赖库：
```cpp
apt install -y build-essential
apt install -y libpcre3 libpcre3-dev
apt install -y openssl libssl-dev
apt install -y zlib1g zlib1g-dev
```

安装至usr/local/nginx目录根据自己习惯来:

```cpp
cd nginx-1.26.1/
./configure --prefix=/usr/local/nginx --with-http_ssl_module --with-pcre
make
make install 
```

## 配置nginx服务

```cpp
vim /etc/systemd/system/nginx.service
```
输入以下内容

```cpp
[Unit]
Description=The NGINX HTTP and reverse proxy server
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PIDFile=/usr/local/nginx/logs/nginx.pid
PrivateTmp=true

[Install]
WantedBy=multi-user.target

```
从新加载systemd

```cpp
systemctl daemon-reload
```

启动nginx

```cpp
systemctl start nginx
```
设置nginx自启动

```cpp
systemctl enable nginx
```
此时通过浏览器访问ip 就会出现nginx欢迎界面。

# 注意点
## 常用命令
- nginx -t 校验conf文件
- systemctl staus nginx 查看状态 start 启动 stop停止 restart 重启
- nginx -s quit 强制关闭
- nginx -V 版本号
- systemctl reload nginx 热加载conf文件

## 配置建议
- 不同二三级域名的配置项放到config.d文件夹下，以域名为配置名
- 不同域名对应的不同web项目放到统一的目录下，建议新建一个/home/local/web目录，放到此目录下
- https 推荐使用acme.sh或Certbot管理证书。