---
title : vscode的使用 
author: rainboy
update_time : 2023-04-27
---

# vscode的使用

怎么自动格式化

1. 首先在vscode中安装扩展C/C++，扩展程序将自动安装clang-format。
2. 打开首选项设置（ctrl + ,），搜索format ，勾选format on save 自动保存。
3. 打开首选项设置（ctrl + ,），搜索format ，勾选format on Type 。

怎么自动保存

1. 打开首选项设置（ctrl + ,），搜索`auto save` ，选`afterDelay`。



## 运行

code runner 可以只用单击就可以运行c++代码了

设置

怎么运行的时候自动读取目录的`in`数据文件

左下角打开齿轮图标(⚙️图) --> 设置 --> 输入`run code config` -->


1. `File Directory As Cwd` 选中,设cpp的路径为`g++`编译器运行的路径
2. 点击`Executor Map`,点击`在setting中编辑`,找到`"cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt"`

修改为

```
"cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt < in",
```
也就是在最后添加`<in`,这样可以保证运行的时候，直接读取in文件

 
## 调试单个文件

参考：[VS Code之C/C++程序的调试(Debug)功能简介](https://zhuanlan.zhihu.com/p/85273055)

点击左侧的调试按钮

选LLVM/GDB



怎么保证的每次调试的时候，自动读取`in`数据文件呢

修改`launch.json`的`args`参数为

```
"args": [ "<", "in" ],
```

不想每次手动在main函数下断点，希望可以自动在main停止？

在 launch.json 文件中添加 stopAtEntry 字段，并将其设置为 true。这将在程序开始时立即停止在 main 函数。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            ...
            "stopAtEntry": true,   // 将 stopAtEntry 设置为 true
            ...
        }
    ]
}
```
