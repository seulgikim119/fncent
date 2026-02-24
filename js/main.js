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
  let swiper3 = new Swiper(".news_singer", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 250,
    loop: true,
  });

  // 아래쪽 (액터 카드) - 새로 추가
  let swiper4 = new Swiper(".news_acter", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,

  });


  // F'Media
  //텍스트 스와이퍼
  let swiper5 = new Swiper(".media_right", {
    direction: 'vertical',
    spaceBetween: 60,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
  });

  //썸네일스와이퍼
  let swiper6 = new Swiper(".media_left", {
    direction: 'vertical',
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper5,
    },
  });



}); //dom end