import type { HomeCopy } from "@/lib/home-copy";

export const homePtBr: HomeCopy = {
  metaTitle: "DeTars | IA para todos? Esta é para você.",
  metaDescription: "Uma equipe inteira de IA, trabalhando para uma só pessoa: você. Chefe de gabinete, assistente, diretor e cineasta — todos do seu lado.",
  heroEyebrow: "Sua equipe pessoal de IA",
  heroH1: "IA para todos?<br><span class='grad'>Esta é para você.</span>",
  heroSub: "Uma equipe inteira de IA, trabalhando para uma só pessoa: você.<br>Um chefe de gabinete para coordenar, um assistente para conversar, um diretor para tocar o dia a dia, um cineasta para seus vídeos — todos querem o seu sucesso e a sua felicidade.",
  heroPrimary: "Comece com um objetivo →",
  heroSecondary: "Veja como ele trabalha para você",
  futureKicker: "O futuro que estamos construindo",
  futureH2: "Mais no seu dispositivo.<br>Mais possibilidades para você.",
  futureP: "Treinamos nosso próprio modelo de privacidade, e ele roda no seu dispositivo: com a Privacidade automática ativada, nomes, telefones, documentos e outros dados sensíveis viram marcadores na sua máquina antes de chegar a qualquer modelo na nuvem, e são restaurados localmente quando os resultados voltam. Um modelo local também faz trabalho de verdade no seu dispositivo — e fica cada vez mais forte à medida que os modelos evoluem. Com o poder computacional cada vez mais acessível, estamos trabalhando para que o DeTars faça mais no seu próprio dispositivo, com a inteligência local e a da nuvem fazendo, cada uma, o que faz de melhor — e a sua privacidade no centro de tudo.",
  futureViz: { device: "Seu dispositivo", privacy: "Modelo de privacidade · anonimiza na sua máquina", local: "Modelo local · faz o trabalho, cada vez mais forte", cloud: "Modelos na nuvem · os que você escolher", wire: "só saem marcadores ⟦PESSOA_1⟧" },
  proof: [
    { n: "Dias", l: "uma tarefa pode rodar por dias · projetos seguem andando" },
    { n: "Todos", l: "os principais modelos · troque quando quiser" },
    { n: "Seu dispositivo", l: "Um lar para sua equipe de IA" }
  ],
  verify: "· Cada afirmação aqui pode ser verificada na sua própria máquina — não é retórica de apresentação",
  hookKicker: "Por que agora",
  hookH2: "O modelo de hoje é um estagiário brilhante, mas <span class='o'>pouco confiável.</span>",
  hookP: "Tem lampejos impressionantes — mas esquece, finge que terminou e trava no meio do caminho. Ninguém entrega trabalho de verdade a algo em que não pode confiar. <b>O DeTars o transforma em uma equipe à qual você pode confiar trabalho de verdade.</b>",
  liveKicker: "No dia a dia",
  liveH2: "Você manda uma linha. <span class='o'>Ele volta com tudo pronto.</span>",
  steps: [
    { st: "Envie de qualquer lugar", sd: "Telegram / Slack / Feishu — uma linha ou uma foto (WeChat: somente texto)" },
    { st: "Ele trabalha em segundo plano", sd: "Uma tarefa pode rodar por dias; projetos de longo prazo seguem andando e voltam com notícias" },
    { st: "Ele volta até você", sd: "<b>Ele vive por você — não o contrário.</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "Chefe de gabinete",
      via: "Slack",
      meta: "chefe de gabinete · de olho em cada tarefa",
      input: "Fica de olho nesses projetos pra mim. Junta tudo o que precisar de mim.",
      work: "cuidando de 4 tarefas · sincronizando dependências · conferindo entregas",
      result: "<b>Resumo do dia</b><br>✓ Relatório de pesquisa entregue, fontes conferidas<br>⟳ Curta na 2ª versão, previsto para hoje à noite<br>⚑ Revisão de investimentos: 1 decisão é sua",
      story: "Quanto mais projetos você toca, mais cansativo é acompanhar tudo. <b>Seu chefe de gabinete coordena a equipe inteira</b>: repassa novos pedidos, resolve dependências, confere o que volta — e traz só os resultados e as decisões que são mesmo suas. Outras IAs esperam você perguntar; esta cuida do panorama por você."
    },
    {
      av: "💬",
      pack: "Assistente de chat",
      via: "WhatsApp",
      meta: "chat · lembra suas notas e decisões passadas",
      input: "Por que a gente não fechou com aquele fornecedor da última vez?",
      work: "buscando nas suas notas e no histórico · na hora",
      result: "A entrega de março atrasou duas semanas, e você anotou “não renovar” — a nota está aqui.<br>Quer chamar 20 especialistas em compras, jurídico e finanças para pensar alternativas com você?",
      story: "<b>Ele mora dentro do WhatsApp, do Telegram ou do Slack</b> — nada de abrir outro app. Responde rápido e lembra de você: suas notas, seus projetos, as decisões que você tomou. Quer outros pontos de vista? Traga especialistas do Agent Marketplace, <b>centenas de papéis</b>, para um brainstorm com você. O que for maior, ele passa para a equipe."
    },
    {
      av: "🔍",
      pack: "Pesquisa",
      via: "WhatsApp",
      meta: "pack: research · toda afirmação com fonte",
      input: "Um amigo disse que a Anthropic vai abrir capital. A IA é uma bolha?",
      work: "lendo o próprio S-1 · cruzando roadshow e projeções",
      result: "✓ Um relatório de pesquisa revelador:<br><b>a demanda é real; o retorno ainda não fechou a conta</b>",
      story: "De uma frase ouvida por acaso, ele segue a pista até o prospecto, o roadshow e os números brutos, organiza as evidências e as divergências e entrega um relatório que você pode questionar fonte por fonte. <b>Este foi feito assim de verdade</b> — leia:",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "Leia: o IPO da Anthropic e a bolha da IA (em inglês) →" }
    },
    {
      av: "☾",
      pack: "Invocação",
      via: "DeTars",
      meta: "pack: summon · parado no momento que você escolher",
      input: "Seu Machado, meu chefe diz que eu levo tudo a sério demais. O senhor concorda?",
      work: "Machado de Assis · Rio de Janeiro, 1881",
      result: "“A sério? Escrevi as memórias de um defunto justamente para não levar a vida tão a sério. Faça como Brás Cubas: ria primeiro, reclame depois. E se o chefe insistir, tome nota — um dia ele vira personagem.”",
      story: "Traga até você alguém de um livro — ou da história. <b>Ele fica no momento que você escolher</b>, com seu passado, sua voz e seu temperamento. Hoje, troque ironias com Machado de Assis; amanhã, fale de tempos difíceis com Dom Pedro II no exílio.",
      link: { href: "/pt-br/packs/summon", label: "Conheça Invocação →" }
    },
    {
      av: "✷",
      pack: "Destino",
      via: "DeTars",
      meta: "pack: destiny · o observatório",
      input: "Tô em dúvida se troco de emprego. Tira três cartas pra mim?",
      work: "embaralhando · passado / presente / futuro",
      result: "Oito de Espadas → Cavaleiro de Paus → A Estrela<br>A caixa que te prende é, em boa parte, sua. Liste as trocas reais e então dê o passo.",
      story: "Conte onde você está agora. Com tarô, mapa astral e símbolos, ele ajuda a pôr a confusão em palavras e traz o insight de volta para a vida real. <b>Toque numa carta no observatório para continuar perguntando na mesma tiragem.</b>",
      link: { href: "/pt-br/packs/destiny", label: "Visite o observatório →" },
      tarot: [{ pos: "Passado", name: "Oito de Espadas" }, { pos: "Presente", name: "Cavaleiro de Paus" }, { pos: "Futuro", name: "A Estrela" }]
    },
    {
      av: "▶",
      pack: "Vídeo com IA",
      via: "WhatsApp",
      meta: "pack: ai-video · orçamento confirmado antes de gerar",
      input: "Faz um vídeo de 15 segundos do meu gato numa aventura espacial",
      work: "propondo duas direções visuais · cena por cena",
      result: "✓ Duas direções para escolher: <b>ficção científica retrô</b> / <b>conto de fadas desenhado à mão</b><br>Escolha uma e ele gera cena por cena, entregue em MP4",
      story: "Aquela imagem na sua cabeça: o diretor propõe primeiro direções visuais bem diferentes, e <b>você só gasta depois de escolher uma</b>. “Mantém esse clima”, “mesmo personagem, outro movimento” — uma linha e está mudado.",
      link: { href: "/pt-br/packs/ai-video", label: "Veja Vídeo com IA →" }
    },
    {
      av: "◈",
      pack: "Investimentos",
      via: "Slack",
      meta: "pack: equity · sem corretora, sem ferramenta de ordens",
      input: "Alguém comentou de uma ação — perguntei de passagem",
      work: "destrinchando sua tese · acompanhando as evidências",
      result: "🔔 Voltou por conta própria: o balanço mudou seu motivo nº 2. Quer conversar?",
      story: "Seus motivos, os contra-argumentos e os pontos de checagem, tudo num lugar só. <b>Quando sai uma notícia, ele pergunta primeiro: qual dos seus motivos isso muda?</b> Ajuda você a pensar com clareza e nunca mexe na sua conta.",
      link: { href: "/pt-br/packs/investing", label: "Veja Investimentos →" }
    },
    {
      av: "▦",
      pack: "Data Studio",
      via: "Slack",
      meta: "pack: data-studio",
      input: "(arrasta uma planilha de vendas) Onde a margem mais caiu este ano?",
      work: "conferindo campos e definições · separando por região e produto",
      result: "✓ Região Sudeste · linha de hardware −18%<br>Painel pronto — clique numa região para perguntar o porquê",
      story: "Arraste uma planilha, faça uma pergunta e receba um painel clicável. <b>Da visão geral ao detalhe, do número ao motivo</b> — a análise anda como uma conversa.",
      link: { href: "/pt-br/packs/data-studio", label: "Veja Data Studio →" }
    },
    {
      av: "⌘",
      pack: "Programação",
      via: "Slack",
      meta: "pack: coding",
      input: "Me ajuda a entender o fluxo de login deste projeto. O que mais vale a pena corrigir?",
      work: "localizando arquivos-chave · rastreando chamadas",
      result: "✓ O fluxo de login passa por 3 arquivos<br>A correção que mais vale a pena, e o que ela afeta",
      story: "Um código enorme e desconhecido? <b>Ele entende antes de mexer em qualquer coisa</b>: acha os arquivos-chave, rastreia definições e chamadas, explica o impacto e as opções — e depois altera e valida junto com você.",
      link: { href: "/pt-br/packs/coding", label: "Veja Programação →" }
    },
    {
      av: "🎙️",
      pack: "Edição de vídeos falados",
      via: "WhatsApp",
      meta: "pack: talking-head · sua voz real preservada",
      input: "Gravei um vídeo falando pra câmera na rua — sobre a mudança nos custos",
      work: "cortando repetições · corrigindo legendas · montando cards de dados",
      result: "✓ Prévia completa pronta: sua voz preservada e os números-chave em cards de dados",
      story: "Você tem algo a dizer; não deveria perder três dias editando. <b>Ele reorganiza a narrativa, corrige as legendas e adiciona gráficos</b> — você só aponta: “essa pausa está longa demais”, “essa frase é importante”.",
      link: { href: "/pt-br/packs/talking-head", label: "Veja Edição de vídeos falados →" }
    }
  ],
  phoneFoot: "Um mesmo padrão: envie → trabalha em segundo plano → volta até você",
  corridorKicker: "Por que você pode confiar",
  scenes: [
    {
      idx: "01", h3: "Ele pensa por conta própria",
      story: "Dê um objetivo — &lsquo;pesquise três concorrentes neste trimestre e entregue um relatório com fontes.&rsquo; Ele divide o trabalho, reúne especialistas, acompanha o progresso e devolve um texto finalizado. <b>O modo de fazer é pensado na hora, não é um roteiro fixo.</b>",
      head: "orchestrator.log", lab: "ao vivo",
      body: ["<span class='hl'>planejamento</span> objetivo → 3 subtarefas", "<span class='ok'>↳</span> agente A · documentos financeiros", "<span class='ok'>↳</span> agente B · notícias", "<span class='ok'>↳</span> agente C · verificação cruzada", "<span class='dim'>pausa · aguardar A/B → reunir</span>"],
      foot: "<b>De verdade:</b> ele forma equipes, divide trabalho, pausa e retoma — está realmente em execução, não é uma simulação."
    },
    {
      idx: "02", h3: "Ele não desmorona",
      story: "Trabalho de verdade leva horas: redes instáveis, limites de requisições, notebooks em suspensão. A maioria das ferramentas perde horas por um único contratempo. O DeTars trata problemas como fatos — espera, tenta de novo e continua; reinicie e ele retoma. <b>Deixe rodar à noite e veja os resultados pela manhã.</b>",
      head: "runtime.recovery", lab: "03:14",
      body: ["<span class='dim'>429</span> limite de requisições → espera", "<span class='ok'>✓ recuperado, retomando a etapa 7</span>", "<span class='dim'>suspensão</span> ponto de retomada salvo", "<span class='ok'>✓ retomado do ponto salvo</span>"],
      foot: "<b>De verdade:</b> erros são fatos a contornar, não o fim imediato."
    },
    {
      idx: "03", h3: "Ele não pode fingir",
      story: "O pior truque da IA: jurar que &lsquo;terminou&rsquo; sem ter terminado; citar uma fonte que nunca existiu. O DeTars transforma &lsquo;concluído&rsquo; em um <b>comprovante que precisa ser honrado</b> — foi entregue ou não, há evidências ou não. Cada citação é selada; mude um caractere e ela perde a validade na hora.",
      head: "completion.receipt", lab: "verificado",
      body: ["entrega ........... <span class='ok'>✓ presente</span>", "cadeia de evidências <span class='ok'>✓ completa</span>", "<span class='dim'>sha256: 9f4c…a1e</span>", "revisão por pares . <span class='ok'>✓ assinada</span>", "<span class='hl'>citação alterada → <span class='dim'>rejeitada</span></span>"],
      foot: "<b>De verdade:</b> &lsquo;concluído&rsquo; é um comprovante verificável, não uma impressão."
    },
    {
      idx: "04", h3: "Sua IA, com a privacidade no centro de tudo",
      story: "Armazenamento local não significa que toda tarefa fica offline: quando você usa um modelo na nuvem, os dados de entrada relevantes da tarefa são enviados ao provedor. <b>Nossa direção é fazer mais no seu próprio dispositivo, com a inteligência local e a da nuvem trabalhando juntas.</b>",
      head: "local + nuvem", lab: "No dispositivo",
      body: ["<span class='dim'>DeTars</span>", "Tarefas na nuvem → dados de entrada relevantes enviados", "Nossa direção → mais capacidade local"],
      foot: "<b>Nossa direção:</b> mais capacidade local, não uma promessa de que toda tarefa funciona offline."
    },
    {
      idx: "05", h3: "Ele evolui por conta própria",
      story: "Ele caça seus próprios bugs e os transforma em cobertura permanente de regressão, reorganiza sua própria memória e — quando uma tarefa exige uma capacidade que falta — gera, instala e gerencia suas próprias ferramentas e habilidades. <b>Cada versão é mais difícil de superar que a anterior.</b>",
      head: "evolution.log", lab: "automático",
      body: ["<span class='hl'>regressão</span> +1 caso selado", "<span class='ok'>↳</span> memória reindexada", "<span class='hl'>habilidade</span> necessária: pdf-extract", "<span class='ok'>↳ gerada · instalada · ✓</span>", "<span class='dim'>cada versão mais difícil de quebrar</span>"],
      foot: "<b>De verdade:</b> confiabilidade que se acumula — e novas capacidades que ele desenvolve sozinho."
    },
    {
      idx: "06", h3: "Ele não consome todo o seu orçamento",
      story: "Tarefas longas sem supervisão costumam significar contas enormes. O DeTars faz o roteamento para manter ativo o cache KV / de prompts do modelo, de modo que o contexto repetido não seja cobrado duas vezes — <b>muito menos tokens por tarefa, e custos menores à medida que os preços dos modelos caem.</b> Deixe rodar a noite inteira sem ficar de olho no medidor.",
      head: "routing.cache", lab: "ao vivo",
      body: ["<span class='dim'>contexto</span> 184k tokens", "<span class='ok'>↳ cache de prompts · acerto</span>", "cobrança → apenas tokens novos", "<span class='dim'>contexto repetido: sem nova cobrança</span>"],
      foot: "<b>De verdade:</b> roteamento que leva o cache em conta — menos tokens cobrados, sem contas fora de controle."
    }
  ],
  bombCap: "linhas de código · metade escrita pelo próprio DeTars",
  bombH2: "<span class='o'>O DeTars foi construído com o DeTars.</span>",
  bombP: "Mais de 3,4 milhões de linhas de código — e <b>metade delas escrita pelo próprio DeTars</b>. Poucas tarefas que você vai entregar a ele são mais difíceis do que construir a si mesmo. <b>Ele é um aplicativo e é a base sobre a qual você constrói</b>: o conhecimento, os métodos e o trabalho que você acumula aqui continuam seus, seja qual for o modelo que vencer no ano que vem.",
  closeH2: "O DeTars é seu terminal independente permanente.<br><span class='grad'>IA do seu lado.</span>",
  closeP: "Para ajudar você a realizar seus projetos e viver melhor.<br>Uma equipe pessoal de IA que trabalha em segundo plano, recebe instruções pelos aplicativos de conversa que você usa e mantém você a par do andamento.",
  closePrimary: "Tenha o seu na sua máquina →",
  closeSecondary: "Ver cenários reais"
};
