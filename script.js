document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

function setupMobileFlip() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll(".project-inner").forEach((inner) => {
      inner.classList.add("mobile-flip");
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", function () {
        this.querySelector(".project-inner").classList.toggle("show-back");
      });
    });
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(44, 62, 80, 0.95)";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "var(--primary-color)";
    header.style.padding = "15px 0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setupMobileFlip();
});

window.addEventListener("resize", function () {
  setupMobileFlip();
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Smooth scroll para links de navegação
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

  // Animação de fade-in para elementos quando entram na viewport
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
  });
});

// Objeto com as traduções
const translations = {
  pt: {
    "header.subtitle": "Eng. Computação",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "languages.title": "Idiomas e Tecnologias",
    "languages.languages": "Idiomas",
    "languages.technologies": "Tecnologias",
    "languages.portuguese": "Português (Nativo)",
    "languages.english": "Inglês (Avançado)",
    "about.title": "Sobre",
    "about.description": "Graduando em Engenharia de Computação no SENAI CIMATEC (7° semestre). Entusiasta por tecnologia, IA, modelagem de dados, desenvolvimento fullstack e inovação, mas também por filmes, esportes e jogos.",
    "experience.title": "Experiências",
    "experience.ras.title": "RAS - Robotics and Automation Society",
    "experience.ras.description": "Durante minha capacitação na RAS, participei do programa de trainees, onde tive a oportunidade de aprimorar meus conhecimentos de robótica, automação, microcontroladores e GitHub",
    "experience.rse.title": "RSE Engenharia - Estágio em TI",
    "experience.rse.description": "Atuo na área de inovação e tecnologia, desenvolvendo soluções que integram automação de processos, pesquisa aplicada e desenvolvimento de aplicativos (low-code)",
    "projects.title": "Projetos",
    "projects.viewProject": "Ver Projeto",
    "projects.viewCode": "Código",
    "projects.viewBackend": "Ver Backend",
    "projects.viewFrontend": "Ver Frontend",
    "projects.ticket.title": "Ticket Generator",
    "projects.ticket.description": "Criação de tickets com validações de campos",
    "projects.ticket.fullDescription": "Criação de tickets a partir de um desafio do FrontEnd mentor.",
    "projects.ticket.technologies": "Tecnologias: Html, Css e JavaScript",
    "projects.age.title": "Age Calculator",
    "projects.age.description": "Calculadora de idade",
    "projects.age.fullDescription": "Aplicação na web que calcula a idade exata a partir da data de nascimento, mostrando anos, meses e dias.",
    "projects.age.technologies": "Tecnologias: React, JavaScript, Css",
    "projects.api.title": "API Games",
    "projects.api.description": "API para catalogação de jogos e avaliações.",
    "projects.api.fullDescription": "API de catalogação de jogos",
    "projects.api.technologies": "Tecnologias: React, TypeScript, Css",
    "contact.title": "Contato",
    "footer.rights": "© 2025 Todos os direitos reservados."
  },
  en: {
    "header.subtitle": "Computer Engineering",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "languages.title": "Languages and Technologies",
    "languages.languages": "Languages",
    "languages.technologies": "Technologies",
    "languages.portuguese": "Portuguese (Native)",
    "languages.english": "English (Advanced)",
    "about.title": "About",
    "about.description": "Computer Engineering student at SENAI CIMATEC (7th semester). Enthusiast about technology, AI, data modeling, fullstack development and innovation, but also about movies, sports and games.",
    "experience.title": "Experience",
    "experience.ras.title": "RAS - Robotics and Automation Society",
    "experience.ras.description": "During my training at RAS, I participated in the trainee program, where I had the opportunity to improve my knowledge in robotics, automation, microcontrollers and GitHub",
    "experience.rse.title": "RSE Engineering - IT Internship",
    "experience.rse.description": "I work in the innovation and technology area, developing solutions that integrate process automation, applied research and application development (low-code)",
    "projects.title": "Projects",
    "projects.viewProject": "View Project",
    "projects.viewCode": "Code",
    "projects.viewBackend": "View Backend",
    "projects.viewFrontend": "View Frontend",
    "projects.ticket.title": "Ticket Generator",
    "projects.ticket.description": "Ticket creation with field validations",
    "projects.ticket.fullDescription": "Ticket creation from a FrontEnd mentor challenge.",
    "projects.ticket.technologies": "Technologies: Html, Css and JavaScript",
    "projects.age.title": "Age Calculator",
    "projects.age.description": "Age calculator",
    "projects.age.fullDescription": "Web application that calculates exact age from birth date, showing years, months and days.",
    "projects.age.technologies": "Technologies: React, JavaScript, Css",
    "projects.api.title": "API Games",
    "projects.api.description": "API for game cataloging and reviews.",
    "projects.api.fullDescription": "Game cataloging API",
    "projects.api.technologies": "Technologies: React, TypeScript, Css",
    "contact.title": "Contact",
    "footer.rights": "© 2025 All rights reserved."
  }
};

// Função para atualizar o texto dos elementos
function updateContent(lang) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Adicionar eventos de clique aos botões de idioma
document.querySelectorAll('.tech-item[data-lang]').forEach(item => {
  item.addEventListener('click', () => {
    const lang = item.getAttribute('data-lang');
    updateContent(lang);
    
    // Atualizar classe ativa
    document.querySelectorAll('.tech-item[data-lang]').forEach(el => {
      el.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
