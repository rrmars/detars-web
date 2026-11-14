import { assets, availability, dl } from "@/lib/download";
import type { PageContent, PageKey } from "@/lib/pages";

export const pagesPtBr: Record<PageKey, PageContent> = {
  "how-it-works": {
    title: "Como o DeTars funciona | Envie uma linha, receba trabalho pronto",
    description: "Envie ao DeTars uma linha ou uma foto de qualquer aplicativo de chat. Ele trabalha em segundo plano por horas e volta até você com o trabalho pronto.",
    kicker: "No dia a dia",
    h1: "Mande uma linha. <span class='o'>Ele cuida do resto.</span>",
    answer: "O DeTars recebe suas mensagens de qualquer aplicativo de chat que você já usa, faz o trabalho em segundo plano — por horas, até durante a noite — e volta até você quando termina. Ele vive por você, não o contrário.",
    sections: [
      { h2: "Um mesmo padrão", intro: "Tudo que você faz com o DeTars segue o mesmo formato.", blocks: [{ type: "list", items: [
        "<b>Envie de qualquer lugar.</b> Uma linha ou uma foto de um aplicativo de chat que você já usa — Telegram, Slack, Feishu ou WeChat. Sem ter que aprender um aplicativo novo.",
        "<b>Ele trabalha em segundo plano.</b> Planeja, reúne especialistas e trabalha por horas sem você precisar acompanhar.",
        "<b>Ele volta até você.</b> Quando o trabalho termina — ou quando realmente precisa de uma decisão — ele avisa."
      ] }] },
      { h2: "Nem todo canal é igual", intro: "O trabalho é o mesmo, de onde quer que você envie. O quanto você pode fazer <i>dentro</i> do chat não é.", blocks: [{ type: "list", items: [
        "<b>Telegram, Slack, Feishu — a experiência mais completa.</b> Onde o canal permite, aprovações e escolhas chegam como botões e cartões nativos, e mensagens de voz podem ser enviadas e recebidas.",
        "<b>WeChat — alternativa em texto.</b> O mesmo trabalho, os mesmos resultados, entregues em texto simples. A interação é mais limitada: você responde com palavras em vez de tocar em um cartão, e respostas com recursos visuais ou de voz são convertidas em texto.",
        "<b>Nada depende da interface rica.</b> Toda solicitação enviada pelo DeTars tem uma versão em texto simples, portanto um canal que só aceita texto nunca bloqueia uma tarefa."
      ] }] },
      { h2: "Quatro formas de uso que já existem", blocks: [{ type: "cards", items: [
        { tag: "Invocação", title: "🕯️ Alguém da história a quem perguntar", body: "Diga o nome de uma figura histórica; ela conversa com você na própria voz e não sai do personagem." },
        { tag: "Investimentos", title: "💡 Uma ação de que você ouviu falar", body: "Mencione uma vez; ele continua acompanhando e volta quando algo muda. Não tem conexão com corretoras nem ferramenta de ordens." },
        { tag: "Vídeo falado", title: "🎙️ Um vídeo falando para a câmera", body: "Grave onde estiver; receba uma edição com legendas — sua voz real preservada, não substituída por TTS." },
        { tag: "Pesquisa", title: "🔍 Algo que você ouviu de passagem", body: "Uma linha; receba um relatório com fontes e acompanhamento contínuo do assunto." }
      ] }] },
      { h2: "Por que não é apenas mais um chatbot", blocks: [{ type: "p", html: "Um chatbot espera por você e esquece. O DeTars leva um objetivo adiante: pensa em <b>como</b> fazer o trabalho, se recupera quando algo dá errado e só marca algo como concluído quando pode comprovar. A janela de chat é apenas a superfície — o trabalho acontece por baixo dela." }] }
    ],
    cta: { label: "Veja por que você pode confiar →", route: "/reliable" }
  },
  reliable: {
    title: "Por que o DeTars é confiável | Seis coisas que faz e outros não",
    description: "O DeTars transforma uma IA brilhante, mas pouco confiável, em uma equipe à qual você pode confiar trabalho de verdade: ela raciocina, resiste a falhas, não pode fingir que terminou, se corrige, continua sua e não fica presa a nenhum fornecedor.",
    kicker: "Por que você pode confiar",
    h1: "Confiabilidade, <span class='o'>incorporada à arquitetura.</span>",
    answer: "O modelo de hoje é um estagiário brilhante, mas pouco confiável. O DeTars o torna digno de confiança por meio de seis propriedades estruturais — não promessas, mas mecanismos que você pode verificar.",
    sections: [
      { h2: "As seis", blocks: [{ type: "list", items: [
        "<b>Ele pensa por conta própria.</b> Dê um objetivo; ele divide o trabalho, forma uma equipe de especialistas, acompanha o progresso, pausa para aguardar resultados e retoma. O modo de fazer é pensado na hora, não é um roteiro fixo.",
        "<b>Ele não desmorona.</b> Limites de requisições, tempos esgotados, suspensão, travamentos — ele trata cada um como um fato a contornar: esperar, tentar novamente, salvar um ponto de retomada, continuar. Deixe rodar à noite; leia os resultados de manhã.",
        "<b>Ele não pode fingir.</b> &lsquo;Concluído&rsquo; é um comprovante que precisa ser honrado: entregue, respaldado por evidências, revisado por pares. Cada citação é selada por um hash do conteúdo — mude um caractere e ela perde a validade na hora.",
        "<b>Ele tem um sistema imunológico.</b> Caça seus próprios erros e transforma cada um em cobertura permanente de regressão. Já identificou duas vezes bugs em suas próprias ferramentas de autoverificação.",
        "<b>Ele é seu.</b> Vive na sua máquina; o que ele memoriza precisa da sua aprovação e fica em arquivos no seu disco. Ninguém pode inutilizá-lo como a Rewind ou a Humane fizeram com os produtos de seus usuários.",
        "<b>Ele não fica preso.</b> Encaminha cada trabalho ao cérebro mais adequado — qualquer modelo principal, americano ou chinês, ou um modelo local no seu notebook — e você troca quando quiser. O motor é próprio, não uma camada sobre a API de outra empresa."
      ] }] },
      { h2: "E ele <span class='o'>evolui por conta própria</span>", intro: "Confiabilidade não é um ajuste feito uma única vez — ela se acumula. Três ciclos tornam cada versão mais difícil de superar.", blocks: [{ type: "list", items: [
        "<b>Fortalecimento próprio.</b> Ele caça seus próprios erros e transforma cada um em cobertura permanente de regressão — assim, cada versão é mais difícil de quebrar que a anterior. Confiabilidade que não se compra, só se acumula.",
        "<b>Memória que se otimiza.</b> Reorganiza e enxuga continuamente seu sistema de memória para manter a precisão da recuperação enquanto ele cresce — mas o que memoriza <i>sobre você</i> continua dependendo da sua aprovação.",
        "<b>Expansão própria.</b> Quando uma tarefa exige uma capacidade que falta, ele gera, instala e gerencia suas próprias ferramentas e habilidades — desenvolvendo novas capacidades de forma autônoma, sem esperar por uma versão nova."
      ] }] },
      { h2: "Por baixo: a engenharia que sustenta tudo", intro: "Você não precisa dos detalhes — mas cada um é verificável, mesmo que a implementação seja propriedade intelectual central que não publicamos.", blocks: [{ type: "list", items: [
        "Disciplina de escrita no nível de um banco de dados, para que uma equipe de agentes nunca sobrescreva o trabalho uns dos outros.",
        "Evidências com impressão digital do conteúdo: uma fonte não lida ou alterada não pode ser citada.",
        "Roteamento que leva o cache em conta mantém ativo o cache KV / de prompts do modelo — contexto repetido não é cobrado duas vezes, então tarefas longas custam muito menos tokens, e a conta cai junto com os preços dos modelos.",
        "Material com um milhão de palavras previamente organizado em um índice, antes de o modelo ler uma única palavra.",
        "Um registro de orçamento com conservação de saldo, para que ele não possa se conceder escopo nem gastos infinitos.",
        "Uma segunda mente, somente de leitura, que revisa a execução enquanto ela acontece e devolve correções.",
        "Recuperação de falhas por tipo — limite de requisições, tempo esgotado e bloqueio seguem caminhos diferentes.",
        "Ações irreversíveis (ordens, envios, credenciais sensíveis) bloqueadas por padrão até você autorizar."
      ] }] }
    ],
    cta: { label: "Ver cenários reais →", route: "/scenarios" }
  },
  download: {
    title: "Baixe o DeTars | macOS e Windows",
    description: "Tenha o DeTars para macOS ou Windows. Sua equipe de IA roda na sua própria máquina — sua memória fica no seu disco.",
    kicker: "Download", h1: "Comece na <span class='o'>sua</span> máquina.",
    answer: "O DeTars roda nativamente no macOS e no Windows. Baixar é começar, não assumir um projeto de manutenção — e sua memória fica no seu próprio disco desde o primeiro dia.",
    sections: [
      { h2: "Escolha sua plataforma", blocks: [{ type: "tiles", items: [
        { title: "macOS", sub: "Apple silicon (série M).", note: availability.macArm ? "Baixar .dmg" : "em breve", href: availability.macArm ? dl(assets.macArm) : undefined },
        { title: "macOS", sub: "Intel.", note: availability.macIntel ? "Baixar .dmg" : "em breve", href: availability.macIntel ? dl(assets.macIntel) : undefined },
        { title: "Windows", sub: "Windows 10/11 (x64).", note: availability.win ? "Baixar .exe" : "em breve", href: availability.win ? dl(assets.win) : undefined }
      ] }] },
      { h2: "O que você recebe", blocks: [{ type: "list", items: [
        "Uma equipe privada de IA que roda localmente e se lembra de você.",
        "Todos os principais modelos, além dos locais, com troca a qualquer momento — sem ficar preso a um fornecedor.",
        "Memória armazenada como arquivos no seu disco; nada enviado à força para um servidor."
      ] }] }
    ]
  },
  faq: {
    title: "Perguntas frequentes sobre o DeTars | Respostas diretas",
    description: "Respostas diretas sobre confiabilidade, privacidade, pressão de preços, dependência de fornecedores e o que diferencia o DeTars de chatbots e agentes na nuvem.",
    kicker: "Perguntas frequentes", h1: "Perguntas difíceis, <span class='o'>respostas diretas.</span>",
    answer: "Sem cortina de marketing. As objeções mais incisivas, respondidas com clareza — com os limites honestos bem definidos.",
    sections: [{ h2: "Perguntas", blocks: [{ type: "faq", items: [
      { q: "Não é só mais um modelo pronto da loja de GPTs?", a: "Não. Os itens da loja de GPTs são recipientes de prompts para uso pontual — sem memória, sem alcance entre aplicativos, sem permissões locais. Os packs do DeTars são agentes com estado, que crescem, usam várias ferramentas e se lembram de você. Eles não deixam você perder nada porque nunca deixam você possuir nada." },
      { q: "Ele só empacota OpenAI/Anthropic? Vocês acabam quando eles baixam os preços.", a: "Os cortes de preço já aconteceram — e nos ajudam. O preço por token cai ~10× enquanto os ciclos dos agentes aumentam o uso ~100×, então a conta dos agentes para consumidores sobe. Roteamento que leva o cache em conta + independência de provedores + cooperação local são a vantagem competitiva, que ganha valor à medida que os preços caem." },
      { q: "IA com soberania local é um cemitério (Rewind, Humane, Pi).", a: "É uma crítica justa. Nossa diferença: não vendemos o 'local' como um recurso, vendemos a experiência de uma equipe privada e confiável de IA — a soberania é uma consequência. E produtos inutilizados, junto com a regulamentação, estão levando o mercado daquele 1% de entusiastas para o público geral." },
      { q: "Meus dados são privados?", a: "Memória e identidade são arquivos no seu disco; novas memórias precisam da sua confirmação. O ciclo completo de voz local roda no dispositivo na v1. Limite honesto: companhia ambiente sempre ativa ainda está nos planos." },
      { q: "O pack de investimentos dá aconselhamento financeiro ou negocia?", a: "Não. Ele faz pesquisa pessoal com verificação de evidências e registros de decisões. Não consegue enviar uma ordem porque não existe integração com corretoras em nenhuma parte do produto, nem ferramenta de ordens, nem onde inserir credenciais de corretoras." },
      { q: "Por que 2026 será diferente se o 'ano dos agentes' de 2025 não foi?", a: "Não apostamos em um único ano; apostamos na década. 2025 não decolou porque faltavam confiabilidade, viabilidade econômica por uso e confiança. É exatamente isso que o DeTars resolve." }
    ] }] }]
  },
  about: {
    title: "Sobre o DeTars | Seu, não alugado",
    description: "O DeTars é o computador pessoal da era da IA pessoal — uma base soberana de agentes que pertence a você. Por que agora e quais são os limites honestos.",
    kicker: "Sobre", h1: "O computador pessoal da <span class='o'>era da IA.</span>",
    answer: "O DeTars é seu terminal independente permanente: uma base soberana de IA que vive no hardware que você possui, acessível pelos aplicativos de chat que você já usa, trabalhando em segundo plano e voltando até você.",
    sections: [
      { h2: "Por que agora", blocks: [{ type: "list", items: [
        "<b>A economia se inverteu.</b> Os preços dos tokens caem, mas os ciclos dos agentes multiplicam o uso — quem acertar a viabilidade econômica dos agentes para consumidores conquista a categoria. O DeTars mantém a conta baixa com roteamento que leva o cache em conta (alta taxa de acerto do cache KV/de prompts, de modo que contexto repetido não é cobrado duas vezes). As grandes plataformas estruturalmente não conseguem acompanhar sem consumir suas próprias margens.",
        "<b>A soberania chegou ao público geral.</b> Produtos revogados e regulamentação mais rigorosa transformaram 'sua IA não pode ser inutilizada' de um recurso para entusiastas em uma preocupação de todos.",
        "<b>Os modelos viraram commodities.</b> Com a consolidação dos protocolos de interoperabilidade, a questão em aberto é quem será dono do terminal do lado do usuário. Esse lugar ainda está vazio."
      ] }] },
      { h2: "Limites honestos", blocks: [{ type: "p", html: "Limitamos nossas afirmações ao que podemos entregar hoje: o ciclo completo de voz local é v1, não companhia ambiente sempre ativa; a retomada automática após falha ao iniciar ainda está sendo concluída; a instalação automática de novas habilidades é proposta, não foi lançada. Tudo que está neste site deve resistir a uma pergunta difícil." }] }
    ],
    cta: { label: "Leia como ele se mantém confiável →", route: "/reliable" }
  },
  updates: {
    title: "Atualizações do DeTars | O que está sendo lançado",
    description: "Um registro contínuo do que o DeTars lança — prova de evolução, não um folheto abandonado.",
    kicker: "Atualizações", h1: "Prova de <span class='o'>evolução.</span>",
    answer: "Um histórico de alterações curto e honesto. Nós o mantemos atualizado para que você — e os mecanismos de busca e sistemas de IA — sempre veja os fatos atuais.",
    sections: [{ h2: "Recentes", blocks: [{ type: "list", items: [
      "<b>Cuidados com pets · em refinamento.</b> OCR de registros, 36 limites críticos de saúde com fontes, diário de crescimento + relatório mensal; abre assim que estiver pronto.",
      "<b>2026-06 · Investimentos disponível.</b> Verificação de evidências, revisão de desvios de lógica, registros de decisões; sem conexão com corretoras, sem ferramenta de ordens.",
      "<b>Agora.</b> Oito packs têm uma página própria — investimentos, destino, pesquisa, programação, edição de vídeos falados, vídeo com IA, invocação, cuidados com pets (em breve) — e cada página termina com o que aquele pack não pode fazer."
    ] }] }]
  },
  research: {
    title: "Pesquisa DeTars | Relatórios que ele produziu e verificou por conta própria",
    description: "Relatórios de pesquisa com fontes gerados pelo pack de pesquisa do DeTars, com evidências seladas e revisão por pares — marketing de conteúdo e prova do produto em um só lugar.",
    kicker: "Pesquisa", h1: "Relatórios que ele escreveu — <span class='o'>e não pode falsificar.</span>",
    answer: "É aqui que o DeTars publica relatórios com fontes produzidos pelo próprio pack de pesquisa — cada um com evidências seladas, revisão por pares e conferência humana antes da publicação. Os relatórios são tanto uma leitura útil quanto uma prova viva do que o produto faz.",
    sections: [{ h2: "Como são feitos", blocks: [
      { type: "p", html: "Cada relatório passa pelo próprio mecanismo de confiabilidade do DeTars — comprovante de conclusão, citações seladas, revisão independente — e então por uma verificação humana por amostragem antes da publicação. Qualidade acima de volume: poucos relatórios realmente originais, nunca conteúdo de preenchimento publicado automaticamente." },
      { type: "p", html: "<b>Os primeiros relatórios estão em preparação.</b> Volte em breve ou acompanhe a página de atualizações." }
    ] }],
    cta: { label: "Veja as atualizações →", route: "/updates" }
  }
};
