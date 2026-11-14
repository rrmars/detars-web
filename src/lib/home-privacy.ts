// Homepage block for DeTars-PII, our own on-device redaction model, published on
// Hugging Face. Every number here is copied from the model card
// (huggingface.co/DeTars/DeTars-PII-v1, release 3.1) — keep them in step with it.
import type { Locale } from "@/lib/site";

export const PII_MODEL_URL = "https://huggingface.co/DeTars/DeTars-PII-v1";
export const PII_EVAL_URL = "https://huggingface.co/DeTars/DeTars-PII-v1/blob/main/EVALUATION.md";

/** Independent test (ood-v1): 10 languages, 600 unseen documents, averages.
 *  leak = % of PII characters left unmasked; over = ordinary characters masked per 1,000.
 *  F1 and leak are from the card's tables; over-mask is read off the card's chart. */
export const piiChart = [
  { name: "DeTars-PII", leak: 4.0, over: 12.2, f1: 86.0, ours: true },
  { name: "Urchade GLiNER multi-PII", leak: 7.2, over: 31.0, f1: 77.0 },
  { name: "Fastino GLiNER2-PII", leak: 16.0, over: 13.6, f1: 55.5 },
  { name: "NVIDIA GLiNER-PII", leak: 19.7, over: 21.4, f1: 35.9 },
  { name: "OpenAI Privacy Filter", leak: 21.3, over: 7.1, f1: 69.2 }
];

/** A demo sentence: plain strings stay, [text, tag] pairs get masked. */
export type DemoPart = string | [string, string];

export type HomePrivacyCopy = {
  kicker: string;
  h2: string;
  p: string;
  you: string;
  engine: string;
  cloud: string;
  demo: DemoPart[];
  stats: { n: string; l: string }[];
  chartTitle: string;
  xAxis: string;
  yAxis: string;
  better: string;
  note: string;
  cta: string;
  evalCta: string;
};

const en: HomePrivacyCopy = {
  kicker: "Our own privacy model · open on Hugging Face",
  h2: "Leaks the least. <span class='o'>Doesn't mask everything.</span>",
  p: "DeTars-PII is the redaction model we trained ourselves. It runs on your computer's CPU in about 0.8 GB of memory — no GPU, no network. In 27 languages it finds names, companies, addresses, phone numbers, emails, IDs and card numbers, and swaps them for placeholders before a request leaves your machine.",
  you: "What you wrote",
  engine: "on your device · DeTars-PII",
  cloud: "What the cloud model sees",
  demo: ["Reply to ", ["Daniel Brooks", "PERSON_1"], " at ", ["Northwind Labs", "ORG_1"], " — call him on ", ["+1 415 555 0132", "PHONE_1"], " and send the contract to ", ["221 Mission St, San Francisco", "ADDRESS_1"], "."],
  stats: [
    { n: "#1", l: "strict F1 in all 10 languages of an independent test (avg 86.0 vs 77.0)" },
    { n: "4.0%", l: "of personal data leaked; the runner-up leaks 7.2% and masks 2.5× more ordinary text" },
    { n: "92.1", l: "strict F1 on a public Chinese benchmark; next best 56.2" },
    { n: "27", l: "languages, one shared encoder, Apache-2.0" }
  ],
  chartTitle: "Leaks less, without masking everything",
  xAxis: "Personal data leaked (%)",
  yAxis: "Ordinary text masked (per 1,000 chars)",
  better: "better",
  note: "Independent test: 10 languages, 600 new documents never used in training. Every model ran locally with its published weights, at operating points locked before scoring. Self-run and reproducible; figures from the model card.",
  cta: "See the model on Hugging Face →",
  evalCta: "Methods and known limits"
};

