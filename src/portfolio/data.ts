export type Lang = "pt" | "en";

export type NavItem = [string, string];

export interface SkillGroup {
  pt: string;
  en: string;
  items: string[];
  itemsByLang?: Record<Lang, string[]>;
}

export interface Project {
  id: string;
  title: string;
  num: string;
  tag: string;
  tagClr: string;
  tags?: string[];
  tagsClr?: string[];
  subtitle: Record<Lang, string>;
  desc: Record<Lang, string>;
  stack: string[];
  links: [string, string][];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface UiCopy {
  nav: NavItem[];
  subtitle: string;
  heroDesc: string;
  skillsTitle: string;
  expTitle: string;
  eduTitle: string;
  degreeLabel: string;
  langTitle: string;
  certTitle: string;
  projTitle: string;
  contTitle: string;
  footer: string;
  flipHint: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    pt: "Dados & Analytics",
    en: "Data & Analytics",
    items: [
      "Python (Pandas · NumPy · Scikit-Learn)",
      "PostgreSQL",
      "MongoDB",
      "PL/SQL",
      "Power BI",
      "Modelagem de Dados",
    ],
  },
  {
    pt: "Cloud & DevOps",
    en: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "GitHub", "CI/CD"],
    itemsByLang: {
      pt: ["Automação de Processos (n8n & Zapier)"],
      en: ["Process Automation (n8n & Zapier)"],
    },
  },
  {
    pt: "Backend",
    en: "Backend",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "Express", "APIs REST", "Selenium", "RPA"],
  },
  {
    pt: "Frontend",
    en: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    pt: "Metodologia",
    en: "Methodology",
    items: ["Scrum", "Kanban"],
  },
  {
    pt: "Arquitetura",
    en: "Architecture",
    items: ["MVC", "Microservices", "WebSocket"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "etlboxdv2",
    title: "ETLBOXDv2",
    num: "01",
    tag: "Eng. Dados",
    tagClr: "#10b981",
    tags: ["Eng. Dados", "Full stack"],
    tagsClr: ["#10b981", "#60a5fa"],
    subtitle: { pt: "Plataforma de ETL e Analytics", en: "ETL and Analytics platform" },
    desc: {
      pt: "Plataforma fullstack para ETL e analytics do Letterboxd com Streamlit, FastAPI e PostgreSQL. Inclui ingestão e enriquecimento em Python com scraping (BeautifulSoup/httpx), validação de ZIP, regras de consistência para evitar cargas parciais, APIs analíticas, cache no dashboard e testes automatizados com pytest.",
      en: "Fullstack Letterboxd ETL and analytics platform using Streamlit, FastAPI and PostgreSQL. It includes Python ingestion and enrichment with scraping (BeautifulSoup/httpx), ZIP validation, consistency rules to prevent partial loads, analytical APIs, dashboard caching and automated tests with pytest.",
    },
    stack: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "BeautifulSoup", "httpx", "pytest"],
    links: [["GitHub", "https://github.com/luccaspino/ETLBOXDv2"], ["Site", "https://etlboxd.streamlit.app"]],
  },
  {
    id: "gameboxd",
    title: "GameBoxd",
    num: "02",
    tag: "Full Stack",
    tagClr: "#60a5fa",
    subtitle: { pt: "Plataforma de jogos", en: "Game platform" },
    desc: {
      pt: "Plataforma para consulta, avaliação e gerenciamento de jogos com API externa, autenticação JWT e metodologia Scrum.",
      en: "Platform for consulting, reviewing and managing games using an external API, JWT authentication and Scrum methodology.",
    },
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [
      ["Site", "https://api-games.vercel.app"],
      ["Front", "https://github.com/Miltchola/api_games"],
      ["Back", "https://github.com/Miltchola/api_games_backend"],
    ],
  },
  {
    id: "florir",
    title: "Florir",
    num: "03",
    tag: "Full Stack",
    tagClr: "#60a5fa",
    subtitle: { pt: "E-commerce de floricultura", en: "Flower shop e-commerce" },
    desc: {
      pt: "E-commerce completo de floricultura com painel administrativo, autenticação JWT e API RESTful documentada com Swagger.",
      en: "Complete flower shop e-commerce with admin panel, JWT authentication and RESTful API with Swagger docs.",
    },
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [
      ["Site", "https://florir-website-front.vercel.app/"],
      ["Front", "https://github.com/Miltchola/florir-website-front"],
      ["Back", "https://github.com/Miltchola/florir-website-back"],
    ],
  },
  {
    id: "etlboxd",
    title: "Pipeline ETL TMDB",
    num: "04",
    tag: "Eng. Dados",
    tagClr: "#10b981",
    tags: ["Eng. Dados"],
    subtitle: { pt: "Pipeline ETL pessoal", en: "Personal ETL pipeline" },
    desc: {
      pt: "Pipeline ETL em Python com Pandas que extrai dados de filmes via API TMDB, realiza transformações e carregamento em Data Warehouse. Dashboard analítico no Power BI com visualizações avançadas, cálculos DAX e Power Queries para análise cinematográfica.",
      en: "ETL pipeline in Python with Pandas that extracts movie data from TMDB API, performs transformations and loads into Data Warehouse. Analytical Power BI dashboard with advanced visualizations, DAX calculations and Power Queries for film analysis.",
    },
    stack: ["Python", "Pandas", "TMDB API", "Power BI", "PostgreSQL", "DAX"],
    links: [["GitHub", "https://github.com/luccaspino/ETL_TMDB"]],
  },
  {
    id: "impostor",
    title: "ImpostorGame",
    num: "05",
    tag: "WebSocket",
    tagClr: "#fff700",
    subtitle: { pt: "Jogo de dedução social", en: "Social deduction game" },
    desc: {
      pt: "Jogo multiplayer de dedução social com papéis secretos, rodadas de votação e lógica de eliminação.",
      en: "Multiplayer social deduction game with secret roles, voting rounds and elimination logic.",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      ["Site", "https://impostorbr.onrender.com"],
      ["GitHub", "https://github.com/luccaspino/ImpostorGame"],
    ],
  },
];

