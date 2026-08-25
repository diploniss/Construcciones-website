document.addEventListener("DOMContentLoaded", () => {
  // 1. Menú desplegable para dispositivos móviles
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // 2. Marcar automáticamente el cuadrado naranja en la página activa
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Cerrar menú mobile al hacer clic en una opción
    link.addEventListener("click", () => {
      if (navMenu) navMenu.classList.remove("active");
    });
  });
});