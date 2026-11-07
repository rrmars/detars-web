---
title: "收入不固定的家庭预算：淡月也能从容一点"
description: "自由职业收入有高有低，用这份 Excel 稳住家庭每月提取额，为非月度账单预存，也把日常可花的钱分清。"
locale: "zh"
slug: "irregular-income-household-budget-template-us"
translationKey: "irregular-income-household-budget-template-us"
domain: "family"
publishedAt: "2026-11-05"
updatedAt: "2026-11-05"
researchDates:
  - "2026-11-05"
locales:
  - "en"
  - "zh"
producerDisplayLabel: "本文由 DeTars.xyz 的通用 Cowork 任务产出"
sources:
  - title: "USDA September 2026 food plans, issued October 2026"
    url: "https://fns-prod.azureedge.us/sites/default/files/resource-files/CostofFoodSep2026LowModLib.pdf"
    accessDate: "unknown"
  - title: "CCAoA 2025 price/supply report, published May 2026"
    url: "https://info.childcareaware.org/price-and-supply-2025"
    accessDate: "unknown"
  - title: "YMCA Wichita Falls preschool rates, effective August 17, 2026"
    url: "https://www.ymcawf.org/childcare/preschool/"
    accessDate: "unknown"
  - title: "Progressive's published question and answer"
    url: "https://www.progressive.com/answers/average-car-insurance-cost/"
    accessDate: "unknown"
  - title: "Amazon's US membership explanation"
    url: "https://www.aboutamazon.com/news/retail/how-to-sign-up-for-a-prime-membership"
    accessDate: "unknown"
  - title: "IRS FAQ"
    url: "https://www.irs.gov/faqs/estimated-tax/individuals/individuals-2"
    accessDate: "unknown"
  - title: "IRS overview"
    url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes"
    accessDate: "2026-11-05"
headlineFigures:
  first_month_breathing_room:
    label: "First month breathing room"
    value: 325.53
    currency: "USD"
    unit: "first_month"
    display: "$325.53"
  conservative_freelance_monthly_draw:
    label: "Conservative freelance monthly draw"
    value: 2348.44
    currency: "USD"
    unit: "per_month"
    display: "$2,348.44"
  first_month_total_separated_cash_pots:
    label: "First month total separated cash pots"
    value: 11132.5
    currency: "USD"
    unit: "month_end_cash"
    display: "$11,132.50"
audience:
  en: "US households combining two monthly salary checks with variable freelance income and family bills."
  zh: "美国家庭：每月有两份工资，另有收入不固定的自由职业收入，还要支付家庭账单。"
faq:
  - q: "“季度预估税何时到期？”"
    a: "IRS 问答对日历年缴付期列出 4月15日、6月15日、9月15日 和次年 1月15日，遇周末／节假日调整，并有例外。核查适用年度日期及个人情况。工作簿的 25% 预留既不计算应缴税，也不安排这些付款。IRS 概述解释预估税可能包含自雇税；仅把钱转到储蓄账户不等于缴税。"
  - q: "“如何最准确估算汽车保险费？”"
    a: "Progressive 已发布的问答指向保险公司真实报价。用自己的账单及到期日／周期替换 Funds B6；不要把仅责任险群体均值当作两辆贷款车报价。全年／半年付款保留在 Funds，不要又计入月订阅或交通消费。"
draft: false
---

**担心好月份赚的钱，还没等到下一张账单就花完了？先给自由职业收入留一个缓冲池，再稳定地转一笔给家用。** 这份 Excel 把每月两笔税后工资和保守提取额放在一起，也为非月度账单预存钱。首月真正多出的余量是 **$325.53**，不是三个资金池合计的 **$11,132.50**。每笔钱有自己的用途，先别混着花。

## 在本地模板副本中填写

配套资料 **[Excel 模板](/scenarios/irregular-income-household-budget-template-us/Household_Budget.xlsx)**和快速入门指南（原始辅助文件未公开；请依据本文内容操作）。若你已持有完整九表工作簿，请保存自己的副本，从 **Start** 开始。

**先看重点：** 工资加浮动自由职业收入怎么安排，这份 Excel 帮你留缓冲、预存非月度账单，也跟踪还债。先看懂输入和公式，再换成自己家的数字。

**你可能也在找：** 美国家庭不固定收入预算模板；自由职业收入 Excel 预算模板；家庭专项预存金表格；工资与自由职业家庭预算；家庭浮动收入预算模板。

