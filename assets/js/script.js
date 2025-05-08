/**
 * Viña & Cabaña - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Initialize Swiper - Commented out to avoid duplication with inline initialization
  /*
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  */

  // Scroll to top button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = 'scroll-to-top';
  scrollToTopBtn.style.display = 'none';
  scrollToTopBtn.style.position = 'fixed';
  scrollToTopBtn.style.bottom = '20px';
  scrollToTopBtn.style.right = '20px';
  scrollToTopBtn.style.width = '50px';
  scrollToTopBtn.style.height = '50px';
  scrollToTopBtn.style.borderRadius = '50%';
  scrollToTopBtn.style.backgroundColor = '#722F37';
  scrollToTopBtn.style.color = 'white';
  scrollToTopBtn.style.border = 'none';
  scrollToTopBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  scrollToTopBtn.style.cursor = 'pointer';
  scrollToTopBtn.style.zIndex = '999';
  scrollToTopBtn.style.transition = 'all 0.3s ease';
  
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
    
    // Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('bg-glass');
    } else {
      navbar.classList.remove('bg-glass');
    }
  });

  // Set current year in footer
  document.getElementById('year').innerText = new Date().getFullYear();

  // Parallax effect for sections with data-parallax attribute
  const parallaxElements = document.querySelectorAll('.parallax-window');
  parallaxElements.forEach(element => {
    const imgSrc = element.getAttribute('data-image-src');
    if (imgSrc) {
      element.style.backgroundImage = `url(${imgSrc})`;
      element.style.backgroundAttachment = 'fixed';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
      element.style.backgroundSize = 'cover';
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjusted for navbar height
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || 
         (link.getAttribute('href') === 'index.html' && current === '')) {
        link.classList.add('active');
      }
    });
  });

  // Inicializar el botón de volver arriba
  initBackToTop();
  
  // Inicializar efectos de hover en tarjetas
  initCardHoverEffects();
  
  // Inicializar efectos de scroll
  initScrollEffects();
  
  // Inicializar animaciones para botones
  initButtonAnimations();

  // Añadir clase para animaciones CSS
  document.body.classList.add('loaded');
});

// Función para inicializar el botón de volver arriba
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Mostrar el botón cuando el usuario haga scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('d-block');
            } else {
                backToTopButton.classList.remove('d-block');
            }
        });
        
        // Animar el scroll al hacer clic en el botón
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animación suave para volver arriba
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Función para efectos de hover en tarjetas
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
            
            const cardImg = this.querySelector('.card-img-top');
            if (cardImg) {
                cardImg.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
            
            const cardImg = this.querySelector('.card-img-top');
            if (cardImg) {
                cardImg.style.transform = 'scale(1)';
            }
        });
    });
}

// Función para efectos de scroll
function initScrollEffects() {
    // Usar Intersection Observer para detectar elementos en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observar secciones principales
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observar elementos específicos para animaciones
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Función para animaciones de botones
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.12)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    });
} 