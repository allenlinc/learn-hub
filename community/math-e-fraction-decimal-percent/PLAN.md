# PLAN · 分数、小数、百分数互化

| 项目 | 值 |
|------|-----|
| 课件标题 | 分数、小数、百分数互化 |
| node_id | `math-e-fraction-decimal-percent`（manifest / `<meta teachany-node>` / 知识图谱挂树 三者一致） |
| 学科 / 学段 / 年级 | math / elementary / 6（小学六年级） |
| 知识域 | number-algebra（数与代数） |
| 英文名 | Percentages / Fractions / Decimals |
| 课标 | 义务教育数学课程标准（2022年版） |
| 节点类型 | 课标/图谱正式知识点（官方树已存在，无需 register） |
| 发起入口 | tree |
| lesson_type | new-concept |

## 知识层引用表（knowledge-context.json）

### 课标要点 excerpts
| KCP id | 来源 | 要点 |
|--------|------|------|
| ce-1 | 用户提供（2022 数与代数） | 结合具体情境探索并理解小数和分数的意义，感悟计数单位；会进行小数、分数的转化，发展数感和符号意识。 |
| ce-2 | 用户提供（2022 数与代数） | 能用直观方式表示分数和小数，会比较大小；会进行小数和分数的转化（不含循环小数化分数）。 |
| ce-3 | 用户提供（2022 数与代数） | 数的运算教学应统筹整数、小数、分数四则运算，感悟运算一致性：加减都要在相同计数单位下进行。 |

### 练习 exercise
| KCP id | 题目 | 答案 | 关联 |
|--------|------|------|------|
| ex-1 | 把 3/4、0.72、75% 化成小数并从小到大排列 | 3/4=0.75，75%=0.75，0.72；3/4=75% > 0.72 | ce-1 |

### 常见错误 common_errors
| KCP id | 错误 | 纠正 | 关联 |
|--------|------|------|------|
| err-1 | 小数化百分数时小数点左移两位（0.25→2.5%） | 右移两位加 %：0.25→25% | ce-2 |
| err-2 | 分数化小数搞反被除数/除数：1/4=4÷1=4 或 0.14 | 分子÷分母：1÷4=0.25 | ce-1 |
| err-3 | 百分数化小数忘去 % 或移错位：120%→0.012 或 120 | 去 % 左移两位：120%→1.20 | ce-2 |

### 前置 / 后续
- prerequisites: `math-e-fractions-meaning`、`math-e-decimals-intro`
- leads_to: `math-e-percentage-statistics`
- textbook_refs: 人教版六年级上册 第六单元 百分数

## 交付物清单
- `index.html` — 16 页 v2 课件（小学暖色覆盖），含 5 件套标准模块（CDN）
  - 真实互动：① 分数⇄小数⇄百分数 转换器（输入联动 + 100 格百分数方块 + **Canvas 数轴，可点击标位**）；② GeoGebra 数轴嵌入
  - 闭环：问题锚点 → 学习目标 → 前测 → 3 概念讲解 → 例题 → 动手互化 → 探究 → 概念测验 → 后测 → 总结 → 知识图谱 → AI 学伴 → 综合与迁移（口诀/五镜头/分层）
- `manifest.json` — node_id 与 meta 一致
- `knowledge-context.json` — 3 excerpt + 1 exercise + 3 error（fallback_used=true，因官方知识层无该节点数据，依工作流用用户提供课标要点填充）
- `assets/hero-infographic.svg` — 知识结构图（分数/小数/百分数互化关系）
- `tts/manifest.json` + `tts/*.mp3` — 8 段 Edge-TTS 旁白（zh-CN-XiaoyiNeural）
- `PLAN.md` — 本文件

## 校验（validate-courseware.cjs, 24 项）
目标：全部 PASS。重点已修复项：
- #1 ABT（为什么学 banner）、#8 五镜头深层理解、#10 三段式分层练习、#17 口诀卡、#22 Canvas 真实互动（数轴 canvas + pointer 事件）。

## Phase 3.5
- 3.5a：设置反馈密码（set-feedback-password.py，写入 manifest.feedback.password_sha256）。
- 3.5b：**本地验证完成后，暂停并询问用户是否发布**（不自动发布）。
