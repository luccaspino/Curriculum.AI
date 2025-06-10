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
