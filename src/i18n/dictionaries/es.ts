import type { Dictionary } from "./en";

const es: Dictionary = {
  brand: {
    name: "Aurélia",
    suffix: "Clínica",
    tagline: "Odontología · Estética · Medicina",
    claim: "Cuidado luminoso, pensado para ti.",
  },

  nav: {
    home: "Inicio",
    services: "Servicios",
    dental: "Odontología",
    aesthetics: "Estética",
    medical: "Medicina",
    about: "Nosotros",
    contact: "Contacto",
    book: "Reservar cita",
    menu: "Menú",
    close: "Cerrar",
    exploreAll: "Ver todos los servicios",
    language: "Idioma",
    languageHint: "Elige tu idioma",
    openMenu: "Abrir navegación",
    quickCall: "Llamar a la clínica",
    quickHours: "Lun–Sáb · 08:00–20:00",
  },

  navCards: {
    dental: {
      title: "Estudio Dental",
      desc: "Diseño digital de sonrisa, implantes, alineadores invisibles e higiene delicada.",
    },
    aesthetics: {
      title: "Laboratorio de Estética",
      desc: "Salud de la piel, inyectables, láser y protocolos faciales regenerativos.",
    },
    medical: {
      title: "Atención Médica",
      desc: "Medicina familiar, chequeos ejecutivos, diagnóstico y seguimiento.",
    },
    about: {
      title: "La Clínica",
      desc: "Nuestro equipo, nuestro edificio, nuestros estándares — y la tecnología detrás.",
    },
    contact: {
      title: "Visítanos",
      desc: "Reserva en línea en menos de un minuto o habla hoy con una persona real.",
    },
  },

  hero: {
    badge: "Aceptando nuevos pacientes",
    titleTop: "Salud con",
    titleAccent: "la calidez",
    titleBottom: "de la luz",
    lead:
      "Una sola dirección para tu sonrisa, tu piel y tu salud. Aurélia reúne odontología, medicina estética y medicina general en una clínica serena y llena de luz — con un equipo que sí tiene tiempo para ti.",
    ctaPrimary: "Reservar cita",
    ctaSecondary: "Hacer el recorrido",
    scroll: "Desplázate para explorar",
    videoTitle: "Aurélia por dentro",
    videoSub: "Un recorrido de 60 segundos",
    floatingRating: "valoración de pacientes",
    floatingSlot: "Próximo turno",
    floatingSlotValue: "Hoy · 16:30",
    stats: [
      { value: "18", suffix: "años", label: "de atención clínica" },
      { value: "42", suffix: "mil", label: "tratamientos realizados" },
      { value: "3", suffix: "", label: "especialidades, un solo lugar" },
    ],
  },

  marquee: {
    items: [
      "Citas en la misma semana",
      "Diagnóstico digital",
      "Equipo trilingüe",
      "Protocolos sin dolor",
      "Precios transparentes",
      "Esterilización ISO 13485",
      "Ideal para familias",
      "Horario nocturno",
    ],
  },

  services: {
    eyebrow: "Tres especialidades",
    title: "Todo lo que tu cuerpo pide, bajo un mismo techo cálido",
    lead:
      "Se acabó cruzar la ciudad. Nuestros tres estudios comparten una historia clínica, un equipo y un mismo estándar — así tu dentista, tu dermatólogo y tu médico realmente se hablan.",
    cta: "Descubrir",
    cards: {
      dental: {
        tag: "Estudio 01",
        title: "Odontología",
        desc:
          "Desde una limpieza tranquila hasta un diseño digital completo de la sonrisa — planificado en 3D antes de tocar un diente.",
        points: ["Diseño digital de sonrisa", "Implantes y prótesis", "Alineadores invisibles", "Odontopediatría"],
      },
      aesthetics: {
        tag: "Estudio 02",
        title: "Estética",
        desc:
          "Medicina estética que empieza por la piel. Sutil, basada en evidencia y siempre orientada a que parezcas una versión descansada de ti.",
        points: ["Análisis de piel y peelings", "Inyectables y rellenos", "Láser y radiofrecuencia", "Faciales regenerativos"],
      },
      medical: {
        tag: "Estudio 03",
        title: "Medicina",
        desc:
          "Tu médico de familia, chequeos ejecutivos y análisis de laboratorio — con resultados explicados en lenguaje claro.",
        points: ["Medicina familiar", "Chequeo ejecutivo", "Laboratorio e imagen", "Vacunación y viajes"],
      },
    },
  },

  signature: {
    eyebrow: "Tratamientos insignia",
    title: "Los protocolos por los que la gente viaja",
    lead: "Seis programas que definen cómo trabaja Aurélia: medido, delicado y terminado al milímetro.",
    duration: "Duración",
    from: "desde",
    items: [
      {
        title: "Diseño Digital de Sonrisa",
        desc: "Tu sonrisa simulada en 3D, aprobada por ti y luego fresada exactamente según el plan.",
        meta: "90 min",
        price: "R$ 2.400",
        badge: "Más solicitado",
      },
      {
        title: "Implantología Guiada",
        desc: "Colocación guiada por computadora — incisiones menores, recuperación más rápida, resultado predecible.",
        meta: "120 min",
        price: "R$ 6.900",
        badge: "",
      },
      {
        title: "Protocolo Glow",
        desc: "Peeling, microagujas y LED en una sesión para una piel que atrapa la luz.",
        meta: "60 min",
        price: "R$ 890",
        badge: "Nuevo",
      },
      {
        title: "Volumen Natural",
        desc: "Relleno de ácido hialurónico mapeado a tus proporciones. Nada que no hayas pedido.",
        meta: "45 min",
        price: "R$ 1.890",
        badge: "",
      },
      {
        title: "Chequeo Ejecutivo",
        desc: "Analítica, valoración cardíaca, imagen y una hora de devolución — todo en una sola mañana.",
        meta: "180 min",
        price: "R$ 2.900",
        badge: "",
      },
      {
        title: "Seguimiento Familiar",
        desc: "Un médico que conoce a tu familia, accesible por mensaje entre consultas.",
        meta: "Anual",
        price: "R$ 249/mes",
        badge: "Plan",
      },
    ],
  },

  approach: {
    eyebrow: "Cómo funciona",
    title: "Cuatro pasos serenos, sin sorpresas",
    lead:
      "Diseñamos el recorrido del paciente igual que nuestras salas — todo donde esperas encontrarlo, nada con prisa.",
    steps: [
      {
        n: "01",
        title: "Primero, hablar",
        desc: "Veinte minutos de conversación — presencial o por video — antes de proponer cualquier tratamiento.",
      },
      {
        n: "02",
        title: "Ver el plan",
        desc: "Escaneo 3D, fotografías y un plan escrito con precio cerrado. Te llevas una copia.",
      },
      {
        n: "03",
        title: "Tratamiento amable",
        desc: "Sesiones con control del confort, mantas cálidas, auriculares con cancelación de ruido y pausas cuando quieras.",
      },
      {
        n: "04",
        title: "Seguir cerca",
        desc: "Mensajes de seguimiento, recordatorios y una revisión anual — tu historia clínica siempre disponible.",
      },
    ],
  },

  impact: {
    eyebrow: "Por qué Aurélia",
    title: "Precisión clínica, calidez de hospitalidad",
    lead:
      "Medimos todo lo que hacemos — desde el minuto de espera en recepción hasta el milímetro del margen de una restauración.",
    videoCaption: "Luz ambiente en el Estudio 02",
    stats: [
      { value: "98", suffix: "%", label: "nos recomendarían" },
      { value: "4", suffix: "min", label: "de espera promedio" },
      { value: "24", suffix: "h", label: "para responder cada mensaje" },
      { value: "12", suffix: "", label: "especialistas en el equipo" },
    ],
    pillars: [
      {
        title: "Una historia compartida",
        desc: "Odontología, estética y medicina leen el mismo expediente. Sin exámenes repetidos, sin historia perdida.",
      },
      {
        title: "Precios fijos y por escrito",
        desc: "Cada plan lleva un precio que apruebas antes de empezar. Ningún concepto aparece después.",
      },
      {
        title: "Confort por diseño",
        desc: "Salas con luz natural, equipos silenciosos, opciones de sedación y personal formado en ansiedad dental.",
      },
    ],
  },

  tech: {
    eyebrow: "Diseñado y desarrollado en casa",
    title: "La tecnología detrás de la calma",
    lead:
      "Este sitio — y la plataforma clínica que lo sostiene — fue diseñado y construido de principio a fin: reservas, historia clínica, contenido multilingüe y un design system que mantiene cada página fiel a la marca.",
    author: "Diseño y desarrollo",
    authorRole: "Product designer e ingeniera full-stack",
    authorBio:
      "Construyo experiencias de salud que se sienten humanas: interfaces accesibles, páginas rápidas y movimiento discreto y cuidado. Aurélia es mi proyecto de estudio — cada píxel, componente y consulta es mío.",
    capabilitiesTitle: "Lo que aporto a un proyecto clínico",
    capabilities: [
      {
        title: "Design systems",
        desc: "Tokens, componentes y documentación para que una marca sobreviva a su décima página.",
      },
      {
        title: "Movimiento y 3D",
        desc: "Coreografía de scroll, profundidad en parallax y acentos WebGL que nunca compiten con el contenido.",
      },
      {
        title: "Internacionalización",
        desc: "Rutas por idioma, metadatos traducidos y textos que suenan nativos en cada mercado.",
      },
      {
        title: "Accesibilidad",
        desc: "Contraste WCAG 2.2 AA, navegación por teclado, movimiento reducido y semántica para lectores de pantalla.",
      },
      {
        title: "Rendimiento",
        desc: "Server components, pipeline de imágenes y Core Web Vitals tratados como restricción de diseño.",
      },
      {
        title: "Reservas y datos",
        desc: "Agenda, formularios, historias cifradas, pagos y analítica conectados a flujos reales.",
      },
    ],
    metrics: [
      { value: "100", label: "SEO en Lighthouse" },
      { value: "98", label: "Rendimiento" },
      { value: "AA", label: "WCAG 2.2" },
      { value: "3", label: "Idiomas" },
    ],
  },

  team: {
    eyebrow: "Las personas",
    title: "Doce especialistas. Un solo estándar.",
    lead:
      "Cada profesional de Aurélia enseña, publica o tutoriza — y todos hablan al menos dos de nuestros tres idiomas.",
    cta: "Conocer al equipo completo",
    open: "Ver perfil",
    modal: {
      focus: "Enfoque",
      credentials: "Formación y credenciales",
      languages: "Idiomas",
      book: "Reservar cita",
      close: "Cerrar",
    },
    members: [
      {
        name: "Dra. Helena Marques",
        role: "Directora clínica · Implantología",
        focus: "Cirugía guiada, rehabilitación completa",
        bio: "Helena creó el programa de implantes de Aurélia y todavía planifica personalmente cada caso de arcada completa. Imparte formación en cirugía guiada por toda Europa y ha colocado más de cuatro mil implantes.",
        credentials: [
          "Odontología, Universidad de Lisboa",
          "Fellowship en implantología oral, Gotemburgo",
          "Miembro de la junta de la Sociedad Portuguesa de Implantología",
        ],
        languages: "Portugués · Inglés · Español",
      },
      {
        name: "Dr. Tomás Ferreira",
        role: "Medicina estética",
        focus: "Inyectables, protocolos regenerativos de piel",
        bio: "Tomás trata los rostros como lo haría un retratista: primero la proporción, después el producto. Dirige nuestros protocolos de inyectables y regeneración cutánea y forma al resto del equipo estético.",
        credentials: [
          "Medicina, Universidad de Coímbra",
          "Diploma en medicina estética, Barcelona",
          "Formador certificado en anatomía facial",
        ],
        languages: "Portugués · Inglés · Francés",
      },
      {
        name: "Dra. Camila Duarte",
        role: "Medicina familiar",
        focus: "Prevención, seguimiento de crónicos",
        bio: "Camila cuida de las familias que llevan años en la clínica — primeras consultas, seguimiento de crónicos y las derivaciones intermedias. Tiene la lista de pacientes más larga de Aurélia y se acuerda de todos.",
        credentials: [
          "Medicina, Universidad de São Paulo",
          "Residencia en medicina familiar, Hospital das Clínicas",
          "Posgrado en medicina preventiva",
        ],
        languages: "Portugués · Español · Inglés",
      },
      {
        name: "Dr. Rafael Nunes",
        role: "Ortodoncia",
        focus: "Alineadores invisibles, tratamiento adulto",
        bio: "Rafael planifica cada caso de alineadores en digital y enseña el resultado antes de empezar. Atiende casi solo a adultos, incluidos quienes de adolescentes oyeron que ya era tarde.",
        credentials: [
          "Odontología, Universidad de Oporto",
          "Máster en ortodoncia, Valencia",
          "Proveedor Invisalign Diamond certificado",
        ],
        languages: "Portugués · Inglés",
      },
      {
        name: "Dra. Beatriz Salgado",
        role: "Dermatología",
        focus: "Acné, melasma, láser fraccionado",
        bio: "Beatriz construyó nuestra dermatología en torno a planes largos y no a sesiones sueltas — protocolos de acné y melasma medidos en meses, con fotografía en cada paso.",
        credentials: [
          "Medicina, Universidad de Brasilia",
          "Residencia en dermatología, Santa Casa",
          "Miembro de la Sociedad Brasileña de Dermatología",
        ],
        languages: "Portugués · Inglés · Español",
      },
      {
        name: "Dr. Nuno Vilela",
        role: "Cirugía oral",
        focus: "Cordales, injerto óseo, microendodoncia",
        bio: "Nuno recibe los casos que otras clínicas derivan: molares incluidos, injerto óseo y la microendodoncia que salva la pieza que todos habían dado por perdida.",
        credentials: [
          "Odontología, Universidad de Coímbra",
          "Especialista en cirugía oral, Ordem dos Médicos Dentistas",
          "Microcirugía avanzada, Zúrich",
        ],
        languages: "Portugués · Inglés · Español",
      },
      {
        name: "Dr. Elias Bonfim",
        role: "Anestesia · Sedación",
        focus: "Sedación consciente, protocolos de ansiedad",
        bio: "Elias hace posibles las citas largas para quien no soporta ni las cortas. Dirige la sedación consciente de los tratamientos dentales y estéticos y vigila personalmente cada recuperación.",
        credentials: [
          "Medicina, Universidad Federal de Bahía",
          "Residencia en anestesiología",
          "Certificado en sedación consciente y ACLS",
        ],
        languages: "Portugués · Inglés",
      },
    ],
  },

  nurses: {
    eyebrow: "Equipo de enfermería",
    title: "Quienes están junto al sillón",
    lead:
      "Nuestras enfermeras preparan cada sala, acompañan todo el procedimiento y hacen la llamada de seguimiento — son a quienes los pacientes recuerdan por su nombre.",
    members: [
      { name: "Marta Coelho", role: "Enfermera jefa", focus: "Coordinación de salas, protocolo estéril" },
      { name: "Inês Barbosa", role: "Enfermera dental", focus: "Trabajo a cuatro manos, preparación quirúrgica" },
      { name: "Carla Nogueira", role: "Enfermera pediátrica", focus: "Primeras visitas, niños ansiosos" },
      { name: "Sofia Mendes", role: "Enfermera de recuperación", focus: "Monitorización de sedación, alta" },
      { name: "Luana Prado", role: "Enfermera de estética", focus: "Peelings, cuidados posprocedimiento" },
    ],
  },

  testimonials: {
    eyebrow: "Historias de pacientes",
    title: "La parte de la que más orgullo tenemos",
    lead: "Reseñas recogidas de visitas verificadas en nuestros tres estudios.",
    items: [
      {
        quote:
          "Llevaba once años evitando al dentista. Me dejaron pasar la primera cita sin un solo instrumento en la bandeja — solo conversando. Dos años después, toda mi familia se atiende aquí.",
        name: "Marina Castro",
        role: "Paciente · Odontología",
      },
      {
        quote:
          "Sutil es la palabra. Nadie preguntó qué me había hecho; tres personas preguntaron si había estado de vacaciones. Era exactamente lo que quería.",
        name: "Julia Bennett",
        role: "Paciente · Estética",
      },
      {
        quote:
          "Mi chequeo ejecutivo terminó antes del almuerzo y me lo explicaron como a una adulta, no como a una gráfica. El mensaje de seguimiento llegó esa misma noche.",
        name: "André Lopes",
        role: "Paciente · Medicina",
      },
      {
        quote:
          "Reconstruyeron una sonrisa que escondía desde el colegio. Con la vista previa en 3D supe el resultado antes de empezar.",
        name: "Sofia Ribeiro",
        role: "Paciente · Odontología",
      },
    ],
  },

  facility: {
    eyebrow: "El edificio",
    title: "Nueve salas, una ventana infinita",
    lead:
      "Una casona de 1930 restaurada, con patio ajardinado — luz natural en cada sala de tratamiento y una sala de espera de la que nadie quiere salir.",
    tags: ["Patio ajardinado", "Salas con luz natural", "Esterilización silenciosa", "Rincón infantil", "Acceso sin barreras", "Estacionamiento propio"],
  },

  faq: {
    eyebrow: "Bueno saber",
    title: "Preguntas que escuchamos cada semana",
    items: [
      {
        q: "¿Atienden en inglés, portugués y español?",
        a: "Sí. Recepción y equipo clínico trabajan en los tres idiomas, y todo documento — plan, consentimiento, factura — se emite en el idioma que elijas.",
      },
      {
        q: "¿En cuánto tiempo me pueden atender?",
        a: "La mayoría de los pacientes nuevos entra en cinco días hábiles. Reservamos turnos del mismo día para dolor y urgencias; llama antes de las 09:00 y te encajamos.",
      },
      {
        q: "¿Cuánto cuesta la primera consulta?",
        a: "La primera conversación es gratuita en los tres estudios. Los estudios diagnósticos — escaneo, analítica, análisis de piel — se presupuestan antes, nunca después.",
      },
      {
        q: "¿Los tratamientos tienen cobertura de seguro?",
        a: "Trabajamos con las principales aseguradoras nacionales e internacionales y emitimos facturas detalladas para reembolso. Recepción revisa tu póliza antes de comprometerte a nada.",
      },
      {
        q: "Me da miedo el dentista. ¿Qué pueden hacer?",
        a: "Mucho. Sedación consciente, citas más largas, señales acordadas para parar, auriculares con cancelación de ruido y personal formado específicamente en ansiedad dental.",
      },
      {
        q: "¿Puedo reservar en línea?",
        a: "Sí — toma menos de un minuto y recibes confirmación al instante, más un recordatorio 24 horas antes con indicaciones y datos de estacionamiento.",
      },
    ],
  },

  cta: {
    eyebrow: "Tu turno",
    title: "Empecemos por una conversación",
    lead:
      "Veinte minutos, sin compromiso y sin instrumentos. Cuéntanos qué te molesta y te diremos con honestidad si podemos ayudarte.",
    primary: "Reservar cita",
    secondary: "Llamar +55 11 4000-2020",
    note: "Lun–Sáb · 08:00–20:00 · Av. Paulista 1600, São Paulo",
  },

  footer: {
    blurb:
      "Odontología, estética y medicina en una clínica llena de luz. Diseñada, construida y mantenida en casa.",
    servicesTitle: "Servicios",
    clinicTitle: "Clínica",
    contactTitle: "Contacto",
    newsletterTitle: "Cartas luminosas",
    newsletterDesc: "Un correo breve al mes: consejos de prevención, nuevos protocolos, turnos libres.",
    newsletterPlaceholder: "tu@email.com",
    newsletterCta: "Suscribirme",
    newsletterNote: "Sin ruido de marketing. Cancela con un clic.",
    rights: "Todos los derechos reservados.",
    legal: ["Privacidad", "Términos", "Cookies"],
    address: "Av. Paulista 1600 · São Paulo · Brasil",
    phone: "+55 11 4000-2020",
    email: "hola@aureliaclinic.com",
    hours: "Lun–Vie 08:00–20:00 · Sáb 09:00–15:00",
  },

  pages: {
    dental: {
      eyebrow: "Estudio 01",
      title: "Estudio",
      titleAccent: "Dental",
      lead:
        "Odontología digital con toque silencioso. Cada plan empieza con un escaneo 3D y termina en una sonrisa que reconoces como tuya.",
      chips: ["Diseño digital de sonrisa", "Implantes guiados", "Alineadores invisibles", "Odontopediatría"],
      treatmentsTitle: "Tratamientos",
      treatmentsLead: "Alcance transparente, precio transparente. Todo lo de abajo incluye seguimiento.",
      treatments: [
        { title: "Higiene preventiva", desc: "Limpieza ultrasónica, pulido y un protocolo domiciliario personalizado.", meta: "45 min", price: "R$ 290" },
        { title: "Diseño digital de sonrisa", desc: "Simulación 3D, vista previa en encerado y carillas cerámicas fresadas según el plan.", meta: "90 min", price: "R$ 2.400" },
        { title: "Implantología guiada", desc: "Colocación planificada por computadora con guía quirúrgica y provisional inmediato.", meta: "120 min", price: "R$ 6.900" },
        { title: "Alineadores invisibles", desc: "Alineación completa con monitorización remota entre visitas.", meta: "8–14 meses", price: "R$ 14.900" },
        { title: "Endodoncia", desc: "Tratamiento de conducto asistido por microscopio, normalmente en una sesión.", meta: "80 min", price: "R$ 1.200" },
        { title: "Odontopediatría", desc: "Una primera visita construida como un juego — sin torno, sin bata blanca, sin miedo.", meta: "30 min", price: "R$ 220" },
      ],
      highlightsTitle: "Por qué los pacientes eligen este estudio",
      highlights: [
        { title: "Escanear, no adivinar", desc: "El escaneo intraoral y el CBCT sustituyen a la impresión — sin cubetas, sin náusea, precisión submilimétrica." },
        { title: "Cerámica en una visita", desc: "Nuestra fresadora interna produce coronas y carillas mientras esperas en la sala." },
        { title: "Protocolo de ansiedad", desc: "Señales acordadas para parar, sedación consciente y citas tan largas como necesites." },
      ],
      processTitle: "Tu recorrido",
      process: [
        { n: "01", title: "Escanear y hablar", desc: "Escaneo 3D completo, fotografías y una conversación sobre lo que realmente quieres." },
        { n: "02", title: "Vista previa", desc: "Ve el resultado antes de empezar — aprueba, ajusta o retírate." },
        { n: "03", title: "Tratar", desc: "Sesiones planificadas según tu agenda, con el confort controlado en todo momento." },
        { n: "04", title: "Mantener", desc: "Revisiones semestrales y un plan de higiene que mantiene el trabajo como nuevo." },
      ],
      faqTitle: "Preguntas de odontología",
      faq: [
        { q: "¿Duele la cirugía de implante?", a: "La colocación guiada se hace con anestesia local por una pequeña apertura. La mayoría toma un analgésico suave la primera noche y nada más." },
        { q: "¿Cuánto duran las carillas?", a: "Con buena higiene y férula nocturna cuando está indicada, las cerámicas modernas superan con holgura los quince años. Las revisamos en cada visita de higiene." },
        { q: "¿Los alineadores resuelven mi caso?", a: "En la mayoría de apiñamientos, espacios y alteraciones leves de mordida, sí. Escaneamos primero y te mostramos la posición final simulada antes de comprometerte." },
      ],
    },

    aesthetics: {
      eyebrow: "Estudio 02",
      title: "Laboratorio",
      titleAccent: "de Estética",
      lead:
        "Primero la salud de la piel, después la cosmética. Tratamos el tejido, no la tendencia — para un resultado que se lee como descanso, no como intervención.",
      chips: ["Análisis de piel", "Inyectables", "Láser y RF", "Regenerativo"],
      treatmentsTitle: "Protocolos",
      treatmentsLead: "Cada protocolo abre con un análisis de piel y cierra con una rutina en casa que sí puedes mantener.",
      treatments: [
        { title: "Diagnóstico de piel", desc: "Imagen multiespectral, mapa de hidratación y elasticidad con plan escrito.", meta: "40 min", price: "R$ 350" },
        { title: "Protocolo glow", desc: "Peeling, microagujas y LED en una sesión para luminosidad inmediata.", meta: "60 min", price: "R$ 890" },
        { title: "Volumen natural", desc: "Relleno hialurónico mapeado a tus proporciones — mililitro a mililitro.", meta: "45 min", price: "R$ 1.890" },
        { title: "Equilibrio de expresión", desc: "Toxina botulínica colocada para suavizar líneas sin perder tus expresiones.", meta: "30 min", price: "R$ 1.290" },
        { title: "Láser fraccionado", desc: "Renovación de textura, poros y pigmento con 48 horas de recuperación social.", meta: "50 min", price: "R$ 1.590" },
        { title: "Bioestimulación", desc: "Bioestimuladores de colágeno para una firmeza que crece a lo largo de tres meses.", meta: "60 min", price: "R$ 2.490" },
      ],
      highlightsTitle: "Cómo mantenemos la sutileza",
      highlights: [
        { title: "Medido, no a ojo", desc: "Las proporciones faciales se mapean digitalmente antes de planificar una sola aplicación." },
        { title: "Siempre por debajo primero", desc: "Empezamos por debajo del objetivo y refinamos en una revisión gratuita a las dos semanas. Siempre se puede añadir." },
        { title: "Piel antes que jeringa", desc: "La reparación de la barrera y el control del pigmento van primero — la mitad de nuestros pacientes no necesita más." },
      ],
      processTitle: "Tu recorrido",
      process: [
        { n: "01", title: "Analizar", desc: "Imagen, historia y conversación honesta sobre lo que funcionará y lo que no." },
        { n: "02", title: "Mapear", desc: "Un protocolo escrito con secuencia, coste y cronograma esperado." },
        { n: "03", title: "Tratar", desc: "Anestesia tópica, técnica con cánula siempre que sea posible y cuidados posteriores en el bolso." },
        { n: "04", title: "Revisar", desc: "Control gratuito a las dos semanas para afinar el resultado juntos." },
      ],
      faqTitle: "Preguntas de estética",
      faq: [
        { q: "¿La gente se dará cuenta?", a: "Es justo contra lo que planificamos. Tratamos por debajo a propósito y revisamos a las dos semanas, para que el cambio se lea como descanso." },
        { q: "¿Cuánto dura la recuperación?", a: "Inyectables: unas horas de pequeñas marcas. Peelings y láser: 48 horas de descamación o rojez, fáciles de cubrir." },
        { q: "¿El relleno es seguro?", a: "Los rellenos hialurónicos son reversibles y solo usamos productos certificados y trazables, aplicados por médicos y con agente disolvente en la clínica." },
      ],
    },

    medical: {
      eyebrow: "Estudio 03",
      title: "Atención",
      titleAccent: "Médica",
      lead:
        "Un médico de familia que sabe tu nombre, chequeos ejecutivos completados en una mañana y resultados explicados en lenguaje claro.",
      chips: ["Medicina familiar", "Chequeos", "Laboratorio e imagen", "Vacunación"],
      treatmentsTitle: "Servicios",
      treatmentsLead: "Atención preventiva y continua para adultos, niños y las personas a su cargo.",
      treatments: [
        { title: "Consulta familiar", desc: "Citas sin prisa de 30 minutos, siempre con el mismo médico.", meta: "30 min", price: "R$ 350" },
        { title: "Chequeo ejecutivo", desc: "Analítica, valoración cardíaca, imagen y una hora de devolución en una sola mañana.", meta: "180 min", price: "R$ 2.900" },
        { title: "Laboratorio", desc: "Extracción en la clínica con la mayoría de resultados en tu portal en 24 horas.", meta: "15 min", price: "desde R$ 120" },
        { title: "Valoración cardíaca", desc: "ECG, prueba de esfuerzo y puntuación de riesgo para deporte y aptitud laboral.", meta: "60 min", price: "R$ 790" },
        { title: "Vacunación y viajes", desc: "Calendarios de rutina más consejo por destino y emisión de certificados.", meta: "20 min", price: "desde R$ 180" },
        { title: "Seguimiento crónico", desc: "Programas estructurados para tensión, diabetes, tiroides y colesterol.", meta: "Mensual", price: "R$ 249/mes" },
      ],
      highlightsTitle: "Lo que aporta la continuidad",
      highlights: [
        { title: "El mismo médico", desc: "No eres una rotación. Tu médico conserva tu expediente y conoce tu historia de memoria." },
        { title: "Resultados en un día", desc: "La mayoría de la analítica vuelve en 24 horas, con un mensaje que explica qué significa." },
        { title: "Especialidades conectadas", desc: "Derivaciones dentro del edificio — infecciones dentales, lesiones de piel, sueño y vía aérea tratados en conjunto." },
      ],
      processTitle: "Tu recorrido",
      process: [
        { n: "01", title: "Registrarte", desc: "Diez minutos en línea y tu historia llega antes que tú." },
        { n: "02", title: "Consultar", desc: "Una cita sin prisa, con exploración y resumen por escrito." },
        { n: "03", title: "Investigar", desc: "Analítica e imagen en la clínica, con resultados explicados, no solo enviados." },
        { n: "04", title: "Seguir", desc: "Revisiones programadas y acceso por mensaje entre citas." },
      ],
      faqTitle: "Preguntas de medicina",
      faq: [
        { q: "¿Puedo escribir a mi médico entre citas?", a: "Sí. Cada paciente tiene un hilo seguro de mensajes y respondemos en un día hábil." },
        { q: "¿Atienden a niños?", a: "Sí — desde controles de crecimiento y vacunación hasta cuadros agudos en niños en edad escolar." },
        { q: "¿Cuánto dura un chequeo?", a: "El chequeo ejecutivo completo va de 08:00 a cerca de las 11:00, incluida la devolución. Sales con el informe en la mano." },
      ],
    },

    about: {
      eyebrow: "Sobre la clínica",
      title: "Una clínica construida como",
      titleAccent: "querríamos que nos trataran",
      lead:
        "Aurélia abrió en 2007 con dos salas y una idea: que la medicina puede ser excelente y cálida a la vez. Dieciocho años después ocupamos todo el edificio — y la idea sigue igual.",
      storyTitle: "Nuestra historia",
      story: [
        "Empezamos como una consulta dental de dos salas en el segundo piso. Los pacientes preguntaban si conocíamos a un buen dermatólogo, a un buen médico general, a alguien que de verdad contestara el teléfono. Así que los trajimos con nosotros.",
        "Hoy tres estudios comparten un sistema de historia clínica, una sala de espera y un mismo conjunto de estándares. El edificio se restauró alrededor de la luz: patio ajardinado, ventanales altos y salas de tratamiento que no se parecen en nada a las que temes.",
        "Seguimos independientes a propósito. Sin grupo, sin cuotas, sin guiones de venta — solo un equipo que puede decir 'no necesitas esto' y decirlo en serio.",
      ],
      valuesTitle: "Lo que sostenemos",
      values: [
        { title: "Honestidad antes que facturación", desc: "Si no necesitas tratamiento, lo decimos. Nos cuesta dinero y nos da pacientes de por vida." },
        { title: "El tiempo como medicina", desc: "Citas más largas, menos por día. La prisa es donde empiezan los errores y la ansiedad." },
        { title: "Evidencia, no tendencia", desc: "Los protocolos siguen la evidencia publicada y se retiran en cuanto aparecen mejores datos." },
        { title: "Diseño como cuidado", desc: "Luz, sonido, aroma y asientos son decisiones clínicas aquí, no decoración." },
      ],
      credentialsTitle: "Estándares y acreditación",
      credentials: [
        { label: "ISO 13485", desc: "Esterilización y gestión de equipos" },
        { label: "CRO/CRM", desc: "Registro profesional completo" },
        { label: "GDPR y LGPD", desc: "Protección de datos del paciente" },
        { label: "WCAG 2.2 AA", desc: "Servicios digitales accesibles" },
      ],
      buildTitle: "Diseñado y construido en casa",
      buildLead:
        "El sitio de la clínica, el flujo de reservas y el portal del paciente no están subcontratados. Los diseña, desarrolla y mantiene nuestro propio estudio — con el mismo cuidado que las salas de tratamiento.",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Ven a conocer",
      titleAccent: "la luz",
      lead:
        "Reserva en línea en menos de un minuto o envía un mensaje: una persona — no un bot — responde el mismo día hábil.",
      formTitle: "Solicitar una cita",
      formLead: "Cuéntanos un poco y te proponemos dos horarios que encajen.",
      name: "Nombre completo",
      namePlaceholder: "María Silva",
      email: "Correo electrónico",
      emailPlaceholder: "maria@email.com",
      phone: "Teléfono / WhatsApp",
      phonePlaceholder: "+55 11 90000-0000",
      service: "¿De qué se trata?",
      serviceOptions: ["Odontología", "Estética", "Medicina", "Aún no lo sé"],
      preferred: "Horario preferido",
      preferredOptions: ["Mañana", "Tarde", "Noche", "Cualquiera"],
      message: "Mensaje",
      messagePlaceholder: "¿Qué te gustaría resolver?",
      consent: "Acepto que Aurélia me contacte sobre esta solicitud.",
      submit: "Enviar solicitud",
      sending: "Enviando…",
      success: "Gracias — tenemos tu solicitud.",
      successBody: "Nuestra recepción responderá en un día hábil con dos horarios propuestos.",
      again: "Enviar otra",
      required: "Completa este campo, por favor.",
      invalidEmail: "Introduce un correo electrónico válido.",
      infoTitle: "Líneas directas",
      hoursTitle: "Horario de atención",
      hours: [
        { d: "Lunes – Viernes", h: "08:00 – 20:00" },
        { d: "Sábado", h: "09:00 – 15:00" },
        { d: "Domingo", h: "Cerrado" },
        { d: "Urgencias", h: "A diario · 08:00 – 09:00" },
      ],
      mapTitle: "Dónde estamos",
      mapLead: "Av. Paulista 1600, São Paulo — a dos minutos de la estación Trianon-Masp, con estacionamiento propio.",
      directions: "Cómo llegar",
      channels: [
        { label: "Recepción", value: "+55 11 4000-2020" },
        { label: "WhatsApp", value: "+55 11 90000-2020" },
        { label: "Correo", value: "hola@aureliaclinic.com" },
        { label: "Urgencias", value: "+55 11 4000-2099" },
      ],
    },
  },

  meta: {
    home: {
      title: "Clínica Aurélia — Odontología, Estética y Medicina",
      description:
        "Una clínica llena de luz para tu sonrisa, tu piel y tu salud. Odontología digital, medicina estética y medicina familiar en São Paulo — en español, inglés y portugués.",
    },
    dental: {
      title: "Estudio Dental — Clínica Aurélia",
      description:
        "Diseño digital de sonrisa, implantes guiados, alineadores invisibles y odontopediatría delicada, planificados en 3D antes de empezar.",
    },
    aesthetics: {
      title: "Laboratorio de Estética — Clínica Aurélia",
      description:
        "Medicina estética que empieza por la piel: análisis, peelings, inyectables, láser y protocolos regenerativos con resultados que se leen como descanso.",
    },
    medical: {
      title: "Atención Médica — Clínica Aurélia",
      description:
        "Medicina familiar, chequeos ejecutivos, laboratorio propio y vacunación, con continuidad de cuidado y resultados en 24 horas.",
    },
    about: {
      title: "Nosotros — Clínica Aurélia",
      description:
        "Dieciocho años de atención independiente en una casona restaurada: nuestra historia, nuestros estándares y la tecnología que construimos en casa.",
    },
    contact: {
      title: "Contacto y reservas — Clínica Aurélia",
      description:
        "Reserva tu visita en Av. Paulista 1600, São Paulo. Respuesta en un día hábil, en español, inglés o portugués.",
    },
  },

  common: {
    backHome: "Volver al inicio",
    notFoundTitle: "Esta página se tomó el día libre",
    notFoundLead: "El enlace que seguiste ya no existe — pero la clínica está muy abierta.",
    readMore: "Leer más",
    bookNow: "Reservar ahora",
    viewAll: "Ver todo",
    learnMore: "Saber más",
    playTour: "Reproducir el recorrido",
    pauseTour: "Pausar",
    ratingLabel: "valoración",
    of: "de",
  },
};

export default es;
