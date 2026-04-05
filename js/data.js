// Datos de Softsol — reutilizados desde la hoja de vida original
// Fuente: ../../js/script.js (mantener sincronizado si se actualizan los arrays)

const experienciasLaborales = [
  {
    cargo: "Fundador — SOFTWARE SOLUTION / Softsol",
    funcion: "Origen y base de Softsol. Lo que empezó como soporte en hardware, CCTV y mantenimiento para pymes colombianas se convirtió en la plataforma actual de software a la medida, automatizaciones e integraciones, y los agentes IA por WhatsApp. Siete años entendiendo desde adentro cómo trabajan realmente los negocios que hoy compran nuestras soluciones.",
    fechas: "2018 – Presente",
    tag: "Fundador · base de Softsol"
  },
  {
    cargo: "Auxiliar Operativo — Pcshek",
    funcion: "Automaticé desde adentro el flujo de bodega de una empresa de electrónicos usando Google Apps Script: marcación, picking, validación contra pedidos y reportes automáticos. Es literalmente la semilla del producto 'Gestión de Bodegas' que hoy ofrecemos a distribuidoras y operadores logísticos. Cuando vendo ese caso, sé de qué hablo porque yo mismo fui el usuario.",
    fechas: "Nov 2023 – Jul 2024",
    tag: "Raíz de Gestión de Bodegas"
  },
  {
    cargo: "Técnico Soporte — Punto de Servicios (Asus · Lenovo · Acer)",
    funcion: "Diagnóstico profundo de computadores en garantía: desensamble, reemplazo de piezas, lectura de logs de hardware, manejo de tipos de garantía con cliente final. Años de desarmar equipos reales me dieron el criterio para construir hoy 'PC Doctor': un diagnóstico automatizado por WhatsApp que sabe exactamente qué buscar porque lo buscamos a mano primero.",
    fechas: "May 2023 – Ago 2023",
    tag: "Raíz de PC Doctor"
  },
  {
    cargo: "Operario Producción — Macdulces",
    funcion: "Planta de producción real, en turnos reales. Automaticé con Google Apps Script el registro de materiales y salidas que antes se hacía en papel, eliminando doble digitación y errores. Es la experiencia que sustenta el caso 'Control de Producción' que hoy vendemos a manufactureras pequeñas: conozco el calor de la línea y el lenguaje del operario.",
    fechas: "Feb 2023 – May 2023",
    tag: "Raíz de Control de Producción"
  },
  {
    cargo: "Ingeniero de Sistemas — Lonja de Colombia",
    funcion: "Gestión de la infraestructura TI de una gremial con múltiples áreas y usuarios: soporte de aplicaciones, administración de activos tecnológicos y atención a procesos operativos en un contexto empresarial formal. Dos años viendo cómo una organización sin cultura tecnológica adopta herramientas digitales — exactamente el tipo de cliente al que Softsol le vende hoy.",
    fechas: "Nov 2021 – Oct 2023",
    tag: "IT empresarial"
  },
  {
    cargo: "Analista QA — IT Security Services · Proyecto Banco Popular",
    funcion: "Lideré el plan de pruebas y coordiné el equipo de QA para un proyecto crítico dentro de un banco colombiano. De ahí viene la disciplina que hoy aplicamos en cada entrega de Softsol: si el código aguantó auditoría bancaria, aguanta una pyme. Aquí también aprendí la diferencia real entre 'funciona en mi máquina' y 'funciona en producción con usuarios que no perdonan'.",
    fechas: "2019 – 2020",
    tag: "QA bancario · Liderazgo"
  },
  {
    cargo: "Analista QA / Desarrollador — Grupo Cubo LTDA",
    funcion: "Desarrollo y QA al mismo tiempo: corrección de bugs en C# sobre MVC y WebForms, automatización de pruebas con Selenium, consultas SQL Server complejas, trabajo bajo Git, Scrum y estándares CMMI DEV / ISO 29110-4. Aquí solidifiqué la costumbre de moverme con soltura tanto en código como en procesos formales de calidad — no son cosas opuestas, se refuerzan.",
    fechas: "2020",
    tag: "Dev + QA · C# · SQL"
  },
  {
    cargo: "Automatizador QA — Trycore SAS",
    funcion: "Automatización de pruebas funcionales sobre el 'Nuevo Modelo de Contratación' (NMC), implementación de procesos con Bonita BPM, casos de prueba, bug tracking y gestión de datos. Mi primer contacto serio con motores de procesos: el ADN directo de los flujos conversacionales que hoy construimos como agentes WhatsApp. Quien entiende BPM, entiende por qué los flujos de viáticos o cartera tienen que ser determinísticos.",
    fechas: "Abr 2019",
    tag: "BPM + Automatización"
  },
  {
    cargo: "Ingeniero de Sistemas — Inteco SAS",
    funcion: "Puesta en marcha de aplicaciones corporativas (Velneo), pruebas UAT y administración de hardware/software bajo el estándar ISO 17020 (organismos de inspección). En ISO 17020 cada cambio debe quedar documentado y trazable — costumbre que mantengo en Softsol: repositorio, tablero y entregables visibles en todo momento.",
    fechas: "Jun 2018",
    tag: "Calidad · ISO 17020"
  },
  {
    cargo: "Ingeniero Soporte — Rayogas SA ESP",
    funcion: "Infraestructura completa de una compañía de gas: servidores Windows 2003/2008, Active Directory, DNS, DHCP, telefonía IP y dirección de proyectos de innovación tecnológica. Base sólida de redes y arquitectura que hoy me permite diseñar soluciones cloud con criterio — no improvisando con la primera plantilla que aparece en internet.",
    fechas: "2017",
    tag: "Infraestructura · Redes"
  }
];

