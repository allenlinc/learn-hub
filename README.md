# 学科学习网站 (Study Website)

一个面向多科目的**静态学习资源导航网站**：首页按学科组织卡片，点击进入各学科页面查看**知识点目录**，并支持关键词搜索过滤。

## 在线访问

- GitHub Pages：`https://allenlinc.github.io/learn-hub/`
- 仓库地址：`https://github.com/allenlinc/learn-hub`

## 目录结构

```
learn-hub/
├── index.html          # 首页：学科导航目录（带搜索）
├── README.md           # 本说明
├── .gitignore
├── assets/
│   ├── style.css       # 共享样式（浅色主题、响应式）
│   └── app.js          # 通用目录搜索过滤
├── chi/                # 语文 Chinese
│   └── index.html      # 语文学科知识点目录
├── eng/                # 英语 English
├── math/               # 数学 Math
├── phy/                # 物理 Physics
├── chem/               # 化学 Chemistry
├── bio/                # 生物 Biology
├── hist/               # 历史 History
├── geo/                # 地理 Geography
└── pol/                # 政治 Politics
```

每个学科文件夹内都有一份 `index.html`（知识点目录页）和一份 `README.md`（文件夹说明）。

## 学科与知识点

| 学科 | 文件夹 | 说明 | 知识点数 |
|------|--------|------|---------|
| 语文 Chinese | `chi/` | 阅读理解、写作、古诗文、基础知识 | 14 |
| 英语 English | `eng/` | 词汇、语法、阅读与写作 | 11 |
| 数学 Math | `math/` | 数与代数、图形与几何、统计与概率 | 15 |
| 物理 Physics | `phy/` | 力学、电学、热/光/声、现代物理 | 14 |
| 化学 Chemistry | `chem/` | 物质构成、化学反应、实验、化学与生活 | 11 |
| 生物 Biology | `bio/` | 细胞、遗传、生理、生态 | 12 |
| 历史 History | `hist/` | 中国史、世界史、专题史 | 13 |
| 地理 Geography | `geo/` | 自然地理、人文地理、区域地理 | 10 |
| 政治 Politics | `pol/` | 道德与法治、国情与制度、价值观 | 9 |

> 各页面顶部搜索框可实时过滤学科 / 知识点。

## 本地预览

直接用浏览器打开 `index.html` 即可看到学科导航页；进入 `chi/`、`math/` 等子目录查看对应知识点目录。

## 目录约定

- 每个学科一个文件夹，使用英文缩写命名（避免 URL 编码问题）。
- 各文件夹内放置 `index.html` 作为网站入口页、`README.md` 作为说明。
- 后续可按知识点再分子目录，例如 `math/shuxue-xiaoshu/`（小数）。

## 贡献

欢迎补充各学科资料，提交 PR 或在本地直接编辑后推送：

```bash
git add .
git commit -m "feat: 补充某学科知识点"
git push origin main
```
