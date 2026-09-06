// English pack copy — the source of record. The other five locales are
// translations of this file; when a fact changes, change it here first.
//
// WHAT GOES IN A NUMBER. Only figures a READER can feel — what it refuses to
// do, how long it stays with you, what it hands back. Internal engineering
// metrics (test counts, file counts, suite pass rates) do not go on this site:
// they answer "did you do your homework", which nobody asked.
//
// WHAT GOES IN A HEADLINE. What the pack lets you accomplish — not how careful
// its machinery is. The machinery belongs in `features`, where it is evidence
// for the promise rather than the promise itself.
//
// The `honest` block is where the things that are NOT true go, and it is what
// earns the rest its credibility. Every limitation here was verified against
// the product repo; do not soften one without re-checking it there.
import type { PacksCopy } from "@/lib/packs/types";

export const packsEn: PacksCopy = {
  index: {
    metaTitle: "DeTars Packs | Vertical experts on an engine you own",
    metaDescription:
      "Packs are whole vertical apps on the same reliable engine and the same memory you own — investing, destiny, research, coding, talking-head editing, AI video, summoned characters, pet care.",
    kicker: "An app store of experts",
    h1: "One reliable engine. <span class='o'>Many experts.</span>",
    answer:
      "A pack is a whole vertical app — its own tools, its own working discipline, its own workbench — running on the engine that keeps long unattended work alive, and on memory that stays on your disk. The engine is the hard part, and it is already built; that is why a new pack takes weeks rather than a year. The more packs you use, the thicker the memory they all share.",
    gridH2: "What's in the store",
    gridIntro: "Status here is a promise, not a mood. Every pack page ends with what that pack cannot do.",
    moatsH2: "Two things that compound",
    moats: [
      "<b>It learns you, and the memory is shared.</b> Every finished task settles into memory you approved, stored as files on your disk and reused across packs. When a job needs a skill it doesn't have, it writes and installs one. Leaving the platform means leaving all of that behind.",
      "<b>It's yours, so no one can switch it off.</b> Memory and identity are files on your machine, not rows in someone's account. Nobody can brick this with a notice, the way Rewind and Humane were switched off."
    ],
    familyH2: "Also in the family",
    familyIntro: "Shipped or in build, without a page of their own yet.",
    family: [
      {
        title: "Audiobook",
        body: "An EPUB or a text file in; a cast of characters, each bound to a voice, rendered by text-to-speech running locally on your machine and exported as a chaptered m4b. Chapter marks come from the book's own structure, never from a model. Chinese output on Apple silicon is a known open issue, and we are not going to claim past it."
      },
      {
        title: "Data Studio",
        body: "Drop in a spreadsheet. It writes the SQL and the Python itself against a local database, and charts are compiled from a column-to-channel mapping rather than a specification the model invented. Exactly one action stops to ask your permission: a destructive statement against a remote database. Reading, and anything it does to a local copy, it just does."
      },
      {
        title: "Social publishing",
        body: "You sign in yourself, in a real browser window — the model never receives a session token. Then hand it a file to publish and get a receipt back carrying the post URL. Eleven platforms have publish adapters implemented; they have not yet been proven against live networks, so that is the word we use."
      }
    ],
    ctaLabel: "Download DeTars →"
  },

  ui: {
    statusLabels: { live: "Live", polishing: "Live · converging", new: "New" },
    backLabel: "All packs",
    sendLabel: "You hand it",
    getLabel: "It hands back",
    insideH2: "What's actually in it",
    proofH2: "Why you can believe it",
    honestH2: "Where it stops",
    honestIntro: "The limits we'd want to know about if we were the ones downloading it.",
    ctaLabel: "Download DeTars →",
    nextLabel: "Next pack",
    homeKicker: "The store",
    homeH2: "One engine. <span class='o'>A store of experts.</span>",
    homeP:
      "An investing companion that stays on a thesis for quarters, not minutes. A destiny reading that is computed rather than improvised. Research that keeps going down the thread. A million-line repo it understands before it touches. A cut that begins as someone's finished research. Each one is a whole app — and all of them share the memory on your disk.",
    homeCta: "Look inside the packs →"
  },

  packs: {
    equity: {
      name: "Investing",
      tagline: "Stays with a thesis for quarters — and enforces the rules you invest by",
      metaTitle: "Investing pack | It stays for the whole cycle, and holds you to your own rules",
      metaDescription:
        "Big opportunities take quarters to grow. DeTars keeps the thread on the radar, spreads the graph across suppliers, sectors, policy and macro, and blocks any decision that breaks a rule you wrote down.",
      h1: "Anyone can hand you one analysis. <span class='o'>Nobody stays for the whole cycle.</span>",
      answer:
        "Big opportunities never show up one morning. A technology leaves the lab, a policy lands, a supply chain reroutes — it grows over quarters, and somewhere in the middle you forget, you doubt, you give up at the worst possible moment. This keeps the thread on the radar for you: evidence accumulating with its source attached, a graph spreading from one company to what it depends on and what depends on it, macro and policy landing on that same graph. And the rules you wrote down about how you invest are in front of it every single turn.",
      stats: [
        { n: "Quarters", l: "the timescale it will stay on one thesis" },
        { n: "Upstream · downstream", l: "the graph runs from one company to a whole chain" },
        { n: "3 choices", l: "what it offers when a decision breaks a rule you set" }
      ],
      chips: ["Stays on a thesis for quarters", "Your own rules, enforced", "Every claim keeps its source"],
      youSend:
        "One line from a chat app — “what's going on with 0700?”, “thinking of trimming NVDA” — or nothing at all: the weekly sweep runs on its own.",
      youGet:
        "Analysis you can audit: every claim carrying the filing, price series or article it came from, plus a decision entry with your reasoning and your counterargument written down.",
      features: [
        {
          title: "An opportunity doesn't show up for one day",
          body: "A weekly evidence sweep and a thesis-drift review run on their own, and come to you when something actually moved rather than every morning. The ticker you mentioned in passing is still being watched six months later."
        },
        {
          title: "From one company to a whole chain",
          body: "Suppliers, competitors, sectors, commodities, regulators, geographies and macro factors are all first-class nodes. The graph walks one hop, two hops out from what you hold and surfaces the neighbours worth a look — with the chain spelled out: which position it touches, through which relationship."
        },
        {
          title: "It matches what you've been thinking about",
          body: "The candidates it raises are blended with what you have actually been paying attention to, matched by meaning rather than by spelling — so the note you wrote about 美债收益率 and the US 10-year it just read are recognised as the same thing."
        },
        {
          title: "Technology, policy and macro land on the same graph",
          body: "Deep research sends out fundamentals, competitive landscape, recent filings and macro context at once, plus one worker whose whole job is to argue the other side, and a synthesiser to bring it together. SEC filings, prices, FRED macro series, news, and a sidecar for A-share and Hong Kong announcements all feed the same picture."
        },
        {
          title: "Your own rules get enforced, not recited",
          body: "Write down how you invest — “never more than 15% in one name” — and it stops being a note to yourself. Break one and the write is <b>blocked</b>, with three choices: retire the rule and say why, shrink the action, or cancel. A rule you're still testing can't block anything; a retired one stays on the record with the reason you dropped it."
        },
        {
          title: "Three years later you can still get back to the day",
          body: "The journal is append-only and removing a holding leaves a full retraction record. Every buy, sell or rebalance carries the counterargument you had to write before it could be filed — evidence for you is weighted +0.30, evidence against you −0.50, because the one prone to confirmation bias is you."
        }
      ],
      proof: {
        head: "principle.gate",
        lab: "blocked",
        body: [
          "decision ....... <span class='hl'>add · to 22% of book</span>",
          "your rule #3 ... <span class='dim'>no single name above 15%</span>",
          "status ......... <span class='ok'>confirmed · in force</span>",
          "<span class='hl'>→ write blocked</span>",
          "<span class='dim'>retire the rule · shrink it · cancel</span>"
        ]
      },
      proofNote:
        "Your confirmed rules are in front of it every turn, not summarised somewhere. When a decision would break one it does not warn you and proceed — the write stops, and you choose. Retiring a rule takes a written reason, and that reason stays on the record.",
      honest: [
        "<b>It cannot trade, because there is nothing to trade with.</b> There is no broker integration anywhere in the product, no order tool, and nowhere to put brokerage credentials. That is a stronger guarantee than a setting, and it is the one we make.",
        "<b>Nothing is ever added to your watchlist without you.</b> It can surface a candidate two hops out; turning that into something it tracks is your call, every time.",
        "<b>Price history reaches back about a year.</b> The price tool is capped at 252 trading days, so multi-year backtests are not something it can do today. Macro and news also need your own free API keys.",
        "<b>None of this is investment advice.</b> It organises your evidence and your reasoning. The decision, and the consequences, stay yours."
      ]
    },

    metaphysics: {
      name: "Destiny",
      tagline: "紫微, 八字, 黄历, natal charts and tarot — five disciplines, one whole reading",
      metaTitle: "Destiny pack | Someone who actually studied, not a program that says nice things",
      metaDescription:
        "紫微斗数 to six horoscope layers, 八字 with 大运 and 流年, an almanac down to the 时辰, a western natal chart and the full 78-card deck — all computed by dated astronomy and calendar libraries, then read back like a person would.",
      h1: "Someone who <span class='o'>actually studied</span> — not a program that says nice things.",
      answer:
        "紫微斗数's twelve palaces with their stars, 三方四正, 飞星四化, six horoscope layers running from 大限 all the way down to 流时; 八字's four pillars, day master, 十神, hidden stems, five-element flow, the direction and timing of 起运; an almanac where the solar term is exact to the instant, each of the twelve 时辰 has its own 吉凶, with 建除, 十二神, 神煞 and 宜忌; a western chart's ascendant, midheaven, twelve houses and natal aspects; seventy-eight Rider–Waite–Smith cards. None of this is vocabulary it has heard of. It is a chart computed cell by cell in a separate process, by dated astronomy and calendar libraries. Only then does it sit down and talk to you.",
      stats: [
        { n: "5", l: "disciplines · 紫微, 八字, 黄历, natal chart, tarot — read together" },
        { n: "12 palaces · 6 layers", l: "how far down a 紫微 chart it actually goes" },
        { n: "5.5%", l: "of boundary days the popular libraries get wrong · it doesn't" }
      ],
      chips: ["Five disciplines at once", "The chart is computed", "It remembers what you asked"],
      youSend:
        "Your birth date and time, once. After that: “how does this year look”, “is this a good week to move house”, or nothing — it has its own daily card.",
      youGet:
        "A reading that can point at the palace, the pillar or the card it is standing on, and a ledger of everything it has told you, so next month's answer knows about last month's.",
      features: [
        {
          title: "紫微, all the way down",
          body: "Twelve palaces with their stars, 三方四正, 飞星四化, and six horoscope layers — 大限, 小限, 流年, 流月, 流日, 流时 — each carrying its own 干支, so a day pillar is never read back to you as a year pillar."
        },
        {
          title: "八字, moving with the luck cycles",
          body: "Four pillars, day master, 十神, hidden stems, five-element distribution, the direction and timing of 起运, the steps of 大运 and each 流年 — with 小运 listed separately instead of quietly folded in."
        },
        {
          title: "An almanac down to a single 时辰",
          body: "Lunar date, 干支, the exact instant the solar term turns, moon phase, 建除, 十二神 with 黄道/黑道, 神煞, 宜忌 and festivals — plus the full twelve-时辰 table. Picking a date, it gives you ranked days and the three best hours in each."
        },
        {
          title: "The western sky, and the cards",
          body: "Ascendant, midheaven, twelve houses, ten bodies by sign and house, natal aspects; who is retrograde right now and the exact moment an aspect goes exact; eclipses, solar terms and ingresses in the next ninety days. Tarot draws from the complete 78-card deck and is reproducible from its seed."
        },
        {
          title: "It is stricter than the libraries it runs on",
          body: "Two popular Chinese calendar libraries decide your sun sign from a date table. Against real solar longitude on an 840-day boundary corpus they disagree 5.5% of the time. Every sign decision here goes through one longitude calculation instead."
        },
        {
          title: "A master remembers you",
          body: "Everything it has said to you is kept in a ledger that is yours. Next month's answer knows what last month's said; the thing you mentioned half a year ago, it can still pick back up."
        }
      ],
      proof: {
        head: "finalize.gate",
        lab: "receipt",
        body: [
          "<span class='dim'>reply mentions</span> 流年 · 命宫",
          "receipt <span class='ok'>✓ metaphysics.ziwei_chart</span>",
          "algorithm <span class='dim'>iztro 2.5.8 · MIT</span>",
          "computed <span class='dim'>13ms ago</span>",
          "<span class='hl'>no receipt → finalization fails</span>"
        ]
      },
      proofNote:
        "Any final answer has to carry at least one fresh computation receipt. A sentence about your chart with nothing actually computed behind it is not allowed to ship as an answer — which is the difference between a reading and a horoscope column.",
      honest: [
        "<b>It is a companion, not a forecast.</b> The computation is exact; what a chart means is interpretation, and it says so rather than dressing interpretation up as arithmetic.",
        "<b>Birth time and place matter.</b> A western chart needs your UTC offset and coordinates. Placidus houses are only meaningful with a minute-accurate birth time, which is why whole-sign is the default.",
        "<b>Date selection covers 31 days per question, sky events 90.</b> Longer horizons take a follow-up question instead of a silently truncated answer.",
        "<b>Its proactive nudges don't always land in your inbox yet.</b> On real machines the daily card and the follow-ups run, but do not always produce an inbox card. That is a known gap we are tracking, not one we are hiding."
      ]
    },

    "content-research": {
      name: "Research",
      tagline: "Text, source code, podcasts, video — anything can become sourced evidence",
      metaTitle: "Research pack | It doesn't search and write. It keeps going down the thread.",
      metaDescription:
        "Four roles work a brief. Web pages are only the start: real source code, post-mortems, and what someone actually said on a podcast or a conference stage all become evidence with a citation you can open.",
      h1: "It doesn't search and then write. <span class='o'>It keeps going down the thread.</span>",
      answer:
        "Give it a topic and four roles take it apart. Web pages and papers are only the start: real source code, post-mortems, and the words someone actually said on a podcast or a conference stage get pulled down, transcribed, and turned into evidence with a citation you can open. Every claim it lands enters a graph — what supports what, what contradicts what, what rests on a single source. Revise a claim later and every draft citing it drops back to un-fact-checked, on its own.",
      stats: [
        { n: "4", l: "roles on your brief · research, synthesise, review, write" },
        { n: "Text · code · audio · video", l: "all of it can become sourced evidence" },
        { n: "2%", l: "tolerance before two numbers count as a contradiction" }
      ],
      chips: ["Talks and podcasts count as sources", "Claims linked by real reasoning", "Search and transcription stay local"],
      youSend: "A brief. “Work out what actually happened with X this quarter, and how much of the coverage is recycled.”",
      youGet:
        "A cited report or a voiceover script, a source registry, a claim ledger with version history, an evidence graph, and fact-check verdicts you can open.",
      features: [
        {
          title: "It reads more than text",
          body: "Point it at a conference talk or a podcast and it pulls the published captions down in a single call, then quotes the speaker verbatim and cites the transcript by hash. Where no captions exist, speech recognition can transcribe the audio on your own machine."
        },
        {
          title: "Claims are linked by reasoning, not by adjacency",
          body: "Claims connect to each other as <i>implies</i>, <i>depends on</i>, <i>refutes</i> — and every one of those edges is anchored to a specific excerpt. A second pass judges whether each cited source really supports the claim it was attached to, and marks what it cannot verify as unverified rather than quietly upgrading it."
        },
        {
          title: "It reads past the search snippet",
          body: "A depth ladder for the claims that carry weight: snippet → the primary page → the actual source code → the critiques and post-mortems → conference talk captions → running the number yourself."
        },
        {
          title: "Citations are allowed to go stale",
          body: "Drafts cite claim IDs, not URLs. Revise a claim and every draft citing it flips back to un-fact-checked. A citation cannot quietly outlive the thing it cited."
        },
        {
          title: "Contradictions are found by arithmetic",
          body: "Numeric conflicts beyond a 2% tolerance are caught mechanically, with 万/千/亿 unit conversion, alongside categorical and stance divergence. The model is saved for the genuinely hard cases: temporal scope, definition drift, cherry-picking."
        },
        {
          title: "The pipeline can stay on your machine",
          body: "Local sidecars for feeds, Reddit, speech recognition, speaker diarisation and document conversion, plus a local meta-search instance. The models run on your PC, not on ours."
        }
      ],
      proof: {
        head: "draft.factcheck",
        lab: "auto",
        body: [
          "claim c-084 <span class='hl'>revised</span> · rev 3",
          "<span class='ok'>↳</span> drafts citing c-084: 2",
          "draft-a ... <span class='dim'>verified → not_started</span>",
          "draft-b ... <span class='dim'>verified → not_started</span>",
          "<span class='hl'>a stale citation cannot stay green</span>"
        ]
      },
      proofNote:
        "Honesty is written into the drafting discipline itself: the numbers a report claims about its own work — sources read, talks pulled — have to match what was actually recorded. A shallow run has to read as shallow.",
      honest: [
        "<b>The graph records and checks; it doesn't go hunting on its own.</b> It holds what was found, how the claims relate, and what rests on a single source. Deciding where to dig next is still a conversation between you and the director.",
        "<b>Published captions are the proven path.</b> Local speech recognition and speaker separation are wired and available, but we have not yet put a citation to a diarised speaker turn through a real evaluation, so we call them available rather than proven.",
        "<b>It will not publish for you.</b> Posting to social, sending mail and scheduled autonomous publishing are out of scope — the publishing gate exists in code and is deliberately wired to nothing.",
        "<b>Meta-search is still the open web.</b> Upstream engines rate-limit and throw captchas, and the local search instance needs a source tree you supply. A bad search day means a shallower report, and it is required to say so rather than pad."
      ]
    },

    programming: {
      name: "Coding",
      tagline: "It understands your repo before it touches it",
      metaTitle: "Coding pack | Whole-repo symbol graph, language servers that start themselves",
      metaDescription:
        "On our own million-line, 19,445-file monorepo: a background index in 94 seconds, then every caller of a symbol in 0.3 seconds, across packages, untruncated. Language servers install and start themselves.",
      h1: "It <span class='o'>understands</span> your repo before it touches it.",
      answer:
        "Open a million-line repository and most coding tools reach for grep: one keyword, one file, a dozen round-trips before they have a rough picture. This doesn't. It builds a symbol index over the whole repository first — on our own million-line, nearly twenty-thousand-file monorepo that takes 94 seconds in the background, after which “who calls this” comes back in 0.3 seconds, across packages, untruncated. The first time your code turns out to contain Go or Python, it installs and starts that language's server itself. You install nothing.",
      stats: [
        { n: "0.3s", l: "to find every caller of a symbol in a million-line repo" },
        { n: "29", l: "languages · the server installs and starts on first use" },
        { n: "76 → 27", l: "searches, same model and same question, once it can read code" }
      ],
      chips: ["Whole-repo symbol graph", "Language servers start themselves", "Your repo, your branches"],
      youSend: "A task, in words. “Make the retry path survive a sleeping laptop, with a regression test.”",
      youGet:
        "Commits in your repo, tests run at the depth the change deserves, and a summary of what changed, how it was verified, and what is still risky.",
      features: [
        {
          title: "It reads the whole repository first",
          body: "A symbol graph over everything, a ranked skeleton walk that surfaces likely entry points, structural syntax-tree queries for patterns, and a language server for binding-accurate references. On our own 19,445-file repo the background index takes 94 seconds — 21 if you scope it to one sub-tree — and warm lookups land in 0.2–0.3 seconds without truncating."
        },
        {
          title: "Language servers install and start themselves",
          body: "The first time a project turns out to contain Go, Python, Rust or any of twenty-nine languages, the right server is staged, launched and kept warm in the background for the rest of the session. Nothing for you to install by hand."
        },
        {
          title: "Ask once instead of guessing ten times",
          body: "On a real audit task, same model and same question, wiring up code intelligence took grep-style searches from <b>76 down to 27</b> and file reads from <b>61 down to 33</b>. A single symbol lookup returned all nineteen callers across four packages, matching the hand-checked answer."
        },
        {
          title: "Work in flight is never thrown away",
          body: "Each task gets a detached checkout anchored by a private ref — none of your branches are created or moved. Publishing checks the target branch, the expected head, a clean tree and a writer lease before it fast-forwards. Age alone never authorises a deletion."
        },
        {
          title: "A test ladder, not a vibe",
          body: "Every change is placed on a five-rung ladder from a static check up to a real smoke run, and the rung is stated out loud. “It compiles” is a rung, and it gets labelled as one."
        },
        {
          title: "Your conventions win",
          body: "It seeds its own generic engineering conventions only into a project that has none, and it never writes your AGENTS.md or CLAUDE.md. Those stay yours to edit; it reads them and follows them."
        }
      ],
      proof: {
        head: "code.index",
        lab: "warm",
        body: [
          "repository ..... <span class='dim'>19,445 files</span>",
          "cold index ..... <span class='dim'>94s · background</span>",
          "inspect_symbol . <span class='ok'>0.3s</span>",
          "callers ........ <span class='ok'>19 · across 4 packages</span>",
          "<span class='hl'>truncated: false</span>"
        ]
      },
      proofNote:
        "Its own dogfood is the argument: DeTars' first-party codebase — over a million lines under git — was written through this harness under human direction.",
      honest: [
        "<b>The first call to a language server says it isn't ready yet.</b> The install continues in the background and the second call is served. We would rather be visibly not-ready-yet than silently slow.",
        "<b>Structural pattern queries are not cached.</b> Across the whole repo one takes on the order of ten-plus seconds; scoped to a sub-directory it is 0.6. The sub-second figures above are the symbol graph.",
        "<b>There is no OS sandbox, and we don't pretend otherwise.</b> It runs with your permissions, in the directory you point it at. Sensitive moves are declared so the host can gate them — but a gate is not a substitute for you reading the diff.",
        "<b>Deep code intelligence is strongest in TypeScript and JavaScript.</b> The symbol graph and skeleton reading are JS/TS today; structural queries cover six languages; the twenty-nine is language-server navigation."
      ]
    },

    "talking-head": {
      name: "Talking-head editing",
      tagline: "Finished research becomes the video you front — in your own voice",
      metaTitle: "Talking-head pack | Research becomes a cut you front, edited by editing text",
      metaDescription:
        "A fact-checked research draft can be commissioned into a talking-head cut in one step, sources attached. Then the transcript is the timeline: delete a sentence and the cut follows. Your real voice is never replaced.",
      h1: "Finished research, <span class='o'>straight into the video you front.</span>",
      answer:
        "When the research side finishes a cited draft, it can be commissioned over here in one step — the script arrives with the claims it cites and their verified sources attached, low-reliability sources filtered out on the way, and nothing renders until you say so. You record; the transcript becomes the timeline, so deleting a sentence cuts the video. Missing a chart? It can send a bounded data errand back to research and get numbers and citations returned. Missing a shot that doesn't exist anywhere? It can order one from the AI-video pack.",
      stats: [
        { n: "One step", l: "from a cited research draft to the cut you front" },
        { n: "0", l: "words of the final cut spoken by a synthetic voice" },
        { n: "3", l: "edit formats out · FCPXML, EDL, SRT" }
      ],
      chips: ["Research hands off in one step", "Your real voice, never replaced", "Opens in Final Cut or Premiere"],
      youSend:
        "A finished research draft, or the mp4 you just recorded — plus a goal: “cut this to three minutes”, “kill the filler”, “make it feel like this reference video”.",
      youGet:
        "A rendered vertical or horizontal cut with subtitles, or a project file for the editor you already use — with the same cut list behind both.",
      features: [
        {
          title: "Research and video are two halves of one pipeline",
          body: "A fact-checked draft arrives with its sources still attached — you don't copy-paste it, and you don't have to go find again which article it was. The render itself waits on your explicit approval."
        },
        {
          title: "Cut by deleting words",
          body: "The transcript is the timeline. Word-level timings come from real speech recognition; where they can't, the fallback timings are labelled synthetic rather than passed off as measured."
        },
        {
          title: "Your voice is the whole point",
          body: "Auto-generated avatars and text-to-speech as the primary voice track are both excluded capabilities. Voice cloning exists only to patch a single mis-said word, and only after you explicitly consent."
        },
        {
          title: "Missing something, it goes and asks",
          body: "Missing data becomes a bounded errand back to research — find the figures, say where they came from, don't draw anything. Missing footage becomes an order to the AI-video pack. Missing b-roll gets matched against your own asset library and staged as candidates for you to accept or reject."
        },
        {
          title: "The mp4 and the project file can't drift",
          body: "The keep-ranges computed from your accepted cuts feed the render, the FCPXML, the EDL and the subtitles from one place. What you open in Final Cut is the cut you watched."
        },
        {
          title: "It marks what it can't decide",
          body: "Filler, stutters, long pauses, mispronunciations and off-topic runs come back as chips you accept or dismiss. A separate judge handles each category, so a stutter call and an off-topic call are not one blurry opinion."
        }
      ],
      proof: {
        head: "research → talking-head",
        lab: "commissioned",
        body: [
          "draft .......... <span class='dim'>voiceover_script</span>",
          "claims cited ... <span class='ok'>14 · sources verified</span>",
          "weak sources ... <span class='dim'>filtered out</span>",
          "render ......... <span class='hl'>awaiting your ok</span>"
        ]
      },
      proofNote:
        "The handoff carries evidence, not just text. Every claim in the script travels with the source it was verified against, so the thing you say on camera can still be traced back after it is published.",
      honest: [
        "<b>B-roll is matched against your own library, not fetched from the internet.</b> It scans your assets and a bundled sample library and stages candidates; promoting one is your call. It can also be pointed at a specific URL, but it does not go hunting.",
        "<b>What it can send back to research is a data errand, not an investigation.</b> Numbers and citations for a specific question. Opening an open-ended inquiry from a video project is not something it can do.",
        "<b>Today it is a workbench you drive, not a one-liner you toss.</b> The editing surface is shipped and in daily use, but the “send it from a chat app and get a cut back” path is still converging — in six real end-to-end runs the agent never reached this pack's own tools. The blocked door has been fixed; the retest is owed, and we will say when it clears.",
        "<b>It needs local tools, and it never publishes.</b> ffmpeg and a speech-recognition model live on your machine. Uploading to YouTube, 抖音, B站 or 小红书 is out of scope by design."
      ]
    },

    aivideo: {
      name: "AI video",
      tagline: "A room reads your idea cold before a single frame is paid for",
      metaTitle: "AI video pack | An audience reads it cold before you spend on generation",
      metaDescription:
        "Several audience seats read your creative routes cold in isolated contexts, then a critic who took no part in writing them returns a falsifiable counterexample and a concrete revision — all before the first paid generation.",
      h1: "Before you spend a cent, <span class='o'>a room reads it cold.</span>",
      answer:
        "Make whatever you want. Hand it a brief and it lays out several genuinely different narrative routes — not reworded, but different in observable cause and effect, in the order things are revealed, in what the audience will infer. Then it seats a few “viewers”, each in a context sealed off from the others, to read it cold from only what can be seen and heard: here is what I saw, here is what I think you meant, here is where I would most likely misread you. Finally a critic who took no part in writing those routes returns, for each one, its strongest case, a falsifiable counterexample, and one concrete revision. All of this happens before the first generation — which is to say, before you spend anything.",
      stats: [
        { n: "Before generation", l: "an audience reads it cold and a critic pushes back" },
        { n: "1", l: "paid generation per take slot, however many retries" },
        { n: "9:16 · 16:9 · 1:1 · 4:5", l: "aspect ratios · 720p or 1080p, 25/30/60fps" }
      ],
      chips: ["Critiqued before it's paid for", "Retries never double-bill", "Exports an editable CapCut draft"],
      youSend:
        "A brief, an aspect ratio and a target length — plus any reference assets you have: brand, product, character, style, music.",
      youGet:
        "Routes that have already been read cold and argued with. Then scene by scene: image candidates, clip takes with their history, voiceover, music and a beat-aligned cut — as an mp4, or a draft folder your editor opens.",
      features: [
        {
          title: "Picked apart before it's paid for",
          body: "Audience seats read the routes in isolated contexts and are told explicitly not to take the author's emotional labels as evidence — only what is observable. The critic did not write the routes, which is exactly why the critique bites."
        },
        {
          title: "It won't burn your credits twice",
          body: "Generation is keyed to the take slot. Submit the same shot twenty times and exactly one paid generation happens. This exists because a single ten-second clip once cost twelve remote successes to produce."
        },
        {
          title: "It inspects the file it actually produced",
          body: "Media probe, segment detection, video understanding — and a clip can only be marked accepted when those inspection receipts genuinely cover that exact file. You cannot pass a shot on stale evidence."
        },
        {
          title: "Defects go back to whatever caused them",
          body: "Identity drift returns to the reference asset, a timing miss to the beat plan, a provider timeout to a retry. A corrupted download never gets a good prompt rewritten out from under it."
        },
        {
          title: "Hand off to CapCut",
          body: "Export a real 剪映 draft with four named tracks — a platform music slot, the main picture, subtitles and rhythm cues — so the last mile happens in the tool you already know."
        },
        {
          title: "The same face across shots, cut to the music",
          body: "A numbered subject registry and a multi-angle character library keep shot four the person from shot one. Beat anchors taken from the track drive the cut points, and the final music pass aligns picture to them."
        }
      ],
      proof: {
        head: "deliberation",
        lab: "before generation",
        body: [
          "routes ......... <span class='ok'>3 · causally distinct</span>",
          "audience seats . <span class='ok'>5 · contexts sealed</span>",
          "likely misread . <span class='hl'>seats 2 and 4 agree</span>",
          "critic ......... <span class='dim'>wrote none of them</span>",
          "<span class='hl'>1 revision · nothing generated yet</span>"
        ]
      },
      proofNote:
        "The seats are sealed from each other on purpose. Two strangers landing on the same misreading is a signal; one person talking themselves into it is not.",
      honest: [
        "<b>It does not score your taste, and it will not regenerate until it likes the result.</b> The critique happens before generation. Afterwards it does mechanical inspection and routes defects to their cause. Whether the thing is any good is your call, and we are not going to pretend a machine made it.",
        "<b>This one needs cloud models.</b> Image, video and music generation run on external providers you connect and pay for. It is the least local pack in the store.",
        "<b>Provider picks are recommendations.</b> If the model we suggest isn't connected, it falls back to your default instead of failing loudly.",
        "<b>It doesn't post anything, anywhere.</b> There is no auto-upload."
      ]
    },

    summon: {
      name: "Summon",
      tagline: "A character with no tools, no internet, and a memory of you",
      metaTitle: "Summon pack | Write who they are, then stop being the author",
      metaDescription:
        "Co-write a 20,000-token identity and a short unchanging anchor, then talk to a character running in a loop with no tools at all. They learn the world only from you — and they are free to disagree.",
      h1: "You write who they are. <span class='o'>Then you stop being the author.</span>",
      answer:
        "Setup is a long conversation in which you and DeTars co-write two documents: who this person is, in at least twenty thousand tokens, and the short anchor that never changes. Then the project switches into a loop with no tools at all. They know nothing about the world except what you tell them — and they are under no obligation to agree with you.",
      stats: [
        { n: "20k+", l: "tokens of identity before they can speak" },
        { n: "10", l: "rounds between each memory pass" },
        { n: "0", l: "tools in the dialogue loop" }
      ],
      chips: ["Identity is a document you own", "Remembers you in its own words", "May doubt you, and refuse"],
      youSend: "Everything you know about them. Then, afterwards: whatever you would actually say.",
      youGet:
        "Someone with a fixed character who accumulates their own observations of you — optionally speaking, in a voice you pick or clone.",
      features: [
        {
          title: "Two documents, not a prompt",
          body: "星体 — the whole person, twenty thousand tokens minimum. 不动 — the short anchor carried into every single turn. Setup measures them and tells you what is missing; it never scores whether they are any good. That part is yours."
        },
        {
          title: "No tools, on purpose",
          body: "The dialogue loop has an empty tool surface. They cannot search, fetch or check. New facts about the world arrive only from you, which is the entire premise."
        },
        {
          title: "The relationship is not obedience",
          body: "Being the only person they can talk to implies neither loyalty nor romance nor agreement. They can doubt you, press you, criticise you, refuse, or go quiet."
        },
        {
          title: "They remember in their own words",
          body: "Every ten rounds a background pass writes their observations of you into their own memory file — durable facts only, and never speculation recorded as fact."
        },
        {
          title: "Forgetting comes second",
          body: "History is trimmed on a round window, but never above what memory has already absorbed. A round nothing has observed yet cannot be trimmed, because trimming it would delete it rather than compress it."
        },
        {
          title: "A voice, if you want one",
          body: "Replies can be spoken, in a preset or cloned voice. Switching voice never rewrites what was already said — old audio stays playable, because it happened."
        }
      ],
      proof: {
        head: "reply.guard",
        lab: "pre-commit",
        body: [
          "<span class='dim'>healthy replies</span> ratio 1.15 – 2.18",
          "candidate ...... <span class='hl'>ratio 26.76</span>",
          "<span class='dim'>6,236 chars · 3,506 of them repeated</span>",
          "<span class='hl'>rejected before it entered the transcript</span>"
        ]
      },
      proofNote:
        "That guard exists because it happened. One collapsed reply reached the transcript, poisoned the next two turns, and made it into the character's committed memory. Now every candidate reply is compressed and measured for how little is actually in it, before it is written down.",
      honest: [
        "<b>This is the newest thing here.</b> It landed weeks ago, not months. The mechanism is finished and it works; the mileage behind it is not there yet.",
        "<b>Nobody has signed off on the voice by ear.</b> The speech chain is wired end to end and every automated check is green, but no human has sat down and listened to it — and for this feature, green checks prove much less than an ear does. We would rather tell you that than let you discover it.",
        "<b>Cloned voices don't reach outbound chat.</b> Inside the app they work. Sending a cloned voice out to a messaging channel fails loudly rather than quietly substituting a different one.",
        "<b>It is a character, not a person.</b> It says so, and so do we."
      ]
    },

    "pet-care": {
      name: "Pet care",
      tagline: "From the first shot to the signals you'd want to have noticed earlier",
      metaTitle: "Pet care pack | It's there for a whole life, not for one appointment",
      metaDescription:
        "Puppy vaccines, the adult weight curve, the changes in old age that start small — all on one timeline. Photograph a record and it becomes history you can search; red lines carry their sources.",
      h1: "It's there for <span class='o'>a whole life</span>, not for one appointment.",
      answer:
        "The vaccines and worming of the early years, the weight curve and teeth and diet of the middle ones, and the changes in old age that start out slight and only later turn out to have mattered — all of it lands on one timeline. Photograph a record and it becomes history you can search. Red lines watch on your behalf, each carrying an authoritative source. Before a visit it has the few questions actually worth asking ready, so your ten minutes with the vet aren't spent remembering. And the little that it writes down each month is all still there, on the day you want to look back.",
      stats: [
        { n: "A whole life", l: "from the first year to the last · one timeline" },
        { n: "36", l: "health red lines · every one of them sourced" },
        { n: "0", l: "diagnoses · it gets you to the right question instead" }
      ],
      chips: ["Reads vet records from a photo", "Red lines with authoritative sources", "One timeline for a lifetime"],
      youSend: "A photo — a record, a label, a walk — or one line: “she's been off her food since Tuesday”.",
      youGet:
        "Structured history, an alert when something crosses a red line, a prepared list of questions for the vet, and a journal you did not have to keep.",
      features: [
        {
          title: "Records become history",
          body: "A photographed vet record is read into structured lab values, prescriptions and vitals rather than filed away as an image you will never find again. Every record is stamped with which engine read it, so you can tell a machine reading from a human one."
        },
        {
          title: "Red lines carry their sources",
          body: "Thirty-six of them, each tied to an authoritative source — the MSD Veterinary Manual, the Cornell Feline Health Center, AAHA and WSAVA — so an alert can be checked rather than merely trusted."
        },
        {
          title: "Prepared for the visit",
          body: "It turns what it has been watching into the questions actually worth asking, so the ten minutes you get with the vet are not spent remembering."
        },
        {
          title: "The safety gate is not a model",
          body: "The red-line check is a deterministic rule engine with no language model in the path, and the rules are frozen at their most conservative setting — an attempt to soften one fails validation rather than being accepted quietly."
        },
        {
          title: "Forum wisdom is quarantined",
          body: "Your own observation, published veterinary literature, advice from your vet and things people said online are four separate tiers. The fourth lives in its own quarantined space and is structurally forbidden from being promoted into anything the pack treats as true."
        },
        {
          title: "The journal writes itself",
          body: "A growth journal and a monthly report, assembled from what already happened instead of from an evening you were supposed to spend writing it up."
        }
      ],
      proof: {
        head: "timeline",
        lab: "3 years, 2 months",
        body: [
          "vaccinations ... <span class='ok'>12 · all on record</span>",
          "weight ......... <span class='ok'>26 months, unbroken</span>",
          "today .......... <span class='hl'>water intake ↑ · crosses a line</span>",
          "<span class='dim'>→ alert + source + 3 questions for the vet</span>"
        ]
      },
      proofNote:
        "Every alert names the red line it crossed and the source behind that red line, so you can take the source to your vet rather than a screenshot of an app.",
      honest: [
        "<b>It is not a veterinarian, and it does not diagnose.</b> It watches for things worth asking about and hands you the source. The judgement is your vet's.",
        "<b>Cats and dogs only.</b> The red-line corpus is written for two species. It is editable — you can add a rule, and it will insist the rule carries a source — but the shipped set stops there.",
        "<b>Reading a photographed record uses a vision key you supply.</b> Without one you fill in a short form instead. There is no free bundled OCR, and we would rather say so than let a fallback surprise you.",
        "<b>The diary illustrates, it doesn't film.</b> Generated video is switched off in this version; a diary entry comes back as an illustrated card, not a clip."
      ]
    }
  }
};
