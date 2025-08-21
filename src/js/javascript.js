const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const submenuParents = document.querySelectorAll(".navbar li");

// Identifica os li que têm submenu
submenuParents.forEach(li => {
  if (li.querySelector(".submenu")) {
    li.classList.add("has-submenu");
  }
});

// Abrir/fechar menu mobile
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Fechar menu ao clicar em qualquer link (exceto links que abrem submenu no mobile)
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 768 && link.parentElement.classList.contains("has-submenu")) {
      // Se for pai de submenu no mobile → não fecha o menu
      e.preventDefault();
      link.parentElement.classList.toggle("active");
      return;
    }
    // Fecha o menu normalmente
    toggle.classList.remove("active");
    navbar.classList.remove("active");
    submenuParents.forEach(item => item.classList.remove("active"));
  });
});