const zh: HomePrivacyCopy = {
  kicker: "自研隐私模型 · 已在 Hugging Face 开源",
  h2: "漏得最少，<span class='o'>又不乱遮。</span>",
  p: "DeTars-PII 是我们自己训练的脱敏模型：在你电脑的 CPU 上运行，约 0.8 GB 内存，不需要显卡，也不联网。它在 27 种语言里找出人名、公司、地址、电话、邮箱、证件和银行卡号，换成占位符之后，请求才离开你的电脑。",
  you: "你写的",
  engine: "本机 · DeTars-PII",
  cloud: "云端模型看到的",
  demo: ["帮我回封邮件给", ["王建国", "PERSON_1"], "，他在", ["星河科技", "ORG_1"], "，电话 ", ["138 0013 8000", "PHONE_1"], "，合同寄到", ["上海市浦东新区世纪大道 100 号", "ADDRESS_1"], "。"],
  stats: [
    { n: "第 1", l: "独立测试 10 种语言，F1 全部第一（平均 86.0，次优 77.0）" },
    { n: "4.0%", l: "个人信息漏出率；次优模型漏 7.2%，还多遮 2.5 倍正常文字" },
    { n: "92.1", l: "中文公开基准 F1，次优只有 56.2" },
    { n: "27 种", l: "语言，一个编码器全覆盖，Apache-2.0 开源" }
  ],
  chartTitle: "漏得少，也不乱遮",
  xAxis: "漏出的个人信息（%）",
  yAxis: "误遮的正常文字（每千字）",
  better: "更好",
  note: "独立测试集：10 种语言、600 篇训练中从未见过的新文档。各模型都用公开权重在本地运行，阈值在评分前锁定。评测为自测、可复现，数据取自模型卡。",
  cta: "在 Hugging Face 查看模型 →",
  evalCta: "评测方法与已知局限"
};

const zhHant: HomePrivacyCopy = {
  ...zh,
  kicker: "自研隱私模型 · 已在 Hugging Face 開源",
  h2: "漏得最少，<span class='o'>又不亂遮。</span>",
  p: "DeTars-PII 是我們自己訓練的去識別化模型：在你電腦的 CPU 上執行，約 0.8 GB 記憶體，不需要顯示卡，也不連網。它在 27 種語言裡找出人名、公司、地址、電話、Email、證件和信用卡號，換成佔位符之後，請求才離開你的電腦。",
  you: "你寫的",
  engine: "本機 · DeTars-PII",
  cloud: "雲端模型看到的",
  demo: ["幫我回封信給", ["陳志明", "PERSON_1"], "，他在", ["遠星科技", "ORG_1"], "，電話 ", ["0912 345 678", "PHONE_1"], "，合約寄到", ["台北市信義區松仁路 100 號", "ADDRESS_1"], "。"],
  stats: [
    { n: "第 1", l: "獨立測試 10 種語言，F1 全部第一（平均 86.0，次優 77.0）" },
    { n: "4.0%", l: "個人資料漏出率；次優模型漏 7.2%，還多遮 2.5 倍正常文字" },
    { n: "92.1", l: "中文公開基準 F1，次優只有 56.2" },
    { n: "27 種", l: "語言，一個編碼器全覆蓋，Apache-2.0 開源" }
  ],
  chartTitle: "漏得少，也不亂遮",
  xAxis: "漏出的個人資料（%）",
  yAxis: "誤遮的正常文字（每千字）",
  note: "獨立測試集：10 種語言、600 篇訓練中從未見過的新文件。各模型都用公開權重在本機執行，閾值在評分前鎖定。評測為自測、可重現，數據取自模型卡。",
  cta: "在 Hugging Face 查看模型 →",
  evalCta: "評測方法與已知限制"
};

