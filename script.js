document.addEventListener('DOMContentLoaded', () => {
  // Traduções
  const translations = {
    pt: {
      "header.subtitle": "Eng. Computação",
      "nav.about": "Sobre",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",
      "about.description": "Graduando em Engenharia de Computação no SENAI CIMATEC (8° semestre). Entusiasta por tecnologia, IA, modelagem de dados, desenvolvimento fullstack e inovação, mas também por filmes, esportes e jogos.",
      "languages.title": "Idiomas e Tecnologias",
      "languages.languages": "Idiomas",
      "languages.portuguese": "Português (Nativo)",
      "languages.english": "Inglês (Avançado - C1)",
      "languages.technologies": "Tecnologias e Competências",
      "experience.title": "Experiências",
      "experience.rse.title": "RSE - Gerenciamento de Risco e Sustentabilidade",
      "experience.rse.date": "Estagiário de Tecnologia da Informação | Mar 2024 - Atual",
  "experience.rse.description": "<ul>\n  <li>Atuação na área de inovação e tecnologia, com foco no desenvolvimento de soluções que integram automação de processos, pesquisa aplicada e desenvolvimento de aplicativos.</li>\n  <li>Automação de processos utilizando Python</li>\n  <li>Desenvolvimento de aplicativos</li>\n  <li>Gerenciamento de banco de dados</li>\n  <li>Otimização de fluxos de trabalho</li>\n  <li>Redução de tarefas manuais</li>\n  <li>Implementação de soluções com foco em praticidade, organização, segurança e inovação</li>\n</ul>",
      "experience.ras.title": "IEE CIMATEC - RAS (Robotics and Automation Society)",
      "experience.ras.date": "Programa de Trainees | Mar 2023 - Dez 2023",
  "experience.ras.description": "<ul>\n  <li>Participação no programa de capacitação do capítulo RAS (Robotics and Automation Society) do IEEE voltado para a Universidade.</li>\n  <li>Aprimoramento em robótica e automação</li>\n  <li>Desenvolvimento de projetos com microcontroladores</li>\n  <li>Programação e versionamento de código com GitHub</li>\n  <li>Trabalho em equipe em projetos de tecnologia</li>\n</ul>",
      "projects.title": "Projetos",
      "projects.games.title": "Plataforma de Avaliação de Jogos",
      "projects.games.subtitle": "Projeto coletivo da disciplina de Desenvolvimento Full Stack (2024)",
      "projects.games.description": "Aplicação para consulta, avaliação e gerenciamento de jogos utilizando API externa.",
      "projects.games.stack": "Stack: React, TypeScript, Node.js, Express, MongoDB",
      "projects.games.features": "Autenticação JWT • Metodologia Scrum",
      "projects.florir.title": "Florir Floricultura",
      "projects.florir.subtitle": "Projeto coletivo da Trilha Técnico Gestor (2025)",
      "projects.florir.description": "Sistema completo de e-commerce para floricultura com painel administrativo.",
      "projects.florir.stack": "Stack: Next.js, TypeScript, Node.js, Express, MongoDB",
      "projects.florir.features": "Autenticação JWT • API RESTful com Swagger",
      "projects.ticket.title": "Ticket Generator",
      "projects.ticket.description": "Sistema de geração de tickets com validações",
      "projects.ticket.fullDescription": "Criação de tickets a partir de um desafio do FrontEnd Mentor.",
      "projects.ticket.technologies": "Tecnologias: HTML, CSS e JavaScript",
      "projects.age.title": "Age Calculator",
      "projects.age.description": "Calculadora de idade precisa",
      "projects.age.fullDescription": "Aplicação que calcula a idade exata a partir da data de nascimento, mostrando anos, meses e dias.",
      "projects.age.technologies": "Tecnologias: React, JavaScript, CSS",
      "projects.viewProject": "Ver Projeto",
      "projects.viewCode": "Código",
      "projects.viewFrontend": "Frontend",
      "projects.viewBackend": "Backend",
      "contact.title": "Contato",
      "footer.rights": "© 2025 Todos os direitos reservados."
    },
    en: {
      "header.subtitle": "Computer Engineering",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "about.description": "Computer Engineering student at SENAI CIMATEC (8th semester). Enthusiast about technology, AI, data modeling, fullstack development and innovation, but also about movies, sports and games.",
      "languages.title": "Languages and Technologies",
      "languages.languages": "Languages",
      "languages.portuguese": "Portuguese (Native)",
      "languages.english": "English (Advanced - C1)",
      "languages.technologies": "Technologies and Skills",
      "experience.title": "Experience",
      "experience.rse.title": "RSE - Risk and Sustainability Management",
      "experience.rse.date": "IT Intern | Mar 2024 - Present",
  "experience.rse.description": "<ul>\n  <li>Work in innovation and technology, focused on developing solutions that integrate process automation, applied research and application development.</li>\n  <li>Process automation using Python</li>\n  <li>Application development</li>\n  <li>Database management</li>\n  <li>Workflow optimization</li>\n  <li>Reduction of manual tasks</li>\n  <li>Implementation of solutions focused on practicality, organization, security and innovation</li>\n</ul>",
      "experience.ras.title": "IEEE CIMATEC - RAS (Robotics and Automation Society)",
      "experience.ras.date": "Trainee Program | Mar 2023 - Dec 2023",
  "experience.ras.description": "<ul>\n  <li>Participation in the RAS (Robotics and Automation Society) traineeship program of the IEEE aimed at the University.</li>\n  <li>Improvement in robotics and automation</li>\n  <li>Development of projects with microcontrollers</li>\n  <li>Programming and code versioning with GitHub</li>\n  <li>Teamwork on technology projects</li>\n</ul>",
      "projects.title": "Projects",
      "projects.games.title": "Game Review Platform",
      "projects.games.subtitle": "Collaborative project from Full Stack Development course (2024)",
      "projects.games.description": "Application for consulting, reviewing and managing games using external API.",
      "projects.games.stack": "Stack: React, TypeScript, Node.js, Express, MongoDB",
      "projects.games.features": "JWT Authentication • Scrum Methodology",
      "projects.florir.title": "Florir Flower Shop",
      "projects.florir.subtitle": "Collaborative project from Technical Manager Track (2025)",
      "projects.florir.description": "Complete e-commerce system for flower shop with admin panel.",
      "projects.florir.stack": "Stack: Next.js, TypeScript, Node.js, Express, MongoDB",
      "projects.florir.features": "JWT Authentication • RESTful API with Swagger",
      "projects.ticket.title": "Ticket Generator",
      "projects.ticket.description": "Ticket generation system with validations",
      "projects.ticket.fullDescription": "Ticket creation from a FrontEnd Mentor challenge.",
      "projects.ticket.technologies": "Technologies: HTML, CSS and JavaScript",
      "projects.age.title": "Age Calculator",
      "projects.age.description": "Precise age calculator",
      "projects.age.fullDescription": "Application that calculates exact age from birth date, showing years, months and days.",
      "projects.age.technologies": "Technologies: React, JavaScript, CSS",
      "projects.viewProject": "View Project",
      "projects.viewCode": "Code",
      "projects.viewFrontend": "Frontend",
      "projects.viewBackend": "Backend",
      "contact.title": "Contact",
      "footer.rights": "© 2025 All rights reserved."
    }
  };

  // Função de tradução
  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // use innerHTML so we can support lists (HTML) in translations
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // Event listeners para bandeiras
  document.querySelectorAll('.tech-item[data-lang]').forEach(item => {
    item.addEventListener('click', () => {
      const lang = item.getAttribute('data-lang');
      updateLanguage(lang);
      
      // Atualizar classe ativa
      document.querySelectorAll('.tech-item[data-lang]').forEach(el => {
        el.classList.remove('active');
      });
      item.classList.add('active');
    });
  });

  // Mobile menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.padding = '10px 0';
      } else {
        header.style.background = 'rgba(26, 26, 46, 0.95)';
        header.style.padding = '15px 0';
      }
    }
  });

  // Animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // Mobile flip
  function setupMobileFlip() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
          const inner = this.querySelector('.project-inner');
          if (inner) {
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
              ? 'rotateY(0deg)' 
              : 'rotateY(180deg)';
          }
        });
      });
    }
  }

  setupMobileFlip();
  window.addEventListener('resize', setupMobileFlip);
});