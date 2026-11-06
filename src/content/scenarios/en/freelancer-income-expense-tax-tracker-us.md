---
title: "US Freelancer Tax Tracker: Know What You Can Spend and What to Save"
description: "Unsure how much freelance income to set aside? Follow a fictional 2027 Illinois example, with clear 2026 fallbacks and separate federal and state payment records."
locale: "en"
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
producerDisplayLabel: "Produced by a general Cowork task on DeTars.xyz"
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

**Worried about spending money you will need for tax? Start with cash received, not invoices sent. In this fictional example, $85,000 of receipts and $12,000 of deductible expenses lead to a 27% reserve on positive taxable cash profit—not on invoices or gross receipts.** Keep deductible costs, savings transfers and actual tax payments separate so you can see where your money stands.

**All sample clients, invoices, receipts, expenses and savings transfers are fictional. For 2027, federal and Illinois calculations still use the labeled 2026 fallbacks below. Update them before paying estimates, and ask a tax professional to check what applies to you. This is planning help, not tax advice.**

## First, check whether this example fits you

The figures and rules here are dated 2026-11-05. This example is for a cash-basis sole proprietor: a single filer who lives in Illinois all year, is under age 65 and has no dependents, employees, wage income, other income, withholding or credits. It uses the standard deduction. If your situation differs, get a separate calculation; this is not a general US tax calculator or a return ready to file.

Use the workbook listed under Downloads to keep invoices, receipts, expenses and tax savings in their own places. Keep your bank records and receipts alongside it, so you can check the entries rather than relying on a total alone. All dollar amounts are USD, without conversion.

The practice entries cover 2027-01-01–2027-03-31: 24 invoices, 23 receipts, 29 expenses and 3 savings transfers. The cutoff is set to 2027-03-31 for the example; none of these transactions has actually happened. Save a clean working copy, clear only blue sample-input cells, keep formulas and replace `assumptions!B7` with your actual review date. Changing the year label alone will not move the workbook's fixed dates to another year.

## A weekly workflow, not a second bank account

| Sheet | Useful operation | Boundary or check |
|---|---|---|
| `assumptions` | Set review date in `B7`, full-year receipt forecast in `B8`, deductible-expense forecast in `B9` and opening savings in `B10` | Blue inputs only; prior-year tax fields remain blank until checked, not assumed zero |
| `invoices` | Enter a unique ID, issue date, client, full billed amount and due date | 200 preformatted rows, `6–205`; paid date means latest receipt, even if only partly paid |
| `payments` | Record each actual gross receipt against its invoice ID | 400 rows, `6–405`; partial receipts use separate rows without duplicating the invoice |
| `expenses` | Record paid cash, category, business purpose and business-use fraction | 400 rows, `6–405`; retain receipts outside the file, named by expense ID |
| `monthly summary` | Compare cash surplus, taxable cash profit, suggested reserve and savings balance | Enter actual savings transferred through the review date in column `I`; exclude later transfers in that month |
| `quarterly estimated-tax` | Compare federal and Illinois plans; log actual remittances separately | Enter payment dates and amounts in `G:H` and `I:J`, rows `43–46`; retain detailed bank evidence |

Set aside about 15 minutes weekly. Check that gross receipts equal bank deposits plus separately recorded processing fees. Do not subtract a fee from receipts and deduct it again as an expense. Follow up duplicate IDs, unlinked receipts, future dates and category warnings. When you run out of preformatted rows, extend every dependent formula and range—not just the visible table.

