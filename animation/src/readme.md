# 说明

这是一个动画库，用于在网页中播放动画。基于d3.js

## 使用方法

一个移动的小球


## 设计思路

1. 如何抽象对象,
    通过类来实现,类的继承来实现
1. 有哪些抽象对象
 - rect
 - circle
 - link
 - grid
 - text
 - g
2. 如何得到数据
    d3.js通过`data`方法把原始数据线定到svg对象上,然后用render函数把数据渲染到svg上,这样每一次新的项目都要写一次新的render函数
    我没有采用这种方法,我采用的是,先操作svg对象,这样会修改svg对象的属性
    例如
    ```
    <rect x="0" y="0" width="100" height="100" fill="red"></rect>
    ```
     rect.x(100)
    ```
    <rect x="100" y="0" width="100" height="100" fill="red"></rect>
    ```
    然后通过`add_dump_attr`,`dumps()`方法把svg对象的属性转换成json对象,
    甚至可以导出`ease,duration`等属性
    然后通过 `play(dumps)`方法,把json对象转换对应svg的属性
    ```

