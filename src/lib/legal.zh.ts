import {
  CREDITS_PER_USD,
  LEGAL_UPDATED,
  PADDLE_BUYER_TERMS_URL,
  creditPacks,
  mailto,
  type Href,
  type LegalKey
} from "@/lib/legal";
import type { PageContent } from "@/lib/pages";
import { withLocale } from "@/lib/site";

const n = (value: number) => value.toLocaleString("en-US");
const ext = (url: string, label: string) => `<a href="${url}" rel="noopener" target="_blank">${label}</a>`;

export function legalZh(href: Href): Record<LegalKey, PageContent> {
  const link = (route: string, label: string) => `<a href="${href(route)}">${label}</a>`;
  // Shown on every zh legal page: the English text governs.
  const notice = (route: string) =>
    `本页为英文版的中文译本,如有歧义,以<a href="${withLocale("en", route)}" hreflang="en">英文版</a>为准。`;
  const buyerTerms = ext(PADDLE_BUYER_TERMS_URL, "Paddle 买方条款(Buyer Terms)");

  return {
    pricing: {
      title: "DeTars 价格 | 用自己的 key 免费,想省事再买积分",
      description: `DeTars 用你自己的 API key 完全免费。也可以购买 DeTars 积分使用官方模型:1 美元 = ${CREDITS_PER_USD} 积分,价格含税,购买的积分永不过期。`,
      kicker: "价格",
      h1: "用自己的 key,免费。<span class='o'>想省事,再买积分。</span>",
      updated: LEGAL_UPDATED.zh,
      notice: notice("/pricing"),
      answer:
        "用你自己在 20 多家模型服务商的 API key,DeTars 不收任何费用。如果不想自己管理 key,可以购买 DeTars 积分,在 App 里直接使用 DeTars 官方模型。1 美元 = 100 积分,价格含税,购买的积分永不过期。",
      sections: [
        {
          h2: "积分包",
          id: "packs",
          blocks: [
            {
              type: "table",
              caption: "DeTars 积分包",
              head: ["价格(美元,含税)", "积分"],
              rows: creditPacks.map((p) => [`$${n(p.usd)}`, n(p.credits)])
            },
            {
              type: "list",
              items: [
                `<b>1 美元 = ${CREDITS_PER_USD} 积分。</b>每个积分包都按同一比例定价。`,
                "<b>价格含税。</b>价格以美元计,已包含适用的销售税或增值税,由 Paddle 在结账时计算。",
                "<b>积分永不过期。</b>你购买的积分会一直留在账户里,直到用完。"
              ]
            }
          ]
        },
        {
          h2: "用自己的 key,永远免费",
          blocks: [
            {
              type: "p",
              html:
                "用你自己在任意一家受支持的模型服务商(20 多家)的 API key,DeTars 不收任何费用。你按自己与该服务商的约定直接向对方付费。积分只是给不想配置 key、想直接用 DeTars 官方模型的人准备的。"
            }
          ]
        },
        {
          h2: "积分怎么消耗",
          blocks: [
            {
              type: "list",
              items: [
                "每次调用官方模型,按该次请求的 token 用量扣除积分:包括你发出的内容和模型写回的内容。不同模型的扣费标准不同。",
                "App 会显示每次请求花了多少积分,用在哪里一目了然。",
                "官方模型列表和各模型的费率可能调整。调整不会追溯到已经完成的请求。",
                "积分只能在 DeTars App 内用于 DeTars 官方模型。积分不是钱:没有现金价值,不能提现、转让或转售。"
              ]
            }
          ]
        },
        {
          h2: "怎么购买",
          blocks: [
            {
              type: "p",
              html:
                "没有网页商店。积分在 DeTars App 内购买,App 会打开 Paddle 的付款页面。Paddle 是我们的记录商户(Merchant of Record):它处理付款、计算税费并给你发送收据。我们看不到你的卡号。"
            }
          ]
        },
        {
          h2: "退款与条款",
          blocks: [
            {
              type: "p",
              html: `积分完全未使用的积分包,在购买后 14 天内可全额退款。详见${link("/refund", "退款政策")};积分的使用规则见${link("/terms", "服务条款")}。`
            }
          ]
        }
      ],
      cta: { label: "下载 App 购买积分 →", route: "/download" }
    },

    terms: {
      title: "服务条款 | DeTars",
      description: "使用 DeTars App、DeTars 账户和 DeTars 积分的条款。",
      kicker: "法律",
      h1: "服务条款",
      doc: true,
      updated: LEGAL_UPDATED.zh,
      notice: notice("/terms"),
      answer:
        "合法使用 DeTars,不要滥用服务。积分是在 App 内使用 DeTars 官方模型的预付用量:永不过期,但不是钱。付款由 Paddle 处理。AI 输出可能出错,重要的事请自己核实。",
      sections: [
        {
          h2: "1. 关于本条款",
          blocks: [
            {
              type: "p",
              html: `本条款是你与 DeTars(以下称“DeTars”或“我们”)之间的协议,适用于 DeTars App、DeTars 账户、DeTars 积分与官方模型服务,以及本网站。使用其中任何一项,即表示你同意本条款;如不同意,请不要使用 DeTars。有问题请联系 ${mailto}。`
            }
          ]
        },
        {
          h2: "2. DeTars 是什么",
          blocks: [
            {
              type: "p",
              html:
                "DeTars 是一款运行在你自己电脑上的桌面 AI 助手 App,支持 macOS 与 Windows。你可以用自己在 20 多家模型服务商的 API key 使用它,我们不收费;你对这些服务商的使用受你与它们之间协议的约束。你也可以选择购买 DeTars 积分,在 App 内直接使用 DeTars 官方模型,无需自己管理 key。"
            }
          ]
        },
        {
          h2: "3. 你的账户",
          id: "account",
          blocks: [
            {
              type: "list",
              items: [
                "你通过我们的身份服务商 Auth0(Okta)使用 Google 登录。购买或使用积分需要账户。",
                "你必须年满 16 周岁才能使用 DeTars。DeTars 不面向儿童。",
                "请保管好你的 Google 账户。你的 DeTars 账户下发生的行为由你负责。"
              ]
            }
          ]
        },
        {
          h2: "4. DeTars 积分",
          id: "credits",
          blocks: [
            {
              type: "list",
              items: [
                `积分以积分包形式出售,1 美元 = ${CREDITS_PER_USD} 积分。当前的积分包见${link("/pricing", "价格页")}。`,
                "积分按次扣除,依据模型的 token 用量计算。App 会显示每次请求花了多少积分。",
                "我们可能调整官方模型列表及其费率。调整不会追溯到已经完成的请求。",
                "积分只能在 DeTars App 内用于 DeTars 官方模型。",
                "积分不是钱:没有现金价值,不能提现、转让、转售或兑换,并与你的 DeTars 账户绑定。",
                "<b>购买的积分永不过期。</b>",
                "如果我们将来停止官方模型服务,会至少提前 30 天通过邮件和 App 内通知你。"
              ]
            }
          ]
        },
        {
          h2: "5. 付款",
          id: "payments",
          blocks: [
            {
              type: "list",
              items: [
                "Paddle.com 是所有购买的记录商户(Merchant of Record)和经销商。Paddle 处理你的付款,并负责销售税与增值税、发票和退款。",
                `购买积分时,${buyerTerms}同样适用于该笔购买。`,
                "价格以美元计,已包含适用的销售税或增值税,由 Paddle 在结账时计算。",
                "购买从 DeTars App 内发起,App 会打开 Paddle 的付款页面。我们不会看到或保存你的卡号。",
                "为防范欺诈,我们可能对新账户的购买设置限制。"
              ]
            }
          ]
        },
        {
          h2: "6. 退款与拒付",
          blocks: [
            {
              type: "p",
              html: `积分完全未使用的积分包,在购买后 14 天内可全额退款,具体办法见${link("/refund", "退款政策")}。如果某笔付款被拒付(chargeback)或撤销,我们会扣除相应积分,并可能暂停该账户。`
            }
          ]
        },
        {
          h2: "7. 可接受的使用",
          id: "acceptable-use",
          intro: "不得利用 DeTars:",
          blocks: [
            {
              type: "list",
              items: [
                "制作、存储或传播违法内容,或从事任何违法活动;",
                "提取、转发代理或转售官方模型或我们 API 的访问权限;",
                "绕过频率限制、购买限制或服务的其他限制;",
                "攻击、探测、压垮或干扰服务或其他用户;",
                "违反官方模型背后各模型服务商的使用政策。"
              ]
            }
          ]
        },
        {
          h2: "8. AI 输出",
          blocks: [
            {
              type: "p",
              html:
                "AI 模型会犯错。输出可能不准确、不完整或已过时,如何使用由你负责。重要的内容,请在依赖之前自行核实。投资陪伴提供的是信息与记录,不构成投资建议。宠物管家不提供诊断,不能替代执业兽医。"
            }
          ]
        },
        {
          h2: "9. 你的数据",
          blocks: [
            {
              type: "p",
              html: `我们处理哪些数据、为什么处理,见${link("/privacy", "隐私政策")}。`
            }
          ]
        },
        {
          h2: "10. 暂停与终止",
          id: "suspension",
          blocks: [
            {
              type: "p",
              html:
                "如出现欺诈、滥用、拒付,或违反本条款或模型服务商的使用政策,我们可能暂停或关闭相关账户。你可以随时停止使用 DeTars;如需删除账户,请给我们发邮件。"
            }
          ]
        },
        {
          h2: "11. 服务变更",
          blocks: [
            {
              type: "p",
              html:
                "DeTars 一直在变化。我们可能增加、修改或移除功能、官方模型和费率。如果停止官方模型服务,我们会至少提前 30 天通过邮件和 App 内通知你。"
            }
          ]
        },
        {
          h2: "12. 免责声明",
          blocks: [
            {
              type: "p",
              html:
                "DeTars 按“现状”和“现有”提供。在法律允许的范围内,除本条款写明的内容外,我们不作其他承诺:我们不保证 DeTars 不中断、无错误或适合某一特定用途,也不保证其输出准确。"
            }
          ]
        },
        {
          h2: "13. 责任限制",
          blocks: [
            {
              type: "p",
              html:
                "在法律允许的范围内,我们不对间接或后果性损失负责,例如利润损失、数据丢失或业务中断。对于与 DeTars 有关的任何索赔,我们对你承担的全部责任,以你在索赔前 12 个月内向我们支付的金额为上限。"
            },
            {
              type: "p",
              html: "本条款不限制依法不能限制的责任,也不剥夺你所在地法律赋予你的消费者权利。"
            }
          ]
        },
        {
          h2: "14. 条款更新",
          blocks: [
            {
              type: "p",
              html: "我们可能更新本条款。新版本会发布在本页,并更新页首的日期。变更生效后你继续使用 DeTars,即适用更新后的条款。"
            }
          ]
        },
        {
          h2: "15. 联系我们",
          blocks: [{ type: "p", html: `邮箱:${mailto}。` }]
        }
      ]
    },

    privacy: {
      title: "隐私政策 | DeTars",
      description: "DeTars 处理哪些数据、为什么处理、由谁协助处理,以及如何查阅或删除。你的对话留在你自己的设备上;我们不出售个人数据。",
      kicker: "法律",
      h1: "隐私政策",
      doc: true,
      updated: LEGAL_UPDATED.zh,
      notice: notice("/privacy"),
      answer:
        "DeTars App 把你的对话和记忆留在你自己的设备上。为了运行账户、积分和官方模型,我们只处理少量数据:账户信息、设备密钥、用量记录和订单记录。我们不在服务器上保存你的提示词或回复内容,也不出售个人数据。",
      sections: [
        {
          h2: "1. 我们是谁",
          blocks: [
            {
              type: "p",
              html: `DeTars(“我们”)对本政策所述数据负责。本政策适用于 DeTars App、DeTars 账户、DeTars 积分与官方模型服务,以及本网站。联系方式:${mailto}。`
            }
          ]
        },
        {
          h2: "2. 留在你设备上的数据",
          id: "local",
          blocks: [
            {
              type: "p",
              html:
                "DeTars 运行在你的电脑上。你的对话、它积累的记忆以及它处理的文件都保存在你自己的硬盘上;新的记忆需要你确认后才会保存。你可以随时从自己的设备上删除它们。"
            },
            {
              type: "p",
              html:
                "有两类内容会离开你的设备。App 向 AI 模型发送请求时,请求内容会发给该模型的服务商(见第 4 节)。如果你通过 Telegram、Slack、飞书或微信等聊天软件与 DeTars 交流,这些消息会经过相应聊天软件的服务,适用它们各自的隐私政策。"
            }
          ]
        },
        {
          h2: "3. 我们在服务器上处理的数据",
          id: "data",
          blocks: [
            {
              type: "list",
              items: [
                "<b>账户数据</b>,来自 Google 登录:你的邮箱地址、姓名和账户标识符。",
                "<b>设备数据:</b>设备标识符和设备公钥,用于验证请求确实由你的设备签名;以及设备注册时 App 上报的基本信息(例如设备名称、操作系统及版本、处理器类型)。",
                "<b>官方模型的用量记录:</b>每次请求的时间、模型、token 数量和扣除的积分。",
                "<b>订单与付款记录:</b>订单号、积分包、金额和状态。我们不会收到或保存你的完整卡号。我们随订单保存的 Paddle 付款通知中,可能包含少量信息,例如卡的类型、卡号后四位、有效期和持卡人姓名。",
                "<b>支持邮件:</b>你发给我们的邮件以及我们的回复。"
              ]
            },
            {
              type: "p",
              html: "我们用这些数据来提供你的账户、验证设备、运行官方模型并计费、处理订单和退款、防范欺诈和滥用,以及回复支持请求。"
            }
          ]
        },
        {
          h2: "4. 你的提示词和回复",
          id: "content",
          blocks: [
            {
              type: "p",
              html:
                "<b>使用 DeTars 官方模型时,我们不在服务器上保存你的提示词或回复内容。</b>它们经由我们的网关发送给 OpenRouter 及其背后的模型服务商以生成回复,适用这些服务商各自的政策。"
            },
            {
              type: "p",
              html:
                "为保障服务运行,我们的网关会保留运行日志。日志记录的是请求 ID、账户或设备 ID、错误码和耗时等信息,不是你的对话。在少数故障情况下,例如服务商返回了格式错误的回复或错误信息,服务商返回内容的一小段摘录(最多几百个字符)可能会出现在错误日志里。为帮助 OpenRouter 防范滥用,我们会向它发送一个由你的账户派生的假名标识符,绝不会发送你的邮箱或姓名。"
            },
            {
              type: "p",
              html:
                "如果你改用自己的 API key,请求会发给你配置的服务商,适用你与该服务商之间的协议;这些请求不消耗 DeTars 积分,也不经过我们的官方模型网关。"
            }
          ]
        },
        {
          h2: "5. 付款",
          blocks: [
            {
              type: "p",
              html:
                "Paddle 是 DeTars 积分的记录商户(Merchant of Record)。Paddle 在结账时收集你的付款信息、邮箱和账单信息,并依照它自己的隐私政策处理。我们用内部账户 ID 告诉 Paddle 某笔订单属于哪个 DeTars 账户;Paddle 会告诉我们订单何时付款、退款或被拒付。"
            }
          ]
        },
        {
          h2: "6. 本网站",
          id: "website",
          blocks: [
            {
              type: "p",
              html:
                "本网站不使用任何分析工具,也不使用跟踪 Cookie。网站托管在 GitHub Pages 上,GitHub 可能为提供和保护网站而记录 IP 地址等技术数据。页面从 Google Fonts 加载字体,因此你的浏览器会向 Google 的服务器请求字体文件。结账页 <code>/pay</code> 会加载 Paddle 的付款组件,它会设置自己的 Cookie。"
            }
          ]
        },
        {
          h2: "7. 服务提供商",
          id: "processors",
          intro: "我们借助以下服务商运行 DeTars。每家只获得完成其工作所需的数据。",
          blocks: [
            {
              type: "list",
              items: [
                "<b>Cloudflare:</b>我们的服务器、网关和数据库的托管与基础设施。",
                "<b>Auth0(Okta):</b>登录。",
                "<b>Google:</b>登录。",
                "<b>Paddle:</b>付款,作为记录商户。",
                "<b>OpenRouter 及其路由到的模型服务商:</b>为官方模型生成回复。",
                "<b>GitHub Pages:</b>托管本网站。"
              ]
            },
            {
              type: "p",
              html: "这些服务商可能在你所在国家以外(包括美国)处理数据。在法律要求时,或为保护 DeTars 及其用户免受欺诈或滥用,我们也可能披露数据。"
            }
          ]
        },
        {
          h2: "8. 数据保留多久",
          blocks: [
            {
              type: "list",
              items: [
                "账户与设备数据:在你的账户存续期间保留。",
                "订单与付款记录:按税务和会计法律要求的期限保留。",
                "用量记录:在计费和客户支持需要的期间内保留。"
              ]
            }
          ]
        },
        {
          h2: "9. 你的权利",
          id: "rights",
          blocks: [
            {
              type: "p",
              html: `视你所在地而定,GDPR、英国 GDPR、CCPA 等法律赋予你对个人数据的权利:查阅、更正、删除、获取副本,以及反对或限制我们对数据的使用。如需提出请求,请发邮件至 ${mailto},最好使用你登录所用的邮箱。我们可能需要确认是你本人,并会在法律要求的期限内答复。即使删除账户,我们仍会按法律要求的期限保留订单记录。你也可以向当地的数据保护机构投诉。`
            }
          ]
        },
        {
          h2: "10. 我们不出售你的数据",
          blocks: [{ type: "p", html: "我们不出售个人数据,也不会为广告目的分享个人数据。" }]
        },
        {
          h2: "11. 儿童",
          blocks: [
            {
              type: "p",
              html: `DeTars 面向 16 周岁及以上的用户,不面向儿童。如果你认为有儿童向我们提供了个人数据,请发邮件至 ${mailto},我们会将其删除。`
            }
          ]
        },
        {
          h2: "12. 安全",
          blocks: [
            {
              type: "p",
              html:
                "与我们服务之间的连接经过加密,你的设备用它自己的密钥证明身份,对我们系统的访问也受到限制。没有绝对安全的系统,但我们会尽力保护你的数据;如发生影响你的数据泄露,我们会在法律要求时通知你。"
            }
          ]
        },
        {
          h2: "13. 政策更新",
          blocks: [{ type: "p", html: "我们可能更新本政策。新版本会发布在本页,并更新页首的日期。" }]
        },
        {
          h2: "14. 联系我们",
          blocks: [{ type: "p", html: `邮箱:${mailto}。` }]
        }
      ]
    },

    refund: {
      title: "退款政策 | DeTars",
      description: "积分完全未使用的 DeTars 积分包,购买后 14 天内可全额退款。如何申请,以及之后会发生什么。",
      kicker: "法律",
      h1: "退款政策",
      doc: true,
      updated: LEGAL_UPDATED.zh,
      notice: notice("/refund"),
      answer: `如果某个积分包里的积分一点都没用过,购买后 14 天内可以全额退款。请发邮件至 ${mailto},附上账户邮箱和订单号。`,
      sections: [
        {
          h2: "1. 未使用的积分包全额退款",
          blocks: [
            {
              type: "p",
              html: "购买后 <b>14 天</b>内,积分<b>完全未使用</b>的积分包可获得全额退款。"
            }
          ]
        },
        {
          h2: "2. 已使用的积分包",
          blocks: [{ type: "p", html: "积分包中只要有积分被使用过,该积分包即不予退款,法律另有要求的除外。" }]
        },
        {
          h2: "3. 如何申请退款",
          blocks: [
            {
              type: "p",
              html: `请发邮件至 ${mailto},附上你的 DeTars 账户邮箱以及订单号或 Paddle 收据。你也可以通过收据邮件中的链接直接联系 Paddle。`
            }
          ]
        },
        {
          h2: "4. 之后会发生什么",
          blocks: [
            {
              type: "p",
              html: "退款经由我们的记录商户 Paddle 原路退回你的付款方式,退款对应的积分会从你的账户中扣除。到账时间取决于你的银行或发卡机构。"
            }
          ]
        },
        {
          h2: "5. 拒付",
          blocks: [
            {
              type: "p",
              html: "如果遇到问题,请先联系我们。如果某笔付款被拒付(chargeback)或撤销,我们会从你的账户中扣除相应积分,并可能暂停该账户。"
            }
          ]
        },
        {
          h2: "6. 你的法定权利",
          blocks: [
            {
              type: "p",
              html: `本政策不限制你所在地法律赋予你的任何消费者权利。${buyerTerms}同样适用于你的购买;积分的一般规则见我们的${link("/terms", "服务条款")}。`
            }
          ]
        },
        {
          h2: "7. 联系我们",
          blocks: [{ type: "p", html: `邮箱:${mailto}。请附上订单号,方便我们尽快找到你的购买记录。` }]
        }
      ]
    }
  };
}
