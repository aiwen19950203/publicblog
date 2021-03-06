#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'www.saven.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# https://github.com/aiwen19950203/publicblog.git

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/aiwen19950203/publicblog.git master:gh-pages

cd -