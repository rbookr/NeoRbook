# 组件的使用

## gallery 轮播组件

使用vue的[slot功能](https://vuejs.org/guide/components/slots.html)实现


使用方式如下
```
<gallery title="" :width="600">

<div>image 1 </div>
<div>image 2 </div>
<div>image 3 </div>

<template v-slot:log>
    <p>log 1</p>
    <p>log 2</p>
    <p>log 3</p>
</template>
</gallery>
```