import type { HomeCopy } from "@/lib/home-copy";

export const homeDe: HomeCopy = {
  metaTitle: "DeTars | KI für alle? Diese ist für dich.",
  metaDescription: "Deine Ziele, deine Projekte, dein Alltag. Ein KI-Partner, der dir hilft, sie voranzubringen.",
  heroEyebrow: "Dein persönlicher KI-Partner",
  heroH1: "KI für alle?<br><span class='grad'>Diese ist für dich.</span>",
  heroSub: "Deine Ziele, deine Projekte, dein Alltag.<br>Ein KI-Partner, der dir hilft, sie voranzubringen.",
  heroPrimary: "Mit einem Ziel anfangen →",
  heroSecondary: "Sieh, wie er für dich arbeitet",
  futureKicker: "Die Zukunft, an der wir arbeiten",
  futureH2: "Mehr auf deinem Gerät.<br>Mehr Möglichkeiten für dich.",
  futureP: "Während Modelle leistungsfähiger werden und Rechenleistung zugänglicher wird, arbeiten wir auf ein DeTars hin, das mehr auf deinem eigenen Gerät erledigen kann — mit lokaler und cloudbasierter Intelligenz, die zusammenarbeiten, und deiner Privatsphäre im Mittelpunkt.",
  proof: [
    { n: "Stunden", l: "arbeitet unbeaufsichtigt · auch über Nacht" },
    { n: "Alle", l: "großen Modelle · jederzeit wechseln" },
    { n: "Dein Gerät", l: "Ein Zuhause für deinen KI-Partner" }
  ],
  verify: "· Jede Aussage hier kannst du auf deinem eigenen Rechner überprüfen — keine Präsentationsrhetorik",
  hookKicker: "Warum jetzt",
  hookH2: "Das heutige Modell ist ein brillanter, aber <span class='o'>unzuverlässiger</span> Praktikant.",
  hookP: "Es glänzt in einzelnen Momenten — vergisst aber Dinge, täuscht Fertigstellung vor und stürzt auf halbem Weg ab. Niemand vertraut etwas Unzuverlässigem echte Arbeit an. <b>DeTars macht daraus ein Team, dem du echte Aufgaben anvertraust.</b>",
  liveKicker: "Im Alltag",
  liveH2: "Du schickst eine Zeile. <span class='o'>Es kommt mit fertiger Arbeit zurück.</span>",
  steps: [
    { st: "Eingaben von überall", sd: "Telegram / Slack / Feishu — eine Zeile oder ein Foto (WeChat: nur Text)" },
    { st: "Es arbeitet im Hintergrund", sd: "Stundenlang, auch die ganze Nacht — du musst nicht daneben sitzen" },
    { st: "Es meldet sich bei dir", sd: "<b>Es ist für dich da — nicht umgekehrt.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "Tierbetreuung", via: "Telegram", meta: "pack: pet-care", input: "Ein Foto von meinem Hund gemacht und rübergeschickt", work: "schneidet · schreibt Bildunterschriften", result: "✓ Lustiges Kurzvideo + Texte für Social Media fertig" },
    { av: "💡", pack: "Investieren", via: "Slack", meta: "pack: equity · kein Broker, kein Order-Tool", input: "Einen Aktientipp gehört und nebenbei nachgefragt", work: "beobachtet · prüft Belege", result: "🔔 Meldet sich: ungewöhnliche Bewegung — reden wir darüber?" },
    { av: "🎙️", pack: "Sprachvideo", via: "Feishu", meta: "pack: talking-head", input: "Unterwegs einen Clip direkt in die Kamera aufgenommen", work: "schneidet automatisch · erstellt Untertitel", result: "✓ Fertiger Schnitt exportiert — deine echte Stimme bleibt" },
    { av: "🔍", pack: "Recherche", via: "WeChat", meta: "pack: research", input: "Etwas Interessantes gehört, eine Zeile geschickt", work: "recherchiert stundenlang · gleicht Quellen ab", result: "✓ Bericht mit Quellen + laufende Beobachtung" }
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
  bombCap: "Zeilen Code · in sechs Monaten geschrieben",
  bombH2: "Wir sagen nicht nur, dass es anspruchsvolle Arbeit schafft — <span class='o'>es hat sich selbst hervorgebracht.</span>",
  bombP: "Mehrere Millionen Zeilen Code, und <b>die Hälfte davon hat das Produkt selbst geschrieben</b>. <b>Es ist Anwendung und Fundament zugleich.</b> Was du dieses Jahr darauf aufbaust, wird nicht nächstes Jahr abgeschrieben, weil ein anderes Unternehmen gewonnen hat.",
  closeH2: "DeTars ist dein dauerhaftes, unabhängiges Terminal.<br><span class='grad'>KI auf deiner Seite.</span>",
  closeP: "Damit du Dinge schaffst und besser lebst.<br>Ein persönliches KI-Team, das im Hintergrund arbeitet, Anweisungen über deine gewohnten Chat-Apps entgegennimmt und sich von selbst bei dir meldet.",
  closePrimary: "Hol es auf deinen eigenen Rechner →",
  closeSecondary: "Die technische Geschichte lesen"
};
