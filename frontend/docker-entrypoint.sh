#!/bin/sh

# 复制index.html到共享卷
cp /usr/share/nginx/html/index.html /usr/share/nginx/html/index.html.bak
cp /usr/share/nginx/html/index.html.bak /usr/share/nginx/html/index.html

# 启动nginx
nginx -g 'daemon off;'
