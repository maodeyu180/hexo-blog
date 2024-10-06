---
title: "Linux常用命令"
date: 2024-10-06
tags: [Linux]
categories: [技术学习]
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC--1353753715.231sk4n3p9.webp
---
### 本机远端文件传输

**推荐使用tssh远程工具，使用tsz,trz很方便**

scp [选项] [来源文件] [目标地址]

示例： 

```
scp root@172.16.23.20:/data/log/signaling.log C:\Users\MrYu\Downloads
```

以上是从远端复制到本地，反之亦然。

选项可用参数 ：

- -p 端口
- -r 递归目录
- -v 显示调试信息
- -c 压缩

### 增删改查

- 增加：

  文件:

  ```  java
  touch  a.txt  
  echo "asdfdsf" > filename.txt    
  ```

  文件夹 : 

  ```
  mkdir testDir 
  mkdir -p testDir/dir1/dir2/dir3  //多级目录
  ```

- 删除：

  文件：

  ```
  rm filename.txt
  rm file1.text file2.txt
  rm -i filename.txt //会提示是否删除
  ```

  目录：

  ```
  rm -r dirname
  rm -ri dirname  //会提示是否删除
  rm -rf dirname //忽略权限强制删除
  ```

- 更改文件名

  ```
  mv fileold.txt filenew.txt
  mv oldDir newDir
  ```

- 查找

  find [查找范围]   [查找条件]

  ```
  find / -name "maodeyu.txt" //全局查找sdd.txt
  find / -iname "maodeyu.txt" //忽略大小写查找
  find /data -name "*.txt" //data目录下查找所有Txt文件
  find /path/to/search -type f -name "mao*" //查找mao开头的普通文件
  find /path/to/search -type d -name "mao*" //查找mao开头的文件夹
  ```

  其他条件属性：

  -size +1M  大于1M的

  -size -1M 小于1M

  -mtime -N 最近N天

  -mtime +N N天以上

  -ctime 更新时间

  -maxdepth 2 限制查找深度，制定目录下最多两层
  -delete 查到文件后执行删除操作
### nohup 启动服务维持后台运行

```
> nohup.out

nohup java -jar sw-1.0-SNAPSHOT.jar > nohup.out 2>&1 &
```

### 时区
- 查看当前时区:#
  ```
  timedatectl
  ```
- 更改时区为上海：
   ```
   timedatectl set-timezone Asia/Shanghai
   ```
- 查看所有时区：
   ```
   timedatectl list-timezones
   ```