const habilidades = [
  { habilidad: "JavaScript", icon: "bi-filetype-js",   color: "#F7DF1E" },
  { habilidad: "Python",     icon: "bi-filetype-py",   color: "#3776AB" },
  { habilidad: "React",      icon: "bi-bootstrap",     color: "#61DAFB" },
  { habilidad: "Node.js",    icon: "bi-hdd-network",   color: "#8CC84B" },
  { habilidad: "SQL Server", icon: "bi-server",        color: "#CC2927" },
  { habilidad: "C#",         icon: "bi-filetype-cs",   color: "#9B4F96" },
  { habilidad: "PHP",        icon: "bi-filetype-php",  color: "#777BB4" },
  { habilidad: "HTML & CSS", icon: "bi-filetype-html", color: "#E34F26" },
  { habilidad: "Git",        icon: "bi-git",           color: "#F05032" },
  { habilidad: "Apps Script",icon: "bi-google",        color: "#4285F4" },
  { habilidad: "Selenium QA",icon: "bi-bug",           color: "#43B02A" },
  { habilidad: "Bonita BPM", icon: "bi-diagram-3",     color: "#00B4A0" }
];

const estudios = [
  { estudio: "Ingeniería en Sistemas",           institucion: "CUN",   ano: "2021" },
  { estudio: "Tecnología en Sistemas",           institucion: "CUN",   ano: "2018" },
  { estudio: "Desarrollo Web PHP",               institucion: "Intecap", ano: "2021" },
  { estudio: "Técnico Profesional en Sistemas",  institucion: "CUN",   ano: "2013" },
  { estudio: "Técnico Laboral en Sistemas",      institucion: "Incap", ano: "2010" },
  { estudio: "Taller Analista QA",               institucion: "—",     ano: "2018" },
  { estudio: "Bachillerato",                     institucion: "IED El Virrey José Solís", ano: "2001" }
];

