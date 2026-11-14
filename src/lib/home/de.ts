import type { HomeCopy } from "@/lib/home-copy";

export const homeDe: HomeCopy = {
  metaTitle: "DeTars | KI für alle? Diese ist für dich.",
  metaDescription: "Ein ganzes KI-Team, das für einen einzigen Menschen arbeitet: dich. Stabschef, Assistent, Director und Filmemacher — alle auf deiner Seite.",
  heroEyebrow: "Dein persönliches KI-Team",
  heroH1: "KI für alle?<br><span class='grad'>Diese ist für dich.</span>",
  heroSub: "Ein ganzes KI-Team, das für einen einzigen Menschen arbeitet: dich.<br>Ein Stabschef, der koordiniert, ein Assistent zum Reden, ein Director für deinen Arbeitsalltag, ein Filmemacher für deine Videos — alle wollen, dass du erfolgreich und glücklich bist.",
  heroPrimary: "Mit einem Ziel anfangen →",
  heroSecondary: "Sieh, wie er für dich arbeitet",
  futureKicker: "Die Zukunft, an der wir arbeiten",
  futureH2: "Mehr auf deinem Gerät.<br>Mehr Möglichkeiten für dich.",
  futureP: "Wir haben unser eigenes Datenschutzmodell trainiert, und es läuft auf deinem Gerät: Mit aktiviertem Auto-Datenschutz werden Namen, Telefonnummern, Ausweisnummern und andere sensible Angaben auf deinem Rechner durch Platzhalter ersetzt, bevor etwas ein Cloud-Modell erreicht — und lokal wiederhergestellt, sobald die Ergebnisse zurückkommen. Ein lokales Modell erledigt außerdem echte Arbeit auf deinem Gerät und wird mit jedem Fortschritt der Modelle stärker. Während Rechenleistung zugänglicher wird, arbeiten wir auf ein DeTars hin, das mehr auf deinem eigenen Gerät erledigt — lokale und Cloud-Intelligenz tun jeweils, was sie am besten können, und deine Privatsphäre steht im Mittelpunkt.",
  futureViz: { device: "Dein Gerät", privacy: "Datenschutzmodell · anonymisiert auf deinem Rechner", local: "Lokales Modell · erledigt die Arbeit, wird stärker", cloud: "Cloud-Modelle · welche du willst", wire: "nur Platzhalter gehen raus ⟦PERSON_1⟧" },
  proof: [
    { n: "Tage", l: "eine Aufgabe kann tagelang laufen · Projekte gehen weiter" },
    { n: "Alle", l: "großen Modelle · jederzeit wechseln" },
    { n: "Dein Gerät", l: "Ein Zuhause für dein KI-Team" }
  ],
  verify: "· Jede Aussage hier kannst du auf deinem eigenen Rechner überprüfen — keine Präsentationsrhetorik",
  hookKicker: "Warum jetzt",
  hookH2: "Das heutige Modell ist ein brillanter, aber <span class='o'>unzuverlässiger</span> Praktikant.",
  hookP: "Es glänzt in einzelnen Momenten — vergisst aber Dinge, täuscht Fertigstellung vor und stürzt auf halbem Weg ab. Niemand vertraut etwas Unzuverlässigem echte Arbeit an. <b>DeTars macht daraus ein Team, dem du echte Aufgaben anvertraust.</b>",
  liveKicker: "Im Alltag",
  liveH2: "Du schickst eine Zeile. <span class='o'>Es kommt mit fertiger Arbeit zurück.</span>",
  steps: [
    { st: "Eingaben von überall", sd: "Telegram / Slack / Feishu — eine Zeile oder ein Foto (WeChat: nur Text)" },
    { st: "Es arbeitet im Hintergrund", sd: "Eine Aufgabe kann tagelang laufen; langfristige Projekte gehen weiter und melden sich mit Updates" },
    { st: "Es meldet sich bei dir", sd: "<b>Es ist für dich da — nicht umgekehrt.</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "Stabschef",
      via: "Slack",
      meta: "Stabschef · behält jede Aufgabe im Blick",
      input: "Behalt diese Projekte für mich im Auge. Sammle alles, was mich braucht.",
      work: "betreut 4 Aufgaben · gleicht Abhängigkeiten ab · prüft Ergebnisse",
      result: "<b>Die Übersicht für heute</b><br>✓ Recherchebericht geliefert, Quellen geprüft<br>⟳ Kurzfilm in Schnittfassung 2, fertig heute Abend<br>⚑ Investment-Review: 1 Entscheidung liegt bei dir",
      story: "Je mehr Projekte du am Laufen hast, desto anstrengender wird es, den Überblick zu behalten. <b>Dein Stabschef koordiniert das ganze Team</b>: gibt neue Wünsche weiter, klärt Abhängigkeiten, prüft, was zurückkommt — und bringt dir nur die Ergebnisse und die Entscheidungen, die wirklich deine sind. Andere KIs warten, bis man sie fragt; diese behält für dich das große Ganze im Blick."
    },
    {
      av: "💬",
      pack: "Chat-Assistent",
      via: "Telegram",
      meta: "Chat · kennt deine Notizen und früheren Entscheidungen",
      input: "Warum haben wir uns letztes Mal gegen diesen Lieferanten entschieden?",
      work: "durchsucht deine Notizen und den Verlauf · sofort",
      result: "Die Lieferung im März kam zwei Wochen zu spät, und du hast „nicht verlängern“ notiert — hier ist die Notiz.<br>Sollen 20 Fachleute aus Einkauf, Recht und Finanzen mit dir Alternativen durchspielen?",
      story: "<b>Er wohnt direkt in Telegram oder Slack</b> — keine zusätzliche App nötig. Er antwortet schnell und erinnert sich an dich: deine Notizen, deine Projekte, deine Entscheidungen. Lust auf andere Blickwinkel? Hol dir Fachleute aus dem Agent Marketplace dazu, <b>Hunderte Rollen</b>, für ein Brainstorming mit dir. Alles Größere gibt er ans Team weiter."
    },
    {
      av: "🔍",
      pack: "Recherche",
      via: "Telegram",
      meta: "pack: research · jede Aussage mit Quelle",
      input: "Ein Freund sagt, Anthropic geht an die Börse. Ist KI eine Blase?",
      work: "liest den S-1 selbst · gleicht Roadshow und Prognosen ab",
      result: "✓ Ein aufschlussreicher Recherchebericht:<br><b>Die Nachfrage ist echt; die Rendite lässt noch auf sich warten</b>",
      story: "Aus einem Satz, den du nebenbei aufgeschnappt hast, folgt es der Spur bis zum Börsenprospekt, zur Roadshow und zu den Rohdaten, legt Belege und Streitpunkte offen und liefert einen Bericht, den du Quelle für Quelle hinterfragen kannst. <b>Dieser hier ist wirklich so entstanden</b> — lies selbst:",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "Lesen: Anthropics Börsengang und die KI-Blase (auf Englisch) →" }
    },
    {
      av: "☾",
      pack: "Beschwören",
      via: "DeTars",
      meta: "pack: summon · festgehalten im Moment deiner Wahl",
      input: "Herr Geheimrat, ich werde mit nichts fertig. Wie haben Sie den Faust je beendet?",
      work: "Johann Wolfgang von Goethe · Weimar, 1831",
      result: "„Beendet? Sechzig Jahre habe ich daran geschrieben, und den zweiten Teil ließ ich versiegeln, damit mir keiner mehr hineinredet. Fertig wird nichts, junger Freund — man hört nur zur rechten Zeit auf. Und nun gehen Sie spazieren; das klärt mehr als jeder Schreibtisch.“",
      story: "Hol dir jemanden aus einer Geschichte — oder aus der Geschichte — direkt zu dir. <b>Er bleibt in dem Moment, den du wählst</b>, mit seiner Vergangenheit, seiner Stimme und seinem Temperament. Heute sprichst du mit Goethe übers Fertigwerden, morgen mit Beethoven über schwere Zeiten.",
      link: { href: "/de/packs/summon", label: "Beschwören entdecken →" }
    },
    {
      av: "✷",
      pack: "Schicksal",
      via: "DeTars",
      meta: "pack: destiny · das Observatorium",
      input: "Ich hadere mit einem Jobwechsel. Ziehst du mir drei Karten?",
      work: "mischt · Vergangenheit / Gegenwart / Zukunft",
      result: "Schwerter Acht → Ritter der Stäbe → Der Stern<br>Der Käfig, der dich festhält, ist vor allem dein eigener. Schreib die echten Abwägungen auf, dann geh los.",
      story: "Sag, wo du gerade stehst. Mit Karten, Horoskopen und Symbolen hilft es dir, die Verwirrung in Worte zu fassen, und bringt die Einsicht zurück ins echte Leben. <b>Tippe im Observatorium auf eine Karte, um in derselben Legung weiterzufragen.</b>",
      link: { href: "/de/packs/destiny", label: "Zum Observatorium →" },
      tarot: [{ pos: "Vergangenheit", name: "Schwerter Acht" }, { pos: "Gegenwart", name: "Ritter der Stäbe" }, { pos: "Zukunft", name: "Der Stern" }]
    },
    {
      av: "▶",
      pack: "KI-Video",
      via: "Telegram",
      meta: "pack: ai-video · Budget vor dem Generieren bestätigt",
      input: "Mach ein 15-Sekunden-Weltraumabenteuer mit meiner Katze in der Hauptrolle",
      work: "entwirft zwei visuelle Richtungen · Einstellung für Einstellung",
      result: "✓ Zwei Richtungen zur Wahl: <b>Retro-Sci-Fi</b> / <b>handgezeichnetes Märchen</b><br>Wähl eine, dann wird Einstellung für Einstellung gerendert und als MP4 geliefert",
      story: "Das Bild in deinem Kopf: Der Regisseur schlägt zuerst deutlich unterschiedliche visuelle Richtungen vor, und <b>du gibst erst Geld aus, wenn du dich entschieden hast</b>. „Behalt diese Stimmung“, „gleiche Figur, neue Bewegung“ — eine Zeile, und es ist geändert.",
      link: { href: "/de/packs/ai-video", label: "KI-Video ansehen →" }
    },
    {
      av: "◈",
      pack: "Investieren",
      via: "Slack",
      meta: "pack: equity · kein Broker, kein Order-Tool",
      input: "Jemand hat eine Aktie erwähnt — ich hab nebenbei gefragt",
      work: "zerlegt deine These · beobachtet die Belege",
      result: "🔔 Meldet sich von selbst: Die Quartalszahlen ändern deinen Grund Nr. 2. Reden wir?",
      story: "Deine Gründe, die Gegenargumente und die Prüfpunkte an einem Ort. <b>Wenn Neuigkeiten kommen, fragt es zuerst: Welchen deiner Gründe ändert das?</b> Es hilft dir, klar zu denken, und rührt dein Konto nie an.",
      link: { href: "/de/packs/investing", label: "Investieren ansehen →" }
    },
    {
      av: "▦",
      pack: "Data Studio",
      via: "Slack",
      meta: "pack: data-studio",
      input: "(zieht eine Verkaufstabelle rein) Wo ist die Marge dieses Jahr am stärksten gefallen?",
      work: "prüft Felder und Definitionen · schlüsselt nach Region und Produkt auf",
      result: "✓ Region Ost · Hardware-Sparte −18 %<br>Dashboard fertig — klick auf eine Region und frag nach dem Warum",
      story: "Tabelle reinziehen, eine Frage stellen, ein klickbares Dashboard zurückbekommen. <b>Vom Überblick ins Detail, von der Zahl zum Grund</b> — die Analyse läuft wie ein Gespräch.",
      link: { href: "/de/packs/data-studio", label: "Data Studio ansehen →" }
    },
    {
      av: "⌘",
      pack: "Programmieren",
      via: "Slack",
      meta: "pack: coding",
      input: "Hilf mir, den Login-Ablauf dieses Projekts zu verstehen. Wo lohnt sich ein Fix am meisten?",
      work: "findet Schlüsseldateien · verfolgt Aufrufe",
      result: "✓ Der Login-Pfad erstreckt sich über 3 Dateien<br>Der Fix, der sich am meisten lohnt, und was er berührt",
      story: "Eine riesige, fremde Codebasis? <b>Es versteht, bevor es irgendetwas anfasst</b>: findet die Schlüsseldateien, verfolgt Definitionen und Aufrufe, erklärt Auswirkungen und Optionen — und ändert und prüft dann gemeinsam mit dir.",
      link: { href: "/de/packs/coding", label: "Programmieren ansehen →" }
    },
    {
      av: "🎙️",
      pack: "Sprechvideo-Schnitt",
      via: "Telegram",
      meta: "pack: talking-head · deine echte Stimme bleibt",
      input: "Unterwegs ein Sprechvideo gedreht — es geht um die Kostenentwicklung",
      work: "kürzt Wiederholungen · korrigiert Untertitel · baut Datenkarten",
      result: "✓ Komplette Vorschau fertig: deine Stimme bleibt, Kennzahlen als Datenkarten",
      story: "Du hast etwas zu sagen; dafür solltest du nicht drei Tage im Schnitt verlieren. <b>Es ordnet die Erzählung, korrigiert Untertitel, fügt Diagramme hinzu</b> — du zeigst nur: „Diese Pause ist zu lang“, „dieser Satz ist wichtig“.",
      link: { href: "/de/packs/talking-head", label: "Sprechvideo-Schnitt ansehen →" }
    }
  ],
  phoneFoot: "Ein Muster: Eingabe → Arbeit im Hintergrund → Rückmeldung",
  corridorKicker: "Warum du ihm vertrauen kannst",
  scenes: [
    {
      idx: "01",
      h3: "Es denkt selbstständig",
      story: "Gib ihm ein Ziel — &lsquo;Untersuche drei Wettbewerber in diesem Quartal und liefere einen Bericht mit Quellen.&rsquo; Es zerlegt die Arbeit, holt Spezialisten dazu, verfolgt ihren Fortschritt und liefert einen fertigen Entwurf. <b>Das Wie wird vor Ort durchdacht, nicht durch ein fest verdrahtetes Skript vorgegeben.</b>",
      head: "orchestrator.log",
      lab: "live",
      body: [
        "<span class='hl'>Plan</span> Ziel → 3 Teilaufgaben",
        "<span class='ok'>↳</span> Agent A · Unternehmensberichte",
        "<span class='ok'>↳</span> Agent B · Nachrichten",
        "<span class='ok'>↳</span> Agent C · Gegenprüfung",
        "<span class='dim'>Pause · auf A/B warten → zusammenführen</span>"
      ],
      foot: "<b>Tatsächlich:</b> Es bildet Teams, verteilt Arbeit, pausiert und setzt fort — es läuft wirklich, nichts ist vorgetäuscht."
    },
    {
      idx: "02",
      h3: "Es wirft nicht gleich hin",
      story: "Echte Arbeit läuft stundenlang: instabile Netze, Ratenlimits, schlafende Laptops. Bei den meisten Tools macht ein einziger Aussetzer Stunden zunichte. DeTars behandelt Probleme als Tatsache — warten, erneut versuchen, weitermachen; nach einem Neustart setzt es fort. <b>Lass es über Nacht laufen und schau morgens nach den Ergebnissen.</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>429</span> Ratenlimit erreicht → Wartezeit",
        "<span class='ok'>✓ wiederhergestellt, weiter mit Schritt 7</span>",
        "<span class='dim'>Ruhezustand</span> Zwischenstand gespeichert",
        "<span class='ok'>✓ vom Zwischenstand fortgesetzt</span>"
      ],
      foot: "<b>Tatsächlich:</b> Fehler sind Tatsachen, mit denen es umgeht, kein sofortiges Aus."
    },
    {
      idx: "03",
      h3: "Es kann nichts vortäuschen",
      story: "Der schlimmste KI-Trick: zu schwören, etwas sei &lsquo;fertig&rsquo;, obwohl es das nicht ist; eine Quelle zu zitieren, die nie existiert hat. DeTars macht &lsquo;fertig&rsquo; zu einem <b>Nachweis, den es einlösen muss</b> — geliefert oder nicht, belegt oder nicht. Jedes Zitat ist versiegelt; ein geändertes Zeichen macht es sofort ungültig.",
      head: "completion.receipt",
      lab: "geprüft",
      body: [
        "Ergebnis .......... <span class='ok'>✓ vorhanden</span>",
        "Belegkette ........ <span class='ok'>✓ vollständig</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "Peer-Review ....... <span class='ok'>✓ bestätigt</span>",
        "<span class='hl'>Zitat verändert → <span class='dim'>abgelehnt</span></span>"
      ],
      foot: "<b>Tatsächlich:</b> &lsquo;Fertig&rsquo; ist ein überprüfbarer Nachweis, kein Gefühl."
    },
    {
      idx: "04",
      h3: "Deine KI, mit Privatsphäre im Mittelpunkt",
      story: "Lokale Speicherung bedeutet nicht, dass jede Aufgabe offline bleibt: Wenn du ein Cloud-Modell nutzt, werden relevante Aufgabeneingaben an dessen Anbieter gesendet. <b>Unser Ziel ist mehr Arbeit auf deinem eigenen Gerät, mit lokaler und cloudbasierter Intelligenz im Zusammenspiel.</b>",
      head: "lokal + Cloud",
      lab: "Auf dem Gerät",
      body: [
        "<span class='dim'>DeTars</span>",
        "Cloud-Aufgaben → relevante Eingaben werden gesendet",
        "Unser Ziel → mehr lokale Fähigkeiten"
      ],
      foot: "<b>Unser Ziel:</b> mehr lokale Fähigkeiten, kein Versprechen, dass jede Aufgabe offline läuft."
    },
    {
      idx: "05",
      h3: "Es entwickelt sich selbst weiter",
      story: "Es überführt eigene Bugs in dauerhafte Regressionstests, ordnet sein Gedächtnis neu und — wenn einer Aufgabe eine Fähigkeit fehlt — erzeugt, installiert und verwaltet es eigene Tools und Skills. <b>Jede Version ist schwerer zu schlagen als die letzte.</b>",
      head: "evolution.log",
      lab: "automatisch",
      body: [
        "<span class='hl'>Regression</span> +1 Fall versiegelt",
        "<span class='ok'>↳</span> Gedächtnis neu indiziert",
        "<span class='hl'>Skill</span> benötigt: pdf-extract",
        "<span class='ok'>↳ erzeugt · installiert · ✓</span>",
        "<span class='dim'>jede Version schwerer aus dem Tritt zu bringen</span>"
      ],
      foot: "<b>Tatsächlich:</b> Zuverlässigkeit, die sich aufbaut — und neue Fähigkeiten, die es selbst entwickelt."
    },
    {
      idx: "06",
      h3: "Es verbrennt nicht dein Budget",
      story: "Lange unbeaufsichtigte Aufgaben bedeuten meist hohe Rechnungen. DeTars hält durch sein Routing den KV- / Prompt-Cache des Modells warm, damit wiederholter Kontext nicht doppelt bezahlt wird — <b>viel weniger Tokens pro Aufgabe, und günstiger, wenn Modellpreise fallen.</b> Lass es die ganze Nacht laufen, ohne auf den Zähler zu schauen.",
      head: "routing.cache",
      lab: "live",
      body: [
        "<span class='dim'>Kontext</span> 184k Tokens",
        "<span class='ok'>↳ Prompt-Cache · Treffer</span>",
        "abgerechnet → nur neue Tokens",
        "<span class='dim'>wiederholter Kontext: nicht erneut berechnet</span>"
      ],
      foot: "<b>Tatsächlich:</b> cachebewusstes Routing — weniger berechnete Tokens, keine ausufernden Rechnungen."
    }
  ],
  bombCap: "Zeilen Code · die Hälfte von DeTars selbst geschrieben",
  bombH2: "<span class='o'>DeTars wurde mit DeTars gebaut.</span>",
  bombP: "Über 3,4 Millionen Zeilen Code — und <b>die Hälfte davon hat DeTars selbst geschrieben</b>. Kaum eine Aufgabe, die du ihm gibst, ist schwieriger, als sich selbst zu bauen. <b>Es ist eine App und das Fundament, auf dem du baust</b>: Wissen, Methoden und Ergebnisse, die du hier sammelst, bleiben deine — egal, welches Modell nächstes Jahr gewinnt.",
  closeH2: "DeTars ist dein dauerhaftes, unabhängiges Terminal.<br><span class='grad'>KI auf deiner Seite.</span>",
  closeP: "Damit du Dinge schaffst und besser lebst.<br>Ein persönliches KI-Team, das im Hintergrund arbeitet, Anweisungen über deine gewohnten Chat-Apps entgegennimmt und sich von selbst bei dir meldet.",
  closePrimary: "Hol es auf deinen eigenen Rechner →",
  closeSecondary: "Echte Anwendungsfälle ansehen"
};
