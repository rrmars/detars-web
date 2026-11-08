import { mailto, type Href } from "@/lib/legal";
import type { PageContent } from "@/lib/pages";
import { withLocale } from "@/lib/site";

/** Full translation of the English Privacy Policy; English remains governing. */
export function privacyPtBr(_href: Href): PageContent {
  return {
    title: "Política de Privacidade | DeTars",
    description: "Quais dados pessoais o DeTars trata, por quê, quem nos ajuda a tratá-los e como acessá-los ou excluí-los. Suas conversas ficam no seu dispositivo, e não vendemos dados pessoais.",
    kicker: "Informações legais",
    h1: "Política de Privacidade",
    doc: true,
    updated: "Última atualização: 2 de outubro de 2026",
    notice: `Esta é uma tradução da <a href="${withLocale("en", "/privacy")}" hreflang="en">Política de Privacidade em inglês</a>. Em caso de divergência, prevalece a versão em inglês.`,
    answer: "O aplicativo DeTars mantém suas conversas e sua memória no seu próprio dispositivo. Para operar contas, créditos e os modelos oficiais, tratamos dados pessoais limitados: dados da conta, chaves de dispositivos, registros de uso e registros de pedidos. Não armazenamos o conteúdo dos seus prompts ou das respostas em nossos bancos de dados e não vendemos dados pessoais.",
    sections: [
      {
        h2: "1. Quem somos",
        blocks: [{ type: "p", html: `O DeTars (“DeTars”, “nós”, “nos” ou “nosso”) é responsável pelos dados pessoais descritos nesta Política de Privacidade. Esta política se aplica ao aplicativo DeTars, às contas DeTars, aos créditos DeTars, ao serviço de modelos oficiais e a este site (em conjunto, os “Serviços”). Você pode entrar em contato conosco em ${mailto}.` }]
      },
      {
        h2: "2. Dados que ficam no seu dispositivo", id: "local",
        blocks: [
          { type: "p", html: "O aplicativo DeTars roda no seu computador. Suas conversas, a memória que o aplicativo constrói e os arquivos com que ele trabalha são armazenados no seu próprio disco, e novas memórias exigem sua confirmação antes de serem salvas. Você pode excluí-los do seu dispositivo a qualquer momento." },
          { type: "p", html: "Dois tipos de dados saem do seu dispositivo. Quando o aplicativo envia uma solicitação a um modelo de IA, o conteúdo dessa solicitação é enviado ao provedor do modelo (veja a seção 4). Se você se comunica com o DeTars por um aplicativo de chat como Telegram, Slack, Feishu ou WeChat, essas mensagens passam pelo serviço desse aplicativo e estão sujeitas à política de privacidade dele." }
        ]
      },
      {
        h2: "3. Dados que tratamos nos nossos servidores", id: "data",
        blocks: [
          { type: "list", items: [
            "<b>Dados da conta</b> fornecidos pelo login com o Google: seu endereço de e-mail, seu nome e o identificador da sua conta.",
            "<b>Dados do dispositivo:</b> um identificador de dispositivo e a chave pública do dispositivo, usados para verificar que as solicitações são assinadas pelo seu dispositivo, junto com informações básicas que o aplicativo informa quando um dispositivo é registrado (como o nome do dispositivo, o sistema operacional e sua versão, e o tipo de processador).",
            "<b>Registros de uso</b> dos modelos oficiais: data e hora, modelo, contagens de tokens e créditos cobrados por cada solicitação.",
            "<b>Registros de pedidos e pagamentos:</b> ID do pedido, pacote, valor e status. Nunca recebemos nem armazenamos o número completo do seu cartão. As notificações de pagamento do Paddle, que mantemos com o pedido, podem incluir informações limitadas, como o tipo do cartão, os quatro últimos dígitos e a data de validade, além do nome do titular.",
            "<b>Comunicações de suporte:</b> e-mails que você nos envia e nossas respostas."
          ] },
          { type: "p", html: "Usamos esses dados para fornecer sua conta, verificar dispositivos, operar e cobrar pelo uso dos modelos oficiais, processar pedidos e reembolsos, prevenir fraudes e abusos e responder a solicitações de suporte." }
        ]
      },
      {
        h2: "4. Seus prompts e respostas", id: "content",
        blocks: [
          { type: "p", html: "<b>Quando você usa os modelos oficiais do DeTars, não armazenamos o conteúdo dos seus prompts ou das respostas em nossos bancos de dados.</b> Eles passam pelo nosso gateway até o OpenRouter e o provedor do modelo subjacente para gerar a resposta, de acordo com as políticas desses provedores." },
          { type: "p", html: "Como a maioria dos serviços online, mantemos logs operacionais e de segurança para operar, proteger e solucionar problemas dos Serviços. Esses logs podem conter incidentalmente trechos limitados de dados de solicitações ou respostas, por exemplo, quando um provedor retorna um erro. Mantemos os logs apenas pelo tempo necessário para essas finalidades." },
          { type: "p", html: "Para ajudar o OpenRouter a prevenir abusos, enviamos a ele um identificador pseudônimo derivado da sua conta, nunca seu endereço de e-mail ou nome." },
          { type: "p", html: "Se, em vez disso, você usa suas próprias chaves de API, suas solicitações vão para o provedor que configurou, de acordo com seu contrato com esse provedor. Essas solicitações não usam créditos DeTars nem nosso gateway de modelos oficiais." }
        ]
      },
      {
        h2: "5. Pagamentos",
        blocks: [{ type: "p", html: "O Paddle é o Merchant of Record dos créditos DeTars. O Paddle coleta seus dados de pagamento, endereço de e-mail e informações de cobrança no checkout e os trata de acordo com sua própria política de privacidade. Informamos ao Paddle a qual conta DeTars um pedido pertence, usando um ID interno da conta, e o Paddle nos avisa quando um pedido é pago, reembolsado ou contestado por chargeback." }]
      },
      {
        h2: "6. Este site", id: "website",
        blocks: [{ type: "p", html: "Este site não usa ferramentas de análise nem cookies de rastreamento. É hospedado no GitHub Pages, que pode registrar dados técnicos, como seu endereço IP, para disponibilizar e proteger o site. As páginas carregam fontes do Google Fonts, então seu navegador as solicita aos servidores do Google. A página de pagamento em <code>/pay</code> carrega o checkout do Paddle, que define seus próprios cookies." }]
      },
      {
        h2: "7. Prestadores de serviços e divulgações", id: "processors",
        intro: "Usamos os seguintes prestadores de serviços para operar os Serviços. Compartilhamos dados pessoais com eles apenas conforme necessário para fornecer os Serviços, de acordo com seus termos e compromissos de proteção de dados.",
        blocks: [
          { type: "list", items: [
            "<b>Cloudflare:</b> hospedagem e infraestrutura para nossos servidores, gateway e bancos de dados.",
            "<b>Auth0 (Okta):</b> login.",
            "<b>Google:</b> login.",
            "<b>Paddle:</b> pagamentos, como Merchant of Record.",
            "<b>OpenRouter e os provedores de modelos para os quais ele encaminha as solicitações:</b> geração de respostas dos modelos oficiais.",
            "<b>GitHub Pages:</b> hospedagem deste site."
          ] },
          { type: "p", html: "Esses provedores podem tratar dados pessoais em outros países, incluindo os Estados Unidos. Também podemos divulgar dados pessoais quando exigido por lei ou para proteger o DeTars e seus usuários contra fraudes ou abusos." }
        ]
      },
      {
        h2: "8. Bases legais", id: "legal-bases",
        intro: "Se o GDPR ou o UK GDPR se aplica a você, nos baseamos nas seguintes bases legais para tratar seus dados pessoais:",
        blocks: [{ type: "list", items: [
          "<b>Execução do nosso contrato com você:</b> para fornecer sua conta, seus créditos e os modelos oficiais.",
          "<b>Interesses legítimos:</b> para proteger os Serviços, prevenir fraudes e abusos e melhorar os Serviços usando dados operacionais, não suas conversas.",
          "<b>Obrigações legais:</b> para manter registros fiscais e contábeis.",
          "<b>Consentimento:</b> quando o solicitamos. Você pode retirar seu consentimento a qualquer momento."
        ] }]
      },
      {
        h2: "9. Retenção de dados",
        blocks: [{ type: "list", items: [
          "Dados da conta e do dispositivo: enquanto sua conta existir.",
          "Registros de pedidos e pagamentos: pelo tempo exigido pela legislação fiscal e contábil.",
          "Registros de uso: pelo tempo em que precisarmos deles para cobrança e suporte.",
          "Logs operacionais e de segurança: apenas pelo tempo necessário para operar, proteger e solucionar problemas dos Serviços."
        ] }]
      },
      {
        h2: "10. Seus direitos", id: "rights",
        blocks: [{ type: "p", html: `Dependendo de onde você mora, leis como o GDPR, o UK GDPR e a CCPA conferem direitos sobre seus dados pessoais, incluindo o direito de acessá-los, corrigi-los ou excluí-los, receber uma cópia deles e se opor ao seu tratamento ou restringi-lo. Para exercer esses direitos, envie um e-mail para ${mailto}, de preferência pelo endereço que você usa para entrar. Talvez precisemos verificar sua identidade, e responderemos no prazo exigido por lei. Se sua conta for excluída, continuaremos a manter registros de pedidos pelo tempo exigido por lei. Você também tem o direito de apresentar uma reclamação à autoridade local de proteção de dados.` }]
      },
      {
        h2: "11. Não vendemos dados pessoais",
        blocks: [{ type: "p", html: "Não vendemos dados pessoais e não compartilhamos dados pessoais para fins publicitários." }]
      },
      {
        h2: "12. Crianças",
        blocks: [{ type: "p", html: `Os Serviços se destinam a pessoas a partir de 16 anos e não são direcionados a crianças. Se você acredita que uma criança nos forneceu dados pessoais, entre em contato com ${mailto} e nós os excluiremos.` }]
      },
      {
        h2: "13. Segurança",
        blocks: [{ type: "p", html: "Usamos medidas técnicas e organizacionais razoáveis, concebidas para proteger dados pessoais. As conexões com nossos serviços são criptografadas, cada dispositivo comprova sua identidade com sua própria chave e o acesso aos nossos sistemas é restrito. Porém, nenhum método de transmissão ou armazenamento é totalmente seguro. Quando exigido por lei, notificaremos você sobre uma violação de dados pessoais que afete você." }]
      },
      {
        h2: "14. Alterações nesta política",
        blocks: [{ type: "p", html: "Podemos atualizar esta Política de Privacidade periodicamente. Publicaremos a política atualizada nesta página com uma nova data no topo. Se uma alteração for significativa, avisaremos você por meios razoáveis, como por e-mail ou no aplicativo." }]
      },
      {
        h2: "15. Contato",
        blocks: [{ type: "p", html: `Dúvidas sobre esta Política de Privacidade ou sobre como tratamos dados pessoais podem ser enviadas para ${mailto}.` }]
      }
    ]
  };
}
