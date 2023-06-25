
  // Función para activar la animación cuando la sección sea visible en el viewport
  function activarAnimacion(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp'); // Agrega las clases de animación
        observer.unobserve(entry.target); // Deja de observar la sección una vez que se ha activado la animación
      }
    });
  }

  
  // Observador de intersección
  const animacionObserver = new IntersectionObserver(activarAnimacion, {
    threshold: 0.5 // Define el porcentaje de visibilidad necesario para activar la animación (0.5 significa al menos el 50% de la sección visible)
  });

  // Selecciona la sección que deseas animar
  const seccionAnimada = document.querySelector('.animar-seccion');

  // Observa la sección para activar la animación cuando sea visible
  animacionObserver.observe(seccionAnimada);