**先按自己家来算，别套用示例价格。** 工作簿和资料日期是 **2026年11月5日**，另一次表格及来源核对也在 **2026年11月5日**。文件夹写11月4日，不是制作或阅读日期。示例覆盖 **2026年11月–2027年10月**，用美元为两名成人、一名学龄前孩子和两辆车试算。它不是典型美国家庭，不保证未来价格，也不是个人理财建议。保留提供的工作簿，在副本填自己的情况。

## 自己家的数字，分别填在哪里

| 实际工作表名称 | 用途／重要单元格 |
|---|---|
| Start | 使用说明、重置规则和警告 |
| Setup | 起始月份 B6；税后工资 B7；税款预留 B9；基线比例 B10；期初缓冲金 B11；期初支票账户 B12；缓冲金目标 B13；额外还款目标 B14 |
| Income | 十二个月历史 B6:C17；基线 F19；每月实际金额、转账和期末缓冲金 |
| Bills | 每月固定输入 B6:B13；合计 B15；每月实付总额覆盖 B19:M19 |
| Spending | 分类计划 B6:B15；每月覆盖 C6:N15；月合计第 17 行 |
| Funds | 六项非月度账单专项金；设置第 6–11 行；转入第 68 行；账单支付第 69 行；期末储备第 70 行 |
| Debt | 四笔示例贷款，余额／年利率／最低还款 B6:D9；额外还款计划 B13；每月额外还款覆盖第 18 行 |
| Overview | 每月收入／流出、三个资金池、警告和三张可编辑图表 |
| Sources | 带日期的价格背景资料、链接及虚构输入标记 |

编辑**浅蓝色输入格**，不要改公式格。十一月在 Income／Funds／Debt／Overview 是 **B** 列，在 Spending 则是 **C** 列。按日期表头定位，不要猜列号。Setup B8 只是说明**每月两笔工资**，不是可以切换成每两周发薪的功能开关。

## 给自己定一笔撑得住的自由职业提取额

先从收款扣业务支出，再按自己选的比例从正利润留税款。十二个月可用净收入一起平均，淡月和零收入月也要算，再乘可调整的安全比例。这里是 **25% 留税**、**75% 算基线提取额**。请按自己的情况选，这两个比例不是通用规则，也没算出你实际该缴多少税。

### Income 表：实际历史输入

历史每行含业务支出 $350。换自己的历史时，对照 Income B6:F17，日期在 A6:A17。可用净收入是扣预留税款后的利润，不是总收款。

| 月份／行 | 现金收款 B | 支出 C | 可用净收入 F |
|---|---:|---:|---:|
| 2025 年十一月／6 | $3,200 | $350 | $2,137.50 |
| 2025 年十二月／7 | $6,500 | $350 | $4,612.50 |
| 2026 年一月／8 | $2,200 | $350 | $1,387.50 |
| 2026 年二月／9 | $4,800 | $350 | $3,337.50 |
| 2026 年三月／10 | $7,600 | $350 | $5,437.50 |
| 2026 年四月／11 | $1,800 | $350 | $1,087.50 |
| 2026年5月／12 | $5,200 | $350 | $3,637.50 |
| 2026 年六月／13 | $4,100 | $350 | $2,812.50 |
| 2026 年七月／14 | $6,900 | $350 | $4,912.50 |
| 2026 年八月／15 | $2,700 | $350 | $1,762.50 |
| 2026 年九月／16 | $5,700 | $350 | $4,012.50 |
| 2026 年十月／17 | $3,600 | $350 | $2,437.50 |

平均可用净收入为**每月 $3,131.25**。Income F19 的公式为 `=MAX(0,AVERAGE(F6:F17)*Setup!$B$10)`，结果 **2348.4375**，保留到美分为 **$2,348.44**。Setup B18 将其乘三，得到 **$7,045.31** 的自由职业缓冲金目标。此目标独立于整个家庭的应急储蓄。

### Income 表：十一月预测及公式结果

| 单元格 | 输入或实际公式 | 结果 |
|---|---|---:|
| Setup B7 | 每笔税后工资 $2,800 | 两笔合计 $5,600 |
| Income B27／B30 | 计划收款 $4,200／支出 $350 | 实际覆盖格 B28／B31 为空 |
| Income B33 | `=MAX(0,B29-B32)*Setup!$B$9` | 预留税款 $962.50 |
| Income B34 | `=B29-B32-B33` | 可用净收入 $2,887.50 转入缓冲金 |
| Income B36 | `=Setup!$B$11` | 期初缓冲金 $6,000 |
| Income B38 | `=IF(B35="",MIN(B37,MAX(0,B36+B34)),B35)` | 提取 $2,348.44 至支票账户 |
| Income B39 | `=B36+B34-B38` | 期末缓冲金 $6,539.06 |