export const EXP: Record<Lang, ExperienceItem[]> = {
  pt: [
    {
      company: "SoftExpert",
      role: "Engenheiro de Software Jr.",
      period: "Jun 2026 - Atual",
      location: "Brasil",
      bullets: [
        "Automação e Back-end: Reduzi em 71% o tempo de processamento de projetos ao desenvolver RPAs totalmente automatizados em Python com Selenium e APIs em FastAPI, integrados a sistemas ERP.",
        "Integração de Sistemas: Centralizei 10 fluxos operacionais em um único chatbot desenvolvido em Node.js, integrado a sistemas ERP, WhatsApp via Twilio e Amazon SQS para processamento assíncrono de mensagens.",
        "IA e AWS: Desenvolvo agentes de IA com arquitetura RAG e soluções de processamento inteligente de documentos (IDP), utilizando Amazon S3, DynamoDB, API Gateway, Lambda, RDS e Bedrock.",
      ],
    },
    {
      company: "RSE - Gerenciamento de Risco e Sustentabilidade",
      role: "Estagiário de Engenharia de Software",
      period: "Mar 2024 - Mar 2026",
      location: "Remoto",
      bullets: [
        "Automação de Processos: Desenvolvi fluxos automatizados utilizando Python para integração de dados e suporte à decisão, impactando e otimizando as operações de 86% dos setores da empresa.",
        "Desenvolvimento de Sistemas: Projetei e implementei o portal interno e aplicativos de gestão de projetos (Logística e Reembolso) com Node.js e TypeScript, resultando em um ganho de 66% na eficiência dos fluxos ao unificar processos.",
        "Gestão de Dados: Modelagem e gerenciamento de bancos de dados SQL (+4.000 registros), com foco na integridade das informações via automação de regras de negócio (functions e procedures).",
        "Agentes de IA (RAG): Auxiliei na criação de agentes de IA baseados em RAG, atuando diretamente na etapa de testes, validação de respostas e refinamento das aplicações.",
        "Cibersegurança: Conduzi auditorias internas de vulnerabilidades e implementei protocolos de segurança que fortaleceram as defesas do domínio corporativo.",
      ],
    },
  ],
  en: [
    {
      company: "SoftExpert",
      role: "Junior Software Engineer",
      period: "Jun 2026 - Present",
      location: "Brazil",
      bullets: [
        "Automation and Back-end: Reduced project processing time by 71% by developing fully automated RPAs in Python with Selenium and FastAPI APIs integrated with ERP systems.",
        "Systems Integration: Consolidated 10 operational workflows into a single Node.js chatbot integrated with ERP systems, WhatsApp via Twilio and Amazon SQS for asynchronous message processing.",
        "AI and AWS: Develop RAG-based AI agents and intelligent document processing (IDP) solutions using Amazon S3, DynamoDB, API Gateway, Lambda, RDS and Bedrock.",
      ],
    },
    {
      company: "RSE - Risk and Sustainability Management",
      role: "Software Engineering Intern",
      period: "Mar 2024 - Mar 2026",
      location: "Remote",
      bullets: [
        "Process Automation: Developed automated workflows using Python for data integration and decision support, impacting and optimizing operations across 86% of the company's departments.",
        "Systems Development: Designed and implemented the internal portal and project management applications (Logistics and Reimbursement) with Node.js and TypeScript, resulting in a 66% efficiency gain in workflows by unifying processes.",
        "Data Management: Modeled and managed SQL databases (+4,000 records), focusing on information integrity through business rule automation (functions and procedures).",
        "AI Agents (RAG): Assisted in building RAG-based AI agents, working directly on testing, response validation and application refinement.",
        "Cybersecurity: Conducted internal vulnerability audits and implemented security protocols that strengthened corporate domain defenses.",
      ],
    },
  ],
};

