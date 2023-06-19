# Rainboy的电子书



## nginx配置

如果需要使用nginx来托管静态网站,参考配置如下

```
server {
  listen 80;
  server_name YOUR_DOMMAIN;
  root /path/to/neorbook/;
  index index.html;


  #配置以 / 为结尾的路径
  location ~(.*)\/$ {
    try_files $1.html $1 $1/=404;
  }

  location / {
    try files Suri.html Suri Suri/=404;
  }
}
```

## markdown 插件

- [Antonio-Laguna/markdown-it-image-figures](https://github.com/Antonio-Laguna/markdown-it-image-figures)

## 感谢

- [antfu/Vitesse](https://github.com/antfu/vitesse)
- [【發佈】匯文明朝體](https://zhuanlan.zhihu.com/p/344103391)


