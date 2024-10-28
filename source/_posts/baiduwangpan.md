---
title: "百度网盘bypy备份数据"
date: 2024-10-28 17:43:41 
tags: [网盘]
categories: [技术学习]
cover: https://img.maodeyu.fun/wall/img216545216545216545.60u60s37b9.webp
---



要在 Linux 服务器上使用 Python 实现自动备份到百度网盘，借助第三方 Python 客户端工具 `bypy`。`bypy` 是一个开源的 Python 客户端，允许用户通过编程方式与百度网盘进行交互。以下是详细的步骤，包括环境配置、认证、编写备份脚本以及设置自动化任务。

### **1. 环境准备**

#### **1.1 安装 Python 和 pip**

确保您的 Linux 服务器已经安装了 Python 3 和 `pip`。您可以使用以下命令检查版本：

```bash
python3 --version
pip3 --version
```

如果未安装，可以使用包管理器进行安装。例如，对于基于 Debian 的系统（如 Ubuntu）：

```bash
sudo apt update
sudo apt install python3 python3-pip -y
```

#### **1.2 安装 `bypy`**

使用 `pip` 安装 `bypy`：

```bash
pip3 install bypy
```

### **2. 配置 `bypy`**

#### **2.1 初始化 `bypy` 并进行授权**

首次使用 `bypy` 需要进行授权，以便它能够访问您的百度网盘。运行以下命令：

```bash
bypy info
```

此命令会提示您访问一个 URL 来获取授权码。按照提示操作：

1. 复制终端中显示的 URL 链接，在浏览器中打开。
2. 使用您的百度账号登录，并授权 `bypy` 访问您的网盘。
3. 授权后，您会获得一个授权码（通常是一个包含字母和数字的字符串）。
4. 将该授权码粘贴回终端中继续。

授权完成后，`bypy` 会将认证信息保存到本地，供后续使用。

#### **2.2 测试连接**

验证 `bypy` 是否配置成功，运行：

```bash
bypy list
```

这应该会列出您百度网盘中的文件和文件夹。如果出现错误，请检查网络连接和授权步骤是否正确。

### **3. 编写自动备份脚本**

创建一个 Python 脚本，例如 `backup_to_baidu.py`，实现自动备份功能。

#### **3.1 使用 `bypy` 命令行**

最简单的方法是使用 Python 脚本调用 `bypy` 的命令行工具。以下是一个示例脚本：

```python
#!/usr/bin/env python3
import os
import subprocess
from datetime import datetime

# 配置参数
LOCAL_BACKUP_DIR = "/path/to/your/backup/directory"  # 本地需要备份的目录
BAIDU_NETDISK_DIR = "/backup/"  # 百度网盘中的目标目录
LOG_FILE = "/var/log/baidu_backup.log"  # 日志文件路径

def log(message):
    """记录日志"""
    with open(LOG_FILE, "a") as f:
        f.write(f"{datetime.now()} - {message}\n")

def backup():
    """执行备份"""
    try:
        # 检查本地备份目录是否存在
        if not os.path.exists(LOCAL_BACKUP_DIR):
            log(f"备份目录不存在: {LOCAL_BACKUP_DIR}")
            return

        # 使用 bypy 上传目录
        cmd = [
            "bypy",
            "upload",
            LOCAL_BACKUP_DIR,
            BAIDU_NETDISK_DIR
        ]
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        if result.returncode == 0:
            log(f"成功备份 {LOCAL_BACKUP_DIR} 到百度网盘的 {BAIDU_NETDISK_DIR}")
        else:
            log(f"备份失败: {result.stderr}")
    except Exception as e:
        log(f"备份过程中发生异常: {str(e)}")

if __name__ == "__main__":
    backup()
```

**说明：**

- **配置参数**：
    - `LOCAL_BACKUP_DIR`：需要备份的本地目录路径。
    - `BAIDU_NETDISK_DIR`：百度网盘中的目标目录路径。确保以 `/` 结尾。
    - `LOG_FILE`：日志文件路径，用于记录备份过程中的信息和错误。

- **日志记录**：通过 `log` 函数记录备份过程中的信息和错误，便于排查问题。

- **备份逻辑**：使用 `subprocess` 模块调用 `bypy` 的命令行工具，将本地目录上传到百度网盘。

#### **3.2 使用 `bypy` Python 库**

如果您希望更灵活地控制备份过程，可以直接使用 `bypy` 的 Python 库。以下是一个示例脚本：

