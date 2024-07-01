FROM nginx:alpine

# 复制nginx配置文件到正确的位置
COPY nginx.conf /etc/nginx/nginx.conf

# 复制index.html到镜像中的目录
COPY index.html /usr/share/nginx/html/index.html

# 替换默认的nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf

# 复制启动脚本
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 暴露80端口
EXPOSE 80

# 启动nginx并运行启动脚本
CMD ["/docker-entrypoint.sh"]
