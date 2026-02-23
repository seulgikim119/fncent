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
  const media_swiper = new Swiper(".mySwiper_t", {
    direction: "vertical",       // 세로 방향
    slidesPerView: 5,            // 한 화면에 5개 보이게
    centeredSlides: true,        // 가운데가 활성
    loop: true,                  // 무한 반복
    speed: 600,                  // 이동 속도
    grabCursor: true,            // 마우스 드래그 커서
    simulateTouch: true,         // 데스크탑에서도 드래그

  });





}); //dom end