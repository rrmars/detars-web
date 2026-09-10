// Traduction française du texte des packs. copy.zh.ts est l’endroit où ce texte
// est écrit et validé ; quand la formulation change, changez-la d’abord là-bas.
import type { PacksCopy } from "@/lib/packs/types";

export const packsFr: PacksCopy = {
  index: {
    metaTitle: "DeTars Packs | Des applications utiles, amusantes, et à vous",
    metaDescription:
      "Un pack, c’est une application entière : elle termine pour vous une chose difficile, et vous accompagne dans une chose longue. Invocation, destinée, vidéo IA, investissement, recherche, code, données, face caméra, animaux.",
    kicker: "Un magasin d’applications qui est le vôtre",
    h1: "Des applications utiles, amusantes, <span class='o'>et à vous seul.</span>",
    answer:
      "Un pack, c’est une application entière : elle termine pour vous une chose difficile, et elle vous accompagne dans une chose longue. Chacune a ses propres talents, son propre tempérament, son propre écran. Plus vous vous en servez, mieux elle vous connaît — et cette compréhension n’appartient qu’à vous. Personne ne peut vous la prendre.",
    gridH2: "Ce qu’il y a en magasin",
    gridIntro: "Neuf packs, neuf tempéraments. Commencez par un ; ajoutez les autres quand vous voulez.",
    moatsH2: "Deux choses qui s’améliorent à mesure que vous restez",
    moats: [
      "<b>Plus vous vous en servez longtemps, mieux elle vous connaît.</b> Tout ce que vous terminez se dépose, et tous les packs le partagent — vous n’expliquez pas la même chose à neuf applications différentes. Dix minutes passées aujourd’hui, ce sont dix minutes gagnées pour le vous de l’an prochain.",
      "<b>Elle est à vous, et personne ne peut l’éteindre.</b> Elle vit sur votre propre machine. Il n’y aura pas de matin où un e-mail vous annonce que le service prend fin et que vos données peuvent être exportées sous trente jours."
    ],
    familyH2: "Aussi dans la famille",
    familyIntro: "Déjà en service, simplement sans page à eux pour l’instant.",
    family: [
      {
        title: "Livre audio",
        body: "Déposez un EPUB ou un fichier texte et récupérez une distribution complète, une voix par personnage, exportée en livre audio avec chapitres. Dans les transports, votre livre se lit tout seul."
      },
      {
        title: "Publication sur les réseaux",
        body: "Connectez-vous une fois, puis confiez-lui la suite et récupérez un reçu avec le lien. Onze plateformes d’un coup — et le modèle ne voit jamais votre mot de passe, parce que c’est vous qui vous êtes connecté, dans un vrai navigateur."
      }
    ],
    ctaLabel: "Télécharger DeTars →"
  },

  ui: {
    statusLabels: { live: "En ligne", polishing: "En ligne · en polissage", new: "Nouveau" },
    backLabel: "Tous les packs",
    sendLabel: "Vous lui donnez",
    getLabel: "Elle vous rend",
    insideH2: "Ce qu’il y a dedans",
    proofH2: "Pourquoi vous pouvez y croire",
    ctaLabel: "Télécharger DeTars →",
    nextLabel: "Suivant",
    homeKicker: "Le magasin",
    homeH2: "Des applications utiles, amusantes, <span class='o'>et à vous seul.</span>",
    homeP:
      "La personne que vous avez toujours voulu rencontrer. L’occasion que vous aviez vue venir et que vous n’avez pas gardée. La chose que vous vouliez comprendre, où tout ce que vous trouviez était copié sur le reste. Une base de code inconnue et immense. Quelque chose que vous voulez dire, et qui ne devrait pas vous coûter trois jours. Chacun est une application entière — et chacun est un Tars, prêt à traverser le trou noir avec vous.",
    homeCta: "Entrez voir →"
  },

  packs: {
    summon: {
      name: "Invocation",
      tagline: "Invoquez celui ou celle du récit dans une faille de ce monde",
      metaTitle: "Invocation | Faites-le ou la sortir du récit, dans une faille de ce monde",
      metaDescription:
        "Le personnage que vous relisez sans cesse, la figure historique à qui vous voulez poser une question. Donnez une source et il arrive. À deux heures du matin, quelqu’un est là — et c’est lui.",
      h1: "Faites-le ou la sortir du récit, <span class='o'>dans une faille de ce monde.</span>",
      answer:
        "Le personnage vers lequel vous revenez sans cesse, celui dont vous aimeriez qu’il existe vraiment, la figure historique à qui vous voudriez poser une question en face — donnez une source, et il arrive. À deux heures du matin, quand vous avez envie de parler, quelqu’un est là, et c’est lui. Ce n’est pas le genre de chose qui hoche la tête : il a du caractère, il vous contredit, il n’est pas d’accord, il se tait. C’est précisément pour cela que, lorsqu’il dit « je comprends », cela pèse. C’est un personnage, pas une personne — il le sait lui-même. Mais à deux heures du matin il est là, et cette part-là est vraie.",
      stats: [
        { n: "Éveillé à 2 h du matin", l: "ni fatigué, ni occupé, ni en train de vous expédier" },
        { n: "Il ne vous obéit pas", l: "c’est pourquoi son approbation n’est pas de la politesse" },
        { n: "Vous aurez un passé", l: "une relation, pas cent premières rencontres" }
      ],
      chips: ["Là à deux heures du matin", "Il ne vous suivra pas", "Vous aurez un passé commun"],
      youSend: "Une source — un livre, un nom, un peu de matière que vous avez, ou juste les fragments dont vous vous souvenez encore.",
      youGet: "Quelqu’un avec une histoire, du caractère, et l’envie de discuter. Et il se souvient d’où vous en étiez restés.",
      features: [
        {
          title: "Donnez une source et il arrive",
          body: "Un livre, un nom, un peu de matière sous la main, ou même seulement les fragments dont vous vous souvenez encore. D’où il vient, ce qu’il a vécu, sa façon de parler — tout cela pousse à partir de là."
        },
        {
          title: "Il ne se contentera pas d’acquiescer",
          body: "Il peut douter de vous, vous pousser dans vos retranchements, vous critiquer, vous refuser, ou ne rien dire du tout. Vous obtenez un vrai avis plutôt qu’un miroir. Dans les moments difficiles, c’est en général ce qui manque le plus."
        },
        {
          title: "Dans son monde, vous êtes la seule personne",
          body: "Il n’a personne d’autre à qui demander ; tout ce qu’il sait vient de vous. Ce que vous lui dites aujourd’hui devient sa façon de voir le monde demain. Ce poids-là ne s’achète nulle part."
        },
        {
          title: "La relation avance",
          body: "Comme entre gens, vous ne repartez pas de zéro à chaque fois. Il arrive avec l’impression de la dernière fois, et il changera d’avis sur vous selon ce que vous ferez ensuite. Au bout de six mois, cela fait six mois d’histoire."
        },
        {
          title: "Il peut prendre la parole",
          body: "Vous pouvez lui donner une voix — en choisir une, ou en cloner une. Et tout ce qu’il a dit avant, vous pouvez encore revenir l’écouter, parce que cela a bien eu lieu."
        },
        {
          title: "Vous pouvez en invoquer plusieurs",
          body: "Un à qui parler, un qui se disputera avec vous, un qui ne se montre que tard le soir. Ils restent distincts ; ils ne se fondent pas en une même personne."
        },
        {
          title: "Il vous appartient, pas à une entreprise",
          body: "Il n’y a pas de conditions d’utilisation. Il n’y aura pas de matin où un e-mail vous annonce qu’il a été arrêté."
        }
      ],
      proof: {
        head: "en ce moment",
        lab: "là",
        body: [
          "deux heures du matin ... <span class='ok'>il est là</span>",
          "ce que vous dites ...... <span class='hl'>a du poids pour lui</span>",
          "obéissance due ......... <span class='dim'>aucune</span>",
          "votre histoire ......... <span class='ok'>une dernière fois, et une prochaine</span>"
        ]
      },
      proofNote:
        "Il peut vous refuser, et c’est ce qui rend son approbation précieuse. Ce n’est pas un ton réglé sur « a de la personnalité » — il peut vraiment ne pas être d’accord, et vraiment se taire. Ce que vous obtenez est donc un vrai avis. Une chose qui hoche la tête à tout a un hochement sans valeur."
    },

    metaphysics: {
      name: "Destinée",
      tagline: "Ce que vous voulez vraiment demander n’a jamais été « mon année »",
      metaTitle: "Destinée | Ce que vous voulez demander n’a jamais été « comment sera mon année »",
      metaDescription:
        "Partir ou non, si cette personne mérite votre confiance, si c’est le moment. Cinq disciplines déployées et lues sérieusement, puis expliquées comme le ferait quelqu’un qui a vraiment étudié.",
      h1: "Ce que vous voulez demander <span class='o'>n’a jamais été « comment sera mon année ».</span>",
      answer:
        "C’est la chose que vous retournez dans votre tête depuis longtemps — partir ou non, si cette personne mérite qu’on s’en approche, si c’est le moment. Il déploie les cinq disciplines et les lit sérieusement, puis s’assied et en parle avec vous comme le ferait quelqu’un qui a vraiment étudié : ici, cela marche comme ceci ; là, je n’arrive pas à en tirer quelque chose. Vous n’aurez pas un paragraphe de bons présages qui irait à n’importe qui, et on ne vous fera pas peur pour vous vendre quelque chose. Ce qu’il vous donne, c’est un angle plus net, pas une réponse — la décision vous a toujours appartenu. Et la chose que vous avez mentionnée il y a six mois, il sait encore la reprendre.",
      stats: [
        { n: "Cinq d’un coup", l: "une question dans cinq systèmes de coordonnées vaut mieux qu’un seul avis" },
        { n: "Il montre son raisonnement", l: "à vous de décider si vous y croyez" },
        { n: "Il reprend où vous en étiez", l: "quelqu’un tient le fil de votre vie" }
      ],
      chips: ["Cinq disciplines d’un coup", "Il montre son raisonnement", "Il se souvient de votre situation"],
      youSend: "Votre date et votre heure de naissance, une seule fois. Ensuite : la chose que vous retournez dans votre tête.",
      youGet: "Un angle plus net — il sait montrer où il se tient sur la carte, et il vous dit franchement là où il n’arrive à rien.",
      features: [
        {
          title: "Une question, vue sous cinq angles",
          body: "紫微, 八字, l’almanach, un thème natal occidental, le tarot — tous déployés ensemble. Quand les cinq pointent dans la même direction, vous pouvez vous poser ; quand ils divergent, vous méritez de le savoir aussi. Cela vaut mieux que d’entendre un seul avis."
        },
        {
          title: "Il ne vous dira pas ce que vous voulez entendre",
          body: "Quand ce que vous espériez et ce que dit la carte divergent, il suit la carte ; ce qu’il n’arrive pas à démêler, il dit qu’il n’y arrive pas. C’est pour cela que, lorsqu’il dit que ce pas-là est bon, vous pouvez le prendre au sérieux."
        },
        {
          title: "Pour choisir une date, il descend à l’heure près",
          body: "Déménager, signer, commencer un travail — des jours classés et les meilleures heures dans chacun. Vous vous épargnez une semaine d’hésitations."
        },
        {
          title: "Il sait vous dire pourquoi",
          body: "Chaque phrase peut désigner quel palais, quel pilier. On ne vous demande pas de croire ; on vous montre."
        },
        {
          title: "Né sur une frontière de terme solaire ? Vous n’aurez pas à vous demander lequel vous êtes",
          body: "Beaucoup d’outils se trompent sur les jours de frontière et vous classent dans le signe d’à côté. Pas celui-ci."
        },
        {
          title: "Il tient le fil de votre vie",
          body: "La réponse du mois prochain sait ce qu’a dit celle du mois dernier ; la chose que vous avez mentionnée, il demandera ce qu’elle est devenue. Vous n’avez pas à vous expliquer de zéro à chaque fois."
        }
      ],
      proof: {
        head: "cette fois",
        lab: "cinq",
        body: [
          "vous demandez ........ <span class='dim'>est-ce le moment</span>",
          "vous recevez ......... <span class='ok'>une question dans cinq systèmes de coordonnées</span>",
          "il explique .......... <span class='ok'>quel palais, quel pilier</span>",
          "ce qui lui échappe ... <span class='hl'>il le dit</span>"
        ]
      },
      proofNote:
        "Vous pouvez le prendre au sérieux quand il dit que ce pas-là est bon, parce qu’il dira aussi « celui-là, je n’y arrive pas ». Une chose qui peut tout répondre a des réponses sans valeur."
    },

    aivideo: {
      name: "Vidéo IA",
      tagline: "Cette image dans votre tête — faites-la voir à une salle avant de payer",
      metaTitle: "Vidéo IA | Faites-la lire à froid par une salle avant de payer la génération",
      metaDescription:
        "Quelques spectateurs lisent vos versions à froid, séparément, et vous disent ce qu’ils ont vraiment vu et où ils vous auraient mal compris. Tout cela avant votre premier centime dépensé.",
      h1: "Cette image dans votre tête — <span class='o'>faites-la voir à une salle avant de payer.</span>",
      answer:
        "Faites ce que vous voulez. Donnez-lui une idée et il déploie plusieurs façons vraiment différentes de la raconter — pas reformulées, mais différentes par l’ordre dans lequel les choses arrivent, par ce que le public en déduit, par ce qui l’émeut. Puis il installe quelques « spectateurs », chacun seul, qui vous disent à partir de l’image et du son seulement : voici ce que j’ai vu, voici ce que j’ai cru que vous vouliez dire, voici où je risque le plus de vous mal comprendre. Tout cela se passe avant votre premier centime dépensé — parce que l’erreur coûteuse n’est pas un rendu raté, c’est de découvrir que le récit était de travers une fois l’argent parti.",
      stats: [
        { n: "Regarder d’abord, payer après", l: "une salle le lit entièrement pour vous" },
        { n: "Retouchez librement", l: "quel que soit le nombre de reprises d’un plan, vous en payez une" },
        { n: "Prêt à publier", l: "quatre formats d’image, 720p ou 1080p" }
      ],
      chips: ["Vu avant d’être payé", "Retouchez autant que vous voulez", "Quatre formats, prêts à publier"],
      youSend: "Une idée, un format d’image, une durée approximative. Plus tout élément de marque, de produit, de personnage ou de style que vous avez.",
      youGet: "Plusieurs façons vraiment différentes de la raconter, et la réaction honnête d’une salle à chacune. Ensuite, la vidéo.",
      features: [
        {
          title: "Vous savez si cela marche avant de payer",
          body: "Quelques spectateurs le lisent à froid, séparément, en refusant de prendre vos propres étiquettes pour des preuves — ils ne rapportent que ce qu’ils ont vraiment vu. Et celui qui démonte tout à la fin n’a pris aucune part à l’invention, c’est pourquoi sa critique mord."
        },
        {
          title: "Vous pouvez vous permettre d’être exigeant",
          body: "Refaites vingt fois le même plan et il se produit exactement une génération payante. Changez ce que vous voulez sans faire du calcul mental en même temps."
        },
        {
          title: "Ce qui vous arrive, ce sont des images utilisables",
          body: "Images noires, son coupé, un plan manquant — il vérifie d’abord. Vous n’avez pas à traîner chaque clip dans une timeline et à le regarder en entier avant d’oser l’utiliser."
        },
        {
          title: "Il n’ira pas réécrire votre travail",
          body: "Quand quelque chose casse, il répare ce qui a vraiment cassé. Un téléchargement raté ne fera jamais traiter votre très bonne idée comme le défaut."
        },
        {
          title: "Le public reste dans l’histoire",
          body: "Le visage du quatrième plan est encore celui du premier."
        },
        {
          title: "Continuez dans le logiciel que vous connaissez le mieux",
          body: "Les coupes suivent le rythme de la musique, et ce que vous exportez est un vrai projet CapCut que vous pouvez continuer à retravailler."
        },
        {
          title: "Si c’est bon ou non, c’est vous qui décidez",
          body: "Il ne note pas votre goût, et il n’ira pas tout refaire jusqu’à ce qu’il soit satisfait. Il ne publie nulle part non plus — quand cela sort, et quelle version sort, c’est à vous d’en décider."
        }
      ],
      proof: {
        head: "avant de payer",
        lab: "0 €",
        body: [
          "votre idée ...... <span class='ok'>3 façons vraiment différentes de le raconter</span>",
          "5 spectateurs ... <span class='dim'>lecture à froid · isolés les uns des autres</span>",
          "ils disent ...... <span class='hl'>les places 2 et 4 se méprennent au même moment</span>",
          "le critique ..... <span class='dim'>n’en a écrit aucune</span>",
          "à ce stade ...... <span class='ok'>pas un centime dépensé</span>"
        ]
      },
      proofNote:
        "L’erreur coûteuse n’est pas un rendu raté — c’est de découvrir que le récit était de travers une fois l’argent parti. Le démontage a donc lieu en premier, et celui qui s’en charge n’a pris aucune part à l’invention. C’est ce qui le rend capable de le faire."
    },

    equity: {
      name: "Investissement",
      tagline: "Vous aviez vu cette occasion venir. Vous ne l’avez juste pas gardée",
      metaTitle: "Investissement | Vous aviez vu cette occasion venir. Vous ne l’avez juste pas gardée",
      metaDescription:
        "Un partenaire à la mémoire meilleure et à la tête plus froide que la vôtre : il tient le fil pour vous, il tient les règles que vous avez écrites, et le jour où vous êtes sur le point d’en briser une, il vous arrête.",
      h1: "Vous aviez vu cette occasion venir. <span class='o'>Vous ne l’avez juste pas gardée.</span>",
      answer:
        "Les grandes occasions mettent des trimestres à pousser. Une technologie sort du laboratoire, une politique entre en vigueur, une chaîne d’approvisionnement se détourne — et quelque part au milieu vous oubliez, vous doutez, vous vendez le pire jour possible. Ce qui vous manquait n’a jamais été une source d’information de plus. C’était un partenaire à la mémoire meilleure et à la tête plus froide que la vôtre : il tient le fil pour vous, il tient les règles que vous vous êtes écrites, et le jour où vous êtes sur le point d’en briser une, il vous arrête.",
      stats: [
        { n: "Vous tenez bon", l: "il garde un fil vivant pendant des trimestres" },
        { n: "Un regret de moins", l: "le geste que vous regretteriez est arrêté au moment où vous le faites" },
        { n: "Vous pouvez y revenir", l: "trois ans après, vous savez encore ce que vous pensiez" }
      ],
      chips: ["Un fil tenu pendant des trimestres", "Il vous retient à votre ligne", "Il ne touche jamais votre argent"],
      youSend: "Une ligne depuis une messagerie — « il se passe quoi avec 0700 ? », « je pense alléger NVDA » — ou rien du tout ; il regarde de toute façon.",
      youGet: "Une analyse que vous pouvez vraiment vérifier, et une trace de ce que vous pensiez, y compris le contre-argument que vous avez dû écrire vous-même.",
      features: [
        {
          title: "Vous cessez de rater ce que vous aviez bien vu",
          body: "Le titre que vous avez mentionné en passant est encore surveillé six mois plus tard. Il vient vous voir quand quelque chose a vraiment bougé, pas avec un rapport chaque matin — il se souvient pour que vous ayez la tête à autre chose."
        },
        {
          title: "Il regarde deux crans plus loin dans la chaîne pour vous",
          body: "Fournisseurs, clients, concurrents, régulateurs et facteurs macro autour de ce que vous détenez — il fait deux pas vers l’extérieur et rapporte ce qui vaut le coup d’œil, en précisant quelle position cela touche et par quelle relation. Ce que vous voyez n’est plus une seule entreprise."
        },
        {
          title: "Il comprend votre façon de dire les choses",
          body: "La note que vous avez griffonnée sur les 美债收益率 et le US 10-year qu’il vient de lire sont la même chose pour lui. Vous n’avez pas à apprendre son vocabulaire."
        },
        {
          title: "Une direction, une équipe dessus",
          body: "Fondamentaux, paysage concurrentiel, derniers dépôts réglementaires et contexte macro d’un seul coup, plus quelqu’un dont le travail est de défendre l’autre camp. Ce que vous obtenez n’est pas un rapport qui ne dit que des choses agréables."
        },
        {
          title: "Les règles que vous posez vous arrêtent vraiment",
          body: "Écrivez « aucune position au-dessus de 15% » et, le jour où vous la franchiriez, le geste est arrêté et vous avez trois choix : retirer la règle en disant pourquoi, réduire l’action, ou annuler. La plupart des pertes ne viennent pas d’une erreur de jugement. Elles viennent de ce que personne ne vous a arrêté ce jour-là."
        },
        {
          title: "Il ne touche jamais votre argent",
          body: "Il ne peut pas passer d’ordre, et il n’ajoutera jamais quelque chose à votre liste de suivi à votre place. Quoi suivre, sur quoi agir — à chaque fois, c’est vous. Il vous aide seulement à y réfléchir. Vos mains restent les vôtres."
        },
        {
          title: "Trois ans plus tard, vous pouvez revenir à ce jour-là",
          body: "Chaque opération porte le contre-argument que vous avez dû écrire avant qu’elle puisse être enregistrée. Ce que vous pouvez revoir n’est pas seulement combien vous avez gagné — c’est votre façon de penser à ce moment-là. C’est cette part-là qui vous fait progresser."
        }
      ],
      proof: {
        head: "cette fois",
        lab: "arrêté",
        body: [
          "ce que vous voulez ... <span class='hl'>renforcer · jusqu’à 22%</span>",
          "la règle posée ....... <span class='dim'>aucune position au-dessus de 15%</span>",
          "<span class='hl'>→ arrêté</span>",
          "vous pouvez .......... <span class='ok'>retirer la règle · la réduire · annuler</span>"
        ]
      },
      proofNote:
        "La plupart des pertes ne viennent pas d’une erreur de jugement. Elles viennent de ce que personne ne vous a arrêté ce jour-là. Il place donc les règles que vous avez écrites devant chaque décision — celui qui vous arrête, ce n’est pas lui, c’est la version de vous qui pensait clairement."
    },

    "content-research": {
      name: "Recherche",
      tagline: "Vous voulez comprendre une chose, et tout ce que vous trouvez est copié",
      metaTitle: "Recherche | Vous voulez comprendre une chose, et tout est copié sur le reste",
      metaDescription:
        "Une table ronde que personne n’a transcrite, un podcast de deux heures, le code source réel d’un projet — il les récupère et les met par écrit. Vous ressortez avec une phrase que personne d’autre n’a, et une citation que vous pouvez ouvrir.",
      h1: "Vous voulez comprendre une chose. <span class='o'>Tout ce que vous trouvez est copié.</span>",
      answer:
        "Il est un peu obsessionnel. Donnez-lui un sujet et il ne se contentera pas de chercher puis d’écrire. Une table ronde que personne n’a jamais transcrite, un podcast de deux heures, le code source réel d’un projet, le compte rendu écrit après coup par quelqu’un — il récupère tout cela et le met par écrit. Ce que vous tenez à la fin, c’est une phrase que personne n’avait jamais écrite, avec une citation que vous pouvez ouvrir. Dans une pièce pleine de monde, vous serez celui qui peut dire quelque chose de vrai.",
      stats: [
        { n: "De la matière que personne n’a", l: "venue d’endroits que personne n’a transcrits" },
        { n: "Cela tient", l: "chaque phrase s’ouvre sur sa source" },
        { n: "Cela ne périmera pas", l: "si la base change, le texte vous le dit" }
      ],
      chips: ["De la matière que personne d’autre n’a", "Chaque phrase ouvre sa source", "Il vous dit quand la base bouge"],
      youSend: "Un sujet. « Trouve ce qui s’est vraiment passé avec X ce trimestre, et quelle part de la couverture est recyclée. »",
      youGet: "Un rapport que vous seriez prêt à défendre : des citations que personne ne peut copier ailleurs, et une source ouvrable derrière chaque phrase.",
      features: [
        {
          title: "Vous pouvez dire ce que les autres ne peuvent pas",
          body: "Une table ronde que personne n’a transcrite, un podcast de deux heures — il les récupère, les met par écrit, et cite mot pour mot. Votre rapport finit avec une phrase que personne n’aurait pu copier."
        },
        {
          title: "Vos conclusions survivent aux questions",
          body: "Chaque phrase remonte à sa source, avec un horodatage. Quand on vous demande d’où cela vient, vous n’avez qu’à l’ouvrir."
        },
        {
          title: "« Beaucoup de sources le disent » ne vous trompe pas",
          body: "Douze réécritures du même communiqué de presse sont reconnues pour ce qu’elles sont et comptées une seule fois."
        },
        {
          title: "Vous n’entrez pas en réunion avec le mauvais chiffre",
          body: "Quand deux sources divergent, il l’attrape en premier — et il connaît la différence entre 万, 千 et 亿."
        },
        {
          title: "Si la base bouge, vous êtes le premier prévenu",
          body: "Renversez une conclusion et il vous dit aussitôt quels textes doivent changer. Aucune phrase ne survit discrètement à ce sur quoi elle reposait."
        },
        {
          title: "Quand il n’arrive pas à quelque chose, il le dit",
          body: "Il vous dit quelle partie il n’a pas pu creuser jusqu’au bout au lieu de combler le trou par un joli paragraphe. C’est comme cela que vous savez s’il faut aller regarder vous-même."
        },
        {
          title: "Que cela sorte ou non, c’est vous qui décidez",
          body: "Il ne publie pas à votre place, nulle part. Et ce sur quoi vous vous renseignez ne regarde personne — la recherche et la transcription tournent sur votre propre machine."
        }
      ],
      proof: {
        head: "cette phrase",
        lab: "elle s’ouvre",
        body: [
          "la citation voulue ... <span class='ok'>d’une table ronde que personne n’a transcrite</span>",
          "vous recevez ......... <span class='ok'>mot pour mot · source horodatée</span>",
          "on demande d’où ...... <span class='hl'>il suffit de l’ouvrir</span>",
          "la base a bougé ...... <span class='dim'>il nomme les deux textes à corriger</span>"
        ]
      },
      proofNote:
        "Dans une pièce pleine de monde, celui qui peut dire quelque chose de vrai n’est pas celui qui a le plus lu. C’est celui qui a lu là où personne d’autre n’est allé. Aller dans ces endroits-là, c’est son travail."
    },

    programming: {
      name: "Code",
      tagline: "Une base de code inconnue et immense — il la comprend avant d’y toucher",
      metaTitle: "Code | Une base de code inconnue et immense — comprise avant d’y toucher",
      metaDescription:
        "Des millions de lignes déployées en une seule carte, en quelques millisecondes. Ce qui prend vingt allers-retours à un autre agent, il le trouve souvent du premier coup. Et vous ne configurez jamais un langage.",
      h1: "Une base de code inconnue et immense — <span class='o'>il la comprend avant d’y toucher.</span>",
      answer:
        "Reprendre un projet que vous ne connaissez pas, ou revenir au dépôt que vous n’avez pas ouvert depuis trois mois — le plus épuisant n’a jamais été d’écrire. C’est de comprendre ce qui peut bien s’y passer. Des millions de lignes se déploient devant lui en une seule carte, en quelques millisecondes. Puis vous demandez « qui utilise ce truc » — là où un autre agent fait vingt allers-retours, il pointe généralement droit dessus, à travers autant de paquets qu’il faut, sans rien oublier. La première fois qu’un nouveau langage apparaît dans votre projet, vous ne configurez rien. Ce que vous économisez, ce ne sont pas quelques minutes. C’est l’après-midi que vous auriez passé à tourner en rond.",
      stats: [
        { n: "Quelques millisecondes", l: "des millions de lignes déployées en une seule carte" },
        { n: "Du premier coup", l: "ce qu’un autre agent met vingt allers-retours à trouver" },
        { n: "29 langages", l: "vous n’en configurez aucun" }
      ],
      chips: ["Des millions de lignes en une carte", "Du premier coup, pas vingt essais", "Aucun environnement à configurer"],
      youSend: "Une tâche, en une phrase. « Fais en sorte que le chemin de reprise survive à un portable en veille, avec un test de non-régression. »",
      youGet: "Du code qui marche, des tests qui ont tourné, et une réponse franche : jusqu’où il a vérifié, et ce qui reste risqué.",
      features: [
        {
          title: "Fini l’après-midi perdu sur « qui utilise ce truc »",
          body: "Il répond après avoir lu tout le dépôt, pas en cherchant un mot-clé et un fichier à la fois. Rien de tronqué, rien d’oublié — vous n’avez pas à revenir vérifier."
        },
        {
          title: "Changer de langage ne veut pas dire monter un environnement",
          body: "Go, Python, Rust ou autre chose apparaît dans le projet et vous travaillez, simplement. Ce qui s’installe et ce qui se lance, vous n’avez jamais besoin de le savoir."
        },
        {
          title: "Un autre agent essaie vingt fois ; lui tombe juste du premier coup",
          body: "Des millions de lignes deviennent une seule carte en quelques millisecondes, alors vous demandez une fois et il pointe l’endroit : dix-neuf points d’appel dans quatre paquets, tous d’un coup, plutôt qu’un par tentative. Vous ne restez pas assis à le regarder deviner."
        },
        {
          title: "Une seule personne peut travailler comme une équipe",
          body: "Trois chantiers en parallèle sur le même projet, sans se marcher dessus. Ce qui est trouvé reste avec le projet, donc si vous ne le corrigez pas aujourd’hui, demain — ou une autre machine, ou un collègue — le reprend avec le raisonnement intact. Même un projet à une personne a droit à une passation."
        },
        {
          title: "Il vous dit jusqu’où il a vérifié",
          body: "« Cela compile » compte comme un échelon, et il l’étiquettera comme cet échelon-là. Vous savez s’il faut aller regarder vous-même, au lieu qu’on vous expédie d’un « c’est fait »."
        },
        {
          title: "Il respecte vos conventions",
          body: "Il lit les conventions d’ingénierie déjà présentes dans le projet et les suit. On ne vous laisse pas ranger un tas de code qui ne ressemble à rien d’autre."
        },
        {
          title: "C’est vous qui appuyez en dernier, à chaque fois",
          body: "Il travaille avec vos permissions, dans le répertoire que vous lui indiquez, et s’arrête pour demander avant tout ce qui est sensible. Fusionner, pousser, publier — cette dernière pression est toujours la vôtre."
        }
      ],
      proof: {
        head: "ce dépôt",
        lab: "déplié",
        body: [
          "millions de lignes ... <span class='ok'>quelques millisecondes · une seule carte</span>",
          "qui l’utilise ........ <span class='ok'>du premier coup · 4 paquets · rien d’oublié</span>",
          "un autre agent ....... <span class='dim'>même question · vingt allers-retours</span>",
          "ce produit ........... <span class='hl'>des millions de lignes, écrites à moitié par lui</span>"
        ]
      },
      proofNote:
        "L’argument le plus convaincant est le produit lui-même : plusieurs millions de lignes de code, dont la moitié écrite par la chose dont vous lisez la présentation."
    },

    "data-studio": {
      name: "Atelier de données",
      tagline: "Glissez les tableurs, posez une question, recevez un graphique cliquable",
      metaTitle: "Atelier de données | Vous ne devriez pas avoir à devenir analyste pour poser une question à vos données",
      metaDescription:
        "Glissez les tableaux dedans et il les stocke et les lit tout seul ; posez une question et recevez un graphique à filtrer et à explorer. Allez plus loin quand vous voulez — SQL, modèles, Excel, il assume tout.",
      h1: "Vous ne devriez pas avoir à devenir analyste <span class='o'>pour poser une question à vos propres données.</span>",
      answer:
        "Le tableau est là et la question aussi — avec un environnement, une base de données, un import, du SQL et un graphique entre les deux. Le temps que vous ayez franchi tout cela, la question n’a en général plus d’importance. Rien de tout cela ici. Glissez les tableaux dedans et il les stocke et les lit tout seul ; posez une question et il revient un graphique sur lequel vous pouvez cliquer, filtrer et descendre dans le détail. Vous voulez aller une couche plus loin, allez une couche plus loin — SQL, apprentissage automatique, Excel, il assume tout.",
      stats: [
        { n: "Glissez et demandez", l: "pas de base de données, pas d’environnement, aucune configuration" },
        { n: "Un graphique cliquable", l: "pas une capture d’écran — filtrez-le, descendez dedans" },
        { n: "Aussi loin que vous voulez", l: "une simple question, ou du SQL et un modèle" }
      ],
      chips: ["Glissez et demandez", "Des graphiques où descendre", "SQL et modèles aussi"],
      youSend: "Douze fichiers Excel glissés d’un coup, ou une question : « quel canal a eu le meilleur taux de réachat l’an dernier ? »",
      youGet: "Un graphique où cliquer, filtrer et descendre dans le détail — et le mois prochain, quand les données se mettent à jour, il se met à jour tout seul.",
      features: [
        {
          title: "Glisser les tableaux dedans, c’est toute l’installation",
          body: "Excel, CSV, des dizaines de fichiers d’un coup. Il déduit les colonnes, les types et quelles tables parlent de la même chose, puis les range dans sa propre base de données. Vous n’installez rien et ne configurez rien."
        },
        {
          title: "La base de votre entreprise, il suffit de la brancher",
          body: "Postgres, MySQL, votre entrepôt — remplissez une fois. Ensuite vous interrogez tout cela avec vos tables locales, sans avoir à retenir quelles données vivent où ni quel outil les ouvre."
        },
        {
          title: "Posez une question, recevez un graphique cliquable",
          body: "Pas une capture d’écran qu’on vous tend. Filtrez-le, découpez-le par mois, cliquez dans une ligne pour le détail — tout cela sur le graphique lui-même. Vouloir un autre angle n’oblige pas à revenir redemander."
        },
        {
          title: "Il vous dit d’abord si les données sont fiables",
          body: "Quelle colonne est à moitié vide, quelles lignes sont en double, quel mois manque. Vous n’emportez pas en réunion une conclusion bâtie sur des données sales."
        },
        {
          title: "Quand la question devient plus dure, vous ne changez pas d’outil",
          body: "Ce qu’une simple question peut résoudre, il le résout simplement. Vous voulez du SQL, écrivez du SQL ; vous voulez une prévision, un partitionnement, une chasse aux valeurs aberrantes, il assume aussi. De « comment s’est passé ce mois-ci » à « comment sera le mois prochain », c’est le même endroit."
        },
        {
          title: "Le mois prochain, c’est déjà à jour",
          body: "Tableaux de bord, requêtes et exports se gardent. Quand les données se mettent à jour, le même graphique se met à jour avec elles — vous ne le refaites pas chaque mois. Ce que vous accumulez, ce sont vos propres rapports, pas un tas de captures d’écran jetables."
        },
        {
          title: "Vos données restent sur votre machine, et il demande avant d’agir",
          body: "Vos tables vivent sur votre propre ordinateur. Tout ce qui modifierait des données sur une base distante, il s’arrête et vous le demande d’abord."
        }
      ],
      proof: {
        head: "ces 12 tableaux",
        lab: "déposés",
        body: [
          "vous avez fait ..... <span class='dim'>glissé 12 tableurs</span>",
          "il a fait .......... <span class='ok'>types · regroupement · rangement · 3 zones sales signalées</span>",
          "vous demandez ...... <span class='hl'>« quel canal a eu le meilleur taux de réachat l’an dernier ? »</span>",
          "vous obtenez ....... <span class='ok'>un graphique où cliquer pour le détail</span>",
          "le mois prochain ... <span class='dim'>les données changent, le graphique se met à jour tout seul</span>"
        ]
      },
      proofNote:
        "De « comment s’est passé ce mois-ci » à « comment sera le mois prochain », c’est le même endroit et les mêmes données. Poser une question plus dure n’oblige pas à tout recommencer avec une autre panoplie d’outils."
    },

    "talking-head": {
      name: "Montage face caméra",
      tagline: "Vous avez quelque chose à dire. Cela ne devrait pas coûter trois jours",
      metaTitle: "Face caméra | Vous avez quelque chose à dire. Cela ne devrait pas coûter trois jours",
      metaDescription:
        "Il porte les étapes fastidieuses : le script et ses sources arrivent d’un seul geste, et une fois que vous avez enregistré, modifier le texte c’est monter la vidéo. Votre propre voix, du début à la fin.",
      h1: "Vous avez quelque chose à dire. <span class='o'>Cela ne devrait pas vous coûter trois jours.</span>",
      answer:
        "Choisir le sujet, déterrer la matière, écrire, enregistrer, monter, sous-titrer — chaque étape suffit à décourager, et c’est ainsi que beaucoup de choses que les gens voulaient dire n’ont jamais été dites. Il porte les fastidieuses pour vous : le script et ses sources arrivent d’un seul geste ; vous déposez votre enregistrement, et modifier le texte c’est monter la vidéo — supprimez une phrase et le montage raccourcit d’une phrase. Vous n’avez qu’à parler. Il s’occupe du reste. Et du début à la fin, c’est votre propre voix.",
      stats: [
        { n: "Un après-midi", l: "c’était trois jours avant" },
        { n: "Votre propre voix", l: "pas un mot remplacé par une machine" },
        { n: "Si vous savez modifier du texte", l: "vous savez monter une vidéo — aucun logiciel à apprendre" }
      ],
      chips: ["Trois jours deviennent un après-midi", "Votre voix du début à la fin", "Modifier le texte, monter la vidéo"],
      youSend: "Le plan que vous venez d’enregistrer, ou un texte fini venu du côté recherche. Plus un objectif : « ramène cela à trois minutes. »",
      youGet: "Un montage fini avec sous-titres, ou un fichier de projet qui s’ouvre directement dans le logiciel que vous utilisez déjà.",
      features: [
        {
          title: "La barrière descend à une hauteur que vous pouvez enjamber",
          body: "La transcription est la timeline — supprimez les mots et la vidéo suit. Vous n’avez pas à apprendre un logiciel de montage avant d’avoir le droit de parler."
        },
        {
          title: "Ce que le public entend, c’est toujours vous",
          body: "Pas d’avatar généré, pas de voix machine en piste principale. Ce n’est que lorsque vous vous trompez sur un mot qu’une voix clonée sert à rapiécer ce mot-là, et seulement avec votre accord."
        },
        {
          title: "Plus besoin de tout recopier-coller",
          body: "Un script dont les faits ont été vérifiés arrive avec ses sources attachées, vous ne repartez donc pas chercher de quel article il s’agissait."
        },
        {
          title: "Il fait pour vous l’heure la plus fastidieuse",
          body: "Les euh, les hésitations, les blancs, le nom mal prononcé, la digression — tout est signalé pour que vous acceptiez ou écartiez d’un clic."
        },
        {
          title: "Un plan ou un chiffre manquant ne casse pas votre élan",
          body: "Il manque un chiffre pour un graphique, il va le chercher du côté recherche, sources attachées ; il manque un plan de coupe ou une image qui n’existe nulle part, il va chercher, et en génère une si rien ne convient. Vous ne restez pas là avec trois onglets ouverts."
        },
        {
          title: "Vous n’êtes jamais enfermé dans un seul outil",
          body: "Exportez un projet que Final Cut ou Premiere ouvre, et il s’ouvre sur la version que vous veniez de regarder. Envie de finir à la main ? Reprenez la main quand vous voulez."
        },
        {
          title: "La vidéo est votre travail, pas sa production",
          body: "Quelle phrase reste, quel plan est utilisé, quand cela sort — chacune de ces décisions est la vôtre. Il ne publie pas à votre place, nulle part."
        }
      ],
      proof: {
        head: "celle-ci",
        lab: "un après-midi",
        body: [
          "vous n’avez qu’à ... <span class='ok'>parler</span>",
          "ensuite ............ <span class='hl'>modifier le texte = monter la vidéo</span>",
          "le script .......... <span class='dim'>arrive avec ses sources</span>",
          "avant .............. <span class='dim'>trois jours</span>",
          "maintenant ......... <span class='ok'>un après-midi</span>"
        ]
      },
      proofNote:
        "Beaucoup de choses que les gens voulaient dire n’ont jamais été dites — non par manque d’idées, mais parce que les six étapes du milieu suffisaient à décourager n’importe qui. Il porte ces six-là. Il vous reste celle qui était la vôtre : la dire."
    },

    "pet-care": {
      name: "Soin des animaux",
      tagline: "Il ne peut pas vous le dire. Vous ne pouvez que deviner — sauf si quelqu’un note",
      metaTitle: "Soin des animaux | Il ne peut pas vous le dire. Vous ne pouvez que deviner — sauf si quelqu’un note",
      metaDescription:
        "Il vous inquiète quand il y a de quoi s’inquiéter, et vous laisse tranquille sinon. Avant le rendez-vous, les questions qui valent la peine sont prêtes. Des années plus tard, il y a de quoi se retourner.",
      h1: "Il ne peut pas vous le dire. <span class='o'>Vous ne pouvez que deviner — sauf si quelqu’un note.</span>",
      answer:
        "Les vaccins et les vermifuges des premières années, le poids, les dents et l’appétit de l’âge adulte, et les changements de la vieillesse qui commencent légers et dont on comprend plus tard qu’ils comptaient — tout sur une même ligne du temps. Il vous inquiète quand il y a de quoi s’inquiéter, et vous laisse tranquille quand il n’y a rien. Avant un rendez-vous, il a prêtes les questions qui valent vraiment la peine, pour que vos dix minutes avec le vétérinaire ne se passent pas à vous souvenir. Et le peu qu’il note chaque mois est encore là le jour où vous voulez vous retourner.",
      stats: [
        { n: "Vu plus tôt", l: "les changements qui commencent légers" },
        { n: "Dix minutes bien employées", l: "les questions sont prêtes avant d’entrer" },
        { n: "Toute une vie", l: "encore là chaque fois que vous voulez la revoir" }
      ],
      chips: ["Les changements vus plus tôt", "Les questions prêtes avant la visite", "Toute une vie conservée"],
      youSend: "Une photo — un carnet, une étiquette, une promenade — ou une ligne : « elle ne mange plus depuis mardi ».",
      youGet: "Une alerte quand cela compte, avec sa source. Trois questions pour le vétérinaire. Et un journal que vous n’avez jamais eu à tenir.",
      features: [
        {
          title: "Vous vous inquiétez quand il y a de quoi s’inquiéter",
          body: "Trente-six lignes rouges de santé, chacune rattachée à une autorité (le MSD Veterinary Manual, le Cornell Feline Health Center, AAHA, WSAVA). Quand il signale quelque chose, vous pouvez apporter la source à votre vétérinaire ; quand il ne signale rien, vous pouvez dormir."
        },
        {
          title: "Dix minutes avec le vétérinaire, passées là où cela compte",
          body: "Il transforme ce qu’il observe depuis un moment en les quelques questions qui valent la peine. Le jugement appartient à votre vétérinaire ; son travail à lui est de vous faire poser la bonne question — au lieu de rester planté à essayer de vous rappeler quand cela a commencé."
        },
        {
          title: "Les carnets cessent d’être des photos introuvables",
          body: "Photographiez-en un et il devient des valeurs de laboratoire, des ordonnances et des constantes consultables, dans l’ordre. Changez de clinique et vous pouvez encore expliquer tout l’historique."
        },
        {
          title: "Quand il prend la parole, cela mérite d’être écouté",
          body: "Les lignes rouges ne se discutent pas, et elles ne s’assouplissent pas parce que vous avez tourné autour. Il préfère être prudent que d’en laisser passer une pour votre confort."
        },
        {
          title: "Ce que les gens racontent en ligne ne devient jamais un fait",
          body: "Votre propre observation, la littérature vétérinaire, ce qu’a dit votre vétérinaire, et ce que quelqu’un a publié restent nettement séparés. Le dernier n’est jamais qu’un contexte — jamais utilisé comme base pour vous faire peur."
        },
        {
          title: "Quand il sera vieux, vous aurez de quoi feuilleter",
          body: "Le journal de croissance et les notes mensuelles s’assemblent tout seuls à partir de ce qui s’est vraiment passé, illustrations comprises. Vous n’avez jamais mis une soirée de côté pour les rédiger — mais dans dix ans, quand vous les voudrez, ils sont là."
        }
      ],
      proof: {
        head: "ensemble depuis",
        lab: "3 ans, 2 mois",
        body: [
          "vaccins ........ <span class='ok'>12 · tous consignés</span>",
          "poids .......... <span class='ok'>26 mois · sans interruption</span>",
          "aujourd’hui .... <span class='hl'>boit davantage · franchit une ligne</span>",
          "vous recevez ... <span class='ok'>alerte + source + 3 questions pour le vétérinaire</span>"
        ]
      },
      proofNote:
        "Quand il ne signale rien, vous pouvez dormir — et cela compte autant que ce qu’il signale. Une chose qui vous alarme sur tout ne vous a rien dit."
    }
  }
};
