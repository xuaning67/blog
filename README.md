# fenglei-blog

个人博客源码，使用 [Hugo](https://gohugo.io/) + [Dream](https://github.com/g1eny0ung/hugo-theme-dream) 主题构建，部署在 [Netlify](https://www.netlify.com/)。

- 线上地址：https://feng-blog.netlify.app/
- Hugo：0.160.1 extended（见 `netlify.toml`）
- 主题：Dream v3.19.1（`themes/dream/`，Tailwind + daisyUI + Alpine.js）

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

文章使用 page bundle，图片和正文放在同一目录：

```sh
hugo new posts/my-post/index.md
```

```text
content/posts/my-post/
├── index.md
└── cover.jpg   # front matter 中写 cover: cover.jpg，Hugo 会自动转 webp
```

常用 front matter 字段见 `archetypes/posts/index.md`。`<!--more-->` 之前的内容会作为列表页摘要。

## 目录结构

```text
config.toml          # 站点与主题参数
content/posts/       # 文章（page bundle）
content/about/       # 关于页，子页面会显示在翻面/关于页
content/search/      # 搜索页（noindex）
data/socials.toml    # 关于页的社交链接
assets/js/grid.js    # 覆盖主题的瀑布流脚本（响应式重排）
layouts/robots.txt   # 带 Sitemap 的 robots.txt
netlify.toml         # 构建命令、Hugo 版本、缓存与安全响应头
themes/dream/        # Dream v3.19.1
```

## 部署

推送 `main` 分支后由 Netlify 自动执行 `hugo --gc --minify` 并发布 `public/`。

## 主题定制

主题产物（`themes/dream/assets/css/output.css`、`assets/js/*`）是预编译并提交的。如需改样式或脚本：

```sh
cd themes/dream
pnpm install
pnpm run build
```

优先级：项目根目录的 `assets/` > 主题的 `assets/`，因此小改动建议直接放在根目录 `assets/` 下覆盖，不要修改 `themes/dream/`。
