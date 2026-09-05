import type { HomeCopy } from "@/lib/home-copy";

export const homeEs: HomeCopy = {
  metaTitle: "DeTars | Lánzale una línea. Hace el resto.",
  metaDescription:
    "Para el trabajo personal que no cabe en una sola conversación: dale un objetivo a DeTars desde una app de chat que ya usas, trabaja sola durante horas y vuelve con un resultado terminado.",
  heroEyebrow: "Tu propia IA que hace el trabajo de verdad",
  heroH1: "Lánzale una línea a DeTars. <span class='grad'>Hace el resto.</span>",
  heroSub: "Para el trabajo personal que no cabe en una sola conversación.",
  heroPrimary: "Empieza por un objetivo →",
  heroSecondary: "Mira cómo trabaja para ti",
  proof: [
    { n: "Horas", l: "sin vigilancia · incluso toda la noche" },
    { n: "~50", l: "modelos de frontera · cambia cuando quieras" },
    { n: "100%", l: "lo que sabe se queda en tu máquina" }
  ],
  verify: "· Todo lo que se afirma aquí puedes comprobarlo en tu propia máquina — no es retórica de presentación",
  hookKicker: "Por qué ahora",
  hookH2: "El modelo de hoy es un becario brillante pero <span class='o'>poco fiable</span>.",
  hookP:
    "Deslumbrante a ratos, pero olvida, finge que terminó y se cae a mitad de camino. Nadie le confía trabajo real a algo poco fiable. <b>DeTars lo convierte en un equipo al que sí le confías lo importante.</b>",
  liveKicker: "Convivir con ella",
  liveH2: "Le mandas una línea. <span class='o'>Vuelve con el trabajo hecho.</span>",
  steps: [
    { st: "Entrada desde cualquier sitio", sd: "Telegram / Slack / Feishu — una línea o una foto (WeChat: solo texto)" },
    { st: "Trabaja en segundo plano", sd: "Horas, incluso toda la noche — sin que la vigiles" },
    { st: "Vuelve a ti", sd: "<b>Vive por ti, no al revés.</b>" }
  ],
  scenarios: [
    { av: "📷", pack: "Cuidado de mascotas", via: "Telegram", meta: "pack: pet-care", input: "Hice una foto a mi perro y se la envié", work: "edición · redacción de textos", result: "✓ Vídeo corto divertido + textos para redes listos" },
    { av: "💡", pack: "Inversión", via: "Slack", meta: "pack: equity · bloqueado por código, sin operar", input: "Oí un dato sobre una acción y pregunté de pasada", work: "seguimiento · verificación de evidencias", result: "🔔 Volvió: movimiento inusual — ¿lo hablamos?" },
    { av: "🎙️", pack: "Locución", via: "Feishu", meta: "pack: talking-head", input: "Grabé un clip a cámara sobre la marcha", work: "edición automática · subtítulos", result: "✓ Montaje final exportado — con tu voz real" },
    { av: "🔍", pack: "Investigación", via: "WeChat", meta: "pack: research", input: "Oí algo interesante y le solté una línea", work: "indagando durante horas · contrastando", result: "✓ Informe con fuentes + seguimiento continuo" }
  ],
  phoneFoot: "Un solo motivo: entrada → trabaja en segundo plano → vuelve",
  corridorKicker: "Por qué puedes confiar en ella",
  scenes: [
    {
      idx: "01",
      h3: "Piensa por sí misma",
      story:
        "Dale un objetivo — &lsquo;investiga tres competidores este trimestre y entrega un informe con fuentes.&rsquo; Descompone el trabajo, despliega especialistas, sigue su avance y te devuelve un borrador terminado. <b>El cómo lo razona en el momento, no es un guion fijado a fuego.</b>",
      head: "orchestrator.log",
      lab: "en vivo",
      body: [
        "<span class='hl'>plan</span> objetivo → 3 subtareas",
        "<span class='ok'>↳</span> agente A · informes",
        "<span class='ok'>↳</span> agente B · noticias",
        "<span class='ok'>↳</span> agente C · contraste",
        "<span class='dim'>pausa · esperar A/B → fusionar</span>"
      ],
      foot: "<b>Real:</b> forma equipos, reparte el trabajo, pausa y reanuda — funcionando de verdad, sin fingir."
    },
    {
      idx: "02",
      h3: "No se viene abajo",
      story:
        "El trabajo real corre durante horas: redes inestables, límites de tasa, portátiles que se duermen. La mayoría de las herramientas pierden horas por un solo tropiezo. DeTars trata los problemas como un hecho — espera, reintenta, continúa; reinicia y retoma. <b>Déjala correr toda la noche; revisa los resultados por la mañana.</b>",
      head: "runtime.recovery",
      lab: "03:14",
      body: [
        "<span class='dim'>429</span> límite de tasa → espera",
        "<span class='ok'>✓ recuperado, reanudando paso 7</span>",
        "<span class='dim'>suspensión</span> punto de control guardado",
        "<span class='ok'>✓ reanudado desde el punto de control</span>"
      ],
      foot: "<b>Real:</b> los errores son hechos que esquivar, no una muerte instantánea."
    },
    {
      idx: "03",
      h3: "No puede fingir",
      story:
        "El peor truco de la IA: jurar que está &lsquo;listo&rsquo; cuando no lo está; citar una fuente que nunca existió. DeTars convierte &lsquo;listo&rsquo; en un <b>recibo que debe cumplir</b> — entregado o no, respaldado por evidencias o no. Cada cita queda sellada; cambia un solo carácter y queda anulada al instante.",
      head: "completion.receipt",
      lab: "verificado",
      body: [
        "entregable ........ <span class='ok'>✓ presente</span>",
        "cadena de evidencias <span class='ok'>✓ completa</span>",
        "<span class='dim'>sha256: 9f4c…a1e</span>",
        "revisión por pares  <span class='ok'>✓ firmada</span>",
        "<span class='hl'>cita alterada → <span class='dim'>rechazada</span></span>"
      ],
      foot: "<b>Real:</b> &lsquo;listo&rsquo; es un recibo verificable, no una sensación."
    },
    {
      idx: "04",
      h3: "Es tuya — y nadie te la puede quitar",
      story:
        "Vive en tu propia máquina y te va conociendo con el tiempo. Pero todo lo que recuerda sobre ti <b>necesita tu visto bueno primero</b>; esa memoria es un archivo en tu disco, no una cuenta en el servidor de alguien. Nadie puede inutilizarla con un aviso, como les pasó a Rewind o Humane.",
      head: "~/detars/memory",
      lab: "local",
      body: [
        "<span class='dim'>./profile.mem</span>",
        "<span class='dim'>./projects/*.mem</span>",
        "nueva memoria → <span class='hl'>esperando tu ok</span>",
        "<span class='ok'>✓ funciona sin conexión · nada se sube</span>"
      ],
      foot: "<b>Real:</b> memoria e identidad son archivos en tu disco — la soberanía está grabada en la arquitectura."
    },
    {
      idx: "05",
      h3: "Evoluciona sola",
      story:
        "Caza sus propios fallos y los convierte en cobertura de regresión permanente, reorganiza su propia memoria y — cuando una tarea necesita una capacidad que le falta — genera, instala y gestiona sus propias Tool y Skill. <b>Cada versión es más difícil de batir que la anterior.</b>",
      head: "evolution.log",
      lab: "auto",
      body: [
        "<span class='hl'>regresión</span> +1 caso sellado",
        "<span class='ok'>↳</span> memoria reindexada",
        "<span class='hl'>skill</span> necesaria: pdf-extract",
        "<span class='ok'>↳ generada · instalada · ✓</span>",
        "<span class='dim'>cada versión más difícil de romper</span>"
      ],
      foot: "<b>Real:</b> fiabilidad que se acumula — y nuevas capacidades que ella misma desarrolla."
    },
    {
      idx: "06",
      h3: "No quema tu presupuesto",
      story:
        "Las tareas largas y sin supervisión suelen significar facturas enormes. DeTars enruta para mantener caliente la KV / prompt cache del modelo, así el contexto repetido no se paga dos veces — <b>muchos menos tokens por tarea, y más barato a medida que bajan los precios de los modelos.</b> Déjala correr toda la noche sin vigilar el contador.",
      head: "routing.cache",
      lab: "en vivo",
      body: [
        "<span class='dim'>contexto</span> 184k tokens",
        "<span class='ok'>↳ prompt cache · acierto</span>",
        "facturado → solo tokens nuevos",
        "<span class='dim'>contexto repetido: no se vuelve a facturar</span>"
      ],
      foot: "<b>Real:</b> enrutamiento consciente de la caché — menos tokens facturados, sin facturas desbocadas."
    }
  ],
  bombCap: "líneas de código propio · contadas el 7 de junio de 2026",
  bombH2: "No solo decimos que puede con el trabajo duro — <span class='o'>se produjo a sí misma.</span>",
  bombP:
    "A <b>7 de junio de 2026</b>, el código de DeTars sumaba <b>1.175.104 líneas en 4.889 archivos .ts/.tsx propios</b> bajo git — excluidas las dependencias vendorizadas y los .d.ts generados, y sin sumar el runtime vendorizado, que se cuenta aparte. El matiz honesto: ese código se escribió <b>con el propio agent harness de DeTars y bajo dirección humana</b>, no por una IA dejada sola. Un motor poco fiable no produce una aplicación de este tamaño que además funcione — y la cifra se puede volver a contar en el código, en el acto.",
  closeH2: "DeTars es tu terminal de terceros permanente.<br><span class='grad'>Tuya, no alquilada.</span>",
  closeP: "Un equipo de IA privado que tú posees — siempre activo, comandable desde cualquier ventana de chat, y que vuelve a ti por sí solo.",
  closePrimary: "Tenla en tu máquina →",
  closeSecondary: "Lee la historia técnica"
};
