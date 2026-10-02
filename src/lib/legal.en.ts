import {
  CREDITS_PER_USD,
  LEGAL_UPDATED,
  PADDLE_BUYER_TERMS_URL,
  caps,
  creditPacks,
  mailto,
  type Href,
  type LegalKey
} from "@/lib/legal";
import type { PageContent } from "@/lib/pages";

const n = (value: number) => value.toLocaleString("en-US");
const ext = (url: string, label: string) => `<a href="${url}" rel="noopener" target="_blank">${label}</a>`;

export function legalEn(href: Href): Record<LegalKey, PageContent> {
  const link = (route: string, label: string) => `<a href="${href(route)}">${label}</a>`;
  const buyerTerms = ext(PADDLE_BUYER_TERMS_URL, "Paddle’s Buyer Terms");

  return {
    pricing: {
      title: "DeTars pricing | Free with your own keys, credits if you want them",
      description: `DeTars is free with your own API keys. Optional DeTars credits for official models: 1 USD = ${CREDITS_PER_USD} credits, tax included, and purchased credits never expire.`,
      kicker: "Pricing",
      h1: "Free with your keys. <span class='o'>Credits if you want them.</span>",
      updated: LEGAL_UPDATED.en,
      answer:
        "DeTars costs nothing to use with your own API keys from 20+ model providers. If you would rather not manage keys, you can buy DeTars credits and use DeTars’s official models inside the app. 1 USD = 100 credits, prices include tax, and purchased credits never expire.",
      sections: [
        {
          h2: "Credit packs",
          id: "packs",
          blocks: [
            {
              type: "table",
              caption: "DeTars credit packs",
              head: ["Price (USD, tax included)", "Credits"],
              rows: creditPacks.map((p) => [`$${n(p.usd)}`, n(p.credits)])
            },
            {
              type: "list",
              items: [
                `<b>1 USD = ${CREDITS_PER_USD} credits.</b> Every pack is priced at the same rate.`,
                "<b>Tax included.</b> Prices are in US dollars and already include any sales tax or VAT, which Paddle works out at checkout.",
                "<b>Credits never expire.</b> Credits you buy stay in your account until you use them.",
                "<b>Packs and prices may change.</b> The packs above are the ones currently on sale."
              ]
            }
          ]
        },
        {
          h2: "Your own keys are always free",
          blocks: [
            {
              type: "p",
              html:
                "Bring your own API key from any of the 20+ supported model providers and DeTars charges you nothing for it. You pay that provider directly, under your agreement with them. Credits are only for people who want DeTars’s official models without setting up keys."
            }
          ]
        },
        {
          h2: "How credits are used",
          blocks: [
            {
              type: "list",
              items: [
                "Each request to an official model uses credits according to its token usage: what you send, and what the model writes back. Different models use credits at different rates.",
                "The app shows what each request cost, so you can see where your credits went.",
                "The list of official models and their rates can change over time. A change never applies to requests that have already completed.",
                "Credits work only inside the DeTars app, for DeTars’s official models. They are not money: they have no cash value and cannot be withdrawn, transferred or resold."
              ]
            }
          ]
        },
        {
          h2: "How to buy",
          blocks: [
            {
              type: "p",
              html:
                "There is no web store. You buy credits from inside the DeTars app, which opens a Paddle checkout. Paddle is our Merchant of Record: it processes the payment, handles tax and sends your receipt. We never see your card number."
            }
          ]
        },
        {
          h2: "Refunds and terms",
          blocks: [
            {
              type: "p",
              html: `A pack whose credits are completely unused can be refunded in full within 14 days of purchase. The details are in our ${link("/refund", "Refund Policy")}, and credits are covered by our ${link("/terms", "Terms of Service")}.`
            }
          ]
        }
      ],
      cta: { label: "Get the app to buy credits →", route: "/download" }
    },

    terms: {
      title: "Terms of Service | DeTars",
      description:
        "The terms that govern your use of the DeTars app, DeTars accounts, DeTars credits, the official-model service and this website.",
      kicker: "Legal",
      h1: "Terms of Service",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer:
        "These terms govern your use of DeTars. Credits are prepaid usage for DeTars’s official models inside the app: purchased credits do not expire, and they have no cash value. Payments are processed by Paddle as Merchant of Record. The Services and AI output are provided as is, and these terms are governed by the laws of the Cayman Islands.",
      sections: [
        {
          h2: "1. Agreement",
          id: "agreement",
          blocks: [
            {
              type: "p",
              html: `These Terms of Service (“Terms”) are an agreement between you and DeTars (“DeTars”, “we”, “us” or “our”). They govern your access to and use of the DeTars app, DeTars accounts, DeTars credits, the official-model service and this website (together, the “Services”).`
            },
            {
              type: "p",
              html: "By accessing or using the Services, you agree to these Terms. If you do not agree to these Terms, you must not access or use the Services."
            }
          ]
        },
        {
          h2: "2. The Services",
          blocks: [
            {
              type: "p",
              html:
                "DeTars is a desktop AI assistant app for macOS and Windows that runs on your own computer. You may use it with your own API keys from 20+ model providers, at no charge from us; your use of those providers is governed by your agreement with them. Optionally, you may buy DeTars credits to use DeTars’s official models inside the app without managing your own keys."
            }
          ]
        },
        {
          h2: "3. Eligibility and accounts",
          id: "account",
          blocks: [
            {
              type: "list",
              items: [
                "You must be at least 16 years old to use the Services. The Services are not directed at children.",
                "You sign in with Google, through our identity provider Auth0 (Okta). An account is required to buy or use credits.",
                "You must provide accurate information to us, including when you create an account or contact us.",
                "You are responsible for all activity that occurs under your DeTars account, and for keeping your Google account secure."
              ]
            }
          ]
        },
        {
          h2: "4. DeTars credits",
          id: "credits",
          blocks: [
            {
              type: "list",
              items: [
                `Credits are sold in packs. 1 USD = ${CREDITS_PER_USD} credits. Current packs are listed on our ${link("/pricing", "pricing page")}.`,
                "Credits are consumed per request, according to the model’s token usage. The app shows the cost of each request.",
                "We may change credit packs, prices, the official models and their rates at any time at our discretion. Changes never apply to requests that have already completed.",
                "Credits may be used only inside the DeTars app, for DeTars’s official models.",
                "Credits are not money. They have no cash value and cannot be withdrawn, transferred, resold or exchanged. They are bound to your DeTars account.",
                "<b>Purchased credits do not expire.</b>",
                "If we discontinue the official-model service, we will notify you at least 30 days in advance, by email and in the app."
              ]
            }
          ]
        },
        {
          h2: "5. Payments",
          id: "payments",
          blocks: [
            {
              type: "list",
              items: [
                "Paddle.com is the Merchant of Record and reseller for all purchases. Paddle processes your payment and handles sales tax and VAT, invoices and refunds.",
                `${buyerTerms} apply to every purchase of credits, in addition to these Terms.`,
                "Prices are in US dollars and include applicable sales tax or VAT, which Paddle calculates at checkout.",
                "Purchases are initiated in the DeTars app, which opens a Paddle checkout. We never see or store your full card number.",
                "We may limit purchases, for example on new accounts or to prevent fraud.",
                "We may refuse or cancel any order at our discretion, for example where we suspect fraud. If we cancel an order before the credits are delivered, the payment will be refunded."
              ]
            }
          ]
        },
        {
          h2: "6. Refunds and chargebacks",
          id: "refunds",
          blocks: [
            {
              type: "p",
              html: `Except as set out in our ${link("/refund", "Refund Policy")} or where required by law, all payments are non-refundable.`
            },
            {
              type: "p",
              html:
                "If a payment is charged back or otherwise reversed, we will remove the related credits from your account, and we may suspend your account and dispute the chargeback."
            }
          ]
        },
        {
          h2: "7. Acceptable use",
          id: "acceptable-use",
          intro: "You must not, and must not attempt to:",
          blocks: [
            {
              type: "list",
              items: [
                "use the Services to create, store or share unlawful content, or to engage in any unlawful activity;",
                "extract, proxy or resell access to the official models or our API;",
                "circumvent rate limits, purchase limits or any other limits of the Services;",
                "attack, probe, overload or disrupt the Services, or interfere with other users’ use of them;",
                "reverse engineer the official-model service, or circumvent its security or authentication measures;",
                "use the official-model service to develop AI models that compete with the official models;",
                "use the Services in violation of the usage policies of the model providers behind the official models."
              ]
            }
          ]
        },
        {
          h2: "8. Inputs and outputs",
          id: "content",
          blocks: [
            {
              type: "p",
              html:
                "In these Terms, “Inputs” means the prompts and other content you submit through the Services, and “Outputs” means the content generated in response."
            },
            {
              type: "list",
              items: [
                "You retain any rights you have in your Inputs. You authorize us to process and transmit your Inputs as needed to provide the Services, for example to pass them to the model provider that generates the response.",
                "As between you and DeTars, we assign to you any right, title and interest we may have in Outputs.",
                "You are responsible for having all rights necessary for your Inputs, and for your use of Outputs.",
                "Outputs may not be unique. Other users may receive similar or identical Outputs, and your rights do not extend to them."
              ]
            }
          ]
        },
        {
          h2: "9. Feedback",
          blocks: [
            {
              type: "p",
              html:
                "If you send us feedback or suggestions about the Services, we may use them freely, for any purpose, without any obligation or compensation to you."
            }
          ]
        },
        {
          h2: "10. Third-party services",
          blocks: [
            {
              type: "p",
              html:
                "The Services interact with services operated by third parties, including OpenRouter and the model providers behind the official models, chat apps such as Telegram, and the providers you use with your own API keys. Your use of those services is governed by their own terms and policies. We are not responsible for third-party services, their availability or their content."
            }
          ]
        },
        {
          h2: "11. AI output",
          blocks: [
            {
              type: "p",
              html:
                "AI models make mistakes. Outputs may be inaccurate, incomplete or out of date, and you are solely responsible for your use of them. You should independently verify any important information before relying on it."
            },
            {
              type: "p",
              html:
                "The investing pack provides information and records only and does not constitute investment advice. The pet pack does not provide diagnoses and is not a substitute for a licensed veterinarian."
            }
          ]
        },
        {
          h2: "12. Privacy",
          blocks: [
            {
              type: "p",
              html: `Our ${link("/privacy", "Privacy Policy")} describes how we collect, use and share personal data in connection with the Services.`
            }
          ]
        },
        {
          h2: "13. Changes to the Services",
          blocks: [
            {
              type: "p",
              html:
                "We may modify, suspend or discontinue any part of the Services, including features, official models and their rates, at any time at our discretion. If we discontinue the official-model service, we will give you at least 30 days’ notice, by email and in the app."
            }
          ]
        },
        {
          h2: "14. Suspension and termination",
          id: "suspension",
          blocks: [
            {
              type: "p",
              html:
                "We may suspend or terminate your access to all or part of the Services at any time, with or without notice, if we believe that you have breached these Terms or the usage policies of the model providers behind the official models; in cases of fraud, abuse or chargebacks; where necessary to comply with law; or to protect the Services or other users."
            },
            {
              type: "p",
              html:
                "If we terminate your account because you breached these Terms, any unused credits are forfeited, to the extent permitted by law."
            },
            {
              type: "p",
              html: `You may stop using the Services at any time. To delete your account, email ${mailto}.`
            },
            {
              type: "p",
              html:
                "Provisions of these Terms that by their nature should survive termination will survive, including those on refunds, inputs and outputs, disclaimers, limitation of liability, indemnification and governing law."
            }
          ]
        },
        {
          h2: "15. Disclaimer of warranties",
          id: "disclaimer",
          blocks: [
            {
              type: "p",
              html: caps(
                "TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICES AND ALL OUTPUTS ARE PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED OR STATUTORY. DETARS DISCLAIMS ALL WARRANTIES, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND ACCURACY, AND ANY WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE."
              )
            }
          ]
        },
        {
          h2: "16. Limitation of liability",
          id: "liability",
          blocks: [
            {
              type: "p",
              html: caps(
                "TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL DETARS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA OR GOODWILL, ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS, HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, EVEN IF DETARS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."
              )
            },
            {
              type: "p",
              html: caps(
                "TO THE FULLEST EXTENT PERMITTED BY LAW, DETARS’S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID FOR THE SERVICES, INCLUDING THROUGH PADDLE, IN THE SIX MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM, AND (B) USD 100."
              )
            },
            {
              type: "p",
              html:
                "Nothing in these Terms excludes or limits any liability that cannot be excluded or limited by law, or deprives you of rights you have as a consumer under the law of the country where you live."
            }
          ]
        },
        {
          h2: "17. Indemnification",
          blocks: [
            {
              type: "p",
              html:
                "To the extent permitted by law, you will indemnify and hold harmless DeTars from and against any claims, losses, liabilities, damages, costs and expenses (including reasonable legal fees) arising out of or relating to your breach of these Terms, your misuse of the Services, your Inputs, or your violation of any law or the rights of any third party."
            }
          ]
        },
        {
          h2: "18. Governing law and disputes",
          id: "governing-law",
          blocks: [
            {
              type: "p",
              html:
                "These Terms, and any dispute or claim arising out of or relating to them or the Services, are governed by the laws of the Cayman Islands. The courts of the Cayman Islands have exclusive jurisdiction over any such dispute or claim."
            },
            {
              type: "p",
              html: `Before filing a claim, you agree to contact us at ${mailto} and to try to resolve the dispute informally for 30 days.`
            },
            {
              type: "p",
              html:
                "If you are a consumer, nothing in this section deprives you of the protection of the mandatory provisions of the law of your country of residence, or of any right to bring proceedings in the courts of that country where the law gives you that right."
            }
          ]
        },
        {
          h2: "19. Force majeure",
          blocks: [
            {
              type: "p",
              html:
                "We are not liable for any delay or failure to perform caused by events beyond our reasonable control, including natural disasters, epidemics, war, terrorism, civil unrest, labor disputes, acts of government, cyberattacks, and failures of the internet, utilities, hosting providers or model providers."
            }
          ]
        },
        {
          h2: "20. General",
          blocks: [
            {
              type: "list",
              items: [
                `<b>Entire agreement.</b> These Terms, together with our ${link("/privacy", "Privacy Policy")}, our ${link("/refund", "Refund Policy")} and, for purchases, ${buyerTerms}, are the entire agreement between you and DeTars regarding the Services.`,
                "<b>Severability.</b> If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the remaining provisions will remain in full force and effect.",
                "<b>No waiver.</b> Our failure to enforce any provision of these Terms is not a waiver of our right to enforce it later.",
                "<b>Assignment.</b> We may assign or transfer these Terms, in whole or in part, without your consent. You may not assign or transfer these Terms without our prior written consent.",
                "<b>Language.</b> These Terms are written in English. If a translation conflicts with the English version, the English version governs."
              ]
            }
          ]
        },
        {
          h2: "21. Changes to these Terms",
          blocks: [
            {
              type: "p",
              html:
                "We may revise these Terms from time to time at our discretion. We will post the revised Terms on this page and update the date at the top. If a change is material, we will give you notice by reasonable means, such as by email or in the app. By continuing to use the Services after the revised Terms take effect, you accept them."
            }
          ]
        },
        {
          h2: "22. Contact",
          blocks: [{ type: "p", html: `Questions about these Terms can be sent to ${mailto}.` }]
        }
      ]
    },

    privacy: {
      title: "Privacy Policy | DeTars",
      description:
        "What personal data DeTars processes, why, who helps us process it, and how to access or delete it. Your conversations stay on your device, and we do not sell personal data.",
      kicker: "Legal",
      h1: "Privacy Policy",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer:
        "The DeTars app keeps your conversations and memory on your own device. To operate accounts, credits and the official models, we process limited personal data: account details, device keys, usage records and order records. We do not store the content of your prompts or responses in our databases, and we do not sell personal data.",
      sections: [
        {
          h2: "1. Who we are",
          blocks: [
            {
              type: "p",
              html: `DeTars (“DeTars”, “we”, “us” or “our”) is responsible for the personal data described in this Privacy Policy. This policy applies to the DeTars app, DeTars accounts, DeTars credits, the official-model service and this website (together, the “Services”). You can contact us at ${mailto}.`
            }
          ]
        },
        {
          h2: "2. Data that stays on your device",
          id: "local",
          blocks: [
            {
              type: "p",
              html:
                "The DeTars app runs on your computer. Your conversations, the memory the app builds and the files it works with are stored on your own disk, and new memories require your confirmation before they are saved. You may delete them from your device at any time."
            },
            {
              type: "p",
              html:
                "Two kinds of data leave your device. When the app sends a request to an AI model, the content of that request is sent to the model’s provider (see section 4). If you communicate with DeTars through a chat app such as Telegram, Slack, Feishu or WeChat, those messages pass through that app’s service and are subject to its own privacy policy."
            }
          ]
        },
        {
          h2: "3. Data we process on our servers",
          id: "data",
          blocks: [
            {
              type: "list",
              items: [
                "<b>Account data</b> from Google sign-in: your email address, your name and your account identifier.",
                "<b>Device data:</b> a device identifier and the device’s public key, used to verify that requests are signed by your device, together with basic details the app reports when a device is registered (such as the device name, operating system and version, and processor type).",
                "<b>Usage records</b> for the official models: the timestamp, model, token counts and credits charged for each request.",
                "<b>Order and payment records:</b> order ID, pack, amount and status. We never receive or store your full card number. Paddle’s payment notifications, which we retain with the order, may include limited details such as the card type, the last four digits and expiry date of the card, and the cardholder name.",
                "<b>Support communications:</b> emails you send us, and our replies."
              ]
            },
            {
              type: "p",
              html:
                "We use this data to provide your account, verify devices, operate and bill the official models, process orders and refunds, prevent fraud and abuse, and respond to support requests."
            }
          ]
        },
        {
          h2: "4. Your prompts and responses",
          id: "content",
          blocks: [
            {
              type: "p",
              html:
                "<b>When you use DeTars’s official models, we do not store the content of your prompts or responses in our databases.</b> They pass through our gateway to OpenRouter and the underlying model provider to generate the response, under those providers’ policies."
            },
            {
              type: "p",
              html:
                "Like most online services, we keep operational and security logs to run, secure and troubleshoot the Services. These logs may incidentally contain limited portions of request or response data, for example when a provider returns an error. We keep logs only for as long as needed for these purposes."
            },
            {
              type: "p",
              html:
                "To help OpenRouter prevent abuse, we send it a pseudonymous identifier derived from your account, never your email address or name."
            },
            {
              type: "p",
              html:
                "If you use your own API keys instead, your requests go to the provider you configured, under your agreement with that provider. Those requests do not use DeTars credits or our official-model gateway."
            }
          ]
        },
        {
          h2: "5. Payments",
          blocks: [
            {
              type: "p",
              html:
                "Paddle is the Merchant of Record for DeTars credits. Paddle collects your payment details, email address and billing information at checkout and processes them under its own privacy policy. We tell Paddle which DeTars account an order belongs to, using an internal account ID, and Paddle notifies us when an order is paid, refunded or charged back."
            }
          ]
        },
        {
          h2: "6. This website",
          id: "website",
          blocks: [
            {
              type: "p",
              html:
                "This website uses no analytics and no tracking cookies. It is hosted on GitHub Pages, which may log technical data such as your IP address in order to serve and protect the site. Pages load fonts from Google Fonts, so your browser requests them from Google’s servers. The checkout page at <code>/pay</code> loads Paddle’s checkout, which sets its own cookies."
            }
          ]
        },
        {
          h2: "7. Service providers and disclosures",
          id: "processors",
          intro:
            "We use the following service providers to operate the Services. We share personal data with them only as needed to provide the Services, subject to their terms and data protection commitments.",
          blocks: [
            {
              type: "list",
              items: [
                "<b>Cloudflare:</b> hosting and infrastructure for our servers, gateway and databases.",
                "<b>Auth0 (Okta):</b> sign-in.",
                "<b>Google:</b> sign-in.",
                "<b>Paddle:</b> payments, as Merchant of Record.",
                "<b>OpenRouter and the model providers it routes to:</b> generating responses from the official models.",
                "<b>GitHub Pages:</b> hosting this website."
              ]
            },
            {
              type: "p",
              html:
                "These providers may process personal data in countries other than your own, including the United States. We may also disclose personal data where required by law, or to protect DeTars and its users from fraud or abuse."
            }
          ]
        },
        {
          h2: "8. Legal bases",
          id: "legal-bases",
          intro: "If the GDPR or the UK GDPR applies to you, we rely on the following legal bases to process your personal data:",
          blocks: [
            {
              type: "list",
              items: [
                "<b>Performance of our contract with you:</b> to provide your account, your credits and the official models.",
                "<b>Legitimate interests:</b> to secure the Services, prevent fraud and abuse, and improve the Services using operational data, not your conversations.",
                "<b>Legal obligations:</b> to keep tax and accounting records.",
                "<b>Consent:</b> where we ask for it. You may withdraw your consent at any time."
              ]
            }
          ]
        },
        {
          h2: "9. Data retention",
          blocks: [
            {
              type: "list",
              items: [
                "Account and device data: for as long as your account exists.",
                "Order and payment records: for as long as tax and accounting law requires.",
                "Usage records: for as long as we need them for billing and support.",
                "Operational and security logs: only for as long as needed to run, secure and troubleshoot the Services."
              ]
            }
          ]
        },
        {
          h2: "10. Your rights",
          id: "rights",
          blocks: [
            {
              type: "p",
              html: `Depending on where you live, laws such as the GDPR, the UK GDPR and the CCPA give you rights over your personal data, including the right to access, correct or delete it, to receive a copy of it, and to object to or restrict its processing. To exercise these rights, email ${mailto}, preferably from the address you sign in with. We may need to verify your identity, and we will respond within the time required by law. If your account is deleted, we will continue to retain order records for as long as the law requires. You also have the right to lodge a complaint with your local data protection authority.`
            }
          ]
        },
        {
          h2: "11. No sale of personal data",
          blocks: [
            {
              type: "p",
              html: "We do not sell personal data, and we do not share personal data for advertising purposes."
            }
          ]
        },
        {
          h2: "12. Children",
          blocks: [
            {
              type: "p",
              html: `The Services are intended for people aged 16 and over and are not directed at children. If you believe that a child has provided us with personal data, please contact ${mailto} and we will delete it.`
            }
          ]
        },
        {
          h2: "13. Security",
          blocks: [
            {
              type: "p",
              html:
                "We use reasonable technical and organizational measures designed to protect personal data. Connections to our services are encrypted, each device proves its identity with its own key, and access to our systems is restricted. However, no method of transmission or storage is completely secure. Where the law requires, we will notify you of a personal data breach that affects you."
            }
          ]
        },
        {
          h2: "14. Changes to this policy",
          blocks: [
            {
              type: "p",
              html:
                "We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new date at the top. If a change is material, we will give you notice by reasonable means, such as by email or in the app."
            }
          ]
        },
        {
          h2: "15. Contact",
          blocks: [{ type: "p", html: `Questions about this Privacy Policy or our handling of personal data can be sent to ${mailto}.` }]
        }
      ]
    },

    refund: {
      title: "Refund Policy | DeTars",
      description:
        "DeTars purchases are final, except that a credit pack whose credits are completely unused can be refunded in full within 14 days of purchase.",
      kicker: "Legal",
      h1: "Refund Policy",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer: `All purchases are final, except that a credit pack whose credits are completely unused can be refunded in full within 14 days of purchase. To request a refund, email ${mailto} with your account email address and order ID.`,
      sections: [
        {
          h2: "1. General",
          blocks: [
            {
              type: "p",
              html: "Except as set out in this policy or where required by law, all purchases are final and non-refundable."
            }
          ]
        },
        {
          h2: "2. Unused credit packs",
          blocks: [
            {
              type: "p",
              html:
                "A credit pack whose credits are <b>completely unused</b> is eligible for a full refund if you request it within <b>14 days</b> of purchase."
            }
          ]
        },
        {
          h2: "3. Used credit packs",
          blocks: [
            {
              type: "p",
              html: "Once any credits from a pack have been used, that pack is not refundable, except where required by law."
            }
          ]
        },
        {
          h2: "4. Cancelled orders",
          blocks: [
            {
              type: "p",
              html: `If we cancel an order before the credits are delivered, as described in our ${link("/terms", "Terms of Service")}, the payment will be refunded.`
            }
          ]
        },
        {
          h2: "5. How to request a refund",
          blocks: [
            {
              type: "p",
              html: `Email ${mailto} with the email address of your DeTars account and the order ID, or your Paddle receipt. You can also contact Paddle directly through the link in your receipt email.`
            }
          ]
        },
        {
          h2: "6. Discretionary refunds",
          blocks: [
            {
              type: "p",
              html:
                "We may, at our discretion, grant refunds in other cases. Doing so does not oblige us to grant a refund in any other case."
            }
          ]
        },
        {
          h2: "7. How refunds are processed",
          blocks: [
            {
              type: "p",
              html:
                "Approved refunds are issued through Paddle, our Merchant of Record, to your original payment method. The refunded credits are removed from your account. The time it takes for the funds to arrive depends on your bank or card issuer."
            }
          ]
        },
        {
          h2: "8. Chargebacks",
          blocks: [
            {
              type: "p",
              html:
                "If you have a problem with a purchase, please contact us before disputing the payment with your bank or card issuer. If a payment is charged back or otherwise reversed, we will remove the related credits from your account, and we may suspend your account and dispute the chargeback."
            }
          ]
        },
        {
          h2: "9. Your statutory rights",
          blocks: [
            {
              type: "p",
              html: `Nothing in this policy affects your statutory rights as a consumer under the law of the country where you live. ${buyerTerms} also apply to your purchase, and our ${link("/terms", "Terms of Service")} govern credits generally.`
            }
          ]
        },
        {
          h2: "10. Contact",
          blocks: [
            {
              type: "p",
              html: `Questions about this policy can be sent to ${mailto}. Please include your order ID so that we can locate your purchase.`
            }
          ]
        }
      ]
    }
  };
}
