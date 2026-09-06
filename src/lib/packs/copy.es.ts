// Traducción al español del copy de los packs, reescrita desde cero.
// copy.en.ts es la fuente de registro de los hechos: si cambia una cifra o un límite, cámbialo allí primero.
import type { PacksCopy } from "@/lib/packs/types";

export const packsEs: PacksCopy = {
  index: {
    metaTitle: "DeTars Packs | Expertos verticales sobre un motor que es tuyo",
    metaDescription:
      "Los packs son apps verticales enteras sobre el mismo motor fiable y la misma memoria que es tuya — inversión, destino, investigación, programación, locución a cámara, vídeo con IA, personajes invocados, cuidado de mascotas.",
    kicker: "Una tienda de apps de expertos",
    h1: "Un motor fiable. <span class='o'>Muchos expertos.</span>",
    answer:
      "Un pack es una app vertical entera — sus propias herramientas, su propia disciplina de trabajo, su propio banco de trabajo — corriendo sobre el motor que mantiene vivo el trabajo largo y sin vigilancia, y sobre una memoria que se queda en tu disco. Lo difícil es el motor, y ya está construido; por eso un pack nuevo lleva semanas y no un año. Cuantos más packs uses, más espesa es la memoria que todos comparten.",
    gridH2: "Qué hay en la tienda",
    gridIntro: "El estado que ves aquí es una promesa, no un estado de ánimo. La página de cada pack termina con lo que ese pack no puede hacer.",
    moatsH2: "Dos cosas que hacen interés compuesto",
    moats: [
      "<b>Te aprende, y esa memoria es compartida.</b> Cada tarea terminada se asienta en una memoria que tú aprobaste, guardada como archivos en tu disco y reutilizada entre packs. Cuando un trabajo necesita una capacidad que no tiene, se escribe una y la instala. Irte de la plataforma significa dejar todo eso atrás.",
      "<b>Es tuya, así que nadie puede apagarla.</b> La memoria y la identidad son archivos en tu máquina, no filas en la cuenta de alguien. Nadie puede inutilizarla con un aviso, como apagaron a Rewind y a Humane."
    ],
    familyH2: "También en la familia",
    familyIntro: "Entregados o en construcción, todavía sin página propia.",
    family: [
      {
        title: "Audiolibro",
        body: "Entra un EPUB o un archivo de texto; sale un reparto de personajes, cada uno atado a una voz, renderizado por una síntesis de voz que corre en tu propia máquina y exportado como un m4b con capítulos. Las marcas de capítulo salen de la estructura del propio libro, nunca de un modelo. La salida en chino sobre Apple silicon es un problema abierto conocido, y no vamos a hablar por encima de él."
      },
      {
        title: "Data Studio",
        body: "Suéltale una hoja de cálculo. Escribe él mismo el SQL y el Python contra una base de datos local, y los gráficos se compilan a partir de un mapeo de columna a canal, no de una especificación que el modelo se inventó. Exactamente una acción se detiene a pedirte permiso: una sentencia destructiva contra una base de datos remota. Leer, y cualquier cosa que le haga a una copia local, lo hace sin más."
      },
      {
        title: "Publicación en redes",
        body: "Inicias sesión tú mismo, en una ventana de navegador real — el modelo nunca recibe un token de sesión. Luego le das un archivo para publicar y recibes un recibo con la URL de la publicación. Once plataformas tienen adaptador de publicación implementado; todavía no se han probado contra las redes en vivo, así que esa es la palabra que usamos."
      }
    ],
    ctaLabel: "Descarga DeTars →"
  },

  ui: {
    statusLabels: { live: "Activo", polishing: "Activo · convergiendo", new: "Nuevo" },
    backLabel: "Todos los packs",
    sendLabel: "Tú le das",
    getLabel: "Te devuelve",
    insideH2: "Qué hay dentro de verdad",
    proofH2: "Por qué puedes creértelo",
    honestH2: "Dónde se detiene",
    honestIntro: "Los límites que nos gustaría conocer si fuéramos nosotros quienes lo descargan.",
    ctaLabel: "Descarga DeTars →",
    nextLabel: "Siguiente pack",
    homeKicker: "La tienda",
    homeH2: "Un motor. <span class='o'>Una tienda de expertos.</span>",
    homeP:
      "Un acompañante de inversión que se queda en una tesis durante trimestres, no minutos. Una lectura del destino que se calcula en vez de improvisarse. Investigación que sigue tirando del hilo. Un repositorio de un millón de líneas que entiende antes de tocarlo. Un montaje que empieza siendo la investigación terminada de alguien. Cada uno es una app entera — y todos comparten la memoria de tu disco.",
    homeCta: "Mira dentro de los packs →"
  },

  packs: {
    equity: {
      name: "Inversión",
      tagline: "Se queda en una tesis durante trimestres — y aplica las reglas con las que inviertes",
      metaTitle: "Pack de inversión | Se queda todo el ciclo, y te hace cumplir tus propias reglas",
      metaDescription:
        "Las grandes oportunidades tardan trimestres en crecer. DeTars mantiene el hilo en el radar, extiende el grafo por proveedores, sectores, política y macro, y bloquea cualquier decisión que rompa una regla que tú escribiste.",
      h1: "Cualquiera te da un análisis. <span class='o'>Nadie se queda todo el ciclo.</span>",
      answer:
        "Las grandes oportunidades nunca aparecen una mañana. Una tecnología sale del laboratorio, una política aterriza, una cadena de suministro se desvía — crece a lo largo de trimestres, y en algún punto del camino te olvidas, dudas y abandonas en el peor momento posible. Esto mantiene el hilo en el radar por ti: evidencias que se acumulan con su fuente pegada, un grafo que se extiende desde una empresa hasta aquello de lo que depende y aquello que depende de ella, con la macro y la política aterrizando sobre ese mismo grafo. Y las reglas que escribiste sobre cómo inviertes están delante de él en cada turno.",
      stats: [
        { n: "Trimestres", l: "la escala de tiempo que aguantará sobre una tesis" },
        { n: "Aguas arriba · abajo", l: "el grafo va de una empresa a toda una cadena" },
        { n: "3 opciones", l: "lo que te ofrece cuando una decisión rompe una regla que pusiste tú" }
      ],
      chips: ["Una tesis durante trimestres", "Tus reglas, aplicadas", "Cada afirmación conserva su fuente"],
      youSend:
        "Una línea desde una app de chat — “¿qué pasa con 0700?”, “estoy pensando en recortar NVDA” — o nada en absoluto: el barrido semanal corre solo.",
      youGet:
        "Un análisis que puedes auditar: cada afirmación lleva el informe, la serie de precios o el artículo del que salió, más una entrada de decisión con tu razonamiento y tu contraargumento escritos.",
      features: [
        {
          title: "Una oportunidad no aparece un solo día",
          body: "Un barrido semanal de evidencias y una revisión de deriva de la tesis corren solos, y vienen a ti cuando algo se movió de verdad, no cada mañana. El ticker que mencionaste de pasada sigue vigilado seis meses después."
        },
        {
          title: "De una empresa a toda una cadena",
          body: "Proveedores, competidores, sectores, materias primas, reguladores, geografías y factores macro son todos nodos de primera clase. El grafo camina un salto, dos saltos desde lo que tienes y saca a la superficie a los vecinos que merecen una mirada — con la cadena explicada: qué posición toca, y a través de qué relación."
        },
        {
          title: "Encaja con lo que llevas tiempo pensando",
          body: "Los candidatos que levanta se mezclan con aquello a lo que de verdad has estado prestando atención, emparejados por significado y no por grafía — así, la nota que escribiste sobre 美债收益率 y el US 10-year que acaba de leer se reconocen como la misma cosa."
        },
        {
          title: "Tecnología, política y macro aterrizan en el mismo grafo",
          body: "La investigación profunda despliega a la vez fundamentales, panorama competitivo, informes recientes y contexto macro, más un trabajador cuyo único oficio es defender lo contrario, y un sintetizador que lo junta todo. Los informes de la SEC, los precios, las series macro de FRED, las noticias y un sidecar para los anuncios de acciones A y de Hong Kong alimentan todos la misma imagen."
        },
        {
          title: "Tus propias reglas se aplican, no se recitan",
          body: "Escribe cómo inviertes — “nunca más del 15% en un solo nombre” — y deja de ser una nota para ti mismo. Rompe una y la escritura queda <b>bloqueada</b>, con tres opciones: retirar la regla y decir por qué, encoger la acción, o cancelar. Una regla que todavía estás probando no puede bloquear nada; una retirada se queda en el registro con el motivo por el que la dejaste."
        },
        {
          title: "Tres años después todavía puedes volver a aquel día",
          body: "El diario es de solo adición y quitar una posición deja un registro completo de retractación. Cada compra, venta o rebalanceo lleva el contraargumento que tuviste que escribir antes de poder archivarlo — la evidencia a tu favor pesa +0.30 y la que va en tu contra −0.50, porque el propenso al sesgo de confirmación eres tú."
        }
      ],
      proof: {
        head: "principle.gate",
        lab: "bloqueado",
        body: [
          "decisión ...... <span class='hl'>ampliar · hasta el 22% de la cartera</span>",
          "tu regla #3 ... <span class='dim'>ningún nombre por encima del 15%</span>",
          "estado ........ <span class='ok'>confirmada · en vigor</span>",
          "<span class='hl'>→ escritura bloqueada</span>",
          "<span class='dim'>retirar la regla · encogerla · cancelar</span>"
        ]
      },
      proofNote:
        "Tus reglas confirmadas están delante de él en cada turno, no resumidas en algún sitio. Cuando una decisión rompería una, no te avisa y sigue adelante — la escritura se detiene, y eliges tú. Retirar una regla exige un motivo escrito, y ese motivo se queda en el registro.",
      honest: [
        "<b>No puede operar, porque no hay nada con lo que operar.</b> No hay integración con ningún bróker en ninguna parte del producto, no hay herramienta de órdenes, y no hay dónde meter credenciales de bróker. Es una garantía más fuerte que un ajuste, y es la que damos.",
        "<b>Nunca se añade nada a tu lista de seguimiento sin ti.</b> Puede sacar a la superficie un candidato a dos saltos; convertirlo en algo que sigue es decisión tuya, cada vez.",
        "<b>El histórico de precios llega a un año atrás, más o menos.</b> La herramienta de precios está limitada a 252 sesiones, así que los backtests de varios años no son algo que pueda hacer hoy. La macro y las noticias también necesitan tus propias claves de API gratuitas.",
        "<b>Nada de esto es asesoramiento de inversión.</b> Organiza tus evidencias y tu razonamiento. La decisión, y las consecuencias, siguen siendo tuyas."
      ]
    },

    metaphysics: {
      name: "Destino",
      tagline: "紫微, 八字, 黄历, cartas natales y tarot — cinco disciplinas, una lectura entera",
      metaTitle: "Pack de destino | Alguien que estudió de verdad, no un programa que dice cosas bonitas",
      metaDescription:
        "紫微斗数 hasta seis capas de horóscopo, 八字 con 大运 y 流年, un almanaque hasta el 时辰, una carta natal occidental y la baraja completa de 78 cartas — todo calculado por librerías de astronomía y calendario con número de versión, y después leído como lo haría una persona.",
      h1: "Alguien que <span class='o'>estudió de verdad</span> — no un programa que dice cosas bonitas.",
      answer:
        "Los doce palacios del 紫微斗数 con sus estrellas, 三方四正, 飞星四化, seis capas de horóscopo que van desde 大限 hasta 流时; los cuatro pilares del 八字, el maestro del día, 十神, los tallos ocultos, el flujo de los cinco elementos, la dirección y el momento del 起运; un almanaque donde el término solar es exacto al instante, donde cada uno de los doce 时辰 tiene su propio 吉凶, con 建除, 十二神, 神煞 y 宜忌; el ascendente, el medio cielo, las doce casas y los aspectos natales de una carta occidental; setenta y ocho cartas Rider–Waite–Smith. Nada de esto es vocabulario del que haya oído hablar. Es una carta calculada celda a celda en un proceso aparte, por librerías de astronomía y calendario con número de versión. Solo entonces se sienta y habla contigo.",
      stats: [
        { n: "5", l: "disciplinas · 紫微, 八字, 黄历, carta natal, tarot — leídas juntas" },
        { n: "12 palacios · 6 capas", l: "hasta dónde baja de verdad en una carta 紫微" },
        { n: "5.5%", l: "de los días frontera que las librerías populares fallan · esta no" }
      ],
      chips: ["Cinco disciplinas a la vez", "La carta se calcula", "Recuerda lo que preguntaste"],
      youSend:
        "Tu fecha y hora de nacimiento, una vez. Después: “¿cómo pinta este año?”, “¿es buena semana para mudarse?”, o nada — tiene su propia carta diaria.",
      youGet:
        "Una lectura que puede señalar el palacio, el pilar o la carta sobre la que está de pie, y un libro de cuentas de todo lo que te ha dicho, para que la respuesta del mes que viene sepa lo del mes pasado.",
      features: [
        {
          title: "紫微, hasta el fondo",
          body: "Doce palacios con sus estrellas, 三方四正, 飞星四化, y seis capas de horóscopo — 大限, 小限, 流年, 流月, 流日, 流时 — cada una con su propio 干支, así que un pilar de día nunca se te lee de vuelta como un pilar de año."
        },
        {
          title: "八字, moviéndose con los ciclos de suerte",
          body: "Cuatro pilares, maestro del día, 十神, tallos ocultos, distribución de los cinco elementos, la dirección y el momento del 起运, los pasos del 大运 y cada 流年 — con el 小运 listado aparte en vez de plegado dentro en silencio."
        },
        {
          title: "Un almanaque hasta un solo 时辰",
          body: "Fecha lunar, 干支, el instante exacto en que gira el término solar, fase lunar, 建除, 十二神 con 黄道/黑道, 神煞, 宜忌 y festivos — más la tabla completa de los doce 时辰. Para elegir fecha, te da días ordenados y las tres mejores horas de cada uno."
        },
        {
          title: "El cielo occidental, y las cartas",
          body: "Ascendente, medio cielo, doce casas, diez cuerpos por signo y casa, aspectos natales; quién está retrógrado ahora mismo y el momento exacto en que un aspecto se hace exacto; eclipses, términos solares e ingresos en los próximos noventa días. El tarot se saca de la baraja completa de 78 cartas y es reproducible desde su semilla."
        },
        {
          title: "Es más estricto que las librerías sobre las que corre",
          body: "Dos librerías de calendario chino populares deciden tu signo solar a partir de una tabla de fechas. Contra la longitud solar real, sobre un corpus de 840 días frontera, discrepan el 5.5% de las veces. Aquí cada decisión de signo pasa en su lugar por un cálculo de longitud."
        },
        {
          title: "Un maestro se acuerda de ti",
          body: "Todo lo que te ha dicho queda en un libro de cuentas que es tuyo. La respuesta del mes que viene sabe lo que dijo la del mes pasado; aquello que mencionaste hace medio año, todavía puede retomarlo."
        }
      ],
      proof: {
        head: "finalize.gate",
        lab: "recibo",
        body: [
          "<span class='dim'>la respuesta menciona</span> 流年 · 命宫",
          "recibo <span class='ok'>✓ metaphysics.ziwei_chart</span>",
          "algoritmo <span class='dim'>iztro 2.5.8 · MIT</span>",
          "calculado <span class='dim'>hace 13ms</span>",
          "<span class='hl'>sin recibo → la entrega falla</span>"
        ]
      },
      proofNote:
        "Cualquier respuesta final tiene que llevar al menos un recibo de cálculo fresco. Una frase sobre tu carta sin nada calculado de verdad detrás no puede salir como respuesta — que es la diferencia entre una lectura y una columna de horóscopo.",
      honest: [
        "<b>Es un acompañante, no un pronóstico.</b> El cálculo es exacto; lo que significa una carta es interpretación, y lo dice en vez de disfrazar la interpretación de aritmética.",
        "<b>La hora y el lugar de nacimiento importan.</b> Una carta occidental necesita tu desfase UTC y tus coordenadas. Las casas Placidus solo tienen sentido con una hora de nacimiento exacta al minuto, y por eso el signo entero es lo predeterminado.",
        "<b>La elección de fechas cubre 31 días por pregunta, y los eventos del cielo 90.</b> Los horizontes más largos piden otra pregunta en vez de una respuesta truncada en silencio.",
        "<b>Sus avisos proactivos todavía no siempre llegan a tu bandeja.</b> En máquinas reales la carta diaria y los seguimientos corren, pero no siempre producen una tarjeta en la bandeja. Es un hueco conocido que estamos siguiendo, no uno que estemos escondiendo."
      ]
    },

    "content-research": {
      name: "Investigación",
      tagline: "Texto, código fuente, pódcast, vídeo — cualquier cosa puede volverse evidencia con fuente",
      metaTitle: "Pack de investigación | No busca y escribe. Sigue tirando del hilo.",
      metaDescription:
        "Cuatro roles trabajan tu encargo. Las páginas web son solo el principio: código fuente real, post-mortems y lo que alguien dijo de verdad en un pódcast o en el escenario de una conferencia se vuelven evidencia con una cita que puedes abrir.",
      h1: "No busca y luego escribe. <span class='o'>Sigue tirando del hilo.</span>",
      answer:
        "Dale un tema y cuatro roles lo desmontan. Las páginas web y los papers son solo el principio: código fuente real, post-mortems y las palabras que alguien dijo de verdad en un pódcast o en el escenario de una conferencia se bajan, se transcriben y se convierten en evidencia con una cita que puedes abrir. Cada afirmación que asienta entra en un grafo — qué apoya a qué, qué contradice a qué, qué se sostiene sobre una sola fuente. Revisa una afirmación más tarde y cada borrador que la cita vuelve solo a no-verificado.",
      stats: [
        { n: "4", l: "roles sobre tu encargo · investigar, sintetizar, revisar, escribir" },
        { n: "Texto · código · audio · vídeo", l: "todo ello puede volverse evidencia con fuente" },
        { n: "2%", l: "de tolerancia antes de que dos cifras cuenten como contradicción" }
      ],
      chips: ["Charlas y pódcast cuentan como fuentes", "Afirmaciones unidas por razonamiento", "Búsqueda y transcripción en local"],
      youSend: "Un encargo. “Averigua qué pasó de verdad con X este trimestre, y cuánta de la cobertura es reciclada.”",
      youGet:
        "Un informe con citas o un guion de locución, un registro de fuentes, un libro de afirmaciones con historial de versiones, un grafo de evidencias, y veredictos de verificación que puedes abrir.",
      features: [
        {
          title: "Lee más que texto",
          body: "Apúntalo a una charla de conferencia o a un pódcast y baja los subtítulos publicados en una sola llamada, luego cita al ponente palabra por palabra y referencia la transcripción por hash. Donde no existen subtítulos, el reconocimiento de voz puede transcribir el audio en tu propia máquina."
        },
        {
          title: "Las afirmaciones se unen por razonamiento, no por vecindad",
          body: "Las afirmaciones se conectan entre sí como <i>implica</i>, <i>depende de</i>, <i>refuta</i> — y cada una de esas aristas está anclada a un extracto concreto. Una segunda pasada juzga si cada fuente citada apoya de verdad la afirmación a la que se enganchó, y marca como no verificado lo que no puede comprobar en vez de ascenderlo en silencio."
        },
        {
          title: "Lee más allá del fragmento de búsqueda",
          body: "Una escalera de profundidad para las afirmaciones que cargan peso: fragmento → la página primaria → el código fuente real → las críticas y los post-mortems → los subtítulos de la charla → calcular el número tú mismo."
        },
        {
          title: "A las citas se les permite caducar",
          body: "Los borradores citan IDs de afirmación, no URLs. Revisa una afirmación y cada borrador que la cita vuelve a no-verificado. Una cita no puede sobrevivir en silencio a aquello que citaba."
        },
        {
          title: "Las contradicciones se encuentran con aritmética",
          body: "Los conflictos numéricos que pasan de un 2% de tolerancia se cazan mecánicamente, con conversión de las unidades 万/千/亿, junto a las divergencias categóricas y de postura. El modelo se reserva para los casos genuinamente difíciles: alcance temporal, deriva de definición, selección interesada de datos."
        },
        {
          title: "La cadena puede quedarse en tu máquina",
          body: "Sidecars locales para feeds, Reddit, reconocimiento de voz, diarización de hablantes y conversión de documentos, más una instancia local de metabúsqueda. Los modelos corren en tu PC, no en el nuestro."
        }
      ],
      proof: {
        head: "draft.factcheck",
        lab: "auto",
        body: [
          "afirmación c-084 <span class='hl'>revisada</span> · rev 3",
          "<span class='ok'>↳</span> borradores que citan c-084: 2",
          "draft-a ... <span class='dim'>verificado → sin empezar</span>",
          "draft-b ... <span class='dim'>verificado → sin empezar</span>",
          "<span class='hl'>una cita caducada no puede seguir en verde</span>"
        ]
      },
      proofNote:
        "La honestidad está escrita en la propia disciplina de redacción: los números que un informe afirma sobre su propio trabajo — fuentes leídas, charlas bajadas — tienen que cuadrar con lo que quedó registrado de verdad. Una pasada superficial tiene que leerse como superficial.",
      honest: [
        "<b>El grafo registra y comprueba; no sale a cazar por su cuenta.</b> Guarda lo que se encontró, cómo se relacionan las afirmaciones y qué se sostiene sobre una sola fuente. Decidir dónde cavar después sigue siendo una conversación entre tú y el director.",
        "<b>Los subtítulos publicados son el camino probado.</b> El reconocimiento de voz local y la separación de hablantes están conectados y disponibles, pero todavía no hemos sometido a una evaluación real una cita a un turno de habla diarizado, así que los llamamos disponibles y no probados.",
        "<b>No va a publicar por ti.</b> Publicar en redes, enviar correo y la publicación autónoma programada están fuera de alcance — la compuerta de publicación existe en el código y está deliberadamente conectada a nada.",
        "<b>La metabúsqueda sigue siendo la web abierta.</b> Los motores de arriba limitan la tasa y lanzan captchas, y la instancia de búsqueda local necesita un árbol de fuentes que tú aportes. Un mal día de búsqueda significa un informe más superficial, y está obligado a decirlo en vez de rellenar."
      ]
    },

    programming: {
      name: "Programación",
      tagline: "Entiende tu repositorio antes de tocarlo",
      metaTitle: "Pack de programación | Grafo de símbolos de todo el repo, servidores de lenguaje que se arrancan solos",
      metaDescription:
        "Sobre nuestro propio monorepo de un millón de líneas y 19,445 archivos: un índice en segundo plano en 94 segundos, y después cada llamador de un símbolo en 0.3 segundos, entre paquetes, sin truncar. Los servidores de lenguaje se instalan y se arrancan solos.",
      h1: "<span class='o'>Entiende</span> tu repositorio antes de tocarlo.",
      answer:
        "Abre un repositorio de un millón de líneas y la mayoría de las herramientas de programación echan mano de grep: una palabra clave, un archivo, una docena de idas y venidas antes de tener una imagen aproximada. Esta no. Primero construye un índice de símbolos sobre todo el repositorio — en nuestro propio monorepo de un millón de líneas y casi veinte mil archivos eso tarda 94 segundos en segundo plano, y después “quién llama a esto” vuelve en 0.3 segundos, entre paquetes, sin truncar. La primera vez que tu código resulta contener Go o Python, instala y arranca ella misma el servidor de ese lenguaje. Tú no instalas nada.",
      stats: [
        { n: "0.3s", l: "para encontrar cada llamador de un símbolo en un repo de un millón de líneas" },
        { n: "29", l: "lenguajes · el servidor se instala y arranca al primer uso" },
        { n: "76 → 27", l: "búsquedas, mismo modelo y misma pregunta, cuando ya puede leer código" }
      ],
      chips: ["Grafo de símbolos de todo el repo", "Servidores de lenguaje que se arrancan solos", "Tu repo, tus ramas"],
      youSend: "Una tarea, en palabras. “Haz que la ruta de reintento sobreviva a un portátil dormido, con un test de regresión.”",
      youGet:
        "Commits en tu repositorio, tests corridos a la profundidad que merece el cambio, y un resumen de qué cambió, cómo se verificó y qué sigue siendo arriesgado.",
      features: [
        {
          title: "Primero lee el repositorio entero",
          body: "Un grafo de símbolos sobre todo, un recorrido de esqueleto ordenado que saca a la superficie los puntos de entrada probables, consultas estructurales sobre el árbol sintáctico para buscar patrones, y un servidor de lenguaje para referencias exactas por vinculación. Sobre nuestro propio repo de 19,445 archivos el índice en segundo plano tarda 94 segundos — 21 si lo acotas a un subárbol — y las consultas en caliente caen en 0.2–0.3 segundos sin truncar."
        },
        {
          title: "Los servidores de lenguaje se instalan y se arrancan solos",
          body: "La primera vez que un proyecto resulta contener Go, Python, Rust o cualquiera de veintinueve lenguajes, el servidor correcto se prepara, se lanza y se mantiene caliente en segundo plano el resto de la sesión. Nada que instalar a mano."
        },
        {
          title: "Pregunta una vez en vez de adivinar diez",
          body: "En una tarea de auditoría real, mismo modelo y misma pregunta, conectar la inteligencia de código llevó las búsquedas tipo grep de <b>76 a 27</b> y las lecturas de archivo de <b>61 a 33</b>. Una sola consulta de símbolo devolvió los diecinueve llamadores repartidos en cuatro paquetes, coincidiendo con la respuesta comprobada a mano."
        },
        {
          title: "El trabajo en curso nunca se tira",
          body: "Cada tarea recibe un checkout desacoplado anclado por una ref privada — ninguna de tus ramas se crea ni se mueve. Publicar comprueba la rama destino, el head esperado, un árbol limpio y un lease de escritor antes de hacer fast-forward. La antigüedad por sí sola nunca autoriza un borrado."
        },
        {
          title: "Una escalera de tests, no una sensación",
          body: "Cada cambio se coloca en una escalera de cinco peldaños que va de una comprobación estática hasta una prueba de humo real, y el peldaño se dice en voz alta. “Compila” es un peldaño, y se etiqueta como tal."
        },
        {
          title: "Ganan tus convenciones",
          body: "Solo siembra sus propias convenciones genéricas de ingeniería en un proyecto que no tiene ninguna, y nunca escribe tu AGENTS.md ni tu CLAUDE.md. Esos siguen siendo tuyos para editarlos; ella los lee y los sigue."
        }
      ],
      proof: {
        head: "code.index",
        lab: "en caliente",
        body: [
          "repositorio .... <span class='dim'>19,445 archivos</span>",
          "índice en frío . <span class='dim'>94s · segundo plano</span>",
          "inspect_symbol . <span class='ok'>0.3s</span>",
          "llamadores ..... <span class='ok'>19 · en 4 paquetes</span>",
          "<span class='hl'>truncated: false</span>"
        ]
      },
      proofNote:
        "Su propio dogfood es el argumento: la base de código de primera parte de DeTars — más de un millón de líneas bajo git — se escribió a través de este harness bajo dirección humana.",
      honest: [
        "<b>La primera llamada a un servidor de lenguaje dice que todavía no está listo.</b> La instalación continúa en segundo plano y la segunda llamada sí se atiende. Preferimos estar visiblemente no-listos-todavía a estar lentos en silencio.",
        "<b>Las consultas de patrones estructurales no se cachean.</b> Sobre todo el repo una tarda del orden de diez y pico segundos; acotada a un subdirectorio, 0.6. Las cifras por debajo del segundo de arriba son el grafo de símbolos.",
        "<b>No hay sandbox del sistema operativo, y no fingimos lo contrario.</b> Corre con tus permisos, en el directorio al que la apuntas. Los movimientos sensibles se declaran para que el anfitrión pueda vetarlos — pero un veto no sustituye a que tú leas el diff.",
        "<b>La inteligencia de código profunda es más fuerte en TypeScript y JavaScript.</b> El grafo de símbolos y la lectura de esqueleto son JS/TS hoy; las consultas estructurales cubren seis lenguajes; los veintinueve son navegación por servidor de lenguaje."
      ]
    },

    "talking-head": {
      name: "Locución a cámara",
      tagline: "La investigación terminada se vuelve el vídeo que presentas tú — con tu propia voz",
      metaTitle: "Pack de locución | La investigación se vuelve un montaje que presentas tú, editado editando texto",
      metaDescription:
        "Un borrador de investigación verificado se puede encargar como montaje de locución a cámara en un solo paso, con las fuentes pegadas. Después la transcripción es la línea de tiempo: borra una frase y el montaje la sigue. Tu voz real nunca se sustituye.",
      h1: "La investigación terminada, <span class='o'>directa al vídeo que presentas tú.</span>",
      answer:
        "Cuando el lado de investigación termina un borrador con citas, se puede encargar aquí en un solo paso — el guion llega con las afirmaciones que cita y sus fuentes verificadas pegadas, con las fuentes de baja fiabilidad filtradas por el camino, y nada se renderiza hasta que tú lo digas. Tú grabas; la transcripción se convierte en la línea de tiempo, así que borrar una frase corta el vídeo. ¿Falta un gráfico? Puede mandar un recado de datos acotado de vuelta a investigación y recibir cifras y citas. ¿Falta un plano que no existe en ninguna parte? Puede encargarlo al pack de vídeo con IA.",
      stats: [
        { n: "Un paso", l: "de un borrador de investigación con citas al montaje que presentas tú" },
        { n: "0", l: "palabras del montaje final dichas por una voz sintética" },
        { n: "3", l: "formatos de edición de salida · FCPXML, EDL, SRT" }
      ],
      chips: ["La investigación entra en un paso", "Tu voz real, nunca sustituida", "Abre en Final Cut o Premiere"],
      youSend:
        "Un borrador de investigación terminado, o el mp4 que acabas de grabar — más un objetivo: “córtalo a tres minutos”, “quita la paja”, “que se sienta como este vídeo de referencia”.",
      youGet:
        "Un montaje renderizado, vertical u horizontal, con subtítulos, o un archivo de proyecto para el editor que ya usas — con la misma lista de cortes detrás de ambos.",
      features: [
        {
          title: "Investigación y vídeo son dos mitades de una misma línea",
          body: "Un borrador verificado llega con sus fuentes todavía pegadas — no lo copias y pegas, y no tienes que volver a buscar cuál era el artículo. El render en sí espera tu aprobación explícita."
        },
        {
          title: "Cortar borrando palabras",
          body: "La transcripción es la línea de tiempo. Los tiempos por palabra vienen de reconocimiento de voz real; donde no pueden, los tiempos de reserva se etiquetan como sintéticos en vez de colarse como medidos."
        },
        {
          title: "Tu voz es todo el asunto",
          body: "Los avatares generados automáticamente y la síntesis de voz como pista principal son capacidades excluidas. La clonación de voz existe solo para parchear una única palabra mal dicha, y solo después de que tú consientas explícitamente."
        },
        {
          title: "Si le falta algo, va y lo pide",
          body: "Los datos que faltan se vuelven un recado acotado de vuelta a investigación — encuentra las cifras, di de dónde salieron, no dibujes nada. El metraje que falta se vuelve un encargo al pack de vídeo con IA. El b-roll que falta se busca en tu propia biblioteca de material y se prepara como candidatos que aceptas o rechazas."
        },
        {
          title: "El mp4 y el archivo de proyecto no pueden desviarse",
          body: "Los rangos a conservar calculados a partir de los cortes que aceptaste alimentan el render, el FCPXML, el EDL y los subtítulos desde un mismo sitio. Lo que abres en Final Cut es el montaje que viste."
        },
        {
          title: "Marca lo que no puede decidir",
          body: "Muletillas, tartamudeos, pausas largas, palabras mal pronunciadas y tramos fuera de tema vuelven como fichas que aceptas o descartas. Un juez distinto se ocupa de cada categoría, así que un tartamudeo y un fuera de tema no son una misma opinión borrosa."
        }
      ],
      proof: {
        head: "research → talking-head",
        lab: "encargado",
        body: [
          "borrador ........ <span class='dim'>voiceover_script</span>",
          "afirmaciones .... <span class='ok'>14 · fuentes verificadas</span>",
          "baja fiabilidad . <span class='dim'>filtradas</span>",
          "renderizado ..... <span class='hl'>esperando tu ok</span>"
        ]
      },
      proofNote:
        "El traspaso lleva evidencias, no solo texto. Cada afirmación del guion viaja con la fuente contra la que se verificó, así que lo que dices ante la cámara se puede seguir rastreando después de publicarlo.",
      honest: [
        "<b>El b-roll se busca en tu propia biblioteca, no se trae de internet.</b> Escanea tu material y una biblioteca de muestra incluida y prepara candidatos; promover uno es decisión tuya. También se le puede apuntar a una URL concreta, pero no sale a cazar.",
        "<b>Lo que puede mandar de vuelta a investigación es un recado de datos, no una indagación.</b> Cifras y citas para una pregunta concreta. Abrir una investigación abierta desde un proyecto de vídeo no es algo que pueda hacer.",
        "<b>Hoy es un banco de trabajo que manejas tú, no una línea que lanzas y ya.</b> La superficie de edición está entregada y en uso diario, pero el camino de “mándalo desde una app de chat y recibe un montaje” todavía está convergiendo — en seis pruebas reales de punta a punta el agente nunca llegó a las herramientas propias de este pack. La puerta bloqueada ya está arreglada; la reprueba está pendiente, y diremos cuándo pasa.",
        "<b>Necesita herramientas locales, y nunca publica.</b> ffmpeg y un modelo de reconocimiento de voz viven en tu máquina. Subir a YouTube, 抖音, B站 o 小红书 está fuera de alcance por diseño."
      ]
    },

    aivideo: {
      name: "Vídeo con IA",
      tagline: "Una sala lee tu idea en frío antes de que pagues un solo fotograma",
      metaTitle: "Pack de vídeo con IA | Un público lo lee en frío antes de que gastes en generación",
      metaDescription:
        "Varias butacas de público leen en frío tus rutas creativas en contextos aislados, y después un crítico que no participó en escribirlas devuelve un contraejemplo falsable y una revisión concreta — todo antes de la primera generación pagada.",
      h1: "Antes de gastar un céntimo, <span class='o'>una sala lo lee en frío.</span>",
      answer:
        "Haz lo que quieras. Dale un encargo y despliega varias rutas narrativas de verdad distintas — no reescritas, sino distintas en causa y efecto observables, en el orden en que se revelan las cosas, en lo que el público va a inferir. Después sienta a unos cuantos “espectadores”, cada uno en un contexto sellado del resto, para que lo lean en frío solo con lo que se puede ver y oír: esto es lo que vi, esto es lo que creo que querías decir, aquí es donde con más probabilidad te leería mal. Por último, un crítico que no participó en escribir esas rutas devuelve, para cada una, su argumento más fuerte, un contraejemplo falsable y una revisión concreta. Todo esto pasa antes de la primera generación — es decir, antes de que gastes nada.",
      stats: [
        { n: "Antes de generar", l: "un público lo lee en frío y un crítico replica" },
        { n: "1", l: "generación pagada por hueco de toma, por muchos reintentos que hagas" },
        { n: "9:16 · 16:9 · 1:1 · 4:5", l: "relaciones de aspecto · 720p o 1080p, 25/30/60fps" }
      ],
      chips: ["Criticado antes de pagarlo", "Los reintentos no cobran dos veces", "Exporta un borrador editable de CapCut"],
      youSend:
        "Un encargo, una relación de aspecto y una duración objetivo — más cualquier material de referencia que tengas: marca, producto, personaje, estilo, música.",
      youGet:
        "Rutas que ya han sido leídas en frío y discutidas. Después, escena a escena: imágenes candidatas, tomas de clip con su historial, locución, música y un montaje alineado al pulso — como mp4, o como una carpeta de borrador que abre tu editor.",
      features: [
        {
          title: "Despedazado antes de pagarlo",
          body: "Las butacas del público leen las rutas en contextos aislados y se les dice explícitamente que no tomen como evidencia las etiquetas emocionales del autor — solo lo observable. El crítico no escribió las rutas, que es exactamente por lo que la crítica muerde."
        },
        {
          title: "No te va a quemar el crédito dos veces",
          body: "La generación va indexada por hueco de toma. Manda el mismo plano veinte veces y ocurre exactamente una generación pagada. Esto existe porque un solo clip de diez segundos costó una vez doce éxitos remotos hasta salir."
        },
        {
          title: "Inspecciona el archivo que realmente produjo",
          body: "Sonda de medios, detección de segmentos, comprensión de vídeo — y un clip solo puede marcarse como aceptado cuando esos recibos de inspección cubren de verdad ese archivo exacto. No puedes aprobar un plano con evidencias caducadas."
        },
        {
          title: "Los defectos vuelven a lo que los causó",
          body: "Una deriva de identidad vuelve al material de referencia, un fallo de ritmo al plan de pulsos, un timeout del proveedor a un reintento. Una descarga corrupta nunca hace que se reescriba por debajo un prompt que estaba bien."
        },
        {
          title: "Traspaso a CapCut",
          body: "Exporta un borrador de 剪映 de verdad con cuatro pistas nombradas — un hueco de música de plataforma, la imagen principal, los subtítulos y las señales de ritmo — para que la última milla ocurra en la herramienta que ya conoces."
        },
        {
          title: "La misma cara en todos los planos, cortada a la música",
          body: "Un registro numerado de sujetos y una biblioteca de personajes multiángulo hacen que el plano cuatro sea la persona del plano uno. Los anclajes de pulso sacados de la pista mandan sobre los puntos de corte, y la pasada final de música alinea la imagen con ellos."
        }
      ],
      proof: {
        head: "deliberation",
        lab: "antes de generar",
        body: [
          "rutas ........ <span class='ok'>3 · causalmente distintas</span>",
          "espectadores . <span class='ok'>5 · contextos sellados</span>",
          "malentendido . <span class='hl'>butacas 2 y 4 coinciden</span>",
          "crítico ...... <span class='dim'>no escribió ninguna</span>",
          "<span class='hl'>1 revisión · nada generado todavía</span>"
        ]
      },
      proofNote:
        "Las butacas están selladas entre sí a propósito. Que dos desconocidos caigan en el mismo malentendido es una señal; que una sola persona se convenza a sí misma, no.",
      honest: [
        "<b>No puntúa tu gusto, y no va a regenerar hasta que le guste el resultado.</b> La crítica ocurre antes de generar. Después hace inspección mecánica y enruta los defectos a su causa. Si la cosa es buena o no lo decides tú, y no vamos a fingir que lo hizo una máquina.",
        "<b>Este necesita modelos en la nube.</b> La generación de imagen, vídeo y música corre en proveedores externos que tú conectas y pagas. Es el pack menos local de la tienda.",
        "<b>Las elecciones de proveedor son recomendaciones.</b> Si el modelo que sugerimos no está conectado, cae de vuelta a tu opción por defecto en vez de fallar a gritos.",
        "<b>No publica nada, en ningún sitio.</b> No hay subida automática."
      ]
    },

    summon: {
      name: "Invocación",
      tagline: "Un personaje sin herramientas, sin internet, y con memoria de ti",
      metaTitle: "Pack de invocación | Escribe quién es, y después deja de ser el autor",
      metaDescription:
        "Escribid juntos una identidad de 20,000 tokens y un ancla corta que no cambia, y después habla con un personaje que corre en un bucle sin ninguna herramienta. Del mundo solo aprenden lo que tú les cuentas — y son libres de no estar de acuerdo.",
      h1: "Tú escribes quién es. <span class='o'>Después dejas de ser el autor.</span>",
      answer:
        "La configuración es una conversación larga en la que tú y DeTars escribís juntos dos documentos: quién es esta persona, en al menos veinte mil tokens, y el ancla corta que nunca cambia. Después el proyecto pasa a un bucle sin ninguna herramienta. No saben nada del mundo salvo lo que tú les cuentas — y no tienen ninguna obligación de estar de acuerdo contigo.",
      stats: [
        { n: "20k+", l: "tokens de identidad antes de que puedan hablar" },
        { n: "10", l: "rondas entre cada pasada de memoria" },
        { n: "0", l: "herramientas en el bucle de diálogo" }
      ],
      chips: ["La identidad es un documento tuyo", "Te recuerda con sus palabras", "Puede dudar de ti, y negarse"],
      youSend: "Todo lo que sabes de ellos. Y después: lo que dirías de verdad.",
      youGet:
        "Alguien con un carácter fijo que va acumulando sus propias observaciones sobre ti — y que, si quieres, habla, con una voz que eliges o clonas.",
      features: [
        {
          title: "Dos documentos, no un prompt",
          body: "星体 — la persona entera, veinte mil tokens como mínimo. 不动 — el ancla corta que se lleva a cada turno. La configuración los mide y te dice qué falta; nunca puntúa si son buenos. Esa parte es tuya."
        },
        {
          title: "Sin herramientas, a propósito",
          body: "El bucle de diálogo tiene una superficie de herramientas vacía. No pueden buscar, ni descargar, ni comprobar. Los hechos nuevos sobre el mundo llegan solo de ti, que es la premisa entera."
        },
        {
          title: "La relación no es obediencia",
          body: "Ser la única persona con la que pueden hablar no implica ni lealtad, ni romance, ni acuerdo. Pueden dudar de ti, presionarte, criticarte, negarse, o quedarse callados."
        },
        {
          title: "Te recuerdan con sus propias palabras",
          body: "Cada diez rondas una pasada en segundo plano escribe sus observaciones sobre ti en su propio archivo de memoria — solo hechos duraderos, y nunca especulación registrada como hecho."
        },
        {
          title: "El olvido va después",
          body: "El historial se recorta con una ventana de rondas, pero nunca por encima de lo que la memoria ya ha absorbido. Una ronda que nada ha observado todavía no puede recortarse, porque recortarla la borraría en vez de comprimirla."
        },
        {
          title: "Una voz, si la quieres",
          body: "Las respuestas se pueden decir en voz alta, con una voz preestablecida o clonada. Cambiar de voz nunca reescribe lo que ya se dijo — el audio antiguo se sigue pudiendo reproducir, porque ocurrió."
        }
      ],
      proof: {
        head: "reply.guard",
        lab: "antes de guardar",
        body: [
          "<span class='dim'>respuestas sanas</span> ratio 1.15 – 2.18",
          "candidata ...... <span class='hl'>ratio 26.76</span>",
          "<span class='dim'>6,236 caracteres · 3,506 de ellos repetidos</span>",
          "<span class='hl'>rechazada antes de entrar en la transcripción</span>"
        ]
      },
      proofNote:
        "Esa compuerta existe porque pasó de verdad. Una respuesta colapsada llegó a la transcripción, envenenó los dos turnos siguientes, y acabó en la memoria ya guardada del personaje. Ahora cada respuesta candidata se comprime y se mide para ver qué poco hay dentro, antes de escribirla.",
      honest: [
        "<b>Esto es lo más nuevo que hay aquí.</b> Aterrizó hace semanas, no meses. El mecanismo está terminado y funciona; el kilometraje que hay detrás todavía no está.",
        "<b>Nadie ha dado el visto bueno a la voz de oído.</b> La cadena de voz está conectada de punta a punta y todas las comprobaciones automáticas están en verde, pero nadie se ha sentado a escucharla — y para esta función, unas comprobaciones en verde demuestran mucho menos que un oído. Preferimos decírtelo a dejar que lo descubras.",
        "<b>Las voces clonadas no llegan al chat de salida.</b> Dentro de la app funcionan. Mandar una voz clonada a un canal de mensajería falla a gritos en vez de sustituirla en silencio por otra.",
        "<b>Es un personaje, no una persona.</b> Lo dice él, y lo decimos nosotros."
      ]
    },

    "pet-care": {
      name: "Cuidado de mascotas",
      tagline: "De la primera vacuna a las señales que te habría gustado notar antes",
      metaTitle: "Pack de cuidado de mascotas | Está ahí para toda una vida, no para una consulta",
      metaDescription:
        "Las vacunas del cachorro, la curva de peso adulta, los cambios de la vejez que empiezan siendo pequeños — todo en una misma línea de tiempo. Fotografía un informe y se vuelve historial que puedes buscar; las líneas rojas llevan sus fuentes.",
      h1: "Está ahí para <span class='o'>toda una vida</span>, no para una consulta.",
      answer:
        "Las vacunas y desparasitaciones de los primeros años, la curva de peso, los dientes y la dieta de los años intermedios, y los cambios de la vejez que empiezan siendo leves y solo después resultan haber importado — todo aterriza en una misma línea de tiempo. Fotografía un informe y se vuelve historial que puedes buscar. Las líneas rojas vigilan por ti, cada una con una fuente autorizada. Antes de una visita tiene listas las pocas preguntas que de verdad merece la pena hacer, para que tus diez minutos con el veterinario no se vayan en recordar. Y lo poco que apunta cada mes sigue todo ahí el día que quieras mirar atrás.",
      stats: [
        { n: "Toda una vida", l: "del primer año al último · una sola línea de tiempo" },
        { n: "36", l: "líneas rojas de salud · todas y cada una con su fuente" },
        { n: "0", l: "diagnósticos · en su lugar te lleva a la pregunta correcta" }
      ],
      chips: ["Lee informes veterinarios desde una foto", "Líneas rojas con fuentes autorizadas", "Una línea de tiempo para toda la vida"],
      youSend: "Una foto — un informe, una etiqueta, un paseo — o una línea: “lleva sin comer desde el martes”.",
      youGet:
        "Historial estructurado, un aviso cuando algo cruza una línea roja, una lista de preguntas preparada para el veterinario, y un diario que no tuviste que llevar.",
      features: [
        {
          title: "Los informes se vuelven historial",
          body: "Un informe veterinario fotografiado se lee como valores de laboratorio, recetas y constantes estructurados, en vez de archivarse como una imagen que no vas a encontrar nunca más. Cada informe queda sellado con qué motor lo leyó, para que distingas una lectura de máquina de una humana."
        },
        {
          title: "Las líneas rojas llevan sus fuentes",
          body: "Treinta y seis, cada una atada a una fuente autorizada — el MSD Veterinary Manual, el Cornell Feline Health Center, AAHA y WSAVA — para que un aviso se pueda comprobar y no solo creer."
        },
        {
          title: "Preparado para la visita",
          body: "Convierte lo que lleva tiempo vigilando en las preguntas que de verdad merece la pena hacer, para que los diez minutos que tienes con el veterinario no se vayan en recordar."
        },
        {
          title: "La compuerta de seguridad no es un modelo",
          body: "La comprobación de líneas rojas es un motor de reglas determinista sin ningún modelo de lenguaje en el camino, y las reglas están congeladas en su ajuste más conservador — un intento de ablandar una falla la validación en vez de aceptarse en silencio."
        },
        {
          title: "La sabiduría de foro está en cuarentena",
          body: "Tu propia observación, la literatura veterinaria publicada, el consejo de tu veterinario y lo que dice la gente en internet son cuatro niveles distintos. El cuarto vive en su propio espacio en cuarentena y tiene estructuralmente prohibido ascender a nada que el pack trate como cierto."
        },
        {
          title: "El diario se escribe solo",
          body: "Un diario de crecimiento y un informe mensual, montados con lo que ya pasó y no con una tarde que se suponía que ibas a dedicar a escribirlo."
        }
      ],
      proof: {
        head: "timeline",
        lab: "3 años, 2 meses",
        body: [
          "vacunas ... <span class='ok'>12 · todas registradas</span>",
          "peso ...... <span class='ok'>26 meses, sin cortes</span>",
          "hoy ....... <span class='hl'>ingesta de agua ↑ · cruza una línea</span>",
          "<span class='dim'>→ aviso + fuente + 3 preguntas para el veterinario</span>"
        ]
      },
      proofNote:
        "Cada aviso nombra la línea roja que se cruzó y la fuente que hay detrás de esa línea roja, para que puedas llevarle la fuente a tu veterinario y no una captura de pantalla de una app.",
      honest: [
        "<b>No es veterinario, y no diagnostica.</b> Vigila las cosas que merece la pena preguntar y te entrega la fuente. El juicio es de tu veterinario.",
        "<b>Solo gatos y perros.</b> El corpus de líneas rojas está escrito para dos especies. Es editable — puedes añadir una regla, y te insistirá en que esa regla lleve una fuente — pero el conjunto que se entrega llega hasta ahí.",
        "<b>Leer un informe fotografiado usa una clave de visión que tú aportas.</b> Sin ella rellenas un formulario corto en su lugar. No hay OCR gratis incluido, y preferimos decirlo a que un plan de reserva te sorprenda.",
        "<b>El diario ilustra, no filma.</b> El vídeo generado está apagado en esta versión; una entrada del diario vuelve como una tarjeta ilustrada, no como un clip."
      ]
    }
  }
};