十二月缓冲金剩 **$9,328.13**；即使一月可用净收入降到 **$1,087.50**，一月期末仍剩 **$8,067.19**。是缓冲池撑住相同提取额，不必假设发票款每月一样多。实际格留空时，这些仍是预测。现金不够，自动提取额会降低；但手填转账仍可能超额，出现负缓冲和警告。转账前自己确认，表格拦不住银行。

## 首月的钱怎么拼起来

| 工作表／单元格 | 实际示例输入 | 月合计 |
|---|---|---:|
| Bills B6:B13 | 房租 $2,100；托育 $1,450；网络 $70；电话 $110；租客保险 $20；定期寿险 $45；订阅 $30；其他 $0 | B15 为 **$3,825** |
| Spending B6:B15 | 食材日用品 $850；交通 $260；水电等 $240；外出用餐 $150；用品 $100；儿童／衣物 $80；医疗 $60；娱乐 $100；杂项 $60；其他 $0 | B17 和十一月 C17 为 **$1,900** |
| Debt B42 | 最低还款 $360 + $410 + $180 + $110，另加 $100 | **$1,160** |
| Funds B68 | 以下六笔转入，含近期到期项目补足额 | **$737.91** |

### Funds 表：预存金额不等于账单金额

| 专项金／设置行 | 账单／周期 | 首次到期 | 已存 E | 正常月预存 F | 十一月转入 G |
|---|---|---|---:|---:|---:|
| 两辆车保险／6 | $1,200／6 个月 | 2027 年一月 | $500 | $200.00 | $233.33 |
| Amazon Prime／7 | $139／12 个月 | 2027 年三月 | $30 | $11.58 | $21.80 |
| 节日礼物／8 | $900／12 个月 | 2026 年十二月 | $300 | $75.00 | $300.00 |
| 牙科自付／9 | $300／6 个月 | 2027 年二月 | $0 | $50.00 | $75.00 |
| 维修／轮胎／10 | $900／12 个月 | 2027 年七月 | $200 | $75.00 | $77.78 |
| 学校／年度额外支出／11 | $300／12 个月 | 2027 年八月 | $0 | $25.00 | $30.00 |

**年账单快到期时，只按全年摊开存还不够。** 十一月和十二月的礼物钱各要**（$900 − $300）÷ 2 = 每月 $300**，不是 $75。Funds B35 和 C35 得到 $300，C37 在十二月安排 $900，C40 期末清零，D35 到一月恢复 $75。因为算进了到期月，那个月的钱一定要在账单到期**之前**转好。

Funds F8 为 `=B8/MAX(1,C8)`（正常预存 $75）。自动转入行取正常预存与“剩余缺口除以截至下次到期月的月数”两者较大值。B40 的实际期末储备公式是 `=B34+IF(B36="",B35,B36)-B39`。更长的具体日历公式仍可在工作簿中编辑。

转入现在就减少家庭支票账户余额。之后付账再减少专项金余额，**不是第二笔家庭现金流出**。Overview 第 23 行仅备忘展示由储备支付的账单。不要再将它们填入 Bills 或 Spending。若提前支付，覆盖付款，并检查后来计划月份，避免同一账单预测两次。

### Overview 表：十一月现金并非全部可花

为便于解释，这里保留到美分；工作簿通常显示整数美元，但按未四舍五入的值计算。

| 实际项目／十一月单元格 | 公式或来源 | 结果 |
|---|---|---:|
| 家庭收入／B8 | `=SUM(B6:B7)` | $7,948.44 |
| 家庭总流出／B13 | `=SUM(B9:B12)` | $7,622.91 |
| 月度余量／B14 | `=B8-B13` | **$325.53** |
| 期初支票账户／B15 | Setup B12 | $2,500.00 |
| 期末支票账户／B16 | `=B15+B14` | **$2,825.53** |
| 自由职业缓冲金／B17 | Income B39 | $6,539.06 |
| 专项预存储备／B18 | Funds B70 | $1,767.91 |
| 这些资金池的现金总额／B19 | `=SUM(B16:B18)` | **$11,132.50** |
| 需要行动／B20 | 缓冲金低于选定目标 | **补足缓冲金** |

如果填入的工资、收款、账单、利率和还款都按计划发生，十二个月后示例会有**支票账户 $9,246.17**、**自由职业缓冲金 $15,318.75**、**专项储备 $1,806.08**及**剩余债务 $44,173.47**（Overview M16:M18 和 M22）。用来理解计划就好，不是保证，也别看余额为正就加消费。

