---
title: "美国自由职业者税款追踪表：哪些钱能花，哪些该留"
description: "不确定自由职业收入该留多少交税？用虚构的 2027 年伊利诺伊州例子看清收支，明确标注 2026 年备用参数，分别记录联邦和州税付款。"
locale: "zh"
slug: "freelancer-income-expense-tax-tracker-us"
translationKey: "freelancer-income-expense-tax-tracker-us"
domain: "business"
publishedAt: "2026-11-05"
updatedAt: "2026-11-05"
researchDates:
  - "2026-11-05"
locales:
  - "en"
  - "zh"
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
sources:
  - title: "Schedule C instructions"
    url: "https://www.irs.gov/instructions/i1040sc"
    accessDate: "2026-11-05"
  - title: "IRS 2026 inflation adjustments"
    url: "https://www.irs.gov/irb/2025-45_IRB"
    accessDate: "2026-11-05"
  - title: "2026 Schedule SE"
    url: "https://www.irs.gov/pub/irs-pdf/f1040sse.pdf"
    accessDate: "2026-11-05"
  - title: "SSA contribution and benefit base"
    url: "https://www.ssa.gov/oact/cola/cbb.html"
    accessDate: "2026-11-05"
  - title: "Illinois income-tax rates"
    url: "https://tax.illinois.gov/research/taxrates/income.html"
    accessDate: "2026-11-05"
  - title: "Illinois exemption FAQ"
    url: "https://tax.illinois.gov/questionsandanswers/answer.851.html"
    accessDate: "2026-11-05"
  - title: "Additional Medicare tax"
    url: "https://www.irs.gov/taxtopics/tc560"
    accessDate: "2026-11-05"
  - title: "draft Form 8995 basis"
    url: "https://www.irs.gov/pub/irs-dft/f8995--dft.pdf"
    accessDate: "2026-11-05"
  - title: "IRS estimated-tax rules"
    url: "https://www.irs.gov/faqs/estimated-tax"
    accessDate: "2026-11-05"
  - title: "OPM holiday calendar"
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/"
    accessDate: "2026-11-05"
  - title: "2026 federal estimated-tax form"
    url: "https://www.irs.gov/pub/irs-pdf/f1040es.pdf"
    accessDate: "2026-11-05"
  - title: "2026 Illinois estimated-tax form"
    url: "https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/incometax/documents/currentyear/individual/il-1040-es.pdf"
    accessDate: "2026-11-05"
headlineFigures:
  forecast_annual_gross_receipts:
    label: "Fictional full-year gross receipts forecast"
    value: 85000
    unit: "per_year"
    currency: "USD"
    display: "$85,000"
  forecast_annual_deductible_expenses:
    label: "Fictional full-year deductible-expense forecast"
    value: 12000
    unit: "per_year"
    currency: "USD"
    display: "$12,000"
  recommended_profit_reserve_rate:
    label: "Model reserve on positive taxable cash profit, not gross receipts"
    value: 27
    unit: "percent"
    display: "27%"
  combined_annual_estimated_tax:
    label: "Fictional combined annual estimated tax with fallback assumptions"
    value: 18247.3
    unit: "per_year"
    currency: "USD"
    display: "$18,247.30"
audience: "US cash-basis freelancers in Illinois, including Chinese speakers."
faq: []
draft: false
---

**担心把以后要交税的钱也花掉了？先看实际收款，不要看发出了多少发票。这个虚构例子按全年收款 $85,000、可扣除费用 $12,000，建议对正的应税现金利润预留 27%，不是对发票或收款总额预留。**把可扣除费用、储蓄转账和实际缴税分开记，才看得清手里的钱。

**所有示例客户、发票、收款、费用和储蓄转账均属虚构。计算 2027 年联邦和伊利诺伊州税款时，仍暂用下文标注的 2026 年备用参数。缴预估税前请先更新，也请税务专业人士确认你的情况。这份内容供规划参考，不是税务建议。**

## 先看看，这个例子适不适合你

