# 北京卓瑞斯光电科技有限公司 — Jekyll 网站

从易优CMS迁移到Jekyll静态站。合并了 jollystar.cn 和 cn.jollystar.com 的内容。

## 本地运行

```bash
# 安装依赖
bundle install

# 本地预览
bundle exec jekyll serve

# 访问 http://localhost:4000
```

## 部署

### 方案一：Cloudflare Pages（推荐，免费）
1. 把整个 `hermes-jekyll/` 目录上传到 GitHub
2. 在 Cloudflare Pages 中连接该仓库
3. 构建命令：`jekyll build`（或在 Cloudflare 中选择 Jekyll 框架）
4. 输出目录：`_site`
5. 自定义域名：`cn.jollystar.com`

### 方案二：GitHub Pages
1. 上传到 GitHub 仓库
2. 在仓库 Settings → Pages 中启用
3. 选择 Jekyll 即可自动构建

### 方案三：手动部署到服务器
```bash
bundle exec jekyll build
# 将 _site/ 目录下的内容上传到服务器 www 目录
```

## 网站结构

```
hermes-jekyll/
├── _config.yml          # 站点配置
├── _layouts/            # 页面模板
│   ├── default.html     # 基础布局（含header/footer）
│   └── post.html        # 文章布局
├── _includes/           # 组件
│   ├── head.html        # <head> 标签
│   ├── header.html      # 导航栏
│   └── footer.html      # 页脚
├── _posts/              # 新闻文章
├── index.html           # 首页
├── about.md             # 关于我们
├── contact.md           # 联系我们
├── careers.md           # 人才招聘
├── products/            # 产品页面
│   ├── index.md         # 产品总览
│   ├── 1064nm.md        # 1064nm场镜
│   ├── 355nm.md         # 355nm场镜
│   └── ...
├── news.md              # 新闻中心
├── events.md            # 公司动态
├── industry.md          # 行业资讯
└── assets/              # 静态资源
    ├── css/style.css    # 样式（响应式）
    ├── js/main.js       # 交互脚本
    └── images/          # 图片

## 移动端

全站采用响应式设计，自动适配手机和桌面。移动端有独立的汉堡菜单导航。
