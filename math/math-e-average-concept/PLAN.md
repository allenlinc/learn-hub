# PLAN · 平均数概念

| 项目 | 值 |
|------|-----|
| 课件标题 | 平均数概念 |
| node_id | `math-e-average-concept`（manifest / `<meta teachany-node>` / 知识图谱挂树 三者一致） |
| 学科 / 学段 / 年级 | math / elementary / 4（小学四年级） |
| 知识域 | statistics-probability（统计与概率） |
| 英文名 | Mean |
| 课标 | 义务教育数学课程标准（2022年版） |
| 节点类型 | 课标/图谱正式知识点（官方树已存在，无需 register） |
| 发起入口 | tree |
| lesson_type | new-concept |

## 知识层引用表（knowledge-context.json）

### 课标要点 excerpts
| KCP id | 来源 | 要点 |
|--------|------|------|
| ce-1 | 用户提供（2022 统计与概率） | 经历简单的数据收集、整理和分析过程，了解平均数的意义，会求简单数据的平均数（结果为整数）。 |
| ce-2 | 用户提供（2022 统计与概率） | 能读懂简单的统计图表，能从媒体获得简单的统计数据，并用自己的语言描述数据的集中趋势。 |
| ce-3 | 用户提供（2022 统计与概率） | 感受平均数的价值，能用平均数解决简单实际问题，初步形成数据意识。 |

### 练习 exercise
| KCP id | 题目 | 答案 | 关联 |
|--------|------|------|------|
| ex-1 | 四次测验 85、91、78、90，求平均分 | (85+91+78+90)÷4 = 86 分 | ce-1 |
| ex-2 | 小明 3 局得 2 分、小红 5 局得 4 分，谁平均每局更高 | 小明≈0.67，小红=0.8，小红更高 | ce-3 |

### 常见错误 common_errors
| KCP id | 错误 | 纠正 | 关联 |
|--------|------|------|------|
| err-1 | 求平均数除以最大数或除以 2，而非除以数据个数 | 总数÷数据个数 | ce-1 |
| err-2 | 把平均数当成组里真实存在的数据 | 平均数是匀一匀后的代表值 | ce-1 |
| err-3 | 忽视极端值，盲目相信平均数 | 极端值会拉高/拉低平均数 | ce-3 |

### 前置 / 后续
- prerequisites: `math-e-add-subtract`、`math-e-data-collect`
- leads_to: `math-e-average-median`
- textbook_refs: 人教版四年级下册 第八单元 平均数与条形统计图

## 交付物清单
- `index.html` — 14 页 v2 课件（小学暖色覆盖 `teachany-elementary`），含五件套标准模块（CDN）
  - 真实互动（纯本地 Canvas，无外部 CDN 依赖）：① **均分积木** `fairCanvas`（甲乙丙丁糖果柱，−/+ 调整，⚖️自动匀一匀递归移多补少，虚线为平均数）；② **极端值** `outlierCanvas`（转校生分数滑块 0–200，实时显示平均数被拉高/拉低）
  - 闭环：封面 → 问题锚点(ABT) → 学习目标 → 前测 → 概念(意义/算法) → 例题 → 互动(均分积木/极端值) → 概念测验 → 后测 → 总结 → 综合与迁移(口诀/五镜头/分层练习) → 知识图谱 → AI 学伴
- `manifest.json` — node_id 与 meta、知识图谱挂树一致
- `knowledge-context.json` — 3 excerpt + 2 exercise + 3 error（fallback_used=true，依工作流用用户提供课标要点填充）
- `assets/hero-infographic.svg` — 知识结构图（移多补少：5/9/7/3 → 平均数 6）
- `assets/intro.mp4` — 平均数主题片头（ffmpeg mpeg4，暖色 + 中文标题）
- `tts/manifest.json` + `tts/*.mp3` — 8 段 Edge-TTS 旁白（zh-CN-XiaoyiNeural，平均数主题）
- `PLAN.md` — 本文件

## 校验（validate-courseware.cjs, 24 项）
结果：**24/24 全部 PASS**。
- #1 ABT（为什么学）、#4 诊断性反馈（易错 hint + 再想想）、#8 五镜头深层理解、#10 三段式分层练习、#17 口诀卡、#20 连续音频(8/8)、#21 视频(controls/playsinline)、#22 Canvas 真实互动（getContext/draw + pointer/click/input 事件 + 按钮/滑块控件）。
- node_id 一致性：manifest.node_id、`<meta teachany-node>`、`data-teachany-kg` 均为 `math-e-average-concept`。

## 交付说明（重要）
- **永不发布到 TeachAny 社区**：仅本地生成 + 提交 GitHub（SSH）+ 学科主页挂链接。
- **悬浮坞（floating-dock.js）CDN 实测 404**（teachany-floating-dock.js / floating-dock.js / teachany-dock.js 全部 404，仅 CSS 200），按依赖豁免条款不引入；AI 学伴 / 知识图谱 / section hints / TTS / 导师卡片均按可用 CDN 正常引入。
- 互动采用纯本地 Canvas，规避 GeoGebra/PhET 外部依赖与 404 风险。