这里的数字和规定以 2026年11月5日 为准。例子适用于按实际收付款记账的独资经营者：单身申报，全年居住伊利诺伊州，年龄低于 65 岁，无受抚养人、雇员、工资收入、其他收入、预扣税或税收抵免，并使用标准扣除额。你的情况若不同，就要另算；这不是通用美国税务计算器，也不是可以直接提交的报税表。

使用“下载工作簿”列出的工作簿时，把发票、收款、费用和税款储蓄各放在自己的位置。银行记录和收据也一起保留，方便逐项核对，不要只看合计。全部美元金额保留为 USD，不作换算。

练习记录覆盖 2027年1月1日–2027年3月31日：24 张发票、23 笔收款、29 笔费用和 3 笔储蓄转账。截止日暂设为 2027年3月31日；这些都不是真实发生的交易。先保存干净的工作副本，只清除蓝色示例输入，保留公式，再把 `assumptions!B7` 改成实际复核日期。只改年份标签，不会把表内固定日期一起移到其他年份。

## 每周操作流程，不是另一个银行账户

| 工作表 | 实用操作 | 限制或检查 |
|---|---|---|
| `assumptions` | 在 `B7` 设置复核日期，`B8` 设置全年收款预测，`B9` 设置可扣除费用预测，`B10` 设置期初储蓄 | 仅修改蓝色输入；上年税额字段核实前留空，不能视为零 |
| `invoices` | 输入唯一编号、开票日期、客户、完整开票金额及到期日 | 200 个预设行，`6–205`；付款日期指最近一次收款，即使仅部分收款 |
| `payments` | 按发票编号记录每笔实际收款总额 | 400 行，`6–405`；部分收款分别占行，不要重复发票 |
| `expenses` | 记录已付现金、类别、商业用途及业务使用比例 | 400 行，`6–405`；凭证放在工作簿外，以费用编号命名 |
| `monthly summary` | 比较现金结余、应税现金利润、建议储备及储蓄余额 | 在 `I` 列输入截至复核日期已实际转入的储蓄；排除当月较晚的转账 |
| `quarterly estimated-tax` | 比较联邦及伊利诺伊州计划；分别记录实际缴税 | 在 `G:H` 及 `I:J` 的 `43–46` 行输入付款日期和金额；保留银行明细证据 |

每周留约 15 分钟，核对收款总额是否等于银行入账加单独记录的手续费。别先从收款里减掉手续费，又把它扣作费用。看到重复编号、未关联收款、未来日期或类别提示，就逐项处理。预设行用完后，要扩展所有相关公式和范围，不只是眼前的表格。

