import type { HomeCopy } from "@/lib/home-copy";

export const homeEs: HomeCopy = {
  metaTitle: "DeTars | ¿IA para todo el mundo? Esta es para ti.",
  metaDescription: "Un equipo de IA completo, trabajando para una sola persona: tú. Jefe de gabinete, asistente, director y cineasta — todos de tu lado.",
  heroEyebrow: "Tu equipo de IA personal",
  heroH1: "¿IA para todo el mundo?<br><span class='grad'>Esta es para ti.</span>",
  heroSub: "Un equipo de IA completo, trabajando para una sola persona: tú.<br>Un jefe de gabinete que coordina, un asistente para conversar, un director que lleva tu día a día, un cineasta para tus vídeos — todos quieren tu éxito y tu felicidad.",
  heroPrimary: "Empieza por un objetivo →",
  heroSecondary: "Mira cómo trabaja para ti",
  futureKicker: "El futuro que estamos construyendo",
  futureH2: "Más en tu dispositivo.<br>Más posibilidades para ti.",
  futureP: "Entrenamos nuestro propio modelo de privacidad, y funciona en tu dispositivo: con la Privacidad automática activada, nombres, teléfonos, documentos de identidad y otros datos sensibles se convierten en marcadores en tu equipo antes de llegar a cualquier modelo en la nube, y se restauran localmente cuando vuelven los resultados. Un modelo local también hace trabajo real en tu dispositivo, y se vuelve más capaz a medida que los modelos mejoran. A medida que la potencia de cálculo se hace más accesible, trabajamos hacia un DeTars que haga más en tu propio dispositivo, donde la IA local y la nube hagan cada una lo que mejor saben hacer, con tu privacidad en el centro.",
  futureViz: { device: "Tu dispositivo", privacy: "Modelo de privacidad · anonimiza en tu equipo", local: "Modelo local · hace el trabajo, cada vez más capaz", cloud: "Modelos en la nube · los que elijas", wire: "solo salen marcadores ⟦PERSONA_1⟧" },
  proof: [
    { n: "Días", l: "una tarea puede durar días · los proyectos siguen avanzando" },
    { n: "Todos", l: "los modelos principales · cambia cuando quieras" },
    { n: "Tu dispositivo", l: "Un hogar para tu equipo de IA" }
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
    { st: "Trabaja en segundo plano", sd: "Una tarea puede durar días; los proyectos a largo plazo siguen avanzando y te van informando" },
    { st: "Vuelve a ti", sd: "<b>Vive por ti, no al revés.</b>" }
  ],
  scenarios: [
    {
      av: "🧭",
      pack: "Jefe de gabinete",
      via: "Slack",
      meta: "jefe de gabinete · pendiente de cada tarea",
      input: "Vigílame estos proyectos. Junta todo lo que necesite de mí.",
      work: "atiende 4 tareas · sincroniza dependencias · revisa entregables",
      result: "<b>Resumen de hoy</b><br>✓ Informe de investigación entregado, fuentes verificadas<br>⟳ Cortometraje en su 2.ª versión, listo esta noche<br>⚑ Revisión de inversiones: 1 decisión es tuya",
      story: "Cuantos más proyectos llevas, más agota seguirles la pista. <b>Tu jefe de gabinete coordina a todo el equipo</b>: transmite los nuevos encargos, ordena las dependencias, revisa lo que llega y te trae solo los resultados y las decisiones que de verdad te tocan. Otras IA esperan a que les preguntes; esta mantiene la visión de conjunto por ti."
    },
    {
      av: "💬",
      pack: "Asistente de chat",
      via: "WhatsApp",
      meta: "chat · recuerda tus notas y decisiones pasadas",
      input: "¿Por qué no elegimos a ese proveedor la última vez?",
      work: "buscando en tus notas e historial · al instante",
      result: "Su entrega de marzo se retrasó dos semanas y anotaste «no renovar»: aquí está la nota.<br>¿Quieres que 20 expertos en compras, legal y finanzas piensen alternativas contigo?",
      story: "<b>Vive dentro de WhatsApp, Telegram o Slack</b>: no hace falta abrir otra app. Responde rápido y te recuerda: tus notas, tus proyectos, las decisiones que tomaste. ¿Quieres otros puntos de vista? Trae expertos del Agent Marketplace, <b>cientos de perfiles</b>, para pensar contigo. Lo que sea más grande, se lo pasa al equipo."
    },
    {
      av: "🔍",
      pack: "Investigación",
      via: "WhatsApp",
      meta: "pack: research · cada afirmación con su fuente",
      input: "Un amigo dice que Anthropic va a salir a bolsa. ¿La IA es una burbuja?",
      work: "lee el propio S-1 · contrasta el roadshow y las previsiones",
      result: "✓ Un informe de investigación revelador:<br><b>la demanda es real; la rentabilidad aún no cierra el círculo</b>",
      story: "De una frase oída de pasada, sigue la pista hasta el folleto de salida a bolsa, el roadshow y los datos en bruto, expone las pruebas y los desacuerdos, y te entrega un informe que puedes cuestionar fuente por fuente. <b>Este se hizo de verdad así</b>; léelo:",
      link: { href: "/research/anthropic-ipo-ai-bubble-2026-11-11", label: "Leer: la salida a bolsa de Anthropic y la burbuja de la IA (en inglés) →" }
    },
    {
      av: "☾",
      pack: "Invocación",
      via: "DeTars",
      meta: "pack: summon · detenido en el momento que elijas",
      input: "Don Quijote, mi jefe dice que mis proyectos son molinos de viento.",
      work: "Don Quijote de la Mancha · La Mancha, 1605",
      result: "«¿Molinos? Eso dicen siempre los que nunca han visto un gigante. Mas no os fiéis del todo, amigo, que uno de esos me dejó molido. Embestid si el corazón os lo pide, pero llevad a vuestro Sancho al lado: él sí distingue el uno del otro.»",
      story: "Trae a tu lado a alguien de una novela, o de la historia. <b>Se queda en el momento que elijas</b>, con su pasado, su voz y su carácter. Hoy, cabalga contra gigantes con don Quijote; mañana, habla de tiempos difíciles con sor Juana Inés de la Cruz.",
      link: { href: "/es/packs/summon", label: "Conoce Invocación →" }
    },
    {
      av: "✷",
      pack: "Destino",
      via: "DeTars",
      meta: "pack: destiny · el observatorio",
      input: "Dudo si cambiar de trabajo. ¿Me sacas tres cartas?",
      work: "barajando · pasado / presente / futuro",
      result: "Ocho de Espadas → Caballero de Bastos → La Estrella<br>La jaula que te retiene es, sobre todo, tuya. Apunta lo que de verdad ganas y pierdes, y muévete.",
      story: "Cuenta dónde estás ahora mismo. Con el tarot, la carta astral y los símbolos te ayuda a poner en palabras la confusión, y luego devuelve la intuición a la vida real. <b>Toca una carta en el observatorio para seguir preguntando dentro de la misma tirada.</b>",
      link: { href: "/es/packs/destiny", label: "Visita el observatorio →" },
      tarot: [{ pos: "Pasado", name: "Ocho de Espadas" }, { pos: "Presente", name: "Caballero de Bastos" }, { pos: "Futuro", name: "La Estrella" }]
    },
    {
      av: "▶",
      pack: "Vídeo con IA",
      via: "WhatsApp",
      meta: "pack: ai-video · presupuesto confirmado antes de generar",
      input: "Haz un vídeo de 15 segundos con mi gato de aventura espacial",
      work: "propone dos direcciones visuales · plano a plano",
      result: "✓ Dos direcciones para elegir: <b>ciencia ficción retro</b> / <b>cuento dibujado a mano</b><br>Elige una y se genera plano a plano, entregado en MP4",
      story: "Esa imagen que tienes en la cabeza: el director te propone primero direcciones visuales claramente distintas, y <b>solo gastas cuando ya has elegido una</b>. «Mantén este ambiente», «mismo personaje, otro movimiento»: una línea y está cambiado.",
      link: { href: "/es/packs/ai-video", label: "Ver Vídeo con IA →" }
    },
    {
      av: "◈",
      pack: "Inversión",
      via: "Slack",
      meta: "pack: equity · sin bróker, sin herramienta de órdenes",
      input: "Alguien mencionó una acción y pregunté de pasada",
      work: "desgrana tu tesis · vigila las pruebas",
      result: "🔔 Volvió por su cuenta: los resultados cambian tu razón n.º 2. ¿Lo hablamos?",
      story: "Tus razones, los contraargumentos y los puntos de control, todo en un mismo sitio. <b>Cuando llega una noticia, primero pregunta: ¿cuál de tus razones cambia esto?</b> Te ayuda a pensar con claridad y nunca toca tu cuenta.",
      link: { href: "/es/packs/investing", label: "Ver Inversión →" }
    },
    {
      av: "▦",
      pack: "Taller de datos",
      via: "Slack",
      meta: "pack: data-studio",
      input: "(suelta una hoja de ventas) ¿Dónde cayó más el margen este año?",
      work: "revisa campos y definiciones · desglosa por región y producto",
      result: "✓ Región Este · línea de hardware −18 %<br>Panel listo: haz clic en una región para preguntar por qué",
      story: "Suelta una hoja de cálculo, haz una pregunta y recibe un panel en el que puedes hacer clic. <b>Del panorama al detalle, del número a la causa</b>: el análisis avanza como una conversación.",
      link: { href: "/es/packs/data-studio", label: "Ver Taller de datos →" }
    },
    {
      av: "⌘",
      pack: "Programación",
      via: "Slack",
      meta: "pack: coding",
      input: "Ayúdame a entender el flujo de inicio de sesión de este proyecto. ¿Qué vale más la pena arreglar?",
      work: "localiza archivos clave · rastrea llamadas",
      result: "✓ El flujo de inicio de sesión abarca 3 archivos<br>El arreglo que más vale la pena, y a qué afecta",
      story: "¿Un código enorme y desconocido? <b>Lo entiende antes de tocar nada</b>: encuentra los archivos clave, rastrea definiciones y llamadas, explica el impacto y las opciones, y luego cambia y verifica contigo.",
      link: { href: "/es/packs/coding", label: "Ver Programación →" }
    },
    {
      av: "🎙️",
      pack: "Edición de locución",
      via: "WhatsApp",
      meta: "pack: talking-head · se conserva tu voz real",
      input: "Grabé un clip a cámara sobre la marcha; habla de cómo han cambiado los costes",
      work: "recorta repeticiones · corrige subtítulos · crea tarjetas de datos",
      result: "✓ Vista previa completa lista: tu voz intacta y las cifras clave en tarjetas de datos",
      story: "Tienes algo que decir; no deberías perder tres días editando. <b>Reestructura el relato, corrige los subtítulos y añade gráficos</b>; tú solo señalas: «esta pausa es demasiado larga», «esta frase importa».",
      link: { href: "/es/packs/talking-head", label: "Ver Edición de locución →" }
    }
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
      h3: "Tu IA, con la privacidad en el centro",
      story: "El almacenamiento local no significa que todas las tareas funcionen sin conexión: cuando usas un modelo en la nube, los datos pertinentes de la tarea se envían a su proveedor. <b>Nuestra dirección: más trabajo en tu dispositivo, con la IA local y la nube colaborando.</b>",
      head: "local + cloud",
      lab: "En el dispositivo",
      body: [
        "<span class='dim'>DeTars</span>",
        "Tareas en la nube → se envían datos pertinentes",
        "Nuestra dirección → más capacidad local"
      ],
      foot: "<b>Nuestra dirección:</b> más capacidades locales, no una promesa de que todo funcione sin conexión."
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
  bombCap: "líneas de código · la mitad escritas por el propio DeTars",
  bombH2: "<span class='o'>DeTars se construyó con DeTars.</span>",
  bombP: "Más de 3,4 millones de líneas de código — y <b>la mitad escritas por el propio DeTars</b>. Pocas tareas que le encargues serán más difíciles que construirse a sí mismo. <b>Es una aplicación y es el suelo sobre el que construyes</b>: el conocimiento, los métodos y el trabajo que acumulas aquí siguen siendo tuyos, gane el modelo que gane el año que viene.",
  closeH2: "DeTars es tu terminal de terceros permanente.<br><span class='grad'>IA de tu lado.</span>",
  closeP: "Para ayudarte a hacer las cosas y vivir mejor.<br>Un equipo personal de IA que trabaja en segundo plano, recibe instrucciones por las aplicaciones de chat que usas y mantiene el contacto contigo.",
  closePrimary: "Tenla en tu máquina →",
  closeSecondary: "Lee la historia técnica"
};
