document.addEventListener('DOMContentLoaded', () => {
  let swiper = new Swiper(".sub_slide", {
    spaceBetween: 16,
    slidesPerView: 3,
    watchSlidesProgress: true,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".sub_slide .swiper-button-next",
      prevEl: ".sub_slide .swiper-button-prev",
    },
  });
  let swiper2 = new Swiper(".main_visual .swiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
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


  // F'Media
  //텍스트 스와이퍼
  let swiper5 = new Swiper(".mySwiper3", {
    direction: 'vertical',
    spaceBetween: 60,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  //썸네일스와이퍼
  let swiper6 = new Swiper(".mySwiper4", {
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper5,
    },
  });



}); //dom end