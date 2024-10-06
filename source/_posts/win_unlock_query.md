---
title: "Win查看解锁时间，补卡使用"
date: 2024-09-20 10:03:52 
tags: [win]
categories: [生活日常]
cover: https://img.maodeyu.fun/wall/img222201222201222201.32hvx9uxtz.webp
---
# 第一步
Win + R  输入 eventvwr.msc  进入事件查看器

# 第二步
- 打开 Windows 日志
- 点击安全
- 点击筛选当前日志
- 点击xml
- 勾选手动编辑查询
# 第三步
将下列查询条件复制替换
```
<QueryList>
  <Query Id="0" Path="Security">
    <Select Path="Security">
*[EventData[Data[@Name='LogonType']='2']]
and
*[System[(EventID='4624')]]
</Select>
  </Query>
</QueryList>
```
你会得到解锁记录:
![图片](https://img.maodeyu.fun/web/winsignquery.webp)