const ja: HomePrivacyCopy = {
  kicker: "自社開発のプライバシーモデル · Hugging Face で公開",
  h2: "漏らさない。<span class='o'>隠しすぎない。</span>",
  p: "DeTars-PII は私たちが自ら学習させた匿名化モデルです。あなたのパソコンの CPU 上、約 0.8 GB のメモリで動き、GPU もネット接続も不要。27 言語で人名、会社名、住所、電話番号、メール、各種 ID、カード番号を見つけ、プレースホルダーに置き換えてから、リクエストを外に出します。",
  you: "あなたが書いた文",
  engine: "端末内 · DeTars-PII",
  cloud: "クラウドのモデルに届く文",
  demo: [["佐藤健一", "PERSON_1"], "さん（", ["北星テック", "ORG_1"], "）に返信して。電話は ", ["090-1234-5678", "PHONE_1"], "、契約書は ", ["東京都港区芝公園 4-2-8", "ADDRESS_1"], " へ。"],
  stats: [
    { n: "1 位", l: "独立テストの 10 言語すべてで strict F1 首位（平均 86.0、次点 77.0）" },
    { n: "4.0%", l: "個人情報の漏れ率。次点は 7.2% で、通常の文字を 2.5 倍多く隠す" },
    { n: "92.1", l: "中国語公開ベンチマークの F1。次点は 56.2" },
    { n: "27", l: "言語を 1 つのエンコーダーで。Apache-2.0" }
  ],
  chartTitle: "漏れは少なく、隠しすぎもしない",
  xAxis: "漏れた個人情報（%）",
  yAxis: "誤って隠した通常の文字（1,000 字あたり）",
  better: "より良い",
  note: "独立テスト：10 言語、学習に使っていない新規文書 600 件。各モデルは公開ウェイトでローカル実行し、しきい値は採点前に固定。自社測定・再現可能で、数値はモデルカードから。",
  cta: "Hugging Face でモデルを見る →",
  evalCta: "評価方法と既知の限界"
};

const ko: HomePrivacyCopy = {
  kicker: "직접 학습한 프라이버시 모델 · Hugging Face 공개",
  h2: "가장 적게 새고, <span class='o'>과하게 가리지 않습니다.</span>",
  p: "DeTars-PII는 저희가 직접 학습시킨 비식별화 모델입니다. 당신 컴퓨터의 CPU에서 약 0.8GB 메모리로 돌아가며, GPU도 네트워크도 필요 없습니다. 27개 언어에서 이름, 회사, 주소, 전화번호, 이메일, 신분증 번호, 카드 번호를 찾아 플레이스홀더로 바꾼 뒤에야 요청이 컴퓨터 밖으로 나갑니다.",
  you: "당신이 쓴 문장",
  engine: "기기 안 · DeTars-PII",
  cloud: "클라우드 모델이 보는 문장",
  demo: [["김민준", "PERSON_1"], " 님(", ["한빛랩스", "ORG_1"], ")께 답장해 줘. 전화는 ", ["010-1234-5678", "PHONE_1"], ", 계약서는 ", ["서울시 강남구 테헤란로 152", "ADDRESS_1"], "로 보내 줘."],
  stats: [
    { n: "1위", l: "독립 테스트 10개 언어 모두 strict F1 1위 (평균 86.0, 차순위 77.0)" },
    { n: "4.0%", l: "개인정보 유출률. 차순위는 7.2%이며 일반 텍스트를 2.5배 더 가립니다" },
    { n: "92.1", l: "중국어 공개 벤치마크 F1, 차순위 56.2" },
    { n: "27", l: "개 언어를 하나의 인코더로, Apache-2.0" }
  ],
  chartTitle: "덜 새고, 과하게 가리지 않는다",
  xAxis: "유출된 개인정보 (%)",
  yAxis: "잘못 가린 일반 텍스트 (1,000자당)",
  better: "더 좋음",
  note: "독립 테스트: 10개 언어, 학습에 쓰지 않은 새 문서 600건. 모든 모델은 공개 가중치로 로컬에서 실행했고, 임계값은 채점 전에 고정했습니다. 자체 측정이며 재현 가능하고, 수치는 모델 카드에서 가져왔습니다.",
  cta: "Hugging Face에서 모델 보기 →",
  evalCta: "평가 방법과 알려진 한계"
};

