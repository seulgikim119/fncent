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
  let cards_singer = new Swiper(".news_singer", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 250,
  });

  // 아래쪽 (액터 카드) - 새로 추가
  let cards_acter = new Swiper(".news_acter", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,


  });



  let media_video = new Swiper(".media_left", {
    loop: true,
    direction: 'vertical',
    spaceBetween: 16,
    slidesPerView: 1,
<<<<<<< HEAD
    watchSlidesProgress: true,
=======
    freeMode: true,
    // watchSlidesProgress: true,
>>>>>>> 3620646
  });


  let media_txt = new Swiper(".media_right", {
    loop: true,
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: media_video,
    },
  });


  //info 세션
<<<<<<< HEAD
  btn.addEventListener('click', (e) => {
    console.log('버튼이 클릭됨', e);
  });
=======

  let
>>>>>>> 3620646


}); //dom end