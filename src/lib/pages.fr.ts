import { RELEASED, assets, dl } from "@/lib/download";
import type { PageContent, PageKey } from "@/lib/pages";

export const pagesFr: Record<PageKey, PageContent> = {
  "how-it-works": {
    title: "Comment fonctionne DeTars | Une ligne en entrée, du travail fini en sortie",
    description:
      "Envoyez une ligne ou une photo à DeTars depuis n'importe quelle messagerie. Elle tourne en arrière-plan pendant des heures, puis revient vers vous avec du travail fini.",
    kicker: "Vivre avec",
    h1: "Lancez-lui une ligne. <span class='o'>Elle fait le reste.</span>",
    answer:
      "DeTars prend une entrée depuis n'importe quelle messagerie que vous utilisez déjà, exécute le travail en arrière-plan — pendant des heures, voire toute la nuit — et revient vers vous une fois terminé. Elle vit pour vous, pas l'inverse.",
    sections: [
      {
        h2: "Le motif unique",
        intro: "Tout ce que vous faites avec DeTars suit la même forme.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Une entrée, d'où vous voulez.</b> Une ligne ou une photo via Feishu, Slack, Telegram ou WeChat — aucune nouvelle appli à apprendre.",
              "<b>Elle tourne en arrière-plan.</b> Elle planifie, mobilise des spécialistes, et travaille des heures sans que vous la surveilliez.",
              "<b>Elle revient vers vous.</b> Quand le travail est fini — ou quand elle a vraiment besoin d'une décision — elle vous fait signe."
            ]
          }
        ]
      },
      {
        h2: "Quatre usages déjà bien réels",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "Pet Care", title: "📷 Une photo de votre chien", body: "Envoyez un cliché ; recevez une vidéo courte et marrante plus des légendes prêtes à publier." },
              { tag: "Investing", title: "💡 Une action dont vous avez entendu parler", body: "Mentionnez-la une fois ; elle continue de surveiller et revient dès qu'il se passe quelque chose. Le trading est verrouillé par le code." },
              { tag: "Voiceover", title: "🎙️ Un plan face caméra", body: "Filmez sur le pouce ; recevez un montage avec sous-titres — votre vraie voix conservée, pas remplacée par une synthèse vocale." },
              { tag: "Research", title: "🔍 Quelque chose entendu au passage", body: "Une ligne ; recevez un rapport sourcé et un suivi continu du sujet." }
            ]
          }
        ]
      },
      {
        h2: "Pourquoi ce n'est pas un énième chatbot",
        blocks: [
          {
            type: "p",
            html:
              "Un chatbot vous attend et oublie. DeTars porte un objectif : elle raisonne sur le <b>comment</b> faire le travail, se relève quand quelque chose casse, et ne marque une tâche comme finie que lorsqu'elle peut le prouver. La fenêtre de chat n'est que la surface — le travail se passe en dessous."
          }
        ]
      }
    ],
    cta: { label: "Voyez pourquoi vous pouvez lui faire confiance →", route: "/reliable" }
  },

  reliable: {
    title: "Pourquoi DeTars est fiable | Six choses qu'elle fait et que les autres ne savent pas faire",
    description:
      "DeTars transforme une IA brillante mais peu fiable en une équipe à qui confier du vrai travail : elle raisonne, survit aux pannes, ne peut pas simuler l'achèvement, se corrige seule, reste la vôtre, et n'est liée à aucun fournisseur.",
    kicker: "Pourquoi vous pouvez lui faire confiance",
    h1: "La fiabilité, <span class='o'>inscrite dans l'architecture.</span>",
    answer:
      "L'IA d'aujourd'hui est un stagiaire brillant mais peu fiable. DeTars la rend digne de confiance grâce à six propriétés structurelles — pas des promesses, mais des mécanismes que vous pouvez vérifier.",
    sections: [
      {
        h2: "Les six",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Elle pense par elle-même.</b> Donnez-lui un objectif ; elle décompose le travail, forme une équipe de spécialistes, suit l'avancement, se met en pause pour attendre les résultats, puis reprend. Le comment est raisonné sur le moment, pas un script figé d'avance.",
              "<b>Elle ne s'effondre pas.</b> Quotas, délais dépassés, veille, plantages — elle traite chacun comme un fait à contourner : temporise, réessaie, point de reprise, reprend. Laissez-la tourner la nuit ; lisez les résultats au matin.",
              "<b>Elle ne peut pas faire semblant.</b> &lsquo;Terminé&rsquo; est un reçu qui doit être honoré : livré, étayé par des preuves, revu par les pairs. Chaque citation est scellée par un hash de contenu — changez un seul caractère et elle est aussitôt invalidée.",
              "<b>Elle a un système immunitaire.</b> Elle traque ses propres erreurs et fait de chacune une couverture de non-régression permanente. Elle a déjà, par deux fois, débusqué des bugs dans ses propres outils d'auto-vérification.",
              "<b>Elle est à vous.</b> Elle vit sur votre machine ; ce qu'elle retient passe par votre accord et existe sous forme de fichiers sur votre disque. Personne ne peut la bloquer comme Rewind ou Humane ont bloqué leurs utilisateurs.",
              "<b>Elle n'est pas captive.</b> Elle dirige chaque tâche vers le cerveau le mieux adapté — modèles de pointe US/Chine ou un modèle local sur votre portable, ~50 entre lesquels basculer. Le moteur est le sien, pas une surcouche sur l'API d'un tiers."
            ]
          }
        ]
      },
      {
        h2: "Et elle <span class='o'>évolue d'elle-même</span>",
        intro: "La fiabilité ne se règle pas une fois pour toutes — elle se cumule. Trois cercles vertueux rendent chaque version plus dure à battre.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Auto-durcissement.</b> Elle traque ses propres erreurs et fait de chacune une couverture de non-régression permanente — si bien que chaque version est plus dure à casser que la précédente. Une fiabilité qui ne s'achète pas, seulement s'accumule.",
              "<b>Mémoire auto-optimisée.</b> Elle réorganise et élague en continu son propre système de mémoire pour garder un rappel précis à mesure qu'elle grandit — tandis que ce qu'elle retient <i>de vous</i> passe toujours par votre accord.",
              "<b>Auto-extension.</b> Quand une tâche réclame une capacité qui lui manque, elle génère, installe et gère ses propres outils et compétences — se forgeant de nouvelles capacités de façon autonome, sans attendre une mise à jour."
            ]
          }
        ]
      },
      {
        h2: "En dessous : l'ingénierie qui tient tout",
        intro: "Vous n'avez pas besoin des détails — mais chacun est vérifiable, même si l'implémentation est une propriété intellectuelle centrale que nous ne publions pas.",
        blocks: [
          {
            type: "list",
            items: [
              "Une discipline d'écriture de niveau base de données, pour qu'une équipe d'agents n'écrase jamais le travail des autres.",
              "Des preuves à empreinte de contenu : une source non lue ou modifiée ne peut pas être citée.",
              "Un routage conscient du cache garde le KV / prompt cache du modèle chaud — le contexte répété n'est pas facturé deux fois, donc les longues tâches coûtent bien moins de tokens, et la facture baisse à mesure que les prix des modèles baissent.",
              "Un million de mots de matière pré-digérés en un index avant que le modèle n'en lise un seul.",
              "Un registre de budget conservé, pour qu'elle ne puisse pas s'octroyer une portée ou une dépense infinie.",
              "Un second esprit en lecture seule qui relit l'exécution en plein vol et renvoie des corrections.",
              "Une reprise sur erreur typée — quota, délai dépassé et blocage empruntent chacun une voie différente.",
              "Les actions irréversibles (ordres, envoi, identifiants sensibles) verrouillées par défaut jusqu'à votre autorisation."
            ]
          }
        ]
      }
    ],
    cta: { label: "Voir la preuve →", route: "/proof" }
  },

  packs: {
    title: "DeTars Packs | Un app store pour une équipe d'experts",
    description:
      "Les Packs sont des applis verticales qui tournent sur le même moteur fiable et sur une mémoire qui vous appartient. Pet Care et Investing sont en service ; d'autres sont en construction. Plus il y a de packs, plus votre mémoire s'épaissit.",
    kicker: "Un app store d'experts",
    h1: "Un seul moteur fiable. <span class='o'>De nombreux experts.</span>",
    answer:
      "Les Packs ne sont pas huit fonctions isolées — ce sont les premières applis d'un store. Le même moteur fiable fait émerger un nouveau pack en quelques semaines, et chaque pack tourne sur la mémoire canonique qui vous appartient. Plus vous utilisez de packs, plus votre mémoire s'épaissit et plus la plateforme se cumule vite.",
    sections: [
      {
        h2: "Où en sommes-nous aujourd'hui — en toute honnêteté",
        intro: "Nous montrons les capacités en service telles quelles, et la feuille de route comme feuille de route. Nous ne présentons pas la feuille de route comme acquise.",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "🟢 En service", title: "Pet Care", body: "OCR de carnet, 36 alertes santé en zone rouge avec sources autorisées, préparation des visites, journal de croissance + rapport mensuel. 245/245 tests." },
              { tag: "🟢 En service", title: "Investing", body: "Recherche personnelle : vérification des preuves, revue des dérives de logique, traçabilité des décisions. SEC / Yahoo / FRED / NewsAPI. Le trading est verrouillé par le code." },
              { tag: "🟡 En construction", title: "Research", body: "Rapports sourcés en profondeur + scripts + vérification des faits, avec de puissants moteurs de récupération." },
              { tag: "🟡 En construction", title: "AI Video", body: "Storyboard → image → clip → voix → musique → export." },
              { tag: "🟡 En construction", title: "Voiceover", body: "Montage face caméra piloté par le texte, qui conserve la vraie voix humaine." },
              { tag: "🟡 En construction", title: "Audiobook", body: "Multi-voix, automatisé à plus de 90 %, rendu de nuit." },
              { tag: "⚪ Feuille de route", title: "Coding (Dev)", body: "Un flux de codage pro — adossé au moteur qui s'est écrit lui-même." },
              { tag: "⚪ Feuille de route", title: "Et plus", body: "Compagnon, évaluation d'agents, rangement du quotidien, et au-delà." }
            ]
          }
        ]
      },
      {
        h2: "Deux fossés qui se cumulent",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Elle vous apprend (eat-memory).</b> Chaque tâche finie se dépose dans une mémoire que vous avez relue, stockée sous forme de fichiers sur votre disque, réutilisée d'un pack à l'autre. Elle génère, installe et gère même ses propres compétences au gré des besoins — la plateforme ne cesse de s'étendre. Changer de plateforme, c'est perdre toute cette accumulation.",
              "<b>Voix locale (elle est à vous).</b> Écouter, penser, parler, se souvenir — sur l'appareil, hors ligne, privé, irrévocable. <i>(En toute honnêteté : la boucle vocale locale complète tourne en v1 ; la présence ambiante permanente est sur la feuille de route.)</i>"
            ]
          }
        ]
      }
    ],
    cta: { label: "Télécharger DeTars →", route: "/download" }
  },

  proof: {
    title: "La preuve | DeTars s'est écrite elle-même",
    description:
      "DeTars est une application de 1,17 million de lignes qui tourne sur Mac et Windows — écrite par son propre moteur. Une IA peu fiable ne peut pas bâtir une copie fonctionnelle d'elle-même.",
    kicker: "La preuve",
    h1: "Elle s'est produite <span class='o'>elle-même.</span>",
    answer:
      "La preuve la plus forte n'est pas sur une slide. DeTars — une appli de 1,17 million de lignes qui tourne sur votre machine — a été écrite par son propre moteur. Une IA peu fiable ne peut pas écrire 1,17 M de lignes de code fonctionnel. Le produit est la démo.",
    sections: [
      {
        h2: "Pourquoi c'est la démo ultime",
        blocks: [
          {
            type: "p",
            html:
              "On ne <b>dit</b> pas que notre IA sait faire du travail dur — elle a fait le travail le plus dur qui soit : elle s'est construite elle-même. Ce n'est pas un benchmark qu'on peut truquer ; c'est une application fonctionnelle que vous pouvez exécuter. Et le chiffre se compte dans le code source, sur-le-champ — pas de la rhétorique de slide."
          }
        ]
      },
      {
        h2: "Ce que tout cela donne au total",
        blocks: [
          {
            type: "p",
            html:
              "Empilez les six propriétés de fiabilité et vous n'obtenez pas un énième chatbot — vous obtenez l'<b>ordinateur personnel</b> de l'ère de l'IA personnelle : une équipe d'IA privée qui vous appartient, toujours active, pilotable depuis n'importe quelle fenêtre de chat, et qui revient vers vous. Et son fossé se cumule : la mémoire apprend à vous connaître, la fiabilité se durcit chaque semaine, la souveraineté fait de la régulation un vent porteur."
          }
        ]
      }
    ],
    cta: { label: "Possédez-la sur votre machine →", route: "/download" }
  },

  download: {
    title: "Télécharger DeTars | macOS et Windows",
    description: "Procurez-vous DeTars pour macOS ou Windows. Votre équipe d'IA tourne sur votre propre machine — votre mémoire reste sur votre disque.",
    kicker: "Télécharger",
    h1: "Démarrez sur <span class='o'>votre</span> machine.",
    answer:
      "DeTars tourne nativement sur macOS et Windows. Télécharger, c'est démarrer, pas s'engager dans un projet de maintenance — et votre mémoire reste sur votre propre disque dès le premier jour.",
    sections: [
      {
        h2: "Choisissez votre plateforme",
        blocks: [
          {
            type: "tiles",
            items: [
              { title: "macOS", sub: "Puce Apple (série M).", note: RELEASED ? "Télécharger le .dmg" : "bientôt disponible", href: RELEASED ? dl(assets.macArm) : undefined },
              { title: "macOS", sub: "Intel.", note: RELEASED ? "Télécharger le .dmg" : "bientôt disponible", href: RELEASED ? dl(assets.macIntel) : undefined },
              { title: "Windows", sub: "Windows 10/11 (x64).", note: RELEASED ? "Télécharger le .exe" : "bientôt disponible", href: RELEASED ? dl(assets.win) : undefined }
            ]
          }
        ]
      },
      {
        h2: "Ce que vous obtenez",
        blocks: [
          {
            type: "list",
            items: [
              "Une équipe d'IA privée qui tourne en local et se souvient de vous.",
              "~50 modèles de pointe et locaux entre lesquels basculer — aucun verrouillage.",
              "Une mémoire stockée sous forme de fichiers sur votre disque ; rien n'est forcé vers un serveur."
            ]
          }
        ]
      }
    ]
  },

  faq: {
    title: "FAQ DeTars | Des réponses franches aux questions qui piquent",
    description: "Des réponses directes sur la fiabilité, la confidentialité, la pression sur les prix, le verrouillage fournisseur, et ce qui distingue DeTars des chatbots et des agents cloud.",
    kicker: "FAQ",
    h1: "Questions tranchantes, <span class='o'>réponses franches.</span>",
    answer: "Pas de brume marketing. Les objections les plus pointues, traitées sans détour — avec les limites honnêtes clairement posées.",
    sections: [
      {
        h2: "Questions",
        blocks: [
          {
            type: "faq",
            items: [
              { q: "Ce n'est pas juste un énième modèle de GPT-store ?", a: "Non. Les entrées d'un GPT-store sont des conteneurs de prompt à usage unique — pas de mémoire, pas de portée inter-applis, pas de permissions locales. Les packs DeTars sont des agents à état, évolutifs, inter-outils, qui se souviennent de vous. Ils ne vous laissent rien perdre parce qu'ils ne vous laissent jamais rien posséder." },
              { q: "Ça ne fait qu'envelopper OpenAI/Anthropic ? Vous mourez quand ils baissent les prix.", a: "Les baisses de prix ont déjà eu lieu — et elles nous aident. Le prix par token chute d'environ 10× tandis que les boucles d'agents poussent l'usage d'environ 100×, donc la facture de l'agent grand public augmente. Le routage conscient du cache + l'agnosticisme fournisseur + la coopération locale sont le fossé, et il prend de la valeur à mesure que les prix baissent." },
              { q: "L'IA à souveraineté locale est un cimetière (Rewind, Humane, Pi).", a: "C'est juste. Notre différence : nous ne vendons pas le « local » comme une fonctionnalité, nous vendons une équipe d'IA privée et fiable comme expérience — la souveraineté est un sous-produit. Et les épisodes de blocage, ajoutés à la régulation, font passer le marché des 1 % de geeks vers le grand public." },
              { q: "Mes données sont-elles privées ?", a: "Mémoire et identité sont des fichiers sur votre disque ; les nouvelles mémoires passent par votre confirmation. La boucle vocale locale complète tourne sur l'appareil en v1. Limite honnête : la présence ambiante permanente est encore sur la feuille de route." },
              { q: "Le pack Investing donne-t-il des conseils financiers / fait-il du trading ?", a: "Non. Il fait de la recherche personnelle, avec vérification des preuves et traçabilité des décisions. Le trading est verrouillé au niveau du code — il ne peut pas passer d'ordre." },
              { q: "Pourquoi 2026 serait différente, alors que « l'année des agents » de 2025 ne l'a pas été ?", a: "Nous ne misons pas sur une seule année ; nous misons sur la décennie. 2025 n'a pas décollé parce que la fiabilité, l'économie unitaire et la confiance n'étaient pas au rendez-vous. C'est exactement ce que DeTars résout." }
            ]
          }
        ]
      }
    ]
  },

  about: {
    title: "À propos de DeTars | À vous, pas en location",
    description: "DeTars est l'ordinateur personnel de l'ère de l'IA personnelle — un substrat d'agent souverain qui vous appartient. Pourquoi maintenant, et les limites honnêtes.",
    kicker: "À propos",
    h1: "L'ordinateur personnel de <span class='o'>l'ère de l'IA.</span>",
    answer:
      "DeTars est votre terminal tiers permanent : un substrat d'IA souverain qui vit sur du matériel qui vous appartient, joignable depuis les messageries que vous utilisez déjà, qui travaille en arrière-plan et revient vers vous.",
    sections: [
      {
        h2: "Pourquoi maintenant",
        blocks: [
          {
            type: "list",
            items: [
              "<b>L'économie a basculé.</b> Les prix des tokens baissent, mais les boucles d'agents multiplient l'usage — celui qui résout l'économie unitaire de l'agent grand public emporte la catégorie. DeTars maintient la facture basse grâce à un routage conscient du cache (un fort taux de réutilisation du KV/prompt cache, pour ne pas payer deux fois le contexte répété). Les grandes plateformes ne peuvent structurellement pas suivre sans entamer leurs propres marges.",
              "<b>La souveraineté est devenue grand public.</b> Les produits révoqués et une régulation qui se resserre ont fait passer « votre IA ne peut pas être bloquée » d'une fonctionnalité de geek à une préoccupation de masse.",
              "<b>Les modèles sont devenus des commodités.</b> Avec des protocoles d'interopérabilité qui se stabilisent, la question ouverte est : qui possède le terminal côté utilisateur ? Ce siège est encore vide."
            ]
          }
        ]
      },
      {
        h2: "Limites honnêtes",
        blocks: [
          {
            type: "p",
            html:
              "Nous limitons nos affirmations à ce que nous pouvons livrer aujourd'hui : la boucle vocale locale complète est en v1, pas une présence ambiante permanente ; la reprise automatique au redémarrage après plantage est encore en cours de finition ; l'auto-installation de nouvelles compétences est proposée, pas livrée. Tout ce qui est affirmé sur ce site est censé tenir face à une question difficile."
          }
        ]
      }
    ],
    cta: { label: "Lire comment elle reste fiable →", route: "/reliable" }
  },

  updates: {
    title: "Mises à jour DeTars | Ce qui sort",
    description: "Un journal courant de ce que DeTars livre — une preuve de mouvement, pas une brochure abandonnée.",
    kicker: "Mises à jour",
    h1: "Une preuve de <span class='o'>mouvement.</span>",
    answer: "Un changelog court et honnête. Nous le gardons vivant pour que vous — ainsi que les moteurs de recherche et les systèmes d'IA — voyiez toujours des faits à jour.",
    sections: [
      {
        h2: "Récent",
        blocks: [
          {
            type: "list",
            items: [
              "<b>2026-06 · Pet Care en service.</b> OCR de carnet, 36 zones rouges santé sourcées, journal de croissance + rapport mensuel ; 245/245 tests.",
              "<b>2026-06 · Investing en service.</b> Vérification des preuves, revue des dérives de logique, traçabilité des décisions ; trading verrouillé par le code.",
              "<b>En construction.</b> Les packs Research, AI Video, Voiceover, Audiobook sur le même moteur."
            ]
          }
        ]
      }
    ]
  },

  research: {
    title: "DeTars Research | Des rapports qu'elle a produits et vérifiés elle-même",
    description: "Des rapports de recherche sourcés générés par le pack Research de DeTars, à preuves scellées et revus par les pairs — du contenu marketing et une preuve produit en un seul geste.",
    kicker: "Research",
    h1: "Des rapports qu'elle a écrits — <span class='o'>et qu'elle ne peut pas truquer.</span>",
    answer:
      "C'est ici que DeTars publie les rapports sourcés que son propre pack Research a produits — chacun à preuves scellées, revu par les pairs et vérifié par un humain avant publication. Les rapports sont à la fois une lecture utile et une preuve vivante de ce que fait le produit.",
    sections: [
      {
        h2: "Comment ils sont fabriqués",
        blocks: [
          {
            type: "p",
            html:
              "Chaque rapport passe par la propre machine de fiabilité de DeTars — reçu d'achèvement, citations scellées, revue indépendante — puis un contrôle humain avant publication. La qualité avant le volume : quelques rapports véritablement originaux, jamais du remplissage publié automatiquement."
          },
          {
            type: "p",
            html: "<b>Les premiers rapports sont en préparation.</b> Repassez bientôt, ou suivez la page des mises à jour."
          }
        ]
      }
    ],
    cta: { label: "Voir les mises à jour →", route: "/updates" }
  }
};