const fr: HomePrivacyCopy = {
  kicker: "Notre propre modèle de confidentialité · ouvert sur Hugging Face",
  h2: "Celui qui fuit le moins. <span class='o'>Sans tout masquer.</span>",
  p: "DeTars-PII est le modèle d'anonymisation que nous avons entraîné nous-mêmes. Il tourne sur le processeur de votre ordinateur avec environ 0,8 Go de mémoire, sans GPU ni réseau. Dans 27 langues, il repère noms, entreprises, adresses, téléphones, e-mails, identifiants et numéros de carte, et les remplace par des marqueurs avant qu'une requête ne quitte votre machine.",
  you: "Ce que vous avez écrit",
  engine: "sur votre appareil · DeTars-PII",
  cloud: "Ce que voit le modèle cloud",
  demo: ["Réponds à ", ["Claire Dubois", "PERSON_1"], " chez ", ["Atelier Nord", "ORG_1"], ", appelle-la au ", ["06 12 34 56 78", "PHONE_1"], " et envoie le contrat au ", ["12 rue de Rivoli, Paris", "ADDRESS_1"], "."],
  stats: [
    { n: "N° 1", l: "en F1 strict dans les 10 langues d'un test indépendant (moy. 86,0 contre 77,0)" },
    { n: "4,0 %", l: "de données personnelles qui fuient ; le suivant en laisse fuir 7,2 % et masque 2,5× plus de texte ordinaire" },
    { n: "92,1", l: "de F1 strict sur un benchmark chinois public ; le suivant : 56,2" },
    { n: "27", l: "langues, un seul encodeur, Apache-2.0" }
  ],
  chartTitle: "Moins de fuites, sans tout masquer",
  xAxis: "Données personnelles qui fuient (%)",
  yAxis: "Texte ordinaire masqué (pour 1 000 car.)",
  better: "mieux",
  note: "Test indépendant : 10 langues, 600 nouveaux documents jamais vus à l'entraînement. Chaque modèle a tourné en local avec ses poids publiés, seuils fixés avant toute notation. Mesures internes et reproductibles ; chiffres issus de la fiche du modèle.",
  cta: "Voir le modèle sur Hugging Face →",
  evalCta: "Méthode et limites connues"
};

const es: HomePrivacyCopy = {
  kicker: "Nuestro propio modelo de privacidad · abierto en Hugging Face",
  h2: "El que menos filtra. <span class='o'>Sin taparlo todo.</span>",
  p: "DeTars-PII es el modelo de anonimización que entrenamos nosotros mismos. Funciona en la CPU de tu ordenador con unos 0,8 GB de memoria, sin GPU y sin red. En 27 idiomas encuentra nombres, empresas, direcciones, teléfonos, correos, documentos de identidad y números de tarjeta, y los sustituye por marcadores antes de que una petición salga de tu equipo.",
  you: "Lo que escribiste",
  engine: "en tu dispositivo · DeTars-PII",
  cloud: "Lo que ve el modelo en la nube",
  demo: ["Responde a ", ["Lucía Fernández", "PERSON_1"], " de ", ["Norte Digital", "ORG_1"], ", llámala al ", ["612 345 678", "PHONE_1"], " y manda el contrato a ", ["Calle de Alcalá 50, Madrid", "ADDRESS_1"], "."],
  stats: [
    { n: "N.º 1", l: "en F1 estricto en los 10 idiomas de una prueba independiente (media 86,0 frente a 77,0)" },
    { n: "4,0 %", l: "de datos personales filtrados; el siguiente filtra un 7,2 % y tapa 2,5× más texto normal" },
    { n: "92,1", l: "de F1 estricto en un benchmark público en chino; el siguiente, 56,2" },
    { n: "27", l: "idiomas, un solo codificador, Apache-2.0" }
  ],
  chartTitle: "Filtra menos, sin taparlo todo",
  xAxis: "Datos personales filtrados (%)",
  yAxis: "Texto normal tapado (por 1.000 caracteres)",
  better: "mejor",
  note: "Prueba independiente: 10 idiomas, 600 documentos nuevos nunca usados en el entrenamiento. Cada modelo se ejecutó en local con sus pesos publicados y umbrales fijados antes de puntuar. Medición propia y reproducible; cifras de la ficha del modelo.",
  cta: "Ver el modelo en Hugging Face →",
  evalCta: "Método y límites conocidos"
};

