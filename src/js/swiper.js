const swiperClients = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  allowTouchMove: true,  // habilita deslizar com dedo/mouse
  pagination: {
    el: ".swiper-pagination", // referência à div correta
    clickable: true           // permite clicar nas bolinhas
  },
  navigation: false,         // sem setas
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 5 }
  }
});