```python
#!/usr/bin/env python3
import bypy
import os
from datetime import datetime

# 配置参数
LOCAL_BACKUP_DIR = "/path/to/your/backup/directory"  # 本地需要备份的目录
BAIDU_NETDISK_DIR = "/backup/"  # 百度网盘中的目标目录
LOG_FILE = "/var/log/baidu_backup.log"  # 日志文件路径

def log(message):
    """记录日志"""
    with open(LOG_FILE, "a") as f:
        f.write(f"{datetime.now()} - {message}\n")

def backup():
    """执行备份"""
    try:
        # 检查本地备份目录是否存在
        if not os.path.exists(LOCAL_BACKUP_DIR):
            log(f"备份目录不存在: {LOCAL_BACKUP_DIR}")
            return

        # 初始化 bypy
        bp = bypy.ByPy()

        # 上传目录
        result = bp.upload(LOCAL_BACKUP_DIR, BAIDU_NETDISK_DIR)

        if "100%" in result:
            log(f"成功备份 {LOCAL_BACKUP_DIR} 到百度网盘的 {BAIDU_NETDISK_DIR}")
        else:
            log(f"备份结果: {result}")
    except Exception as e:
        log(f"备份过程中发生异常: {str(e)}")

if __name__ == "__main__":
    backup()
```

**注意事项：**

- `bypy.ByPy()` 会自动加载之前的授权信息，无需重新授权。
- `bp.upload` 方法用于上传文件或目录。您可以根据需求调整方法参数。

### **4. 设置自动化任务**

为了实现定期自动备份，您可以使用 `cron` 来定时执行上述脚本。

#### **4.1 为脚本添加可执行权限**

```bash
chmod +x /path/to/backup_to_baidu.py
```

#### **4.2 编辑 `crontab`**

使用 `crontab` 编辑器添加定时任务：

```bash
crontab -e
```

在打开的编辑器中，添加以下内容以每天凌晨2点执行备份脚本：

```bash
0 2 * * * /usr/bin/python3 /path/to/backup_to_baidu.py
```

**说明：**

- `0 2 * * *` 表示每天的凌晨2点。
- `/usr/bin/python3` 是 Python 3 的路径，您可以使用 `which python3` 命令确认。
- `/path/to/backup_to_baidu.py` 是您的备份脚本的完整路径。

**保存并退出**。`cron` 将自动加载新的任务。

### **5. 高级设置和优化**

#### **5.1 增量备份**

为了节省上传时间和流量，可以实现增量备份，仅上传自上次备份以来发生变化的文件。`bypy` 默认支持同步模式，可以使用 `bypy syncup` 命令实现增量备份。

修改脚本中的上传命令：

```python
cmd = [
    "bypy",
    "syncup",
    LOCAL_BACKUP_DIR,
    BAIDU_NETDISK_DIR
]
```

或在使用 Python 库时，调用相应的同步方法。

#### **5.2 压缩备份数据**

为了减少上传数据量，您可以先压缩需要备份的目录，然后上传压缩包。

示例脚本：

```python
#!/usr/bin/env python3
import bypy
import os
import tarfile
from datetime import datetime

# 配置参数
LOCAL_BACKUP_DIR = "/path/to/your/backup/directory"  # 本地需要备份的目录
BACKUP_ARCHIVE = "/path/to/backup/archive.tar.gz"  # 压缩包路径
BAIDU_NETDISK_DIR = "/backup/"  # 百度网盘中的目标目录
LOG_FILE = "/var/log/baidu_backup.log"  # 日志文件路径

def log(message):
    """记录日志"""
    with open(LOG_FILE, "a") as f:
        f.write(f"{datetime.now()} - {message}\n")

def create_archive():
    """创建压缩包"""
    try:
        with tarfile.open(BACKUP_ARCHIVE, "w:gz") as tar:
            tar.add(LOCAL_BACKUP_DIR, arcname=os.path.basename(LOCAL_BACKUP_DIR))
        log(f"成功创建压缩包: {BACKUP_ARCHIVE}")
    except Exception as e:
        log(f"创建压缩包失败: {str(e)}")
        return False
    return True

def upload_backup():
    """上传压缩包到百度网盘"""
    try:
        bp = bypy.ByPy()
        result = bp.upload(BACKUP_ARCHIVE, BAIDU_NETDISK_DIR)
        if "100%" in result:
            log(f"成功上传压缩包到百度网盘: {BACKUP_ARCHIVE} -> {BAIDU_NETDISK_DIR}")
        else:
            log(f"上传结果: {result}")
    except Exception as e:
        log(f"上传过程中发生异常: {str(e)}")

def cleanup():
    """清理本地压缩包（可选）"""
    try:
        os.remove(BACKUP_ARCHIVE)
        log(f"已删除本地压缩包: {BACKUP_ARCHIVE}")
    except Exception as e:
        log(f"删除本地压缩包失败: {str(e)}")

def backup():
    """执行完整的备份流程"""
    if create_archive():
        upload_backup()
        cleanup()

if __name__ == "__main__":
    backup()
```