// Proyectos enriquecidos para el "Showroom"
const proyectos = [
  {
    id: "horas-devuelo",
    filter: "web",
    nombre: "Horas DEVuelo",
    descripcion: "La academia donde formamos desarrolladores que sí entregan. Cada estudiante sale con proyectos reales en su portafolio, no con teoría.",
    stack: ["JavaScript", "React", "Node.js"],
    stats: [{ k: "+3", v: "años formando talento" }, { k: "20+", v: "devs graduados" }],
    ano: "2021 – 2024",
    categoria: "EdTech",
    accent: "from-cyan-400 to-blue-600",
    resumen: {
      headline: "Formar developers que las empresas sí contratan.",
      problema: "Los bootcamps tradicionales entregaban diplomas, pero las empresas seguían rechazando a los graduados por falta de proyectos reales en su portafolio.",
      solucion: "Diseñamos un programa-taller donde cada clase termina con código publicado en GitHub y cada cohorte entrega un producto real, no un ejercicio académico.",
      resultados: [
        "Más de 20 developers junior colocados en empresas reales.",
        "3+ años de operación continua con cohortes recurrentes.",
        "Portafolio público verificable por cada graduado.",
        "Programa escalable por módulos: web, bots, automatización."
      ],
      duracion: "Programa continuo · cohortes de 8 semanas",
      ideal: "Academias, empresas que forman su propio talento interno, ONGs de empleabilidad."
    }
  },
  {
    id: "control-inventario",
    filter: "ops",
    nombre: "Control de Inventario",
    descripcion: "Adiós a los cuadernos y al Excel compartido. El dueño sabe en tiempo real qué se vendió, qué falta y qué se está robando.",
    stack: ["PHP", "JavaScript", "MySQL"],
    stats: [{ k: "-40%", v: "tiempo de cierre diario" }, { k: "100%", v: "trazabilidad" }],
    ano: "2021",
    categoria: "Retail",
    accent: "from-fuchsia-500 to-violet-600",
    resumen: {
      headline: "El cierre de caja pasó de 2 horas a 15 minutos.",
      problema: "El negocio cerraba con Excel compartidos que se pisaban entre vendedores. Cada noche, el dueño tardaba dos horas cuadrando inventario y siempre había faltantes sin explicar.",
      solucion: "Montamos una plataforma web con acceso por roles (vendedor, cajero, dueño), registro en tiempo real, alertas de stock bajo y reportes automáticos al cierre.",
      resultados: [
        "Cierre diario de 2 horas → 15 minutos (-40% tiempo operativo).",
        "Trazabilidad del 100%: cada movimiento queda registrado con usuario y hora.",
        "Alertas automáticas cuando un producto baja del mínimo.",
        "Reporte diario por correo al dueño a las 8 pm."
      ],
      duracion: "6 semanas de MVP · soporte continuo",
      ideal: "Tiendas físicas, distribuidores, minimercados con 2–20 empleados."
    }
  },
  {
    id: "bot-cartera",
    filter: "whatsapp",
    nombre: "Bot de Cartera WhatsApp",
    descripcion: "Dejamos que un bot cobre por ti. Recuerda, negocia y responde 24/7. Los humanos solo atienden los casos que ya están listos para pagar.",
    stack: ["Node.js", "React"],
    stats: [{ k: "+60%", v: "tasa de respuesta" }, { k: "24/7", v: "cobrando sin descansar" }],
    ano: "2022",
    categoria: "FinTech",
    accent: "from-emerald-400 to-teal-600",
    resumen: {
      headline: "Recupera cartera mientras duermes.",
      problema: "El equipo de cobranza perdía el 70% del día llamando a clientes que no contestaban, dejando mensajes que nadie escuchaba, y la cartera vencida seguía creciendo mes a mes.",
      solucion: "Construimos un bot conversacional sobre WhatsApp Business que envía recordatorios escalonados, negocia acuerdos básicos y solo escala a un humano cuando el cliente ya está listo para pagar.",
      resultados: [
        "Tasa de respuesta de clientes deudores +60%.",
        "Operación 24/7 sin intervención humana.",
        "El equipo humano dedica su tiempo solo a cierres, no a buscar deudores.",
        "Reducción notable de cartera vencida desde el primer mes."
      ],
      duracion: "4 semanas · integración con tu cartera existente",
      ideal: "Empresas de servicios, créditos, membresías, arriendos, cooperativas."
    }
  },
  {
    id: "gestion-bodegas",
    filter: "ops",
    nombre: "Gestión de Bodegas",
    descripcion: "Marcación, picking y estantería bajo control. El bodeguero trabaja con el celular y los errores de despacho desaparecen del reporte.",
    stack: ["Google Apps Script", "Sheets API"],
    stats: [{ k: "+20%", v: "eficiencia operativa" }, { k: "0", v: "errores de picking" }],
    ano: "2024",
    categoria: "Logística",
    accent: "from-amber-400 to-orange-600",
    resumen: {
      headline: "Errores de despacho: de diarios a cero.",
      problema: "En bodega, los pickers marcaban con papel y luego alguien transcribía a Excel. Cada semana salían despachos equivocados que el cliente devolvía y que costaban plata en transporte y credibilidad.",
      solucion: "Aplicación ligera sobre Google Workspace: el bodeguero marca con el celular leyendo códigos, el sistema valida contra el pedido y no permite cerrar el despacho si algo no cuadra.",
      resultados: [
        "Errores de picking reducidos a cero desde la segunda semana.",
        "+20% de eficiencia operativa por eliminar la doble digitación.",
        "Sin costo de licencias adicionales (corre sobre Google Sheets).",
        "Capacitación del equipo en menos de 1 hora."
      ],
      duracion: "3 semanas · despliegue sobre la cuenta Google que ya tienes",
      ideal: "Bodegas medianas, distribuidoras, operadores logísticos sin ERP formal."
    }
  },
  {
    id: "viaticos-whatsapp",
    filter: "whatsapp",
    nombre: "Control de Viáticos por WhatsApp",
    descripcion: "El empleado envía la foto del recibo por WhatsApp. La IA lo registra, valida y genera la legalización. Contabilidad deja de perseguir a nadie.",
    stack: ["Python", "FastAPI", "PostgreSQL", "WhatsApp API", "OCR + IA"],
    stats: [
      { k: "-90%", v: "tiempo de legalización" },
      { k: "100%", v: "gastos con soporte" },
      { k: "0", v: "formatos que llenar" },
      { k: "Tiempo real", v: "control gerencial" }
    ],
    ano: "2025",
    categoria: "SaaS B2B · FieldOps",
    accent: "from-indigo-500 via-sky-500 to-emerald-400",
    featured: true,
    nuevo: true,
    icon: "bi-receipt-cutoff",
    resumen: {
      headline: "Legaliza viáticos sin papeleo. Solo una foto por WhatsApp.",
      problema: "Los equipos técnicos en campo registran sus gastos días después, cuando ya olvidaron detalles. Contabilidad persigue recibos, operaciones odia los formatos, y la gerencia se entera de los sobrecostos cuando ya es tarde. Resultado: retrasos, errores, dinero no devuelto y conflicto interno semana tras semana.",
      solucion: "El empleado envía la foto del recibo a un número de WhatsApp y escribe 'almuerzo 23000'. La IA con OCR extrae fecha, valor y NIT, valida contra las reglas del viaje (tope por concepto, saldo restante), guarda la foto como soporte y alerta si algo se sale de los límites. Al final del viaje se genera la legalización completa con anexos, lista para contabilidad.",
      resultados: [
        "Registro del gasto en segundos, en el momento exacto en que ocurre.",
        "Alertas automáticas por tope excedido o saldo bajo, sin esperar al cierre.",
        "Legalización generada automáticamente con todos los soportes fotográficos.",
        "Dashboard en vivo: gasto por ciudad, por proyecto, por empleado, promedio de hotel y alimentación.",
        "Detección automática de recibos duplicados, facturas sin NIT y montos atípicos.",
        "Cero capacitación: si tu equipo sabe mandar una foto por WhatsApp, ya sabe usarlo."
      ],
      duracion: "MVP en 6 semanas · integrable con tu contabilidad actual",
      ideal: "Empresas de mantenimiento, telecomunicaciones, construcción, instalación de redes y cualquier operación con técnicos de campo."
    }
  },
  {
    id: "catalogo-social",
    filter: "web",
    nombre: "Catálogo Digital con Revendedoras",
    descripcion: "Vende como Ésika, pero sin bodega ni capital en stock. Catálogo web + proveedores locales + red de revendedoras, todo cerrando por WhatsApp.",
    stack: ["WordPress / Shopify", "WhatsApp Business", "Meta Ads", "Google Sheets"],
    stats: [
      { k: "$0", v: "inversión en stock" },
      { k: "20–40%", v: "margen por venta" },
      { k: "+N", v: "revendedoras activas" },
      { k: "Bajo pedido", v: "sin riesgo de inventario" }
    ],
    ano: "2025",
    categoria: "Social Commerce",
    accent: "from-rose-500 via-pink-500 to-amber-400",
    nuevo: true,
    icon: "bi-bag-heart",
    resumen: {
      headline: "Vende como Ésika, sin bodega, sin inventario y sin empleados.",
      problema: "Miles de personas con comunidad en redes quieren vender ropa, accesorios o productos locales, pero se frenan por dos razones: no tienen capital para comprar stock y no saben cómo armar un catálogo profesional. Terminan publicando fotos sueltas en estados de WhatsApp y perdiendo ventas por desorden.",
      solucion: "Montamos un catálogo digital tipo Ésika que se alimenta de proveedores locales trabajando bajo pedido (cero stock propio). El cliente elige en la web, pide por WhatsApp, tú confirmas con el proveedor y despachas. Incluye módulo de revendedoras con su propio enlace y comisión automática para escalar sin contratar gente.",
      resultados: [
        "Arranque con cero inversión en inventario: trabajas bajo pedido con 2–3 proveedores por producto para cubrir incumplimientos.",
        "Catálogo digital en fase 1 con botón 'Pedir por WhatsApp' directo a tu número.",
        "Fase 2: catálogo mensual o quincenal con ofertas destacadas y pedidos automáticos.",
        "Módulo de revendedoras estilo Ésika: cada una tiene su enlace personalizado, comisión transparente y panel de ventas.",
        "Integración con Meta Ads para captar clientes y proveedores desde Facebook e Instagram.",
        "Políticas de cambios, tiempos de entrega y muestras centralizadas en el sistema: menos discusiones, más ventas."
      ],
      duracion: "Fase 1 en 3 semanas (catálogo + WhatsApp) · Fase 2 escala con red de revendedoras",
      ideal: "Emprendedoras sin capital para stock, tiendas boutique locales, influencers con comunidad que quieren monetizar y marcas locales que buscan distribución capilar."
    }
  },
  {
    id: "cv-ia-whatsapp",
    filter: "whatsapp",
    nombre: "Motor de Empleabilidad con IA",
    descripcion: "No escribimos hojas de vida: entrevistamos por WhatsApp y la IA las arma por ti. CV listo para ATS en 20 minutos, optimizado para pasar los filtros automáticos.",
    stack: ["WhatsApp Business API", "GPT-4", "Python", "FastAPI", "PostgreSQL"],
    stats: [
      { k: "20 min", v: "por CV optimizado" },
      { k: "ATS", v: "100% compatible" },
      { k: "0", v: "formularios que llenar" },
      { k: "Alto", v: "volumen sin colapsar" }
    ],
    ano: "2025",
    categoria: "HR Tech · IA",
    accent: "from-violet-600 via-fuchsia-500 to-pink-500",
    nuevo: true,
    icon: "bi-person-vcard",
    resumen: {
      headline: "No escribimos tu CV. Te entrevistamos por WhatsApp y la IA lo construye.",
      problema: "Técnicos, operarios y perfiles junior mandan decenas de hojas de vida al mes y nadie los llama. No es porque no sirvan: es porque copian plantillas de internet, no conocen las palabras clave del sector y el ATS de la empresa los descarta antes de que un humano lea la primera línea. Pagar por un CV hecho a mano es lento y caro; hacerlo solo no funciona.",
      solucion: "Un agente de IA sobre WhatsApp hace preguntas guiadas como si fuera una asesoría real. Tres capas de IA procesan la conversación: diagnóstico (entiende al candidato), estructuración (ordena la información por relevancia) y generación final (produce un CV limpio, ATS-friendly, con las palabras clave del sector). Todo en 20–30 minutos, sin formularios ni plantillas perdidas.",
      resultados: [
        "CV optimizado para ATS entregado en 20–30 minutos, no en días.",
        "Experiencia de asesoría conversacional: el candidato siente que lo están guiando, no que llena un formulario.",
        "Tres capas de IA trabajando en cadena: diagnóstico + estructuración + generación final.",
        "Checklist automático: palabras clave del sector, claridad, orden lógico y compatibilidad ATS.",
        "Entrega final: PDF ATS-friendly + recomendaciones de uso y canales donde aplicar.",
        "Seguimiento por cliente: sector, cargo, tiempo a primera entrevista. El negocio se vuelve un laboratorio de mercado con cada venta."
      ],
      duracion: "MVP operativo en 4–6 semanas · escalable con afiliados y suscripción mensual",
      ideal: "Bolsas de empleo, consultoras de talento, coaches de carrera, reclutadores independientes y cualquiera que quiera lanzar un servicio masivo de optimización de hojas de vida para perfiles técnicos y operativos."
    }
  },
  {
    id: "pc-doctor-whatsapp",
    filter: "whatsapp",
    nombre: "PC Doctor · Diagnóstico Inteligente por WhatsApp",
    descripcion: "Convierte cualquier PC lenta en un equipo rápido, seguro y optimizado. Diagnóstico automático + asistente IA + guía paso a paso por WhatsApp. Sin técnicos en casa, sin cables ni complicaciones.",
    stack: ["WhatsApp Business API", "Python", "PowerShell", "GPT-4", "Reporting PDF"],
    stats: [
      { k: "80%", v: "más velocidad" },
      { k: "Minutos", v: "diagnóstico completo" },
      { k: "0", v: "técnicos en casa" },
      { k: "24/7", v: "soporte por WhatsApp" }
    ],
    ano: "2025",
    categoria: "Soporte TI · B2C",
    accent: "from-lime-400 via-emerald-500 to-cyan-500",
    nuevo: true,
    icon: "bi-laptop",
    resumen: {
      headline: "Tu computador lento, diagnosticado y optimizado sin que nadie pise tu casa.",
      problema: "El computador se traba, tarda en abrir programas y el usuario no sabe si es un virus, el disco viejo o decenas de apps corriendo en segundo plano. Las opciones actuales duelen: llamar un técnico a domicilio (caro, lento, agenda imposible), llevarlo a un local (te quedas sin PC dos días) o —peor— salir a comprar uno nuevo sin necesidad.",
      solucion: "El usuario abre WhatsApp, sigue los pasos del asistente y un agente de diagnóstico analiza el equipo en segundos. La IA interpreta los resultados, explica en lenguaje humano qué está mal y guía paso a paso la optimización: limpieza profunda, apps en inicio, seguridad, estado del disco y RAM. Al final recibe un reporte profesional con el estado del equipo y recomendaciones claras. Sin desplazamientos, sin cables, sin jerga técnica.",
      resultados: [
        "Hasta 80% más velocidad en tareas diarias tras la optimización guiada.",
        "Diagnóstico completo del equipo en minutos, no en horas.",
        "Reporte profesional en PDF con estado de rendimiento, seguridad y hardware.",
        "Guía paso a paso por WhatsApp: el usuario siente que tiene un técnico al lado sin pagarle uno.",
        "Ahorro directo: cero visitas técnicas, cero compras innecesarias de equipos nuevos.",
        "Mejora real en seguridad: detección de software sospechoso, parches pendientes y estado del antivirus."
      ],
      duracion: "Diagnóstico en minutos · optimización guiada en una sola sesión",
      ideal: "Estudiantes y trabajadores remotos que dependen de su PC, pequeños negocios con 2–10 equipos, familias con computadores compartidos, y usuarios sin tiempo ni ganas de llevar el equipo al taller."
    }
  },
  {
    id: "control-produccion",
    filter: "ops",
    nombre: "Control de Producción",
    descripcion: "El gerente abre el celular y ve la planta en vivo. Menos reprocesos, menos reuniones, más minutos productivos.",
    stack: ["Google Apps Script", "Sheets"],
    stats: [{ k: "Tiempo real", v: "tableros en vivo" }, { k: "-50%", v: "reprocesos" }],
    ano: "2023",
    categoria: "Manufactura",
    accent: "from-rose-400 to-pink-600",
    resumen: {
      headline: "La planta en tu bolsillo, en tiempo real.",
      problema: "El gerente de producción dependía de reuniones diarias y reportes hechos a mano para saber qué estaba pasando en planta. Cuando se enteraba de un problema, ya llevaba horas activo y los reprocesos eran la norma.",
      solucion: "Los operarios registran en tabletas datos mínimos por turno. Un tablero vivo consume esa data y muestra métricas clave (producción, paros, merma) en el celular del gerente y los supervisores.",
      resultados: [
        "Reprocesos reducidos a la mitad (-50%).",
        "Dashboards en tiempo real accesibles desde cualquier dispositivo.",
        "Detección de paros en planta en minutos, no en horas.",
        "Las reuniones diarias pasaron de 45 min a 15 min."
      ],
      duracion: "5 semanas · piloto en una línea, luego escala",
      ideal: "Plantas manufactureras pequeñas y medianas que aún trabajan con formatos en papel."
    }
  }
];