Money spent is not always deductible. Apply the business-use fraction first; qualified business meals have a separate 50% factor. Equipment marked `Review / capital asset` gets no deduction until its treatment is checked. Use the [Schedule C instructions](https://www.irs.gov/instructions/i1040sc) to review categories. Recurring software and processing fees have suggested categories here, not IRS-mandated ones. The mapping uses the 2026 form and 2025 instructions; update it for 2027 before relying on it.

Monthly totals include only 2027 cash on or before your review date. Invoice aging uses receipts through the same date. A suggested saving does not move money, and a savings entry does not pay the government. Income-tax payments and owner transfers are not deductible business expenses. Keep a 2028-01 payment of 2027 tax in the quarterly record, outside the 2027 monthly cash total.

## Understand the reserve before using the percentage

Enter a full-year forecast for receipts and deductible expenses, then update both monthly as work changes. Each forecast cannot fall below the actual amount already logged. Actuals are not added again, and the practice entries are not automatically scaled to a full year. Here, $85,000 of receipts less $12,000 of deductible expenses gives $73,000 of projected business profit.

| Fictional annual estimate | USD / rate | What it means for you |
|---|---:|---|
| Regular self-employment tax | $10,314.57 | Separate from federal income tax |
| Federal income tax | $4,719.30 | Uses progressive brackets and fallback inputs |
| Illinois income tax | $3,213.43 | Starts from federal adjusted gross income, not income after standard/QBI deductions |
| Combined estimated tax | $18,247.30 | Includes Additional Medicare tax, which is zero in this example |
| Recommended reserve | 27% | Combined tax / positive forecast profit, plus 2 percentage points, rounded upward to a whole percent |

Apply 27% to positive cash receipts minus deductible expenses. For example, $5,000 of positive monthly taxable cash profit suggests saving $1,350. A loss month suggests no transfer, not a tax refund. The rate is capped at 100%; it is not your marginal bracket or a government-required rate, and it cannot guarantee enough savings. The quarterly plan aims to cover the full projected tax, without the separate reserve cushion.

**A smaller cash surplus does not always mean a smaller tax reserve.** At the fictional 2027-03-31 cutoff, receipts are $19,600 and cash expenses are $3,040.97, leaving $16,559.03 of cash surplus. But only $2,388.72 is deductible, so taxable cash profit is $17,211.28. Treating all spending as deductible would leave this reserve short. Savings entries total $4,850; they are practice entries, not real transfers.

## Update these tax inputs before paying

Before you use these figures, confirm the final 2027 federal inflation-adjusted amounts and Illinois exemption, then check the 2027 estimated-tax forms. The amounts below are provisional inputs, not confirmation that final rules are unavailable. Do not pay from this example without checking the applicable figures.

| Input | Amount used here | What to check |
|---|---|---|
| Single standard deduction | $16,100 | [IRS 2026 inflation adjustments](https://www.irs.gov/irb/2025-45_IRB); 2026 FALLBACK, along with federal brackets |
| Simplified QBI ceiling | $201,750 | Same 2026 FALLBACK basis; above this ceiling no deduction is included. Ask for review; the phase-in is not calculated here |
| Self-employment earnings factor | 92.35% | [2026 Schedule SE](https://www.irs.gov/pub/irs-pdf/f1040sse.pdf); regular tax uses 12.4% Social Security and 2.9% Medicare, with a $400 net-earnings minimum |
| Social Security wage base | $192,300 | [SSA contribution and benefit base](https://www.ssa.gov/oact/cola/cbb.html); published for 2027 and used instead of the older cap |
| Illinois flat rate | 4.95% | [Illinois income-tax rates](https://tax.illinois.gov/research/taxrates/income.html); current-law carry-forward, not a newly issued 2027 table |
| Illinois personal exemption | $2,925 | [Illinois exemption FAQ](https://tax.illinois.gov/questionsandanswers/answer.851.html); 2026 FALLBACK, one exemption, disallowed above $250,000 federal AGI for this filer |

Allow separately for [Additional Medicare tax](https://www.irs.gov/taxtopics/tc560): 0.9% above the $200,000 single threshold, assuming no wages. Do not include it in the deductible half of regular self-employment tax. The simplified QBI calculation assumes eligible active domestic business income, leaves out capital gains and loss carryforwards, and omits the minimum deduction. Check eligibility before using it; [draft Form 8995](https://www.irs.gov/pub/irs-dft/f8995--dft.pdf) is not for filing.

## Payment dates and safe-harbor limits

| Income period | Derived estimated-payment date |
|---|---|
| 2027-01-01–2027-03-31 | 2027-04-15 |
| 2027-04-01–2027-05-31 | 2027-06-15 |
| 2027-06-01–2027-08-31 | 2027-09-15 |
| 2027-09-01–2027-12-31 | 2028-01-18 |

These income periods are not equal calendar quarters. The dates follow [IRS estimated-tax rules](https://www.irs.gov/faqs/estimated-tax) and holiday rollover, rather than an issued 2027 form. The [OPM holiday calendar](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/) helps explain the last date: 2028-01-15 is Saturday and 2028-01-17 is Martin Luther King Jr. Day, moving it to 2028-01-18. Confirm federal and Illinois calendars and any disaster relief before paying.

For a starting comparison, the [2026 federal estimated-tax form](https://www.irs.gov/pub/irs-pdf/f1040es.pdf) generally uses the smaller of 90% of current tax or 100% of prior tax. The prior-tax share rises to 110% when prior AGI exceeded $150,000; the prior return must cover a full 12-month period. The [2026 Illinois estimated-tax form](https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/incometax/documents/currentyear/individual/il-1040-es.pdf) separately compares 90% of current tax with 100% of prior tax. Treat these as fallback planning rules for 2027, not a promise of no penalty. Use the instructed prior tax amount, not just the balance you owed.

Safe harbor does not erase your final bill. Pay on time: catching up later may not fix an earlier shortfall. The workbook compares cumulative full-tax targets; it does not calculate statutory penalties or use the annualized-income method. If you make several payments for an installment, keep a separate bank ledger and enter the total with the latest payment date here. That is a conservative timing shortcut, not a replacement for proof of each payment.

## When this workbook is not enough

Get professional review for uneven income, losses, missed payments, assets, home office, retirement or health-insurance deductions, wage or investment income, credits, dependents, moving states or changing entities. Refunds, credit notes, reimbursements, sales tax collected and inventory need separate treatment; do not disguise them as ordinary positive receipts or expenses. Confirm personal eligibility and expense treatment before the first payment.

Keep formulas intact, update the assumptions and check the resulting totals against your own records before using them. These figures do not update themselves when tax rules change. If a result looks wrong or a warning remains, pause and resolve it before sending a payment.

## Ask DeTars to plan your freelance tax reserve

Send DeTars the request below, replacing the [brackets] with your own income, expenses and tax details.

> Help me plan a cash-basis freelance tracker for [state and filing status], with [review date], [full-year receipts and deductible expenses], [other income and withholding], [prior tax and income] and [savings and payments made]. Separate invoices from receipts, spending from deductions, and savings from remittances. Flag assumptions to update and questions for my tax adviser. Do not make payments or submit returns.

*Use this as a planning starting point, not tax advice; a qualified tax professional can help you check what fits your circumstances.*

## Downloads

Privacy-checked publication copies of the original example workbooks, not refreshed quotes or personal financial records. Save a copy before editing and retain the limitations described above.

- [freelancer-tracker.xlsx](/scenarios/freelancer-income-expense-tax-tracker-us/freelancer-tracker.xlsx)

## Sources and access dates

External sources retained from the original research; site import is not a new source refresh.

- [Schedule C instructions](https://www.irs.gov/instructions/i1040sc) — Access date: 2026-11-05
- [IRS 2026 inflation adjustments](https://www.irs.gov/irb/2025-45_IRB) — Access date: 2026-11-05
- [2026 Schedule SE](https://www.irs.gov/pub/irs-pdf/f1040sse.pdf) — Access date: 2026-11-05
- [SSA contribution and benefit base](https://www.ssa.gov/oact/cola/cbb.html) — Access date: 2026-11-05
- [Illinois income-tax rates](https://tax.illinois.gov/research/taxrates/income.html) — Access date: 2026-11-05
- [Illinois exemption FAQ](https://tax.illinois.gov/questionsandanswers/answer.851.html) — Access date: 2026-11-05
- [Additional Medicare tax](https://www.irs.gov/taxtopics/tc560) — Access date: 2026-11-05
- [draft Form 8995 basis](https://www.irs.gov/pub/irs-dft/f8995--dft.pdf) — Access date: 2026-11-05
- [IRS estimated-tax rules](https://www.irs.gov/faqs/estimated-tax) — Access date: 2026-11-05
- [OPM holiday calendar](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/) — Access date: 2026-11-05
- [2026 federal estimated-tax form](https://www.irs.gov/pub/irs-pdf/f1040es.pdf) — Access date: 2026-11-05
- [2026 Illinois estimated-tax form](https://tax.illinois.gov/content/dam/soi/en/web/tax/forms/incometax/documents/currentyear/individual/il-1040-es.pdf) — Access date: 2026-11-05
