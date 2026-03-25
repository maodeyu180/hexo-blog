---
title: 猫猫导航部署教程
date: 2025-7-16 16:53:44
updated: 2025-03-25
tags: [导航站]
categories: [技术学习]
top_img: https://img.maodeyu.fun/wall/TUAPI-EEES-CC-0692394999.2obg6fhjwm.webp
cover: https://img.maodeyu.fun/wall/TUAPI-EEES-CC-0692394999.2obg6fhjwm.webp
---


# 猫猫导航部署教程（GitHub + Cloudflare/Vercel 一键部署）

> 🐱 想快速搭建一个干净美观、可自定义的导航站？只需三步，无需服务器，无需写代码，就能上线属于你的个性化网址导航页面！

## 🚀 前置条件

- 一个 GitHub 账号
- 一个 Cloudflare 或 Vercel 账号（二选一）
- 可选：一个域名（没有也可以用系统默认域名）
📌 **示例站点预览**：[https://nav.maodeyu.fun](https://nav.maodeyu.fun)

---

## 📦 第一步：Fork 项目

1. 登录你的 [GitHub](https://github.com) 账户
2. 访问[猫猫导航](https://github.com/maodeyu180/mao_nav)项目，点击右上角 **Fork**（如果喜欢，顺手点个 Star 吧 ⭐）


<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_01.webp" width="650" alt="部署步骤截图">
  </br>
</p>


---

## 🔐 第二步：创建 GitHub Token（可选，用于启用 admin 界面增删改功能）

1. 访问 [https://github.com/settings/personal-access-tokens](https://github.com/settings/personal-access-tokens)

2. 创建一个新 token，设置为永不过期
<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_02.webp" width="650" alt="部署步骤截图">
  </br>
</p>

3. 权限配置：

   - **只授权刚才 Fork 的仓库**
   - 仅勾选：Repository permissions -> Contents（读写）和 Metadata（只读）

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_03.webp" width="650" alt="部署步骤截图">
  </br>
</p>

2. 点击 Generate Token，复制保存下来，后面需要用

⚠️ **安全提醒**：这样配置可以使 Token 只影响你授权的仓库，就算泄露风险也有限。

> 🔒 **v2.0 安全升级**：从 v2.0 开始，GitHub Token 和管理员密码都存储在服务端，不会出现在前端代码中。即使打开浏览器 DevTools 也无法看到这些密钥。



---

## 🌐 第三步：部署到 Cloudflare（或 Vercel）

> 下面以 Cloudflare 为例，Vercel 步骤基本一致。

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/)

2. 进入 **Workers & Pages** -> 点击 **Pages** 标签 -> 选择 **Get Started**

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_04.webp" width="650" alt="部署步骤截图">
  </br>
</p>

3. 关联 GitHub，建议只授权你 Fork 的仓库

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_05.webp" width="650" alt="部署步骤截图">
  </br>
</p>

4. 选择仓库，点击 **Begin setup**

5. 框架选择 Vue，Build Command 填 `npm run build`，Output Directory 填 `dist`

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_06.webp" width="650" alt="部署步骤截图">
  </br>
</p>

6. 配置环境变量以启用 admin 后台功能：

> ⚠️ **v2.0 重要变更**：环境变量分为两类，密钥类变量**不再使用 VITE_ 前缀**，通过服务端 Functions 安全使用。

**服务端密钥（前端不可见，建议设置为 Encrypted 加密类型）：**

```bash
ADMIN_PASSWORD=自定义管理密码
GITHUB_TOKEN=刚才 generate 生成的 github_token
```

**前端配置（VITE_ 前缀，构建时注入，非敏感信息）：**

```bash
VITE_GITHUB_OWNER=你的 GitHub 用户名
VITE_GITHUB_REPO=你的仓库名（如：mao_nav）
VITE_GITHUB_BRANCH=master
```

> 💡 **Cloudflare Pages** 添加变量时点击 **Encrypt** 按钮可将密钥加密存储；**Vercel** 添加变量时勾选 **Sensitive** 选项。

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_07.webp" width="650" alt="部署步骤截图">
  </br>
</p>

7. 点击部署，等待构建完成后，点击 **Visit** 即可访问！
<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_08.webp" width="650" alt="部署步骤截图">
  </br>
</p>


8. 如需绑定自定义域名，在项目设置中添加 CNAME 记录即可：

<p align="center">
 </br>
  <img src="https://img.maodeyu.fun/blog/step_09.webp" width="650" alt="部署步骤截图">
  </br>
</p>


---

## 🛠 自定义导航内容

你有两种方式修改导航内容：

### ✅ 方法一：通过 Admin 后台界面（推荐）

1. 访问部署后的地址：`https://你的站点域名/admin`
2. 输入你设置的 `ADMIN_PASSWORD` 管理员密码
3. 即可在线增删分类、网址，保存后自动部署

### ✅ 方法二：修改代码文件

1. 进入你的 GitHub 仓库
2. 修改 `/src/mock/mock_data.js` 文件，保存提交
3. Cloudflare/Vercel 会自动重新构建并上线

---

## 🔄 从 v1.x 升级到 v2.0

如果你之前已经部署了 v1.x 版本，升级到 v2.0 只需修改环境变量：

**在部署平台的环境变量设置中：**

| 操作 | 变量名 | 说明 |
|---|---|---|
| **新增** | `ADMIN_PASSWORD` | 值与原来的 `VITE_ADMIN_PASSWORD` 一致，设置为 Encrypted |
| **新增** | `GITHUB_TOKEN` | 值与原来的 `VITE_GITHUB_TOKEN` 一致，设置为 Encrypted |
| **保留** | `VITE_GITHUB_OWNER` | 不变 |
| **保留** | `VITE_GITHUB_REPO` | 不变 |
| **保留** | `VITE_GITHUB_BRANCH` | 不变 |
| **删除** | `VITE_ADMIN_PASSWORD` | 已迁移到服务端，必须删除 |
| **删除** | `VITE_GITHUB_TOKEN` | 已迁移到服务端，必须删除 |

> ⚠️ **务必删除**旧的 `VITE_ADMIN_PASSWORD` 和 `VITE_GITHUB_TOKEN`，否则它们仍会被打包到前端代码中。

修改完环境变量后，同步最新代码并触发一次重新部署即可。

---

## 🔚 最后

这个导航项目是作者基于个人兴趣开发的。

✨ 如果你觉得它有用，欢迎 Star、Fork 支持一下，也可以留言提建议帮助优化！

❤️ 喜欢 DIY 的朋友不妨部署试试，有趣好玩又能提升动手能力。

---

> 有任何疑问欢迎留言，或在 [GitHub](https://github.com/maodeyu180/mao_nav) 提 Issue。

部署愉快！🚀