**注意：**

- 压缩过程可能会消耗一定的时间和系统资源，尤其是在备份大文件时。
- 压缩包生成后，建议删除以释放本地存储空间。

#### **5.3 日志管理**

为了防止日志文件无限增大，您可以使用日志轮转工具（如 `logrotate`）来管理日志文件。

创建一个 `logrotate` 配置文件，例如 `/etc/logrotate.d/baidu_backup`：

```bash
/var/log/baidu_backup.log {
    daily
    rotate 7
    compress
    missingok
    notifempty
    create 644 root root
}
```

**说明：**

- `daily`：每天轮转一次日志。
- `rotate 7`：保留最近7个轮转日志。
- `compress`：压缩旧日志。
- `missingok`：如果日志文件不存在，不报错。
- `notifempty`：如果日志为空，不轮转。
- `create`：轮转后创建新的日志文件，并设置权限。

### **6. 处理常见问题**

#### **6.1 `bypy` 授权失败**

如果在授权过程中遇到问题，您可以尝试重新初始化 `bypy`：

```bash
bypy info -d
```

这将删除现有的授权信息，并提示您重新授权。

#### **6.2 上传失败或速度慢**

- **网络问题**：确保服务器的网络连接稳定，且没有防火墙阻止与百度网盘的通信。
- **文件大小限制**：百度网盘对单个文件的大小有一定限制，确保上传的文件未超过限制。
- **并发上传**：避免同时进行多个上传任务，以防止速度变慢或失败。

#### **6.3 权限问题**

确保运行备份脚本的用户具有访问本地备份目录和写入日志文件的权限。例如，使用 `chmod` 和 `chown` 修改权限：

```bash
# 修改备份目录权限
sudo chmod -R 755 /path/to/your/backup/directory

# 修改日志文件权限
sudo touch /var/log/baidu_backup.log
sudo chmod 644 /var/log/baidu_backup.log
sudo chown your_user:your_group /var/log/baidu_backup.log
```

#### **6.4 调试脚本**

为了调试脚本中的问题，您可以在脚本中添加更多的日志信息，或手动运行脚本并观察输出：

```bash
python3 /path/to/backup_to_baidu.py
```

### **7. 示例完整脚本**

以下是一个完整的备份脚本示例，结合了增量备份和日志记录：

```python
#!/usr/bin/env python3
import bypy
import os
import subprocess
from datetime import datetime

# 配置参数
LOCAL_BACKUP_DIR = "/path/to/your/backup/directory"  # 本地需要备份的目录
BAIDU_NETDISK_DIR = "/backup/"  # 百度网盘中的目标目录
LOG_FILE = "/var/log/baidu_backup.log"  # 日志文件路径

def log(message):
    """记录日志"""
    with open(LOG_FILE, "a") as f:
        f.write(f"{datetime.now()} - {message}\n")

def backup():
    """执行备份"""
    try:
        # 检查本地备份目录是否存在
        if not os.path.exists(LOCAL_BACKUP_DIR):
            log(f"备份目录不存在: {LOCAL_BACKUP_DIR}")
            return

        # 使用 bypy 的 syncup 命令进行增量备份
        cmd = [
            "bypy",
            "syncup",
            LOCAL_BACKUP_DIR,
            BAIDU_NETDISK_DIR
        ]
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        if result.returncode == 0:
            log(f"成功增量备份 {LOCAL_BACKUP_DIR} 到百度网盘的 {BAIDU_NETDISK_DIR}")
        else:
            log(f"备份失败: {result.stderr}")
    except Exception as e:
        log(f"备份过程中发生异常: {str(e)}")

if __name__ == "__main__":
    backup()
```

### **8. 总结**

通过上述步骤，您可以在 Linux 服务器上使用 Python 实现自动备份到百度网盘。主要流程包括：

1. **安装和配置 `bypy`**：确保能够通过命令行或编程方式访问百度网盘。
2. **编写备份脚本**：使用 Python 调用 `bypy` 的命令行工具或其 Python 库，实现文件的上传和同步。
3. **设置自动化任务**：利用 `cron` 等工具定期执行备份脚本，确保数据定时备份。
4. **优化和监控**：通过日志记录和高级配置，确保备份过程的稳定性和可靠性。

请根据您的具体需求和环境，对上述示例进行调整和优化。如有更多问题或需要进一步的帮助，请随时提问！