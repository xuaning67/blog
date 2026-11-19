# fenglei-blog

个人博客源码，使用 [Hugo](https://gohugo.io/) + [PaperMod](https://github.com/adityatelange/hugo-PaperMod) 构建，部署在 [Netlify](https://www.netlify.com/)。

- 线上地址：https://feng-blog.netlify.app/
- Hugo：0.160.1 extended（见 `netlify.toml`）
- 主题：PaperMod（`themes/PaperMod/`，零 JS 框架依赖，内置搜索）

## 本地开发

```sh
hugo server --disableFastRender
# 打开 http://localhost:1313
```

生产构建：

```sh
hugo --gc --minify
# 产物在 public/，该目录已被 .gitignore 忽略
```

## 写文章

文章使用 page bundle，封面和正文放在同一目录，Hugo 会自动生成响应式图片：

```sh
hugo new posts/my-post/index.md
```

```text
content/posts/my-post/
├── index.md
└── cover.jpg
```

front matter（注意 `cover` 是对象，不是字符串）：

```yaml
---
title: 文章标题
date: 2024-01-01T10:00:00+08:00
author: lfl
cover:
  image: cover.jpg
  alt: 封面说明
categories: [分类]
tags: [标签]
draft: false
---
```

`<!--more-->` 之前的内容会作为列表页摘要。

## 目录结构

```text
config.toml              # 站点、菜单、PaperMod 参数
content/posts/           # 文章（page bundle）
content/about/index.md   # 关于页
content/archives.md      # 归档页（layout: archives）
content/search.md        # 搜索页（layout: search）
assets/css/extended/     # 自定义样式（在主题样式之后加载）
layouts/robots.txt       # 带 Sitemap 的 robots.txt
netlify.toml             # 构建命令、Hugo 版本、缓存与安全响应头
themes/PaperMod/         # PaperMod 主题
```

## 部署

推送 `main` 分支后由 Netlify 自动执行 `hugo --gc --minify` 并发布 `public/`。

## 主题定制

优先使用 PaperMod 自带参数（见 `config.toml` 和[文档](https://github.com/adityatelange/hugo-PaperMod/wiki)）。
需要额外样式时放到 `assets/css/extended/*.css`；需要覆盖模板时在根目录 `layouts/` 下建同名文件，不要改 `themes/PaperMod/`。

升级主题：

```sh
git -C themes/PaperMod pull   # 如果主题目录是独立 clone
# 或重新下载官方压缩包覆盖 themes/PaperMod/
```
