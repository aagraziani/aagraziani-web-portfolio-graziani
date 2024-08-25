document.addEventListener("DOMContentLoaded", function () {
  // Función de animación personalizada para scroll suave
  function smoothScroll(target, duration) {
    let targetPosition = document.querySelector(target).offsetTop;
    let startPosition = window.scrollY; // Usamos window.scrollY en lugar de window.pageYOffset
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Scroll suave para los enlaces de navegación
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"), 2000); // 2000 ms = 2 segundos
    });
  });

  // Botón Scroll to Top
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Mostrar el botón cuando se desplaza hacia abajo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Usamos window.scrollY en lugar de window.pageYOffset
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Scroll suave al hacer clic en el botón
  scrollToTopBtn.addEventListener("click", () => {
    smoothScroll("body", 2000); // 2000 ms = 2 segundos
  });
});
