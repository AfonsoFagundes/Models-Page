document.addEventListener('DOMContentLoaded', function() {
  const swiperClients = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    allowTouchMove: true,  // Habilita swipe
    pagination: true,      // Sem bullets
    navigation: false,      // Sem setas
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 5 }
    }
  });
});