### Debt 表：估算还清时间，不是贷款机构报价

| 债务行 | 期初余额 B | 年利率 C | 最低还款 D | 额外分配 | 估计月数 F |
|---|---:|---:|---:|---:|---:|
| 6：车贷 A | $13,500 | 4.9% | $360 | $0 | 41 |
| 7：车贷 B | $18,200 | 6.2% | $410 | $0 | 51 |
| 8：学生贷款 A | $14,500 | 6.8% | $180 | $100 | 62 |
| 9：学生贷款 B | $9,000 | 4.5% | $110 | $0 | 98 |

车贷 A 月利息在 Debt B21 用 `=B20*$C$6/12` 算，首月总利息未取整前是 **$265.075**。Setup B14 把额外还款指向债务 ID 3。**一笔还清后，额外还款不会自动转到另一笔。** 预计还清月数假设首月还款持续不变，按日计息、费用、利率和服务商规则都可能不同。每笔虚构贷款都换成真实账单。示例包含车贷；给贷款车辆询价时，请确认所需保障。

## 避免无意夸大可支配余款

1. **保存副本，替换示例。** 在 Setup B6 设起始月第一天；替换全部十二个月的历史收款／支出，不只改日期标签。改变起始月只是重标历史日期，不会导入正确历史。
2. **分开期初余额。** 分别输入支票账户和税后自由职业缓冲金，再输入各专项金已有储蓄。示例期初为 $2,500 + $6,000 + $1,030 = $9,530。同一美元不能算两次。税款预留在这些资金池之外。
3. **匹配发薪安排。** 工资默认每月两笔 $2,800。金额不等可用 Income 第 23／24 行。表格没直接处理三次发薪月／每两周发薪时点；不要只改 Setup B8 就以为公式会适配。
4. **使用整月金额。** 实际格空白即用计划；**0 表示没有**。月份尚未结束时，保留整月计划，或填已花加预计余下支出，不要仅填迄今支出。例如 Spending C6 确实填 $0 的食材日用品覆盖，会使十一月分类总额减少 $850；留空则保留 $850 计划。
5. **完成月结。** 记录收款／费用、整月账单／消费、实际专项金转入／支付、Income 第 35 行的实际支票账户转账及第 26 行的目标快照。将支票账户、缓冲金和每项专项金与真实余额对账。季度复核基线前，先保存已结月份快照。更改税率或债务条款可能改写历史，应以已对账余额另开副本。
6. **额外还债前先处理警告。** “现金缺口”表示支票账户、专项金或业务缓冲金出现负数；“提取不足”表示目标提取额资金不足；“补足缓冲金”表示低于选定缓冲目标。额外还款不会自动暂停。付款前检查近期账单和真实可用资金。

## 公开价格帮你列清单，自己家的账单还要自己问

下面来源在2026年11月5日阅读并核对。Sources 表留着背景资料，别让公开均值覆盖真实账单。

