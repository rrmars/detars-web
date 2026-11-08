import { mailto, type Href } from "@/lib/legal";
import type { PageContent } from "@/lib/pages";
import { withLocale } from "@/lib/site";

// Translation of legal.en.ts privacy only; the source policy date is unchanged.
// No localized cross-links occur in the source privacy body. Keep the Href contract
// for integration alongside the other legal-page factories.
export function privacyDe(_href: Href): PageContent {
  return {
    title: "Datenschutzerklärung | DeTars",
    description: "Welche personenbezogenen Daten DeTars verarbeitet, warum, wer bei der Verarbeitung hilft und wie du darauf zugreifen oder sie löschen kannst. Deine Gespräche bleiben auf deinem Gerät, und wir verkaufen keine personenbezogenen Daten.",
    kicker: "Rechtliches",
    h1: "Datenschutzerklärung",
    doc: true,
    updated: "Zuletzt aktualisiert: 2. Oktober 2026",
    notice: `Diese Seite ist eine deutsche Übersetzung der <a href="${withLocale("en", "/privacy")}" hreflang="en">englischen Fassung</a>. Bei Abweichungen ist die englische Fassung maßgeblich.`,
    answer: "Die DeTars-App speichert deine Gespräche und dein Gedächtnis auf deinem eigenen Gerät. Für den Betrieb von Konten, Credits und offiziellen Modellen verarbeiten wir begrenzte personenbezogene Daten: Kontodaten, Geräteschlüssel, Nutzungsaufzeichnungen und Bestelldaten. Wir speichern die Inhalte deiner Prompts oder Antworten nicht in unseren Datenbanken und verkaufen keine personenbezogenen Daten.",
    sections: [
      {
        h2: "1. Wer wir sind",
        blocks: [{ type: "p", html: `DeTars (‚DeTars‘, ‚wir‘ oder ‚uns‘) ist für die in dieser Datenschutzerklärung beschriebenen personenbezogenen Daten verantwortlich. Diese Erklärung gilt für die DeTars-App, DeTars-Konten, DeTars-Credits, den Dienst für offizielle Modelle und diese Website (zusammen die ‚Dienste‘). Du erreichst uns unter ${mailto}.` }]
      },
      {
        h2: "2. Daten, die auf deinem Gerät bleiben",
        id: "local",
        blocks: [
          { type: "p", html: "Die DeTars-App läuft auf deinem Computer. Deine Gespräche, das von der App aufgebaute Gedächtnis und die Dateien, mit denen sie arbeitet, werden auf deiner eigenen Festplatte gespeichert. Neue Erinnerungen erfordern vor dem Speichern deine Bestätigung. Du kannst sie jederzeit von deinem Gerät löschen." },
          { type: "p", html: "Zwei Arten von Daten verlassen dein Gerät. Wenn die App eine Anfrage an ein KI-Modell sendet, wird der Inhalt dieser Anfrage an den Modellanbieter gesendet (siehe Abschnitt 4). Wenn du über eine Chat-App wie Telegram, Slack, Feishu oder WeChat mit DeTars kommunizierst, durchlaufen diese Nachrichten den Dienst dieser App und unterliegen deren eigener Datenschutzerklärung." }
        ]
      },
      {
        h2: "3. Daten, die wir auf unseren Servern verarbeiten",
        id: "data",
        blocks: [
          { type: "list", items: [
            "<b>Kontodaten</b> aus der Google-Anmeldung: deine E-Mail-Adresse, dein Name und deine Kontokennung.",
            "<b>Gerätedaten:</b> eine Gerätekennung und der öffentliche Schlüssel des Geräts, mit denen geprüft wird, dass Anfragen von deinem Gerät signiert wurden, sowie grundlegende Angaben, die die App bei der Geräteregistrierung meldet (etwa Gerätename, Betriebssystem und Version sowie Prozessortyp).",
            "<b>Nutzungsaufzeichnungen</b> für die offiziellen Modelle: Zeitstempel, Modell, Tokenzahlen und berechnete Credits jeder Anfrage.",
            "<b>Bestell- und Zahlungsdaten:</b> Bestell-ID, Paket, Betrag und Status. Wir erhalten oder speichern niemals deine vollständige Kartennummer. Die Zahlungsbenachrichtigungen von Paddle, die wir mit der Bestellung aufbewahren, können begrenzte Angaben enthalten, etwa Kartentyp, letzte vier Ziffern und Ablaufdatum der Karte sowie Name des Karteninhabers.",
            "<b>Support-Kommunikation:</b> E-Mails, die du uns schickst, und unsere Antworten."
          ] },
          { type: "p", html: "Wir verwenden diese Daten, um dein Konto bereitzustellen, Geräte zu überprüfen, die offiziellen Modelle zu betreiben und abzurechnen, Bestellungen und Erstattungen zu bearbeiten, Betrug und Missbrauch zu verhindern sowie Support-Anfragen zu beantworten." }
        ]
      },
      {
        h2: "4. Deine Prompts und Antworten",
        id: "content",
        blocks: [
          { type: "p", html: "<b>Wenn du die offiziellen Modelle von DeTars nutzt, speichern wir die Inhalte deiner Prompts oder Antworten nicht in unseren Datenbanken.</b> Sie durchlaufen unser Gateway zu OpenRouter und dem zugrunde liegenden Modellanbieter, um die Antwort zu erzeugen, gemäß den Richtlinien dieser Anbieter." },
          { type: "p", html: "Wie die meisten Onlinedienste führen wir Betriebs- und Sicherheitsprotokolle, um die Dienste zu betreiben, abzusichern und Fehler zu beheben. Diese Protokolle können beiläufig begrenzte Teile von Anfrage- oder Antwortdaten enthalten, etwa wenn ein Anbieter einen Fehler zurückgibt. Wir bewahren Protokolle nur so lange auf, wie es für diese Zwecke erforderlich ist." },
          { type: "p", html: "Damit OpenRouter Missbrauch verhindern kann, senden wir eine aus deinem Konto abgeleitete pseudonyme Kennung, niemals deine E-Mail-Adresse oder deinen Namen." },
          { type: "p", html: "Wenn du stattdessen eigene API-Schlüssel nutzt, gehen deine Anfragen an den von dir konfigurierten Anbieter, gemäß deiner Vereinbarung mit ihm. Diese Anfragen verwenden weder DeTars-Credits noch unser Gateway für offizielle Modelle." }
        ]
      },
      {
        h2: "5. Zahlungen",
        blocks: [{ type: "p", html: "Paddle ist der Merchant of Record für DeTars-Credits. Paddle erhebt beim Bezahlvorgang deine Zahlungsangaben, E-Mail-Adresse und Rechnungsinformationen und verarbeitet sie nach seiner eigenen Datenschutzerklärung. Wir teilen Paddle über eine interne Konto-ID mit, zu welchem DeTars-Konto eine Bestellung gehört. Paddle benachrichtigt uns, wenn eine Bestellung bezahlt, erstattet oder zurückgebucht wird." }]
      },
      {
        h2: "6. Diese Website",
        id: "website",
        blocks: [{ type: "p", html: "Diese Website verwendet keine Analysedienste und keine Tracking-Cookies. Sie wird auf GitHub Pages gehostet, das technische Daten wie deine IP-Adresse protokollieren kann, um die Website bereitzustellen und zu schützen. Seiten laden Schriftarten von Google Fonts, sodass dein Browser diese von Google-Servern anfordert. Die Bezahlseite unter <code>/pay</code> lädt den Paddle-Checkout, der eigene Cookies setzt." }]
      },
      {
        h2: "7. Dienstleister und Offenlegungen",
        id: "processors",
        intro: "Wir nutzen die folgenden Dienstleister zum Betrieb der Dienste. Wir geben personenbezogene Daten nur an sie weiter, soweit dies für die Bereitstellung der Dienste erforderlich ist, vorbehaltlich ihrer Bedingungen und Datenschutzverpflichtungen.",
        blocks: [
          { type: "list", items: [
            "<b>Cloudflare:</b> Hosting und Infrastruktur für unsere Server, unser Gateway und unsere Datenbanken.",
            "<b>Auth0 (Okta):</b> Anmeldung.",
            "<b>Google:</b> Anmeldung.",
            "<b>Paddle:</b> Zahlungen als Merchant of Record.",
            "<b>OpenRouter und die Modellanbieter, an die es weiterleitet:</b> Erzeugung von Antworten der offiziellen Modelle.",
            "<b>GitHub Pages:</b> Hosting dieser Website."
          ] },
          { type: "p", html: "Diese Anbieter können personenbezogene Daten in anderen Ländern als deinem eigenen verarbeiten, einschließlich der Vereinigten Staaten. Wir können personenbezogene Daten auch offenlegen, wenn dies gesetzlich vorgeschrieben ist oder um DeTars und seine Nutzer vor Betrug oder Missbrauch zu schützen." }
        ]
      },
      {
        h2: "8. Rechtsgrundlagen",
        id: "legal-bases",
        intro: "Wenn die DSGVO oder die britische DSGVO (UK GDPR) für dich gilt, stützen wir die Verarbeitung deiner personenbezogenen Daten auf folgende Rechtsgrundlagen:",
        blocks: [{ type: "list", items: [
          "<b>Erfüllung unseres Vertrags mit dir:</b> um dein Konto, deine Credits und die offiziellen Modelle bereitzustellen.",
          "<b>Berechtigte Interessen:</b> um die Dienste abzusichern, Betrug und Missbrauch zu verhindern und die Dienste mithilfe von Betriebsdaten, nicht deiner Gespräche, zu verbessern.",
          "<b>Rechtliche Verpflichtungen:</b> um Steuer- und Buchhaltungsunterlagen aufzubewahren.",
          "<b>Einwilligung:</b> wenn wir darum bitten. Du kannst deine Einwilligung jederzeit widerrufen."
        ] }]
      },
      {
        h2: "9. Aufbewahrung von Daten",
        blocks: [{ type: "list", items: [
          "Konto- und Gerätedaten: solange dein Konto besteht.",
          "Bestell- und Zahlungsdaten: solange es Steuer- und Buchhaltungsrecht erfordern.",
          "Nutzungsaufzeichnungen: solange wir sie für Abrechnung und Support benötigen.",
          "Betriebs- und Sicherheitsprotokolle: nur so lange, wie es zum Betrieb, zur Absicherung und zur Fehlerbehebung der Dienste erforderlich ist."
        ] }]
      },
      {
        h2: "10. Deine Rechte",
        id: "rights",
        blocks: [{ type: "p", html: `Je nach deinem Wohnort geben dir Gesetze wie die DSGVO, die UK GDPR und der CCPA Rechte in Bezug auf deine personenbezogenen Daten. Dazu gehören das Recht auf Auskunft, Berichtigung oder Löschung, auf eine Kopie der Daten sowie auf Widerspruch gegen die Verarbeitung oder deren Einschränkung. Um diese Rechte auszuüben, schreibe an ${mailto}, möglichst von der Adresse, mit der du dich anmeldest. Möglicherweise müssen wir deine Identität überprüfen; wir antworten innerhalb der gesetzlich vorgeschriebenen Frist. Wird dein Konto gelöscht, bewahren wir Bestelldaten weiterhin so lange auf, wie gesetzlich erforderlich. Du hast außerdem das Recht, dich bei deiner örtlichen Datenschutzaufsichtsbehörde zu beschweren.` }]
      },
      {
        h2: "11. Kein Verkauf personenbezogener Daten",
        blocks: [{ type: "p", html: "Wir verkaufen keine personenbezogenen Daten und geben keine personenbezogenen Daten zu Werbezwecken weiter." }]
      },
      {
        h2: "12. Kinder",
        blocks: [{ type: "p", html: `Die Dienste sind für Personen ab 16 Jahren bestimmt und richten sich nicht an Kinder. Wenn du glaubst, dass ein Kind uns personenbezogene Daten gegeben hat, kontaktiere bitte ${mailto}; wir werden sie löschen.` }]
      },
      {
        h2: "13. Sicherheit",
        blocks: [{ type: "p", html: "Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten ein. Verbindungen zu unseren Diensten sind verschlüsselt, jedes Gerät weist seine Identität mit einem eigenen Schlüssel nach, und der Zugriff auf unsere Systeme ist beschränkt. Dennoch ist keine Übertragungs- oder Speichermethode vollständig sicher. Soweit gesetzlich vorgeschrieben, benachrichtigen wir dich über eine Verletzung des Schutzes personenbezogener Daten, die dich betrifft." }]
      },
      {
        h2: "14. Änderungen dieser Erklärung",
        blocks: [{ type: "p", html: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir veröffentlichen die aktualisierte Erklärung auf dieser Seite mit einem neuen Datum oben. Bei wesentlichen Änderungen benachrichtigen wir dich auf angemessenem Weg, etwa per E-Mail oder in der App." }]
      },
      {
        h2: "15. Kontakt",
        blocks: [{ type: "p", html: `Fragen zu dieser Datenschutzerklärung oder unserem Umgang mit personenbezogenen Daten kannst du an ${mailto} richten.` }]
      }
    ]
  };
}
