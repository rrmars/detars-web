// Localized UI text for the Scenarios section (index, article chrome, domain names) and the
// minimal header/footer used by scenario-only locales. en and zh keep the strings that shipped
// with the section; the others are first-pass translations meant for a native-speaker review.
import { scenarioDe } from "@/lib/scenario.de";
import type { AnyLocale, ScenarioOnlyLocale } from "@/lib/site";

export type ScenarioCopy = {
  title: string; description: string; kicker: string; heading: string; intro: string; invitation: string; quiet: string;
  action: string; all: string; count: string; read: string; languages: string; researched: string; producer: string; note: string;
  related: string; filter: string; meta: string; fallbackNote: string; back: string; originalResearch: string; dateUnknown: string;
  scrollHint: string; copyRequest: string; copied: string; copyFail: string; tableLabel: string; researchDate: string; recheckDate: string;
};

const en: ScenarioCopy = {
  title: "Scenarios · DeTars", description: "Real tasks, useful answers: explore DeTars scenarios for travel, home budgets, work, family life and small business, with dates, sources and practical next steps.",
  kicker: "Scenarios", heading: "A real question.\nA useful way forward.", intro: "A trip to plan. A first home to budget for. A small shop’s cash to untangle. Each guide is a real run of a general DeTars Cowork task on one specific situation, kept with its complete answer, original assumptions and important limits.",
  invitation: "Have a look. You might find a place to start.", quiet: "Not a feature list. Real work, with research dates and sources.",
  action: "Bring your own question to DeTars ↗", all: "All", count: "scenarios", read: "Read the guide →",
  languages: "Available languages", researched: "Researched", producer: "General Cowork task", note: "Each answer belongs to its original task and assumptions. Prices, rules and availability can change; recheck them for your situation.",
  related: "Related sections", filter: "Filter by domain", meta: "Answers · assumptions · next steps", fallbackNote: "Guides that are not translated into this language open in English.",
  back: "All scenarios", originalResearch: "Original research", dateUnknown: "Date unknown", scrollHint: "Wide tables scroll horizontally within the article.",
  copyRequest: "Copy the request above", copied: "Copied. Fill in your own details.", copyFail: "Please select the request above and copy it manually.",
  tableLabel: "Data table {n}, horizontally scrollable", researchDate: "Original research date", recheckDate: "Article recheck date"
};
const zh: ScenarioCopy = {
  title: "场景 · DeTars", description: "从旅行、住房和家庭预算到工作与小生意，看看 DeTars 如何把一个真实问题变成有来源、有下一步的实用答案。",
  kicker: "场景", heading: "一个真实问题，\n一条可走的路。", intro: "想安排一次旅行，算清第一次租房的开销，或理顺小店的现金流？每一篇都是 DeTars 的通用 Cowork 任务按一个具体处境真实跑出来的：完整答案、原始假设和重要限制都保留着。",
  invitation: "随便看看，也许就有你的起点。", quiet: "不是功能清单。是真实的工作，有调研日期，也有来源。",
  action: "把你的问题交给 DeTars ↗", all: "全部", count: "个场景", read: "阅读全文 →",
  languages: "已有语言", researched: "调研", producer: "通用 Cowork 任务", note: "每篇答案对应原任务的具体条件。价格、规则与可用性会变化，请按你的情况重新核实。",
  related: "相关栏目", filter: "按领域筛选", meta: "答案 · 假设 · 下一步", fallbackNote: "尚无本语言译本的指南会以英文打开。",
  back: "所有场景", originalResearch: "原始调研", dateUnknown: "日期未知", scrollHint: "宽表格可在表格内左右滑动。",
  copyRequest: "复制上面的请求", copied: "已复制，可以填写你的情况了。", copyFail: "请选中上面的请求并手动复制。",
  tableLabel: "数据表 {n}，可左右滚动", researchDate: "原始调研日期", recheckDate: "文章复核日期"
};
const zhHant: ScenarioCopy = {
  title: "情境 · DeTars", description: "從旅行、住房和家庭預算到工作與小生意，看看 DeTars 如何把一個真實問題變成有來源、有下一步的實用答案。",
  kicker: "情境", heading: "一個真實問題，\n一條可走的路。", intro: "想安排一趟旅行，算清第一次租屋的開銷，或理順小店的現金流？每一篇都是 DeTars 的通用 Cowork 任務針對一個具體處境真實跑出來的：完整答案、原始假設和重要限制都保留著。",
  invitation: "隨便看看，也許就有你的起點。", quiet: "不是功能清單。是真實的工作，有調研日期，也有來源。",
  action: "把你的問題交給 DeTars ↗", all: "全部", count: "個情境", read: "閱讀全文 →",
  languages: "已有語言", researched: "調研", producer: "通用 Cowork 任務", note: "每篇答案對應原任務的具體條件。價格、規則與可用性會變動，請依你的情況重新核實。",
  related: "相關單元", filter: "依領域篩選", meta: "答案 · 假設 · 下一步", fallbackNote: "尚無本語言譯本的指南會以英文開啟。",
  back: "所有情境", originalResearch: "原始調研", dateUnknown: "日期未知", scrollHint: "寬表格可在表格內左右滑動。",
  copyRequest: "複製上面的請求", copied: "已複製，可以填寫你的情況了。", copyFail: "請選取上面的請求並手動複製。",
  tableLabel: "資料表 {n}，可左右捲動", researchDate: "原始調研日期", recheckDate: "文章複核日期"
};
const ja: ScenarioCopy = {
  title: "活用シーン · DeTars", description: "旅行、住まいの予算、仕事、家族の暮らし、小さなビジネスまで。DeTars が現実の悩みを、出典と次の一歩のある実用的な答えに変えた事例を紹介します。",
  kicker: "活用シーン", heading: "現実の悩みに、\n進める道を。", intro: "旅行の計画、初めての住まいの予算、小さなお店の資金繰り。各ガイドは、汎用の DeTars Cowork タスクを具体的な状況で実際に走らせたもので、完全な答えと当初の前提、重要な制約をそのまま残しています。",
  invitation: "気軽にのぞいてみてください。出発点が見つかるかもしれません。", quiet: "機能の一覧ではありません。調査日と出典のある、実際の仕事です。",
  action: "あなたの質問を DeTars へ ↗", all: "すべて", count: "件のシーン", read: "ガイドを読む →",
  languages: "利用できる言語", researched: "調査日", producer: "汎用 Cowork タスク", note: "各回答は元のタスクと前提に基づきます。価格・ルール・空き状況は変わるため、ご自身の状況で再確認してください。",
  related: "関連セクション", filter: "分野で絞り込む", meta: "答え · 前提 · 次の一歩", fallbackNote: "この言語に翻訳されていないガイドは英語で開きます。",
  back: "すべてのシーン", originalResearch: "元の調査", dateUnknown: "日付不明", scrollHint: "幅の広い表は、表の中で横にスクロールできます。",
  copyRequest: "上のリクエストをコピー", copied: "コピーしました。ご自身の状況を入力してください。", copyFail: "上のリクエストを選択して、手動でコピーしてください。",
  tableLabel: "データ表 {n}（横にスクロールできます）", researchDate: "元の調査日", recheckDate: "記事の再確認日"
};
const fr: ScenarioCopy = {
  title: "Cas d’usage · DeTars", description: "Des tâches réelles, des réponses utiles : voyages, budget logement, travail, vie de famille et petite entreprise, avec dates, sources et prochaines étapes concrètes.",
  kicker: "Cas d’usage", heading: "Une vraie question.\nUne piste utile.", intro: "Un voyage à organiser. Un premier logement à budgéter. La trésorerie d’une petite boutique à démêler. Chaque guide est l’exécution réelle d’une tâche Cowork générale de DeTars sur une situation précise, conservée avec sa réponse complète, ses hypothèses d’origine et ses limites importantes.",
  invitation: "Jetez un œil. Vous y trouverez peut-être un point de départ.", quiet: "Pas une liste de fonctionnalités. Du vrai travail, avec dates de recherche et sources.",
  action: "Posez votre question à DeTars ↗", all: "Tous", count: "cas", read: "Lire le guide →",
  languages: "Langues disponibles", researched: "Recherché", producer: "Tâche Cowork générale", note: "Chaque réponse dépend de sa tâche et de ses hypothèses d’origine. Prix, règles et disponibilités changent ; revérifiez-les pour votre situation.",
  related: "Rubriques liées", filter: "Filtrer par domaine", meta: "Réponses · hypothèses · prochaines étapes", fallbackNote: "Les guides non traduits dans cette langue s’ouvrent en anglais.",
  back: "Tous les cas", originalResearch: "Recherche d’origine", dateUnknown: "Date inconnue", scrollHint: "Les tableaux larges défilent horizontalement dans l’article.",
  copyRequest: "Copier la demande ci-dessus", copied: "Copié. Ajoutez vos propres informations.", copyFail: "Sélectionnez la demande ci-dessus et copiez-la manuellement.",
  tableLabel: "Tableau de données {n}, défilement horizontal", researchDate: "Date de la recherche d’origine", recheckDate: "Date de revérification de l’article"
};
const es: ScenarioCopy = {
  title: "Escenarios · DeTars", description: "Tareas reales, respuestas útiles: viajes, presupuesto de vivienda, trabajo, vida familiar y pequeños negocios, con fechas, fuentes y próximos pasos prácticos.",
  kicker: "Escenarios", heading: "Una pregunta real.\nUn camino útil.", intro: "Un viaje que planear. Una primera vivienda que presupuestar. El dinero de una tienda pequeña que ordenar. Cada guía es la ejecución real de una tarea general de Cowork de DeTars sobre una situación concreta, con su respuesta completa, sus supuestos originales y sus límites importantes.",
  invitation: "Échale un vistazo. Quizá encuentres un punto de partida.", quiet: "No es una lista de funciones. Es trabajo real, con fechas de investigación y fuentes.",
  action: "Lleva tu pregunta a DeTars ↗", all: "Todos", count: "escenarios", read: "Leer la guía →",
  languages: "Idiomas disponibles", researched: "Investigado", producer: "Tarea general de Cowork", note: "Cada respuesta pertenece a su tarea y supuestos originales. Precios, reglas y disponibilidad cambian; vuelve a comprobarlos para tu situación.",
  related: "Secciones relacionadas", filter: "Filtrar por tema", meta: "Respuestas · supuestos · próximos pasos", fallbackNote: "Las guías sin traducción a este idioma se abren en inglés.",
  back: "Todos los escenarios", originalResearch: "Investigación original", dateUnknown: "Fecha desconocida", scrollHint: "Las tablas anchas se desplazan horizontalmente dentro del artículo.",
  copyRequest: "Copiar la solicitud de arriba", copied: "Copiado. Completa con tus propios datos.", copyFail: "Selecciona la solicitud de arriba y cópiala manualmente.",
  tableLabel: "Tabla de datos {n}, con desplazamiento horizontal", researchDate: "Fecha de la investigación original", recheckDate: "Fecha de revisión del artículo"
};
const id: ScenarioCopy = {
  title: "Skenario · DeTars", description: "Tugas nyata, jawaban berguna: perjalanan, anggaran rumah, pekerjaan, kehidupan keluarga, dan usaha kecil, lengkap dengan tanggal, sumber, dan langkah praktis berikutnya.",
  kicker: "Skenario", heading: "Pertanyaan nyata.\nJalan keluar yang berguna.", intro: "Perjalanan yang harus direncanakan. Rumah pertama yang harus dianggarkan. Arus kas toko kecil yang perlu dirapikan. Setiap panduan adalah hasil nyata tugas Cowork umum DeTars untuk satu situasi tertentu, lengkap dengan jawaban penuh, asumsi awal, dan batasan penting.",
  invitation: "Silakan lihat-lihat. Mungkin Anda menemukan titik awal.", quiet: "Bukan daftar fitur. Pekerjaan nyata, dengan tanggal riset dan sumber.",
  action: "Bawa pertanyaan Anda ke DeTars ↗", all: "Semua", count: "skenario", read: "Baca panduan →",
  languages: "Bahasa tersedia", researched: "Diriset", producer: "Tugas Cowork umum", note: "Setiap jawaban terkait tugas dan asumsi aslinya. Harga, aturan, dan ketersediaan bisa berubah; periksa ulang sesuai situasi Anda.",
  related: "Bagian terkait", filter: "Filter menurut topik", meta: "Jawaban · asumsi · langkah berikutnya", fallbackNote: "Panduan yang belum diterjemahkan ke bahasa ini dibuka dalam bahasa Inggris.",
  back: "Semua skenario", originalResearch: "Riset asli", dateUnknown: "Tanggal tidak diketahui", scrollHint: "Tabel lebar dapat digulir menyamping di dalam artikel.",
  copyRequest: "Salin permintaan di atas", copied: "Tersalin. Isi dengan keadaan Anda sendiri.", copyFail: "Pilih permintaan di atas lalu salin secara manual.",
  tableLabel: "Tabel data {n}, dapat digulir menyamping", researchDate: "Tanggal riset asli", recheckDate: "Tanggal pengecekan ulang artikel"
};
const ptBR: ScenarioCopy = {
  title: "Cenários · DeTars", description: "Tarefas reais, respostas úteis: viagens, orçamento de moradia, trabalho, vida em família e pequenos negócios, com datas, fontes e próximos passos práticos.",
  kicker: "Cenários", heading: "Uma pergunta real.\nUm caminho útil.", intro: "Uma viagem para planejar. Uma primeira casa para orçar. O fluxo de caixa de uma lojinha para organizar. Cada guia é a execução real de uma tarefa geral do Cowork do DeTars em uma situação específica, mantida com a resposta completa, as premissas originais e os limites importantes.",
  invitation: "Dê uma olhada. Talvez você encontre um ponto de partida.", quiet: "Não é uma lista de recursos. É trabalho real, com datas de pesquisa e fontes.",
  action: "Leve sua pergunta ao DeTars ↗", all: "Todos", count: "cenários", read: "Ler o guia →",
  languages: "Idiomas disponíveis", researched: "Pesquisado", producer: "Tarefa geral do Cowork", note: "Cada resposta pertence à tarefa e às premissas originais. Preços, regras e disponibilidade mudam; confira de novo para a sua situação.",
  related: "Seções relacionadas", filter: "Filtrar por tema", meta: "Respostas · premissas · próximos passos", fallbackNote: "Guias sem tradução para este idioma abrem em inglês.",
  back: "Todos os cenários", originalResearch: "Pesquisa original", dateUnknown: "Data desconhecida", scrollHint: "Tabelas largas rolam na horizontal dentro do artigo.",
  copyRequest: "Copiar o pedido acima", copied: "Copiado. Preencha com os seus dados.", copyFail: "Selecione o pedido acima e copie manualmente.",
  tableLabel: "Tabela de dados {n}, com rolagem horizontal", researchDate: "Data da pesquisa original", recheckDate: "Data da reconferência do artigo"
};
const vi: ScenarioCopy = {
  title: "Tình huống · DeTars", description: "Tác vụ thật, câu trả lời hữu ích: du lịch, ngân sách nhà ở, công việc, cuộc sống gia đình và kinh doanh nhỏ, kèm ngày tháng, nguồn và bước tiếp theo thiết thực.",
  kicker: "Tình huống", heading: "Một câu hỏi thật.\nMột lối đi hữu ích.", intro: "Một chuyến đi cần lên kế hoạch. Căn nhà đầu tiên cần tính ngân sách. Dòng tiền của một cửa hàng nhỏ cần gỡ rối. Mỗi hướng dẫn là một lần chạy thật của tác vụ Cowork thông dụng của DeTars cho một hoàn cảnh cụ thể, giữ nguyên câu trả lời đầy đủ, các giả định ban đầu và những giới hạn quan trọng.",
  invitation: "Cứ xem thử. Biết đâu bạn tìm được điểm xuất phát.", quiet: "Không phải danh sách tính năng. Đây là công việc thật, có ngày nghiên cứu và nguồn.",
  action: "Mang câu hỏi của bạn đến DeTars ↗", all: "Tất cả", count: "tình huống", read: "Đọc hướng dẫn →",
  languages: "Ngôn ngữ có sẵn", researched: "Nghiên cứu", producer: "Tác vụ Cowork thông dụng", note: "Mỗi câu trả lời gắn với tác vụ và giả định ban đầu. Giá, quy định và tình trạng còn chỗ có thể thay đổi; hãy kiểm tra lại theo hoàn cảnh của bạn.",
  related: "Mục liên quan", filter: "Lọc theo lĩnh vực", meta: "Câu trả lời · giả định · bước tiếp theo", fallbackNote: "Các hướng dẫn chưa được dịch sang ngôn ngữ này sẽ mở bằng tiếng Anh.",
  back: "Tất cả tình huống", originalResearch: "Nghiên cứu gốc", dateUnknown: "Chưa rõ ngày", scrollHint: "Bảng rộng có thể cuộn ngang ngay trong bài.",
  copyRequest: "Sao chép yêu cầu ở trên", copied: "Đã sao chép. Hãy điền thông tin của riêng bạn.", copyFail: "Hãy chọn yêu cầu ở trên và sao chép thủ công.",
  tableLabel: "Bảng dữ liệu {n}, có thể cuộn ngang", researchDate: "Ngày nghiên cứu gốc", recheckDate: "Ngày kiểm tra lại bài viết"
};
const th: ScenarioCopy = {
  title: "สถานการณ์จริง · DeTars", description: "งานจริง คำตอบที่ใช้ได้จริง: การเดินทาง งบบ้าน การทำงาน ชีวิตครอบครัว และธุรกิจขนาดเล็ก พร้อมวันที่ แหล่งอ้างอิง และขั้นตอนถัดไปที่ทำได้จริง",
  kicker: "สถานการณ์จริง", heading: "คำถามจริง\nทางไปต่อที่ใช้ได้", intro: "ทริปที่ต้องวางแผน บ้านหลังแรกที่ต้องคิดงบ เงินสดของร้านเล็กๆ ที่ต้องจัดให้เป็นระเบียบ แต่ละคู่มือคือการรันงาน Cowork ทั่วไปของ DeTars จริงในสถานการณ์เฉพาะหนึ่งเรื่อง เก็บคำตอบฉบับเต็ม สมมติฐานเดิม และข้อจำกัดสำคัญไว้ครบ",
  invitation: "ลองดูได้เลย บางทีคุณอาจเจอจุดเริ่มต้น", quiet: "ไม่ใช่รายการฟีเจอร์ แต่เป็นงานจริง พร้อมวันที่ค้นคว้าและแหล่งอ้างอิง",
  action: "นำคำถามของคุณมาที่ DeTars ↗", all: "ทั้งหมด", count: "สถานการณ์", read: "อ่านคู่มือ →",
  languages: "ภาษาที่มี", researched: "ค้นคว้าเมื่อ", producer: "งาน Cowork ทั่วไป", note: "แต่ละคำตอบขึ้นอยู่กับงานและสมมติฐานเดิม ราคา กฎ และความพร้อมให้บริการอาจเปลี่ยนแปลง โปรดตรวจสอบอีกครั้งให้ตรงกับสถานการณ์ของคุณ",
  related: "หมวดที่เกี่ยวข้อง", filter: "กรองตามหมวด", meta: "คำตอบ · สมมติฐาน · ขั้นตอนถัดไป", fallbackNote: "คู่มือที่ยังไม่มีฉบับแปลภาษานี้จะเปิดเป็นภาษาอังกฤษ",
  back: "สถานการณ์ทั้งหมด", originalResearch: "การค้นคว้าต้นฉบับ", dateUnknown: "ไม่ทราบวันที่", scrollHint: "ตารางกว้างเลื่อนในแนวนอนได้ภายในบทความ",
  copyRequest: "คัดลอกคำขอด้านบน", copied: "คัดลอกแล้ว กรอกรายละเอียดของคุณได้เลย", copyFail: "โปรดเลือกคำขอด้านบนแล้วคัดลอกด้วยตนเอง",
  tableLabel: "ตารางข้อมูล {n} เลื่อนในแนวนอนได้", researchDate: "วันที่ค้นคว้าต้นฉบับ", recheckDate: "วันที่ตรวจสอบบทความซ้ำ"
};
const ko: ScenarioCopy = {
  title: "시나리오 · DeTars", description: "여행, 주거 예산, 일, 가족 생활, 작은 사업까지. DeTars가 실제 고민을 출처와 다음 단계가 있는 실용적인 답으로 바꾼 사례를 살펴보세요.",
  kicker: "시나리오", heading: "진짜 질문에,\n쓸모 있는 길을.", intro: "계획해야 할 여행, 처음 구하는 집의 예산, 작은 가게의 현금 흐름 정리. 각 가이드는 범용 DeTars Cowork 작업을 구체적인 상황에서 실제로 실행한 결과로, 전체 답변과 처음의 가정, 중요한 한계를 그대로 담았습니다.",
  invitation: "편하게 둘러보세요. 시작할 곳을 찾을지도 몰라요.", quiet: "기능 목록이 아닙니다. 조사 날짜와 출처가 있는 실제 작업입니다.",
  action: "내 질문을 DeTars에 맡기기 ↗", all: "전체", count: "개 시나리오", read: "가이드 읽기 →",
  languages: "제공 언어", researched: "조사", producer: "범용 Cowork 작업", note: "각 답변은 원래 작업과 가정에 따른 것입니다. 가격, 규정, 이용 가능 여부는 바뀔 수 있으니 본인 상황에 맞게 다시 확인하세요.",
  related: "관련 섹션", filter: "분야별로 보기", meta: "답변 · 가정 · 다음 단계", fallbackNote: "이 언어로 번역되지 않은 가이드는 영어로 열립니다.",
  back: "모든 시나리오", originalResearch: "원래 조사", dateUnknown: "날짜 미상", scrollHint: "넓은 표는 글 안에서 가로로 스크롤할 수 있습니다.",
  copyRequest: "위 요청 복사", copied: "복사했습니다. 본인의 상황을 채워 넣으세요.", copyFail: "위 요청을 선택해 직접 복사해 주세요.",
  tableLabel: "데이터 표 {n}, 가로 스크롤 가능", researchDate: "원래 조사일", recheckDate: "글 재확인일"
};

