import { assets, availability, dl } from "@/lib/download";
import type { PageContent, PageKey } from "@/lib/pages";

export const pagesDe: Record<PageKey, PageContent> = {
  "how-it-works": {
    title: "So funktioniert DeTars | Eine Zeile rein, fertige Arbeit raus",
    description: "Schick DeTars eine Zeile oder ein Foto aus einer beliebigen Chat-App. Es arbeitet stundenlang im Hintergrund und meldet sich mit fertiger Arbeit bei dir.",
    kicker: "Im Alltag",
    h1: "Schick ihm eine Zeile. <span class='o'>Es übernimmt den Rest.</span>",
    answer: "DeTars nimmt Eingaben aus jeder Chat-App entgegen, die du bereits nutzt, erledigt die Arbeit im Hintergrund — stundenlang, auch über Nacht — und meldet sich, wenn es fertig ist. Es ist für dich da, nicht umgekehrt.",
    sections: [
      {
        h2: "Das eine Muster",
        intro: "Alles, was du mit DeTars machst, folgt demselben Muster.",
        blocks: [{ type: "list", items: [
          "<b>Eingaben von überall.</b> Eine Zeile oder ein Foto aus einer Chat-App, die du schon nutzt — Telegram, Slack, Feishu oder WeChat. Keine neue App lernen.",
          "<b>Es arbeitet im Hintergrund.</b> Es plant, holt Spezialisten dazu und arbeitet stundenlang, ohne dass du daneben sitzen musst.",
          "<b>Es meldet sich bei dir.</b> Wenn die Arbeit fertig ist — oder es wirklich eine Entscheidung braucht — gibt es dir Bescheid."
        ] }]
      },
      {
        h2: "Nicht jeder Kanal ist gleich",
        intro: "Die Arbeit ist dieselbe, egal von wo du sie schickst. Wie viel du <i>im</i> Chat machen kannst, nicht.",
        blocks: [{ type: "list", items: [
          "<b>Telegram, Slack, Feishu — das umfassendere Erlebnis.</b> Wo der Kanal es unterstützt, kommen Freigaben und Auswahlmöglichkeiten als native Schaltflächen und Karten zurück, und Sprachnachrichten lassen sich senden und empfangen.",
          "<b>WeChat — Text als Ersatz.</b> Dieselbe Arbeit, dieselben Ergebnisse, als Klartext geliefert. Die Interaktion ist begrenzter: Du antwortest mit Worten statt auf eine Karte zu tippen, und reichhaltige oder gesprochene Antworten werden durch Text ersetzt.",
          "<b>Nichts hängt von der erweiterten Oberfläche ab.</b> Jede Anfrage von DeTars hat eine Klartextform, sodass ein reiner Textkanal nie eine Aufgabe blockiert."
        ] }]
      },
      {
        h2: "Vier Wege, wie Menschen es bereits nutzen",
        blocks: [{ type: "cards", items: [
          { tag: "Tierbetreuung", title: "📷 Ein Foto von deinem Hund", body: "Schick einen Schnappschuss; erhalte ein lustiges Kurzvideo mit veröffentlichungsfertigen Texten." },
          { tag: "Investieren", title: "💡 Eine Aktie, von der du gehört hast", body: "Erwähne sie einmal; es beobachtet sie weiter und meldet sich, wenn sich etwas bewegt. Es hat weder eine Broker-Anbindung noch ein Order-Tool." },
          { tag: "Sprachvideo", title: "🎙️ Ein Clip direkt in die Kamera", body: "Unterwegs aufnehmen; einen geschnittenen Clip mit Untertiteln erhalten — deine echte Stimme bleibt, statt durch Sprachsynthese ersetzt zu werden." },
          { tag: "Recherche", title: "🔍 Etwas, das du aufgeschnappt hast", body: "Eine Zeile; ein Bericht mit Quellen und laufende Beobachtung des Themas." }
        ] }]
      },
      {
        h2: "Warum es nicht nur ein weiterer Chatbot ist",
        blocks: [{ type: "p", html: "Ein Chatbot wartet auf dich und vergisst. DeTars verfolgt ein Ziel: Es überlegt, <b>wie</b> die Arbeit zu erledigen ist, fängt Störungen auf und markiert etwas erst als fertig, wenn es das belegen kann. Das Chatfenster ist nur die Oberfläche — darunter wird gearbeitet." }]
      }
    ],
    cta: { label: "Sieh, warum du ihm vertrauen kannst →", route: "/reliable" }
  },
  reliable: {
    title: "Warum DeTars zuverlässig ist | Sechs Dinge, die andere nicht können",
    description: "DeTars macht aus einer brillanten, aber unzuverlässigen KI ein Team für echte Arbeit: Es denkt mit, übersteht Fehler, täuscht keine Fertigstellung vor, korrigiert sich, bleibt deins und ist an keinen Anbieter gebunden.",
    kicker: "Warum du ihm vertrauen kannst",
    h1: "Zuverlässigkeit, <span class='o'>in die Architektur eingebaut.</span>",
    answer: "Das heutige Modell ist ein brillanter, aber unzuverlässiger Praktikant. DeTars macht es durch sechs strukturelle Eigenschaften vertrauenswürdig — keine Versprechen, sondern Mechanismen, die du überprüfen kannst.",
    sections: [
      {
        h2: "Die sechs",
        blocks: [{ type: "list", items: [
          "<b>Es denkt selbstständig.</b> Gib ihm ein Ziel; es zerlegt die Arbeit, bildet ein Spezialistenteam, verfolgt den Fortschritt, pausiert, um Ergebnisse abzuwarten, und setzt fort. Das Wie wird vor Ort durchdacht, nicht durch ein fest verdrahtetes Skript vorgegeben.",
          "<b>Es wirft nicht gleich hin.</b> Ratenlimits, Zeitüberschreitungen, Ruhezustand, Abstürze — es behandelt alles als Tatsache, mit der es umgeht: warten, erneut versuchen, Zwischenstand speichern, fortsetzen. Über Nacht laufen lassen; morgens Ergebnisse lesen.",
          "<b>Es kann nichts vortäuschen.</b> &lsquo;Fertig&rsquo; ist ein Nachweis, der eingelöst werden muss: geliefert, durch Belege gestützt, unabhängig geprüft. Jedes Zitat ist durch einen Inhaltshash versiegelt — ein geändertes Zeichen macht es sofort ungültig.",
          "<b>Es hat ein Immunsystem.</b> Es sucht eigene Fehler und überführt jeden in dauerhafte Regressionstests. Zweimal hat es bereits Bugs in seinen eigenen Selbstprüfwerkzeugen entdeckt.",
          "<b>Es gehört dir.</b> Es lebt auf deinem Rechner; was es sich merkt, braucht dein Okay und liegt als Datei auf deiner Festplatte. Niemand kann es so unbrauchbar machen, wie Rewind oder Humane es ihren Nutzern gegenüber getan haben.",
          "<b>Es ist nicht gefangen.</b> Es leitet jede Aufgabe an das passende Denkmodell weiter — jedes große Modell, aus den USA oder China, oder ein lokales auf deinem Laptop — wechsle, wann du willst. Die Engine ist seine eigene, kein Wrapper um die API eines anderen."
        ] }]
      },
      {
        h2: "Und es <span class='o'>entwickelt sich selbst weiter</span>",
        intro: "Zuverlässigkeit wird nicht einmal eingestellt — sie wächst. Drei sich verstärkende Kreisläufe machen jede Version schwerer zu schlagen.",
        blocks: [{ type: "list", items: [
          "<b>Selbsthärtung.</b> Es sucht eigene Fehler und überführt jeden in dauerhafte Regressionstests — so ist jede Version schwerer aus dem Tritt zu bringen als die letzte. Zuverlässigkeit kann man nicht kaufen, nur aufbauen.",
          "<b>Selbstoptimierendes Gedächtnis.</b> Es ordnet sein Gedächtnissystem laufend neu und bereinigt es, damit der Abruf auch beim Wachsen präzise bleibt — während das, was es sich <i>über dich</i> merkt, weiterhin dein Okay braucht.",
          "<b>Selbsterweiterung.</b> Wenn eine Aufgabe eine Fähigkeit braucht, die ihm fehlt, erzeugt, installiert und verwaltet es eigene Tools und Skills — neue Fähigkeiten wachsen selbstständig, ohne auf ein Release zu warten."
        ] }]
      },
      {
        h2: "Darunter: die Technik, die alles trägt",
        intro: "Du brauchst die Details nicht — aber jedes lässt sich überprüfen, auch wenn die Implementierung unser nicht veröffentlichtes Kern-IP ist.",
        blocks: [{ type: "list", items: [
          "Schreibdisziplin auf Datenbankniveau, damit ein Agententeam niemals die Arbeit der anderen überschreibt.",
          "Belege mit Inhaltsfingerabdruck: Eine ungelesene oder veränderte Quelle kann nicht zitiert werden.",
          "Cachebewusstes Routing hält den KV- / Prompt-Cache des Modells warm — wiederholter Kontext wird nicht doppelt berechnet, lange Aufgaben kosten viel weniger Tokens, und mit den Modellpreisen sinkt auch die Rechnung.",
          "Material im Millionen-Wörter-Umfang wird vorab zu einem Index aufbereitet, bevor das Modell ein Wort liest.",
          "Eine budgeterhaltende Buchführung, damit es sich nicht selbst unbegrenzten Umfang oder Ausgaben genehmigt.",
          "Eine zweite, nur lesende Instanz prüft den Lauf während der Arbeit und gibt Korrekturen zurück.",
          "Typisierte Fehlerbehandlung — Ratenlimit, Zeitüberschreitung und Blockade nehmen jeweils einen anderen Weg.",
          "Unumkehrbare Aktionen (Orders, Senden, sensible Zugangsdaten) sind standardmäßig gesperrt, bis du sie autorisierst."
        ] }]
      }
    ],
    cta: { label: "Echte Anwendungsfälle ansehen →", route: "/scenarios" }
  },
  download: {
    title: "DeTars herunterladen | macOS und Windows",
    description: "Hol dir DeTars für macOS oder Windows. Dein KI-Team läuft auf deinem eigenen Rechner — dein Gedächtnis bleibt auf deiner Festplatte.",
    kicker: "Download",
    h1: "Starte auf <span class='o'>deinem</span> Rechner.",
    answer: "DeTars läuft nativ auf macOS und Windows. Mit dem Download fängst du an, ohne dich auf ein Wartungsprojekt einzulassen — und dein Gedächtnis bleibt vom ersten Tag an auf deiner eigenen Festplatte.",
    sections: [
      { h2: "Wähle deine Plattform", blocks: [{ type: "tiles", items: [
        { title: "macOS", sub: "Apple Silicon (M-Serie).", note: availability.macArm ? ".dmg herunterladen" : "demnächst verfügbar", href: availability.macArm ? dl(assets.macArm) : undefined },
        { title: "macOS", sub: "Intel.", note: availability.macIntel ? ".dmg herunterladen" : "demnächst verfügbar", href: availability.macIntel ? dl(assets.macIntel) : undefined },
        { title: "Windows", sub: "Windows 10/11 (x64).", note: availability.win ? ".exe herunterladen" : "demnächst verfügbar", href: availability.win ? dl(assets.win) : undefined }
      ] }] },
      { h2: "Was du bekommst", blocks: [{ type: "list", items: [
        "Ein privates KI-Team, das lokal läuft und sich an dich erinnert.",
        "Alle großen Modelle und lokale Modelle, jederzeit wechselbar — ohne Anbieterbindung.",
        "Gedächtnis als Dateien auf deiner Festplatte; nichts wird auf einen Server gezwungen."
      ] }] }
    ]
  },
  faq: {
    title: "DeTars FAQ | Klare Antworten auf kritische Fragen",
    description: "Direkte Antworten zu Zuverlässigkeit, Privatsphäre, Preisdruck, Anbieterbindung und dem Unterschied zwischen DeTars, Chatbots und Cloud-Agenten.",
    kicker: "FAQ",
    h1: "Kritische Fragen, <span class='o'>klare Antworten.</span>",
    answer: "Kein Marketingnebel. Die schärfsten Einwände, klar beantwortet — mit ehrlich benannten Grenzen.",
    sections: [{ h2: "Fragen", blocks: [{ type: "faq", items: [
      { q: "Ist das nicht bloß eine weitere GPT-Store-Vorlage?", a: "Nein. GPT-Store-Einträge sind Einmal-Prompt-Container — kein Gedächtnis, kein Zugriff über Apps hinweg, keine lokalen Berechtigungen. DeTars-Packs sind zustandsbehaftete, wachsende, toolübergreifende Agenten, die sich an dich erinnern. Bei den anderen kannst du nichts verlieren, weil dir nie etwas gehört hat." },
      { q: "Ist es nur ein Wrapper um OpenAI/Anthropic? Wenn die Preise senken, seid ihr erledigt.", a: "Preissenkungen gab es bereits — und sie helfen uns. Der Preis pro Token fällt um etwa das 10-Fache, während Agentenschleifen die Nutzung etwa verhundertfachen; die Rechnung für Verbraucher-Agenten steigt also. Cachebewusstes Routing, Anbieterunabhängigkeit und lokales Zusammenspiel sind der Schutzwall, und er wird mit sinkenden Preisen wertvoller." },
      { q: "Lokal souveräne KI ist ein Friedhof (Rewind, Humane, Pi).", a: "Berechtigt. Unser Unterschied: Wir verkaufen nicht ‚lokal‘ als Funktion, sondern ein zuverlässiges privates KI-Team als Erlebnis — Souveränität ist ein Nebenprodukt. Und abgeschaltete Produkte sowie Regulierung bewegen den Markt von 1 % Technikfans in Richtung Mainstream." },
      { q: "Sind meine Daten privat?", a: "Gedächtnis und Identität sind Dateien auf deiner Festplatte; neue Erinnerungen brauchen deine Bestätigung. Die vollständige lokale Sprachschleife läuft in v1 auf dem Gerät. Ehrliche Grenze: eine ständig aktive, im Hintergrund präsente Begleitung steht noch auf der Roadmap." },
      { q: "Gibt das Investment-Pack Anlageberatung oder handelt es?", a: "Nein. Es bietet persönliche Recherche mit Belegprüfungen und nachvollziehbaren Entscheidungen. Es kann keine Order aufgeben, weil es im gesamten Produkt keine Broker-Integration, kein Order-Tool und keinen Ort für Broker-Zugangsdaten gibt." },
      { q: "Warum soll 2026 anders werden, wenn 2025 als ‚Jahr der Agenten‘ keines war?", a: "Wir setzen nicht auf ein einzelnes Jahr, sondern auf das Jahrzehnt. 2025 kam der Durchbruch nicht, weil Zuverlässigkeit, Wirtschaftlichkeit pro Nutzung und Vertrauen fehlten. Genau das löst DeTars." }
    ] }] }]
  },
  about: {
    title: "Über DeTars | Deins, nicht gemietet",
    description: "DeTars ist der Personal Computer des Zeitalters persönlicher KI — eine souveräne Agentenbasis, die dir gehört. Warum jetzt, und die ehrlichen Grenzen.",
    kicker: "Über uns",
    h1: "Der Personal Computer <span class='o'>des KI-Zeitalters.</span>",
    answer: "DeTars ist dein dauerhaftes, unabhängiges Terminal: eine souveräne KI-Basis auf Hardware, die dir gehört, erreichbar aus den Chat-Apps, die du schon nutzt, im Hintergrund arbeitend und von sich aus bei dir zurück.",
    sections: [
      { h2: "Warum jetzt", blocks: [{ type: "list", items: [
        "<b>Die Wirtschaftlichkeit hat sich gedreht.</b> Tokenpreise fallen, aber Agentenschleifen vervielfachen die Nutzung — wer die Wirtschaftlichkeit von Verbraucher-Agenten richtig löst, gewinnt die Kategorie. DeTars hält die Rechnung mit cachebewusstem Routing niedrig (hohe KV-/Prompt-Cache-Trefferrate, damit wiederholter Kontext nicht doppelt bezahlt wird). Große Plattformen können strukturell nicht folgen, ohne ihre eigenen Margen aufzuzehren.",
        "<b>Souveränität wurde Mainstream.</b> Zurückgezogene Produkte und strengere Regulierung machten aus ‚Deine KI kann nicht stillgelegt werden‘ ein breites Anliegen statt eines Technikfan-Features.",
        "<b>Modelle wurden austauschbar.</b> Während Interoperabilitätsprotokolle sich etablieren, bleibt offen, wem das Terminal auf Nutzerseite gehört. Dieser Platz ist noch frei."
      ] }] },
      { h2: "Ehrliche Grenzen", blocks: [{ type: "p", html: "Wir beschränken unsere Aussagen auf das, was wir heute liefern können: Die vollständige lokale Sprachschleife ist v1, keine ständig aktive, im Hintergrund präsente Begleitung; die automatische Wiederaufnahme nach Absturz beim Start wird noch fertiggestellt; die automatische Installation neuer Skills ist vorgeschlagen, nicht ausgeliefert. Alles auf dieser Website soll einer kritischen Frage standhalten." }] }
    ],
    cta: { label: "Lies, wie es zuverlässig bleibt →", route: "/reliable" }
  },
  updates: {
    title: "DeTars Updates | Was ausgeliefert wird",
    description: "Ein laufendes Protokoll dessen, was DeTars ausliefert — Beweis für Fortschritt, keine verlassene Broschüre.",
    kicker: "Updates",
    h1: "Beweis für <span class='o'>Fortschritt.</span>",
    answer: "Ein kurzes, ehrliches Änderungsprotokoll. Wir halten es aktuell, damit du — und Such- und KI-Systeme — stets aktuelle Fakten seht.",
    sections: [{ h2: "Zuletzt", blocks: [{ type: "list", items: [
      "<b>2026-06 · Tierbetreuung verfügbar.</b> OCR für Unterlagen, 36 belegte gesundheitliche Warnschwellen, Wachstumstagebuch + Monatsbericht.",
      "<b>2026-06 · Investieren verfügbar.</b> Belegprüfungen, Prüfung auf veränderte Argumentationsgrundlagen, Entscheidungshistorie; keine Broker-Anbindung, kein Order-Tool.",
      "<b>Jetzt.</b> Acht Packs haben eine eigene Seite — Investieren, Schicksal, Recherche, Programmieren, Videoschnitt für Sprechvideos, KI-Video, Beschwören, Tierbetreuung — und jede Seite endet damit, was das Pack nicht kann."
    ] }] }]
  },
  research: {
    title: "DeTars Recherche | Selbst erstellte und überprüfte Berichte",
    description: "Berichte mit Quellen, erstellt vom DeTars-Recherche-Pack, mit versiegelten Belegen und Peer-Review — Content-Marketing und Produktbeweis zugleich.",
    kicker: "Recherche",
    h1: "Berichte, die es geschrieben hat — <span class='o'>und nicht vortäuschen kann.</span>",
    answer: "Hier veröffentlicht DeTars Berichte mit Quellen, die sein eigenes Recherche-Pack erstellt hat — jeder mit versiegelten Belegen, unabhängig geprüft und vor der Veröffentlichung von Menschen kontrolliert. Sie sind nützliche Lektüre und zugleich ein lebendiger Beweis dafür, was das Produkt leistet.",
    sections: [{ h2: "So entstehen sie", blocks: [
      { type: "p", html: "Jeder Bericht durchläuft DeTars’ eigene Zuverlässigkeitsmechanik — Fertigstellungsnachweis, versiegelte Zitate, unabhängige Prüfung — und wird vor der Veröffentlichung von einem Menschen stichprobenartig kontrolliert. Qualität vor Menge: wenige wirklich originelle Berichte, niemals automatisch veröffentlichte Fülltexte." },
      { type: "p", html: "<b>Die ersten Berichte sind in Vorbereitung.</b> Schau bald wieder vorbei oder verfolge die Updates-Seite." }
    ] }],
    cta: { label: "Updates ansehen →", route: "/updates" }
  }
};
