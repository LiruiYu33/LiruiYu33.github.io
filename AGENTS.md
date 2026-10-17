# AGENTS.md — 个人作品集网站交接文档

给接手更新这个网站的 AI Agent（Codex、Claude Code 等）和人看。动手前请完整读一遍。

## 这是什么

虞礼瑞（Lirui Yu）的个人作品集网站，是纸质简历的延伸。线上地址：https://liruiyu33.github.io/

- 纯静态网站：HTML + CSS + 原生 JS，没有构建步骤、没有依赖、没有框架。
- 部署：GitHub Pages，仓库 `LiruiYu33/LiruiYu33.github.io` 的 `main` 分支根目录。推送后约 30–60 秒自动上线。
- `.nojekyll` 让 Pages 跳过 Jekyll，直接发布原文件。**仓库里的所有文件（包括本文件）都会公开可访问**，不要放任何隐私信息。

## 必须遵守的规则

1. **网站是简历的超集，只增不减。** 纸质简历受篇幅限制会删减内容，网站要保持全面、详细。用新简历更新网站时：
   - 新增或变化的内容 → 合并进网站。
   - 简历里删掉、但网站上还有的内容 → **保留**，列出来问用户要不要删。**未经用户明确同意，不得删除网站上的任何内容。**
2. **推送前必须得到用户同意。** 流程：本地修改 → 本地预览给用户看 → 用户同意 → commit + push → 确认线上已更新。
3. **不改写 git 历史**，不强制推送。
4. **不放隐私信息**：手机号、年龄、性别不上网站。邮箱只能用 Base64 形式存放（见下文），源码里不得出现明文邮箱。
5. **措辞要准确**：公司的项目不能写得像个人自研（例如 RAGFlow 是英飞流公司的产品，不能写“自研”）。数字以用户提供的简历为准，不要自己编或“优化”数字。
6. 中英双语都要更新。英文由中文翻译而来，保持事实一致。

## 文件结构

| 文件 | 作用 | 是否常改 |
|---|---|---|
| `data.js` | **全部内容**，挂在 `window.SITE` 上 | 是，几乎所有更新只改这里 |
| `main.js` | 把 `data.js` 渲染成页面；语言切换、动画、筛选、邮箱解码 | 很少 |
| `style.css` | 样式；浅色/深色主题变量在 `:root` | 很少 |
| `index.html` | 页面骨架、`<title>` 和链接预览 meta | 很少 |
| `assets/` | 本地图片（如 `safelane.jpg`） | 加截图时 |

## data.js 写法

- 文字字段写成 `{ zh: "...", en: "..." }`。只写一种语言也行，缺的会自动用另一种。纯字符串（如技术名）原样显示。
- 某块数据为空，对应区块会自动隐藏。
- 文件顶部定义了几个共用标签常量：`TESTING`、`DATA`、`CLOUD`、`APP`。

顶层字段：

| 字段 | 说明 |
|---|---|
| `name` / `title` / `tagline` | 首屏姓名、职位方向、一句话介绍 |
| `avatar` | 头像路径，留空不显示（目前有意留空） |
| `emailB64` | 邮箱的 Base64。换邮箱：`printf '新邮箱' \| base64` |
| `highlights` | 首屏下方数字条：`{ value, prefix?, suffix?, label }`，数字会滚动计数 |
| `links` | 首屏按钮：`{ label, url }`；邮箱按钮写 `{ label, email: true }` |
| `skills` | 技能分组：`{ group, items, core? }`；`core` 里的技能会高亮 |
| `experience` | 工作经历：`{ company, role, period, points, links }` |
| `projects` | 项目，见下表 |
| `education` | `{ school, degree, period, note }` |
| `awards` | `{ name, date }` |

项目字段：

| 字段 | 说明 |
|---|---|
| `name`, `period` | 名称、时间（“至今”写成 `{ zh: "2026.06 – 至今", en: "2026.06 – present" }`） |
| `featured: true` | 显示为“代表作”大卡片，排在前面；其余进“更多项目”网格 |
| `tags` | 用于“更多项目”的筛选按钮 |
| `metrics` | 代表作卡片上的关键数字标签 |
| `summary` | 卡片简介 |
| `stack` | 技术栈标签 |
| `details` | 点“展开详情”后显示的要点列表 |
| `image` | 代表作截图（`assets/xxx.jpg` 或外链）；没有图时显示 `cover: { big, small }` 渐变大字 |
| `imagePosition` | 截图裁切对齐，默认 `"top left"`，例如 `"left center"` |
| `links` | `{ label, url }`；私有仓库用 `{ label, email: true, subject }` 生成“申请访问”邮件 |

数组顺序就是页面显示顺序。

## 本地预览

```bash
python3 -m http.server 8765
```

在仓库根目录运行，然后打开 http://localhost:8765 。浏览器可能缓存旧的 CSS/JS，看不到改动时按 Cmd+Shift+R 强制刷新。

改完至少检查：

- 页面无控制台报错；中英文切换正常（右上角按钮）。
- 改到的卡片显示正确；数据文件能被解析：`node -e "global.window={};require('./data.js');console.log(Object.keys(window.SITE))"`
- 源码里没有明文邮箱：`grep -nE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}' data.js main.js index.html` 应无输出。

## 截图素材

- 用户的项目仓库都 clone 在本机 `~/Developer/` 下，找截图优先去那里（如 Playwright 输出、`public/` 里的宣传图）。
- 不要用测试环境里满是 “Unavailable”、加载中或深色模式的截图；用户偏好浅色界面。
- 有线上地址的项目，用无头浏览器以浅色模式截线上版效果最好。
- 存为 JPEG（约 1600px 宽、质量 82 左右），放进 `assets/`。

## 设计约定

- 风格：克制、专业；动效点到为止，并尊重系统的“减少动态效果”设置。
- 颜色都用 `style.css` 里 `:root` 的变量，浅色和深色主题都要正常显示。
- 语言判断：先看访客上次的选择（localStorage `lang`），否则浏览器语言以 `zh` 开头显示中文，其他显示英文。
