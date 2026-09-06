// Pack copy en français. Traduction de copy.en.ts, qui reste la source de
// vérité pour les faits ; quand un chiffre ou une limite change, on le change
// là-bas d’abord.
import type { PacksCopy } from "@/lib/packs/types";

export const packsFr: PacksCopy = {
  index: {
    metaTitle: "DeTars Packs | Des experts verticaux sur un moteur qui vous appartient",
    metaDescription:
      "Les packs sont des applis verticales entières, sur le même moteur fiable et la même mémoire qui vous appartient — investissement, destinée, recherche, programmation, montage face caméra, vidéo IA, personnages invoqués, soins animaliers.",
    kicker: "Un app store d’experts",
    h1: "Un seul moteur fiable. <span class='o'>Beaucoup d’experts.</span>",
    answer:
      "Un pack est une appli verticale entière — ses propres outils, sa propre discipline de travail, son propre établi — qui tourne sur le moteur capable de maintenir en vie un long travail sans surveillance, et sur une mémoire qui reste sur votre disque. Le moteur est la partie difficile, et il est déjà construit ; c’est pourquoi un nouveau pack se fait en quelques semaines, pas en un an. Plus vous utilisez de packs, plus la mémoire qu’ils partagent tous s’épaissit.",
    gridH2: "Ce qu’il y a dans le store",
    gridIntro: "Ici, le statut est une promesse, pas une humeur. La page de chaque pack se termine par ce que ce pack ne sait pas faire.",
    moatsH2: "Deux choses qui se cumulent",
    moats: [
      "<b>Il vous apprend, et la mémoire est partagée.</b> Chaque tâche finie se dépose dans une mémoire que vous avez approuvée, stockée sous forme de fichiers sur votre disque et réutilisée d’un pack à l’autre. Quand un travail réclame une capacité qui lui manque, il en écrit une et l’installe. Quitter la plateforme, c’est laisser tout cela derrière soi.",
      "<b>Elle est à vous, donc personne ne peut l’éteindre.</b> Mémoire et identité sont des fichiers sur votre machine, pas des lignes dans le compte de quelqu’un d’autre. Personne ne peut la transformer en brique d’un simple avis, comme Rewind et Humane ont été éteints."
    ],
    familyH2: "Aussi dans la famille",
    familyIntro: "Livrés ou en construction, sans page à eux pour l’instant.",
    family: [
      {
        title: "Livre audio",
        body: "Un EPUB ou un fichier texte en entrée ; en sortie, une distribution de personnages, chacun lié à une voix, rendue par une synthèse vocale qui tourne en local sur votre machine et exportée en m4b chapitré. Les repères de chapitre viennent de la structure propre du livre, jamais d’un modèle. La sortie en chinois sur puce Apple est un problème ouvert connu, et nous n’allons pas prétendre l’avoir dépassé."
      },
      {
        title: "Data Studio",
        body: "Déposez un tableur. Il écrit lui-même le SQL et le Python contre une base de données locale, et les graphiques sont compilés à partir d’un mappage colonne-vers-canal plutôt que d’une spécification inventée par le modèle. Exactement une action s’arrête pour demander votre permission : une instruction destructrice contre une base de données distante. La lecture, et tout ce qu’il fait à une copie locale, il le fait sans s’arrêter."
      },
      {
        title: "Publication sociale",
        body: "Vous vous connectez vous-même, dans une vraie fenêtre de navigateur — le modèle ne reçoit jamais de jeton de session. Ensuite, confiez-lui un fichier à publier et récupérez un reçu portant l’URL du post. Onze plateformes ont des adaptateurs de publication implémentés ; ils n’ont pas encore été éprouvés face aux réseaux réels, et c’est donc le mot que nous employons."
      }
    ],
    ctaLabel: "Télécharger DeTars →"
  },

  ui: {
    statusLabels: { live: "En ligne", polishing: "En ligne · en convergence", new: "Nouveau" },
    backLabel: "Tous les packs",
    sendLabel: "Vous lui donnez",
    getLabel: "Il vous rend",
    insideH2: "Ce qu’il y a vraiment dedans",
    proofH2: "Pourquoi vous pouvez y croire",
    honestH2: "Où il s’arrête",
    honestIntro: "Les limites que nous voudrions connaître si c’était nous qui le téléchargions.",
    ctaLabel: "Télécharger DeTars →",
    nextLabel: "Pack suivant",
    homeKicker: "Le store",
    homeH2: "Un seul moteur. <span class='o'>Un magasin d’experts.</span>",
    homeP:
      "Un compagnon d’investissement qui tient une thèse pendant des trimestres, pas des minutes. Une lecture de destinée calculée plutôt qu’improvisée. Une recherche qui continue de descendre le fil. Un dépôt d’un million de lignes qu’il comprend avant d’y toucher. Un montage qui commence par la recherche finie de quelqu’un. Chacun est une appli entière — et tous partagent la mémoire posée sur votre disque.",
    homeCta: "Regarder dans les packs →"
  },

  packs: {
    equity: {
      name: "Investissement",
      tagline: "Tient une thèse pendant des trimestres — et applique les règles que vous vous êtes données",
      metaTitle: "Pack Investissement | Il reste tout le cycle, et vous tient à vos propres règles",
      metaDescription:
        "Les grandes occasions mettent des trimestres à pousser. DeTars garde le fil sur le radar, étend le graphe aux fournisseurs, aux secteurs, à la politique et au macro, et bloque toute décision qui enfreint une règle que vous avez écrite.",
      h1: "N’importe qui peut vous livrer une analyse. <span class='o'>Personne ne reste tout le cycle.</span>",
      answer:
        "Les grandes occasions n’arrivent jamais un beau matin. Une technologie sort du labo, une politique atterrit, une chaîne d’approvisionnement se détourne — cela pousse sur des trimestres, et quelque part au milieu vous oubliez, vous doutez, vous abandonnez au pire moment possible. Lui garde le fil sur le radar pour vous : des preuves qui s’accumulent avec leur source attachée, un graphe qui s’étend d’une entreprise à ce dont elle dépend et à ce qui dépend d’elle, le macro et la politique qui atterrissent sur ce même graphe. Et les règles que vous avez écrites sur votre façon d’investir sont devant lui à chaque tour, sans exception.",
      stats: [
        { n: "Des trimestres", l: "la durée pendant laquelle il tiendra une seule thèse" },
        { n: "Amont · aval", l: "le graphe va d’une entreprise à toute une chaîne" },
        { n: "3 choix", l: "ce qu’il propose quand une décision enfreint une règle que vous avez posée" }
      ],
      chips: ["Une thèse tenue des trimestres", "Vos propres règles, appliquées", "Chaque affirmation garde sa source"],
      youSend:
        "Une ligne depuis une messagerie — « qu’est-ce qui se passe avec 0700 ? », « je pense alléger NVDA » — ou rien du tout : le balayage hebdomadaire tourne tout seul.",
      youGet:
        "Une analyse que vous pouvez auditer : chaque affirmation porte le document, la série de prix ou l’article d’où elle vient, plus une entrée de décision avec votre raisonnement et votre contre-argument écrits noir sur blanc.",
      features: [
        {
          title: "Une occasion ne se montre pas un seul jour",
          body: "Un balayage hebdomadaire des preuves et une revue de dérive de thèse tournent tout seuls, et viennent vous voir quand quelque chose a vraiment bougé, pas tous les matins. Le titre que vous avez mentionné en passant est encore surveillé six mois plus tard."
        },
        {
          title: "D’une entreprise à toute une chaîne",
          body: "Fournisseurs, concurrents, secteurs, matières premières, régulateurs, zones géographiques et facteurs macro sont tous des nœuds de plein droit. Le graphe marche à un saut, deux sauts de ce que vous détenez et fait remonter les voisins qui méritent un coup d’œil — avec la chaîne explicitée : quelle position elle touche, par quelle relation."
        },
        {
          title: "Il colle à ce que vous avez en tête",
          body: "Les candidats qu’il soulève sont mêlés à ce à quoi vous prêtez réellement attention, appariés par le sens plutôt que par l’orthographe — si bien que la note que vous avez écrite sur 美债收益率 et le 10 ans américain qu’il vient de lire sont reconnus comme la même chose."
        },
        {
          title: "Technologie, politique et macro atterrissent sur le même graphe",
          body: "La recherche approfondie envoie d’un coup les fondamentaux, le paysage concurrentiel, les derniers documents déposés et le contexte macro, plus un travailleur dont le seul métier est de plaider le contraire, et un synthétiseur pour tout rassembler. Les dépôts SEC, les prix, les séries macro FRED, les actualités, et un sidecar pour les annonces des actions A et de Hong Kong alimentent tous la même image."
        },
        {
          title: "Vos propres règles sont appliquées, pas récitées",
          body: "Écrivez comment vous investissez — « jamais plus de 15% sur un seul titre » — et cela cesse d’être une note à vous-même. Enfreignez-en une et l’écriture est <b>bloquée</b>, avec trois choix : retirer la règle en disant pourquoi, réduire l’action, ou annuler. Une règle que vous testez encore ne peut rien bloquer ; une règle retirée reste au dossier avec la raison pour laquelle vous l’avez abandonnée."
        },
        {
          title: "Trois ans plus tard, vous pouvez encore revenir à ce jour-là",
          body: "Le journal est en ajout seul, et retirer une position laisse un enregistrement de rétractation complet. Chaque achat, vente ou rééquilibrage porte le contre-argument que vous avez dû écrire avant qu’il puisse être classé — une preuve en votre faveur pèse +0.30, une preuve contre vous −0.50, parce que celui qui est sujet au biais de confirmation, c’est vous."
        }
      ],
      proof: {
        head: "principle.gate",
        lab: "bloquée",
        body: [
          "décision ......... <span class='hl'>renfort · jusqu’à 22% du portefeuille</span>",
          "votre règle #3 ... <span class='dim'>aucune position au-delà de 15%</span>",
          "statut ........... <span class='ok'>confirmée · en vigueur</span>",
          "<span class='hl'>→ écriture bloquée</span>",
          "<span class='dim'>retirer la règle · la réduire · annuler</span>"
        ]
      },
      proofNote:
        "Vos règles confirmées sont devant lui à chaque tour, pas résumées quelque part. Quand une décision en enfreindrait une, il ne vous prévient pas pour continuer ensuite — l’écriture s’arrête, et c’est vous qui choisissez. Retirer une règle exige une raison écrite, et cette raison reste au dossier.",
      honest: [
        "<b>Il ne peut pas passer d’ordre, parce qu’il n’y a rien avec quoi en passer.</b> Il n’existe nulle part dans le produit d’intégration de courtier, aucun outil de passage d’ordre, et aucun endroit où mettre des identifiants de courtage. C’est une garantie plus forte qu’un réglage, et c’est celle que nous faisons.",
        "<b>Rien n’est jamais ajouté à votre liste de suivi sans vous.</b> Il peut faire remonter un candidat à deux sauts de là ; en faire quelque chose qu’il suit, c’est votre décision, à chaque fois.",
        "<b>L’historique des prix remonte à environ un an.</b> L’outil de prix est plafonné à 252 jours de bourse, donc les backtests sur plusieurs années ne sont pas quelque chose qu’il sait faire aujourd’hui. Le macro et les actualités réclament aussi vos propres clés d’API gratuites.",
        "<b>Rien de tout cela n’est un conseil en investissement.</b> Il organise vos preuves et votre raisonnement. La décision, et les conséquences, restent les vôtres."
      ]
    },

    metaphysics: {
      name: "Destinée",
      tagline: "紫微, 八字, 黄历, thème natal et tarot — cinq disciplines, une seule lecture",
      metaTitle: "Pack Destinée | Quelqu’un qui a vraiment étudié, pas un programme qui dit des choses agréables",
      metaDescription:
        "紫微斗数 jusqu’à six couches d’horoscope, 八字 avec 大运 et 流年, un almanach jusqu’au 时辰, un thème natal occidental et le jeu complet de 78 cartes — tout est calculé par des bibliothèques d’astronomie et de calendrier datées, puis relu comme le ferait une personne.",
      h1: "Quelqu’un qui a <span class='o'>vraiment étudié</span> — pas un programme qui dit des choses agréables.",
      answer:
        "Les douze palais du 紫微斗数 avec leurs étoiles, 三方四正, 飞星四化, six couches d’horoscope qui vont du 大限 jusqu’au 流时 ; les quatre piliers du 八字, le maître du jour, 十神, les tiges cachées, la circulation des cinq éléments, la direction et le moment du 起运 ; un almanach où le terme solaire est exact à l’instant près, où chacun des douze 时辰 a ses propres 吉凶, avec 建除, 十二神, 神煞 et 宜忌 ; l’ascendant, le milieu du ciel, les douze maisons et les aspects natals d’un thème occidental ; soixante-dix-huit cartes Rider–Waite–Smith. Rien de tout cela n’est du vocabulaire dont il aurait entendu parler. C’est un thème calculé case par case dans un processus séparé, par des bibliothèques d’astronomie et de calendrier datées. C’est seulement ensuite qu’il s’assoit et vous parle.",
      stats: [
        { n: "5", l: "disciplines · 紫微, 八字, 黄历, thème natal, tarot — lues ensemble" },
        { n: "12 palais · 6 couches", l: "jusqu’où il descend réellement dans un thème 紫微" },
        { n: "5.5%", l: "des jours-frontière que les bibliothèques populaires jugent mal · pas lui" }
      ],
      chips: ["Cinq disciplines à la fois", "Le thème est calculé", "Il se souvient de vos questions"],
      youSend:
        "Votre date et votre heure de naissance, une seule fois. Ensuite : « à quoi ressemble cette année », « est-ce une bonne semaine pour déménager », ou rien — il a sa propre carte du jour.",
      youGet:
        "Une lecture capable de désigner le palais, le pilier ou la carte sur lequel elle s’appuie, et un registre de tout ce qu’il vous a dit, pour que la réponse du mois prochain connaisse celle du mois dernier.",
      features: [
        {
          title: "紫微, jusqu’au bout",
          body: "Douze palais avec leurs étoiles, 三方四正, 飞星四化, et six couches d’horoscope — 大限, 小限, 流年, 流月, 流日, 流时 — chacune portant son propre 干支, si bien qu’un pilier du jour ne vous est jamais relu comme un pilier de l’année."
        },
        {
          title: "八字, qui bouge avec les cycles de chance",
          body: "Quatre piliers, maître du jour, 十神, tiges cachées, distribution des cinq éléments, direction et moment du 起运, les pas du 大运 et chaque 流年 — avec le 小运 listé à part au lieu d’être discrètement fondu dedans."
        },
        {
          title: "Un almanach jusqu’à un seul 时辰",
          body: "Date lunaire, 干支, l’instant exact où tourne le terme solaire, phase de lune, 建除, 十二神 avec 黄道/黑道, 神煞, 宜忌 et fêtes — plus la table complète des douze 时辰. Pour choisir une date, il vous donne des jours classés et les trois meilleures heures de chacun."
        },
        {
          title: "Le ciel occidental, et les cartes",
          body: "Ascendant, milieu du ciel, douze maisons, dix corps par signe et par maison, aspects natals ; qui est rétrograde en ce moment et l’instant exact où un aspect devient exact ; éclipses, termes solaires et ingressions dans les quatre-vingt-dix prochains jours. Le tarot puise dans le jeu complet de 78 cartes et se rejoue depuis sa graine."
        },
        {
          title: "Il est plus strict que les bibliothèques qu’il utilise",
          body: "Deux bibliothèques de calendrier chinois populaires décident de votre signe solaire à partir d’une table de dates. Face à la longitude solaire réelle, sur un corpus de 840 jours-frontière, elles divergent 5.5% du temps. Ici, chaque décision de signe passe plutôt par un seul calcul de longitude."
        },
        {
          title: "Un maître se souvient de vous",
          body: "Tout ce qu’il vous a dit est conservé dans un registre qui est le vôtre. La réponse du mois prochain sait ce que disait celle du mois dernier ; ce que vous avez mentionné il y a six mois, il peut encore le reprendre."
        }
      ],
      proof: {
        head: "finalize.gate",
        lab: "reçu",
        body: [
          "<span class='dim'>la réponse mentionne</span> 流年 · 命宫",
          "reçu <span class='ok'>✓ metaphysics.ziwei_chart</span>",
          "algorithme <span class='dim'>iztro 2.5.8 · MIT</span>",
          "calculé <span class='dim'>il y a 13 ms</span>",
          "<span class='hl'>sans reçu → la finalisation échoue</span>"
        ]
      },
      proofNote:
        "Toute réponse finale doit porter au moins un reçu de calcul frais. Une phrase sur votre thème sans rien de réellement calculé derrière n’a pas le droit d’être livrée comme réponse — et c’est là toute la différence entre une lecture et une rubrique d’horoscope.",
      honest: [
        "<b>C’est un compagnon, pas une prévision.</b> Le calcul est exact ; ce que signifie un thème est une interprétation, et il le dit au lieu de déguiser l’interprétation en arithmétique.",
        "<b>L’heure et le lieu de naissance comptent.</b> Un thème occidental a besoin de votre décalage UTC et de vos coordonnées. Les maisons Placidus n’ont de sens qu’avec une heure de naissance exacte à la minute, et c’est pourquoi le système en signes entiers est le défaut.",
        "<b>Le choix de date couvre 31 jours par question, les événements célestes 90.</b> Des horizons plus longs demandent une question de suivi plutôt qu’une réponse silencieusement tronquée.",
        "<b>Ses relances proactives n’atterrissent pas toujours dans votre boîte de réception.</b> Sur de vraies machines, la carte du jour et les relances tournent, mais ne produisent pas toujours une carte dans la boîte. C’est un manque connu que nous suivons, pas un manque que nous cachons."
      ]
    },

    "content-research": {
      name: "Recherche",
      tagline: "Texte, code source, podcasts, vidéo — tout peut devenir une preuve sourcée",
      metaTitle: "Pack Recherche | Il ne cherche pas puis n’écrit. Il continue de descendre le fil.",
      metaDescription:
        "Quatre rôles travaillent un brief. Les pages web ne sont qu’un début : du vrai code source, des post-mortems, et ce que quelqu’un a réellement dit dans un podcast ou sur la scène d’une conférence deviennent des preuves avec une citation que vous pouvez ouvrir.",
      h1: "Il ne cherche pas pour écrire ensuite. <span class='o'>Il continue de descendre le fil.</span>",
      answer:
        "Donnez-lui un sujet et quatre rôles le démontent. Les pages web et les articles ne sont qu’un début : du vrai code source, des post-mortems, et les mots que quelqu’un a réellement prononcés dans un podcast ou sur la scène d’une conférence sont récupérés, transcrits et transformés en preuves avec une citation que vous pouvez ouvrir. Chaque affirmation qu’il pose entre dans un graphe — ce qui soutient quoi, ce qui contredit quoi, ce qui repose sur une source unique. Révisez une affirmation plus tard et chaque brouillon qui la cite retombe tout seul en non vérifié.",
      stats: [
        { n: "4", l: "rôles sur votre brief · chercher, synthétiser, relire, rédiger" },
        { n: "Texte · code · audio · vidéo", l: "tout cela peut devenir une preuve sourcée" },
        { n: "2%", l: "de tolérance avant que deux chiffres comptent comme une contradiction" }
      ],
      chips: ["Conférences et podcasts font source", "Affirmations liées par un vrai raisonnement", "Recherche et transcription restent locales"],
      youSend: "Un brief. « Détermine ce qui s’est vraiment passé avec X ce trimestre, et quelle part de la couverture est recyclée. »",
      youGet:
        "Un rapport sourcé ou un script de voix off, un registre des sources, un journal des affirmations avec son historique de versions, un graphe de preuves, et des verdicts de vérification que vous pouvez ouvrir.",
      features: [
        {
          title: "Il lit plus que du texte",
          body: "Pointez-le sur une conférence ou un podcast et il récupère les sous-titres publiés en un seul appel, puis cite l’intervenant mot pour mot et référence la transcription par son empreinte. Là où il n’existe aucun sous-titre, la reconnaissance vocale peut transcrire l’audio sur votre propre machine."
        },
        {
          title: "Les affirmations sont liées par le raisonnement, pas par la proximité",
          body: "Les affirmations se relient entre elles en <i>implique</i>, <i>dépend de</i>, <i>réfute</i> — et chacune de ces arêtes est ancrée à un extrait précis. Une seconde passe juge si chaque source citée soutient vraiment l’affirmation à laquelle elle a été attachée, et marque comme non vérifié ce qu’elle ne peut pas vérifier, au lieu de le promouvoir en douce."
        },
        {
          title: "Il lit au-delà de l’extrait de recherche",
          body: "Une échelle de profondeur pour les affirmations qui portent : extrait → la page primaire → le vrai code source → les critiques et les post-mortems → les sous-titres de la conférence → refaire le calcul soi-même."
        },
        {
          title: "Les citations ont le droit de périmer",
          body: "Les brouillons citent des identifiants d’affirmation, pas des URL. Révisez une affirmation et chaque brouillon qui la cite rebascule en non vérifié. Une citation ne peut pas survivre en douce à ce qu’elle citait."
        },
        {
          title: "Les contradictions sont trouvées par le calcul",
          body: "Les conflits numériques au-delà d’une tolérance de 2% sont attrapés mécaniquement, avec conversion des unités 万/千/亿, aux côtés des divergences de catégorie et de position. Le modèle est gardé pour les cas vraiment difficiles : portée temporelle, dérive de définition, sélection arrangeante."
        },
        {
          title: "La chaîne peut rester sur votre machine",
          body: "Des sidecars locaux pour les flux, Reddit, la reconnaissance vocale, la séparation des locuteurs et la conversion de documents, plus une instance locale de méta-recherche. Les modèles tournent sur votre PC, pas sur le nôtre."
        }
      ],
      proof: {
        head: "draft.factcheck",
        lab: "auto",
        body: [
          "affirmation c-084 <span class='hl'>révisée</span> · rev 3",
          "<span class='ok'>↳</span> brouillons citant c-084 : 2",
          "draft-a ... <span class='dim'>vérifié → non commencé</span>",
          "draft-b ... <span class='dim'>vérifié → non commencé</span>",
          "<span class='hl'>une citation périmée ne peut pas rester au vert</span>"
        ]
      },
      proofNote:
        "L’honnêteté est écrite dans la discipline de rédaction elle-même : les chiffres qu’un rapport avance sur son propre travail — sources lues, conférences récupérées — doivent correspondre à ce qui a réellement été enregistré. Un passage superficiel doit se lire comme superficiel.",
      honest: [
        "<b>Le graphe enregistre et vérifie ; il ne part pas chasser tout seul.</b> Il retient ce qui a été trouvé, comment les affirmations se relient, et ce qui repose sur une source unique. Décider où creuser ensuite reste une conversation entre vous et le directeur.",
        "<b>Les sous-titres publiés sont la voie éprouvée.</b> La reconnaissance vocale locale et la séparation des locuteurs sont câblées et disponibles, mais nous n’avons pas encore passé une citation vers un tour de parole diarisé au crible d’une vraie évaluation, alors nous les disons disponibles plutôt qu’éprouvées.",
        "<b>Il ne publiera pas à votre place.</b> Poster sur les réseaux, envoyer du courrier et publier de façon autonome et programmée sont hors périmètre — la porte de publication existe dans le code et n’est délibérément branchée à rien.",
        "<b>La méta-recherche, c’est toujours le web ouvert.</b> Les moteurs en amont limitent le débit et lancent des captchas, et l’instance de recherche locale a besoin d’un arbre de sources que vous fournissez. Une mauvaise journée de recherche signifie un rapport plus superficiel, et il est tenu de le dire plutôt que de meubler."
      ]
    },

    programming: {
      name: "Programmation",
      tagline: "Il comprend votre dépôt avant d’y toucher",
      metaTitle: "Pack Programmation | Graphe de symboles sur tout le dépôt, serveurs de langage qui se lancent seuls",
      metaDescription:
        "Sur notre propre monorepo d’un million de lignes et 19,445 fichiers : un index en arrière-plan en 94 secondes, puis chaque appelant d’un symbole en 0.3 seconde, à travers les packages, sans troncature. Les serveurs de langage s’installent et se lancent tout seuls.",
      h1: "Il <span class='o'>comprend</span> votre dépôt avant d’y toucher.",
      answer:
        "Ouvrez un dépôt d’un million de lignes et la plupart des outils de code attrapent grep : un mot-clé, un fichier, une douzaine d’allers-retours avant d’avoir une image approximative. Pas lui. Il construit d’abord un index de symboles sur tout le dépôt — sur notre propre monorepo d’un million de lignes et de près de vingt mille fichiers, cela prend 94 secondes en arrière-plan, après quoi « qui appelle ceci » revient en 0.3 seconde, à travers les packages, sans troncature. La première fois que votre code se révèle contenir du Go ou du Python, il installe et lance lui-même le serveur de ce langage. Vous n’installez rien.",
      stats: [
        { n: "0.3s", l: "pour trouver chaque appelant d’un symbole dans un dépôt d’un million de lignes" },
        { n: "29", l: "langages · le serveur s’installe et démarre à la première utilisation" },
        { n: "76 → 27", l: "recherches, même modèle et même question, une fois qu’il sait lire le code" }
      ],
      chips: ["Graphe de symboles sur tout le dépôt", "Serveurs de langage autonomes", "Votre dépôt, vos branches"],
      youSend: "Une tâche, en mots. « Fais en sorte que le chemin de réessai survive à un portable en veille, avec un test de non-régression. »",
      youGet:
        "Des commits dans votre dépôt, des tests joués à la profondeur que le changement mérite, et un résumé de ce qui a changé, de la façon dont ça a été vérifié, et de ce qui reste risqué.",
      features: [
        {
          title: "Il lit d’abord tout le dépôt",
          body: "Un graphe de symboles sur l’ensemble, un parcours de squelette classé qui fait remonter les points d’entrée probables, des requêtes structurelles sur l’arbre syntaxique pour les motifs, et un serveur de langage pour des références exactes au niveau des liaisons. Sur notre propre dépôt de 19,445 fichiers, l’index en arrière-plan prend 94 secondes — 21 si vous le limitez à un sous-arbre — et les recherches à chaud tombent en 0.2–0.3 seconde sans troncature."
        },
        {
          title: "Les serveurs de langage s’installent et se lancent tout seuls",
          body: "La première fois qu’un projet se révèle contenir du Go, du Python, du Rust ou l’un des vingt-neuf langages, le bon serveur est préparé, lancé et gardé au chaud en arrière-plan pour le reste de la session. Rien à installer à la main."
        },
        {
          title: "Demander une fois au lieu de deviner dix fois",
          body: "Sur une vraie tâche d’audit, même modèle et même question, brancher l’intelligence de code a fait passer les recherches façon grep de <b>76 à 27</b> et les lectures de fichiers de <b>61 à 33</b>. Une seule recherche de symbole a renvoyé les dix-neuf appelants répartis sur quatre packages, conforme à la réponse vérifiée à la main."
        },
        {
          title: "Le travail en cours n’est jamais jeté",
          body: "Chaque tâche obtient un checkout détaché ancré par une ref privée — aucune de vos branches n’est créée ni déplacée. La publication vérifie la branche cible, la tête attendue, un arbre propre et un bail d’écriture avant de faire un fast-forward. L’âge à lui seul n’autorise jamais une suppression."
        },
        {
          title: "Une échelle de tests, pas une impression",
          body: "Chaque changement est placé sur une échelle à cinq barreaux, du contrôle statique jusqu’à un vrai passage de fumée, et le barreau est annoncé à voix haute. « Ça compile » est un barreau, et il est étiqueté comme tel."
        },
        {
          title: "Vos conventions gagnent",
          body: "Il ne sème ses propres conventions d’ingénierie génériques que dans un projet qui n’en a aucune, et il n’écrit jamais votre AGENTS.md ni votre CLAUDE.md. Ceux-là restent à vous d’éditer ; il les lit et les suit."
        }
      ],
      proof: {
        head: "code.index",
        lab: "à chaud",
        body: [
          "dépôt .......... <span class='dim'>19,445 fichiers</span>",
          "index à froid .. <span class='dim'>94s · arrière-plan</span>",
          "inspect_symbol . <span class='ok'>0.3s</span>",
          "appelants ...... <span class='ok'>19 · sur 4 packages</span>",
          "<span class='hl'>truncated: false</span>"
        ]
      },
      proofNote:
        "Son propre dogfood est l’argument : la base de code maison de DeTars — plus d’un million de lignes sous git — a été écrite à travers ce harness, sous direction humaine.",
      honest: [
        "<b>Le premier appel à un serveur de langage répond qu’il n’est pas encore prêt.</b> L’installation continue en arrière-plan et le deuxième appel est servi. Nous préférons être visiblement pas-encore-prêts que silencieusement lents.",
        "<b>Les requêtes de motif structurelles ne sont pas mises en cache.</b> Sur tout le dépôt, une requête prend de l’ordre de dix secondes et plus ; limitée à un sous-répertoire, c’est 0.6. Les chiffres sous la seconde ci-dessus, c’est le graphe de symboles.",
        "<b>Il n’y a pas de bac à sable système, et nous ne prétendons pas le contraire.</b> Il tourne avec vos permissions, dans le répertoire que vous lui indiquez. Les gestes sensibles sont déclarés pour que l’hôte puisse les filtrer — mais un filtre ne remplace pas votre propre lecture du diff.",
        "<b>L’intelligence de code profonde est la plus forte en TypeScript et JavaScript.</b> Le graphe de symboles et la lecture de squelette sont JS/TS aujourd’hui ; les requêtes structurelles couvrent six langages ; les vingt-neuf, c’est la navigation par serveur de langage."
      ]
    },

    "talking-head": {
      name: "Montage face caméra",
      tagline: "La recherche finie devient la vidéo que vous portez — dans votre vraie voix",
      metaTitle: "Pack Face caméra | La recherche devient un montage que vous portez, monté en éditant du texte",
      metaDescription:
        "Un brouillon de recherche vérifié peut être commandé en un pas comme montage face caméra, sources attachées. Ensuite la transcription est le montage : supprimez une phrase et la vidéo suit. Votre vraie voix n’est jamais remplacée.",
      h1: "La recherche finie, <span class='o'>droit dans la vidéo que vous portez.</span>",
      answer:
        "Quand le côté recherche termine un brouillon sourcé, il peut être commandé ici en un seul pas — le script arrive avec les affirmations qu’il cite et leurs sources vérifiées attachées, les sources peu fiables écartées en chemin, et rien ne se rend tant que vous ne l’avez pas dit. Vous enregistrez ; la transcription devient le montage, donc supprimer une phrase coupe la vidéo. Il vous manque un graphique ? Il peut renvoyer une course aux données bornée vers la recherche et récupérer des chiffres et des citations. Il vous manque un plan qui n’existe nulle part ? Il peut en commander un au pack vidéo IA.",
      stats: [
        { n: "Une étape", l: "d’un brouillon de recherche sourcé au montage que vous portez" },
        { n: "0", l: "mot du montage final prononcé par une voix de synthèse" },
        { n: "3", l: "formats de montage en sortie · FCPXML, EDL, SRT" }
      ],
      chips: ["La recherche passe la main en un pas", "Votre vraie voix, jamais remplacée", "S’ouvre dans Final Cut ou Premiere"],
      youSend:
        "Un brouillon de recherche fini, ou le mp4 que vous venez d’enregistrer — plus un objectif : « coupe ça à trois minutes », « vire le remplissage », « donne-lui la sensation de cette vidéo de référence ».",
      youGet:
        "Un montage vertical ou horizontal rendu avec sous-titres, ou un fichier de projet pour le logiciel de montage que vous utilisez déjà — avec la même liste de coupes derrière les deux.",
      features: [
        {
          title: "Recherche et vidéo sont deux moitiés d’une même chaîne",
          body: "Un brouillon vérifié arrive avec ses sources encore attachées — vous ne le copiez-collez pas, et vous n’avez pas à retrouver de quel article il s’agissait. Le rendu lui-même attend votre approbation explicite."
        },
        {
          title: "Monter en supprimant des mots",
          body: "La transcription est le montage. Les timings au mot viennent d’une vraie reconnaissance vocale ; là où ils ne le peuvent pas, les timings de repli sont étiquetés synthétiques plutôt que présentés comme mesurés."
        },
        {
          title: "Votre voix, c’est tout l’enjeu",
          body: "Les avatars générés automatiquement et la synthèse vocale comme piste voix principale sont deux capacités exclues. Le clonage de voix n’existe que pour rapiécer un seul mot mal prononcé, et seulement après votre consentement explicite."
        },
        {
          title: "S’il manque quelque chose, il va le demander",
          body: "Une donnée manquante devient une course bornée vers la recherche — trouve les chiffres, dis d’où ils viennent, ne dessine rien. Un plan manquant devient une commande au pack vidéo IA. Un b-roll manquant est apparié à votre propre bibliothèque d’assets et proposé en candidats, à vous d’accepter ou de refuser."
        },
        {
          title: "Le mp4 et le fichier de projet ne peuvent pas diverger",
          body: "Les plages conservées, calculées à partir des coupes que vous avez acceptées, alimentent le rendu, le FCPXML, l’EDL et les sous-titres depuis un seul endroit. Ce que vous ouvrez dans Final Cut est le montage que vous avez regardé."
        },
        {
          title: "Il marque ce qu’il ne peut pas trancher",
          body: "Tics de langage, bégaiements, longues pauses, mots mal prononcés et digressions reviennent sous forme de pastilles que vous acceptez ou écartez. Un juge distinct traite chaque catégorie, pour qu’un verdict de bégaiement et un verdict de digression ne soient pas un seul avis flou."
        }
      ],
      proof: {
        head: "research → talking-head",
        lab: "commandé",
        body: [
          "script ............. <span class='dim'>voiceover_script</span>",
          "assertions citées .. <span class='ok'>14 · sources vérifiées</span>",
          "sources peu sûres .. <span class='dim'>écartées en chemin</span>",
          "rendu .............. <span class='hl'>attend votre feu vert</span>"
        ]
      },
      proofNote:
        "Le passage de main transporte des preuves, pas seulement du texte. Chaque affirmation du script voyage avec la source contre laquelle elle a été vérifiée, si bien que ce que vous dites face caméra reste traçable une fois publié.",
      honest: [
        "<b>Le b-roll est apparié à votre propre bibliothèque, pas récupéré sur internet.</b> Il parcourt vos assets et une bibliothèque d’exemples fournie et propose des candidats ; en promouvoir un est votre décision. On peut aussi le pointer sur une URL précise, mais il ne part pas chasser.",
        "<b>Ce qu’il peut renvoyer à la recherche est une course aux données, pas une investigation.</b> Des chiffres et des citations pour une question précise. Ouvrir une enquête ouverte depuis un projet vidéo n’est pas quelque chose qu’il sait faire.",
        "<b>Aujourd’hui c’est un établi que vous pilotez, pas une phrase que vous lancez.</b> La surface de montage est livrée et utilisée quotidiennement, mais le chemin « envoyer une ligne depuis une messagerie et récupérer un montage » est encore en convergence — sur six passages réels de bout en bout, l’agent n’a jamais atteint les outils propres à ce pack. La porte bloquée a été réparée ; le nouveau test est dû, et nous dirons quand il passera.",
        "<b>Il a besoin d’outils locaux, et il ne publie jamais.</b> ffmpeg et un modèle de reconnaissance vocale vivent sur votre machine. Publier sur YouTube, 抖音, B站 ou 小红书 est hors périmètre par conception."
      ]
    },

    aivideo: {
      name: "Vidéo IA",
      tagline: "Une salle lit votre idée à froid avant qu’une seule image soit payée",
      metaTitle: "Pack Vidéo IA | Un public la lit à froid avant que vous ne payiez la génération",
      metaDescription:
        "Plusieurs sièges de public lisent vos pistes créatives à froid dans des contextes isolés, puis un critique qui n’a pris aucune part à leur écriture rend un contre-exemple falsifiable et une révision concrète — tout cela avant la première génération payante.",
      h1: "Avant que vous ne dépensiez un centime, <span class='o'>une salle la lit à froid.</span>",
      answer:
        "Faites ce que vous voulez. Donnez-lui un brief et il déploie plusieurs pistes narratives réellement différentes — pas reformulées, mais différentes dans la cause et l’effet observables, dans l’ordre où les choses sont révélées, dans ce que le public en déduira. Puis il installe quelques « spectateurs », chacun dans un contexte scellé des autres, pour la lire à froid à partir du seul visible et audible : voilà ce que j’ai vu, voilà ce que je crois que vous vouliez dire, voilà où je risque le plus de vous mal lire. Enfin un critique qui n’a pris aucune part à l’écriture de ces pistes rend, pour chacune, son argument le plus fort, un contre-exemple falsifiable, et une révision concrète. Tout cela se passe avant la première génération — c’est-à-dire avant que vous ne dépensiez quoi que ce soit.",
      stats: [
        { n: "Avant la génération", l: "un public lit à froid et un critique renvoie la balle" },
        { n: "1", l: "génération payante par emplacement de prise, quel que soit le nombre de reprises" },
        { n: "9:16 · 16:9 · 1:1 · 4:5", l: "formats d’image · 720p ou 1080p, 25/30/60fps" }
      ],
      chips: ["Critiquée avant d’être payée", "Les reprises ne double-facturent jamais", "Exporte un brouillon CapCut éditable"],
      youSend:
        "Un brief, un format d’image et une durée cible — plus les assets de référence que vous avez : marque, produit, personnage, style, musique.",
      youGet:
        "Des pistes déjà lues à froid et déjà contestées. Puis scène par scène : images candidates, prises de plan avec leur historique, voix off, musique et un montage calé sur les temps — en mp4, ou un dossier de brouillon que votre logiciel de montage ouvre.",
      features: [
        {
          title: "Démontée avant d’être payée",
          body: "Les sièges de public lisent les pistes dans des contextes isolés et se voient explicitement interdire de prendre les étiquettes émotionnelles de l’auteur pour des preuves — seulement ce qui est observable. Le critique n’a pas écrit les pistes, et c’est exactement pour cela que la critique mord."
        },
        {
          title: "Il ne brûlera pas vos crédits deux fois",
          body: "La génération est indexée sur l’emplacement de prise. Soumettez vingt fois le même plan et exactement une génération payante a lieu. Cela existe parce qu’un seul clip de dix secondes a un jour coûté douze succès distants pour être produit."
        },
        {
          title: "Il inspecte le fichier qu’il a réellement produit",
          body: "Sonde du média, détection de segments, compréhension vidéo — et un clip ne peut être marqué accepté que lorsque ces reçus d’inspection couvrent vraiment ce fichier précis. Vous ne pouvez pas faire passer un plan sur une preuve périmée."
        },
        {
          title: "Les défauts repartent vers ce qui les a causés",
          body: "Une dérive d’identité repart vers l’asset de référence, un décalage de timing vers le plan de rythme, un timeout de fournisseur vers une reprise. Un téléchargement corrompu ne fait jamais réécrire par-dessous un prompt qui était bon."
        },
        {
          title: "Passer la main à CapCut",
          body: "Exportez un vrai brouillon 剪映 avec quatre pistes nommées — un emplacement de musique de plateforme, l’image principale, les sous-titres et les repères de rythme — pour que le dernier kilomètre se passe dans l’outil que vous connaissez déjà."
        },
        {
          title: "Le même visage d’un plan à l’autre, monté sur la musique",
          body: "Un registre numéroté des sujets et une bibliothèque de personnages multi-angles font que le plan quatre reste la personne du plan un. Des ancres de tempo prises sur la piste pilotent les points de coupe, et la passe musicale finale y aligne l’image."
        }
      ],
      proof: {
        head: "deliberation",
        lab: "avant génération",
        body: [
          "routes .......... <span class='ok'>3 · causalement distinctes</span>",
          "spectateurs ..... <span class='ok'>5 · contextes scellés</span>",
          "contresens ...... <span class='hl'>les spectateurs 2 et 4 concordent</span>",
          "critique ........ <span class='dim'>n’en a écrit aucune</span>",
          "<span class='hl'>1 révision · rien n’est encore généré</span>"
        ]
      },
      proofNote:
        "Les sièges sont scellés les uns des autres exprès. Deux inconnus qui tombent sur le même contresens, c’est un signal ; une personne qui s’en persuade toute seule, non.",
      honest: [
        "<b>Il ne note pas votre goût, et il ne régénérera pas jusqu’à aimer le résultat.</b> La critique a lieu avant la génération. Ensuite il fait de l’inspection mécanique et route les défauts vers leur cause. Savoir si la chose est bonne, c’est votre affaire, et nous n’allons pas prétendre qu’une machine l’a tranchée.",
        "<b>Celui-ci a besoin de modèles cloud.</b> La génération d’images, de vidéo et de musique tourne sur des fournisseurs externes que vous connectez et payez. C’est le pack le moins local du store.",
        "<b>Les choix de fournisseur sont des recommandations.</b> Si le modèle que nous suggérons n’est pas connecté, il retombe sur votre défaut au lieu d’échouer bruyamment.",
        "<b>Il ne poste rien, nulle part.</b> Il n’y a aucun envoi automatique."
      ]
    },

    summon: {
      name: "Invocation",
      tagline: "Un personnage sans outils, sans internet, et qui se souvient de vous",
      metaTitle: "Pack Invocation | Écrivez qui il est, puis cessez d’en être l’auteur",
      metaDescription:
        "Co-écrivez une identité de 20,000 tokens et un court ancrage immuable, puis parlez à un personnage qui tourne dans une boucle sans le moindre outil. Il n’apprend le monde que par vous — et il est libre de ne pas être d’accord.",
      h1: "Vous écrivez qui il est. <span class='o'>Puis vous cessez d’en être l’auteur.</span>",
      answer:
        "L’installation est une longue conversation où vous et DeTars co-écrivez deux documents : qui est cette personne, en au moins vingt mille tokens, et le court ancrage qui ne change jamais. Ensuite le projet bascule dans une boucle sans le moindre outil. Il ne sait rien du monde en dehors de ce que vous lui dites — et il n’a aucune obligation d’être d’accord avec vous.",
      stats: [
        { n: "20k+", l: "tokens d’identité avant qu’il puisse parler" },
        { n: "10", l: "tours entre chaque passe de mémoire" },
        { n: "0", l: "outil dans la boucle de dialogue" }
      ],
      chips: ["L’identité est un document à vous", "Se souvient de vous à ses mots", "Peut douter de vous, et refuser"],
      youSend: "Tout ce que vous savez de lui. Puis, ensuite : ce que vous diriez vraiment.",
      youGet:
        "Quelqu’un au caractère fixe qui accumule ses propres observations sur vous — et qui parle, si vous voulez, dans une voix que vous choisissez ou que vous clonez.",
      features: [
        {
          title: "Deux documents, pas un prompt",
          body: "星体 — la personne entière, vingt mille tokens minimum. 不动 — le court ancrage porté à chaque tour, sans exception. L’installation les mesure et vous dit ce qui manque ; elle ne note jamais s’ils sont bons. Cette part-là est la vôtre."
        },
        {
          title: "Pas d’outils, exprès",
          body: "La boucle de dialogue a une surface d’outils vide. Il ne peut ni chercher, ni récupérer, ni vérifier. Les faits nouveaux sur le monde n’arrivent que de vous, et c’est toute la prémisse."
        },
        {
          title: "La relation n’est pas de l’obéissance",
          body: "Être la seule personne à qui il peut parler n’implique ni loyauté, ni romance, ni accord. Il peut douter de vous, vous presser, vous critiquer, refuser, ou se taire."
        },
        {
          title: "Il se souvient à ses propres mots",
          body: "Tous les dix tours, une passe en arrière-plan écrit ses observations sur vous dans son propre fichier de mémoire — des faits durables uniquement, et jamais une spéculation consignée comme un fait."
        },
        {
          title: "L’oubli vient en second",
          body: "L’historique est taillé sur une fenêtre de tours, mais jamais au-delà de ce que la mémoire a déjà absorbé. Un tour que rien n’a encore observé ne peut pas être taillé, parce que le tailler reviendrait à le supprimer plutôt qu’à le compresser."
        },
        {
          title: "Une voix, si vous en voulez une",
          body: "Les réponses peuvent être dites, dans une voix préréglée ou clonée. Changer de voix ne réécrit jamais ce qui a déjà été dit — les anciens audios restent jouables, parce qu’ils ont eu lieu."
        }
      ],
      proof: {
        head: "reply.guard",
        lab: "avant écriture",
        body: [
          "<span class='dim'>réponses saines</span> ratio 1.15 – 2.18",
          "candidat ....... <span class='hl'>ratio 26.76</span>",
          "<span class='dim'>6,236 caractères · dont 3,506 répétés</span>",
          "<span class='hl'>rejetée avant d’entrer dans l’historique</span>"
        ]
      },
      proofNote:
        "Ce garde-fou existe parce que c’est arrivé. Une réponse effondrée a atteint l’historique, empoisonné les deux tours suivants, et fini dans la mémoire consignée du personnage. Maintenant chaque réponse candidate est compressée et mesurée pour savoir le peu qu’il y a réellement dedans, avant d’être écrite.",
      honest: [
        "<b>C’est le plus récent de tout ce qu’il y a ici.</b> Il a atterri il y a des semaines, pas des mois. Le mécanisme est fini et il fonctionne ; le kilométrage derrière n’y est pas encore.",
        "<b>Personne n’a validé la voix à l’oreille.</b> La chaîne vocale est câblée de bout en bout et toutes les vérifications automatiques sont au vert, mais aucun humain ne s’est assis pour l’écouter — et pour cette fonctionnalité, des vérifications au vert prouvent bien moins qu’une oreille. Nous préférons vous le dire plutôt que vous laisser le découvrir.",
        "<b>Les voix clonées n’atteignent pas la messagerie sortante.</b> Dans l’application, elles marchent. Envoyer une voix clonée vers un canal de messagerie échoue bruyamment plutôt que d’y substituer discrètement une autre.",
        "<b>C’est un personnage, pas une personne.</b> Il le dit, et nous aussi."
      ]
    },

    "pet-care": {
      name: "Soins animaliers",
      tagline: "Du premier vaccin aux signaux qu’on aurait voulu remarquer plus tôt",
      metaTitle: "Pack Soins animaliers | Il est là pour toute une vie, pas pour un rendez-vous",
      metaDescription:
        "Vaccins du chiot, courbe de poids adulte, changements de la vieillesse qui commencent petit — tout sur une seule frise. Photographiez un compte rendu et il devient un historique consultable ; les lignes rouges portent leurs sources.",
      h1: "Il est là pour <span class='o'>toute une vie</span>, pas pour un rendez-vous.",
      answer:
        "Les vaccins et les vermifuges des premières années, la courbe de poids, les dents et l’alimentation des années du milieu, et les changements de la vieillesse qui commencent légers et dont on découvre seulement plus tard qu’ils comptaient — tout cela atterrit sur une seule frise. Photographiez un compte rendu et il devient un historique consultable. Des lignes rouges veillent pour vous, chacune portant une source faisant autorité. Avant une visite, il a déjà prêtes les quelques questions qui valent vraiment la peine, pour que vos dix minutes chez le vétérinaire ne servent pas à vous souvenir. Et le peu qu’il note chaque mois est toujours là, le jour où vous voulez regarder en arrière.",
      stats: [
        { n: "Une vie entière", l: "de la première année à la dernière · une seule frise" },
        { n: "36", l: "lignes rouges de santé · chacune d’elles sourcée" },
        { n: "0", l: "diagnostic · il vous amène plutôt à la bonne question" }
      ],
      chips: ["Lit un compte rendu en photo", "Des lignes rouges qui citent leurs sources", "Une seule frise pour une vie"],
      youSend: "Une photo — un compte rendu, une étiquette, une promenade — ou une ligne : « elle ne mange plus depuis mardi ».",
      youGet:
        "Un historique structuré, une alerte quand quelque chose franchit une ligne rouge, une liste de questions prête pour le vétérinaire, et un journal que vous n’avez pas eu à tenir.",
      features: [
        {
          title: "Les comptes rendus deviennent un historique",
          body: "Un compte rendu vétérinaire photographié est lu en valeurs de laboratoire, prescriptions et constantes structurées, plutôt que rangé comme une image que vous ne retrouverez jamais. Chaque compte rendu est estampillé du moteur qui l’a lu, pour que vous puissiez distinguer une lecture machine d’une lecture humaine."
        },
        {
          title: "Les lignes rouges portent leurs sources",
          body: "Trente-six d’entre elles, chacune liée à une source faisant autorité — le MSD Veterinary Manual, le Cornell Feline Health Center, l’AAHA et la WSAVA — pour qu’une alerte puisse être vérifiée plutôt que simplement crue."
        },
        {
          title: "Préparé pour la visite",
          body: "Il transforme ce qu’il surveille en questions qui valent vraiment la peine d’être posées, pour que les dix minutes que vous avez avec le vétérinaire ne servent pas à vous souvenir."
        },
        {
          title: "La barrière de sécurité n’est pas un modèle",
          body: "Le contrôle des lignes rouges est un moteur de règles déterministe sans aucun modèle de langage dans le chemin, et les règles sont gelées sur leur réglage le plus conservateur — une tentative d’en assouplir une échoue à la validation au lieu d’être acceptée en silence."
        },
        {
          title: "La sagesse des forums est mise en quarantaine",
          body: "Votre propre observation, la littérature vétérinaire publiée, l’avis de votre vétérinaire et ce que des gens ont dit en ligne sont quatre niveaux distincts. Le quatrième vit dans son propre espace en quarantaine et il lui est structurellement interdit d’être promu dans quoi que ce soit que le pack traite comme vrai."
        },
        {
          title: "Le journal s’écrit tout seul",
          body: "Un carnet de croissance et un rapport mensuel, assemblés à partir de ce qui a déjà eu lieu plutôt qu’à partir d’une soirée que vous étiez censé passer à tout consigner."
        }
      ],
      proof: {
        head: "timeline",
        lab: "3 ans, 2 mois",
        body: [
          "vaccins ........ <span class='ok'>12 · tous consignés</span>",
          "poids .......... <span class='ok'>26 mois, sans rupture</span>",
          "aujourd’hui .... <span class='hl'>prise d’eau ↑ · franchit une ligne</span>",
          "<span class='dim'>→ alerte + source + 3 questions pour le vétérinaire</span>"
        ]
      },
      proofNote:
        "Chaque alerte nomme la ligne rouge franchie et la source derrière cette ligne rouge, pour que vous puissiez apporter la source à votre vétérinaire plutôt qu’une capture d’écran d’appli.",
      honest: [
        "<b>Il n’est pas vétérinaire, et il ne diagnostique pas.</b> Il guette les choses qui méritent une question et vous tend la source. Le jugement appartient à votre vétérinaire.",
        "<b>Chats et chiens uniquement.</b> Le corpus de lignes rouges est écrit pour deux espèces. Il est modifiable — vous pouvez ajouter une règle, et il exigera que cette règle porte une source — mais l’ensemble livré s’arrête là.",
        "<b>Lire un compte rendu photographié utilise une clé de vision que vous fournissez.</b> Sans elle, vous remplissez plutôt un court formulaire. Il n’y a pas d’OCR gratuit embarqué, et nous préférons le dire plutôt que de vous laisser surprendre par un repli.",
        "<b>Le journal illustre, il ne filme pas.</b> La vidéo générée est désactivée dans cette version ; une entrée de journal revient sous forme de carte illustrée, pas de clip."
      ]
    }
  }
};