钱花出去了，不一定就能抵税。先按业务使用比例分摊；符合条件的商务餐饮再用单独的 50% 系数。标为 `Review / capital asset` 的设备，确认税务处理前不计扣除。可以对照 [Schedule C 说明](https://www.irs.gov/instructions/i1040sc)检查类别。这里对经常性软件和支付手续费的归类只是建议，不是 IRS 强制规定。分类依据为 2026 年表格和 2025 年说明，用于 2027 年前请更新。

月度总额只计复核日期当日或之前的 2027 年现金，发票账龄也统计到同一天。建议存钱，不等于钱已转走；记了储蓄，也不等于已经缴税。所得税付款和业主转账不是可扣除的经营费用。2028年1月 支付的 2027 年税款，留在季度记录中，不计入 2027 年月度现金总额。

## 使用百分比前，先理解储备

分别输入全年收款和可扣除费用预测，工作有变化时每月更新。预测不能低于已经记入的实际金额。实际数不会再重复加上去，也不会把练习记录自动放大成全年。这里用收款 $85,000 减可扣除费用 $12,000，得到预测经营利润 $73,000。

| 虚构的年度估算 | USD／比率 | 对你意味着什么 |
|---|---:|---|
| 常规自雇税 | $10,314.57 | 与联邦所得税分开 |
| 联邦所得税 | $4,719.30 | 按累进税率档和备用参数计算 |
| 伊利诺伊州所得税 | $3,213.43 | 从联邦调整后总收入起算，而非扣除标准扣除额／QBI 后的收入 |
| 合计预估税 | $18,247.30 | 包含附加 Medicare 税，本例该项为零 |
| 建议储备 | 27% | 合计税额／正的预测利润，加 2 个百分点，再向上取整到整数百分比 |

把 27% 用于现金收款减可扣除费用后的正值。比如每月正的应税现金利润为 $5,000，就建议存下 $1,350。亏损月份不建议转入，但不代表能退税。比率上限为 100%；这不是你的边际税档或政府规定比率，也不能保证一定存够。季度计划以全部预测税额为目标，不包含单独的储备缓冲。

**现金结余少，不一定就能少留税款。**截至虚构的 2027年3月31日，收款为 $19,600，现金支出为 $3,040.97，手里现金结余为 $16,559.03。但能扣除的只有 $2,388.72，应税现金利润因此为 $17,211.28。若把全部支出都算成可扣除费用，就会少留这笔储备。储蓄记录合计 $4,850，也只是练习数字，不是真实转账。

## 缴税前，先更新这些参数

使用前，请确认最终的 2027 年联邦通胀调整金额和伊利诺伊州免税额，再核对 2027 年预估税表。下面只是暂用参数，不代表最终规定尚未发布。不要未经核对，就照着这个例子付款。

| 输入 | 这里采用的金额 | 要确认什么 |
|---|---|---|
| 单身标准扣除额 | $16,100 | [IRS 2026 年通胀调整](https://www.irs.gov/irb/2025-45_IRB)；2026 年备用参数，联邦税率档同样暂用 |
| 简化 QBI 上限 | $201,750 | 同样暂用 2026 年参数；超过上限不计扣除。请专业人士复核，这里不计算过渡区间 |
| 自雇净收入系数 | 92.35% | [2026 Schedule SE](https://www.irs.gov/pub/irs-pdf/f1040sse.pdf)；常规税使用 12.4% Social Security 及 2.9% Medicare，净收入最低门槛 $400 |
| Social Security 工资基数上限 | $192,300 | [SSA 缴费及待遇基数](https://www.ssa.gov/oact/cola/cbb.html)；已公布的 2027 年数值，用它代替旧上限 |
| 伊利诺伊州统一税率 | 4.95% | [伊利诺伊州所得税税率](https://tax.illinois.gov/research/taxrates/income.html)；沿用现行法律，不是新发布的 2027 年税率表 |
| 伊利诺伊州个人免税额 | $2,925 | [伊利诺伊州免税额问答](https://tax.illinois.gov/questionsandanswers/answer.851.html)；2026 年备用参数，计一个免税额，本申报人联邦 AGI 超过 $250,000 时不适用 |

另留意[附加 Medicare 税](https://www.irs.gov/taxtopics/tc560)：假设无工资，对超过单身门槛 $200,000 的部分适用 0.9%。不要把它算进常规自雇税的一半扣除额。简化 QBI 计算假设收入来自符合条件的境内活跃业务，不含资本利得和结转亏损，也省略了最低扣除额。使用前请确认资格；[Form 8995 草案](https://www.irs.gov/pub/irs-dft/f8995--dft.pdf)不能拿来申报。

## 缴税日期与安全港限制

| 收入期间 | 推导的预估税付款日期 |
|---|---|
| 2027年1月1日–2027年3月31日 | 2027年4月15日 |
| 2027年4月1日–2027年5月31日 | 2027年6月15日 |
| 2027年6月1日–2027年8月31日 | 2027年9月15日 |
| 2027年9月1日–2027年12月31日 | 2028年1月18日 |

这些收入期间不是等长的日历季度。日期按 [IRS 预估税规则](https://www.irs.gov/faqs/estimated-tax)和假日顺延推导，不是取自已发布的 2027 年表格。[OPM 假日表](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/)能解释最后一个日期：2028年1月15日 是星期六，2028年1月17日 是 Martin Luther King Jr. Day，因此顺延到 2028年1月18日。付款前，请确认联邦和伊利诺伊州日历，以及有无灾害宽限。

先作比较时，[2026 年联邦预估税表](https://www.irs.gov/pub/irs-pdf/f1040es.pdf)通常取当年税额的 90% 和上年税额的 100% 中较低者。上年 AGI 超过 $150,000 时，上年税额比例提高至 110%；上年申报须覆盖完整 12 个月。[2026 年伊利诺伊州预估税表](https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/incometax/documents/currentyear/individual/il-1040-es.pdf)另行比较当年税额的 90% 和上年税额的 100%。这些是用于 2027 年的备用规划规则，不是免罚保证。请用说明要求的上年税额，不只是当时还欠多少钱。

安全港不会免掉最终税单。按时缴很重要，后来补足也未必解决之前的少缴。工作簿比较的是累计全额税款目标，不计算法定罚款，也不采用收入年化方法。同一期分几次缴税时，另留银行明细，在这里填合计金额和最近付款日期。这种保守的时间简化处理，不能代替每笔付款凭证。

## 什么时候不能只靠此工作簿

收入不均、亏损、漏缴、资产、家庭办公室、退休或医保扣除、工资或投资收入、税收抵免、受抚养人、跨州搬迁或变更经营实体时，应寻求专业复核。退款、贷项通知、报销、代收销售税及存货须另行处理，不要伪装成普通正数收款或费用。首次缴税前确认个人资格及费用处理。

保留公式、更新假设，再把算出的合计与自己的记录核对。这些数字不会随税务规定变化自动更新。结果看起来不对，或还有提示没处理完，就先停下来解决，不要急着付款。

## 让 DeTars 帮你安排自由职业税款储备

把下面这段发给 DeTars，将 [方括号] 换成你的收入、费用和税务情况。

> 请按[居住州和申报身份]、[复核日期]、[全年收款和可扣除费用]、[其他收入和预扣税]、[上年税额和收入]以及[已存下和已缴的金额]，帮我规划按实际收付款记账的自由职业追踪表。分清发票与收款、支出与扣除、储蓄与缴税，提醒我要更新哪些假设、向税务顾问问什么。不要付款或提交报税表。

*把这份内容当作规划起点，不是税务建议；可以请合资格税务专业人士一起确认什么适合你。*

## 下载工作簿

这是原始示例工作簿的隐私检查发布副本，不是更新后的报价或个人财务记录。编辑前请保存副本，保留正文所述限制。

- [freelancer-tracker.xlsx](/scenarios/freelancer-income-expense-tax-tracker-us/freelancer-tracker.xlsx)

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [Schedule C instructions](https://www.irs.gov/instructions/i1040sc) — 查阅日期: 2026-11-05
- [IRS 2026 inflation adjustments](https://www.irs.gov/irb/2025-45_IRB) — 查阅日期: 2026-11-05
- [2026 Schedule SE](https://www.irs.gov/pub/irs-pdf/f1040sse.pdf) — 查阅日期: 2026-11-05
- [SSA contribution and benefit base](https://www.ssa.gov/oact/cola/cbb.html) — 查阅日期: 2026-11-05
- [Illinois income-tax rates](https://tax.illinois.gov/research/taxrates/income.html) — 查阅日期: 2026-11-05
- [Illinois exemption FAQ](https://tax.illinois.gov/questionsandanswers/answer.851.html) — 查阅日期: 2026-11-05
- [Additional Medicare tax](https://www.irs.gov/taxtopics/tc560) — 查阅日期: 2026-11-05
- [draft Form 8995 basis](https://www.irs.gov/pub/irs-dft/f8995--dft.pdf) — 查阅日期: 2026-11-05
- [IRS estimated-tax rules](https://www.irs.gov/faqs/estimated-tax) — 查阅日期: 2026-11-05
- [OPM holiday calendar](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/) — 查阅日期: 2026-11-05
- [2026 federal estimated-tax form](https://www.irs.gov/pub/irs-pdf/f1040es.pdf) — 查阅日期: 2026-11-05
- [2026 Illinois estimated-tax form](https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/incometax/documents/currentyear/individual/il-1040-es.pdf) — 查阅日期: 2026-11-05
