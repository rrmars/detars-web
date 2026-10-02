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
                "<b>Credits never expire.</b> Credits you buy stay in your account until you use them."
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
      description: "The terms for using the DeTars app, DeTars accounts and DeTars credits.",
      kicker: "Legal",
      h1: "Terms of Service",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer:
        "Use DeTars lawfully and don’t abuse the service. Credits are prepaid usage for DeTars’s official models inside the app: they never expire and are not money. Paddle handles payments. AI output can be wrong, so check what matters.",
      sections: [
        {
          h2: "1. About these terms",
          blocks: [
            {
              type: "p",
              html: `These terms are an agreement between you and DeTars (“DeTars”, “we”, “us”). They cover the DeTars app, DeTars accounts, DeTars credits and the official-model service, and this website. By using any of them you agree to these terms. If you do not agree, please do not use DeTars. Questions: ${mailto}.`
            }
          ]
        },
        {
          h2: "2. What DeTars is",
          blocks: [
            {
              type: "p",
              html:
                "DeTars is a desktop AI assistant app for macOS and Windows that runs on your own computer. You can use it with your own API keys from 20+ model providers, at no charge from us; your use of those providers is governed by your agreement with them. Optionally, you can buy DeTars credits to use DeTars’s official models inside the app without managing your own keys."
            }
          ]
        },
        {
          h2: "3. Your account",
          id: "account",
          blocks: [
            {
              type: "list",
              items: [
                "You sign in with Google, through our identity provider Auth0 (Okta). You need an account to buy or use credits.",
                "You must be at least 16 years old to use DeTars. DeTars is not directed at children.",
                "Keep your Google account secure. You are responsible for what happens under your DeTars account."
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
                "Credits are used per request, according to the model’s token usage. The app shows what each request cost.",
                "We may change the list of official models and their rates. Changes never apply to requests that have already completed.",
                "Credits can be used only inside the DeTars app, for DeTars’s official models.",
                "Credits are not money. They have no cash value and cannot be withdrawn, transferred, resold or exchanged. They are tied to your DeTars account.",
                "<b>Purchased credits do not expire.</b>",
                "If we ever discontinue the official-model service, we will tell you at least 30 days in advance, by email and in the app."
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
                `When you buy credits, ${buyerTerms} also apply to the purchase.`,
                "Prices are in US dollars and include applicable sales tax or VAT, which Paddle calculates at checkout.",
                "Purchases start in the DeTars app, which opens a Paddle checkout. We never see or store your card number.",
                "To prevent fraud, we may limit purchases on new accounts."
              ]
            }
          ]
        },
        {
          h2: "6. Refunds and chargebacks",
          blocks: [
            {
              type: "p",
              html: `A credit pack whose credits are completely unused can be refunded in full within 14 days of purchase. Our ${link("/refund", "Refund Policy")} explains how. If a payment is charged back or reversed, we remove the related credits and may suspend the account.`
            }
          ]
        },
        {
          h2: "7. Acceptable use",
          id: "acceptable-use",
          intro: "Don’t use DeTars to:",
          blocks: [
            {
              type: "list",
              items: [
                "create, store or share illegal content, or do anything illegal;",
                "extract, proxy or resell access to the official models or our API;",
                "get around rate limits, purchase limits or other limits of the service;",
                "attack, probe, overload or disrupt the service or other users;",
                "break the usage policies of the model providers behind the official models."
              ]
            }
          ]
        },
        {
          h2: "8. AI output",
          blocks: [
            {
              type: "p",
              html:
                "AI models make mistakes. Output can be inaccurate, incomplete or out of date, and you are responsible for how you use it. Check anything important before you rely on it. The investing pack provides information and records, not investment advice. The pet pack does not diagnose and is not a substitute for a licensed vet."
            }
          ]
        },
        {
          h2: "9. Your data",
          blocks: [
            {
              type: "p",
              html: `Our ${link("/privacy", "Privacy Policy")} explains what data we process and why.`
            }
          ]
        },
        {
          h2: "10. Suspension and termination",
          id: "suspension",
          blocks: [
            {
              type: "p",
              html:
                "We may suspend or close an account for fraud, abuse, chargebacks, or a breach of these terms or of the model providers’ usage policies. You can stop using DeTars at any time; to delete your account, email us."
            }
          ]
        },
        {
          h2: "11. Changes to the service",
          blocks: [
            {
              type: "p",
              html:
                "DeTars is changing all the time. We may add, change or remove features, official models and rates. If we discontinue the official-model service, we will give at least 30 days’ notice, by email and in the app."
            }
          ]
        },
        {
          h2: "12. Disclaimer",
          blocks: [
            {
              type: "p",
              html:
                "DeTars is provided “as is” and “as available”. As far as the law allows, we make no promises beyond those in these terms: we don’t guarantee that DeTars will be uninterrupted, error-free or fit for a particular purpose, or that its output will be accurate."
            }
          ]
        },
        {
          h2: "13. Limitation of liability",
          blocks: [
            {
              type: "p",
              html:
                "As far as the law allows, we are not liable for indirect or consequential losses, such as lost profits, lost data or business interruption. Our total liability to you for any claim relating to DeTars is limited to the amount you paid us in the 12 months before the claim."
            },
            {
              type: "p",
              html:
                "Nothing in these terms limits liability that cannot be limited by law, or takes away rights you have as a consumer under the law where you live."
            }
          ]
        },
        {
          h2: "14. Changes to these terms",
          blocks: [
            {
              type: "p",
              html:
                "We may update these terms. We will post the new version here and change the date at the top. If you keep using DeTars after a change takes effect, the updated terms apply."
            }
          ]
        },
        {
          h2: "15. Contact",
          blocks: [{ type: "p", html: `Email ${mailto}.` }]
        }
      ]
    },

    privacy: {
      title: "Privacy Policy | DeTars",
      description:
        "What data DeTars processes, why, who helps us process it, and how to access or delete it. Your conversations stay on your device; we don't sell personal data.",
      kicker: "Legal",
      h1: "Privacy Policy",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer:
        "The DeTars app keeps your conversations and memory on your own device. To run accounts, credits and the official models we process a small amount of data: your account details, device keys, usage and order records. We do not store the content of your prompts or responses on our servers, and we do not sell personal data.",
      sections: [
        {
          h2: "1. Who we are",
          blocks: [
            {
              type: "p",
              html: `DeTars (“we”, “us”) is responsible for the data described here. This policy covers the DeTars app, DeTars accounts, DeTars credits and the official-model service, and this website. Contact: ${mailto}.`
            }
          ]
        },
        {
          h2: "2. What stays on your device",
          id: "local",
          blocks: [
            {
              type: "p",
              html:
                "DeTars runs on your computer. Your conversations, the memory it builds and the files it works with are kept on your own disk, and new memories need your confirmation before they are saved. You can delete them from your device at any time."
            },
            {
              type: "p",
              html:
                "Two things do leave your device. When the app sends a request to an AI model, the content of that request goes to the model’s provider (section 4). And if you talk to DeTars through a chat app such as Telegram, Slack, Feishu or WeChat, those messages pass through that app’s service, under its own privacy policy."
            }
          ]
        },
        {
          h2: "3. What we process on our servers",
          id: "data",
          blocks: [
            {
              type: "list",
              items: [
                "<b>Account data</b> from Google sign-in: your email address, your name, and your account identifier.",
                "<b>Device data:</b> a device identifier and the device’s public key, used to verify that requests are signed by your device, plus basic details the app reports when a device is registered (such as the device name, operating system and version, and processor type).",
                "<b>Usage records</b> for the official models: timestamp, model, token counts and credits charged for each request.",
                "<b>Order and payment records:</b> order ID, pack, amount and status. We never receive or store your full card number. Paddle’s payment notifications, which we keep with the order, can include limited details such as the card type, its last four digits and expiry date, and the cardholder name.",
                "<b>Support emails</b> you send us, and our replies."
              ]
            },
            {
              type: "p",
              html:
                "We use this data to provide your account, verify devices, run and bill the official models, process orders and refunds, prevent fraud and abuse, and answer support requests."
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
                "<b>When you use DeTars’s official models, we do not store the content of your prompts or responses on our servers.</b> They pass through our gateway to OpenRouter and the underlying model provider to generate the response, under those providers’ policies."
            },
            {
              type: "p",
              html:
                "Our gateway keeps operational logs to keep the service running. They record things like request IDs, account or device IDs, error codes and timings, not your conversations. In rare failure cases, such as a provider returning a malformed reply or an error message, a short excerpt of what the provider returned (a few hundred characters at most) can end up in an error log. To help OpenRouter prevent abuse, we send it a pseudonymous identifier derived from your account, never your email or name."
            },
            {
              type: "p",
              html:
                "If you use your own API keys instead, your requests go to the provider you configured, under your agreement with that provider. They do not use DeTars credits or our official-model gateway."
            }
          ]
        },
        {
          h2: "5. Payments",
          blocks: [
            {
              type: "p",
              html:
                "Paddle is the Merchant of Record for DeTars credits. Paddle collects your payment details, email and billing information at checkout and processes them under its own privacy policy. We tell Paddle which DeTars account an order belongs to, using an internal account ID, and Paddle tells us when an order is paid, refunded or charged back."
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
                "This website uses no analytics and no tracking cookies. It is hosted on GitHub Pages, which may log technical data such as your IP address to serve and protect the site. Pages load fonts from Google Fonts, so your browser requests them from Google’s servers. The checkout page at <code>/pay</code> loads Paddle’s checkout, which sets its own cookies."
            }
          ]
        },
        {
          h2: "7. Service providers",
          id: "processors",
          intro: "We use these providers to run DeTars. Each receives only what it needs for its job.",
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
                "These providers may process data in countries other than yours, including the United States. We may also disclose data where the law requires it, or to protect DeTars and its users from fraud or abuse."
            }
          ]
        },
        {
          h2: "8. How long we keep data",
          blocks: [
            {
              type: "list",
              items: [
                "Account and device data: for as long as your account exists.",
                "Order and payment records: for as long as tax and accounting law requires.",
                "Usage records: for as long as we need them for billing and support."
              ]
            }
          ]
        },
        {
          h2: "9. Your rights",
          id: "rights",
          blocks: [
            {
              type: "p",
              html: `Depending on where you live, laws such as the GDPR, the UK GDPR and the CCPA give you rights over your personal data: to access it, correct it, delete it, get a copy of it, and object to or restrict how we use it. To make a request, email ${mailto}, ideally from the address you sign in with. We may need to confirm it is you, and we will answer within the time the law requires. If we delete your account, we still keep order records for as long as the law requires. You can also complain to your local data protection authority.`
            }
          ]
        },
        {
          h2: "10. We don’t sell your data",
          blocks: [
            {
              type: "p",
              html: "We do not sell personal data, and we do not share it for advertising."
            }
          ]
        },
        {
          h2: "11. Children",
          blocks: [
            {
              type: "p",
              html: `DeTars is for people aged 16 and over and is not directed at children. If you believe a child has given us personal data, email ${mailto} and we will delete it.`
            }
          ]
        },
        {
          h2: "12. Security",
          blocks: [
            {
              type: "p",
              html:
                "Connections to our services are encrypted, your device proves its identity with its own key, and access to our systems is restricted. No system is perfectly secure, but we work to protect your data and will tell you if a breach affects you where the law requires it."
            }
          ]
        },
        {
          h2: "13. Changes to this policy",
          blocks: [
            {
              type: "p",
              html: "We may update this policy. We will post the new version here and change the date at the top."
            }
          ]
        },
        {
          h2: "14. Contact",
          blocks: [{ type: "p", html: `Email ${mailto}.` }]
        }
      ]
    },

    refund: {
      title: "Refund Policy | DeTars",
      description: "Unused DeTars credit packs can be refunded in full within 14 days of purchase. How to ask, and what happens next.",
      kicker: "Legal",
      h1: "Refund Policy",
      doc: true,
      updated: LEGAL_UPDATED.en,
      answer: `If you haven’t used any credits from a pack, you can get a full refund within 14 days of buying it. Email ${mailto} with your account email and order ID.`,
      sections: [
        {
          h2: "1. Full refund for unused packs",
          blocks: [
            {
              type: "p",
              html:
                "Within <b>14 days</b> of purchase, a credit pack whose credits are <b>completely unused</b> gets a full refund."
            }
          ]
        },
        {
          h2: "2. Packs that have been used",
          blocks: [
            {
              type: "p",
              html: "Once any credits from a pack have been used, that pack is not refundable, except where the law requires a refund."
            }
          ]
        },
        {
          h2: "3. How to ask for a refund",
          blocks: [
            {
              type: "p",
              html: `Email ${mailto} with the email address of your DeTars account and the order ID, or your Paddle receipt. You can also contact Paddle directly through the link in your receipt email.`
            }
          ]
        },
        {
          h2: "4. What happens next",
          blocks: [
            {
              type: "p",
              html:
                "Approved refunds go back to your original payment method through Paddle, our Merchant of Record. The refunded credits are removed from your account. How long the money takes to arrive depends on your bank or card issuer."
            }
          ]
        },
        {
          h2: "5. Chargebacks",
          blocks: [
            {
              type: "p",
              html:
                "If something is wrong, please contact us first. If a payment is charged back or reversed, we remove the related credits from your account and may suspend the account."
            }
          ]
        },
        {
          h2: "6. Your statutory rights",
          blocks: [
            {
              type: "p",
              html: `Nothing in this policy limits your rights as a consumer under the law where you live. ${buyerTerms} also apply to your purchase, and our ${link("/terms", "Terms of Service")} cover credits in general.`
            }
          ]
        },
        {
          h2: "7. Contact",
          blocks: [{ type: "p", html: `Email ${mailto}. Please include your order ID so we can find your purchase quickly.` }]
        }
      ]
    }
  };
}
