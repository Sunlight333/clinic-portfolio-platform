import type { Dictionary } from "./en";

const pt: Dictionary = {
  brand: {
    name: "Aurélia",
    suffix: "Clínica",
    tagline: "Odontologia · Estética · Medicina",
    claim: "Cuidado luminoso, feito para você.",
  },

  nav: {
    home: "Início",
    services: "Serviços",
    dental: "Odontologia",
    aesthetics: "Estética",
    medical: "Medicina",
    about: "Sobre",
    contact: "Contato",
    book: "Agendar visita",
    menu: "Menu",
    close: "Fechar",
    exploreAll: "Ver todos os serviços",
    language: "Idioma",
    languageHint: "Escolha o seu idioma",
    openMenu: "Abrir navegação",
    quickCall: "Ligar para a clínica",
    quickHours: "Seg–Sáb · 08h–20h",
  },

  navCards: {
    dental: {
      title: "Estúdio Odontológico",
      desc: "Design digital do sorriso, implantes, alinhadores invisíveis e higiene delicada.",
    },
    aesthetics: {
      title: "Laboratório de Estética",
      desc: "Saúde da pele, injetáveis, laser e protocolos faciais regenerativos.",
    },
    medical: {
      title: "Cuidado Médico",
      desc: "Medicina de família, check-ups executivos, diagnóstico e acompanhamento.",
    },
    about: {
      title: "A Clínica",
      desc: "Nossa equipe, nosso prédio, nossos padrões — e a tecnologia por trás disso.",
    },
    contact: {
      title: "Visite-nos",
      desc: "Agende on-line em menos de um minuto ou fale com uma pessoa de verdade hoje.",
    },
  },

  hero: {
    badge: "Recebendo novos pacientes",
    titleTop: "Saúde com",
    titleAccent: "a leveza",
    titleBottom: "da luz do dia",
    lead:
      "Um único endereço para o seu sorriso, a sua pele e a sua saúde. A Aurélia reúne odontologia, medicina estética e clínica geral em um espaço calmo e cheio de luz — com uma equipe que tem tempo para você.",
    ctaPrimary: "Agendar visita",
    ctaSecondary: "Fazer o tour",
    scroll: "Role para explorar",
    videoTitle: "Por dentro da Aurélia",
    videoSub: "Um passeio de 60 segundos",
    floatingRating: "avaliação dos pacientes",
    floatingSlot: "Próximo horário",
    floatingSlotValue: "Hoje · 16h30",
    stats: [
      { value: "18", suffix: "anos", label: "de cuidado clínico" },
      { value: "42", suffix: "mil", label: "tratamentos realizados" },
      { value: "3", suffix: "", label: "especialidades, um só lugar" },
    ],
  },

  marquee: {
    items: [
      "Atendimento na mesma semana",
      "Diagnóstico digital",
      "Equipe trilíngue",
      "Protocolos sem dor",
      "Preços transparentes",
      "Esterilização ISO 13485",
      "Acolhemos famílias",
      "Horário noturno",
    ],
  },

  services: {
    eyebrow: "Três especialidades",
    title: "Tudo o que o seu corpo pede, sob o mesmo teto acolhedor",
    lead:
      "Chega de atravessar a cidade. Nossos três estúdios compartilham um prontuário, uma equipe e um mesmo padrão de cuidado — assim seu dentista, seu dermatologista e seu médico realmente conversam entre si.",
    cta: "Conhecer",
    cards: {
      dental: {
        tag: "Estúdio 01",
        title: "Odontologia",
        desc:
          "De uma limpeza tranquila ao design digital completo do sorriso — planejado em 3D antes de tocarmos em um dente.",
        points: ["Design digital do sorriso", "Implantes e próteses", "Alinhadores invisíveis", "Odontopediatria"],
      },
      aesthetics: {
        tag: "Estúdio 02",
        title: "Estética",
        desc:
          "Medicina estética que começa pela pele. Sutil, baseada em evidências e sempre voltada a parecer uma versão descansada de você.",
        points: ["Análise de pele e peelings", "Injetáveis e preenchimentos", "Laser e radiofrequência", "Faciais regenerativos"],
      },
      medical: {
        tag: "Estúdio 03",
        title: "Medicina",
        desc:
          "Seu médico de família, check-ups executivos e exames laboratoriais — com resultados explicados em linguagem simples.",
        points: ["Medicina de família", "Check-up executivo", "Laboratório e imagem", "Vacinas e viagem"],
      },
    },
  },

  signature: {
    eyebrow: "Tratamentos assinatura",
    title: "Os protocolos pelos quais as pessoas viajam",
    lead: "Seis programas que definem o jeito Aurélia de cuidar: medido, gentil e acabado no milímetro.",
    duration: "Duração",
    from: "a partir de",
    items: [
      {
        title: "Design Digital do Sorriso",
        desc: "Seu sorriso simulado em 3D, aprovado por você e depois fresado exatamente conforme o plano.",
        meta: "90 min",
        price: "R$ 2.400",
        badge: "Mais procurado",
      },
      {
        title: "Implantodontia Guiada",
        desc: "Instalação guiada por computador — incisões menores, recuperação mais rápida, resultado previsível.",
        meta: "120 min",
        price: "R$ 6.900",
        badge: "",
      },
      {
        title: "Protocolo Glow",
        desc: "Peeling, microagulhamento e LED em uma sessão para uma pele que reflete a luz.",
        meta: "60 min",
        price: "R$ 890",
        badge: "Novo",
      },
      {
        title: "Volume Natural",
        desc: "Preenchimento com ácido hialurônico mapeado nas suas proporções. Nada além do que você pediu.",
        meta: "45 min",
        price: "R$ 1.890",
        badge: "",
      },
      {
        title: "Check-up Executivo",
        desc: "Exames de sangue, avaliação cardíaca, imagem e uma hora de devolutiva — tudo em uma única manhã.",
        meta: "180 min",
        price: "R$ 2.900",
        badge: "",
      },
      {
        title: "Acompanhamento Familiar",
        desc: "Um médico que conhece a sua casa, acessível por mensagem entre as consultas.",
        meta: "Anual",
        price: "R$ 249/mês",
        badge: "Plano",
      },
    ],
  },

  approach: {
    eyebrow: "Como funciona",
    title: "Quatro passos calmos, sem surpresas",
    lead:
      "Desenhamos a jornada do paciente do mesmo jeito que desenhamos nossas salas — tudo onde você espera encontrar, nada com pressa.",
    steps: [
      {
        n: "01",
        title: "Conversa primeiro",
        desc: "Vinte minutos de conversa — presencial ou por vídeo — antes de qualquer proposta de tratamento.",
      },
      {
        n: "02",
        title: "Veja o plano",
        desc: "Escaneamento 3D, fotografias e um plano escrito com preço fixo. Você sai com uma cópia.",
      },
      {
        n: "03",
        title: "Tratamento gentil",
        desc: "Sessões com controle de conforto, mantas aquecidas, fones com cancelamento de ruído e pausas quando quiser.",
      },
      {
        n: "04",
        title: "Sempre por perto",
        desc: "Mensagens de acompanhamento, lembretes e revisão anual — seu prontuário fica sempre disponível para você.",
      },
    ],
  },

  impact: {
    eyebrow: "Por que a Aurélia",
    title: "Precisão clínica, calor de hospitalidade",
    lead:
      "Medimos tudo o que fazemos — do minuto de espera na recepção ao milímetro da margem de uma restauração.",
    videoCaption: "Luz ambiente no Estúdio 02",
    stats: [
      { value: "98", suffix: "%", label: "recomendariam a clínica" },
      { value: "4", suffix: "min", label: "de espera em média" },
      { value: "24", suffix: "h", label: "para responder qualquer mensagem" },
      { value: "12", suffix: "", label: "especialistas na equipe" },
    ],
    pillars: [
      {
        title: "Um prontuário compartilhado",
        desc: "Odontologia, estética e medicina leem o mesmo arquivo. Sem exames repetidos, sem histórico perdido.",
      },
      {
        title: "Preços fixos e por escrito",
        desc: "Todo plano tem um preço que você aprova antes de começar. Nenhum item aparece depois.",
      },
      {
        title: "Conforto projetado",
        desc: "Salas com luz natural, equipamentos silenciosos, opções de sedação e equipe treinada em ansiedade odontológica.",
      },
    ],
  },

  tech: {
    eyebrow: "Projetado e desenvolvido internamente",
    title: "A tecnologia por trás da calma",
    lead:
      "Este site — e a plataforma clínica por trás dele — foi desenhado e construído de ponta a ponta: agendamento, prontuário, conteúdo multilíngue e um design system que mantém cada página fiel à marca.",
    author: "Design e desenvolvimento",
    authorRole: "Product designer e engenheira full-stack",
    authorBio:
      "Construo experiências de saúde que soam humanas: interfaces acessíveis, páginas rápidas e movimento discreto e cuidadoso. A Aurélia é o meu projeto de estúdio — cada pixel, componente e query é meu.",
    capabilitiesTitle: "O que eu trago para um projeto clínico",
    capabilities: [
      {
        title: "Design systems",
        desc: "Tokens, componentes e documentação para que a marca sobreviva à décima página.",
      },
      {
        title: "Movimento e 3D",
        desc: "Coreografia de scroll, profundidade em parallax e acentos WebGL que nunca disputam com o conteúdo.",
      },
      {
        title: "Internacionalização",
        desc: "Rotas por idioma, metadados traduzidos e textos que soam nativos em cada mercado.",
      },
      {
        title: "Acessibilidade",
        desc: "Contraste WCAG 2.2 AA, navegação por teclado, movimento reduzido e semântica para leitores de tela.",
      },
      {
        title: "Performance",
        desc: "Server components, pipeline de imagens e Core Web Vitals tratados como restrição de design.",
      },
      {
        title: "Agendamento e dados",
        desc: "Agenda, formulários, prontuários criptografados, pagamentos e analytics ligados a fluxos reais.",
      },
    ],
    metrics: [
      { value: "100", label: "SEO no Lighthouse" },
      { value: "98", label: "Performance" },
      { value: "AA", label: "WCAG 2.2" },
      { value: "3", label: "Idiomas" },
    ],
  },

  team: {
    eyebrow: "As pessoas",
    title: "Doze especialistas. Um só padrão.",
    lead:
      "Todo profissional da Aurélia ensina, publica ou orienta — e todos falam pelo menos dois dos nossos três idiomas.",
    cta: "Conhecer a equipe completa",
    open: "Ver perfil",
    modal: {
      focus: "Foco",
      credentials: "Formação e credenciais",
      languages: "Idiomas",
      book: "Agendar visita",
      close: "Fechar",
    },
    members: [
      {
        name: "Dra. Helena Marques",
        role: "Diretora clínica · Implantodontia",
        focus: "Cirurgia guiada, reabilitação total",
        bio: "Helena criou o programa de implantes da Aurélia e ainda planeja pessoalmente cada caso de arcada completa. Dá aulas de cirurgia guiada por toda a Europa e já instalou mais de quatro mil implantes.",
        credentials: [
          "Odontologia, Universidade de Lisboa",
          "Fellowship em implantodontia oral, Gotemburgo",
          "Conselheira da Sociedade Portuguesa de Implantologia",
        ],
        languages: "Português · Inglês · Espanhol",
      },
      {
        name: "Dr. Tomás Ferreira",
        role: "Medicina estética",
        focus: "Injetáveis, protocolos regenerativos de pele",
        bio: "Tomás trata rostos como um retratista: primeiro a proporção, depois o produto. Conduz nossos protocolos de injetáveis e de regeneração de pele e treina o restante da equipe estética.",
        credentials: [
          "Medicina, Universidade de Coimbra",
          "Diploma em medicina estética, Barcelona",
          "Instrutor certificado em anatomia facial",
        ],
        languages: "Português · Inglês · Francês",
      },
      {
        name: "Dra. Camila Duarte",
        role: "Medicina de família",
        focus: "Prevenção, acompanhamento de crônicos",
        bio: "Camila cuida das famílias que estão com a clínica há anos — primeiras consultas, acompanhamento de crônicos e os encaminhamentos no meio do caminho. Tem a maior lista de pacientes da Aurélia e lembra de todos.",
        credentials: [
          "Medicina, Universidade de São Paulo",
          "Residência em medicina de família, Hospital das Clínicas",
          "Pós-graduação em medicina preventiva",
        ],
        languages: "Português · Espanhol · Inglês",
      },
      {
        name: "Dr. Rafael Nunes",
        role: "Ortodontia",
        focus: "Alinhadores invisíveis, tratamento adulto",
        bio: "Rafael planeja cada caso de alinhadores em ambiente digital e mostra o resultado ao paciente antes de começar. Atende quase só adultos, inclusive quem ouviu na adolescência que já era tarde.",
        credentials: [
          "Odontologia, Universidade do Porto",
          "Mestrado em ortodontia, Valência",
          "Provedor Invisalign Diamond certificado",
        ],
        languages: "Português · Inglês",
      },
      {
        name: "Dra. Beatriz Salgado",
        role: "Dermatologia",
        focus: "Acne, melasma, laser fracionado",
        bio: "Beatriz montou nossa dermatologia em torno de planos longos, e não de sessões avulsas — protocolos de acne e melasma medidos em meses, com fotografia a cada etapa.",
        credentials: [
          "Medicina, Universidade de Brasília",
          "Residência em dermatologia, Santa Casa",
          "Membro da Sociedade Brasileira de Dermatologia",
        ],
        languages: "Português · Inglês · Espanhol",
      },
      {
        name: "Dr. Nuno Vilela",
        role: "Cirurgia oral",
        focus: "Sisos, enxerto ósseo, microendodontia",
        bio: "Nuno recebe os casos que outras clínicas encaminham: molares inclusos, enxerto ósseo e a microendodontia que salva o dente que todo mundo já tinha dado como perdido.",
        credentials: [
          "Odontologia, Universidade de Coimbra",
          "Especialista em cirurgia oral, Ordem dos Médicos Dentistas",
          "Microcirurgia avançada, Zurique",
        ],
        languages: "Português · Inglês · Espanhol",
      },
      {
        name: "Dr. Elias Bonfim",
        role: "Anestesia · Sedação",
        focus: "Sedação consciente, protocolos de ansiedade",
        bio: "Elias torna possíveis as consultas longas para quem não aguenta nem as curtas. Conduz a sedação consciente dos procedimentos odontológicos e estéticos e acompanha pessoalmente cada recuperação.",
        credentials: [
          "Medicina, Universidade Federal da Bahia",
          "Residência em anestesiologia",
          "Certificado em sedação consciente e ACLS",
        ],
        languages: "Português · Inglês",
      },
    ],
  },

  nurses: {
    eyebrow: "Equipe de enfermagem",
    title: "Quem fica ao lado da cadeira",
    lead:
      "Nossas enfermeiras preparam cada sala, acompanham todo o procedimento e fazem a ligação de retorno — são elas que os pacientes lembram pelo nome.",
    members: [
      { name: "Marta Coelho", role: "Enfermeira-chefe", focus: "Coordenação de salas, protocolo estéril" },
      { name: "Inês Barbosa", role: "Enfermeira de odontologia", focus: "Trabalho a quatro mãos, preparo cirúrgico" },
      { name: "Carla Nogueira", role: "Enfermeira pediátrica", focus: "Primeiras visitas, crianças ansiosas" },
      { name: "Sofia Mendes", role: "Enfermeira de recuperação", focus: "Monitorização da sedação, alta" },
      { name: "Luana Prado", role: "Enfermeira de estética", focus: "Peelings, cuidados pós-procedimento" },
    ],
  },

  testimonials: {
    eyebrow: "Histórias de pacientes",
    title: "A parte que mais nos orgulha",
    lead: "Avaliações coletadas de visitas verificadas nos nossos três estúdios.",
    items: [
      {
        quote:
          "Eu evitava dentista havia onze anos. Deixaram eu passar a primeira consulta sem um único instrumento na bandeja — só conversando. Dois anos depois, minha família inteira se trata aqui.",
        name: "Marina Castro",
        role: "Paciente · Odontologia",
      },
      {
        quote:
          "Sutil é a palavra. Ninguém perguntou o que eu tinha feito; três pessoas perguntaram se eu tinha viajado de férias. Era exatamente o que eu queria.",
        name: "Julia Bennett",
        role: "Paciente · Estética",
      },
      {
        quote:
          "Meu check-up executivo terminou antes do almoço e foi explicado como se eu fosse adulta, não um gráfico. A mensagem de acompanhamento chegou na mesma noite.",
        name: "André Lopes",
        role: "Paciente · Medicina",
      },
      {
        quote:
          "Reconstruíram um sorriso que eu escondia desde a escola. Com a prévia em 3D eu já sabia o resultado antes de começarmos.",
        name: "Sofia Ribeiro",
        role: "Paciente · Odontologia",
      },
    ],
  },

  facility: {
    eyebrow: "O prédio",
    title: "Nove salas, uma janela sem fim",
    lead:
      "Um casarão dos anos 1930 restaurado, com pátio ajardinado — luz natural em cada sala de atendimento e uma sala de espera da qual ninguém quer sair.",
    tags: ["Pátio ajardinado", "Salas com luz natural", "Esterilização silenciosa", "Cantinho infantil", "Acesso sem barreiras", "Estacionamento próprio"],
  },

  faq: {
    eyebrow: "Bom saber",
    title: "Perguntas que ouvimos toda semana",
    items: [
      {
        q: "Vocês atendem em inglês, português e espanhol?",
        a: "Sim. Recepção e equipe clínica trabalham nos três idiomas, e todo documento — plano, consentimento, nota fiscal — é emitido no idioma que você escolher.",
      },
      {
        q: "Em quanto tempo consigo ser atendido?",
        a: "A maioria dos novos pacientes é atendida em até cinco dias úteis. Guardamos horários no mesmo dia para dor e urgências; ligue antes das 9h e encaixamos você.",
      },
      {
        q: "Quanto custa a primeira consulta?",
        a: "A primeira conversa é gratuita nos três estúdios. Exames — escaneamento, sangue, análise de pele — são orçados antes de serem feitos, nunca depois.",
      },
      {
        q: "Os tratamentos têm cobertura de convênio?",
        a: "Trabalhamos com os principais convênios nacionais e internacionais e emitimos notas detalhadas para reembolso. A recepção confere o seu plano antes de qualquer compromisso.",
      },
      {
        q: "Tenho medo de dentista. O que vocês fazem?",
        a: "Muita coisa. Sedação consciente, consultas mais longas, sinais combinados para parar, fones com cancelamento de ruído e equipe treinada em ansiedade odontológica.",
      },
      {
        q: "Posso agendar on-line?",
        a: "Pode — leva menos de um minuto e a confirmação chega na hora, além de um lembrete 24 horas antes com o caminho e as informações de estacionamento.",
      },
    ],
  },

  cta: {
    eyebrow: "Sua vez",
    title: "Vamos começar por uma conversa",
    lead:
      "Vinte minutos, sem compromisso e sem instrumentos. Conte o que está incomodando e diremos com honestidade se podemos ajudar.",
    primary: "Agendar visita",
    secondary: "Ligar +55 11 4000-2020",
    note: "Seg–Sáb · 08h–20h · Av. Paulista 1600, São Paulo",
  },

  footer: {
    blurb:
      "Odontologia, estética e medicina em uma clínica cheia de luz. Projetada, construída e mantida internamente.",
    servicesTitle: "Serviços",
    clinicTitle: "Clínica",
    contactTitle: "Contato",
    newsletterTitle: "Cartas luminosas",
    newsletterDesc: "Um e-mail curto por mês: dicas de prevenção, novos protocolos, horários livres.",
    newsletterPlaceholder: "seu@email.com",
    newsletterCta: "Inscrever",
    newsletterNote: "Sem ruído de marketing. Cancele com um clique.",
    rights: "Todos os direitos reservados.",
    legal: ["Privacidade", "Termos", "Cookies"],
    address: "Av. Paulista 1600 · São Paulo · Brasil",
    phone: "+55 11 4000-2020",
    email: "ola@aureliaclinic.com",
    hours: "Seg–Sex 08h–20h · Sáb 09h–15h",
  },

  pages: {
    dental: {
      eyebrow: "Estúdio 01",
      title: "Estúdio",
      titleAccent: "Odontológico",
      lead:
        "Odontologia digital com toque silencioso. Todo plano começa com um escaneamento 3D e termina em um sorriso que você reconhece como seu.",
      chips: ["Design digital do sorriso", "Implantes guiados", "Alinhadores invisíveis", "Odontopediatria"],
      treatmentsTitle: "Tratamentos",
      treatmentsLead: "Escopo transparente, preço transparente. Tudo abaixo inclui acompanhamento.",
      treatments: [
        { title: "Higiene preventiva", desc: "Limpeza ultrassônica, polimento e um protocolo caseiro personalizado.", meta: "45 min", price: "R$ 290" },
        { title: "Design digital do sorriso", desc: "Simulação 3D, prévia em enceramento e lentes cerâmicas fresadas conforme o plano.", meta: "90 min", price: "R$ 2.400" },
        { title: "Implantodontia guiada", desc: "Instalação planejada por computador, com guia cirúrgico e provisório imediato.", meta: "120 min", price: "R$ 6.900" },
        { title: "Alinhadores invisíveis", desc: "Alinhamento completo com monitoramento remoto entre as consultas.", meta: "8–14 meses", price: "R$ 14.900" },
        { title: "Endodontia", desc: "Tratamento de canal assistido por microscópio, normalmente em uma sessão.", meta: "80 min", price: "R$ 1.200" },
        { title: "Odontopediatria", desc: "Uma primeira visita construída como brincadeira — sem motor, sem jaleco, sem medo.", meta: "30 min", price: "R$ 220" },
      ],
      highlightsTitle: "Por que os pacientes escolhem este estúdio",
      highlights: [
        { title: "Escanear, não adivinhar", desc: "Escaneamento intraoral e tomografia substituem a moldagem — sem moldeiras, sem ânsia, precisão submilimétrica." },
        { title: "Cerâmica em uma visita", desc: "Nossa fresadora interna produz coroas e lentes enquanto você espera na sala de estar." },
        { title: "Protocolo de ansiedade", desc: "Sinais combinados para parar, sedação consciente e consultas tão longas quanto você precisar." },
      ],
      processTitle: "Seu caminho",
      process: [
        { n: "01", title: "Escanear e conversar", desc: "Escaneamento 3D completo, fotografias e uma conversa sobre o que você realmente quer." },
        { n: "02", title: "Prévia", desc: "Veja o resultado antes de começarmos — aprove, ajuste ou desista." },
        { n: "03", title: "Tratar", desc: "Sessões planejadas conforme a sua agenda, com conforto controlado do início ao fim." },
        { n: "04", title: "Manter", desc: "Revisões semestrais e um plano de higiene que mantém o trabalho como novo." },
      ],
      faqTitle: "Dúvidas de odontologia",
      faq: [
        { q: "A cirurgia de implante dói?", a: "A instalação guiada é feita sob anestesia local por uma pequena abertura. A maioria toma um analgésico leve na primeira noite e nada depois disso." },
        { q: "Quanto duram as lentes de cerâmica?", a: "Com boa higiene e placa noturna quando indicada, as cerâmicas modernas passam facilmente de quinze anos. Revisamos em cada consulta de higiene." },
        { q: "Alinhadores resolvem o meu caso?", a: "Na maioria dos apinhamentos, espaçamentos e alterações leves de mordida, sim. Escaneamos primeiro e mostramos a posição final simulada antes de qualquer compromisso." },
      ],
    },

    aesthetics: {
      eyebrow: "Estúdio 02",
      title: "Laboratório",
      titleAccent: "de Estética",
      lead:
        "Saúde da pele primeiro, cosmética depois. Tratamos o tecido, não a tendência — para um resultado que parece descanso, não intervenção.",
      chips: ["Análise de pele", "Injetáveis", "Laser e RF", "Regenerativo"],
      treatmentsTitle: "Protocolos",
      treatmentsLead: "Todo protocolo abre com uma análise de pele e fecha com uma rotina caseira que você consegue manter.",
      treatments: [
        { title: "Diagnóstico de pele", desc: "Imagem multiespectral, mapa de hidratação e elasticidade com plano por escrito.", meta: "40 min", price: "R$ 350" },
        { title: "Protocolo glow", desc: "Peeling, microagulhamento e LED em uma sessão para luminosidade imediata.", meta: "60 min", price: "R$ 890" },
        { title: "Volume natural", desc: "Preenchimento hialurônico mapeado nas suas proporções — mililitro a mililitro.", meta: "45 min", price: "R$ 1.890" },
        { title: "Equilíbrio de expressão", desc: "Toxina botulínica aplicada para suavizar linhas mantendo as suas expressões.", meta: "30 min", price: "R$ 1.290" },
        { title: "Laser fracionado", desc: "Renovação de textura, poros e pigmento com 48 horas de recuperação social.", meta: "50 min", price: "R$ 1.590" },
        { title: "Bioestimulação", desc: "Bioestimuladores de colágeno para firmeza que cresce ao longo de três meses.", meta: "60 min", price: "R$ 2.490" },
      ],
      highlightsTitle: "Como mantemos a sutileza",
      highlights: [
        { title: "Medido, não no olho", desc: "As proporções faciais são mapeadas digitalmente antes de planejar qualquer aplicação." },
        { title: "Sempre aquém primeiro", desc: "Começamos abaixo do alvo e refinamos em uma revisão gratuita de duas semanas. Sempre dá para acrescentar." },
        { title: "Pele antes da seringa", desc: "Reparo de barreira e controle de pigmento vêm primeiro — metade dos nossos pacientes não precisa de mais nada." },
      ],
      processTitle: "Seu caminho",
      process: [
        { n: "01", title: "Analisar", desc: "Imagem, histórico e conversa honesta sobre o que vai e o que não vai funcionar." },
        { n: "02", title: "Mapear", desc: "Um protocolo escrito com sequência, custo e cronograma esperado." },
        { n: "03", title: "Tratar", desc: "Anestesia tópica, técnica com cânula sempre que possível e pós-procedimento na bolsa." },
        { n: "04", title: "Revisar", desc: "Retorno gratuito em duas semanas para refinar o resultado junto com você." },
      ],
      faqTitle: "Dúvidas de estética",
      faq: [
        { q: "As pessoas vão perceber?", a: "É exatamente contra isso que planejamos. Aplicamos aquém de propósito e revisamos em duas semanas, para que a mudança leia como descanso." },
        { q: "Quanto tempo de recuperação?", a: "Injetáveis: algumas horas de marquinhas. Peelings e laser: 48 horas de descamação ou vermelhidão, fáceis de cobrir." },
        { q: "Preenchimento é seguro?", a: "Preenchedores hialurônicos são reversíveis e usamos apenas produtos certificados e rastreáveis, aplicados por médicos, com agente dissolvente disponível na clínica." },
      ],
    },

    medical: {
      eyebrow: "Estúdio 03",
      title: "Cuidado",
      titleAccent: "Médico",
      lead:
        "Um médico de família que sabe o seu nome, check-ups executivos concluídos em uma manhã e resultados explicados em linguagem simples.",
      chips: ["Medicina de família", "Check-ups", "Laboratório e imagem", "Vacinação"],
      treatmentsTitle: "Serviços",
      treatmentsLead: "Cuidado preventivo e contínuo para adultos, crianças e quem eles cuidam.",
      treatments: [
        { title: "Consulta de família", desc: "Consultas sem pressa de 30 minutos, sempre com o mesmo médico.", meta: "30 min", price: "R$ 350" },
        { title: "Check-up executivo", desc: "Sangue, avaliação cardíaca, imagem e uma hora de devolutiva em uma única manhã.", meta: "180 min", price: "R$ 2.900" },
        { title: "Laboratório", desc: "Coleta na clínica com a maioria dos resultados no portal em até 24 horas.", meta: "15 min", price: "a partir de R$ 120" },
        { title: "Avaliação cardíaca", desc: "ECG, teste de esforço e escore de risco para prática esportiva e liberação ocupacional.", meta: "60 min", price: "R$ 790" },
        { title: "Vacinas e viagem", desc: "Calendário de rotina, orientação por destino e emissão de certificados.", meta: "20 min", price: "a partir de R$ 180" },
        { title: "Acompanhamento crônico", desc: "Programas estruturados para pressão, diabetes, tireoide e colesterol.", meta: "Mensal", price: "R$ 249/mês" },
      ],
      highlightsTitle: "O que a continuidade traz",
      highlights: [
        { title: "O mesmo médico", desc: "Você não é um rodízio. Seu médico guarda o seu prontuário e conhece a sua história de cor." },
        { title: "Resultados em um dia", desc: "A maior parte dos exames volta em 24 horas, com uma mensagem explicando o que significa." },
        { title: "Especialidades conectadas", desc: "Encaminhamentos dentro do prédio — infecções dentárias, lesões de pele, sono e via aérea tratados em conjunto." },
      ],
      processTitle: "Seu caminho",
      process: [
        { n: "01", title: "Cadastrar", desc: "Dez minutos on-line e o seu histórico chega antes de você." },
        { n: "02", title: "Consultar", desc: "Uma consulta sem pressa, com exame físico e resumo por escrito." },
        { n: "03", title: "Investigar", desc: "Sangue e imagem na própria clínica, com resultados explicados, não apenas enviados." },
        { n: "04", title: "Acompanhar", desc: "Revisões agendadas e acesso por mensagem entre as consultas." },
      ],
      faqTitle: "Dúvidas de medicina",
      faq: [
        { q: "Posso mandar mensagem ao meu médico entre as consultas?", a: "Pode. Todo paciente tem um canal seguro de mensagens e respondemos em até um dia útil." },
        { q: "Vocês atendem crianças?", a: "Atendemos — de acompanhamento de crescimento e vacinação até quadros agudos em crianças em idade escolar." },
        { q: "Quanto tempo dura um check-up?", a: "O check-up executivo completo vai das 8h às 11h, incluindo a devolutiva. Você sai com o relatório em mãos." },
      ],
    },

    about: {
      eyebrow: "Sobre a clínica",
      title: "Uma clínica construída como",
      titleAccent: "gostaríamos de ser tratados",
      lead:
        "A Aurélia abriu em 2007 com duas salas e uma ideia: a de que medicina pode ser excelente e acolhedora ao mesmo tempo. Dezoito anos depois ocupamos o prédio inteiro — e a ideia continua a mesma.",
      storyTitle: "Nossa história",
      story: [
        "Começamos como um consultório odontológico de duas salas no segundo andar. Os pacientes viviam perguntando se conhecíamos um bom dermatologista, um bom clínico, alguém que realmente atendesse o telefone. Então trouxemos essas pessoas para dentro.",
        "Hoje três estúdios compartilham um sistema de prontuário, uma sala de espera e um mesmo conjunto de padrões. O prédio foi restaurado em torno da luz: pátio ajardinado, janelas altas e salas de atendimento que não lembram em nada aquelas que você teme.",
        "Continuamos independentes de propósito. Sem grupo, sem meta, sem roteiro de venda — só uma equipe que pode dizer 'você não precisa disso' e falar sério.",
      ],
      valuesTitle: "No que acreditamos",
      values: [
        { title: "Honestidade antes da receita", desc: "Se você não precisa de tratamento, dizemos. Custa dinheiro e nos dá pacientes para a vida toda." },
        { title: "Tempo como remédio", desc: "Consultas mais longas, menos por dia. A pressa é onde começam os erros e a ansiedade." },
        { title: "Evidência, não tendência", desc: "Os protocolos seguem evidência publicada e são aposentados assim que surgem dados melhores." },
        { title: "Design como cuidado", desc: "Luz, som, aroma e assentos são decisões clínicas aqui, não decoração." },
      ],
      credentialsTitle: "Padrões e certificações",
      credentials: [
        { label: "ISO 13485", desc: "Esterilização e gestão de equipamentos" },
        { label: "CRO/CRM", desc: "Registro profissional completo" },
        { label: "GDPR e LGPD", desc: "Proteção de dados do paciente" },
        { label: "WCAG 2.2 AA", desc: "Serviços digitais acessíveis" },
      ],
      buildTitle: "Projetado e construído internamente",
      buildLead:
        "O site da clínica, o fluxo de agendamento e o portal do paciente não são terceirizados. São desenhados, desenvolvidos e mantidos pelo nosso próprio estúdio — com o mesmo cuidado das salas de atendimento.",
    },

    contact: {
      eyebrow: "Contato",
      title: "Venha conhecer",
      titleAccent: "a luz",
      lead:
        "Agende on-line em menos de um minuto ou envie uma mensagem: uma pessoa — não um robô — responde no mesmo dia útil.",
      formTitle: "Solicitar agendamento",
      formLead: "Conte um pouco e propomos dois horários que caibam na sua agenda.",
      name: "Nome completo",
      namePlaceholder: "Maria Silva",
      email: "E-mail",
      emailPlaceholder: "maria@email.com",
      phone: "Telefone / WhatsApp",
      phonePlaceholder: "+55 11 90000-0000",
      service: "Sobre o que é?",
      serviceOptions: ["Odontologia", "Estética", "Medicina", "Ainda não sei"],
      preferred: "Horário preferido",
      preferredOptions: ["Manhã", "Tarde", "Noite", "Qualquer"],
      message: "Mensagem",
      messagePlaceholder: "O que você gostaria de resolver?",
      consent: "Concordo que a Aurélia entre em contato sobre esta solicitação.",
      submit: "Enviar solicitação",
      sending: "Enviando…",
      success: "Obrigada — recebemos a sua solicitação.",
      successBody: "Nossa recepção responde em até um dia útil com dois horários sugeridos.",
      again: "Enviar outra",
      required: "Preencha este campo, por favor.",
      invalidEmail: "Informe um e-mail válido.",
      infoTitle: "Canais diretos",
      hoursTitle: "Horário de funcionamento",
      hours: [
        { d: "Segunda – Sexta", h: "08h – 20h" },
        { d: "Sábado", h: "09h – 15h" },
        { d: "Domingo", h: "Fechado" },
        { d: "Urgências", h: "Todos os dias · 08h – 09h" },
      ],
      mapTitle: "Onde estamos",
      mapLead: "Av. Paulista 1600, São Paulo — dois minutos da estação Trianon-Masp, com estacionamento próprio.",
      directions: "Ver rota",
      channels: [
        { label: "Recepção", value: "+55 11 4000-2020" },
        { label: "WhatsApp", value: "+55 11 90000-2020" },
        { label: "E-mail", value: "ola@aureliaclinic.com" },
        { label: "Urgências", value: "+55 11 4000-2099" },
      ],
    },
  },

  meta: {
    home: {
      title: "Clínica Aurélia — Odontologia, Estética e Medicina",
      description:
        "Uma clínica cheia de luz para o seu sorriso, a sua pele e a sua saúde. Odontologia digital, medicina estética e clínica de família em São Paulo — em português, inglês e espanhol.",
    },
    dental: {
      title: "Estúdio Odontológico — Clínica Aurélia",
      description:
        "Design digital do sorriso, implantes guiados, alinhadores invisíveis e odontopediatria delicada, planejados em 3D antes do tratamento começar.",
    },
    aesthetics: {
      title: "Laboratório de Estética — Clínica Aurélia",
      description:
        "Medicina estética que começa pela pele: análise, peelings, injetáveis, laser e protocolos regenerativos com resultado que parece descanso.",
    },
    medical: {
      title: "Cuidado Médico — Clínica Aurélia",
      description:
        "Medicina de família, check-ups executivos, laboratório próprio e vacinação, com continuidade de cuidado e resultados em 24 horas.",
    },
    about: {
      title: "Sobre — Clínica Aurélia",
      description:
        "Dezoito anos de cuidado independente em um casarão restaurado: nossa história, nossos padrões e a tecnologia que construímos internamente.",
    },
    contact: {
      title: "Contato e agendamento — Clínica Aurélia",
      description:
        "Agende sua visita na Av. Paulista 1600, São Paulo. Resposta em até um dia útil, em português, inglês ou espanhol.",
    },
  },

  common: {
    backHome: "Voltar ao início",
    notFoundTitle: "Esta página tirou um dia de folga",
    notFoundLead: "O link que você seguiu não existe mais — mas a clínica está bem aberta.",
    readMore: "Ler mais",
    bookNow: "Agendar agora",
    viewAll: "Ver tudo",
    learnMore: "Saiba mais",
    playTour: "Reproduzir o tour",
    pauseTour: "Pausar",
    ratingLabel: "avaliação",
    of: "de",
  },
};

export default pt;