const faqs = [
  {
    q: "Ya me estafaron antes con un desarrollador que desapareció. ¿Qué me garantiza que no pase de nuevo?",
    a: "Cobro por fases, no por adelantado del total. Cada fase entrega algo que tú ya puedes ver y usar. Si en cualquier punto sientes que no avanza, paras de pagar y te quedas con lo que hay hasta ese momento: código, credenciales y documentación. Sin rehenes."
  },
  {
    q: "¿El código y la aplicación son míos al 100%?",
    a: "Sí, completamente. Al cerrar el proyecto te entrego el repositorio Git, las credenciales de servidores y la documentación técnica. No hay licencias ocultas, ni vendor lock-in, ni cláusulas raras. Si mañana quieres que otro lo mantenga, puede hacerlo sin problema."
  },
  {
    q: "¿Mi software va a seguir sirviendo cuando el negocio crezca 10x?",
    a: "Sí. Construyo con arquitecturas modulares pensadas para crecer: base de datos normalizada, APIs versionadas y despliegues en la nube (AWS o Google Cloud). Si hoy manejas 100 clientes y mañana 10.000, la aplicación escala sin reescribirla."
  },
  {
    q: "¿Cuánto tarda realmente un proyecto?",
    a: "Un MVP funcional suele entregarse entre 4 y 8 semanas, según el alcance que acordemos en la primera llamada. Las fechas son fechas, no estimados optimistas. Si algo se va a atrasar, lo sabes con 48 horas de anticipación, no el día antes."
  },
  {
    q: "¿Y qué pasa cuando algo se rompa a las 11 pm de un viernes?",
    a: "Tienes soporte post-venta incluido en los primeros 30 días sin costo. Después contratamos un plan mensual con SLA claro: tiempos de respuesta y canal directo (WhatsApp, no tickets). Humanos respondiendo, no bots de ayuda."
  },
  {
    q: "¿Se puede conectar con lo que ya estoy usando (Excel, WhatsApp, mi ERP)?",
    a: "Prácticamente siempre. Integro con Google Workspace, WhatsApp Business, ERPs, pasarelas de pago, Shopify, y cualquier servicio que exponga API. En la llamada de 20 minutos te confirmo si tu caso específico es viable."
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Trabajo con rangos claros desde el primer día. Un agente de WhatsApp sencillo (respuesta automática + captura de leads) arranca <strong>desde $1.5M COP</strong>. Un sistema completo con IA, integraciones y dashboard suele quedar entre <strong>$4M y $12M COP</strong> según el alcance. Todo se paga por fases validadas, no por hora. Después de la llamada gratuita recibes una propuesta con precio fijo y cronograma. Cero facturas sorpresa a fin de mes. <br><br>💡 <strong>La mayoría de clientes recupera la inversión en 1 a 3 meses</strong> gracias al tiempo ahorrado y las ventas que dejaban de cerrarse por falta de seguimiento."
  }
];

