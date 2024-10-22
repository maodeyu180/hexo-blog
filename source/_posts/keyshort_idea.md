---
title: "VisualStudioCode 跟 IntelliJ常用快捷键"
date: 2024-10-22 14:22:10 
tags: [开发软件]
categories: [技术学习]
cover: https://img.maodeyu.fun/wall/img119585119585119585.175b4nii7e.webp
---
**Visual Studio Code (VSCode)** 和 **IntelliJ IDEA** 的常用快捷键
个人更推荐 vscode 装 IntelliJ IDEA Keybindings plugin  统一快捷键
---

### 一、**基本编辑**

| 功能           | VSCode 快捷键             | IntelliJ IDEA 快捷键       |
|----------------|--------------------------|----------------------------|
| **复制行**     | `Ctrl + C`（无选中时复制整行） | `Ctrl + D`                 |
| **删除行**     | `Ctrl + Shift + K`       | `Ctrl + Y`                 |
| **移动行上下** | `Alt + ↑ / ↓`             | `Shift + Alt + ↑ / ↓`      |
| **多光标编辑** | `Alt + Click` 或 `Ctrl + Alt + ↓` | `Alt + Click` 或 `Ctrl + Alt + ↑ / ↓` |
| **撤销**       | `Ctrl + Z`                | `Ctrl + Z`                 |
| **重做**       | `Ctrl + Y` / `Ctrl + Shift + Z` | `Ctrl + Shift + Z`         |
| **剪切行**     | `Ctrl + X`（无选中时剪切整行） | `Ctrl + X`                 |
| **粘贴**       | `Ctrl + V`                | `Ctrl + V`                 |

---

### 二、**搜索与导航**

| 功能                 | VSCode 快捷键               | IntelliJ IDEA 快捷键       |
|----------------------|-----------------------------|----------------------------|
| **全局搜索**         | `Ctrl + Shift + F`           | `Ctrl + Shift + F`         |
| **在文件中搜索**     | `Ctrl + F`                   | `Ctrl + F`                 |
| **查找下一个/上一个** | `F3` / `Shift + F3`          | `F3` / `Shift + F3`        |
| **转到行号**         | `Ctrl + G`                   | `Ctrl + G`                 |
| **转到文件**         | `Ctrl + P`                   | `Ctrl + Shift + N`         |
| **转到定义**         | `F12` 或 `Ctrl + Click`      | `Ctrl + B` 或 `Ctrl + Click` |
| **最近打开文件**     | `Ctrl + R` 或 `Ctrl + Tab`   | `Ctrl + E`                 |
| **文件结构查看**     | `Ctrl + Shift + O`           | `Ctrl + F12`               |
| **浏览历史**         | `Alt + ← / →`                 | `Ctrl + Alt + ← / →`       |

---

### 三、**代码编辑与重构**

| 功能                        | VSCode 快捷键                   | IntelliJ IDEA 快捷键         |
|-----------------------------|---------------------------------|------------------------------|
| **重命名**                  | `F2`                             | `Shift + F6`                 |
| **格式化文档**              | `Shift + Alt + F`                | `Ctrl + Alt + L`             |
| **自动完成代码**            | `Ctrl + Space`                   | `Ctrl + Space`               |
| **快速修复**                | `Ctrl + .`                       | `Alt + Enter`                |
| **生成代码（如 getter/setter）** | 需要插件支持，如 Java Extension | `Alt + Insert`               |
| **代码片段**                | `Ctrl + Shift + P` 输入“Insert Snippet” | `Ctrl + J` 或自定义代码片段 |
| **查找使用**                | `Shift + Alt + F12` （需要插件）   | `Alt + F7`                   |
| **提取变量/方法**           | `Ctrl + .` + 选择“Extract Variable/Method” | `Ctrl + Alt + V` / `Ctrl + Alt + M` |

---

### 四、**调试**

| 功能               | VSCode 快捷键               | IntelliJ IDEA 快捷键       |
|--------------------|-----------------------------|----------------------------|
| **开始调试**       | `F5`                         | `Shift + F9`               |
| **停止调试**       | `Shift + F5`                 | `Ctrl + F2`                |
| **单步跳过**       | `F10`                        | `F8`                       |
| **单步进入**       | `F11`                        | `F7`                       |
| **单步跳出**       | `Shift + F11`                | `Shift + F8`               |
| **切换断点**       | `F9`                         | `Ctrl + F8`                |
| **查看变量**       | 鼠标悬停或使用调试侧栏        | 在调试窗口中查看变量        |
| **调试控制台**     | `Ctrl + Shift + Y`            | `Alt + F12`                |

---

### 五、**其他常用快捷键**

| 功能                   | VSCode 快捷键                   | IntelliJ IDEA 快捷键         |
|------------------------|---------------------------------|------------------------------|
| **打开终端**           | `Ctrl + `（反引号）               | `Alt + F12`                   |
| **切换侧边栏**         | `Ctrl + B`                       | `Alt + 1`                    |
| **打开命令面板**       | `Ctrl + Shift + P`               | `Ctrl + Shift + A`            |
| **保存文件**           | `Ctrl + S`                       | `Ctrl + S`                   |
| **全选**               | `Ctrl + A`                       | `Ctrl + A`                   |
| **注释代码**           | `Ctrl + /`                       | `Ctrl + /` 或 `Ctrl + Shift + /` |
| **切换编辑器布局**     | `Ctrl + \`                        | `Ctrl + Shift + F12`          |
| **分屏编辑**           | `Ctrl + \` 然后 `Ctrl + 1/2`       | `Ctrl + Alt + Shift + 左/右`   |
| **显示/隐藏侧边栏**    | `Ctrl + B`                       | `Ctrl + Shift + F12`          |
| **快速打开文件**       | `Ctrl + P`                       | `Ctrl + Shift + N`            |
| **查看 Git 变更**      | `Ctrl + Shift + G`               | `Alt + ` (数字键根据设置)      |

---

### 六、**插件推荐**

- **VSCode** 和 **IntelliJ IDEA** 都支持丰富的插件，建议根据你的开发需求安装相关插件，以进一步提升开发效率。例如：
    - **VSCode**: Prettier (代码格式化), ESLint (代码检查), GitLens (Git 扩展) 等。
    - **IntelliJ IDEA**: Lombok Plugin, .ignore, Rainbow Brackets 等。

---

### 七、**自定义快捷键**

- **VSCode**: 你可以通过 `Ctrl + K Ctrl + S` 打开快捷键设置，进行自定义。
- **IntelliJ IDEA**: 通过 `File > Settings > Keymap` 进行快捷键的查看和修改。

---