export const scenarioCopyByLocale: Record<AnyLocale, ScenarioCopy> = { en, zh, "zh-Hant": zhHant, ja, fr, es, id, "pt-BR": ptBR, vi, th, ko, de: scenarioDe };
export const scenarioCopy = (locale: AnyLocale): ScenarioCopy => scenarioCopyByLocale[locale];

/** Short language chip labels on index cards. English and Chinese keep their original labels. */
export const scenarioChipLabel: Record<AnyLocale, string> = {
  en: "EN", zh: "中文", "zh-Hant": "繁體", ja: "日本語", fr: "FR", es: "ES", id: "ID", "pt-BR": "PT-BR", vi: "VI", th: "ไทย", ko: "한국어", de: "DE"
};

// Domain names for locales other than en/zh (those two come from src/data/scenario-domains.json,
// which the importer owns). Keyed by domain id.
export const scenarioDomainNames: Partial<Record<AnyLocale, Record<string, string>>> = {
  de: { housing: "Mieten und Wohnen", travel: "Reisepläne", buying: "Kaufentscheidungen", visas: "Visa und längere Aufenthalte", careers: "Arbeit und Karriere", living: "Lebenshaltungskosten", family: "Familie und Wohlbefinden", study: "Studium im Ausland", "ai-tools": "Getestete KI-Tools", business: "Kleine Unternehmen und Tabellen" },
  "zh-Hant": { housing: "租屋買房", travel: "旅行行程", buying: "買東西怎麼選", visas: "簽證長住", careers: "工作職涯", living: "生活成本", family: "家庭與健康", study: "留學", "ai-tools": "AI 工具實測", business: "小生意與試算表" },
  ja: { housing: "賃貸・住宅購入", travel: "旅行プラン", buying: "買い物の判断", visas: "ビザと長期滞在", careers: "仕事とキャリア", living: "生活費", family: "家族と健康", study: "留学", "ai-tools": "AI ツール実測", business: "小規模ビジネスとスプレッドシート" },
  fr: { housing: "Louer et acheter un logement", travel: "Itinéraires de voyage", buying: "Décisions d’achat", visas: "Visas et longs séjours", careers: "Travail et carrière", living: "Coût de la vie", family: "Famille et bien-être", study: "Études à l’étranger", "ai-tools": "Outils d’IA testés", business: "Petite entreprise et tableurs" },
  es: { housing: "Alquilar y comprar vivienda", travel: "Itinerarios de viaje", buying: "Decisiones de compra", visas: "Visados y estancias largas", careers: "Trabajo y carrera", living: "Costo de vida", family: "Familia y bienestar", study: "Estudiar en el extranjero", "ai-tools": "Herramientas de IA, probadas", business: "Pequeños negocios y hojas de cálculo" },
  id: { housing: "Sewa & beli rumah", travel: "Itinerari perjalanan", buying: "Keputusan membeli", visas: "Visa & tinggal lebih lama", careers: "Kerja & karier", living: "Biaya hidup", family: "Keluarga & kesejahteraan", study: "Kuliah di luar negeri", "ai-tools": "Alat AI, diuji", business: "Usaha kecil & spreadsheet" },
  "pt-BR": { housing: "Alugar e comprar casa", travel: "Roteiros de viagem", buying: "Decisões de compra", visas: "Vistos e estadias longas", careers: "Trabalho e carreira", living: "Custo de vida", family: "Família e bem-estar", study: "Estudar no exterior", "ai-tools": "Ferramentas de IA, testadas", business: "Pequenos negócios e planilhas" },
  vi: { housing: "Thuê & mua nhà", travel: "Lịch trình du lịch", buying: "Quyết định mua sắm", visas: "Visa & lưu trú dài hạn", careers: "Công việc & sự nghiệp", living: "Chi phí sinh hoạt", family: "Gia đình & sức khỏe", study: "Du học", "ai-tools": "Công cụ AI, đã thử nghiệm", business: "Kinh doanh nhỏ & bảng tính" },
  th: { housing: "เช่าและซื้อบ้าน", travel: "แผนการเดินทาง", buying: "ตัดสินใจซื้อของ", visas: "วีซ่าและการพำนักระยะยาว", careers: "งานและอาชีพ", living: "ค่าครองชีพ", family: "ครอบครัวและสุขภาพ", study: "เรียนต่อต่างประเทศ", "ai-tools": "เครื่องมือ AI ที่ทดสอบจริง", business: "ธุรกิจขนาดเล็กและสเปรดชีต" },
  ko: { housing: "집 구하기·사기", travel: "여행 일정", buying: "구매 결정", visas: "비자·장기 체류", careers: "일과 커리어", living: "생활비", family: "가족과 웰빙", study: "해외 유학", "ai-tools": "직접 테스트한 AI 도구", business: "소규모 사업과 스프레드시트" }
};

