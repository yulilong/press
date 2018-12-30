#!/usr/bin/env sh

# 需要执行一下面命令 才能执行这个脚本 ./deploy.sh
# chmod +x deploy.sh

# 生成静态文件
vuepress build .

# 进入生成的文件夹
cd ./.vuepress/dist

# 初始化一个仓库，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪
git init

# 保存所有的修改
git add -A

# 把修改的文件提交
git commit -m 'deploy'


# 返回到上一次的工作目录
cd -