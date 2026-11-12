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
  futureP: "À medida que os modelos ganham capacidade e o poder computacional se torna mais acessível, estamos trabalhando para que o DeTars faça mais no seu próprio dispositivo — com a inteligência local e a da nuvem trabalhando juntas, e a sua privacidade no centro de tudo.",
  proof: [
    { n: "Horas", l: "trabalhando sem supervisão · até durante a noite" },
    { n: "Todos", l: "os principais modelos · troque quando quiser" },
    { n: "Seu dispositivo", l: "Um lar para seu parceiro de IA" }
  ],
  verify: "· Cada afirmação aqui pode ser verificada na sua própria máquina — não é retórica de apresentação",
  hookKicker: "Por que agora",
  hookH2: "O modelo de hoje é um estagiário brilhante, mas <span class='o'>pouco confiável.</span>",
  hookP: "Tem lampejos impressionantes — mas esquece, finge que terminou e trava no meio do caminho. Ninguém entrega trabalho de verdade a algo em que não pode confiar. <b>O DeTars o transforma em uma equipe à qual você pode confiar trabalho de verdade.</b>",
  liveKicker: "No dia a dia",
  liveH2: "Você manda uma linha. <span class='o'>Ele volta com tudo pronto.</span>",
  steps: [
    { st: "Envie de qualquer lugar", sd: "Telegram / Slack / Feishu — uma linha ou uma foto (WeChat: somente texto)" },
    { st: "Ele trabalha em segundo plano", sd: "Por horas, até a noite inteira — sem você precisar acompanhar" },
    { st: "Ele volta até você", sd: "<b>Ele vive por você — não o contrário.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "Cuidados com pets", via: "Telegram", meta: "pack: pet-care", input: "Tirei uma foto do meu cachorro e enviei", work: "editando · escrevendo legendas", result: "✓ Vídeo curto divertido + textos para redes sociais prontos" },
    { av: "💡", pack: "Investimentos", via: "Slack", meta: "pack: equity · sem corretora, sem ferramenta de ordens", input: "Ouvi uma dica sobre uma ação e perguntei de passagem", work: "acompanhando · verificando evidências", result: "🔔 Voltou: movimento incomum — quer conversar?" },
    { av: "🎙️", pack: "Vídeo falado", via: "Feishu", meta: "pack: talking-head", input: "Gravei um vídeo falando para a câmera enquanto estava fora", work: "edição automática · legendas", result: "✓ Edição final exportada — sua voz real preservada" },
    { av: "🔍", pack: "Pesquisa", via: "WeChat", meta: "pack: research", input: "Ouvi algo interessante e mandei uma linha", work: "investigando por horas · cruzando informações", result: "✓ Relatório com fontes + acompanhamento contínuo" }
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
  closeSecondary: "Leia a história técnica"
};