const proceso = [
  { paso: "01", titulo: "Diagnóstico",        texto: "Llamada de 20 minutos. Te digo si tu problema se puede resolver con software, cuánto costaría y en cuánto lo recuperas. Si no hay encaje, te lo digo.", icon: "bi-search" },
  { paso: "02", titulo: "Prototipo validado", texto: "Antes de escribir una línea de código, ves tu aplicación funcionando en un prototipo clicable. Cambiamos lo que no te guste cuando todavía es barato hacerlo.", icon: "bi-palette" },
  { paso: "03", titulo: "Desarrollo por fases", texto: "Entregas cada 1–2 semanas que tú pruebas. Repositorio y tablero siempre visibles: sabes dónde va tu dinero en todo momento.", icon: "bi-code-slash" },
  { paso: "04", titulo: "Te entrego las llaves", texto: "Despliegue, capacitación a tu equipo y 30 días de soporte incluido. El código, los servidores y la documentación quedan a tu nombre. Listo para escalar.", icon: "bi-shield-check" }
];

const garantias = [
  { icon: "bi-chat-square-heart", titulo: "IA conversacional real",        texto: "No formularios, no menús. Tus clientes hablan con la IA como hablarían con un asesor de verdad." },
  { icon: "bi-whatsapp",          titulo: "WhatsApp como canal principal", texto: "Donde tus clientes ya están todo el día. Cero apps que descargar, cero capacitación." },
  { icon: "bi-gear-fill",         titulo: "Automatización real",           texto: "El sistema no solo muestra dashboards: actúa, notifica, decide y escala a un humano solo cuando toca." },
  { icon: "bi-bullseye",          titulo: "Pagas por resultados",          texto: "Fases cortas, código tuyo desde el día uno. Cero vendor lock-in y cero contratos de un año a ciegas." }
];

