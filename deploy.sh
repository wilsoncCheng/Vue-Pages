#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e
git add .
git commit -m"第二次第八周修改"
git push
npm run build
 
git add dist -f

git commit -m"adding dist"
git subtree push --prefix dist origin gh-pages
cd -