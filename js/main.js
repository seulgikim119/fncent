document.addEventListener('DOMContentLoaded', () => {
  let swiper = new Swiper(".sub_slide", {
    spaceBetween: 16,
    slidesPerView: 3,
    watchSlidesProgress: true,
    freeMode: true,
    navigation: {
      nextEl: ".sub_slide .swiper-button-next",
      prevEl: ".sub_slide .swiper-button-prev",
    },
  });
  let swiper2 = new Swiper(".main_visual .swiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    thumbs: {
      swiper: swiper,
    },
  });

  // news slide

  // 위쪽 (싱어 카드) - 기존 그대로
  let swiper3 = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 250,
  });

  // 아래쪽 (액터 카드) - 새로 추가
  let swiper4 = new Swiper(".mySwiper2", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
  });


  //f'media
  //f'media
  let swiper5 = new Swiper(".mySwiper_t", {
    direction: 'vertical',    // ← 세로 방향!
    slidesPerView: 19,    // 또는 보여줄 텍스트 개수 (예: 3)
    spaceBetween: 16,
  });





}); //dom end