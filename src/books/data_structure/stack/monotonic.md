---
title: "单调栈"
status: "TODO"
---

## 入门题目:【模板】单调栈


https://www.luogu.com.cn/problem/P5788


朴素的暴力算法是$o(n^2)$,但给的数据范围要求$O(n)$内解决

想一想我们,一个一个读取数据,然后类似插入排序一样,在维护一个有序的序列

```

  +-+
  | |                +-+
  | |                | |
  | |                | |
  | | +-+            | |
  | | | | ++         | |
  | | | | || ++      | |
  | | | | || ||      | |
--+-+-+-+-++-++------+-+--
```

在插入新的值x的值,序列有序,且都是在x左边的数(一种时间上的先后,也是一种位置上的左右)

x会插入到序列中比大小

核心思想: 维护单调

### 代码

```c
<%- include("5788.cpp") %>
```


## 题目2: 直方图中最大的矩形

https://www.acwing.com/problem/content/133/

核心思想: **截断**

### 代码

```cpp
<%- include("acw_131.cpp") _%>
```
