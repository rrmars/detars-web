import type { HomeCopy } from "@/lib/home-copy";

export const homeFr: HomeCopy = {
  metaTitle: "DeTars | L'IA qui s'est écrite elle-même",
  metaDescription:
    "DeTars est une équipe d'IA privée qui vous appartient : elle raisonne, tourne pendant des heures, se relève après une panne, ne peut pas simuler une tâche finie, et vit sur votre machine. Ses 1,17 million de lignes ont été écrites par son propre moteur.",
  heroEyebrow: "Votre IA personnelle qui abat du vrai travail",
  heroH1: "Elle <span class='grad'>s'est écrite elle-même.</span>",
  heroSub:
    "Les <b>1,17 million de lignes</b> de DeTars — qui tournent sur votre propre machine — ont été écrites par son propre moteur. Une IA peu fiable ne peut pas bâtir une copie fonctionnelle d'elle-même. <b>C'est pour ça que vous pouvez lui confier du vrai travail.</b>",
  heroPrimary: "Commencer →",
  heroSecondary: "Voyez-la travailler pour vous",
  proof: [
    { n: "1,170,000", l: "lignes · écrites par elle-même" },
    { n: "~50", l: "modèles de pointe · à changer quand vous voulez" },
    { n: "100%", l: "la mémoire reste sur votre disque" }
  ],
  verify: "· Chaque chiffre ici se compte dans le code source — pas de la rhétorique de slide",
  hookKicker: "Pourquoi maintenant",
  hookH2: "Le modèle d'aujourd'hui : un stagiaire brillant mais <span class='o'>peu fiable</span>.",
  hookP:
    "Éblouissant par éclairs — mais il oublie, simule l'achèvement, et plante à mi-chemin. Personne ne confie du vrai travail à quelque chose de peu fiable. <b>DeTars en fait une équipe à qui vous confiez les vraies choses.</b>",
  liveKicker: "Vivre avec",
  liveH2: "Lancez-lui une ligne. <span class='o'>Elle fait le reste pour vous.</span>",
  steps: [
    { st: "Une entrée, d'où vous voulez", sd: "Feishu / Slack / Telegram / WeChat — une ligne ou une photo" },
    { st: "Elle tourne en arrière-plan", sd: "Des heures, voire toute la nuit — vous n'avez pas à la surveiller" },
    { st: "Elle revient vers vous", sd: "<b>Elle vit pour vous — pas l'inverse.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "Pet Care", via: "Telegram", meta: "pack: pet-care", input: "Une photo de mon chien, prise et envoyée comme ça", work: "montage · rédaction des légendes", result: "✓ Vidéo courte et marrante + légendes sociales prêtes" },
    { av: "💡", pack: "Investing", via: "Slack", meta: "pack: equity · verrouillé par le code, aucun ordre", input: "Un tuyau boursier glissé en passant, juste une question", work: "suivi · vérification des preuves", result: "🔔 Revenue : mouvement inhabituel — on en parle ?" },
    { av: "🎙️", pack: "Voiceover", via: "Feishu", meta: "pack: talking-head", input: "Un plan face caméra filmé sur le pouce", work: "montage auto · sous-titres", result: "✓ Montage final exporté — votre vraie voix conservée" },
    { av: "🔍", pack: "Research", via: "WeChat", meta: "pack: research", input: "Un truc intéressant entendu, lancé en une ligne", work: "creuse pendant des heures · recoupe", result: "✓ Rapport sourcé + suivi continu" }
  ],
  phoneFoot: "Un seul motif : entrée → tourne en arrière-plan → revient",
  corridorKicker: "Pourquoi vous pouvez lui faire confiance",
  scenes: [
    {
      idx: "01",
      h3: "Elle pense par elle-même",
      story:
        "Donnez-lui un objectif — &lsquo;étudier trois concurrents ce trimestre, livrer un rapport sourcé.&rsquo; Elle décompose le travail, mobilise des spécialistes, suit leur avancement et vous rend une ébauche finie. <b>Le comment est raisonné sur le moment, pas un script figé d'avance.</b>",
      head: "orchestrator.log",
      lab: "live",
      body: [
        "<span class='hl'>plan</span> objectif → 3 sous-tâches",
        "<span class='ok'>↳</span> agent A · dépôts",
        "<span class='ok'>↳</span> agent B · actualités",
        "<span class='ok'>↳</span> agent C · recoupement",
        "<span class='dim'>pause · attente A/B → fusion</span>"
      ],
      foot: "<b>Du concret :</b> elle forme des équipes, répartit le travail, met en pause et reprend — elle tourne vraiment, sans faux-semblant."
    },
    {
      idx: "02",
      h3: "Elle ne s'effondre pas",
      story:
        "Le vrai travail tourne pendant des heures : réseaux capricieux, quotas, portables en veille. La plupart des outils perdent des heures sur un seul accroc. DeTars traite l'incident comme un fait — temporise, réessaie, continue ; redémarrez-la et elle reprend. <b>Laissez-la tourner la nuit ; consultez les résultats au matin.</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>429</span> quota atteint → temporisation",
        "<span class='ok'>✓ rétablie, reprise étape 7</span>",
        "<span class='dim'>veille</span> point de reprise enregistré",
        "<span class='ok'>✓ reprise depuis le point de reprise</span>"
      ],
      foot: "<b>Du concret :</b> les erreurs sont des faits à contourner, pas une mort subite."
    },
    {
      idx: "03",
      h3: "Elle ne peut pas faire semblant",
      story:
        "Le pire tour de l'IA : jurer que c'est &lsquo;terminé&rsquo; alors que non ; citer une source qui n'a jamais existé. DeTars fait de &lsquo;terminé&rsquo; un <b>reçu qu'elle doit honorer</b> — livré ou non, étayé par des preuves ou non. Chaque citation est scellée ; changez un seul caractère et elle est aussitôt invalidée.",
      head: "completion.receipt",
      lab: "verified",
      body: [
        "livrable .......... <span class='ok'>✓ présent</span>",
        "chaîne de preuves . <span class='ok'>✓ complète</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "revue par les pairs <span class='ok'>✓ signée</span>",
        "<span class='hl'>citation modifiée → <span class='dim'>rejetée</span></span>"
      ],
      foot: "<b>Du concret :</b> &lsquo;terminé&rsquo; est un reçu vérifiable, pas une impression."
    },
    {
      idx: "04",
      h3: "Elle est à vous — et personne ne peut vous la prendre",
      story:
        "Elle vit sur votre propre machine et vous apprend au fil du temps. Mais tout ce qu'elle retient de vous <b>passe d'abord par votre accord</b> ; cette mémoire est un fichier sur votre disque, pas un compte sur le serveur d'un tiers. Personne ne peut la bloquer d'un simple avis, comme Rewind ou Humane l'ont fait.",
      head: "~/detars/memory",
      lab: "local",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "nouvelle mémoire → <span class='hl'>en attente de votre accord</span>",
        "<span class='ok'>✓ fonctionne hors ligne · rien d'envoyé</span>"
      ],
      foot: "<b>Du concret :</b> mémoire et identité sont des fichiers sur votre disque — la souveraineté est inscrite dans l'architecture."
    },
    {
      idx: "05",
      h3: "Elle évolue d'elle-même",
      story:
        "Elle traque ses propres bugs pour en faire une couverture de non-régression permanente, réorganise sa propre mémoire et — quand une tâche réclame une capacité qui lui manque — génère, installe et gère ses propres Tools et Skills. <b>Chaque version est plus dure à battre que la précédente.</b>",
      head: "evolution.log",
      lab: "auto",
      body: [
        "<span class='hl'>régression</span> +1 cas scellé",
        "<span class='ok'>↳</span> mémoire réindexée",
        "<span class='hl'>skill</span> requis : pdf-extract",
        "<span class='ok'>↳ généré · installé · ✓</span>",
        "<span class='dim'>chaque version plus dure à casser</span>"
      ],
      foot: "<b>Du concret :</b> une fiabilité qui se cumule — et de nouvelles capacités qu'elle se forge seule."
    },
    {
      idx: "06",
      h3: "Elle ne flambe pas votre budget",
      story:
        "Les longues tâches sans surveillance riment d'ordinaire avec factures énormes. DeTars route les requêtes pour garder le KV / prompt cache du modèle chaud, afin de ne pas payer deux fois le contexte répété — <b>bien moins de tokens par tâche, et de moins en moins cher à mesure que les prix des modèles baissent.</b> Laissez-la tourner toute la nuit sans guetter le compteur.",
      head: "routing.cache",
      lab: "live",
      body: [
        "<span class='dim'>contexte</span> 184k tokens",
        "<span class='ok'>↳ prompt cache · hit</span>",
        "facturé → nouveaux tokens seulement",
        "<span class='dim'>contexte répété : non refacturé</span>"
      ],
      foot: "<b>Du concret :</b> un routage conscient du cache — moins de tokens facturés, pas de facture qui s'emballe."
    }
  ],
  bombCap: "lignes de code fonctionnel · écrites par son propre moteur",
  bombH2: "On ne dit pas seulement qu'elle sait faire du travail dur — <span class='o'>elle s'est produite elle-même.</span>",
  bombP:
    "Une IA peu fiable ne peut pas écrire 1,17 M de lignes de code fonctionnel. Le produit lui-même est la preuve ultime de ce dont il est capable — et le chiffre se compte dans le code source, sur-le-champ.",
  closeH2: "DeTars est votre terminal tiers permanent.<br><span class='grad'>Le vôtre, pas loué.</span>",
  closeP: "Une équipe d'IA privée qui vous appartient — toujours active, pilotable depuis n'importe quelle fenêtre de chat, et qui revient vers vous d'elle-même.",
  closePrimary: "Possédez-la sur votre machine →",
  closeSecondary: "Lire l'histoire technique"
};
