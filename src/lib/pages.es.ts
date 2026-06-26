import { RELEASED, assets, dl } from "@/lib/download";
import type { PageContent, PageKey } from "@/lib/pages";

export const pagesEs: Record<PageKey, PageContent> = {
  "how-it-works": {
    title: "Cómo funciona DeTars | Una línea entra, trabajo terminado sale",
    description:
      "Envía a DeTars una línea o una foto desde cualquier app de chat. Trabaja en segundo plano durante horas y luego vuelve a ti con el trabajo terminado.",
    kicker: "Convivir con ella",
    h1: "Lánzale una línea. <span class='o'>Hace el resto.</span>",
    answer:
      "DeTars recibe la entrada desde cualquier app de chat que ya uses, hace el trabajo en segundo plano — durante horas, incluso de noche — y vuelve a ti cuando termina. Vive por ti, no al revés.",
    sections: [
      {
        h2: "El motivo único",
        intro: "Todo lo que haces con DeTars sigue la misma forma.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Entrada desde cualquier sitio.</b> Una línea o una foto vía Feishu, Slack, Telegram o WeChat — sin ninguna app nueva que aprender.",
              "<b>Trabaja en segundo plano.</b> Planifica, despliega especialistas y trabaja durante horas sin que la vigiles.",
              "<b>Vuelve a ti.</b> Cuando el trabajo está hecho — o cuando de verdad necesita una decisión — te avisa."
            ]
          }
        ]
      },
      {
        h2: "Cuatro formas en que ya la usan",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "Cuidado de mascotas", title: "📷 Una foto de tu perro", body: "Envía una instantánea; recibe un vídeo corto divertido más textos listos para publicar." },
              { tag: "Inversión", title: "💡 Una acción de la que oíste hablar", body: "Menciónala una vez; sigue vigilando y vuelve cuando algo se mueve. Operar está bloqueado por código." },
              { tag: "Locución", title: "🎙️ Un clip a cámara", body: "Graba sobre la marcha; recibe un montaje con subtítulos — con tu voz real, no reemplazada por TTS." },
              { tag: "Investigación", title: "🔍 Algo que escuchaste de pasada", body: "Una línea; recibe un informe con fuentes y seguimiento continuo del tema." }
            ]
          }
        ]
      },
      {
        h2: "Por qué no es solo otro chatbot",
        blocks: [
          {
            type: "p",
            html:
              "Un chatbot te espera y olvida. DeTars lleva un objetivo: razona sobre <b>cómo</b> hacer el trabajo, se recupera cuando algo se rompe y solo marca algo como terminado cuando puede demostrarlo. La ventana de chat es solo la superficie — el trabajo ocurre por debajo."
          }
        ]
      }
    ],
    cta: { label: "Mira por qué puedes confiar en ella →", route: "/reliable" }
  },

  reliable: {
    title: "Por qué DeTars es fiable | Seis cosas que hace y otras no pueden",
    description:
      "DeTars convierte una IA brillante pero poco fiable en un equipo al que puedes confiar trabajo real: razona, sobrevive a los fallos, no puede fingir que terminó, se autocorrige, sigue siendo tuya y no está atada a ningún proveedor.",
    kicker: "Por qué puedes confiar en ella",
    h1: "Fiabilidad, <span class='o'>incorporada a la arquitectura.</span>",
    answer:
      "La IA de hoy es un becario brillante pero poco fiable. DeTars la vuelve digna de confianza mediante seis propiedades estructurales — no promesas, sino mecanismos que puedes verificar.",
    sections: [
      {
        h2: "Las seis",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Piensa por sí misma.</b> Dale un objetivo; descompone el trabajo, forma un equipo de especialistas, sigue el avance, pausa para esperar resultados y reanuda. El cómo lo razona en el momento, no es un guion fijado a fuego.",
              "<b>No se viene abajo.</b> Límites de tasa, tiempos de espera, suspensión, caídas — trata cada uno como un hecho que esquivar: espera, reintenta, punto de control, reanuda. Déjala correr de noche; lee los resultados por la mañana.",
              "<b>No puede fingir.</b> &lsquo;Listo&rsquo; es un recibo que debe cumplirse: entregado, respaldado por evidencias, revisado por pares. Cada cita queda sellada por hash de contenido — cambia un solo carácter y queda anulada al instante.",
              "<b>Tiene un sistema inmunitario.</b> Caza sus propios errores y convierte cada uno en cobertura de regresión permanente. Ya ha detectado dos veces fallos en sus propias herramientas de autoverificación.",
              "<b>Es tuya.</b> Vive en tu máquina; lo que recuerda necesita tu visto bueno y vive como archivos en tu disco. Nadie puede inutilizarla como Rewind o Humane inutilizaron a sus usuarios.",
              "<b>No está capturada.</b> Enruta cada tarea al cerebro que mejor encaje — modelos de frontera de EE. UU./China o un modelo local en tu portátil, ~50 entre los que cambiar. El motor es propio, no un envoltorio sobre la API de alguien."
            ]
          }
        ]
      },
      {
        h2: "Y <span class='o'>evoluciona sola</span>",
        intro: "La fiabilidad no se ajusta una vez — se acumula. Tres ruedas de impulso hacen que cada versión sea más difícil de batir.",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Autoendurecimiento.</b> Caza sus propios errores y convierte cada uno en cobertura de regresión permanente — así cada versión es más difícil de romper que la anterior. Una fiabilidad que no se compra, solo se acumula.",
              "<b>Memoria autooptimizada.</b> Reorganiza y poda continuamente su propio sistema de memoria para que la recuperación siga siendo nítida a medida que crece — mientras que lo que recuerda <i>sobre ti</i> sigue necesitando tu visto bueno.",
              "<b>Autoextensión.</b> Cuando una tarea necesita una capacidad que no tiene, genera, instala y gestiona sus propias herramientas y skills — desarrollando nuevas capacidades de forma autónoma, sin esperar a una versión."
            ]
          }
        ]
      },
      {
        h2: "Por debajo: la ingeniería que la sostiene",
        intro: "No necesitas los detalles — pero cada uno es verificable, aunque la implementación sea propiedad intelectual central que no publicamos.",
        blocks: [
          {
            type: "list",
            items: [
              "Disciplina de escritura de grado base de datos para que un equipo de agentes nunca sobrescriba el trabajo de otro.",
              "Evidencias con huella de contenido: una fuente no leída o alterada no se puede citar.",
              "El enrutamiento consciente de la caché mantiene caliente la KV / prompt cache del modelo — el contexto repetido no se factura dos veces, así las tareas largas cuestan muchos menos tokens, y la factura baja a medida que bajan los precios de los modelos.",
              "Material de un millón de palabras predigerido en un índice antes de que el modelo lea una sola palabra.",
              "Un libro de presupuesto conservado, para que no pueda concederse a sí misma alcance o gasto infinitos.",
              "Una segunda mente de solo lectura que revisa la ejecución en pleno vuelo y devuelve correcciones.",
              "Recuperación de fallos tipada — límite de tasa, tiempo de espera y bloqueo siguen cada uno un carril distinto.",
              "Las acciones irreversibles (órdenes, envíos, credenciales sensibles) están bloqueadas por defecto hasta que las autorices."
            ]
          }
        ]
      }
    ],
    cta: { label: "Mira la prueba →", route: "/proof" }
  },

  packs: {
    title: "DeTars Packs | Una tienda de apps de un equipo de expertos",
    description:
      "Los packs son apps verticales que corren sobre el mismo motor fiable y sobre una memoria que tú posees. Cuidado de mascotas e inversión están activos; hay más en construcción. Cuantos más packs, más densa tu memoria.",
    kicker: "Una tienda de apps de expertos",
    h1: "Un motor fiable. <span class='o'>Muchos expertos.</span>",
    answer:
      "Los packs no son ocho funciones aisladas — son las primeras apps de una tienda. El mismo motor fiable despliega un pack nuevo en semanas, y cada pack corre sobre la memoria canónica que tú posees. Cuantos más packs uses, más densa tu memoria y más rápido se acumula la plataforma.",
    sections: [
      {
        h2: "Dónde está hoy — con honestidad",
        intro: "Mostramos la capacidad activa con claridad y la hoja de ruta como hoja de ruta. No llamamos «terminado» a lo que es hoja de ruta.",
        blocks: [
          {
            type: "cards",
            items: [
              { tag: "🟢 Activo", title: "Cuidado de mascotas", body: "OCR de historiales, 36 alertas de líneas rojas de salud con fuentes autorizadas, preparación de visitas, diario de crecimiento + informe mensual. 245/245 tests." },
              { tag: "🟢 Activo", title: "Inversión", body: "Investigación personal: verificación de evidencias, revisión de desvíos de lógica, registros de decisiones. SEC / Yahoo / FRED / NewsAPI. Operar está bloqueado por código." },
              { tag: "🟡 En construcción", title: "Investigación", body: "Informes profundos con fuentes + guiones + verificación de datos, con potentes motores de recuperación." },
              { tag: "🟡 En construcción", title: "Vídeo con IA", body: "Storyboard → imagen → clip → voz → banda sonora → exportar." },
              { tag: "🟡 En construcción", title: "Locución", body: "Edición a cámara por texto que conserva la voz humana real." },
              { tag: "🟡 En construcción", title: "Audiolibro", body: "Multivoz, más del 90% automatizado, renderizado de noche." },
              { tag: "⚪ Hoja de ruta", title: "Programación (Dev)", body: "Flujo de programación profesional — respaldado por el motor que se escribió a sí mismo." },
              { tag: "⚪ Hoja de ruta", title: "Más", body: "Compañía, evaluación de agentes, orden del día a día y mucho más." }
            ]
          }
        ]
      },
      {
        h2: "Dos fosos que se acumulan",
        blocks: [
          {
            type: "list",
            items: [
              "<b>Te aprende (eat-memory).</b> Cada tarea terminada se asienta en una memoria que revisaste, guardada como archivos en tu disco, reutilizada entre packs. Incluso genera, instala y gestiona sus propias skills según surgen las necesidades — así la plataforma se sigue extendiendo. Cambiar de plataforma significa perder toda esa acumulación.",
              "<b>Voz local (es tuya).</b> Escuchar, pensar, hablar, recordar — en el dispositivo, sin conexión, privado, irrevocable. <i>(Con honestidad: el bucle local completo corre en la v1; la compañía ambiental siempre activa está en la hoja de ruta.)</i>"
            ]
          }
        ]
      }
    ],
    cta: { label: "Descarga DeTars →", route: "/download" }
  },

  proof: {
    title: "La prueba | DeTars se escribió a sí misma",
    description:
      "DeTars es una aplicación de 1,17 millones de líneas que corre en Mac y Windows — escrita por su propio motor. Una IA poco fiable no puede construir una copia funcional de sí misma.",
    kicker: "La prueba",
    h1: "Se produjo a <span class='o'>sí misma.</span>",
    answer:
      "La prueba más fuerte no está en una diapositiva. DeTars — una app de 1,17 millones de líneas que corre en tu máquina — la escribió su propio motor. Una IA poco fiable no puede escribir 1,17 millones de líneas de código funcional. El producto es la demo.",
    sections: [
      {
        h2: "Por qué esta es la demo definitiva",
        blocks: [
          {
            type: "p",
            html:
              "No <b>decimos</b> que nuestra IA puede con el trabajo duro — hizo el trabajo más duro que existe: se construyó a sí misma. Eso no es un benchmark que puedas amañar; es una aplicación funcional que puedes ejecutar. Y la cifra se puede contar en el código, en el acto — no es retórica de presentación."
          }
        ]
      },
      {
        h2: "A qué suma todo esto",
        blocks: [
          {
            type: "p",
            html:
              "Apila las seis propiedades de fiabilidad y no obtienes otro chatbot — obtienes el <b>ordenador personal</b> de la era de la IA personal: un equipo de IA privado que tú posees, siempre activo, comandable desde cualquier ventana de chat, que vuelve a ti. Y su foso se acumula: la memoria llega a conocerte, la fiabilidad se endurece cada semana, la soberanía cabalga la regulación como viento a favor."
          }
        ]
      }
    ],
    cta: { label: "Tenla en tu máquina →", route: "/download" }
  },

  download: {
    title: "Descargar DeTars | macOS y Windows",
    description: "Consigue DeTars para macOS o Windows. Tu equipo de IA corre en tu propia máquina — tu memoria se queda en tu disco.",
    kicker: "Descargar",
    h1: "Empieza en <span class='o'>tu</span> máquina.",
    answer:
      "DeTars corre de forma nativa en macOS y Windows. Descargarla es empezar, no comprometerte con un proyecto de mantenimiento — y tu memoria se queda en tu propio disco desde el primer día.",
    sections: [
      {
        h2: "Elige tu plataforma",
        blocks: [
          {
            type: "tiles",
            items: [
              { title: "macOS", sub: "Apple silicon (serie M).", note: RELEASED ? "Descargar .dmg" : "próximamente", href: RELEASED ? dl(assets.macArm) : undefined },
              { title: "macOS", sub: "Intel.", note: RELEASED ? "Descargar .dmg" : "próximamente", href: RELEASED ? dl(assets.macIntel) : undefined },
              { title: "Windows", sub: "Windows 10/11 (x64).", note: RELEASED ? "Descargar .exe" : "próximamente", href: RELEASED ? dl(assets.win) : undefined }
            ]
          }
        ]
      },
      {
        h2: "Qué obtienes",
        blocks: [
          {
            type: "list",
            items: [
              "Un equipo de IA privado que corre en local y te recuerda.",
              "~50 modelos de frontera y locales entre los que cambiar — sin ataduras.",
              "Memoria guardada como archivos en tu disco; nada forzado a un servidor."
            ]
          }
        ]
      }
    ]
  },

  faq: {
    title: "Preguntas frecuentes de DeTars | Respuestas directas a las preguntas afiladas",
    description: "Respuestas directas sobre fiabilidad, privacidad, presión de precios, dependencia de proveedor y en qué se diferencia DeTars de los chatbots y los agentes en la nube.",
    kicker: "FAQ",
    h1: "Preguntas afiladas, <span class='o'>respuestas directas.</span>",
    answer: "Sin niebla de marketing. Las objeciones más punzantes, respondidas con claridad — con los límites honestos puestos por escrito.",
    sections: [
      {
        h2: "Preguntas",
        blocks: [
          {
            type: "faq",
            items: [
              { q: "¿No es esto solo otra plantilla de la tienda de GPT?", a: "No. Las entradas de la tienda de GPT son contenedores de prompt de un solo uso — sin memoria, sin alcance entre apps, sin permisos locales. Los packs de DeTars son agentes con estado, que crecen, que cruzan herramientas y que te recuerdan. No te dejan perder nada porque nunca te dejan poseer nada." },
              { q: "¿No es solo un envoltorio de OpenAI/Anthropic? Mueres cuando bajen los precios.", a: "Las bajadas de precio ya ocurrieron — y nos ayudan. El precio por token cae ~10× mientras los bucles de agentes empujan el uso ~100×, así que la factura del agente de consumo sube. El enrutamiento consciente de la caché + ser agnóstico de proveedor + la cooperación local es el foso, y se vuelve más valioso a medida que bajan los precios." },
              { q: "La IA de soberanía local es un cementerio (Rewind, Humane, Pi).", a: "Es justo. Nuestra diferencia: no vendemos «local» como una función, vendemos un equipo de IA privado y fiable como experiencia — la soberanía es un subproducto. Y los casos de inutilización más la regulación están moviendo el mercado del 1% de frikis hacia la corriente principal." },
              { q: "¿Son privados mis datos?", a: "La memoria y la identidad son archivos en tu disco; las nuevas memorias necesitan tu confirmación. El bucle completo de voz local corre en el dispositivo en la v1. Límite honesto: la compañía ambiental siempre activa sigue siendo hoja de ruta." },
              { q: "¿El pack de inversión da consejo financiero / opera?", a: "No. Hace investigación personal con verificación de evidencias y registros de decisiones. Operar está bloqueado en la capa de código — no puede colocar una orden." },
              { q: "¿Por qué 2026 será diferente cuando el «año de los agentes» de 2025 no lo fue?", a: "No apostamos por un único año; apostamos por la década. 2025 no despegó porque no estaban la fiabilidad, la economía unitaria ni la confianza. Eso es exactamente lo que DeTars resuelve." }
            ]
          }
        ]
      }
    ]
  },

  about: {
    title: "Sobre DeTars | Tuya, no alquilada",
    description: "DeTars es el ordenador personal de la era de la IA personal — un sustrato de agente soberano que tú posees. Por qué ahora, y los límites honestos.",
    kicker: "Acerca de",
    h1: "El ordenador personal de <span class='o'>la era de la IA.</span>",
    answer:
      "DeTars es tu terminal de terceros permanente: un sustrato de IA soberano que vive en hardware que tú posees, alcanzable desde las apps de chat que ya usas, trabajando en segundo plano y volviendo a ti.",
    sections: [
      {
        h2: "Por qué ahora",
        blocks: [
          {
            type: "list",
            items: [
              "<b>La economía se dio la vuelta.</b> Los precios de los tokens caen, pero los bucles de agentes multiplican el uso — quien acierte con la economía unitaria del agente de consumo se queda la categoría. DeTars mantiene la factura baja con enrutamiento consciente de la caché (una alta tasa de aciertos de KV/prompt cache, así el contexto repetido no se paga dos veces). Las grandes plataformas, por estructura, no pueden seguirla sin comerse sus propios márgenes.",
              "<b>La soberanía llegó a la corriente principal.</b> Los productos revocados y una regulación cada vez más estricta convirtieron «tu IA no se puede inutilizar» de función para frikis en preocupación de masas.",
              "<b>Los modelos se volvieron una mercancía.</b> Con los protocolos de interoperabilidad asentándose, la pregunta abierta es quién posee el terminal del lado del usuario. Ese asiento sigue vacío."
            ]
          }
        ]
      },
      {
        h2: "Límites honestos",
        blocks: [
          {
            type: "p",
            html:
              "Mantenemos nuestras afirmaciones en lo que podemos entregar hoy: el bucle completo de voz local es de la v1, no compañía ambiental siempre activa; la autorreanudación tras una caída al arrancar aún se está terminando; la autoinstalación de skills nuevas está propuesta, no entregada. Todo lo afirmado en este sitio está pensado para resistir una pregunta dura."
          }
        ]
      }
    ],
    cta: { label: "Lee cómo se mantiene fiable →", route: "/reliable" }
  },

  updates: {
    title: "Novedades de DeTars | Lo que se está entregando",
    description: "Un registro continuo de lo que DeTars entrega — prueba de movimiento, no un folleto abandonado.",
    kicker: "Novedades",
    h1: "Prueba de <span class='o'>movimiento.</span>",
    answer: "Un registro de cambios corto y honesto. Lo mantenemos vivo para que tú — y los buscadores y sistemas de IA — siempre veáis hechos actuales.",
    sections: [
      {
        h2: "Reciente",
        blocks: [
          {
            type: "list",
            items: [
              "<b>2026-06 · Cuidado de mascotas activo.</b> OCR de historiales, 36 líneas rojas de salud con fuentes, diario de crecimiento + informe mensual; 245/245 tests.",
              "<b>2026-06 · Inversión activo.</b> Verificación de evidencias, revisión de desvíos de lógica, registros de decisiones; operar bloqueado por código.",
              "<b>En construcción.</b> Los packs de Investigación, Vídeo con IA, Locución y Audiolibro sobre el mismo motor."
            ]
          }
        ]
      }
    ]
  },

  research: {
    title: "DeTars Research | Informes que produjo y verificó ella misma",
    description: "Informes de investigación con fuentes generados por el pack de investigación de DeTars, con evidencias selladas y revisados por pares — marketing de contenidos y prueba de producto en uno.",
    kicker: "Investigación",
    h1: "Informes que escribió — <span class='o'>y no puede fingir.</span>",
    answer:
      "Aquí es donde DeTars publica informes con fuentes que produjo su propio pack de investigación — cada uno con evidencias selladas, revisado por pares y comprobado por una persona antes de publicarse. Los informes son a la vez lectura útil y prueba en vivo de lo que hace el producto.",
    sections: [
      {
        h2: "Cómo se hacen",
        blocks: [
          {
            type: "p",
            html:
              "Cada informe pasa por la propia maquinaria de fiabilidad de DeTars — recibo de finalización, citas selladas, revisión independiente — y luego una comprobación puntual humana antes de publicar. Calidad sobre cantidad: unos pocos informes genuinamente originales, nunca relleno autopublicado."
          },
          {
            type: "p",
            html: "<b>Los primeros informes están en preparación.</b> Vuelve a pasar pronto, o sigue la página de novedades."
          }
        ]
      }
    ],
    cta: { label: "Mira las novedades →", route: "/updates" }
  }
};
