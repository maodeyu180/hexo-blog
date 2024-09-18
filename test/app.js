const express = require("express");
const app = express();
const port = 3000;
var exec = require("child_process").exec;
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require('path');
const fs = require('fs');

const currentDir = __dirname;
process.chdir(currentDir);

app.use('/', createProxyMiddleware({
    target: 'http://127.0.0.1:80', //改成 Web 应用实际运行端口
    changeOrigin: true,
    ws: true,
    onError: (err, req, res) => {
        res.writeHead(500, {
            'Content-Type': 'text/plain',
        });
        res.end('Please wait for a while and try to refresh the page.');
    },
}));

function keep_web_alive() {
    exec("pgrep -laf PROCESS", function (err, stdout, stderr) { //改成进程名，如：alist
        if (stdout.includes("PROCESS_COMMAND")) {  //改成进程实际运行命令，如：alist server
            console.log("web 正在运行");
        } else {
            exec(
                "START_COMMAND", // 改成启动脚本或者启动命令，如：chmod +x start.sh && ./start.sh 或者 ./alist server
                function (err, stdout, stderr) {
                    if (err) {
                        console.log("保活-调起web-命令行执行错误:" + err);
                    } else {
                        console.log("保活-调起web-命令行执行成功!");
                    }
                }
            );
        }
    });
}
setInterval(keep_web_alive, 10 * 1000);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));