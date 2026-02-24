document.addEventListener('DOMContentLoaded', () => {

    //햄버거 메뉴 클릭시 header에 on 클래스 토글
    const $ham = document.querySelector('#hamMenu'); // .ham -> #hamMenu 로 수정
    const $header = document.querySelector('header');
    $ham.addEventListener('click', () => {
        $header.classList.toggle('on');
        document.body.classList.toggle('rock');
    });

    //메뉴 li들에 순차적 delay 주기
    const gnbItems = document.querySelectorAll('header nav ul.gnb>li'); // 경로 최신화
    gnbItems.forEach((li, index) => {
        li.style.transitionDelay = `${0.2 * (index + 1)}s`;
    })

    //스크롤시 header 색상 바꾸기, blur 바꾸기 + 방향 감지해서 헤더 숨기기
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const st = window.scrollY;

        // 스크롤 다운 시 헤더 숨김, 스크롤 업 시 헤더 보임
        if (st > lastScrollY && st > 80) {
            $header.classList.add('hide');
        } else {
            $header.classList.remove('hide');
        }

        // 스크롤 시 배경색 변경 (기존 기능)
        if (st >= 80) {
            $header.classList.add('sc');
        } else {
            $header.classList.remove('sc');
        }

        lastScrollY = st;
    });

});//dom end