| 价格来源 | 可以了解什么 | 自己家要替换什么 |
|---|---|---|
| [USDA 2026年9月 食品计划，发布于 2026年10月](https://fns-prod.azureedge.us/sites/default/files/resource-files/CostofFoodSep2026LowModLib.pdf) | 低成本月预算：4–5 岁儿童 $179，19–50 岁女性 $276.30、19–50 岁男性 $317.70；三人家庭加 5% 得 **$811.65** | 工作簿食材日用品 $850；这是全部在家用餐基准，不是你的采购账单，也不是精确扣除托育供餐后的金额 |
| [CCAoA 2025 价格／供给报告，发表于 2026年5月](https://info.childcareaware.org/price-and-supply-2025) | 宽泛全国年价格 **$13,184**，即每月 $1,098.67 | 工作簿托育 $1,450 不是该均值，也不是某地学前班报价 |
| [YMCA Wichita Falls 学前班收费，2026年8月17日 生效](https://www.ymcawf.org/childcare/preschool/) | 四岁非会员每周 $165，加注册费 $35；只有假设全年付费 52 周才是**每月 $715** | 不是工作簿使用的服务商，也未查名额；四周收费 $660，五周 $825；实际计费日历未核实 |
| [Progressive，更新于 2026年9月3日](https://www.progressive.com/answers/average-car-insurance-cost/) | 含得克萨斯州的中等成本组：**每月 $112.80**，针对单车／单司机、仅责任险保单；正文写 2024–2025，页脚写 2025 | 工作簿两车每年 $2,400 是虚构值，不是其贷款车辆全险的核实保费 |
| [Amazon 美国会员说明](https://www.aboutamazon.com/news/retail/how-to-sign-up-for-a-prime-membership) | 页面列出**每年 $139 或每月 $14.99**；文章未显示更新日期 | $11.58 是年费预存，不是月缴；初始补足 $21.80；不含税／附加服务 |

**$2,100 房租是虚构例子**，请看自己的租约和续约条款。HUD 地区数字没能取到，全国均值也不是你家的账单。拿真实报价重算，2027 的费用、托育名额和保费都没有为你锁定。

## 填完再检查，也别漏看账单真正到期日

示例 XLSX 已在独立副本上检查。LibreOffice 在独立副本重算后，**1,181 个公式有缓存结果，公式错误为零**；临时副本上的 **13 项回归检查**也全部通过，覆盖十二个月现金守恒、到期补足、空白与零、还清上限、快照及超额提取警告。九张表、三张图都在。换成自己输入后，仍请再核对输出。

这是**按月把计划和实际放在一起的预算**，不是银行直连、每日余额预测、流水账或自动付款。月末账户为正，房租到期那天仍可能没钱；请另看真实发薪日和账单日。池外税款余额及支付、投资和应急储蓄不在这里跟踪。开启自动计算，编辑后查结果；这里没有测遍所有表格软件。年度表很密，适合屏幕放大，不适合缩小打印。页面表格展示部分单元格内容。

## 用之前，这两个问题值得先弄清

问题都来自**官方或发布方页面**，查阅于2026年11月5日。拿回答帮自己决定该查什么就好。

**“季度预估税何时到期？”** [IRS 问答](https://www.irs.gov/faqs/estimated-tax/individuals/individuals-2)对日历年缴付期列出 4月15日、6月15日、9月15日 和次年 1月15日，遇周末／节假日调整，并有例外。核查适用年度日期及个人情况。工作簿的 25% 预留既不计算应缴税，也不安排这些付款。[IRS 概述](https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes)解释预估税可能包含自雇税；仅把钱转到储蓄账户不等于缴税。

**“如何最准确估算汽车保险费？”** [Progressive 已发布的问答](https://www.progressive.com/answers/average-car-insurance-cost/)指向保险公司真实报价。用自己的账单及到期日／周期替换 Funds B6；不要把仅责任险群体均值当作两辆贷款车报价。全年／半年付款保留在 Funds，不要又计入月订阅或交通消费。

[来源与预算说明](#来源与查阅日期)。

## 让 DeTars 帮你把自己家的预算理顺

把下面这段发给 DeTars，将[方括号]换成你家的实际情况。

> 请按[国家州、币种、起始月]调整预算，用[税后工资和周期]、十二个月[自由职业收款及业务费用]、[独立估算税款预留比例]、已分别对账的[支票账户、税后缓冲金、各专项金]，以及[真实账单、消费、贷款余额年利率最低还款及下次续费金额日期]。在副本保留公式，说明空白与零、到期补足、已结月份转账和目标快照、房租日现金，指出每两周发薪和每日时点缺口；查十二个月现金守恒、警告和还清上限。不编价格、税或收入，不连账号、转钱、联系或发布。

*把它当作规划帮手，不是个人理财或税务建议；拿不准时，可以请合资格顾问一起看。*

## 下载工作簿

这是原始示例工作簿的隐私检查发布副本，不是更新后的报价或个人财务记录。编辑前请保存副本，保留正文所述限制。

- [Household_Budget.xlsx](/scenarios/irregular-income-household-budget-template-us/Household_Budget.xlsx)

## 来源与查阅日期

以下为原始调研保留的外部来源；上线导入不代表重新查阅。

- [USDA September 2026 food plans, issued October 2026](https://fns-prod.azureedge.us/sites/default/files/resource-files/CostofFoodSep2026LowModLib.pdf) — 查阅日期: unknown
- [CCAoA 2025 price/supply report, published May 2026](https://info.childcareaware.org/price-and-supply-2025) — 查阅日期: unknown
- [YMCA Wichita Falls preschool rates, effective August 17, 2026](https://www.ymcawf.org/childcare/preschool/) — 查阅日期: unknown
- [Progressive's published question and answer](https://www.progressive.com/answers/average-car-insurance-cost/) — 查阅日期: unknown
- [Amazon's US membership explanation](https://www.aboutamazon.com/news/retail/how-to-sign-up-for-a-prime-membership) — 查阅日期: unknown
- [IRS FAQ](https://www.irs.gov/faqs/estimated-tax/individuals/individuals-2) — 查阅日期: unknown
- [IRS overview](https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes) — 查阅日期: 2026-11-05