// Browser locale tags for Intl dates. Thai is forced to the Gregorian calendar (guides use CE years).
export const intlTag: Record<AnyLocale, string> = {
  en: "en-GB", zh: "zh-CN", "zh-Hant": "zh-TW", ja: "ja-JP", fr: "fr-FR", es: "es-ES", id: "id-ID", "pt-BR": "pt-BR", vi: "vi-VN", th: "th-TH-u-ca-gregory", ko: "ko-KR", de: "de-DE"
};

// Header/footer text for scenario-only locales. Their site has no other pages, so the only local
// nav entry is Scenarios; the remaining links go to the English pages and say so.
export type ScenarioChrome = {
  scenarios: string; cta: string; tagline: string; sub: string; englishSite: string;
  terms: string; privacy: string; refund: string; pricing: string; legalNote: string;
};
export const scenarioChrome: Record<ScenarioOnlyLocale, ScenarioChrome> = {
  id: { scenarios: "Skenario", cta: "Mulai", tagline: "AI di pihak Anda.", sub: "Terminal pendamping independen Anda, selamanya.", englishSite: "Situs lengkap (Inggris)", terms: "Ketentuan", privacy: "Privasi", refund: "Pengembalian dana", pricing: "Harga", legalNote: "Halaman di luar bagian Skenario tersedia dalam bahasa Inggris." },
  vi: { scenarios: "Tình huống", cta: "Bắt đầu", tagline: "AI luôn đứng về phía bạn.", sub: "Trợ thủ đầu cuối độc lập của bạn, mãi mãi.", englishSite: "Toàn bộ trang web (tiếng Anh)", terms: "Điều khoản", privacy: "Quyền riêng tư", refund: "Hoàn tiền", pricing: "Bảng giá", legalNote: "Các trang ngoài mục Tình huống hiện chỉ có bằng tiếng Anh." },
  th: { scenarios: "สถานการณ์จริง", cta: "เริ่มต้น", tagline: "AI ที่อยู่ข้างคุณ", sub: "เทอร์มินัลอิสระของคุณ ตลอดไป", englishSite: "เว็บไซต์ฉบับเต็ม (ภาษาอังกฤษ)", terms: "ข้อกำหนด", privacy: "ความเป็นส่วนตัว", refund: "การคืนเงิน", pricing: "ราคา", legalNote: "หน้าอื่นนอกเหนือจากส่วนสถานการณ์จริงมีเฉพาะภาษาอังกฤษ" }
};