const ptBr: HomePrivacyCopy = {
  kicker: "Nosso próprio modelo de privacidade · aberto no Hugging Face",
  h2: "O que menos vaza. <span class='o'>Sem esconder tudo.</span>",
  p: "O DeTars-PII é o modelo de anonimização que nós mesmos treinamos. Ele roda na CPU do seu computador com cerca de 0,8 GB de memória, sem GPU e sem rede. Em 27 idiomas, encontra nomes, empresas, endereços, telefones, e-mails, documentos e números de cartão, e troca tudo por marcadores antes que um pedido saia da sua máquina.",
  you: "O que você escreveu",
  engine: "no seu dispositivo · DeTars-PII",
  cloud: "O que o modelo na nuvem vê",
  demo: ["Responda à ", ["Ana Souza", "PERSON_1"], " da ", ["Estrela Tech", "ORG_1"], ", ligue para ", ["(11) 91234-5678", "PHONE_1"], " e mande o contrato para ", ["Av. Paulista, 1000, São Paulo", "ADDRESS_1"], "."],
  stats: [
    { n: "Nº 1", l: "em F1 estrito nos 10 idiomas de um teste independente (média 86,0 contra 77,0)" },
    { n: "4,0%", l: "de dados pessoais vazados; o segundo vaza 7,2% e esconde 2,5× mais texto comum" },
    { n: "92,1", l: "de F1 estrito num benchmark público em chinês; o segundo, 56,2" },
    { n: "27", l: "idiomas, um único codificador, Apache-2.0" }
  ],
  chartTitle: "Vaza menos, sem esconder tudo",
  xAxis: "Dados pessoais vazados (%)",
  yAxis: "Texto comum escondido (por 1.000 caracteres)",
  better: "melhor",
  note: "Teste independente: 10 idiomas, 600 documentos novos nunca usados no treino. Cada modelo rodou localmente com seus pesos publicados, com limiares fixados antes da pontuação. Medição própria e reproduzível; números do cartão do modelo.",
  cta: "Ver o modelo no Hugging Face →",
  evalCta: "Método e limites conhecidos"
};

const de: HomePrivacyCopy = {
  kicker: "Unser eigenes Datenschutzmodell · offen auf Hugging Face",
  h2: "Lässt am wenigsten durch. <span class='o'>Schwärzt nicht alles.</span>",
  p: "DeTars-PII ist das Anonymisierungsmodell, das wir selbst trainiert haben. Es läuft auf der CPU deines Computers mit rund 0,8 GB Speicher – ohne GPU, ohne Netz. In 27 Sprachen findet es Namen, Firmen, Adressen, Telefonnummern, E-Mails, Ausweis- und Kartennummern und ersetzt sie durch Platzhalter, bevor eine Anfrage deinen Rechner verlässt.",
  you: "Was du geschrieben hast",
  engine: "auf deinem Gerät · DeTars-PII",
  cloud: "Was das Cloud-Modell sieht",
  demo: ["Antworte ", ["Jonas Becker", "PERSON_1"], " von ", ["Nordlicht Labs", "ORG_1"], ", ruf ihn unter ", ["0151 23456789", "PHONE_1"], " an und schick den Vertrag an ", ["Torstraße 120, Berlin", "ADDRESS_1"], "."],
  stats: [
    { n: "Platz 1", l: "beim strikten F1 in allen 10 Sprachen eines unabhängigen Tests (Ø 86,0 statt 77,0)" },
    { n: "4,0 %", l: "personenbezogener Daten rutschen durch; der Zweitbeste lässt 7,2 % durch und schwärzt 2,5× mehr normalen Text" },
    { n: "92,1", l: "strikter F1 auf einem öffentlichen chinesischen Benchmark; Zweitbester 56,2" },
    { n: "27", l: "Sprachen, ein gemeinsamer Encoder, Apache-2.0" }
  ],
  chartTitle: "Weniger durchgelassen, ohne alles zu schwärzen",
  xAxis: "Durchgelassene personenbezogene Daten (%)",
  yAxis: "Geschwärzter normaler Text (pro 1.000 Zeichen)",
  better: "besser",
  note: "Unabhängiger Test: 10 Sprachen, 600 neue, nie trainierte Dokumente. Jedes Modell lief lokal mit seinen veröffentlichten Gewichten, Schwellen vor der Bewertung festgelegt. Eigene, reproduzierbare Messung; Zahlen aus der Modellkarte.",
  cta: "Modell auf Hugging Face ansehen →",
  evalCta: "Methode und bekannte Grenzen"
};

export const homePrivacy: Record<Locale, HomePrivacyCopy> = {
  en,
  zh,
  "zh-Hant": zhHant,
  ja,
  ko,
  fr,
  es,
  "pt-BR": ptBr,
  de
};
