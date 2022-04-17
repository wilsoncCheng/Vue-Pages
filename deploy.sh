#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build
 
git add dist -f

git commit -m"adding dist"
git subtree push --prefix dist origin gh-pages


git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wilsoncCheng/Vue-Pages.git main:gh-pages
cd -