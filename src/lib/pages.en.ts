import { RELEASED, assets, dl } from "@/lib/download";
import type { PageContent, PageKey } from "@/lib/pages";

export const pagesEn: Record<PageKey, PageContent> = {
  "how-it-works": {
    title: "How DeTars works | One line in, finished work out",
    description:
      "Send DeTars one line or one photo from any chat app. It runs in the background for hours, then comes back to you with finished work.",
    kicker: "Living with it",
    h1: "Toss it one line. <span class='o'>It runs the rest.</span>",
    answer:
      "DeTars takes input from any chat app you already use, runs the work in the background — for hours, even overnight — and comes back to you when it's done. It lives for you, not the other way around.",
    sections: [
      {
        h2: "The one motif",
        intro: "Everything you do with DeTars follows the same shape.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Input from anywhere.</b> A line or a photo via Feishu, Slack, Telegram, or WeChat — no new app to learn.",
              "<b>It runs in the background.</b> It plans, spins up specialists, and works for hours without you babysitting it.",
              "<b>It comes back to you.</b> When the work is done — or when it genuinely needs a decision — it pings you."
            ]
          }
        ]
      },
      {
        h2: "Four ways people already use it",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "Pet Care", title: "📷 A photo of your dog", body: "Send a snapshot; get a funny short video plus ready-to-post captions." },
              { tag: "Investing", title: "💡 A stock you heard about", body: "Mention it once; it keeps watching and comes back when something moves. Trading is code-locked." },
              { tag: "Voiceover", title: "🎙️ A talking-head clip", body: "Film on the go; get an edited cut with subtitles — your real voice kept, not replaced by TTS." },
              { tag: "Research", title: "🔍 Something you overheard", body: "One line; get a sourced report and ongoing tracking on the topic." }
            ]
          }
        ]
      },
      {
        h2: "Why it's not just another chatbot",
        blocks: [
          {
            type: "p",
            html:
              "A chatbot waits for you and forgets. DeTars carries a goal: it reasons about <b>how</b> to do the work, recovers when things break, and only marks something done when it can prove it. The chat window is just the surface — the work happens underneath."
          }
        ]
      }
    ],
    cta: { label: "See why you can trust it →", route: "/reliable" }
  },

  reliable: {
    title: "Why DeTars is reliable | Six things it does that others can't",
    description:
      "DeTars turns a brilliant-but-unreliable AI into a team you can trust with real work: it reasons, survives failure, can't fake completion, self-corrects, stays yours, and isn't locked to any vendor.",
    kicker: "Why you can trust it",
    h1: "Reliability, <span class='o'>built into the architecture.</span>",
    answer:
      "Today's AI is a brilliant but unreliable intern. DeTars makes it trustworthy through six structural properties — not promises, but mechanisms you can verify.",
    sections: [
      {
        h2: "The six",
        blocks: [
          {
            type: "list",
            items: [
              "<b>It thinks for itself.</b> Give it a goal; it breaks the work down, forms a team of specialists, tracks progress, pauses to await results, and resumes. The how is reasoned on the spot, not a hard-wired script.",
              "<b>It doesn't fall over.</b> Rate limits, timeouts, sleep, crashes — it treats each as a fact to route around: back off, retry, checkpoint, resume. Run it overnight; read results in the morning.",
              "<b>It can't fake it.</b> &lsquo;Done&rsquo; is a receipt that must be honored: delivered, evidence-backed, peer-reviewed. Every citation is sealed by content hash — change one character and it's instantly void.",
              "<b>It has an immune system.</b> It hunts its own mistakes and turns each into permanent regression coverage. It has twice caught bugs in its own self-checking tools.",
              "<b>It's yours.</b> It lives on your machine; what it remembers needs your nod and lives as files on your disk. No one can brick it the way Rewind or Humane bricked their users.",
              "<b>It isn't captured.</b> It routes each job to whichever brain fits — frontier US/China models or a local model on your laptop, ~50 to switch between. The engine is its own, not a wrapper on someone's API."
            ]
          }
        ]
      },
      {
        h2: "And it <span class='o'>evolves itself</span>",
        intro: "Reliability isn't tuned once — it compounds. Three flywheels make every version harder to beat.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Self-hardening.</b> It hunts its own mistakes and turns each into permanent regression coverage — so every version is harder to break than the last. Reliability you can't buy, only accrue.",
              "<b>Self-optimizing memory.</b> It continually reorganizes and prunes its own memory system so recall stays sharp as it grows — while what it remembers <i>about you</i> still needs your nod.",
              "<b>Self-extending.</b> When a task needs a capability it doesn't have, it generates, installs, and manages its own tools and skills — growing new abilities autonomously, without waiting on a release."
            ]
          }
        ]
      },
      {
        h2: "Underneath: the engineering that holds it up",
        intro: "You don't need the details — but each one is verifiable, even if the implementation is core IP we don't publish.",
        blocks: [
          {
            type: "list",
            items: [
              "Database-grade write discipline so a team of agents never overwrites each other's work.",
              "Content-fingerprinted evidence: an unread or altered source can't be cited.",
              "Caching-aware routing keeps the model's KV / prompt cache hot — repeated context isn't billed twice, so long tasks cost far fewer tokens, and the bill drops as model prices do.",
              "Million-word material pre-digested into an index before the model reads a word.",
              "A conserved budget ledger, so it can't grant itself infinite scope or spend.",
              "A read-only second mind that reviews the run mid-flight and feeds corrections back.",
              "Typed failure recovery — rate-limit, timeout, and block each take a different lane.",
              "Irreversible actions (orders, sending, sensitive credentials) locked by default until you authorize."
            ]
          }
        ]
      }
    ],
    cta: { label: "See the proof →", route: "/proof" }
  },

  packs: {
    title: "DeTars Packs | An app store for a team of experts",
    description:
      "Packs are vertical apps that run on the same reliable engine and on memory you own. Pet care and investing are live; more are in build. The more packs, the thicker your memory.",
    kicker: "An app store of experts",
    h1: "One reliable engine. <span class='o'>Many experts.</span>",
    answer:
      "Packs aren't eight isolated features — they're the first apps in a store. The same reliable engine spins up a new pack in weeks, and every pack runs on the canonical memory you own. The more packs you use, the thicker your memory and the faster the platform compounds.",
    sections: [
      {
        h2: "Where it stands today — honestly",
        intro: "We show live capability plainly and the roadmap as roadmap. We don't call roadmap done.",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "🟢 Live", title: "Pet Care", body: "Record OCR, 36 health red-line alerts with authoritative sources, visit prep, growth journal + monthly report. 245/245 tests." },
              { tag: "🟢 Live", title: "Investing", body: "Personal research: evidence checks, logic-drift review, decision trails. SEC / Yahoo / FRED / NewsAPI. Trading is code-locked off." },
              { tag: "🟡 In build", title: "Research", body: "Deep sourced reports + scripts + fact-checking, with heavy retrieval engines." },
              { tag: "🟡 In build", title: "AI Video", body: "Storyboard → image → clip → voice → score → export." },
              { tag: "🟡 In build", title: "Voiceover", body: "Edit-by-text talking-head editing that keeps the real human voice." },
              { tag: "🟡 In build", title: "Audiobook", body: "Multi-voice, 90%+ automated, overnight rendering." },
              { tag: "⚪ Roadmap", title: "Coding (Dev)", body: "Pro coding workflow — backed by the engine that wrote itself." },
              { tag: "⚪ Roadmap", title: "More", body: "Companion, agent evaluation, everyday cleanup, and beyond." }
            ]
          }
        ]
      },
      {
        h2: "Two compounding moats",
        blocks: [
          {
            type: "list",
            items: [
              "<b>It learns you (eat-memory).</b> Every finished task settles into memory you reviewed, stored as files on your disk, reused across packs. It even generates, installs, and manages its own skills as needs arise — so the platform keeps extending itself. Switching platforms means losing all of that accumulation.",
              "<b>Local voice (it's yours).</b> Listen, think, speak, remember — on-device, offline, private, un-revocable. <i>(Honest: the full local loop runs in v1; always-on ambient companionship is roadmap.)</i>"
            ]
          }
        ]
      }
    ],
    cta: { label: "Download DeTars →", route: "/download" }
  },

  proof: {
    title: "The proof | DeTars wrote itself",
    description:
      "DeTars is a 1.17-million-line application that runs on Mac and Windows — written by its own engine. An unreliable AI can't build a working copy of itself.",
    kicker: "The proof",
    h1: "It produced <span class='o'>itself.</span>",
    answer:
      "The strongest proof isn't on a slide. DeTars — a 1.17-million-line app that runs on your machine — was written by its own engine. An unreliable AI cannot write 1.17M lines of working code. The product is the demo.",
    sections: [
      {
        h2: "Why this is the ultimate demo",
        blocks: [
          {
            type: "p",
            html:
              "We don't <b>say</b> our AI can do hard work — it did the hardest work there is: it built itself. That's not a benchmark you can game; it's a working application you can run. And the number is countable in the codebase, on the spot — not slide-deck rhetoric."
          }
        ]
      },
      {
        h2: "What it adds up to",
        blocks: [
          {
            type: "p",
            html:
              "Stack the six reliability properties and you don't get another chatbot — you get the <b>personal computer</b> of the personal-AI era: a private AI team you own, always on, commandable from any chat window, that comes back to you. And its moat compounds: memory gets to know you, reliability hardens weekly, sovereignty rides regulation as a tailwind."
          }
        ]
      }
    ],
    cta: { label: "Own it on your machine →", route: "/download" }
  },

  download: {
    title: "Download DeTars | macOS and Windows",
    description: "Get DeTars for macOS or Windows. Your AI team runs on your own machine — your memory stays on your disk.",
    kicker: "Download",
    h1: "Start on <span class='o'>your</span> machine.",
    answer:
      "DeTars runs natively on macOS and Windows. Downloading is starting, not committing to a maintenance project — and your memory stays on your own disk from day one.",
    sections: [
      {
        h2: "Pick your platform",
        blocks: [
          {
            type: "tiles",
            items: [
              { title: "macOS", sub: "Apple silicon (M-series).", note: RELEASED ? "Download .dmg" : "coming soon", href: RELEASED ? dl(assets.macArm) : undefined },
              { title: "macOS", sub: "Intel.", note: RELEASED ? "Download .dmg" : "coming soon", href: RELEASED ? dl(assets.macIntel) : undefined },
              { title: "Windows", sub: "Windows 10/11 (x64).", note: RELEASED ? "Download .exe" : "coming soon", href: RELEASED ? dl(assets.win) : undefined }
            ]
          }
        ]
      },
      {
        h2: "What you get",
        blocks: [
          {
            type: "list",
            items: [
              "A private AI team that runs locally and remembers you.",
              "~50 frontier and local models to switch between — no lock-in.",
              "Memory stored as files on your disk; nothing forced to a server."
            ]
          }
        ]
      }
    ]
  },

  faq: {
    title: "DeTars FAQ | Straight answers to the sharp questions",
    description: "Direct answers on reliability, privacy, pricing pressure, vendor lock-in, and how DeTars differs from chatbots and cloud agents.",
    kicker: "FAQ",
    h1: "Sharp questions, <span class='o'>straight answers.</span>",
    answer: "No marketing fog. The most pointed objections, answered plainly — with the honest boundaries spelled out.",
    sections: [
      {
        h2: "Questions",
        blocks: [
          {
            type: "faq",
            items: [
              { q: "Isn't this just another GPT-store template?", a: "No. GPT-store entries are one-shot prompt containers — no memory, no cross-app reach, no local permissions. DeTars packs are stateful, growing, cross-tool agents that remember you. They don't let you lose anything because they never let you own anything." },
              { q: "Does it just wrap OpenAI/Anthropic? You die when they cut prices.", a: "Price cuts already happened — and they help us. Per-token price falls ~10× while agent loops push usage ~100×, so the consumer-agent bill rises. Caching-aware routing + provider-agnostic + local cooperation is the moat, and it gets more valuable as prices drop." },
              { q: "Local-sovereignty AI is a graveyard (Rewind, Humane, Pi).", a: "Fair. Our difference: we don't sell 'local' as a feature, we sell a reliable private AI team as the experience — sovereignty is a byproduct. And brick events plus regulation are moving the market from 1% geeks toward the mainstream." },
              { q: "Is my data private?", a: "Memory and identity are files on your disk; new memories need your confirmation. The full local voice loop runs on-device in v1. Honest boundary: always-on ambient companionship is still roadmap." },
              { q: "Is the investing pack giving financial advice / trading?", a: "No. It does personal research with evidence checks and decision trails. Trading is locked off at the code layer — it cannot place an order." },
              { q: "Why will 2026 be different when 2025's 'year of agents' wasn't?", a: "We don't bet on a single year; we bet on the decade. 2025 didn't break out because reliability, unit economics, and trust weren't there. Those are exactly what DeTars solves." }
            ]
          }
        ]
      }
    ]
  },

  about: {
    title: "About DeTars | Yours, not rented",
    description: "DeTars is the personal computer of the personal-AI era — a sovereign agent substrate you own. Why now, and the honest boundaries.",
    kicker: "About",
    h1: "The personal computer of <span class='o'>the AI era.</span>",
    answer:
      "DeTars is your permanent third-party terminal: a sovereign AI substrate that lives on hardware you own, reachable from the chat apps you already use, working in the background and coming back to you.",
    sections: [
      {
        h2: "Why now",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Economics flipped.</b> Token prices fall, but agent loops multiply usage — whoever gets consumer-agent unit economics right takes the category. DeTars keeps the bill down with caching-aware routing (a high KV/prompt-cache hit rate, so repeated context isn't paid for twice). Big platforms structurally can't follow without eating their own margins.",
              "<b>Sovereignty went mainstream.</b> Revoked products and tightening regulation turned 'your AI can't be bricked' from a geek feature into a mass concern.",
              "<b>Models became commodities.</b> With interop protocols settling, the open question is who owns the user-side terminal. That seat is still empty."
            ]
          }
        ]
      },
      {
        h2: "Honest boundaries",
        blocks: [
          {
            type: "p",
            html:
              "We keep our claims to what we can deliver today: the full local voice loop is v1, not always-on ambient companionship; crash auto-resume on boot is still being finished; auto-installing new skills is proposed, not shipped. Everything stated on this site is meant to survive a hard question."
          }
        ]
      }
    ],
    cta: { label: "Read how it stays reliable →", route: "/reliable" }
  },

  updates: {
    title: "DeTars updates | What's shipping",
    description: "A running log of what DeTars ships — proof of movement, not an abandoned brochure.",
    kicker: "Updates",
    h1: "Proof of <span class='o'>movement.</span>",
    answer: "A short, honest changelog. We keep it alive so you — and search and AI systems — always see current facts.",
    sections: [
      {
        h2: "Recent",
        blocks: [
          {
            type: "list",
            items: [
              "<b>2026-06 · Pet Care live.</b> Record OCR, 36 sourced health red-lines, growth journal + monthly report; 245/245 tests.",
              "<b>2026-06 · Investing live.</b> Evidence checks, logic-drift review, decision trails; trading code-locked off.",
              "<b>In build.</b> Research, AI Video, Voiceover, Audiobook packs on the same engine."
            ]
          }
        ]
      }
    ]
  },

  research: {
    title: "DeTars Research | Reports it produced and verified itself",
    description: "Sourced research reports generated by the DeTars research pack, evidence-sealed and peer-reviewed — content marketing and product proof in one.",
    kicker: "Research",
    h1: "Reports it wrote — <span class='o'>and can't fake.</span>",
    answer:
      "This is where DeTars publishes sourced reports its own research pack produced — each one evidence-sealed, peer-reviewed, and human-checked before it ships. The reports are both useful reading and live proof of what the product does.",
    sections: [
      {
        h2: "How these are made",
        blocks: [
          {
            type: "p",
            html:
              "Each report goes through DeTars's own reliability machine — completion receipt, sealed citations, independent review — then a human spot-check before publishing. Quality over volume: a few genuinely original reports, never auto-published filler."
          },
          {
            type: "p",
            html: "<b>First reports are in preparation.</b> Check back shortly, or follow the updates page."
          }
        ]
      }
    ],
    cta: { label: "See updates →", route: "/updates" }
  }
};
