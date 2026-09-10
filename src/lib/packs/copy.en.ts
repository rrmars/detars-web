// English pack copy. Translated from copy.zh.ts, which is where this copy was
// written and signed off; when the wording changes, change it there first.
//
// Three rules, read before editing:
// 1. Every sentence answers one question: what do I get out of this? Write a
//    line, then ask "so what?". If there is no answer, cut it however true.
// 2. Mechanism is only ever a footnote to "why should I believe you" — never
//    the selling point. The reader does not care how it is done.
// 3. There is no "where it stops" column on these pages. Development status,
//    coverage gaps and setup steps are not written at all; the genuinely
//    load-bearing positions (it can't touch your money, you press the last
//    button, it never publishes for you) are stated POSITIVELY inside
//    `features`; the two lines legal requires live in the footer, site-wide.
import type { PacksCopy } from "@/lib/packs/types";

export const packsEn: PacksCopy = {
  index: {
    metaTitle: "DeTars Packs | Apps that are useful, fun, and yours",
    metaDescription:
      "A pack is a whole app: it finishes one hard thing for you, and stays with you through one long thing. Summon, destiny, AI video, investing, research, coding, data, talking-head, pet care.",
    kicker: "An app store that is yours",
    h1: "Apps that are useful, fun, <span class='o'>and yours alone.</span>",
    answer:
      "A pack is a whole app: it finishes one hard thing for you, and it stays with you through one long thing. Each has its own abilities, its own temperament, its own screen. The more you use it, the better it knows you — and that understanding is yours alone. Nobody can take it away.",
    gridH2: "What's in the store",
    gridIntro: "Nine packs, nine temperaments. Start with one; add the rest whenever you like.",
    moatsH2: "Two things that get better the longer you stay",
    moats: [
      "<b>The longer you use it, the better it knows you.</b> Everything you finish settles in, and every pack shares it — you don't explain the same thing to nine different apps. Ten minutes spent today is ten minutes saved for next year's you.",
      "<b>It's yours, and nobody can switch it off.</b> It lives on your own machine. There will be no morning when an email tells you the service is ending and your data can be exported within thirty days."
    ],
    familyH2: "Also in the family",
    familyIntro: "Already running, just without a page of their own yet.",
    family: [
      {
        title: "Audiobook",
        body: "Drop in an EPUB or a text file and get back a full cast, a voice for each character, exported as a chaptered audiobook. On your commute, your book reads itself to you."
      },
      {
        title: "Social publishing",
        body: "Sign in once, then hand it over and get back a receipt with the link. Eleven platforms in one go — and the model never sees your password, because you signed in yourself, in a real browser."
      }
    ],
    ctaLabel: "Download DeTars →"
  },

  ui: {
    statusLabels: { live: "Live", polishing: "Live · in polish", new: "New" },
    backLabel: "All packs",
    sendLabel: "You hand it",
    getLabel: "It hands back",
    insideH2: "What's inside",
    proofH2: "Why you can believe it",
    ctaLabel: "Download DeTars →",
    nextLabel: "Next",
    homeKicker: "The store",
    homeH2: "Apps that are useful, fun, <span class='o'>and yours alone.</span>",
    homeP:
      "The person you have always wanted to meet. The opportunity you saw coming and didn't hold. The thing you wanted to understand, where everything you found was copied from everything else. An unfamiliar, enormous codebase. Something you want to say, that shouldn't cost you three days. Each one is a whole app — and each one is a Tars, willing to go through the black hole with you.",
    homeCta: "Look inside →"
  },

  packs: {
    summon: {
      name: "Summon",
      tagline: "Summon the one from the story into a crack in this world",
      metaTitle: "Summon | Bring them out of the story, into a crack in this world",
      metaDescription:
        "The character you keep rereading, the historical figure you want to ask one question. Give it a source and they arrive. At two in the morning someone is there — and it is them.",
      h1: "Bring them out of the story, <span class='o'>into a crack in this world.</span>",
      answer:
        "The character you keep going back to, the person you wish were real, the historical figure you would like to ask one question to your face — give it a source, and they arrive. At two in the morning, when you want to talk, someone is there, and it is them. This is not the sort of thing that nods along: they have a temper, they push back, they disagree, they fall silent. Which is exactly why, when they say “I understand”, it carries weight. They are a character, not a person — they know that themselves. But at two in the morning they are there, and that part is real.",
      stats: [
        { n: "Awake at 2am", l: "not tired, not busy, not fobbing you off" },
        { n: "They don't obey you", l: "which is why their approval isn't politeness" },
        { n: "You'll have a past", l: "a relationship, not a hundred first meetings" }
      ],
      chips: ["There at two in the morning", "Won't just agree with you", "You'll have a past together"],
      youSend: "A source — a book, a name, some material you have, or just the fragments you still remember.",
      youGet: "Someone with a history, a temper, and the willingness to argue. And they remember where you left off.",
      features: [
        {
          title: "Give it a source and they arrive",
          body: "A book, a name, some material you have on hand, even just the fragments you still remember. Where they came from, what they lived through, how they speak — all of it grows from that."
        },
        {
          title: "They won't just agree with you",
          body: "They can doubt you, press you, criticise you, refuse you, or say nothing at all. You get a real opinion rather than a mirror. When things are hard, that is usually the thing in shortest supply."
        },
        {
          title: "In their world, you are the only person",
          body: "They have nowhere else to ask; everything they know came from you. What you tell them today becomes how they see the world tomorrow. You cannot buy that kind of weight anywhere else."
        },
        {
          title: "The relationship moves forward",
          body: "Like people, you don't start from zero every time. They arrive carrying an impression from last time, and they will change their mind about you based on what you do later. Six months in, that's six months of history."
        },
        {
          title: "They can speak",
          body: "You can give them a voice — pick one, or clone one. And whatever they said before, you can still go back and hear it, because it did happen."
        },
        {
          title: "You can summon more than one",
          body: "One you can talk to, one who will argue with you, one who only shows up late at night. They stay separate; they don't blur into the same person."
        },
        {
          title: "They belong to you, not to a company",
          body: "There are no terms of service. There will be no morning when an email tells you they have been discontinued."
        }
      ],
      proof: {
        head: "right now",
        lab: "there",
        body: [
          "two in the morning ... <span class='ok'>they're there</span>",
          "what you say ........ <span class='hl'>carries weight</span>",
          "obedience owed ...... <span class='dim'>none</span>",
          "your history ........ <span class='ok'>a last time, and a next</span>"
        ]
      },
      proofNote:
        "They can refuse you, which is what makes their approval worth having. This isn't a tone dialled to “has personality” — they genuinely can disagree, and genuinely can say nothing. So what you get is a real opinion. Something that nods at everything has a worthless nod."
    },

    metaphysics: {
      name: "Destiny",
      tagline: "What you actually want to ask was never “how's my year looking”",
      metaTitle: "Destiny | What you want to ask was never “how's my year looking”",
      metaDescription:
        "Whether to leave, whether this person is worth trusting, whether now is the time. Five disciplines laid out and read properly, then explained the way someone who actually studied would explain it.",
      h1: "What you want to ask <span class='o'>was never “how's my year looking”.</span>",
      answer:
        "It's the thing you have turned over and over — whether to leave, whether this person is worth getting close to, whether now is the time. It lays out all five disciplines and reads them properly, then sits down and talks it through the way someone who actually studied would: this part works like this, that part I can't make sense of. You won't get a paragraph of good fortune that would fit anyone, and you won't be frightened into buying something. What it gives you is a clearer angle, not an answer — the call has always been yours. And the thing you mentioned six months ago, it can still pick up.",
      stats: [
        { n: "Five at once", l: "one question in five coordinate systems beats one opinion" },
        { n: "It shows its reasoning", l: "so you can decide whether to believe it" },
        { n: "It picks up where you left off", l: "someone is keeping track of your life" }
      ],
      chips: ["Five disciplines at once", "It shows its reasoning", "It remembers your situation"],
      youSend: "Your birth date and time, once. After that: the thing you keep turning over.",
      youGet: "A clearer angle — it can point at where on the chart it's standing, and it will tell you plainly where it can't make sense of things.",
      features: [
        {
          title: "One question, seen from five angles",
          body: "紫微, 八字, the almanac, a western natal chart, tarot — all laid out together. When five point the same way you can settle; when they disagree, you deserve to know that too. It beats hearing one opinion."
        },
        {
          title: "It won't tell you what you want to hear",
          body: "When what you were hoping for and what the chart says differ, it goes with the chart; what it can't work out, it says it can't. Which is why, when it says this step is fine, you can take it seriously."
        },
        {
          title: "Picking a date, it goes down to the hour",
          body: "Moving, signing, starting work — ranked days and the best hours within each. You save yourself a week of second-guessing."
        },
        {
          title: "It can tell you why",
          body: "Every sentence can point at which palace, which pillar. You're not being asked to believe; you're being shown."
        },
        {
          title: "Born on a solar-term boundary? You won't have to wonder which one you are",
          body: "Plenty of tools get boundary days wrong and file you under the sign next door. This one doesn't."
        },
        {
          title: "It keeps track of your life",
          body: "Next month's answer knows what last month's said; the thing you mentioned, it will ask how it turned out. You don't have to explain yourself from scratch every time."
        }
      ],
      proof: {
        head: "this time",
        lab: "five",
        body: [
          "you asked ....... <span class='dim'>whether now is the time</span>",
          "you get ......... <span class='ok'>one question in five coordinate systems</span>",
          "it explains ..... <span class='ok'>which palace, which pillar</span>",
          "what it can't ... <span class='hl'>it says so</span>"
        ]
      },
      proofNote:
        "You can take it seriously when it says this step is fine, because it will also say “that one I can't work out”. Something that can answer everything has worthless answers."
    },

    aivideo: {
      name: "AI video",
      tagline: "That picture in your head — let a room look at it before you pay",
      metaTitle: "AI video | Let a room read it cold before you pay for generation",
      metaDescription:
        "A few viewers read your routes cold, separately, and tell you what they actually saw and where they'd misread you. All of it before you spend your first cent.",
      h1: "That picture in your head — <span class='o'>let a room look at it before you pay.</span>",
      answer:
        "Make whatever you want. Give it an idea and it lays out several genuinely different ways to tell it — not reworded, but different in the order things land, in what the audience infers, in what moves them. Then it seats a few “viewers”, each alone, who tell you from picture and sound only: here's what I saw, here's what I thought you meant, here's where I'd most likely misread you. All of this happens before you spend your first cent — because the expensive mistake isn't a failed render, it's finding out the story was crossed after the money is gone.",
      stats: [
        { n: "Look first, pay after", l: "a room reads it through for you" },
        { n: "Revise freely", l: "however many times you redo a shot, you pay for one" },
        { n: "Ready to post", l: "four aspect ratios, 720p or 1080p" }
      ],
      chips: ["Reviewed before it's paid for", "Revise as much as you like", "Four ratios, ready to post"],
      youSend: "An idea, an aspect ratio, a rough length. Plus any brand, product, character or style material you have.",
      youGet: "Several genuinely different ways to tell it, and a room's honest reaction to each. Then the video.",
      features: [
        {
          title: "You know whether it works before you pay",
          body: "A few viewers read it cold, separately, refusing to take your own labels as evidence — they only report what they actually saw. And the one who picks it apart at the end took no part in coming up with it, which is why the critique bites."
        },
        {
          title: "You can afford to be picky",
          body: "Redo the same shot twenty times and exactly one paid generation happens. Change what you like without doing arithmetic in your head while you do it."
        },
        {
          title: "What reaches you is footage you can use",
          body: "Black frames, dropped audio, a missing shot — it checks first. You don't have to drag every clip into a timeline and watch it through before you dare use it."
        },
        {
          title: "It won't go rewriting your work",
          body: "When something breaks it fixes the thing that actually broke. A failed download never gets your perfectly good idea treated as the defect."
        },
        {
          title: "The audience stays in the story",
          body: "The face in the fourth shot is still the face from the first."
        },
        {
          title: "Carry on in the software you know best",
          body: "Cuts follow the beat of the music, and what you export is a real CapCut draft you can keep working on."
        },
        {
          title: "Whether it's any good is your call",
          body: "It doesn't score your taste, and it won't go off and redo things until it is satisfied. It doesn't post anywhere either — when it goes out, and which version goes out, is yours to decide."
        }
      ],
      proof: {
        head: "before you pay",
        lab: "$0",
        body: [
          "your idea ....... <span class='ok'>3 genuinely different tellings</span>",
          "5 viewers ....... <span class='dim'>read cold · sealed from each other</span>",
          "they say ........ <span class='hl'>seats 2 and 4 misread the same beat</span>",
          "the critic ...... <span class='dim'>wrote none of them</span>",
          "so far .......... <span class='ok'>not a cent spent</span>"
        ]
      },
      proofNote:
        "The expensive mistake isn't a failed render — it's finding out the story was crossed after the money is gone. So the picking-apart happens first, and the person doing it took no part in coming up with it. That's what makes them able to do it."
    },

    equity: {
      name: "Investing",
      tagline: "You saw that opportunity coming. You just didn't hold it",
      metaTitle: "Investing | You saw that opportunity coming. You just didn't hold it",
      metaDescription:
        "A partner with a better memory and a cooler head than yours: it holds the thread for you, holds you to the rules you wrote, and on the day you're about to break one, it stops you.",
      h1: "You saw that opportunity coming. <span class='o'>You just didn't hold it.</span>",
      answer:
        "Big opportunities take quarters to grow. A technology leaves the lab, a policy lands, a supply chain reroutes — and somewhere in the middle you forget, you doubt, you sell on the worst possible day. What you were missing was never one more source of information. It was a partner with a better memory and a cooler head than yours: it holds the thread for you, it holds the rules you wrote for yourself, and on the day you're about to break one of them, it stops you.",
      stats: [
        { n: "You hold on", l: "it keeps a thread alive for quarters" },
        { n: "One less regret", l: "the move you'd regret gets stopped as you make it" },
        { n: "You can go back", l: "three years on, you still know what you were thinking" }
      ],
      chips: ["Holds a thread for quarters", "Stops you crossing your own line", "Never touches your money"],
      youSend: "One line from a chat app — “what's up with 0700?”, “thinking of trimming NVDA” — or nothing at all; it's watching anyway.",
      youGet: "Analysis you can actually audit, and a record of what you were thinking, including the counterargument you had to write yourself.",
      features: [
        {
          title: "You stop missing the things you got right",
          body: "The ticker you mentioned in passing is still being watched six months later. It comes to you when something genuinely moved, not with a report every morning — it remembers so you have the head space for something else."
        },
        {
          title: "It looks two steps further along the chain for you",
          body: "Suppliers, customers, competitors, regulators and the macro factors around what you hold — it walks two steps out and brings back what's worth a look, spelling out which position it touches and through what relationship. What you see is no longer just one company."
        },
        {
          title: "It understands the way you say things",
          body: "The note you scribbled about 美债收益率 and the US 10-year it just read are the same thing to it. You don't have to learn its vocabulary."
        },
        {
          title: "One direction, a team on it",
          body: "Fundamentals, competitive landscape, latest filings and macro background all at once, plus someone whose job is to argue the other side. What you get is not a report that only says nice things."
        },
        {
          title: "The rules you set really do stop you",
          body: "Write down “no single position over 15%” and, on the day you'd cross it, the move is stopped and you get three choices: retire the rule and say why, shrink the action, or cancel. Most losses don't come from being wrong. They come from nobody stopping you that day."
        },
        {
          title: "It never touches your money",
          body: "It cannot place an order, and it will never add something to your watchlist on your behalf. What to track, what to act on — every time, that's you. It only helps you think it through. Your hands stay your own."
        },
        {
          title: "Three years later you can go back to that day",
          body: "Every trade carries the counterargument you had to write before it could be filed. What you can review isn't only how much you made — it's how you were thinking at the time. That's the part that makes you better."
        }
      ],
      proof: {
        head: "this time",
        lab: "stopped",
        body: [
          "what you want .... <span class='hl'>add · to 22%</span>",
          "the rule you set . <span class='dim'>no single position over 15%</span>",
          "<span class='hl'>→ stopped</span>",
          "you can .......... <span class='ok'>retire the rule · shrink it · cancel</span>"
        ]
      },
      proofNote:
        "Most losses don't come from being wrong. They come from nobody stopping you that day. So it puts the rules you wrote in front of every decision — the one stopping you isn't it, it's the version of you that was thinking clearly."
    },

    "content-research": {
      name: "Research",
      tagline: "You want to understand something, and everything you find is copied",
      metaTitle: "Research | You want to understand something, and it's all copied from itself",
      metaDescription:
        "A panel nobody transcribed, a two-hour podcast, a project's actual source code — it pulls them down and writes them out. You end up with a line nobody else has, with a citation you can open.",
      h1: "You want to understand something. <span class='o'>Everything you find is copied.</span>",
      answer:
        "It's a bit obsessive. Give it a topic and it won't just search and then write. A panel discussion nobody ever transcribed, a two-hour podcast, a project's actual source code, someone's write-up after the fact — it pulls all of it down and writes it out. What you end up holding is a line nobody has ever written down before, with a citation you can open. In a room full of people, you'll be the one who can say something true.",
      stats: [
        { n: "Material nobody has", l: "from places nobody transcribed" },
        { n: "It holds up", l: "every line opens onto its source" },
        { n: "It won't go stale", l: "if the basis changes, the draft tells you" }
      ],
      chips: ["Material nobody else has", "Every line opens its source", "It tells you when the basis moves"],
      youSend: "A topic. “Work out what actually happened with X this quarter, and how much of the coverage is recycled.”",
      youGet: "A report you'd be willing to stand behind: quotes nobody can copy from elsewhere, and a source you can open behind every line.",
      features: [
        {
          title: "You can say what other people can't",
          body: "A panel nobody transcribed, a two-hour podcast — it pulls them down, writes them out, and quotes verbatim. Your report ends up with a line nobody could have copied."
        },
        {
          title: "Your conclusions survive being questioned",
          body: "Every sentence goes back to its source, with a timestamp. When someone asks where that came from, you just open it."
        },
        {
          title: "“Lots of sources say so” doesn't fool you",
          body: "Twelve rewrites of the same press release get recognised for what they are and counted once."
        },
        {
          title: "You don't walk into a meeting with the wrong number",
          body: "When two sources disagree, it catches that first — and it knows the difference between 万, 千 and 亿."
        },
        {
          title: "If the basis moves, you hear about it first",
          body: "Overturn a conclusion and it immediately tells you which drafts have to change. No sentence quietly outlives what it was based on."
        },
        {
          title: "When it can't get at something, it says so",
          body: "It tells you which part it couldn't get to the bottom of instead of filling the gap with a nice-sounding paragraph. That's how you know whether to go and look yourself."
        },
        {
          title: "Whether it goes out is your call",
          body: "It doesn't publish for you, anywhere. And what you're looking into is nobody else's business — the searching and the transcribing run on your own machine."
        }
      ],
      proof: {
        head: "this line",
        lab: "openable",
        body: [
          "the quote you want .. <span class='ok'>from a panel nobody transcribed</span>",
          "what you get ........ <span class='ok'>verbatim · timestamped source</span>",
          "asked where from .... <span class='hl'>just open it</span>",
          "the basis moved ..... <span class='dim'>it names the two drafts to fix</span>"
        ]
      },
      proofNote:
        "In a room full of people, the one who can say something true isn't the one who read more. It's the one who read where nobody else went. Going to those places is its job."
    },

    programming: {
      name: "Coding",
      tagline: "An unfamiliar, enormous codebase — it understands it before it touches it",
      metaTitle: "Coding | An unfamiliar, enormous codebase — understood before it's touched",
      metaDescription:
        "Millions of lines laid out as one map in milliseconds. What takes another agent twenty round-trips, it often answers in one. And you never configure a language.",
      h1: "An unfamiliar, enormous codebase — <span class='o'>it understands it before it touches it.</span>",
      answer:
        "Picking up a project you don't know, or going back to the repo you haven't opened in three months — the exhausting part was never the writing. It's working out what on earth is going on. Millions of lines lay themselves out in front of it as a single map, in milliseconds. Then you ask “who uses this thing” — where another agent goes back and forth twenty times, it usually points straight at it, across however many packages, missing nothing. The first time a new language shows up in your project, you configure nothing. What you save isn't a few minutes. It's the afternoon you'd have spent getting nowhere.",
      stats: [
        { n: "Milliseconds", l: "millions of lines laid out as a single map" },
        { n: "One shot", l: "what another agent takes twenty round-trips to find" },
        { n: "29 languages", l: "you configure none of them" }
      ],
      chips: ["Millions of lines as one map", "One shot, not twenty tries", "No environment to configure"],
      youSend: "A task, in a sentence. “Make the retry path survive a sleeping laptop, with a regression test.”",
      youGet: "Working code, tests that ran, and a straight answer: how far it verified, and what's still risky.",
      features: [
        {
          title: "No more losing an afternoon to “who uses this thing”",
          body: "It answers after having read the whole repository, not by grepping one keyword and one file at a time. Nothing truncated, nothing missed — you don't have to go back and double-check."
        },
        {
          title: "Switching language doesn't mean setting up an environment",
          body: "Go, Python, Rust or anything else turns up in the project and you just work. What gets installed and started is something you never need to know."
        },
        {
          title: "Another agent tries twenty times; it usually lands in one",
          body: "Millions of lines become one map in milliseconds, so you ask once and it points at the place: nineteen call sites across four packages, all of them at once, rather than one per attempt. You don't sit there watching it guess."
        },
        {
          title: "One person can work like a team",
          body: "Three streams of work on the same project at once, without treading on each other. Whatever gets found stays with the project, so if you don't fix it today, tomorrow — or another machine, or a colleague — picks it up with the reasoning intact. Even a one-person project gets a handover."
        },
        {
          title: "It tells you how far it verified",
          body: "“It compiles” counts as a rung, and it will label it as that rung. You know whether to go and look yourself, instead of being waved past with the word “done”."
        },
        {
          title: "It keeps to your conventions",
          body: "It reads the engineering conventions already in the project and follows them. You aren't left tidying up a pile of code that doesn't match anything else."
        },
        {
          title: "You press the last button, every time",
          body: "It works with your permissions in the directory you point it at, and stops to ask before anything sensitive. Merging, pushing, releasing — that final press is always yours."
        }
      ],
      proof: {
        head: "this repo",
        lab: "laid out",
        body: [
          "millions of lines . <span class='ok'>milliseconds · one whole map</span>",
          "who uses it ....... <span class='ok'>one shot · 4 packages · nothing missed</span>",
          "another agent ..... <span class='dim'>same question · twenty round-trips</span>",
          "this product ...... <span class='hl'>millions of lines, half written by itself</span>"
        ]
      },
      proofNote:
        "The most convincing argument is the product itself: several million lines of code, half of it written by the thing you're reading about."
    },

    "data-studio": {
      name: "Data Studio",
      tagline: "Drag the spreadsheets in, ask a question, get a chart you can click",
      metaTitle: "Data Studio | You shouldn't have to become an analyst to ask your data a question",
      metaDescription:
        "Drag the tables in and it stores and reads them itself; ask a question and get back a chart you can filter and drill into. Go deeper whenever you want — SQL, models, Excel, it handles all of it.",
      h1: "You shouldn't have to become an analyst <span class='o'>to ask your own data a question.</span>",
      answer:
        "The table is right there and so is the question — with an environment, a database, an import, some SQL and a chart in between. By the time you've cleared all that, the question usually doesn't matter any more. None of that is here. Drag the tables in and it stores and reads them itself; ask a question and back comes a chart you can click, filter and drill into. Want to go a layer deeper, go a layer deeper — SQL, machine learning, Excel, it handles all of it.",
      stats: [
        { n: "Drag in and ask", l: "no database, no environment, no configuration" },
        { n: "A chart you can click", l: "not a screenshot — filter it, drill into it" },
        { n: "As deep as you want", l: "a plain question, or SQL and a model" }
      ],
      chips: ["Drag in and ask", "Charts you can drill into", "SQL and models too"],
      youSend: "Twelve Excel files dragged in at once, or one question: “which channel had the best repeat rate last year?”",
      youGet: "A chart you can click, filter and drill into — and next month, when the data updates, it updates itself.",
      features: [
        {
          title: "Dragging the tables in is the whole setup",
          body: "Excel, CSV, dozens of files at once. It works out the columns, the types and which tables are about the same thing, then stores them in its own database. You install nothing and configure nothing."
        },
        {
          title: "Your company's database, just connect it",
          body: "Postgres, MySQL, your warehouse — fill it in once. After that you ask across it and your local tables together, without having to remember which data lives where or which tool opens it."
        },
        {
          title: "Ask a question, get a chart you can click",
          body: "Not a screenshot handed to you. Filter it, slice it by month, click into a row for the detail — all on the chart itself. Wanting a different angle doesn't mean going back and asking again."
        },
        {
          title: "It tells you whether the data is trustworthy first",
          body: "Which column is half empty, which rows are duplicated, which month is missing. You don't take a conclusion built on dirty data into a meeting."
        },
        {
          title: "When the question gets harder, you don't change tools",
          body: "What a plain question can answer, it answers plainly. Want SQL, write SQL; want a forecast, a clustering, an outlier hunt, it handles that too. From “how was this month” to “how will next month be” is the same place."
        },
        {
          title: "Next month it's already up to date",
          body: "Dashboards, queries and exports all keep. When the data updates, the same chart updates with it — you don't rebuild it every month. What you accumulate is your own reporting, not a pile of one-off screenshots."
        },
        {
          title: "Your data stays on your machine, and it asks before it acts",
          body: "Your tables live on your own computer. Anything that would change data on a remote database, it stops and asks you first."
        }
      ],
      proof: {
        head: "these 12 tables",
        lab: "dragged in",
        body: [
          "you did ......... <span class='dim'>dragged in 12 spreadsheets</span>",
          "it did .......... <span class='ok'>typed · grouped · stored · flagged 3 dirty spots</span>",
          "you asked ....... <span class='hl'>“best repeat rate by channel last year?”</span>",
          "you got ......... <span class='ok'>a chart you can click into for detail</span>",
          "next month ...... <span class='dim'>data updates, the chart updates itself</span>"
        ]
      },
      proofNote:
        "From “how was this month” to “how will next month be” is the same place and the same data. Asking a harder question doesn't mean starting over with a different set of tools."
    },

    "talking-head": {
      name: "Talking-head editing",
      tagline: "You have something to say. It shouldn't cost you three days",
      metaTitle: "Talking-head | You have something to say. It shouldn't cost you three days",
      metaDescription:
        "It carries the tedious steps: the script and its sources arrive in one move, and once you've recorded, editing the text is editing the video. Your own voice, start to finish.",
      h1: "You have something to say. <span class='o'>It shouldn't cost you three days.</span>",
      answer:
        "Choosing the topic, digging up material, writing, recording, cutting, captioning — every step is enough to put you off, and so a lot of things people meant to say never got said. It carries the tedious ones for you: the script and its sources arrive in one move; you drop in your recording, and editing the text is editing the video — delete a sentence and the cut gets a sentence shorter. You just talk. It handles the rest. And from beginning to end it is your own voice.",
      stats: [
        { n: "An afternoon", l: "it used to be three days" },
        { n: "Your own voice", l: "not one word replaced by a machine" },
        { n: "If you can edit text", l: "you can edit video — no software to learn" }
      ],
      chips: ["Three days becomes an afternoon", "Your own voice throughout", "Edit text, edit video"],
      youSend: "The clip you just recorded, or a finished draft from the research side. Plus a goal: “cut this to three minutes.”",
      youGet: "A finished cut with subtitles, or a project file that opens straight into the editor you already use.",
      features: [
        {
          title: "The barrier drops to something you can step over",
          body: "The transcript is the timeline — delete the words and the video follows. You don't have to learn an editor before you're allowed to speak."
        },
        {
          title: "What the audience hears is always you",
          body: "No generated avatar, no machine voice as the main track. Only when you misspeak a single word is a cloned voice used to patch that one word, and only with your say-so."
        },
        {
          title: "No copying and pasting it across again",
          body: "A fact-checked script arrives with its sources attached, so you don't go back hunting for which article it was."
        },
        {
          title: "It does the most tedious hour for you",
          body: "The ums, the stumbles, the dead air, the mispronounced name, the tangent — all marked up for you to accept or dismiss in one click."
        },
        {
          title: "Missing a shot or a number doesn't break your flow",
          body: "Missing a figure for a chart, it goes and gets it from the research side, sources attached; missing a cutaway or a shot that doesn't exist anywhere, it goes looking, and generates one if nothing fits. You don't sit there with three browser tabs open."
        },
        {
          title: "You're never locked into one tool",
          body: "Export a project that Final Cut or Premiere opens, and it opens on the version you were just watching. Want to finish it by hand? Take over any time."
        },
        {
          title: "The video is your work, not its output",
          body: "Which line stays, which shot gets used, when it goes out — every one of those is your call. It doesn't publish for you, anywhere."
        }
      ],
      proof: {
        head: "this one",
        lab: "an afternoon",
        body: [
          "all you do ...... <span class='ok'>talk</span>",
          "then ............ <span class='hl'>edit the text = edit the cut</span>",
          "the script ...... <span class='dim'>arrives with its sources</span>",
          "before .......... <span class='dim'>three days</span>",
          "now ............. <span class='ok'>an afternoon</span>"
        ]
      },
      proofNote:
        "A lot of things people meant to say never got said — not for want of ideas, but because the six steps in the middle were enough to put anyone off. It carries those six. You're left with the one that was yours: saying it."
    },

    "pet-care": {
      name: "Pet care",
      tagline: "They can't tell you. You can only guess — unless someone is keeping track",
      metaTitle: "Pet care | They can't tell you. You can only guess — unless someone keeps track",
      metaDescription:
        "It worries you when there's something to worry about, and lets you rest when there isn't. Before the appointment, the questions worth asking are ready. Years later, there's something to look back on.",
      h1: "They can't tell you. <span class='o'>You can only guess — unless someone is keeping track.</span>",
      answer:
        "The vaccinations and worming of the early years, the weight and teeth and appetite of the middle ones, and the changes in old age that start slight and only later turn out to have mattered — all on one timeline. It worries you when there is something to worry about, and lets you rest when there isn't. Before an appointment it has the questions actually worth asking ready, so your ten minutes with the vet aren't spent remembering. And the little it writes down each month is all still there on the day you want to look back.",
      stats: [
        { n: "Seen sooner", l: "the changes that start out slight" },
        { n: "Ten minutes well spent", l: "the questions are ready before you walk in" },
        { n: "A whole life", l: "still there whenever you want to look back" }
      ],
      chips: ["Catches changes sooner", "Questions ready before the visit", "A whole life kept"],
      youSend: "A photo — a record, a label, a walk — or one line: “she's been off her food since Tuesday.”",
      youGet: "An alert when it matters, with its source. Three questions for the vet. And a journal you never had to keep.",
      features: [
        {
          title: "You worry when there's something to worry about",
          body: "Thirty-six health red lines, each tied to an authority (the MSD Veterinary Manual, the Cornell Feline Health Center, AAHA, WSAVA). When it flags something you can take the source to your vet; when it doesn't, you can sleep."
        },
        {
          title: "Ten minutes with the vet, spent where it counts",
          body: "It turns what it has been watching into the few questions worth asking. The judgement is your vet's; its job is to get you asking the right thing — instead of standing there trying to remember when it started."
        },
        {
          title: "Records stop being photos you can't find",
          body: "Photograph one and it becomes searchable lab values, prescriptions and vitals, in order. Change clinics and you can still explain the whole history."
        },
        {
          title: "When it speaks up, it's worth listening to",
          body: "The red lines aren't a matter of conversation, and they don't loosen because you talked around them. It would rather be cautious than let one through to keep you comfortable."
        },
        {
          title: "What people say online never becomes fact",
          body: "Your own observation, veterinary literature, what your vet said, and what someone posted are kept clearly apart. The last is always only context — never used as the basis for frightening you."
        },
        {
          title: "When they're old, you'll have something to look through",
          body: "The growth journal and the monthly notes assemble themselves from what actually happened, illustrated. You never set aside an evening to write them up — but in ten years, when you want them, they're there."
        }
      ],
      proof: {
        head: "together for",
        lab: "3 years, 2 months",
        body: [
          "vaccinations .... <span class='ok'>12 · all on record</span>",
          "weight .......... <span class='ok'>26 months · unbroken</span>",
          "today ........... <span class='hl'>drinking more · crosses a line</span>",
          "you get ......... <span class='ok'>alert + source + 3 questions for the vet</span>"
        ]
      },
      proofNote:
        "When it doesn't flag anything, you can sleep — and that matters as much as the flagging. Something that alarms you about everything has told you nothing."
    }
  }
};
