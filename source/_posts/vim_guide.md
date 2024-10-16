---
title: "VIM使用指南"
date: 2024-10-16 
tags: [vim,linux]
categories: [技术学习]
cover: https://LinMoste.github.io/picx-images-hosting/wall/TUAPI-EEES-CC-1457629617.4qr8uhg522.webp 
---
# VIM 完整使用指南

VIM（Vi IMproved）是一款功能强大且高度可定制的文本编辑器，广泛应用于编程、系统管理和文本处理等领域。VIM 基于经典的 Vi 编辑器，增加了许多现代化的功能，使其在效率和灵活性上有显著提升。本指南将从基础到高级，全面介绍 VIM 的使用方法，帮助您充分发挥其潜力。

## 目录

1. [VIM 简介](#1-vim-简介)
2. [VIM 安装与启动](#2-vim-安装与启动)
3. [VIM 模式](#3-vim-模式)
4. [基本导航](#4-基本导航)
5. [编辑文本](#5-编辑文本)
6. [复制与粘贴（Yank 与 Put）](#6-复制与粘贴yank-与-put)
7. [搜索与替换](#7-搜索与替换)
8. [高级编辑操作](#8-高级编辑操作)
9. [寄存器（Registers）](#9-寄存器registers)
10. [宏（Macros）](#10-宏macros)
11. [分屏与窗口管理](#11-分屏与窗口管理)
12. [缓冲区与标签页](#12-缓冲区与标签页)
13. [自定义配置（.vimrc）](#13-自定义配置vimrc)
14. [插件管理](#14-插件管理)
15. [VIM 高级技巧](#15-vim-高级技巧)
16. [结语](#16-结语)

---

## 1. VIM 简介

VIM 是一个高度可定制的文本编辑器，具有强大的文本处理能力和丰富的插件生态系统。它支持多种编程语言的语法高亮、代码折叠、自动补全等功能，同时通过键盘操作提高编辑效率。

### VIM 的特点

- **模式编辑**：通过不同的模式（如普通模式、插入模式等）实现不同的操作。
- **可扩展性**：支持大量插件和脚本，可以根据需求定制功能。
- **轻量高效**：占用资源少，响应快速，适用于各种操作系统。
- **跨平台**：可在 Linux、macOS、Windows 等系统上运行。

## 2. VIM 安装与启动

### 安装 VIM

**在 Linux 上**

大多数 Linux 发行版默认已经安装 VIM。如果没有，可以使用包管理器进行安装。

- **Debian/Ubuntu**

  ```bash
  sudo apt update
  sudo apt install vim
  ```

- **Fedora**

  ```bash
  sudo dnf install vim
  ```

- **Arch Linux**

  ```bash
  sudo pacman -S vim
  ```

**在 macOS 上**

使用 Homebrew 安装：

```bash
brew install vim
```

**在 Windows 上**

可以下载预编译的安装包：

- [Vim 官网下载页面](https://www.vim.org/download.php)

安装完成后，可以通过命令行或图形界面启动 VIM。

### 启动 VIM

- **打开一个文件**

  ```bash
  vim 文件名
  ```

- **新建并编辑文件**

  如果文件不存在，VIM 会创建一个新文件：

  ```bash
  vim 新文件.txt
  ```

- **不带文件启动**

  直接输入 `vim` 打开空白编辑器：

  ```bash
  vim
  ```

## 3. VIM 模式

VIM 的核心在于其多模式编辑机制，主要包括以下几种模式：

1. **普通模式（Normal Mode）**

   默认模式，用于导航、删除、复制、粘贴等操作。

2. **插入模式（Insert Mode）**

   用于输入文本。可通过按 `i`、`a`、`o` 等命令进入。

3. **可视模式（Visual Mode）**

   用于选择文本范围，可通过按 `v`（字符可视）、`V`（行可视）或 `Ctrl+v`（块可视）进入。

4. **命令行模式（Command-Line Mode）**

   用于执行命令，如保存文件、退出、搜索等。通过按 `:` 进入。

5. **替换模式（Replace Mode）**

   用于替换现有字符。通过按 `R` 进入。

### 切换模式

- **从普通模式进入插入模式**

  - `i`：在光标前插入
  - `I`：在行首插入
  - `a`：在光标后追加
  - `A`：在行尾追加
  - `o`：在当前行下方新开一行并进入插入模式
  - `O`：在当前行上方新开一行并进入插入模式

- **从插入模式返回普通模式**

  按 `Esc` 键

- **从普通模式进入可视模式**

  - `v`：字符可视模式
  - `V`：行可视模式
  - `Ctrl+v`：块可视模式

- **从普通模式进入命令行模式**

  按 `:` 键

## 4. 基本导航

在普通模式下，可以使用多种快捷键进行高效导航。

### 移动光标

- `h`：左移一个字符
- `j`：下移一行
- `k`：上移一行
- `l`：右移一个字符

### 快速移动

- `w`：跳到下一个单词的开头
- `e`：跳到当前或下一个单词的结尾
- `b`：跳到上一个单词的开头
- `0`（零）：跳到行首
- `^`：跳到行首第一个非空字符
- `$`：跳到行尾
- `gg`：跳到文件开头
- `G`：跳到文件末尾
- `{数字}G`：跳到指定行号
  - 例如，`10G` 跳到第 10 行

### 页面滚动

- `Ctrl+f`：向前滚动一页
- `Ctrl+b`：向后滚动一页
- `Ctrl+d`：向前滚动半页
- `Ctrl+u`：向后滚动半页

### 查找

- `/pattern`：向前搜索 `pattern`
- `?pattern`：向后搜索 `pattern`
- `n`：跳到下一个匹配项
- `N`：跳到上一个匹配项

## 5. 编辑文本

在插入模式下，可以进行文本输入和编辑。

### 插入文本

进入插入模式后，可以直接输入文本：

- `i`：在光标前插入
- `a`：在光标后插入
- `o`：在当前行下方新开一行并插入
- `O`：在当前行上方新开一行并插入

### 删除文本

在普通模式下，可以使用以下命令删除文本：

- `x`：删除光标所在的字符
- `X`：删除光标前的字符
- `dw`：删除从光标到下一个单词的开头
- `dd`：删除当前行
- `d$`：删除光标到行尾的内容
- `d0`：删除光标到行首的内容

### 修改文本

- `cw`：修改从光标到下一个单词开头的内容
- `c$`：修改从光标到行尾的内容
- `c0`：修改从光标到行首的内容
- `r{char}`：替换光标所在的字符为 `{char}`
- `R`：进入替换模式，可以连续替换多个字符

### 撤销与重做

- `u`：撤销上一步操作
- `Ctrl+r`：重做上一步撤销的操作

## 6. 复制与粘贴（Yank 与 Put）

VIM 中的复制称为“yank”，粘贴称为“put”。复制的内容存储在寄存器中，可在不同位置粘贴。

### 复制（Yank）

- `yy` 或 `Y`：复制当前行
- `{数字}yy`：复制指定数量的行
  - 例如，`5yy` 复制当前行及其下 4 行
- `yw`：复制从光标到单词结尾的内容
- `y$`：复制从光标到行尾的内容
- `y0`：复制从行首到光标的内容
- `v` + 移动光标 + `y`：复制选中的文本（可视模式）

### 粘贴（Put）

- `p`：在光标后粘贴
- `P`：在光标前粘贴
- `"+p` 或 `"*p`：从系统剪贴板粘贴（取决于系统配置）

### 使用寄存器

- `"aY`：将当前行复制到寄存器 `a`
- `"ap`：从寄存器 `a` 粘贴内容
- 可以使用多个寄存器（`a` 到 `z`）进行分类存储

## 7. 搜索与替换

VIM 提供强大的搜索与替换功能，支持正则表达式，便于高效编辑。

### 搜索

- `/pattern`：向前搜索 `pattern`
- `?pattern`：向后搜索 `pattern`
- `n`：跳转到下一个匹配项
- `N`：跳转到上一个匹配项
- `*`：搜索光标下的单词
- `#`：反向搜索光标下的单词

### 高亮显示

- `:set hlsearch`：启用搜索高亮
- `:nohlsearch` 或 `:noh`：取消搜索高亮
- `:set incsearch`：启用增量搜索，即输入搜索模式时即时显示匹配结果

### 替换

- `:s/pattern/replacement/`：替换当前行第一个匹配项
- `:s/pattern/replacement/g`：替换当前行所有匹配项
- `:%s/pattern/replacement/g`：替换整个文件所有匹配项
- `:n,m s/pattern/replacement/g`：替换第 `n` 行到第 `m` 行的匹配项
  - 例如，`:10,20s/foo/bar/g` 替换第 10 行到第 20 行中的所有 `foo` 为 `bar`
- `:s/pattern/replacement/gc`：在替换时逐个确认
  - 按提示输入 `y`（替换）、`n`（跳过）、`a`（全部替换）、`q`（退出）、`l`（仅替换当前项）

### 使用正则表达式

VIM 的搜索与替换支持正则表达式，使其更加强大。

- **匹配行首**

  ```vim
  /^pattern/
  ```

- **匹配行尾**

  ```vim
  /pattern$/
  ```

- **匹配任意字符**

  ```vim
  /p.ttern/   " 匹配 p后任意字符ttern
  ```

- **匹配多个选项**

  ```vim
  /foo\|bar/
  ```

- **匹配单词边界**

  ```vim
  /\<foo\>/   " 匹配整个单词 foo
  ```

## 8. 高级编辑操作

### 自动缩进

- `>>`：将当前行向右缩进一个级别
- `<<`：将当前行向左缩进一个级别
- `={motion}`：重新缩进选定区域
  - 例如，`=G`：从当前行到文件末尾重新缩进

### 代码折叠

VIM 支持代码折叠，便于管理大文件。

- `zc`：关闭当前折叠
- `zo`：打开当前折叠
- `zM`：关闭所有折叠
- `zR`：打开所有折叠
- `za`：切换当前折叠状态

### 移动与交换

- `{number}j` 或 `{number}k`：上下移动指定行数
  - 例如，`3j` 向下移动 3 行
- `:m {destination}`：移动当前行到指定位置
  - 例如，`:m 10` 将当前行移动到第 10 行
- `:move {source} {destination}`：移动指定范围的行
  - 例如，`:3,5m 10` 将第 3 到第 5 行移动到第 10 行后

### 复制与粘贴高级用法

- `y{motion}`：复制指定范围
  - 例如，`y$` 复制从光标到行尾
- `p` 和 `P`：粘贴位置可以根据需求灵活选择

## 9. 寄存器（Registers）

VIM 的寄存器用于存储复制、删除或其他操作的内容。默认寄存器和命名寄存器可用于分类管理文本。

### 常用寄存器

- **默认寄存器 (`"` )**

  - 自动存储最近的复制或删除内容

- **命名寄存器 (`"a` 到 `"z`)**

  - 可以手动指定复制或删除内容存储到特定寄存器

- **系统剪贴板寄存器 (`"+` 和 `"*`)**

  - `"+`：通常对应系统剪贴板
  - `"*`：通常对应系统选择缓冲区

### 使用寄存器

- **复制到命名寄存器**

  ```vim
  "ayy    "a 寄存器复制当前行
  "byw    "b 寄存器复制一个单词
  ```

- **从命名寄存器粘贴**

  ```vim
  "ap     从 "a 寄存器粘贴
  "bp     从 "b 寄存器粘贴
  ```

- **复制到系统剪贴板**

  ```vim
  "+y     复制到系统剪贴板
  "*y     复制到系统选择缓冲区
  ```

- **从系统剪贴板粘贴**

  ```vim
  "+p     从系统剪贴板粘贴
  "*p     从系统选择缓冲区粘贴
  ```

### 查看寄存器内容

使用命令 `:reg` 或 `:registers` 查看当前所有寄存器的内容。

```vim
:reg
```

## 10. 宏（Macros）

宏允许记录一系列操作并重复执行，大大提高编辑效率。

### 录制宏

1. **开始录制**

   按 `q` 加上一个寄存器名（如 `a` 到 `z`）开始录制。

   ```vim
   qa
   ```

2. **执行操作**

   进行需要录制的操作。

3. **结束录制**

   按 `q` 结束录制。

   ```vim
   q
   ```

### 播放宏

- `@a`：执行寄存器 `a` 中的宏
- `@@`：重复执行上一个宏

### 重复执行宏

- `{number}@a`：执行寄存器 `a` 中的宏 `{number}` 次
  - 例如，`5@a` 执行宏 `a` 5 次

### 删除宏

宏存储在寄存器中，可以通过复制空内容覆盖：

```vim
:let @a=''
```

## 11. 分屏与窗口管理

VIM 支持在同一个编辑器窗口中打开多个分屏，便于同时编辑多个文件或同一文件的不同部分。

### 基本分屏操作

- **水平分屏**

  ```vim
  :split 或 :sp
  ```

- **垂直分屏**

  ```vim
  :vsplit 或 :vsp
  ```

- **打开文件在分屏中**

  ```vim
  :split 文件名
  :vsplit 文件名
  ```

### 窗口导航

- `Ctrl+w h`：跳转到左边的窗口
- `Ctrl+w j`：跳转到下边的窗口
- `Ctrl+w k`：跳转到上边的窗口
- `Ctrl+w l`：跳转到右边的窗口
- `Ctrl+w w`：在所有窗口间循环切换
- `Ctrl+w t`：跳转到最上面的窗口
- `Ctrl+w b`：跳转到最下面的窗口

### 调整窗口大小

- `Ctrl+w >`：增大垂直分屏的宽度
- `Ctrl+w <`：减小垂直分屏的宽度
- `Ctrl+w +`：增大水平分屏的高度
- `Ctrl+w -`：减小水平分屏的高度
- `Ctrl+w =`：使所有窗口大小相等

### 关闭窗口

- `:q`：关闭当前窗口
- `:close`：关闭当前窗口
- `:only`：关闭所有其他窗口，只保留当前窗口

## 12. 缓冲区与标签页

### 缓冲区（Buffers）

VIM 中的每个打开的文件都对应一个缓冲区。可以在多个缓冲区间切换。

- **列出所有缓冲区**

  ```vim
  :ls 或 :buffers
  ```

- **切换缓冲区**

  ```vim
  :buffer {编号或名称}
  ```

  例如，`:buffer 2` 切换到缓冲区 2

- **删除缓冲区**

  ```vim
  :bd 或 :bdelete
  ```

  关闭当前缓冲区

### 标签页（Tabs）

标签页允许在一个 VIM 实例中打开多个标签，每个标签可以包含多个窗口。

- **打开新标签页**

  ```vim
  :tabnew 或 :tabnew 文件名
  ```

- **切换标签页**

  - `gt`：跳转到下一个标签页
  - `gT`：跳转到上一个标签页
  - `{数字}gt`：跳转到指定编号的标签页

- **关闭标签页**

  ```vim
  :tabclose 或 :tabc
  ```

- **列出所有标签页**

  ```vim
  :tabs
  ```

## 13. 自定义配置（.vimrc）

VIM 的行为可以通过配置文件 `.vimrc` 进行定制。配置文件通常位于用户主目录下。

### 创建或编辑 `.vimrc`

```bash
vim ~/.vimrc
```

### 常用配置项

```vim
" 启用行号
set number

" 启用语法高亮
syntax on

" 设置缩进
set tabstop=4
set shiftwidth=4
set expandtab

" 启用鼠标支持
set mouse=a

" 设置搜索选项
set hlsearch
set incsearch
set ignorecase
set smartcase

" 设置主题
colorscheme desert

" 启用行尾自动换行
set wrap

" 启用相对行号
set relativenumber
```

### 配置说明

- **行号与相对行号**

  - `set number`：显示绝对行号
  - `set relativenumber`：显示相对行号，便于跳转

- **缩进设置**

  - `set tabstop=4`：设置 Tab 键为 4 个空格
  - `set shiftwidth=4`：设置自动缩进为 4 个空格
  - `set expandtab`：将 Tab 键转换为空格

- **搜索配置**

  - `set ignorecase`：搜索时忽略大小写
  - `set smartcase`：如果搜索模式中包含大写字母，则区分大小写

- **界面配置**

  - `syntax on`：启用语法高亮
  - `colorscheme {theme}`：设置颜色主题

### 自动加载插件管理器

使用插件管理器可以方便地安装和管理 VIM 插件，如 [Vundle](https://github.com/VundleVim/Vundle.vim)、[Pathogen](https://github.com/tpope/vim-pathogen)、[vim-plug](https://github.com/junegunn/vim-plug) 等。

**示例：使用 vim-plug**

1. **安装 vim-plug**

   ```bash
   curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
   ```

2. **在 `.vimrc` 中添加插件配置**

   ```vim
   call plug#begin('~/.vim/plugged')

   " 插件列表
   Plug 'tpope/vim-sensible'
   Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
   Plug 'preservim/nerdtree'

   call plug#end()
   ```

3. **安装插件**

   在 VIM 中执行以下命令：

   ```vim
   :PlugInstall
   ```

## 14. 插件管理

插件扩展了 VIM 的功能，提升编辑效率和用户体验。常见的插件管理器包括 vim-plug、Vundle 和 Pathogen。

### 常用插件推荐

1. **文件浏览器**

   - [NERDTree](https://github.com/preservim/nerdtree)

2. **模糊查找**

   - [fzf](https://github.com/junegunn/fzf)

3. **自动补全**

   - [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe)
   - [coc.nvim](https://github.com/neoclide/coc.nvim)

4. **状态栏**

   - [vim-airline](https://github.com/vim-airline/vim-airline)
   - [lightline.vim](https://github.com/itchyny/lightline.vim)

5. **语法高亮与代码折叠**

   - [vim-polyglot](https://github.com/sheerun/vim-polyglot)

6. **Git 集成**

   - [vim-fugitive](https://github.com/tpope/vim-fugitive)

7. **主题与配色**

   - [gruvbox](https://github.com/morhetz/gruvbox)
   - [dracula](https://github.com/dracula/vim)

### 安装插件示例（使用 vim-plug）

1. **安装 vim-plug**

   参考前一章节的步骤。

2. **在 `.vimrc` 中添加插件**

   ```vim
   call plug#begin('~/.vim/plugged')

   " 文件浏览器
   Plug 'preservim/nerdtree'

   " 模糊查找
   Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
   Plug 'junegunn/fzf.vim'

   " 自动补全
   Plug 'neoclide/coc.nvim', {'branch': 'release'}

   " 状态栏
   Plug 'vim-airline/vim-airline'

   " Git 集成
   Plug 'tpope/vim-fugitive'

   " 主题
   Plug 'morhetz/gruvbox'

   call plug#end()
   ```

3. **安装插件**

   在 VIM 中执行 `:PlugInstall`

### 管理插件

- **更新插件**

  ```vim
  :PlugUpdate
  ```

- **移除插件**

  - 从 `.vimrc` 中删除对应的 `Plug` 行
  - 执行 `:PlugClean` 删除未使用的插件

## 15. VIM 高级技巧

### 快捷键映射

通过 `.vimrc` 自定义快捷键，提高操作效率。

**示例：**

```vim
" 将 jk 映射为 Esc
inoremap jk <Esc>

" 保存并退出
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>

" 打开 NERDTree
nnoremap <leader>n :NERDTreeToggle<CR>
```

**说明：**

- `inoremap`：在插入模式下映射
- `nnoremap`：在普通模式下映射
- `<leader>`：领导键，默认是 `\`，可以在 `.vimrc` 中自定义，如 `let mapleader=","`

### 快速移动与跳转

- `gg`：跳转到文件开头
- `G`：跳转到文件末尾
- `{number}G`：跳转到指定行号
- `Ctrl+o`：返回前一个跳转位置
- `Ctrl+i`：前进到下一个跳转位置
- `m{char}`：设置标记 `{char}`
- `'{char}`：跳转到标记 `{char}` 的行

### 自动命令（Autocommands）

自动执行特定事件的命令，提高工作流效率。

**示例：**

```vim
" 在保存 Python 文件时自动格式化
autocmd BufWritePre *.py execute ':Black'
```

### 补全与代码片段

利用插件如 `coc.nvim` 或 `YouCompleteMe` 提供智能补全功能，提升编程效率。

**代码片段（Snippets）**

使用插件如 [UltiSnips](https://github.com/SirVer/ultisnips) 创建和管理代码片段。

**示例：**

```vim
" 在 .vimrc 中配置 UltiSnips
let g:UltiSnipsExpandTrigger="<tab>"
let g:UltiSnipsJumpForwardTrigger="<c-j>"
let g:UltiSnipsJumpBackwardTrigger="<c-k>"
```

### 使用外部工具

VIM 可以与多种外部工具集成，如编译器、调试器等。

**示例：**

- **编译代码**

  ```vim
  :make
  ```

- **查看编译错误**

  ```vim
  :copen
  ```

- **快速跳转到错误位置**

  使用 `:cnext` 和 `:cprev`

### 版本控制集成

使用插件如 [vim-fugitive](https://github.com/tpope/vim-fugitive) 集成 Git 功能。

**常用命令：**

- `:Gstatus`：查看 Git 状态
- `:Gdiff`：查看差异
- `:Gcommit`：提交更改
- `:Gpush`：推送更改

### 代码调试

使用插件如 [Vimspector](https://github.com/puremourning/vimspector) 进行代码调试。

**配置示例：**

参考插件文档进行详细配置，根据编程语言选择合适的调试器。

### 使用终端

VIM 8 及以上版本支持内置终端，允许在编辑器内执行命令行操作。

**打开终端：**

```vim
:terminal
```

**分屏中打开终端：**

```vim
:split | terminal
```

## 16. 结语

VIM 是一款极具深度和广度的文本编辑器，通过不断学习和实践，您可以掌握其强大的功能，提高工作效率。本指南涵盖了从基础到高级的各类操作，但 VIM 的世界远不止于此。建议您结合实际需求，探索更多功能，并根据个人习惯进行定制化配置。

### 进一步学习资源

- [VIM 官方文档](https://www.vim.org/docs.php)
- [VIM Tutor](https://www.openvim.com/tutorial.html)（内置教程，输入 `vimtutor` 命令启动）
- [VIM Awesome](https://vimawesome.com/)（插件集合）
- [VIM Adventures](https://vim-adventures.com/)（通过游戏学习 VIM）

