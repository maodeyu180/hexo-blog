---
title: "CentOS mysql8.0数据库 安装。"
date: 2024-09-18 20:23:48 
tags: [Linux,Mysql]
categories: [技术学习]
top_img: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1076628268.175b4odf7s.webp
copyright_author: 猫的于
---

## 添加mysql yum仓库

这里安装的是8.0版本，如需其他版本在此查看[[mysql版本列表](https://dev.mysql.com/downloads/repo/yum/)](https://dev.mysql.com/downloads/repo/yum/)

```
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
sudo rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
```

## 安装mysql

```
sudo yum install mysql-server --nogpgcheck
```

## 配置自启动并运行mysql

```
sudo systemctl enable mysqld
sudo systemctl start mysqld
```

## 修改密码

- 查看初始密码

```
tail /var/log/mysqld.log | grep "temporary"
```

如没有说明初始密码为空



- 运行安全脚本设置密码。

```
sudo mysql_secure_installation
```

安全脚本执行顺序：修改root密码 > 删除匿名用户 > 禁止root远程登录(根据自己需求) > 删除测试数据库 > 从新加载权限

## 放开3306端口

```
sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent
```

阿里腾讯等需到各自云平台放开。

## 新建用户用于远程链接

```
mysql -u root -p


CREATE USER 'remote'@'%' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON *.* TO 'remote'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```



此时 已经可以使用 remote +password 进行链接。