// 4 líneas de producto (buckets de beneficio) — cada una referencia casos reales del showroom
const buckets = [
  {
    id: "soporte-tecnico",
    icon: "bi-laptop",
    titulo: "Soporte técnico automatizado",
    pitch: "Diagnóstico de computadores y equipos con IA, recomendaciones paso a paso y reportes profesionales — sin técnicos presenciales.",
    beneficios: [
      "Diagnóstico en minutos, no en horas",
      "Reporte PDF con estado de hardware, seguridad y rendimiento",
      "Guía conversacional por WhatsApp"
    ],
    casos: ["pc-doctor-whatsapp"],
    accent: "from-lime-400 via-emerald-500 to-cyan-500",
    filterKey: "whatsapp"
  },
  {
    id: "ventas-atencion",
    icon: "bi-chat-heart",
    titulo: "Asistente de ventas y atención",
    pitch: "Convierte cada mensaje en una venta. Agentes que reciben leads, los califican y los guían hasta el cierre — sin que nadie tenga que estar pendiente del celular.",
    beneficios: [
      "Capta datos del cliente conversando",
      "Guía el proceso como un vendedor entrenado",
      "Escala a un humano solo cuando el cliente está listo para cerrar"
    ],
    casos: ["catalogo-social"],
    accent: "from-rose-500 via-pink-500 to-amber-400",
    filterKey: "web"
  },
  {
    id: "dinero-procesos",
    icon: "bi-cash-coin",
    titulo: "Control de dinero y procesos",
    pitch: "Cartera, viáticos e inventario: cada peso trazado con soporte automático para contabilidad y alertas antes de que algo se salga de control.",
    beneficios: [
      "Cobranza automática por WhatsApp 24/7",
      "Legalización de viáticos en segundos desde una foto",
      "Control de inventario en tiempo real con alertas de stock"
    ],
    casos: ["bot-cartera", "viaticos-whatsapp", "control-inventario"],
    accent: "from-indigo-500 via-sky-500 to-emerald-400",
    filterKey: "whatsapp"
  },
  {
    id: "operaciones-talleres",
    icon: "bi-boxes",
    titulo: "Operaciones, bodegas y talleres",
    pitch: "Producción, bodegas y talleres bajo control. El operario marca con el celular y el gerente ve la planta en tiempo real desde donde esté.",
    beneficios: [
      "Picking y despacho sin errores",
      "Dashboards de producción en vivo",
      "Cero formatos en papel, cero doble digitación"
    ],
    casos: ["gestion-bodegas", "control-produccion"],
    accent: "from-amber-400 via-orange-500 to-rose-500",
    filterKey: "ops"
  }
];

