// Archivo para gestionar el multiidioma
document.addEventListener('DOMContentLoaded', function() {
  // Inicialización
  let currentLanguage = localStorage.getItem('language') || 'es';
  
  // Si el idioma guardado no está disponible o el detectado no es válido, usar español por defecto
  if (!translations[currentLanguage]) {
    currentLanguage = 'es';
  }
  
  // Combinar traducciones generales con traducciones específicas de página
  const combinedTranslations = {};
  
  // Función para combinar traducciones
  function combineTranslations() {
    // Iterar a través de los idiomas disponibles
    for (const lang in translations) {
      combinedTranslations[lang] = { ...translations[lang] };
      
      // Combinar con traducciones específicas si existen
      if (typeof pageTranslations !== 'undefined' && pageTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...pageTranslations[lang] };
      }
      
      if (typeof experienciasTranslations !== 'undefined' && experienciasTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...experienciasTranslations[lang] };
      }
      
      if (typeof aboutTranslations !== 'undefined' && aboutTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...aboutTranslations[lang] };
      }
      
      if (typeof contactTranslations !== 'undefined' && contactTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...contactTranslations[lang] };
      }
      
      if (typeof legalTranslations !== 'undefined' && legalTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...legalTranslations[lang] };
      }
      
      if (typeof legalTranslations2 !== 'undefined' && legalTranslations2[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...legalTranslations2[lang] };
      }
      
      if (typeof legalTranslations3 !== 'undefined' && legalTranslations3[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...legalTranslations3[lang] };
      }
      
      if (typeof testimoniosTranslations !== 'undefined' && testimoniosTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...testimoniosTranslations[lang] };
      }
      
      if (typeof reservasTranslations !== 'undefined' && reservasTranslations[lang]) {
        combinedTranslations[lang] = { ...combinedTranslations[lang], ...reservasTranslations[lang] };
      }
    }
  }
  
  // Combinar las traducciones al cargar
  combineTranslations();
  
  // Inicializar eventos del selector de idiomas
  initLanguageSelector();
  
  // Aplica el idioma al cargar la página
  setLanguage(currentLanguage);
  
  // Función para cambiar el idioma
  function setLanguage(lang) {
    console.log(`Cambiando idioma a: ${lang}`);
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Actualiza la clase activa en el selector de idiomas
    const langButtons = document.querySelectorAll('[data-language]');
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-language') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Traduce todos los elementos con atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
        // Si el elemento tiene un placeholder, actualizarlo
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', combinedTranslations[lang][key]);
        }
        // Si es un input con type="text", type="email", etc.
        else if (element.tagName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
          element.setAttribute('value', combinedTranslations[lang][key]);
        }
        // Para el resto de elementos, actualizar su contenido
        else {
          element.innerHTML = combinedTranslations[lang][key];
        }
      } else {
        console.log(`No se encontró traducción para la clave: ${key} en el idioma: ${lang}`);
      }
    });
    
    // Traduce contenido específico para testimonios (si existen en la página)
    // Versión modificada para testimonios con clases específicas
    const testimonialTexts = document.querySelectorAll('.testimonial-text, [class*="testimonial"] p');
    if (testimonialTexts.length > 0) {
      testimonialTexts.forEach((element, index) => {
        // Intenta obtener el key del atributo data-i18n primero
        let key = element.getAttribute('data-i18n');
        // Si no tiene atributo, usa el formato estándar
        if (!key) {
          key = `testimonial${index+1}_text`;
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          // No añadir comillas si ya están incluidas en la traducción
          let content = combinedTranslations[lang][key];
          if (!content.startsWith('"') && element.classList.contains('testimonial-text')) {
            content = `"${content}"`;
          }
          element.innerHTML = content;
        }
      });
      
      // Autores de testimonios
      document.querySelectorAll('.author-name, .testimonial-author h5, .testimonial-author-name').forEach((element, index) => {
        let key = element.getAttribute('data-i18n');
        if (!key) {
          key = `testimonial${index+1}_author`;
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          element.innerHTML = combinedTranslations[lang][key];
        }
      });
      
      // Lugares de testimonios
      document.querySelectorAll('.author-info, .testimonial-author p, .testimonial-location').forEach((element, index) => {
        let key = element.getAttribute('data-i18n');
        if (!key) {
          key = `testimonial${index+1}_location`;
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          element.innerHTML = combinedTranslations[lang][key];
        }
      });
      
      // Traducir reseñas - versión mejorada
      document.querySelectorAll('.review-text, .review-content p').forEach((element, index) => {
        let key = element.getAttribute('data-i18n');
        if (!key) {
          key = `review${index+1}_text`;
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          let content = combinedTranslations[lang][key];
          if (!content.startsWith('"') && !element.classList.contains('review-content')) {
            content = `"${content}"`;
          }
          element.innerHTML = content;
        }
      });
      
      // Autores de reseñas
      document.querySelectorAll('.review-author, .review-footer p:first-child').forEach((element, index) => {
        let key = element.getAttribute('data-i18n');
        if (!key) {
          key = `review${index+1}_author`;
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          let content = combinedTranslations[lang][key];
          if (!content.startsWith('-') && element.classList.contains('review-author') && !element.classList.contains('review-footer')) {
            content = `- ${content}`;
          }
          element.innerHTML = content;
        }
      });
      
      // Fuentes de reseñas
      document.querySelectorAll('.review-source-name, .review-source, .review-footer p:last-child').forEach(element => {
        let key = element.getAttribute('data-i18n');
        if (!key) {
          const sourceId = element.getAttribute('data-source');
          if (sourceId) {
            key = `review_source_${sourceId}`;
          } else {
            key = element.textContent.trim().toLowerCase().replace(/\s+/g, '_');
          }
        }
        
        if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
          element.innerHTML = combinedTranslations[lang][key];
        }
      });
    }
    
    // Cambia la dirección de href en los enlaces de políticas si existen versiones traducidas
    document.querySelectorAll('[data-i18n-href]').forEach(element => {
      const key = element.getAttribute('data-i18n-href');
      if (lang !== 'es' && combinedTranslations[lang] && combinedTranslations[lang][key]) {
        element.setAttribute('href', combinedTranslations[lang][key]);
      }
    });
    
    // Actualiza el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Actualizar atributos alt de las imágenes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.getAttribute('data-i18n-alt');
      if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
        element.setAttribute('alt', combinedTranslations[lang][key]);
      }
    });
    
    // Buscar elementos con data-i18n-placeholder para traducir los placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (combinedTranslations[lang] && combinedTranslations[lang][key]) {
        element.setAttribute('placeholder', combinedTranslations[lang][key]);
      }
    });
    
    // Lanzar evento de cambio de idioma para que otras partes del sitio puedan reaccionar
    const languageChangedEvent = new CustomEvent('languageChanged', {
      detail: { language: lang }
    });
    document.dispatchEvent(languageChangedEvent);
    
    console.log('Traducciones aplicadas correctamente');
  }
  
  // Función para inicializar el selector de idiomas
  function initLanguageSelector() {
    console.log('Inicializando selector de idiomas');
    const buttons = document.querySelectorAll('#languageSelector [data-language]');
    
    if (buttons.length === 0) {
      console.error('No se encontraron botones de idioma');
      return;
    }
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-language');
        console.log(`Botón de idioma clickeado: ${lang}`);
        setLanguage(lang);
      });
      
      // Marcar el idioma actual como activo
      if (button.getAttribute('data-language') === currentLanguage) {
        button.classList.add('active');
      }
    });
    
    console.log(`Inicializado ${buttons.length} botones de idioma`);
  }
  
  // Exponer la función setLanguage globalmente
  window.setLanguage = setLanguage;
}); 