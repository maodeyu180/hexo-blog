---
title: "CentOS Docker安装及常用命令"
date: 2024-10-06
tags: [Docker,Linux]
categories: [技术学习]
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1024719574.3gobo5y5o8.webp
---
## 卸载旧版本(如果存在)

```
sudo yum remove docker \
               docker-client \
               docker-client-latest \
               docker-common \
               docker-latest \
               docker-latest-logrotate \
               docker-logrotate \
               docker-engine

```

## 安装基础依赖库

```ssh
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

## 添加国内镜像docker

```
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 安装docker

```
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

## 启动docker

```
sudo systemctl start docker
```

## 设置自启动

```
sudo systemctl enable docker
```

## Docker常用命令

1. 镜像管理：
   - `docker images`: 列出本地镜像
   - `docker pull <image>`: 从镜像仓库拉取镜像
   - `docker push <image>`: 推送镜像到仓库
   - `docker rmi <image>`: 删除本地镜像
   - `docker build -t <name:tag> .`: 从 Dockerfile 构建镜像
2. 容器管理：
   - `docker ps`: 列出运行中的容器
   - `docker ps -a`: 列出所有容器（包括停止的）
   - `docker run <image>`: 从镜像创建并启动容器
   - `docker start <container>`: 启动已停止的容器
   - `docker stop <container>`: 停止运行中的容器
   - `docker restart <container>`: 重启容器
   - `docker rm <container>`: 删除容器