import type { HomeCopy } from "@/lib/home-copy";

export const homeFr: HomeCopy = {
  metaTitle: "DeTars | Une IA pour tout le monde ? Celle-ci est pour vous.",
  metaDescription: "Une équipe IA entière, au service d'une seule personne : vous. Chef de cabinet, assistant, directeur, réalisateur — tous de votre côté.",
  heroEyebrow: "Votre équipe IA personnelle",
  heroH1: "Une IA pour tout le monde ?<br><span class='grad'>Celle-ci est pour vous.</span>",
  heroSub: "Une équipe IA entière, au service d'une seule personne : vous.<br>Un chef de cabinet pour coordonner, un assistant pour discuter, un directeur pour mener votre quotidien, un réalisateur pour vos vidéos — tous veulent votre réussite et votre bonheur.",
  heroPrimary: "Commencer par un objectif →",
  heroSecondary: "Voyez-la travailler pour vous",
  futureKicker: "L’avenir que nous construisons",
  futureH2: "Plus sur votre appareil.<br>Plus de possibilités pour vous.",
  futureP: "Nous avons entraîné notre propre modèle de confidentialité, et il tourne sur votre appareil : avec la Confidentialité auto activée, noms, numéros de téléphone, pièces d'identité et autres données sensibles sont remplacés par des marqueurs sur votre machine avant d'atteindre un modèle cloud, puis restaurés localement au retour des résultats. Un modèle local fait aussi du vrai travail sur votre appareil — et il gagne en puissance à mesure que les modèles progressent. À mesure que la puissance de calcul devient plus accessible, nous travaillons à un DeTars qui en fait davantage sur votre propre appareil, où l'IA locale et le cloud font chacun ce qu'ils font de mieux, avec votre vie privée au cœur de tout.",
  futureViz: { device: "Votre appareil", privacy: "Modèle de confidentialité · anonymise sur votre machine", local: "Modèle local · fait le travail, de plus en plus fort", cloud: "Modèles cloud · ceux que vous choisissez", wire: "seuls les marqueurs sortent ⟦PERSON_1⟧" },
  proof: [
    { n: "Des jours", l: "une tâche peut durer des jours · les projets avancent" },
    { n: "Tous", l: "les grands modèles · à changer quand vous voulez" },
    { n: "Votre appareil", l: "Un chez-soi pour votre équipe IA" }
  ],
  verify: "· Tout ce qui est affirmé ici se vérifie sur votre propre machine — pas de la rhétorique de slide",
  hookKicker: "Pourquoi maintenant",
  hookH2: "Le modèle d'aujourd'hui : un stagiaire brillant mais <span class='o'>peu fiable</span>.",
  hookP:
    "Éblouissant par éclairs — mais il oublie, simule l'achèvement, et plante à mi-chemin. Personne ne confie du vrai travail à quelque chose de peu fiable. <b>DeTars en fait une équipe à qui vous confiez les vraies choses.</b>",
  liveKicker: "Vivre avec",
  liveH2: "Vous envoyez une ligne. <span class='o'>Elle revient, le travail fini.</span>",
  steps: [
    { st: "Une entrée, d'où vous voulez", sd: "Telegram / Slack / Feishu — une ligne ou une photo (WeChat : texte seul)" },
    { st: "Elle tourne en arrière-plan", sd: "Une tâche peut tourner des jours ; les projets au long cours avancent et vous rendent compte" },
    { st: "Elle revient vers vous", sd: "<b>Elle vit pour vous — pas l'inverse.</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "Chef de cabinet",
      via: "Slack",
      meta: "chef de cabinet · veille sur chaque tâche",
      input: "Garde un œil sur ces projets. Regroupe tout ce qui a besoin de moi.",
      work: "suit 4 tâches · synchronise les dépendances · vérifie les livrables",
      result: "<b>Le point du jour</b><br>✓ Rapport de recherche livré, sources vérifiées<br>⟳ Court métrage en 2e version, prévu ce soir<br>⚑ Revue d'investissement : 1 décision vous attend",
      story: "Plus vous menez de projets, plus il est épuisant de tout suivre. <b>Votre chef de cabinet coordonne toute l'équipe</b> : il transmet les nouvelles demandes, démêle les dépendances, vérifie ce qui revient — et ne vous apporte que les résultats et les décisions qui vous reviennent vraiment. Les autres IA attendent qu'on les sollicite ; celle-ci garde la vue d'ensemble pour vous."
    },
    {
      av: "💬",
      pack: "Assistant Chat",
      via: "Telegram",
      meta: "chat · se souvient de vos notes et de vos décisions",
      input: "Pourquoi on n'a pas pris ce fournisseur la dernière fois ?",
      work: "fouille vos notes et votre historique · instantané",
      result: "Leur livraison de mars a pris deux semaines de retard, et vous aviez noté « ne pas renouveler » — voici la note.<br>Voulez-vous que 20 experts achats, juridique et finance cherchent des alternatives avec vous ?",
      story: "<b>Il vit directement dans Telegram ou Slack</b> — aucune appli de plus à ouvrir. Il répond vite, et il se souvient de vous : vos notes, vos projets, les décisions que vous avez prises. Envie d'autres regards ? Faites venir des experts de l'Agent Marketplace, <b>des centaines de rôles</b>, pour réfléchir avec vous. Pour tout ce qui est plus gros, il passe le relais à l'équipe."
    },
    {
      av: "🔍",
      pack: "Recherche",
      via: "Telegram",
      meta: "pack: research · chaque affirmation sourcée",
      input: "Un ami dit qu'Anthropic entre en Bourse. L'IA, c'est une bulle ?",
      work: "lit le S-1 lui-même · recoupe roadshow et prévisions",
      result: "✓ Un rapport de recherche éclairant :<br><b>la demande est réelle ; la rentabilité n'est pas encore au rendez-vous</b>",
      story: "D'une phrase entendue au vol, elle remonte la piste jusqu'au prospectus, au roadshow et aux chiffres bruts, expose les preuves et les désaccords, et vous rend un rapport que vous pouvez interroger source par source. <b>Celui-ci a vraiment été fait ainsi</b> — lisez-le :",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "Lire : l'IPO d'Anthropic et la bulle de l'IA (en anglais) →" }
    },
    {
      av: "☾",
      pack: "Invocation",
      via: "DeTars",
      meta: "pack: summon · figé au moment que vous choisissez",
      input: "Monsieur de Voltaire, mon chef me demande d'être plus optimiste. Un conseil ?",
      work: "Voltaire · Ferney, 1764",
      result: "« Optimiste ? J'ai écrit tout un livre pour rire de ceux qui jurent que tout va pour le mieux. Soyez lucide plutôt, c'est moins fatigant. Et si votre chef insiste, faites comme moi : installez-vous près d'une frontière — puis cultivez votre jardin. »",
      story: "Faites venir à vous un personnage de roman — ou de l'Histoire. <b>Il reste au moment que vous choisissez</b>, avec son passé, sa voix et son caractère. Aujourd'hui, croisez le fer de l'esprit avec Voltaire ; demain, parlez des temps difficiles avec Victor Hugo en exil.",
      link: { href: "/fr/packs/summon", label: "Découvrir Invocation →" }
    },
    {
      av: "✷",
      pack: "Destinée",
      via: "DeTars",
      meta: "pack: destiny · l'observatoire",
      input: "J'hésite à changer de travail. Tu me tires trois cartes ?",
      work: "mélange · passé / présent / futur",
      result: "Huit d'Épées → Cavalier de Bâtons → L'Étoile<br>La cage qui vous retient est surtout la vôtre. Listez les vrais compromis, puis avancez.",
      story: "Dites où vous en êtes. Avec les cartes, les thèmes astraux et les symboles, elle vous aide à mettre des mots sur la confusion, puis ramène l'intuition dans la vraie vie. <b>Touchez une carte dans l'observatoire pour continuer à interroger le même tirage.</b>",
      link: { href: "/fr/packs/destiny", label: "Visiter l'observatoire →" },
      tarot: [{ pos: "Passé", name: "Huit d'Épées" }, { pos: "Présent", name: "Cavalier de Bâtons" }, { pos: "Futur", name: "L'Étoile" }]
    },
    {
      av: "▶",
      pack: "Vidéo IA",
      via: "Telegram",
      meta: "pack: ai-video · budget confirmé avant de générer",
      input: "Fais un film de 15 secondes : mon chat part à l'aventure dans l'espace",
      work: "propose deux directions visuelles · plan par plan",
      result: "✓ Deux directions au choix : <b>science-fiction rétro</b> / <b>conte dessiné à la main</b><br>Choisissez-en une : rendu plan par plan, livré en MP4",
      story: "L'image que vous avez en tête : le réalisateur vous propose d'abord des directions visuelles nettement différentes, et <b>vous ne dépensez rien avant d'avoir choisi</b>. « Garde cette ambiance », « même personnage, autre geste » — une ligne, et c'est modifié.",
      link: { href: "/fr/packs/ai-video", label: "Voir Vidéo IA →" }
    },
    {
      av: "◈",
      pack: "Investissement",
      via: "Slack",
      meta: "pack: equity · aucun courtier, aucun outil d'ordre",
      input: "Quelqu'un m'a parlé d'une action — j'ai demandé en passant",
      work: "décortique votre thèse · surveille les preuves",
      result: "🔔 Revenue d'elle-même : les résultats changent votre raison n° 2. On en parle ?",
      story: "Vos raisons, les contre-arguments et les points de contrôle, au même endroit. <b>Quand une nouvelle tombe, elle demande d'abord : laquelle de vos raisons cela change-t-il ?</b> Elle vous aide à y voir clair et ne touche jamais à votre compte.",
      link: { href: "/fr/packs/investing", label: "Voir Investissement →" }
    },
    {
      av: "▦",
      pack: "Atelier de données",
      via: "Slack",
      meta: "pack: data-studio",
      input: "(dépose un tableau de ventes) Où la marge a-t-elle le plus chuté cette année ?",
      work: "vérifie champs et définitions · découpe par région et par produit",
      result: "✓ Région Est · gamme matériel −18 %<br>Tableau de bord prêt — cliquez sur une région pour demander pourquoi",
      story: "Déposez un tableur, posez une question, recevez un tableau de bord cliquable. <b>De la vue d'ensemble au détail, du chiffre à la raison</b> — l'analyse avance comme une conversation.",
      link: { href: "/fr/packs/data-studio", label: "Voir Atelier de données →" }
    },
    {
      av: "⌘",
      pack: "Code",
      via: "Slack",
      meta: "pack: coding",
      input: "Aide-moi à comprendre le flux de connexion de ce projet. Qu'est-ce qui mérite le plus d'être corrigé ?",
      work: "repère les fichiers clés · trace les appels",
      result: "✓ Le parcours de connexion couvre 3 fichiers<br>La correction qui en vaut le plus la peine, et ce qu'elle touche",
      story: "Une énorme base de code inconnue ? <b>Elle comprend avant de toucher à quoi que ce soit</b> : trouve les fichiers clés, suit définitions et appels, explique l'impact et les options — puis modifie et vérifie avec vous.",
      link: { href: "/fr/packs/coding", label: "Voir Code →" }
    },
    {
      av: "🎙️",
      pack: "Montage face caméra",
      via: "Telegram",
      meta: "pack: talking-head · votre vraie voix conservée",
      input: "J'ai filmé une prise face caméra en déplacement — sur l'évolution des coûts",
      work: "coupe les redites · corrige les sous-titres · crée des cartes de données",
      result: "✓ Aperçu complet prêt, votre voix conservée, chiffres clés en cartes de données",
      story: "Vous avez quelque chose à dire ; vous ne devriez pas perdre trois jours au montage. <b>Elle restructure le propos, corrige les sous-titres, ajoute des graphiques</b> — vous n'avez qu'à pointer : « cette pause est trop longue », « cette phrase compte ».",
      link: { href: "/fr/packs/talking-head", label: "Voir Montage face caméra →" }
    }
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
      h3: "Votre IA, avec la vie privée au cœur",
      story: "Le stockage local ne signifie pas que chaque tâche fonctionne hors ligne : lorsque vous utilisez un modèle cloud, les données pertinentes de la tâche sont envoyées à son fournisseur. <b>Notre direction : davantage de travail sur votre appareil, avec une IA locale et cloud qui coopèrent.</b>",
      head: "local + cloud",
      lab: "Sur l’appareil",
      body: [
        "<span class='dim'>DeTars</span>",
        "Tâches cloud → données pertinentes envoyées",
        "Notre direction → plus de capacités locales"
      ],
      foot: "<b>Notre direction :</b> plus de capacités locales, pas la promesse que toutes les tâches fonctionnent hors ligne."
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
  bombCap: "lignes de code · dont la moitié écrite par DeTars lui-même",
  bombH2: "<span class='o'>DeTars a été construit avec DeTars.</span>",
  bombP: "Plus de 3,4 millions de lignes de code — et <b>la moitié écrite par DeTars lui-même</b>. Peu de tâches que vous lui confierez seront plus difficiles que de se construire soi-même. <b>C'est une application, et c'est le sol sur lequel vous bâtissez</b> : les connaissances, méthodes et résultats que vous accumulez ici restent à vous, quel que soit le modèle qui l'emporte l'an prochain.",
  closeH2: "DeTars est votre terminal tiers permanent.<br><span class='grad'>L’IA de votre côté.</span>",
  closeP: "Pour vous aider à concrétiser vos projets et à mieux vivre.<br>Une équipe d’IA personnelle qui travaille en arrière-plan, reçoit vos consignes via vos applications de chat habituelles et assure le suivi avec vous.",
  closePrimary: "Possédez-la sur votre machine →",
  closeSecondary: "Voir des cas réels"
};