// Resultados agregados (franja emocional antes del showroom)
// Los números 3 y 4 provienen de casos reales del showroom (Bot de Cartera y Viáticos)
const resultados = [
  { k: "70%", label: "menos tiempo",     sub: "en tareas manuales y repetitivas" },
  { k: "24/7", label: "atención activa", sub: "respuesta automática sin pausas ni turnos" },
  { k: "+60%", label: "más respuesta",   sub: "tasa medida en el caso Bot de Cartera" },
  { k: "-90%", label: "menos papeleo",   sub: "tiempo de legalización en Viáticos WhatsApp" }
];

// Voces de uso · reflejos del impacto real medido en los casos del showroom
// (son paráfrasis atadas a resultados reales, atribuidas a rol + sector, no a personas concretas)
const testimonios = [
  {
    cita: "El cierre diario pasó de dos horas a quince minutos. Ya no llego a la una de la mañana cuadrando el inventario.",
    rol: "Dueño de tienda",
    sector: "Retail",
    caso: "control-inventario"
  },
  {
    cita: "Los errores de despacho desaparecieron del reporte semanal. El bodeguero trabaja con el celular y nadie discute con los clientes.",
    rol: "Jefe de bodega",
    sector: "Distribución",
    caso: "gestion-bodegas"
  },
  {
    cita: "El bot cobra mientras yo duermo. Mi equipo ahora solo atiende a los clientes que ya están listos para pagar — no los persigue.",
    rol: "Gerente de cartera",
    sector: "Servicios",
    caso: "bot-cartera"
  },
  {
    cita: "Los técnicos en campo mandan una foto del recibo por WhatsApp y contabilidad lo recibe legalizado. Dejamos de pelear por papeles los viernes.",
    rol: "Gerente de operaciones",
    sector: "Telecomunicaciones",
    caso: "viaticos-whatsapp"
  },
  {
    cita: "La planta entera cabe en mi celular. Detecto un paro de máquina en minutos, no en la reunión del día siguiente.",
    rol: "Gerente de producción",
    sector: "Manufactura",
    caso: "control-produccion"
  },
  {
    cita: "No tuve que llamar a un técnico ni llevar el equipo a ningún lado. Me guiaron por WhatsApp y el computador quedó volando.",
    rol: "Trabajadora remota",
    sector: "Freelance",
    caso: "pc-doctor-whatsapp"
  }
];

window.SOFTSOL_DATA = { experienciasLaborales, habilidades, estudios, proyectos, faqs, proceso, garantias, buckets, resultados, testimonios };