export const EDUCATION: Record<Lang, { institution: string; degree: string; period: string }> = {
  pt: {
    institution: "Universidade SENAI CIMATEC",
    degree: "Bacharelado em Engenharia de Computação",
    period: "2022 - Dez 2026 (previsão)",
  },
  en: {
    institution: "SENAI CIMATEC University",
    degree: "Bachelor's Degree in Computer Engineering",
    period: "2022 - Dec 2026 (expected)",
  },
};

export const LANGUAGE_LEVELS: Record<Lang, string[]> = {
  pt: ["Português (Nativo)", "Inglês (Avançado - C1)"],
  en: ["Portuguese (Native)", "English (Advanced - C1)"],
};

export const CERTIFICATIONS: Record<Lang, string[]> = {
  pt: [
    "AWS Certified AI Practitioner",
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning Foundations",
    "Claude Code in Action (Anthropic)",
  ],
  en: [
    "AWS Certified AI Practitioner",
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning Foundations",
    "Claude Code in Action (Anthropic)",
  ],
};

export const UI: Record<Lang, UiCopy> = {
  pt: {
    nav: [
      ["Sobre", "#about"],
      ["Habilidades", "#skills"],
      ["Experiência", "#experience"],
      ["Formação", "#education"],
      ["Projetos", "#projects"],
      ["Contato", "#contact"],
    ],
    subtitle: "Engenharia de Software · 1x certificado pela AWS",
    heroDesc:
      "Engenheiro de Software com mais de 2 anos de experiência em automação, back-end e inteligência artificial, com foco em soluções na AWS. Atuo com Python, FastAPI, Node.js, APIs REST, SOAP e agentes de IA. Graduando em Engenharia de Computação, inglês avançado (C1) e 1x certificado pela AWS.",
    skillsTitle: "Tecnologias",
    expTitle: "Experiência Profissional",
    eduTitle: "Formação Acadêmica",
    degreeLabel: "Graduação",
    langTitle: "Idiomas",
    certTitle: "Certificações",
    projTitle: "Projetos",
    contTitle: "Contato",
    footer: "© 2026 Luccas Pino. Todos os direitos reservados.",
    flipHint: "Passe o mouse",
  },
  en: {
    nav: [
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Experience", "#experience"],
      ["Education", "#education"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ],
    subtitle: "Software Engineering · 1x AWS Certified",
    heroDesc:
      "Software Engineer with over 2 years of experience in automation, back-end development and artificial intelligence, focused on AWS solutions. I work with Python, FastAPI, Node.js, REST APIs, SOAP and AI agents. Computer Engineering undergraduate, advanced English speaker (C1) and 1x AWS Certified.",
    skillsTitle: "Technologies",
    expTitle: "Professional Experience",
    eduTitle: "Academic Background",
    degreeLabel: "Degree",
    langTitle: "Languages",
    certTitle: "Certifications",
    projTitle: "Projects",
    contTitle: "Contact",
    footer: "© 2026 Luccas Pino. All rights reserved.",
    flipHint: "Hover to flip",
  },
};
