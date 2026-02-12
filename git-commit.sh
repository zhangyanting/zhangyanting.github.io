#!/bin/bash
# Git 提交脚本 - 添加4篇新论文

cd /Users/yanting/Projects/zhangyanting.github.io-feature-add

# 初始化 git 仓库（如果还没有）
if [ ! -d .git ]; then
    git init
fi

# 添加远程仓库（如果还没有）
if ! git remote | grep -q origin; then
    git remote add origin https://github.com/zhangyanting/zhangyanting.github.io.git
fi

# 添加文件
git add _bibliography/papers.bib

# 提交
git commit -m "添加4篇新论文：ICLR 2026和NeurIPS 2025"

# 切换到 feature/add 分支（如果不存在则创建）
git checkout -b feature/add 2>/dev/null || git checkout feature/add

# 推送到远程
git push origin feature/add

echo "✅ 完成！论文已提交到 feature/add 分支"

